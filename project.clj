(defproject huli "0.1.0"
  :description "Autocomplete (typeahead) widget based on David Nolen's blog post."
  :url "https://github.com/johnthethird/huli"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [ring "1.2.1"]
                 [hiccups "0.3.0"]
                 [ring.middleware.jsonp "0.1.4"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/core.match "0.2.1"]
                 ]
  :plugins [[lein-cljsbuild "1.0.2"]
            [lein-ring "0.8.10"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"]
  :cljsbuild {
    :builds {
      :dev {
        :source-paths ["src/cljs"]
        :compiler {:output-dir "resources/public/js/huli-dev"
                   :output-to "resources/public/js/huli-dev/huli-dev.js"
                   :source-map "resources/public/js/huli-dev/huli-dev.js.map"
                   ;:source-map-path "js/huli-dev"
                   :optimizations :none
                   :output-wrapper false
                   :externs []
                   :libs []
                   :pretty-print true}}
      :prod {
        :source-paths ["src/cljs"]
        :compiler {:output-to "resources/public/js/huli-0.1.min.js"
                   :optimizations :advanced
                   ;:externs []
                   ;:libs []
                   :pretty-print false}}
    }
  }
  :main huli.server
  :ring {:handler huli.server/app})

