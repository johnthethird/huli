(ns huli.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.middleware.params :as params]
            [ring.util.response :as response]
            [ring.middleware.jsonp :as jsonp]
            [clojure.data.json :as json])
  (:gen-class))

(defn- get-param [request param]
  (or (get-in request [:params (keyword param)])
      (get-in request [:params (name    param)])))

(def states [["AL" "Alabama"] ["AK" "Alaska"] ["AS" "American Samoa"] ["AZ" "Arizona"] ["AR" "Arkansas"] ["CA" "California"] ["CO" "Colorado"] ["CT" "Connecticut"] ["DE" "Delaware"] ["DC" "District Of Columbia"] ["FM" "Federated States Of Micronesia"] ["FL" "Florida"] ["GA" "Georgia"] ["GU" "Guam"] ["HI" "Hawaii"] ["ID" "Idaho"] ["IL" "Illinois"] ["IN" "Indiana"] ["IA" "Iowa"] ["KS" "Kansas"] ["KY" "Kentucky"] ["LA" "Louisiana"] ["ME" "Maine"] ["MH" "Marshall Islands"] ["MD" "Maryland"] ["MA" "Massachusetts"] ["MI" "Michigan"] ["MN" "Minnesota"] ["MS" "Mississippi"] ["MO" "Missouri"] ["MT" "Montana"] ["NE" "Nebraska"] ["NV" "Nevada"] ["NH" "New Hampshire"] ["NJ" "New Jersey"] ["NM" "New Mexico"] ["NY" "New York"] ["NC" "North Carolina"] ["ND" "North Dakota"] ["MP" "Northern Mariana Islands"] ["OH" "Ohio"] ["OK" "Oklahoma"] ["OR" "Oregon"] ["PW" "Palau"] ["PA" "Pennsylvania"] ["PR" "Puerto Rico"] ["RI" "Rhode Island"] ["SC" "South Carolina"] ["SD" "South Dakota"] ["TN" "Tennessee"] ["TX" "Texas"] ["UT" "Utah"] ["VT" "Vermont"] ["VI" "Virgin Islands"] ["VA" "Virginia"] ["WA" "Washington"] ["WV" "West Virginia"] ["WI" "Wisconsin"] ["WY" "Wyoming"]])

(def states-flat (into [] (map #(second %) states )))

(defn filter-states [q]
  (filter #(re-matches (re-pattern (str "(?i).*" q ".*")) (nth % 1)) states))

(defn filter-states-flat [q]
  (filter #(re-matches (re-pattern (str "(?i).*" q ".*")) %) states-flat))

(defn search-states [request filter-fn]
  (-> (json/write-str (filter-fn (get-param request :q)))
      (response/response)
      (response/content-type "application/json")
  ))

(defn handler [request]
  (case (:uri request)
    "/" (response/redirect "/autocomplete.html")
    "/states.json" (search-states request filter-states)
    "/states-flat.json" (search-states request filter-states-flat)
  ))

(def app
  (-> handler
    (jsonp/wrap-json-with-padding)
    (params/wrap-params)
    (resources/wrap-resource "public")))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))

