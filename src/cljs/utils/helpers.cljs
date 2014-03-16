(ns utils.helpers)

(defn frak [obj] (.log js/console (clj->js obj)))

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

(defn fn-or-s [fors & args]
  "Execute fors with args, or return fors if it is a string"
  (if (fn? fors)
    (fors args)
    (str fors)))

(defn getkey-or-compute-val [fors obj]
  "Execute fors with obj, or look for :fors key in obj"
  (if (fn? fors)
    (fors obj)
    ((keyword fors) obj)))

(defn remove-nils [m]
  (apply dissoc
    m
    (for [[k v] m :when (nil? v)] k)))
