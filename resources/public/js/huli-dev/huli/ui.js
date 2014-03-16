// Compiled by ClojureScript 0.0-2173
goog.provide('huli.ui');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('utils.helpers');
goog.require('goog.events');
goog.require('utils.reactive');
goog.require('utils.reactive');
goog.require('goog.events.EventType');
goog.require('utils.dom');
goog.require('clojure.string');
goog.require('hiccups.runtime');
goog.require('goog.userAgent');
goog.require('hiccups.runtime');
goog.require('clojure.string');
goog.require('utils.helpers');
goog.require('goog.events');
goog.require('utils.dom');
huli.ui.data__GT_attrs = (function data__GT_attrs(data){return cljs.core.reduce.call(null,(function (m,p__174748){var vec__174749 = p__174748;var k = cljs.core.nth.call(null,vec__174749,0,null);var v = cljs.core.nth.call(null,vec__174749,1,null);return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,[cljs.core.str("data-"),cljs.core.str(cljs.core.name.call(null,k))].join('')),v);
}),cljs.core.PersistentArrayMap.EMPTY,data);
});
/**
* @param {...*} var_args
*/
huli.ui.classes = (function() { 
var classes__delegate = function (names){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",1867525016),clojure.string.join.call(null," ",names)], null);
};
var classes = function (var_args){
var names = null;if (arguments.length > 0) {
  names = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return classes__delegate.call(this,names);};
classes.cljs$lang$maxFixedArity = 0;
classes.cljs$lang$applyTo = (function (arglist__174750){
var names = cljs.core.seq(arglist__174750);
return classes__delegate(names);
});
classes.cljs$core$IFn$_invoke$arity$variadic = classes__delegate;
return classes;
})()
;
huli.ui.show_empty = (function show_empty(dataset){return [cljs.core.str((function (){var attrs174752 = huli.ui.classes.call(null,"huli-empty");if(cljs.core.map_QMARK_.call(null,attrs174752))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs174752))),cljs.core.str(">"),cljs.core.str("Nothing Found"),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs174752)),cljs.core.str("Nothing Found"),cljs.core.str("</li>")].join('');
}
})())].join('');
});
huli.ui.completion_template = (function completion_template(completion){return [cljs.core.str(((typeof completion === 'string')?[cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#"], null),completion], null))))].join(''):[cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.assoc.call(null,huli.ui.data__GT_attrs.call(null,cljs.core.js__GT_clj.call(null,completion.data)),new cljs.core.Keyword(null,"href","href",1017115293),"#"),completion.name], null))))].join('')))].join('');
});
huli.ui.show_suggestions = (function show_suggestions(dataset){return [cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var header = utils.helpers.fn_or_s.call(null,new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(dataset),dataset);if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,header)))
{return header;
} else
{return null;
}
})())),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var data = new cljs.core.Keyword(null,"source-data","source-data",882603406).cljs$core$IFn$_invoke$arity$1(dataset);if(cljs.core.seq.call(null,data))
{return cljs.core.map.call(null,(function (p1__174753_SHARP_){return huli.ui.show_suggestion.call(null,dataset,p1__174753_SHARP_);
}),data);
} else
{return utils.helpers.fn_or_s.call(null,new cljs.core.Keyword(null,"empty","empty",1110538431).cljs$core$IFn$_invoke$arity$1(dataset),dataset);
}
})())),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var footer = utils.helpers.fn_or_s.call(null,new cljs.core.Keyword(null,"footer","footer",4040009997).cljs$core$IFn$_invoke$arity$1(dataset),dataset);if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,footer)))
{return footer;
} else
{return null;
}
})()))].join('');
});

//# sourceMappingURL=ui.js.map