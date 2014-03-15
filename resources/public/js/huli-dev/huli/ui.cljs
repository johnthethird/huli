(ns huli.ui
  (:require
    [hiccups.runtime :as hiccupsrt]
    [goog.userAgent :as ua]
    [goog.events :as events]
    [goog.events.EventType]
    [clojure.string :as string]
    [utils.dom :as dom]
    [utils.helpers :as h]
    [utils.reactive :as r])
  (:require-macros [hiccups.core :as hiccups])
)
;; <ul class="huli-name huli-menu">

;;   <li class="huli-ds-1 huli-header">header</li>
;;   <li class="huli-ds-1 huli-empty">No results found</li>
;;   <li class="huli-ds-1 huli-suggestion">blah</li>
;;   <li class="huli-ds-1 huli-suggestion">blah 2</li>
;;   <li class="huli-ds-1 huli-footer">header</li>

;;   <li class="huli-ds-2 huli-header">header</li>
;;   <li class="huli-ds-2 huli-suggestion">blah</li>
;;   <li class="huli-ds-2 huli-suggestion">blah 2</li>
;;   <li class="huli-ds-2 huli-footer">header</li>

;; </ul>

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Helpers

(defn- data->attrs [data]
  (reduce
    (fn [m [k v]]
      (assoc m (keyword (str "data-" (name k))) v))
    {}
  data))

(defn- classes [& names] {:classes (string/join " " names)})

(defn- dataset-class [dataset] (str "huli-ds-" (:name dataset)))

(defn- gen-default-dataset []
  {
    :name (str (rand-int 1000))
    :header nil
    :footer nil
    :empty show-empty
    :title-transform #(or (:title %) %)
  }
)

(defn- datasets-with-defaults [datasets]
  (into [] (map #(merge (gen-default-dataset) %) datasets)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Templates

(hiccups/defhtml show-empty [dataset]
  [:li (classes "huli-empty" (dataset-class dataset)) "Nothing Found"])

(hiccups/defhtml show-suggestion [dataset item]
  ;; Embeds the :data key from item into the DOM el as data attrs
  [:li (merge {:class (dataset-class dataset)} (data->attrs (:data item))) ((:title-transform dataset) item)])

(hiccups/defhtml show-suggestions [dataset]
  (let [header (h/fn-or-s (:header dataset) dataset)]
    (if-not (string/blank? header) header))
  (let [data (:source-data dataset)]
    (if (seq data)
        (string/join " " (map #(show-suggestion dataset %) data))
        (h/fn-or-s (:empty dataset) dataset)))
  (let [footer (h/fn-or-s (:footer dataset) dataset)]
    (if-not (string/blank? footer) footer))
)


(hiccups/defhtml show-menu [datasets]
  [:ul.huli-menu
    (map #(show-suggestions %) (datasets-with-defaults datasets))]
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Dev

(def suggestions-obj
  [
    {:title "How do I", :data {:id 34, :type "Post"}}
    {:title "What is", :data {:id 35, :type "Post"}}
  ]
)


(def suggestions-flat1 ["post 11" "post 2" "post 3"])
(def suggestions-flat2 ["post 4" "post 5" "post 6"])
(def dataset-1
    {
      :name "name1"
      :source-data ["a" "b" "c"]
      :header "<li>HEADER</li>"
      :footer "<li>Footer</li>"
      :empty "<li>woot</li>"
      :title-transform #(or (:title %) %)
    }
)

(def datasets-2
  [
    {
      :source-data []
      :header "<li>HEADER</li>"
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

;; (h/frak (show-dropdown-menu datasets-1)                 )
