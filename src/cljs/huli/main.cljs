(ns huli.main
  (:require-macros
    [cljs.core.async.macros :refer [go]]
    [cljs.core.match.macros :refer [match]])

  (:require
    [huli.ui :as ui]
    [goog.userAgent :as ua]
    [goog.events :as events]
    [goog.events.EventType]
    [clojure.string :as string]
    [cljs.core.match]
    [cljs.core.async :refer [>! <! alts! chan sliding-buffer put!]]
    [utils.dom :as dom]
    [utils.helpers :as h]
    [utils.reactive :as r]))


;; -----------------------------------------------------------------------------
;; Declarations

(def BACKSPACE 8)

(def ENTER 13)
(def UP_ARROW 38)
(def DOWN_ARROW 40)
(def TAB 9)
(def ESC 27)

(def KEYS #{UP_ARROW DOWN_ARROW ENTER TAB ESC})

(defn key->keyword [code]
  (condp = code
    UP_ARROW   :previous
    DOWN_ARROW :next
    ENTER      :select
    TAB        :select
    ESC        :exit))

;; -----------------------------------------------------------------------------
;; Interface representation protocols

(defprotocol IHighlightable
  (-highlight! [list n])
  (-unhighlight! [list n]))

(defprotocol ISelectable
  (-select! [list n])
  (-unselect! [list n]))

(defprotocol IHideable
  (-hide! [view])
  (-show! [view]))

(defprotocol ITextField
  (-set-text! [field txt])
  (-text [field]))

(defprotocol IUIList
  (-set-items! [list items]))

(extend-type js/HTMLInputElement
  ITextField
  (-set-text! [field text]
    (set! (.-value field) text))
  (-text [field]
    (.-value field)))

(extend-type js/HTMLUListElement
  IHighlightable
  (-highlight! [list n]
    (dom/add-class! (nth (dom/by-tag-name list "li") n) "highlighted"))
  (-unhighlight! [list n]
    (dom/remove-class! (nth (dom/by-tag-name list "li") n) "highlighted"))

  ISelectable
  (-select! [list n]
    (dom/add-class! (nth (dom/by-tag-name list "li") n) "selected"))
  (-unselect! [list n]
    (dom/remove-class! (nth (dom/by-tag-name list "li") n) "selected"))

  IHideable
  (-hide! [list]
    (dom/add-class! list "hidden"))
  (-show! [list]
    (dom/remove-class! list "hidden"))

  IUIList
  (-set-items! [list items]
               (h/frak items)
    (->> (for [item items] (str "<li>" item "</li>"))
      (apply str)
      (dom/set-html! list)))

  ICounted
  (-count [list]
    (count (dom/by-tag-name list "li"))))

;; -----------------------------------------------------------------------------
;; Event stream coordination

(defn handle-change-event [list idx key]
  (.log js/console "HANDLE CHANGE EVENT")
  (let [cnt (count list)]
    (match [idx key]
      [:none :next    ] 0
      [:none :previous] (dec cnt)
      [_      :next    ] (mod (inc idx) cnt)
      [_      :previous] (mod (dec idx) cnt))))

(defn handle-event [e cur list]
  (.log js/console "HANDLE EVENT")
  (.log js/console e cur list)
  (when (number? cur)
    (-unhighlight! list cur))
  (if (= e :clear)
    :none
    (let [n (if (number? e) e (handle-change-event list cur e))]
      (-highlight! list n)
      n)))

(defn highlighter
  ([in list] (highlighter in list (chan)))
  ([in list control]
    (.log js/console "HIGHLIGHTER")
    (let [out (chan)]
      (go (loop [highlighted :none]
            (let [[e c] (alts! [in control])]
              (condp = c
                control :done

                in (if (or (#{:next :previous :clear} e) (number? e))
                     (let [highlighted (handle-event e highlighted list)]
                       (>! out highlighted)
                       (recur highlighted))
                     (do (>! out e)
                       (recur highlighted)))))))
      out)))

(defn selector [in list data]
  (.log js/console "SELECTOR")
  (let [out (chan)]
    (go (loop [highlighted :none selected :none]
          (let [e (<! in)]
            (if (= e :select)
              (do
                (when (number? selected)
                  (-unselect! list selected))
                (if (number? highlighted)
                  (do
                    (-select! list highlighted)
                    (>! out [:select (nth data highlighted)]))
                  (>! out [:select highlighted]))
                (recur highlighted highlighted))
              (do
                (>! out e)
                (if (or (= e :none) (number? e))
                  (recur e selected)
                  (recur highlighted selected)))))))
    out))


;; =============================================================================
;; Autocompleter, pure process logic untainted by HTML concerns

(defn menu-proc [select cancel menu data]
  (let [ctrl (chan)
        sel  (->> (selector
                    (highlighter select menu ctrl)
                    menu data)
               (r/filter vector?)
               (r/map second))]
    (go (let [[v sc] (alts! [cancel sel])]
          (do (>! ctrl :exit)
              (if (or (= sc cancel)
                      (= v :none))
              :cancel
              v))))))

(defn autocompleter* [{:keys [focus query select cancel menu] :as opts}]
  (let [out (chan)
        [query raw] (r/split r/throttle-msg? query)]
    (go (loop [items nil focused false]
          (let [[v sc] (alts! [raw cancel focus query select])]
            (cond
              (= sc focus)
              (recur items true)

              (= sc cancel)
              (do (-hide! menu)
                (>! (:query-ctrl opts) (h/now))
                (recur items (not= v :blur)))

              (and focused (= sc query))
              (let [[v c] (alts! [cancel ((:completions opts) (second v))])]
                (if (or (= c cancel) (zero? (count v)))
                  (do (-hide! menu)
                    (recur nil (not= v :blur)))
                  (do
                    (-show! menu)
                    (-set-items! menu v)
                    (recur v focused))))

              (and items (= sc select))
              (let [_ (reset! (:selection-state opts) true)
                    _ (>! (:query-ctrl opts) (h/now))
                    choice (<! ((:menu-proc opts) (r/concat [v] select)
                                 (r/fan-in [raw cancel]) menu items))]
                (reset! (:selection-state opts) false)
                (-hide! menu)
                (if (= choice :cancel)
                  (recur nil (not= v :blur))
                  (do (-set-text! (:input opts) choice)
                    (>! out choice)
                    (recur nil focused))))

              :else
              (recur items focused)))))
    out))

;; =============================================================================
;; HTML Specific Code

(defn less-than-ie9? []
  (and ua/IE (not (ua/isVersion 9))))

(defn relevant-input-keys [kc]
  "Backspace, plus alphanumeric keys, minus the Windows key"
  (or (= kc BACKSPACE)
      (and (> kc 46)
           (not (#{91 92 93} kc)))))

(defn menu-item-event [input menu type]
  (->> (r/listen menu type
         (fn [e]
           (when (dom/in? e menu)
             (.preventDefault e))
           (when (less-than-ie9?)
             (.focus input)))
         (chan (sliding-buffer 1)))
    (r/map
      (fn [e]
        (let [li (dom/parent (.-target e) "li")]
          (h/index-of (dom/by-tag-name menu "li") li))))))

(defn html-menu-events [input menu allow-tab?]
  (r/fan-in
    [;; keyboard menu controls, tab special handling
     (->> (r/listen input :keydown
            (fn [e]
              (when (and @allow-tab?
                         (= (.-keyCode e) TAB))
                (.preventDefault e))))
       (r/map dom/key-event->keycode)
       (r/filter
         (fn [kc]
           (and (KEYS kc)
                (or (not= kc TAB)
                    @allow-tab?))))
       (r/map key->keyword))
     ;; hover events, index of hovered child
     (r/hover-child menu "li")
     (r/listen input :keydown
         (fn [e]
           (when (= (.-keyCode e) ESC)
             (.log js/console "WOOT"))))
     ;; need to handle menu clicks
     (->> (r/cyclic-barrier
            [(menu-item-event input menu :mousedown)
             (menu-item-event input menu :mouseup)])
       (r/filter (fn [[d u]] (= d u)))
       (r/always :select))]))


(defn html-input-events [input]
  "Given an <input> el, returns 2 channels, [filtered removed]. Filtered will contain a stream
  of non-blank user input, and removed will contain any remaining events (which will all be blank)."
  (->> (r/listen input :keydown)
    (r/remove (fn [e] (.-platformModifierKey e)))
    (r/map dom/key-event->keycode)
    (r/filter relevant-input-keys)
    (r/map #(-text input))
    (r/split #(not (string/blank? %)))))

(defn ie-blur [input menu selection-state]
  (let [out (chan)]
    (events/listen input goog.events.EventType.KEYDOWN
      (fn [e]
        (when (and (= (.-keyCode e) TAB) (not @selection-state))
          (put! out (h/now)))))
    (events/listen js/document.body goog.events.EventType.MOUSEDOWN
      (fn [e]
        (when-not (some #(dom/in? e %) [menu input])
          (put! out (h/now)))))
    out))

(defn html-autocompleter [input menu completions throttle]
  (let [selection-state (atom false)
        query-ctrl (chan)
        [filtered removed] (html-input-events input)]
    (when (less-than-ie9?)
      (events/listen menu goog.events.EventType.SELECTSTART
        (fn [e] false)))
    (-set-text! input "")
    (autocompleter*
      {:focus (r/always :focus (r/listen input :focus))
       :query (r/throttle* (r/distinct filtered) throttle (chan) query-ctrl)
       :query-ctrl query-ctrl
       :select (html-menu-events input menu selection-state)
       :cancel (r/fan-in
                 [removed
                  (r/always :blur
                    (if-not (less-than-ie9?)
                      (r/listen input :blur)
                      (ie-blur input menu selection-state)))])
       :input input
       :menu menu
       :menu-proc menu-proc
       :completions completions
       :selection-state selection-state})))

(defn url->query [url transform]
  "Returns a fn that takes a url, retrieves a JSON response, and uses transform
   fn to extract the completion data."
  (fn [query]
    (go (map transform (<! (r/jsonp (str url query)))))))

;; =============================================================================
;; Public Interface

(def suggestions-obj
  [
    {:title "How do I", :data {:id 34, :type "Post"}}
    {:title "What is", :data {:id 35, :type "Post"}}
  ]
)


(def suggestions-flat1 ["post 11" "post 2" "post 3"])
(def suggestions-flat2 ["post 4" "post 5" "post 6"])
(def datasets-1
  [
    {
      :source-data suggestions-flat1
      :header "<li class='huli-header'>HEADER</li>"
      :footer "<li class='huli-footer'>FOOT</li>"
      :empty "<li>woot</li>"
    }
    {
      :source-data suggestions-flat2
    }
    {
      :source-data suggestions-obj
    }
  ]
)

(defn ^:export autocomplete [js-opts]
  (let [input-id (.-inputId js-opts)
        url (.-url js-opts)
        transform (or (.-transform js-opts) #(or % ""))
        menu-el (dom/insert-sibling (dom/html (ui/show-menu datasets-1)) (dom/by-id input-id))
        ac (html-autocompleter
             (dom/by-id input-id)
             menu-el
             (url->query url transform ) 750)]


    (go (while true (<! ac)))))

