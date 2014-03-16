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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Helpers

(defn- data->attrs [data]
  (reduce
    (fn [m [k v]]
      (assoc m (keyword (str "data-" (name k))) v))
    {}
  data))

(defn- classes [& names] {:classes (string/join " " names)})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Templates

(hiccups/defhtml show-empty [dataset]
  [:li (classes "huli-empty") "Nothing Found"])

(hiccups/defhtml completion-template [completion]
  (if (string? completion)
    (vec [:a {:href "#"} completion])
    (vec [:a (assoc (data->attrs (js->clj (.-data completion))) :href "#") (.-name completion)])))

(hiccups/defhtml show-suggestions [dataset]
  (let [header (h/fn-or-s (:header dataset) dataset)]
    (if-not (string/blank? header) header))
  (let [data (:source-data dataset)]
    (if (seq data)
        (map #(show-suggestion dataset %) data)
        (h/fn-or-s (:empty dataset) dataset)))
  (let [footer (h/fn-or-s (:footer dataset) dataset)]
    (if-not (string/blank? footer) footer))
)


