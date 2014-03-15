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
huli.ui.data__GT_attrs = (function data__GT_attrs(data){return cljs.core.reduce.call(null,(function (m,p__33713){var vec__33714 = p__33713;var k = cljs.core.nth.call(null,vec__33714,0,null);var v = cljs.core.nth.call(null,vec__33714,1,null);return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,[cljs.core.str("data-"),cljs.core.str(cljs.core.name.call(null,k))].join('')),v);
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
classes.cljs$lang$applyTo = (function (arglist__33715){
var names = cljs.core.seq(arglist__33715);
return classes__delegate(names);
});
classes.cljs$core$IFn$_invoke$arity$variadic = classes__delegate;
return classes;
})()
;
huli.ui.dataset_class = (function dataset_class(dataset){return [cljs.core.str("huli-ds-"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(dataset))].join('');
});
huli.ui.gen_default_dataset = (function gen_default_dataset(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str(cljs.core.rand_int.call(null,1000))].join(''),new cljs.core.Keyword(null,"header","header",4087600639),null,new cljs.core.Keyword(null,"footer","footer",4040009997),null,new cljs.core.Keyword(null,"empty","empty",1110538431),huli.ui.show_empty,new cljs.core.Keyword(null,"title-transform","title-transform",3624228265),(function (p1__33716_SHARP_){var or__3443__auto__ = new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(p1__33716_SHARP_);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return p1__33716_SHARP_;
}
})], null);
});
huli.ui.datasets_with_defaults = (function datasets_with_defaults(datasets){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__33717_SHARP_){return cljs.core.merge.call(null,huli.ui.gen_default_dataset.call(null),p1__33717_SHARP_);
}),datasets));
});
huli.ui.show_empty = (function show_empty(dataset){return [cljs.core.str((function (){var attrs33719 = huli.ui.classes.call(null,"huli-empty",huli.ui.dataset_class.call(null,dataset));if(cljs.core.map_QMARK_.call(null,attrs33719))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs33719))),cljs.core.str(">"),cljs.core.str("Nothing Found"),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33719)),cljs.core.str("Nothing Found"),cljs.core.str("</li>")].join('');
}
})())].join('');
});
huli.ui.show_suggestion = (function show_suggestion(dataset,item){return [cljs.core.str((function (){var attrs33721 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),huli.ui.dataset_class.call(null,dataset)], null),huli.ui.data__GT_attrs.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(item)));if(cljs.core.map_QMARK_.call(null,attrs33721))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs33721))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"title-transform","title-transform",3624228265).cljs$core$IFn$_invoke$arity$1(dataset).call(null,item))),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33721)),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"title-transform","title-transform",3624228265).cljs$core$IFn$_invoke$arity$1(dataset).call(null,item))),cljs.core.str("</li>")].join('');
}
})())].join('');
});
huli.ui.show_suggestions = (function show_suggestions(dataset){return [cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var header = utils.helpers.fn_or_s.call(null,new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(dataset),dataset);if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,header)))
{return header;
} else
{return null;
}
})())),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var data = new cljs.core.Keyword(null,"source-data","source-data",882603406).cljs$core$IFn$_invoke$arity$1(dataset);if(cljs.core.seq.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__33722_SHARP_){return huli.ui.show_suggestion.call(null,dataset,p1__33722_SHARP_);
}),data));
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
huli.ui.show_menu = (function show_menu(datasets){return [cljs.core.str((function (){var attrs33725 = cljs.core.map.call(null,(function (p1__33723_SHARP_){return huli.ui.show_suggestions.call(null,p1__33723_SHARP_);
}),huli.ui.datasets_with_defaults.call(null,datasets));if(cljs.core.map_QMARK_.call(null,attrs33725))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),"huli-menu"], null),attrs33725))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"huli-menu\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33725)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
huli.ui.suggestions_obj = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"How do I",new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),34,new cljs.core.Keyword(null,"type","type",1017479852),"Post"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"What is",new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),35,new cljs.core.Keyword(null,"type","type",1017479852),"Post"], null)], null)], null);
huli.ui.suggestions_flat1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post 11","post 2","post 3"], null);
huli.ui.suggestions_flat2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post 4","post 5","post 6"], null);
huli.ui.dataset_1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1017277949),"name1",new cljs.core.Keyword(null,"source-data","source-data",882603406),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),new cljs.core.Keyword(null,"header","header",4087600639),"<li>HEADER</li>",new cljs.core.Keyword(null,"footer","footer",4040009997),"<li>Footer</li>",new cljs.core.Keyword(null,"empty","empty",1110538431),"<li>woot</li>",new cljs.core.Keyword(null,"title-transform","title-transform",3624228265),(function (p1__33726_SHARP_){var or__3443__auto__ = new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(p1__33726_SHARP_);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return p1__33726_SHARP_;
}
})], null);
huli.ui.datasets_2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-data","source-data",882603406),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"header","header",4087600639),"<li>HEADER</li>",new cljs.core.Keyword(null,"empty","empty",1110538431),"<li>woot</li>"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-data","source-data",882603406),huli.ui.suggestions_flat2], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-data","source-data",882603406),huli.ui.suggestions_obj], null)], null);

//# sourceMappingURL=ui.js.map