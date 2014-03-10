(ns huli.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.middleware.params :as params]
            [ring.util.response :as response]
            [ring.middleware.jsonp :as jsonp]
            [clojure.data.json :as json])
  (:gen-class))

(def data1 '[foo bar baz])

(defn handler [request]
  (case (:uri request)
    "/" (response/redirect "/autocomplete.html")
    "/data1.json" (-> (json/write-str data1)
                      (response/response)
                      (response/content-type "application/json")

                  )

  ))

(def app
  (-> handler
    (jsonp/wrap-json-with-padding)
    (params/wrap-params)
    (resources/wrap-resource "public")))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))

