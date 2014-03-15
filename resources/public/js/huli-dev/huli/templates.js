// Compiled by ClojureScript 0.0-2173
goog.provide('huli.templates');
goog.require('cljs.core');
goog.require('utils.helpers');
goog.require('utils.helpers');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
huli.templates.show_dropdown_menu = (function show_dropdown_menu(datasets){return [cljs.core.str((function (){var attrs12423 = cljs.core.map.call(null,(function (p1__12421_SHARP_){return huli.templates.suggestions.call(null,new cljs.core.Keyword(null,"source-data","source-data",882603406).cljs$core$IFn$_invoke$arity$1(p1__12421_SHARP_));
}),datasets);if(cljs.core.map_QMARK_.call(null,attrs12423))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),"tt-dropdown-menu"], null),attrs12423))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span class=\"tt-dropdown-menu\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs12423)),cljs.core.str("</span>")].join('');
}
})())].join('');
});
huli.templates.show_dataset = (function show_dataset(dataset){return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("tt-dataset-"),cljs.core.str(cljs.core.List.EMPTY)].join('')], null))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
});
huli.templates.show_empty = (function show_empty(query){return [cljs.core.str("<span>Nothing Found</span>")].join('');
});
huli.templates.show_suggestion = (function show_suggestion(title){return [cljs.core.str((function (){var attrs12429 = title;if(cljs.core.map_QMARK_.call(null,attrs12429))
{return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),"tt-suggestion"], null),attrs12429))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else
{return [cljs.core.str("<div class=\"tt-suggestion\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs12429)),cljs.core.str("</div>")].join('');
}
})())].join('');
});
huli.templates.show_suggestions = (function show_suggestions(data){return [cljs.core.str(hiccups.runtime.render_html.call(null,utils.helpers.frak.call(null,data))),cljs.core.str(((cljs.core.seq.call(null,data))?[cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,huli.templates.suggestion,data)))].join(''):[cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.empty.call(null)))].join('')))].join('');
});

//# sourceMappingURL=templates.js.map