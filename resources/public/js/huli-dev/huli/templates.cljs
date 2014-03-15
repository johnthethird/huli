(ns huli.templates
  (:require
    [hiccups.runtime :as hiccupsrt]
    [utils.helpers :as h])
  (:require-macros [hiccups.core :as hiccups])
)

(hiccups/defhtml show-dropdown-menu [datasets]
  [:span.tt-dropdown-menu
    (map #(suggestions (:source-data %)) datasets)]
                 )

(hiccups/defhtml show-dataset [dataset]
  [:div {:class (str "tt-dataset-" ())}])

(hiccups/defhtml show-empty [query]
  [:span "Nothing Found"])

(hiccups/defhtml show-suggestion [title]
  [:div.tt-suggestion title])

(hiccups/defhtml show-suggestions [data]
  (h/frak data)
  (if (seq data)
    (map suggestion data)
    (empty)
  )
)
