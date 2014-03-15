(ns utils.helpers)

(defn now [] (js/Date.))

(defn index-of [xs x]
  (let [len (count xs)]
    (loop [i 0]
      (if (< i len)
        (if (= (nth xs i) x)
          i
          (recur (inc i)))
        -1))))

(defn error? [x]
  (instance? js/Error x))

(defn throw-err [x]
  (if (error? x)
    (throw x)
    x))

(defn frak [obj] (.log js/console (clj->js obj)))

(defn fn-or-s [fors & args]
  "Execute fors with args, or return fors if it is a string"
  (if (fn? fors)
    (fors args)
    (str fors)))

