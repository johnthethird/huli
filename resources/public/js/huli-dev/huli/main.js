// Compiled by ClojureScript 0.0-2173
goog.provide('huli.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.userAgent');
goog.require('utils.helpers');
goog.require('goog.events');
goog.require('utils.reactive');
goog.require('utils.reactive');
goog.require('goog.events.EventType');
goog.require('huli.ui');
goog.require('utils.dom');
goog.require('clojure.string');
goog.require('goog.userAgent');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('utils.helpers');
goog.require('goog.events');
goog.require('utils.dom');
goog.require('huli.ui');
huli.main.BACKSPACE = 8;
huli.main.ENTER = 13;
huli.main.UP_ARROW = 38;
huli.main.DOWN_ARROW = 40;
huli.main.TAB = 9;
huli.main.ESC = 27;
huli.main.KEYS = cljs.core.PersistentHashSet.fromArray([huli.main.TAB,huli.main.UP_ARROW,huli.main.DOWN_ARROW,huli.main.ESC,huli.main.ENTER], true);
huli.main.key__GT_keyword = (function key__GT_keyword(code){var pred__174757 = cljs.core._EQ_;var expr__174758 = code;if(cljs.core.truth_(pred__174757.call(null,huli.main.UP_ARROW,expr__174758)))
{return new cljs.core.Keyword(null,"previous","previous",4035096169);
} else
{if(cljs.core.truth_(pred__174757.call(null,huli.main.DOWN_ARROW,expr__174758)))
{return new cljs.core.Keyword(null,"next","next",1017282149);
} else
{if(cljs.core.truth_(pred__174757.call(null,huli.main.ENTER,expr__174758)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__174757.call(null,huli.main.TAB,expr__174758)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__174757.call(null,huli.main.ESC,expr__174758)))
{return new cljs.core.Keyword(null,"exit","exit",1017031824);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__174758)].join('')));
}
}
}
}
}
});
huli.main.IHighlightable = (function (){var obj174761 = {};return obj174761;
})();
huli.main._highlight_BANG_ = (function _highlight_BANG_(list,n){if((function (){var and__3431__auto__ = list;if(and__3431__auto__)
{return list.huli$main$IHighlightable$_highlight_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return list.huli$main$IHighlightable$_highlight_BANG_$arity$2(list,n);
} else
{var x__4070__auto__ = (((list == null))?null:list);return (function (){var or__3443__auto__ = (huli.main._highlight_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._highlight_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHighlightable.-highlight!",list);
}
}
})().call(null,list,n);
}
});
huli.main._unhighlight_BANG_ = (function _unhighlight_BANG_(list,n){if((function (){var and__3431__auto__ = list;if(and__3431__auto__)
{return list.huli$main$IHighlightable$_unhighlight_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return list.huli$main$IHighlightable$_unhighlight_BANG_$arity$2(list,n);
} else
{var x__4070__auto__ = (((list == null))?null:list);return (function (){var or__3443__auto__ = (huli.main._unhighlight_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._unhighlight_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHighlightable.-unhighlight!",list);
}
}
})().call(null,list,n);
}
});
huli.main.ISelectable = (function (){var obj174763 = {};return obj174763;
})();
huli.main._select_BANG_ = (function _select_BANG_(list,n){if((function (){var and__3431__auto__ = list;if(and__3431__auto__)
{return list.huli$main$ISelectable$_select_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return list.huli$main$ISelectable$_select_BANG_$arity$2(list,n);
} else
{var x__4070__auto__ = (((list == null))?null:list);return (function (){var or__3443__auto__ = (huli.main._select_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._select_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelectable.-select!",list);
}
}
})().call(null,list,n);
}
});
huli.main._unselect_BANG_ = (function _unselect_BANG_(list,n){if((function (){var and__3431__auto__ = list;if(and__3431__auto__)
{return list.huli$main$ISelectable$_unselect_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return list.huli$main$ISelectable$_unselect_BANG_$arity$2(list,n);
} else
{var x__4070__auto__ = (((list == null))?null:list);return (function (){var or__3443__auto__ = (huli.main._unselect_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._unselect_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelectable.-unselect!",list);
}
}
})().call(null,list,n);
}
});
huli.main.IHideable = (function (){var obj174765 = {};return obj174765;
})();
huli.main._hide_BANG_ = (function _hide_BANG_(view){if((function (){var and__3431__auto__ = view;if(and__3431__auto__)
{return view.huli$main$IHideable$_hide_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return view.huli$main$IHideable$_hide_BANG_$arity$1(view);
} else
{var x__4070__auto__ = (((view == null))?null:view);return (function (){var or__3443__auto__ = (huli.main._hide_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._hide_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-hide!",view);
}
}
})().call(null,view);
}
});
huli.main._show_BANG_ = (function _show_BANG_(view){if((function (){var and__3431__auto__ = view;if(and__3431__auto__)
{return view.huli$main$IHideable$_show_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return view.huli$main$IHideable$_show_BANG_$arity$1(view);
} else
{var x__4070__auto__ = (((view == null))?null:view);return (function (){var or__3443__auto__ = (huli.main._show_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._show_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-show!",view);
}
}
})().call(null,view);
}
});
huli.main.ITextField = (function (){var obj174767 = {};return obj174767;
})();
huli.main._set_text_BANG_ = (function _set_text_BANG_(field,txt,display_transform,opts){if((function (){var and__3431__auto__ = field;if(and__3431__auto__)
{return field.huli$main$ITextField$_set_text_BANG_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return field.huli$main$ITextField$_set_text_BANG_$arity$4(field,txt,display_transform,opts);
} else
{var x__4070__auto__ = (((field == null))?null:field);return (function (){var or__3443__auto__ = (huli.main._set_text_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._set_text_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITextField.-set-text!",field);
}
}
})().call(null,field,txt,display_transform,opts);
}
});
huli.main._text = (function _text(field){if((function (){var and__3431__auto__ = field;if(and__3431__auto__)
{return field.huli$main$ITextField$_text$arity$1;
} else
{return and__3431__auto__;
}
})())
{return field.huli$main$ITextField$_text$arity$1(field);
} else
{var x__4070__auto__ = (((field == null))?null:field);return (function (){var or__3443__auto__ = (huli.main._text[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._text["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITextField.-text",field);
}
}
})().call(null,field);
}
});
huli.main._clear_BANG_ = (function _clear_BANG_(field){if((function (){var and__3431__auto__ = field;if(and__3431__auto__)
{return field.huli$main$ITextField$_clear_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return field.huli$main$ITextField$_clear_BANG_$arity$1(field);
} else
{var x__4070__auto__ = (((field == null))?null:field);return (function (){var or__3443__auto__ = (huli.main._clear_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._clear_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITextField.-clear!",field);
}
}
})().call(null,field);
}
});
huli.main.IUIList = (function (){var obj174769 = {};return obj174769;
})();
huli.main._set_items_BANG_ = (function _set_items_BANG_(list,items,completion_transform,opts){if((function (){var and__3431__auto__ = list;if(and__3431__auto__)
{return list.huli$main$IUIList$_set_items_BANG_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return list.huli$main$IUIList$_set_items_BANG_$arity$4(list,items,completion_transform,opts);
} else
{var x__4070__auto__ = (((list == null))?null:list);return (function (){var or__3443__auto__ = (huli.main._set_items_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (huli.main._set_items_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUIList.-set-items!",list);
}
}
})().call(null,list,items,completion_transform,opts);
}
});
HTMLInputElement.prototype.huli$main$ITextField$ = true;
HTMLInputElement.prototype.huli$main$ITextField$_set_text_BANG_$arity$4 = (function (field,text,display_transform,opts){var field__$1 = this;return field__$1.value = utils.helpers.getkey_or_compute_val.call(null,display_transform,text);
});
HTMLInputElement.prototype.huli$main$ITextField$_text$arity$1 = (function (field){var field__$1 = this;return field__$1.value;
});
HTMLInputElement.prototype.huli$main$ITextField$_clear_BANG_$arity$1 = (function (field){var field__$1 = this;return field__$1.value = "";
});
HTMLUListElement.prototype.cljs$core$ICounted$ = true;
HTMLUListElement.prototype.cljs$core$ICounted$_count$arity$1 = (function (list){var list__$1 = this;return cljs.core.count.call(null,utils.dom.by_tag_name.call(null,list__$1,"li"));
});
HTMLUListElement.prototype.huli$main$IUIList$ = true;
HTMLUListElement.prototype.huli$main$IUIList$_set_items_BANG_$arity$4 = (function (list,items,completion_transform,opts){var list__$1 = this;return utils.dom.set_html_BANG_.call(null,list__$1,cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__174770_SHARP_){return [cljs.core.str("<li>"),cljs.core.str(p1__174770_SHARP_),cljs.core.str("</li>")].join('');
}),cljs.core.map.call(null,completion_transform,items))));
});
HTMLUListElement.prototype.huli$main$IHideable$ = true;
HTMLUListElement.prototype.huli$main$IHideable$_hide_BANG_$arity$1 = (function (list){var list__$1 = this;return utils.dom.add_class_BANG_.call(null,list__$1,"hidden");
});
HTMLUListElement.prototype.huli$main$IHideable$_show_BANG_$arity$1 = (function (list){var list__$1 = this;return utils.dom.remove_class_BANG_.call(null,list__$1,"hidden");
});
HTMLUListElement.prototype.huli$main$ISelectable$ = true;
HTMLUListElement.prototype.huli$main$ISelectable$_select_BANG_$arity$2 = (function (list,n){var list__$1 = this;return utils.dom.add_class_BANG_.call(null,cljs.core.nth.call(null,utils.dom.by_tag_name.call(null,list__$1,"li"),n),"selected");
});
HTMLUListElement.prototype.huli$main$ISelectable$_unselect_BANG_$arity$2 = (function (list,n){var list__$1 = this;return utils.dom.remove_class_BANG_.call(null,cljs.core.nth.call(null,utils.dom.by_tag_name.call(null,list__$1,"li"),n),"selected");
});
HTMLUListElement.prototype.huli$main$IHighlightable$ = true;
HTMLUListElement.prototype.huli$main$IHighlightable$_highlight_BANG_$arity$2 = (function (list,n){var list__$1 = this;return utils.dom.add_class_BANG_.call(null,cljs.core.nth.call(null,utils.dom.by_tag_name.call(null,list__$1,"li"),n),"highlighted");
});
HTMLUListElement.prototype.huli$main$IHighlightable$_unhighlight_BANG_$arity$2 = (function (list,n){var list__$1 = this;return utils.dom.remove_class_BANG_.call(null,cljs.core.nth.call(null,utils.dom.by_tag_name.call(null,list__$1,"li"),n),"highlighted");
});
huli.main.handle_change_event = (function handle_change_event(list,idx,key){console.log("HANDLE CHANGE EVENT");
var cnt = cljs.core.count.call(null,list);try{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"next","next",1017282149)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,idx,new cljs.core.Keyword(null,"none","none",1017291434)))
{return 0;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e174785){if((e174785 instanceof Error))
{var e__4830__auto__ = e174785;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e174785;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"previous","previous",4035096169)))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,idx,new cljs.core.Keyword(null,"none","none",1017291434)))
{return (cnt - 1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e174786){if((e174786 instanceof Error))
{var e__4830__auto__ = e174786;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e174786;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e174783){if((e174783 instanceof Error))
{var e__4830__auto__ = e174783;if((e__4830__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"next","next",1017282149)))
{return cljs.core.mod.call(null,(idx + 1),cnt);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,key,new cljs.core.Keyword(null,"previous","previous",4035096169)))
{return cljs.core.mod.call(null,(idx - 1),cnt);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e174784){if((e174784 instanceof Error))
{var e__4830__auto____$1 = e174784;if((e__4830__auto____$1 === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(idx),cljs.core.str(" "),cljs.core.str(key)].join('')));
} else
{throw e__4830__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e174784;
} else
{return null;
}
}
}} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e174783;
} else
{return null;
}
}
}});
huli.main.handle_event = (function handle_event(e,cur,list){console.log("HANDLE EVENT");
console.log(e,cur,list);
if(typeof cur === 'number')
{huli.main._unhighlight_BANG_.call(null,list,cur);
} else
{}
if(cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"clear","clear",1108650431)))
{return new cljs.core.Keyword(null,"none","none",1017291434);
} else
{var n = ((typeof e === 'number')?e:huli.main.handle_change_event.call(null,list,cur,e));huli.main._highlight_BANG_.call(null,list,n);
return n;
}
});
huli.main.highlighter = (function() {
var highlighter = null;
var highlighter__2 = (function (in$,list){return highlighter.call(null,in$,list,cljs.core.async.chan.call(null));
});
var highlighter__3 = (function (in$,list,control){console.log("HIGHLIGHTER");
var out = cljs.core.async.chan.call(null);var c__6762__auto___174951 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_174917){var state_val_174918 = (state_174917[1]);if((state_val_174918 === 1))
{var inst_174869 = new cljs.core.Keyword(null,"none","none",1017291434);var state_174917__$1 = (function (){var statearr_174919 = state_174917;(statearr_174919[7] = inst_174869);
return statearr_174919;
})();var statearr_174920_174952 = state_174917__$1;(statearr_174920_174952[2] = null);
(statearr_174920_174952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 2))
{var inst_174872 = [in$,control];var inst_174873 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_174872,null));var state_174917__$1 = state_174917;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_174917__$1,4,inst_174873);
} else
{if((state_val_174918 === 3))
{var inst_174915 = (state_174917[2]);var state_174917__$1 = state_174917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_174917__$1,inst_174915);
} else
{if((state_val_174918 === 4))
{var inst_174877 = (state_174917[8]);var inst_174875 = (state_174917[2]);var inst_174876 = cljs.core.nth.call(null,inst_174875,0,null);var inst_174877__$1 = cljs.core.nth.call(null,inst_174875,1,null);var inst_174881 = cljs.core._EQ_.call(null,control,inst_174877__$1);var state_174917__$1 = (function (){var statearr_174921 = state_174917;(statearr_174921[8] = inst_174877__$1);
(statearr_174921[9] = inst_174876);
return statearr_174921;
})();if(inst_174881)
{var statearr_174922_174953 = state_174917__$1;(statearr_174922_174953[1] = 5);
} else
{var statearr_174923_174954 = state_174917__$1;(statearr_174923_174954[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 5))
{var state_174917__$1 = state_174917;var statearr_174924_174955 = state_174917__$1;(statearr_174924_174955[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_174924_174955[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 6))
{var inst_174877 = (state_174917[8]);var inst_174884 = cljs.core._EQ_.call(null,in$,inst_174877);var state_174917__$1 = state_174917;if(inst_174884)
{var statearr_174925_174956 = state_174917__$1;(statearr_174925_174956[1] = 8);
} else
{var statearr_174926_174957 = state_174917__$1;(statearr_174926_174957[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 7))
{var inst_174913 = (state_174917[2]);var state_174917__$1 = state_174917;var statearr_174927_174958 = state_174917__$1;(statearr_174927_174958[2] = inst_174913);
(statearr_174927_174958[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 8))
{var inst_174876 = (state_174917[9]);var inst_174889 = (state_174917[10]);var inst_174886 = [new cljs.core.Keyword(null,"previous","previous",4035096169),null,new cljs.core.Keyword(null,"clear","clear",1108650431),null,new cljs.core.Keyword(null,"next","next",1017282149),null];var inst_174887 = (new cljs.core.PersistentArrayMap(null,3,inst_174886,null));var inst_174888 = (new cljs.core.PersistentHashSet(null,inst_174887,null));var inst_174889__$1 = inst_174888.call(null,inst_174876);var state_174917__$1 = (function (){var statearr_174928 = state_174917;(statearr_174928[10] = inst_174889__$1);
return statearr_174928;
})();if(cljs.core.truth_(inst_174889__$1))
{var statearr_174929_174959 = state_174917__$1;(statearr_174929_174959[1] = 11);
} else
{var statearr_174930_174960 = state_174917__$1;(statearr_174930_174960[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 9))
{var inst_174877 = (state_174917[8]);var inst_174907 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_174877)].join('');var inst_174908 = (new Error(inst_174907));var inst_174909 = (function(){throw inst_174908})();var state_174917__$1 = state_174917;var statearr_174931_174961 = state_174917__$1;(statearr_174931_174961[2] = inst_174909);
(statearr_174931_174961[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 10))
{var inst_174911 = (state_174917[2]);var state_174917__$1 = state_174917;var statearr_174932_174962 = state_174917__$1;(statearr_174932_174962[2] = inst_174911);
(statearr_174932_174962[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 11))
{var inst_174889 = (state_174917[10]);var state_174917__$1 = state_174917;var statearr_174933_174963 = state_174917__$1;(statearr_174933_174963[2] = inst_174889);
(statearr_174933_174963[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 12))
{var inst_174876 = (state_174917[9]);var inst_174892 = typeof inst_174876 === 'number';var state_174917__$1 = state_174917;var statearr_174934_174964 = state_174917__$1;(statearr_174934_174964[2] = inst_174892);
(statearr_174934_174964[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 13))
{var inst_174894 = (state_174917[2]);var state_174917__$1 = state_174917;if(cljs.core.truth_(inst_174894))
{var statearr_174935_174965 = state_174917__$1;(statearr_174935_174965[1] = 14);
} else
{var statearr_174936_174966 = state_174917__$1;(statearr_174936_174966[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 14))
{var inst_174876 = (state_174917[9]);var inst_174896 = (state_174917[11]);var inst_174869 = (state_174917[7]);var inst_174896__$1 = huli.main.handle_event.call(null,inst_174876,inst_174869,list);var state_174917__$1 = (function (){var statearr_174937 = state_174917;(statearr_174937[11] = inst_174896__$1);
return statearr_174937;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_174917__$1,17,out,inst_174896__$1);
} else
{if((state_val_174918 === 15))
{var inst_174876 = (state_174917[9]);var state_174917__$1 = state_174917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_174917__$1,18,out,inst_174876);
} else
{if((state_val_174918 === 16))
{var inst_174905 = (state_174917[2]);var state_174917__$1 = state_174917;var statearr_174939_174967 = state_174917__$1;(statearr_174939_174967[2] = inst_174905);
(statearr_174939_174967[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 17))
{var inst_174896 = (state_174917[11]);var inst_174898 = (state_174917[2]);var inst_174869 = inst_174896;var state_174917__$1 = (function (){var statearr_174940 = state_174917;(statearr_174940[12] = inst_174898);
(statearr_174940[7] = inst_174869);
return statearr_174940;
})();var statearr_174941_174968 = state_174917__$1;(statearr_174941_174968[2] = null);
(statearr_174941_174968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_174918 === 18))
{var inst_174869 = (state_174917[7]);var inst_174902 = (state_174917[2]);var tmp174938 = inst_174869;var inst_174869__$1 = tmp174938;var state_174917__$1 = (function (){var statearr_174942 = state_174917;(statearr_174942[13] = inst_174902);
(statearr_174942[7] = inst_174869__$1);
return statearr_174942;
})();var statearr_174943_174969 = state_174917__$1;(statearr_174943_174969[2] = null);
(statearr_174943_174969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_174947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_174947[0] = state_machine__6748__auto__);
(statearr_174947[1] = 1);
return statearr_174947;
});
var state_machine__6748__auto____1 = (function (state_174917){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_174917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e174948){if((e174948 instanceof Object))
{var ex__6751__auto__ = e174948;var statearr_174949_174970 = state_174917;(statearr_174949_174970[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_174917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e174948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__174971 = state_174917;
state_174917 = G__174971;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_174917){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_174917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_174950 = f__6763__auto__.call(null);(statearr_174950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___174951);
return statearr_174950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
highlighter = function(in$,list,control){
switch(arguments.length){
case 2:
return highlighter__2.call(this,in$,list);
case 3:
return highlighter__3.call(this,in$,list,control);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
highlighter.cljs$core$IFn$_invoke$arity$2 = highlighter__2;
highlighter.cljs$core$IFn$_invoke$arity$3 = highlighter__3;
return highlighter;
})()
;
huli.main.selector = (function selector(in$,list,data){console.log("SELECTOR");
var out = cljs.core.async.chan.call(null);var c__6762__auto___175142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_175103){var state_val_175104 = (state_175103[1]);if((state_val_175104 === 1))
{var inst_175057 = new cljs.core.Keyword(null,"none","none",1017291434);var inst_175058 = new cljs.core.Keyword(null,"none","none",1017291434);var state_175103__$1 = (function (){var statearr_175105 = state_175103;(statearr_175105[7] = inst_175057);
(statearr_175105[8] = inst_175058);
return statearr_175105;
})();var statearr_175106_175143 = state_175103__$1;(statearr_175106_175143[2] = null);
(statearr_175106_175143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 2))
{var state_175103__$1 = state_175103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_175103__$1,4,in$);
} else
{if((state_val_175104 === 3))
{var inst_175101 = (state_175103[2]);var state_175103__$1 = state_175103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_175103__$1,inst_175101);
} else
{if((state_val_175104 === 4))
{var inst_175061 = (state_175103[9]);var inst_175061__$1 = (state_175103[2]);var inst_175062 = cljs.core._EQ_.call(null,inst_175061__$1,new cljs.core.Keyword(null,"select","select",4402849902));var state_175103__$1 = (function (){var statearr_175107 = state_175103;(statearr_175107[9] = inst_175061__$1);
return statearr_175107;
})();if(inst_175062)
{var statearr_175108_175144 = state_175103__$1;(statearr_175108_175144[1] = 5);
} else
{var statearr_175109_175145 = state_175103__$1;(statearr_175109_175145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 5))
{var inst_175058 = (state_175103[8]);var inst_175064 = typeof inst_175058 === 'number';var state_175103__$1 = state_175103;if(cljs.core.truth_(inst_175064))
{var statearr_175110_175146 = state_175103__$1;(statearr_175110_175146[1] = 8);
} else
{var statearr_175111_175147 = state_175103__$1;(statearr_175111_175147[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 6))
{var inst_175061 = (state_175103[9]);var state_175103__$1 = state_175103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_175103__$1,16,out,inst_175061);
} else
{if((state_val_175104 === 7))
{var inst_175099 = (state_175103[2]);var state_175103__$1 = state_175103;var statearr_175112_175148 = state_175103__$1;(statearr_175112_175148[2] = inst_175099);
(statearr_175112_175148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 8))
{var inst_175058 = (state_175103[8]);var inst_175066 = huli.main._unselect_BANG_.call(null,list,inst_175058);var state_175103__$1 = state_175103;var statearr_175113_175149 = state_175103__$1;(statearr_175113_175149[2] = inst_175066);
(statearr_175113_175149[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 9))
{var state_175103__$1 = state_175103;var statearr_175114_175150 = state_175103__$1;(statearr_175114_175150[2] = null);
(statearr_175114_175150[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 10))
{var inst_175057 = (state_175103[7]);var inst_175069 = (state_175103[2]);var inst_175070 = typeof inst_175057 === 'number';var state_175103__$1 = (function (){var statearr_175115 = state_175103;(statearr_175115[10] = inst_175069);
return statearr_175115;
})();if(cljs.core.truth_(inst_175070))
{var statearr_175116_175151 = state_175103__$1;(statearr_175116_175151[1] = 11);
} else
{var statearr_175117_175152 = state_175103__$1;(statearr_175117_175152[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 11))
{var inst_175057 = (state_175103[7]);var inst_175072 = huli.main._select_BANG_.call(null,list,inst_175057);var inst_175073 = cljs.core.nth.call(null,data,inst_175057);var inst_175074 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_175073];var inst_175075 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_175074,null));var state_175103__$1 = (function (){var statearr_175119 = state_175103;(statearr_175119[11] = inst_175072);
return statearr_175119;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_175103__$1,14,out,inst_175075);
} else
{if((state_val_175104 === 12))
{var inst_175057 = (state_175103[7]);var inst_175079 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_175057];var inst_175080 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_175079,null));var state_175103__$1 = state_175103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_175103__$1,15,out,inst_175080);
} else
{if((state_val_175104 === 13))
{var inst_175057 = (state_175103[7]);var inst_175084 = (state_175103[2]);var tmp175118 = inst_175057;var inst_175057__$1 = tmp175118;var inst_175058 = tmp175118;var state_175103__$1 = (function (){var statearr_175120 = state_175103;(statearr_175120[12] = inst_175084);
(statearr_175120[7] = inst_175057__$1);
(statearr_175120[8] = inst_175058);
return statearr_175120;
})();var statearr_175121_175153 = state_175103__$1;(statearr_175121_175153[2] = null);
(statearr_175121_175153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 14))
{var inst_175077 = (state_175103[2]);var state_175103__$1 = state_175103;var statearr_175122_175154 = state_175103__$1;(statearr_175122_175154[2] = inst_175077);
(statearr_175122_175154[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 15))
{var inst_175082 = (state_175103[2]);var state_175103__$1 = state_175103;var statearr_175124_175155 = state_175103__$1;(statearr_175124_175155[2] = inst_175082);
(statearr_175124_175155[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 16))
{var inst_175061 = (state_175103[9]);var inst_175088 = (state_175103[2]);var inst_175089 = cljs.core._EQ_.call(null,inst_175061,new cljs.core.Keyword(null,"none","none",1017291434));var inst_175090 = typeof inst_175061 === 'number';var inst_175091 = (inst_175089) || (inst_175090);var state_175103__$1 = (function (){var statearr_175127 = state_175103;(statearr_175127[13] = inst_175088);
return statearr_175127;
})();if(cljs.core.truth_(inst_175091))
{var statearr_175128_175156 = state_175103__$1;(statearr_175128_175156[1] = 17);
} else
{var statearr_175129_175157 = state_175103__$1;(statearr_175129_175157[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 17))
{var inst_175058 = (state_175103[8]);var inst_175061 = (state_175103[9]);var tmp175123 = inst_175058;var inst_175057 = inst_175061;var inst_175058__$1 = tmp175123;var state_175103__$1 = (function (){var statearr_175130 = state_175103;(statearr_175130[7] = inst_175057);
(statearr_175130[8] = inst_175058__$1);
return statearr_175130;
})();var statearr_175131_175158 = state_175103__$1;(statearr_175131_175158[2] = null);
(statearr_175131_175158[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 18))
{var inst_175057 = (state_175103[7]);var inst_175058 = (state_175103[8]);var tmp175125 = inst_175057;var tmp175126 = inst_175058;var inst_175057__$1 = tmp175125;var inst_175058__$1 = tmp175126;var state_175103__$1 = (function (){var statearr_175132 = state_175103;(statearr_175132[7] = inst_175057__$1);
(statearr_175132[8] = inst_175058__$1);
return statearr_175132;
})();var statearr_175133_175159 = state_175103__$1;(statearr_175133_175159[2] = null);
(statearr_175133_175159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175104 === 19))
{var inst_175097 = (state_175103[2]);var state_175103__$1 = state_175103;var statearr_175134_175160 = state_175103__$1;(statearr_175134_175160[2] = inst_175097);
(statearr_175134_175160[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_175138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_175138[0] = state_machine__6748__auto__);
(statearr_175138[1] = 1);
return statearr_175138;
});
var state_machine__6748__auto____1 = (function (state_175103){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_175103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e175139){if((e175139 instanceof Object))
{var ex__6751__auto__ = e175139;var statearr_175140_175161 = state_175103;(statearr_175140_175161[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_175103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e175139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__175162 = state_175103;
state_175103 = G__175162;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_175103){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_175103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_175141 = f__6763__auto__.call(null);(statearr_175141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___175142);
return statearr_175141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
huli.main.menu_proc = (function menu_proc(select,cancel,menu,data){var ctrl = cljs.core.async.chan.call(null);var sel = utils.reactive.map.call(null,cljs.core.second,utils.reactive.filter.call(null,cljs.core.vector_QMARK_,huli.main.selector.call(null,huli.main.highlighter.call(null,select,menu,ctrl),menu,data)));var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_175212){var state_val_175213 = (state_175212[1]);if((state_val_175213 === 6))
{var inst_175210 = (state_175212[2]);var state_175212__$1 = state_175212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_175212__$1,inst_175210);
} else
{if((state_val_175213 === 5))
{var inst_175200 = (state_175212[7]);var state_175212__$1 = state_175212;var statearr_175214_175227 = state_175212__$1;(statearr_175214_175227[2] = inst_175200);
(statearr_175214_175227[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175213 === 4))
{var state_175212__$1 = state_175212;var statearr_175215_175228 = state_175212__$1;(statearr_175215_175228[2] = new cljs.core.Keyword(null,"cancel","cancel",3941147116));
(statearr_175215_175228[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175213 === 3))
{var inst_175200 = (state_175212[7]);var inst_175201 = (state_175212[8]);var inst_175203 = (state_175212[2]);var inst_175204 = cljs.core._EQ_.call(null,inst_175201,cancel);var inst_175205 = cljs.core._EQ_.call(null,inst_175200,new cljs.core.Keyword(null,"none","none",1017291434));var inst_175206 = (inst_175204) || (inst_175205);var state_175212__$1 = (function (){var statearr_175216 = state_175212;(statearr_175216[9] = inst_175203);
return statearr_175216;
})();if(cljs.core.truth_(inst_175206))
{var statearr_175217_175229 = state_175212__$1;(statearr_175217_175229[1] = 4);
} else
{var statearr_175218_175230 = state_175212__$1;(statearr_175218_175230[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175213 === 2))
{var inst_175199 = (state_175212[2]);var inst_175200 = cljs.core.nth.call(null,inst_175199,0,null);var inst_175201 = cljs.core.nth.call(null,inst_175199,1,null);var state_175212__$1 = (function (){var statearr_175219 = state_175212;(statearr_175219[7] = inst_175200);
(statearr_175219[8] = inst_175201);
return statearr_175219;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_175212__$1,3,ctrl,new cljs.core.Keyword(null,"exit","exit",1017031824));
} else
{if((state_val_175213 === 1))
{var inst_175196 = [cancel,sel];var inst_175197 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_175196,null));var state_175212__$1 = state_175212;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_175212__$1,2,inst_175197);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_175223 = [null,null,null,null,null,null,null,null,null,null];(statearr_175223[0] = state_machine__6748__auto__);
(statearr_175223[1] = 1);
return statearr_175223;
});
var state_machine__6748__auto____1 = (function (state_175212){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_175212);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e175224){if((e175224 instanceof Object))
{var ex__6751__auto__ = e175224;var statearr_175225_175231 = state_175212;(statearr_175225_175231[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_175212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e175224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__175232 = state_175212;
state_175212 = G__175232;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_175212){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_175212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_175226 = f__6763__auto__.call(null);(statearr_175226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_175226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
huli.main.autocompleter_STAR_ = (function autocompleter_STAR_(p__175233){var map__175415 = p__175233;var map__175415__$1 = ((cljs.core.seq_QMARK_.call(null,map__175415))?cljs.core.apply.call(null,cljs.core.hash_map,map__175415):map__175415);var opts = map__175415__$1;var menu = cljs.core.get.call(null,map__175415__$1,new cljs.core.Keyword(null,"menu","menu",1017252049));var cancel = cljs.core.get.call(null,map__175415__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var select = cljs.core.get.call(null,map__175415__$1,new cljs.core.Keyword(null,"select","select",4402849902));var query = cljs.core.get.call(null,map__175415__$1,new cljs.core.Keyword(null,"query","query",1121848378));var focus = cljs.core.get.call(null,map__175415__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var out = cljs.core.async.chan.call(null);var vec__175416 = utils.reactive.split.call(null,utils.reactive.throttle_msg_QMARK_,query);var query__$1 = cljs.core.nth.call(null,vec__175416,0,null);var raw = cljs.core.nth.call(null,vec__175416,1,null);var c__6762__auto___175596 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_175528){var state_val_175529 = (state_175528[1]);if((state_val_175529 === 32))
{var inst_175510 = (state_175528[2]);var state_175528__$1 = state_175528;var statearr_175531_175597 = state_175528__$1;(statearr_175531_175597[2] = inst_175510);
(statearr_175531_175597[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 1))
{var inst_175417 = null;var inst_175418 = false;var state_175528__$1 = (function (){var statearr_175532 = state_175528;(statearr_175532[7] = inst_175417);
(statearr_175532[8] = inst_175418);
return statearr_175532;
})();var statearr_175533_175598 = state_175528__$1;(statearr_175533_175598[2] = null);
(statearr_175533_175598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 33))
{var inst_175418 = (state_175528[8]);var inst_175507 = (state_175528[2]);var tmp175530 = inst_175418;var inst_175417 = null;var inst_175418__$1 = tmp175530;var state_175528__$1 = (function (){var statearr_175536 = state_175528;(statearr_175536[7] = inst_175417);
(statearr_175536[8] = inst_175418__$1);
(statearr_175536[9] = inst_175507);
return statearr_175536;
})();var statearr_175537_175599 = state_175528__$1;(statearr_175537_175599[2] = null);
(statearr_175537_175599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 2))
{var inst_175421 = [raw,cancel,focus,query__$1,select];var inst_175422 = (new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,inst_175421,null));var state_175528__$1 = state_175528;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_175528__$1,4,inst_175422);
} else
{if((state_val_175529 === 34))
{var inst_175417 = (state_175528[7]);var inst_175418 = (state_175528[8]);var tmp175534 = inst_175417;var tmp175535 = inst_175418;var inst_175417__$1 = tmp175534;var inst_175418__$1 = tmp175535;var state_175528__$1 = (function (){var statearr_175538 = state_175528;(statearr_175538[7] = inst_175417__$1);
(statearr_175538[8] = inst_175418__$1);
return statearr_175538;
})();var statearr_175539_175600 = state_175528__$1;(statearr_175539_175600[2] = null);
(statearr_175539_175600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 3))
{var inst_175526 = (state_175528[2]);var state_175528__$1 = state_175528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_175528__$1,inst_175526);
} else
{if((state_val_175529 === 35))
{var state_175528__$1 = state_175528;var statearr_175540_175601 = state_175528__$1;(statearr_175540_175601[2] = null);
(statearr_175540_175601[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 4))
{var inst_175426 = (state_175528[10]);var inst_175424 = (state_175528[2]);var inst_175425 = cljs.core.nth.call(null,inst_175424,0,null);var inst_175426__$1 = cljs.core.nth.call(null,inst_175424,1,null);var inst_175427 = cljs.core._EQ_.call(null,inst_175426__$1,focus);var state_175528__$1 = (function (){var statearr_175542 = state_175528;(statearr_175542[11] = inst_175425);
(statearr_175542[10] = inst_175426__$1);
return statearr_175542;
})();if(inst_175427)
{var statearr_175543_175602 = state_175528__$1;(statearr_175543_175602[1] = 5);
} else
{var statearr_175544_175603 = state_175528__$1;(statearr_175544_175603[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 36))
{var inst_175516 = (state_175528[2]);var state_175528__$1 = state_175528;var statearr_175545_175604 = state_175528__$1;(statearr_175545_175604[2] = inst_175516);
(statearr_175545_175604[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 5))
{var inst_175417 = (state_175528[7]);var tmp175541 = inst_175417;var inst_175417__$1 = tmp175541;var inst_175418 = true;var state_175528__$1 = (function (){var statearr_175546 = state_175528;(statearr_175546[7] = inst_175417__$1);
(statearr_175546[8] = inst_175418);
return statearr_175546;
})();var statearr_175547_175605 = state_175528__$1;(statearr_175547_175605[2] = null);
(statearr_175547_175605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 6))
{var inst_175426 = (state_175528[10]);var inst_175431 = cljs.core._EQ_.call(null,inst_175426,cancel);var state_175528__$1 = state_175528;if(inst_175431)
{var statearr_175548_175606 = state_175528__$1;(statearr_175548_175606[1] = 8);
} else
{var statearr_175549_175607 = state_175528__$1;(statearr_175549_175607[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 7))
{var inst_175524 = (state_175528[2]);var state_175528__$1 = state_175528;var statearr_175550_175608 = state_175528__$1;(statearr_175550_175608[2] = inst_175524);
(statearr_175550_175608[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 8))
{var inst_175433 = huli.main._hide_BANG_.call(null,menu);var inst_175434 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_175435 = utils.helpers.now.call(null);var state_175528__$1 = (function (){var statearr_175551 = state_175528;(statearr_175551[12] = inst_175433);
return statearr_175551;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_175528__$1,11,inst_175434,inst_175435);
} else
{if((state_val_175529 === 9))
{var inst_175418 = (state_175528[8]);var state_175528__$1 = state_175528;if(cljs.core.truth_(inst_175418))
{var statearr_175553_175609 = state_175528__$1;(statearr_175553_175609[1] = 12);
} else
{var statearr_175554_175610 = state_175528__$1;(statearr_175554_175610[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 10))
{var inst_175522 = (state_175528[2]);var state_175528__$1 = state_175528;var statearr_175555_175611 = state_175528__$1;(statearr_175555_175611[2] = inst_175522);
(statearr_175555_175611[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 11))
{var inst_175417 = (state_175528[7]);var inst_175425 = (state_175528[11]);var inst_175437 = (state_175528[2]);var inst_175438 = cljs.core.not_EQ_.call(null,inst_175425,new cljs.core.Keyword(null,"blur","blur",1016931289));var tmp175552 = inst_175417;var inst_175417__$1 = tmp175552;var inst_175418 = inst_175438;var state_175528__$1 = (function (){var statearr_175556 = state_175528;(statearr_175556[7] = inst_175417__$1);
(statearr_175556[8] = inst_175418);
(statearr_175556[13] = inst_175437);
return statearr_175556;
})();var statearr_175557_175612 = state_175528__$1;(statearr_175557_175612[2] = null);
(statearr_175557_175612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 12))
{var inst_175426 = (state_175528[10]);var inst_175442 = cljs.core._EQ_.call(null,inst_175426,query__$1);var state_175528__$1 = state_175528;var statearr_175558_175613 = state_175528__$1;(statearr_175558_175613[2] = inst_175442);
(statearr_175558_175613[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 13))
{var inst_175418 = (state_175528[8]);var state_175528__$1 = state_175528;var statearr_175559_175614 = state_175528__$1;(statearr_175559_175614[2] = inst_175418);
(statearr_175559_175614[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 14))
{var inst_175445 = (state_175528[2]);var state_175528__$1 = state_175528;if(cljs.core.truth_(inst_175445))
{var statearr_175560_175615 = state_175528__$1;(statearr_175560_175615[1] = 15);
} else
{var statearr_175561_175616 = state_175528__$1;(statearr_175561_175616[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 15))
{var inst_175425 = (state_175528[11]);var inst_175448 = new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(opts);var inst_175449 = cljs.core.second.call(null,inst_175425);var inst_175450 = inst_175448.call(null,inst_175449);var inst_175451 = [cancel,inst_175450];var inst_175452 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_175451,null));var state_175528__$1 = state_175528;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_175528__$1,18,inst_175452);
} else
{if((state_val_175529 === 16))
{var inst_175417 = (state_175528[7]);var state_175528__$1 = state_175528;if(cljs.core.truth_(inst_175417))
{var statearr_175562_175617 = state_175528__$1;(statearr_175562_175617[1] = 22);
} else
{var statearr_175563_175618 = state_175528__$1;(statearr_175563_175618[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 17))
{var inst_175520 = (state_175528[2]);var state_175528__$1 = state_175528;var statearr_175564_175619 = state_175528__$1;(statearr_175564_175619[2] = inst_175520);
(statearr_175564_175619[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 18))
{var inst_175455 = (state_175528[14]);var inst_175454 = (state_175528[2]);var inst_175455__$1 = cljs.core.nth.call(null,inst_175454,0,null);var inst_175456 = cljs.core.nth.call(null,inst_175454,1,null);var inst_175457 = cljs.core._EQ_.call(null,inst_175456,cancel);var inst_175458 = cljs.core.count.call(null,inst_175455__$1);var inst_175459 = (inst_175458 === 0);var inst_175460 = (inst_175457) || (inst_175459);var state_175528__$1 = (function (){var statearr_175566 = state_175528;(statearr_175566[14] = inst_175455__$1);
return statearr_175566;
})();if(cljs.core.truth_(inst_175460))
{var statearr_175567_175620 = state_175528__$1;(statearr_175567_175620[1] = 19);
} else
{var statearr_175568_175621 = state_175528__$1;(statearr_175568_175621[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 19))
{var inst_175455 = (state_175528[14]);var inst_175462 = huli.main._hide_BANG_.call(null,menu);var inst_175463 = cljs.core.not_EQ_.call(null,inst_175455,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_175417 = null;var inst_175418 = inst_175463;var state_175528__$1 = (function (){var statearr_175569 = state_175528;(statearr_175569[7] = inst_175417);
(statearr_175569[8] = inst_175418);
(statearr_175569[15] = inst_175462);
return statearr_175569;
})();var statearr_175570_175622 = state_175528__$1;(statearr_175570_175622[2] = null);
(statearr_175570_175622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 20))
{var inst_175418 = (state_175528[8]);var inst_175455 = (state_175528[14]);var inst_175466 = huli.main._show_BANG_.call(null,menu);var inst_175467 = new cljs.core.Keyword(null,"completion-transform","completion-transform",1117651501).cljs$core$IFn$_invoke$arity$1(opts);var inst_175468 = huli.main._set_items_BANG_.call(null,menu,inst_175455,inst_175467,opts);var tmp175565 = inst_175418;var inst_175417 = inst_175455;var inst_175418__$1 = tmp175565;var state_175528__$1 = (function (){var statearr_175571 = state_175528;(statearr_175571[16] = inst_175466);
(statearr_175571[7] = inst_175417);
(statearr_175571[8] = inst_175418__$1);
(statearr_175571[17] = inst_175468);
return statearr_175571;
})();var statearr_175572_175623 = state_175528__$1;(statearr_175572_175623[2] = null);
(statearr_175572_175623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 21))
{var inst_175471 = (state_175528[2]);var state_175528__$1 = state_175528;var statearr_175573_175624 = state_175528__$1;(statearr_175573_175624[2] = inst_175471);
(statearr_175573_175624[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 22))
{var inst_175426 = (state_175528[10]);var inst_175474 = cljs.core._EQ_.call(null,inst_175426,select);var state_175528__$1 = state_175528;var statearr_175574_175625 = state_175528__$1;(statearr_175574_175625[2] = inst_175474);
(statearr_175574_175625[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 23))
{var inst_175417 = (state_175528[7]);var state_175528__$1 = state_175528;var statearr_175575_175626 = state_175528__$1;(statearr_175575_175626[2] = inst_175417);
(statearr_175575_175626[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 24))
{var inst_175477 = (state_175528[2]);var state_175528__$1 = state_175528;if(cljs.core.truth_(inst_175477))
{var statearr_175576_175627 = state_175528__$1;(statearr_175576_175627[1] = 25);
} else
{var statearr_175577_175628 = state_175528__$1;(statearr_175577_175628[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 25))
{var inst_175479 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_175480 = cljs.core.reset_BANG_.call(null,inst_175479,true);var inst_175481 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_175482 = utils.helpers.now.call(null);var state_175528__$1 = (function (){var statearr_175578 = state_175528;(statearr_175578[18] = inst_175480);
return statearr_175578;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_175528__$1,28,inst_175481,inst_175482);
} else
{if((state_val_175529 === 26))
{var state_175528__$1 = state_175528;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_175579_175629 = state_175528__$1;(statearr_175579_175629[1] = 34);
} else
{var statearr_175580_175630 = state_175528__$1;(statearr_175580_175630[1] = 35);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 27))
{var inst_175518 = (state_175528[2]);var state_175528__$1 = state_175528;var statearr_175581_175631 = state_175528__$1;(statearr_175581_175631[2] = inst_175518);
(statearr_175581_175631[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 28))
{var inst_175417 = (state_175528[7]);var inst_175425 = (state_175528[11]);var inst_175484 = (state_175528[2]);var inst_175485 = new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990).cljs$core$IFn$_invoke$arity$1(opts);var inst_175486 = [inst_175425];var inst_175487 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_175486,null));var inst_175488 = utils.reactive.concat.call(null,inst_175487,select);var inst_175489 = [raw,cancel];var inst_175490 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_175489,null));var inst_175491 = utils.reactive.fan_in.call(null,inst_175490);var inst_175492 = inst_175485.call(null,inst_175488,inst_175491,menu,inst_175417);var state_175528__$1 = (function (){var statearr_175582 = state_175528;(statearr_175582[19] = inst_175484);
return statearr_175582;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_175528__$1,29,inst_175492);
} else
{if((state_val_175529 === 29))
{var inst_175494 = (state_175528[20]);var inst_175494__$1 = (state_175528[2]);var inst_175495 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_175496 = cljs.core.reset_BANG_.call(null,inst_175495,false);var inst_175497 = huli.main._hide_BANG_.call(null,menu);var inst_175498 = cljs.core._EQ_.call(null,inst_175494__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var state_175528__$1 = (function (){var statearr_175583 = state_175528;(statearr_175583[21] = inst_175497);
(statearr_175583[22] = inst_175496);
(statearr_175583[20] = inst_175494__$1);
return statearr_175583;
})();if(inst_175498)
{var statearr_175584_175632 = state_175528__$1;(statearr_175584_175632[1] = 30);
} else
{var statearr_175585_175633 = state_175528__$1;(statearr_175585_175633[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 30))
{var inst_175425 = (state_175528[11]);var inst_175500 = cljs.core.not_EQ_.call(null,inst_175425,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_175417 = null;var inst_175418 = inst_175500;var state_175528__$1 = (function (){var statearr_175586 = state_175528;(statearr_175586[7] = inst_175417);
(statearr_175586[8] = inst_175418);
return statearr_175586;
})();var statearr_175587_175634 = state_175528__$1;(statearr_175587_175634[2] = null);
(statearr_175587_175634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175529 === 31))
{var inst_175494 = (state_175528[20]);var inst_175503 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(opts);var inst_175504 = new cljs.core.Keyword(null,"display-transform","display-transform",2341261203).cljs$core$IFn$_invoke$arity$1(opts);var inst_175505 = huli.main._set_text_BANG_.call(null,inst_175503,inst_175494,inst_175504,opts);var state_175528__$1 = (function (){var statearr_175588 = state_175528;(statearr_175588[23] = inst_175505);
return statearr_175588;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_175528__$1,33,out,inst_175494);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_175592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_175592[0] = state_machine__6748__auto__);
(statearr_175592[1] = 1);
return statearr_175592;
});
var state_machine__6748__auto____1 = (function (state_175528){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_175528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e175593){if((e175593 instanceof Object))
{var ex__6751__auto__ = e175593;var statearr_175594_175635 = state_175528;(statearr_175594_175635[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_175528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e175593;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__175636 = state_175528;
state_175528 = G__175636;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_175528){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_175528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_175595 = f__6763__auto__.call(null);(statearr_175595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___175596);
return statearr_175595;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
huli.main.less_than_ie9_QMARK_ = (function less_than_ie9_QMARK_(){var and__3431__auto__ = goog.userAgent.IE;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,goog.userAgent.isVersion(9));
} else
{return and__3431__auto__;
}
});
huli.main.relevant_input_keys = (function relevant_input_keys(kc){return (cljs.core._EQ_.call(null,kc,huli.main.BACKSPACE)) || (((kc > 46)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [91,null,92,null,93,null], null), null).call(null,kc))));
});
huli.main.menu_item_event = (function menu_item_event(input,menu,type){return utils.reactive.map.call(null,(function (e){var li = utils.dom.parent.call(null,e.target,"li");return utils.helpers.index_of.call(null,utils.dom.by_tag_name.call(null,menu,"li"),li);
}),utils.reactive.listen.call(null,menu,type,(function (e){if(utils.dom.in_QMARK_.call(null,e,menu))
{e.preventDefault();
} else
{}
if(cljs.core.truth_(huli.main.less_than_ie9_QMARK_.call(null)))
{return input.focus();
} else
{return null;
}
}),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))));
});
huli.main.html_menu_events = (function html_menu_events(input,menu,allow_tab_QMARK_){return utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [utils.reactive.map.call(null,huli.main.key__GT_keyword,utils.reactive.filter.call(null,(function (kc){var and__3431__auto__ = huli.main.KEYS.call(null,kc);if(cljs.core.truth_(and__3431__auto__))
{var or__3443__auto__ = cljs.core.not_EQ_.call(null,kc,huli.main.TAB);if(or__3443__auto__)
{return or__3443__auto__;
} else
{return cljs.core.deref.call(null,allow_tab_QMARK_);
}
} else
{return and__3431__auto__;
}
}),utils.reactive.map.call(null,utils.dom.key_event__GT_keycode,utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (e){if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.deref.call(null,allow_tab_QMARK_);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core._EQ_.call(null,e.keyCode,huli.main.TAB);
} else
{return and__3431__auto__;
}
})()))
{return e.preventDefault();
} else
{return null;
}
}))))),utils.reactive.hover_child.call(null,menu,"li"),utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (e){if(cljs.core._EQ_.call(null,e.keyCode,huli.main.ESC))
{return console.log("ESC key");
} else
{return null;
}
})),utils.reactive.always.call(null,new cljs.core.Keyword(null,"select","select",4402849902),utils.reactive.filter.call(null,(function (p__175639){var vec__175640 = p__175639;var d = cljs.core.nth.call(null,vec__175640,0,null);var u = cljs.core.nth.call(null,vec__175640,1,null);return cljs.core._EQ_.call(null,d,u);
}),utils.reactive.cyclic_barrier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089)),huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146))], null))))], null));
});
huli.main.html_input_events = (function html_input_events(input){return utils.reactive.split.call(null,(function (p1__175641_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__175641_SHARP_));
}),utils.reactive.map.call(null,(function (){return huli.main._text.call(null,input);
}),utils.reactive.filter.call(null,huli.main.relevant_input_keys,utils.reactive.map.call(null,utils.dom.key_event__GT_keycode,utils.reactive.remove.call(null,(function (e){return e.platformModifierKey;
}),utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"keydown","keydown",4493897459)))))));
});
huli.main.ie_blur = (function ie_blur(input,menu,selection_state){var out = cljs.core.async.chan.call(null);goog.events.listen(input,goog.events.EventType.KEYDOWN,(function (e){if((cljs.core._EQ_.call(null,e.keyCode,huli.main.TAB)) && (cljs.core.not.call(null,cljs.core.deref.call(null,selection_state))))
{return cljs.core.async.put_BANG_.call(null,out,utils.helpers.now.call(null));
} else
{return null;
}
}));
goog.events.listen(document.body,goog.events.EventType.MOUSEDOWN,(function (e){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__175642_SHARP_){return utils.dom.in_QMARK_.call(null,e,p1__175642_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu,input], null))))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,out,utils.helpers.now.call(null));
}
}));
return out;
});
huli.main.html_autocompleter = (function html_autocompleter(p__175643,completions){var map__175646 = p__175643;var map__175646__$1 = ((cljs.core.seq_QMARK_.call(null,map__175646))?cljs.core.apply.call(null,cljs.core.hash_map,map__175646):map__175646);var dataset = map__175646__$1;var throttle_ms = cljs.core.get.call(null,map__175646__$1,new cljs.core.Keyword(null,"throttle-ms","throttle-ms",3345438363));var menu = cljs.core.get.call(null,map__175646__$1,new cljs.core.Keyword(null,"menu","menu",1017252049));var input = cljs.core.get.call(null,map__175646__$1,new cljs.core.Keyword(null,"input","input",1114262332));var selection_state = cljs.core.atom.call(null,false);var query_ctrl = cljs.core.async.chan.call(null);var vec__175647 = huli.main.html_input_events.call(null,input);var filtered = cljs.core.nth.call(null,vec__175647,0,null);var removed = cljs.core.nth.call(null,vec__175647,1,null);if(cljs.core.truth_(huli.main.less_than_ie9_QMARK_.call(null)))
{goog.events.listen(menu,goog.events.EventType.SELECTSTART,(function (e){return false;
}));
} else
{}
huli.main._clear_BANG_.call(null,input);
return huli.main.autocompleter_STAR_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"completions","completions",1416465289),new cljs.core.Keyword(null,"selection-state","selection-state",2374755458),new cljs.core.Keyword(null,"cancel","cancel",3941147116),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"completion-transform","completion-transform",1117651501),new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362),new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990),new cljs.core.Keyword(null,"display-transform","display-transform",2341261203),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.Keyword(null,"select","select",4402849902)],[completions,selection_state,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [removed,utils.reactive.always.call(null,new cljs.core.Keyword(null,"blur","blur",1016931289),((cljs.core.not.call(null,huli.main.less_than_ie9_QMARK_.call(null)))?utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"blur","blur",1016931289)):huli.main.ie_blur.call(null,input,menu,selection_state)))], null)),menu,utils.reactive.always.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066),utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"focus","focus",1111509066))),new cljs.core.Keyword(null,"completion-transform","completion-transform",1117651501).cljs$core$IFn$_invoke$arity$1(dataset),query_ctrl,huli.main.menu_proc,new cljs.core.Keyword(null,"display-transform","display-transform",2341261203).cljs$core$IFn$_invoke$arity$1(dataset),input,utils.reactive.throttle_STAR_.call(null,utils.reactive.distinct.call(null,filtered),throttle_ms,cljs.core.async.chan.call(null),query_ctrl),huli.main.html_menu_events.call(null,input,menu,selection_state)]));
});
huli.main.completions_from = (function completions_from(p__175648){var map__175665 = p__175648;var map__175665__$1 = ((cljs.core.seq_QMARK_.call(null,map__175665))?cljs.core.apply.call(null,cljs.core.hash_map,map__175665):map__175665);var source_transform = cljs.core.get.call(null,map__175665__$1,new cljs.core.Keyword(null,"source-transform","source-transform",3747840940));var source_data = cljs.core.get.call(null,map__175665__$1,new cljs.core.Keyword(null,"source-data","source-data",882603406));var source_url = cljs.core.get.call(null,map__175665__$1,new cljs.core.Keyword(null,"source-url","source-url",4196274223));if(cljs.core.seq.call(null,source_data))
{return (function (query){return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_data], null));
});
} else
{return (function (query){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_175672){var state_val_175673 = (state_175672[1]);if((state_val_175673 === 2))
{var inst_175669 = (state_175672[2]);var inst_175670 = cljs.core.map.call(null,source_transform,inst_175669);var state_175672__$1 = state_175672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_175672__$1,inst_175670);
} else
{if((state_val_175673 === 1))
{var inst_175666 = [cljs.core.str(source_url),cljs.core.str(query)].join('');var inst_175667 = utils.reactive.jsonp.call(null,inst_175666);var state_175672__$1 = state_175672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_175672__$1,2,inst_175667);
} else
{return null;
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_175677 = [null,null,null,null,null,null,null];(statearr_175677[0] = state_machine__6748__auto__);
(statearr_175677[1] = 1);
return statearr_175677;
});
var state_machine__6748__auto____1 = (function (state_175672){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_175672);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e175678){if((e175678 instanceof Object))
{var ex__6751__auto__ = e175678;var statearr_175679_175681 = state_175672;(statearr_175679_175681[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_175672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e175678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__175682 = state_175672;
state_175672 = G__175682;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_175672){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_175672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_175680 = f__6763__auto__.call(null);(statearr_175680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_175680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
}
});
huli.main.js_opts__GT_dataset = (function js_opts__GT_dataset(js_opts){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"throttle-ms","throttle-ms",3345438363),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"header","header",4087600639),new cljs.core.Keyword(null,"source-url","source-url",4196274223),new cljs.core.Keyword(null,"completion-transform","completion-transform",1117651501),new cljs.core.Keyword(null,"source-data","source-data",882603406),new cljs.core.Keyword(null,"source-transform","source-transform",3747840940),new cljs.core.Keyword(null,"display-transform","display-transform",2341261203),new cljs.core.Keyword(null,"empty","empty",1110538431),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"footer","footer",4040009997),new cljs.core.Keyword(null,"sort-transform","sort-transform",843336047)],[(function (){var or__3443__auto__ = js_opts.throttleMs;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return 750;
}
})(),utils.dom.insert_sibling.call(null,utils.dom.html__GT_el.call(null,"<ul></ul>"),utils.dom.by_id.call(null,js_opts.inputId)),(function (){var or__3443__auto__ = js_opts.name;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return [cljs.core.str(cljs.core.rand_int.call(null,1000))].join('');
}
})(),(function (){var or__3443__auto__ = js_opts.header;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return null;
}
})(),(function (){var or__3443__auto__ = js_opts.sourceUrl;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return null;
}
})(),(function (){var or__3443__auto__ = js_opts.completionTransform;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return huli.ui.completion_template;
}
})(),(function (){var or__3443__auto__ = js_opts.sourceData;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return null;
}
})(),(function (){var or__3443__auto__ = js_opts.sourceTransform;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return (function (p1__175683_SHARP_){return cljs.core.identity.call(null,p1__175683_SHARP_);
});
}
})(),(function (){var or__3443__auto__ = js_opts.displayTransform;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return (function (p1__175684_SHARP_){return cljs.core.identity.call(null,p1__175684_SHARP_);
});
}
})(),(function (){var or__3443__auto__ = js_opts.empty;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return huli.ui.show_empty;
}
})(),utils.dom.by_id.call(null,js_opts.inputId),(function (){var or__3443__auto__ = js_opts.footer;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return null;
}
})(),null]);
});
huli.main.autocomplete = (function autocomplete(js_opts){var dataset = huli.main.js_opts__GT_dataset.call(null,js_opts);var ac = huli.main.html_autocompleter.call(null,dataset,huli.main.completions_from.call(null,dataset));var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_175723){var state_val_175724 = (state_175723[1]);if((state_val_175724 === 7))
{var inst_175715 = (state_175723[2]);var state_175723__$1 = (function (){var statearr_175725 = state_175723;(statearr_175725[7] = inst_175715);
return statearr_175725;
})();var statearr_175726_175739 = state_175723__$1;(statearr_175726_175739[2] = null);
(statearr_175726_175739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175724 === 6))
{var inst_175719 = (state_175723[2]);var state_175723__$1 = state_175723;var statearr_175727_175740 = state_175723__$1;(statearr_175727_175740[2] = inst_175719);
(statearr_175727_175740[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175724 === 5))
{var state_175723__$1 = state_175723;var statearr_175728_175741 = state_175723__$1;(statearr_175728_175741[2] = null);
(statearr_175728_175741[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175724 === 4))
{var state_175723__$1 = state_175723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_175723__$1,7,ac);
} else
{if((state_val_175724 === 3))
{var inst_175721 = (state_175723[2]);var state_175723__$1 = state_175723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_175723__$1,inst_175721);
} else
{if((state_val_175724 === 2))
{var state_175723__$1 = state_175723;if(true)
{var statearr_175729_175742 = state_175723__$1;(statearr_175729_175742[1] = 4);
} else
{var statearr_175730_175743 = state_175723__$1;(statearr_175730_175743[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_175724 === 1))
{var state_175723__$1 = state_175723;var statearr_175731_175744 = state_175723__$1;(statearr_175731_175744[2] = null);
(statearr_175731_175744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_175735 = [null,null,null,null,null,null,null,null];(statearr_175735[0] = state_machine__6748__auto__);
(statearr_175735[1] = 1);
return statearr_175735;
});
var state_machine__6748__auto____1 = (function (state_175723){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_175723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e175736){if((e175736 instanceof Object))
{var ex__6751__auto__ = e175736;var statearr_175737_175745 = state_175723;(statearr_175737_175745[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_175723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e175736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__175746 = state_175723;
state_175723 = G__175746;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_175723){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_175723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_175738 = f__6763__auto__.call(null);(statearr_175738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_175738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
goog.exportSymbol('huli.main.autocomplete', huli.main.autocomplete);

//# sourceMappingURL=main.js.map