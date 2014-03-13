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
goog.require('utils.dom');
goog.require('clojure.string');
goog.require('goog.userAgent');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('utils.helpers');
goog.require('goog.events');
goog.require('utils.dom');
huli.main.BACKSPACE = 8;
huli.main.ENTER = 13;
huli.main.UP_ARROW = 38;
huli.main.DOWN_ARROW = 40;
huli.main.TAB = 9;
huli.main.ESC = 27;
huli.main.KEYS = cljs.core.PersistentHashSet.fromArray([huli.main.TAB,huli.main.UP_ARROW,huli.main.DOWN_ARROW,huli.main.ESC,huli.main.ENTER], true);
huli.main.key__GT_keyword = (function key__GT_keyword(code){var pred__26308 = cljs.core._EQ_;var expr__26309 = code;if(cljs.core.truth_(pred__26308.call(null,huli.main.UP_ARROW,expr__26309)))
{return new cljs.core.Keyword(null,"previous","previous",4035096169);
} else
{if(cljs.core.truth_(pred__26308.call(null,huli.main.DOWN_ARROW,expr__26309)))
{return new cljs.core.Keyword(null,"next","next",1017282149);
} else
{if(cljs.core.truth_(pred__26308.call(null,huli.main.ENTER,expr__26309)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__26308.call(null,huli.main.TAB,expr__26309)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__26308.call(null,huli.main.ESC,expr__26309)))
{return new cljs.core.Keyword(null,"exit","exit",1017031824);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26309)].join('')));
}
}
}
}
}
});
huli.main.IHighlightable = (function (){var obj26312 = {};return obj26312;
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
huli.main.ISelectable = (function (){var obj26314 = {};return obj26314;
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
huli.main.IHideable = (function (){var obj26316 = {};return obj26316;
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
huli.main.ITextField = (function (){var obj26318 = {};return obj26318;
})();
huli.main._set_text_BANG_ = (function _set_text_BANG_(field,txt){if((function (){var and__3431__auto__ = field;if(and__3431__auto__)
{return field.huli$main$ITextField$_set_text_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return field.huli$main$ITextField$_set_text_BANG_$arity$2(field,txt);
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
})().call(null,field,txt);
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
huli.main.IUIList = (function (){var obj26320 = {};return obj26320;
})();
huli.main._set_items_BANG_ = (function _set_items_BANG_(list,items){if((function (){var and__3431__auto__ = list;if(and__3431__auto__)
{return list.huli$main$IUIList$_set_items_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return list.huli$main$IUIList$_set_items_BANG_$arity$2(list,items);
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
})().call(null,list,items);
}
});
HTMLInputElement.prototype.huli$main$ITextField$ = true;
HTMLInputElement.prototype.huli$main$ITextField$_set_text_BANG_$arity$2 = (function (field,text){var field__$1 = this;return field__$1.value = text;
});
HTMLInputElement.prototype.huli$main$ITextField$_text$arity$1 = (function (field){var field__$1 = this;return field__$1.value;
});
HTMLUListElement.prototype.cljs$core$ICounted$ = true;
HTMLUListElement.prototype.cljs$core$ICounted$_count$arity$1 = (function (list){var list__$1 = this;return cljs.core.count.call(null,utils.dom.by_tag_name.call(null,list__$1,"li"));
});
HTMLUListElement.prototype.huli$main$IUIList$ = true;
HTMLUListElement.prototype.huli$main$IUIList$_set_items_BANG_$arity$2 = (function (list,items){var list__$1 = this;return utils.dom.set_html_BANG_.call(null,list__$1,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4160__auto__ = (function iter__26321(s__26322){return (new cljs.core.LazySeq(null,(function (){var s__26322__$1 = s__26322;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26322__$1);if(temp__4092__auto__)
{var s__26322__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26322__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__26322__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__26324 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__26323 = 0;while(true){
if((i__26323 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__26323);cljs.core.chunk_append.call(null,b__26324,[cljs.core.str("<li>"),cljs.core.str(item),cljs.core.str("</li>")].join(''));
{
var G__26325 = (i__26323 + 1);
i__26323 = G__26325;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26324),iter__26321.call(null,cljs.core.chunk_rest.call(null,s__26322__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26324),null);
}
} else
{var item = cljs.core.first.call(null,s__26322__$2);return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(item),cljs.core.str("</li>")].join(''),iter__26321.call(null,cljs.core.rest.call(null,s__26322__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,items);
})()));
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
}catch (e26340){if((e26340 instanceof Error))
{var e__4830__auto__ = e26340;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26340;
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
}catch (e26341){if((e26341 instanceof Error))
{var e__4830__auto__ = e26341;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26341;
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
}catch (e26338){if((e26338 instanceof Error))
{var e__4830__auto__ = e26338;if((e__4830__auto__ === cljs.core.match.backtrack))
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
}catch (e26339){if((e26339 instanceof Error))
{var e__4830__auto____$1 = e26339;if((e__4830__auto____$1 === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(idx),cljs.core.str(" "),cljs.core.str(key)].join('')));
} else
{throw e__4830__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26339;
} else
{return null;
}
}
}} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26338;
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
var out = cljs.core.async.chan.call(null);var c__6762__auto___26506 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_26472){var state_val_26473 = (state_26472[1]);if((state_val_26473 === 1))
{var inst_26424 = new cljs.core.Keyword(null,"none","none",1017291434);var state_26472__$1 = (function (){var statearr_26474 = state_26472;(statearr_26474[7] = inst_26424);
return statearr_26474;
})();var statearr_26475_26507 = state_26472__$1;(statearr_26475_26507[2] = null);
(statearr_26475_26507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 2))
{var inst_26427 = [in$,control];var inst_26428 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26427,null));var state_26472__$1 = state_26472;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26472__$1,4,inst_26428);
} else
{if((state_val_26473 === 3))
{var inst_26470 = (state_26472[2]);var state_26472__$1 = state_26472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26472__$1,inst_26470);
} else
{if((state_val_26473 === 4))
{var inst_26432 = (state_26472[8]);var inst_26430 = (state_26472[2]);var inst_26431 = cljs.core.nth.call(null,inst_26430,0,null);var inst_26432__$1 = cljs.core.nth.call(null,inst_26430,1,null);var inst_26436 = cljs.core._EQ_.call(null,control,inst_26432__$1);var state_26472__$1 = (function (){var statearr_26476 = state_26472;(statearr_26476[8] = inst_26432__$1);
(statearr_26476[9] = inst_26431);
return statearr_26476;
})();if(inst_26436)
{var statearr_26477_26508 = state_26472__$1;(statearr_26477_26508[1] = 5);
} else
{var statearr_26478_26509 = state_26472__$1;(statearr_26478_26509[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 5))
{var state_26472__$1 = state_26472;var statearr_26479_26510 = state_26472__$1;(statearr_26479_26510[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_26479_26510[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 6))
{var inst_26432 = (state_26472[8]);var inst_26439 = cljs.core._EQ_.call(null,in$,inst_26432);var state_26472__$1 = state_26472;if(inst_26439)
{var statearr_26480_26511 = state_26472__$1;(statearr_26480_26511[1] = 8);
} else
{var statearr_26481_26512 = state_26472__$1;(statearr_26481_26512[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 7))
{var inst_26468 = (state_26472[2]);var state_26472__$1 = state_26472;var statearr_26482_26513 = state_26472__$1;(statearr_26482_26513[2] = inst_26468);
(statearr_26482_26513[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 8))
{var inst_26431 = (state_26472[9]);var inst_26444 = (state_26472[10]);var inst_26441 = [new cljs.core.Keyword(null,"previous","previous",4035096169),null,new cljs.core.Keyword(null,"clear","clear",1108650431),null,new cljs.core.Keyword(null,"next","next",1017282149),null];var inst_26442 = (new cljs.core.PersistentArrayMap(null,3,inst_26441,null));var inst_26443 = (new cljs.core.PersistentHashSet(null,inst_26442,null));var inst_26444__$1 = inst_26443.call(null,inst_26431);var state_26472__$1 = (function (){var statearr_26483 = state_26472;(statearr_26483[10] = inst_26444__$1);
return statearr_26483;
})();if(cljs.core.truth_(inst_26444__$1))
{var statearr_26484_26514 = state_26472__$1;(statearr_26484_26514[1] = 11);
} else
{var statearr_26485_26515 = state_26472__$1;(statearr_26485_26515[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 9))
{var inst_26432 = (state_26472[8]);var inst_26462 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_26432)].join('');var inst_26463 = (new Error(inst_26462));var inst_26464 = (function(){throw inst_26463})();var state_26472__$1 = state_26472;var statearr_26486_26516 = state_26472__$1;(statearr_26486_26516[2] = inst_26464);
(statearr_26486_26516[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 10))
{var inst_26466 = (state_26472[2]);var state_26472__$1 = state_26472;var statearr_26487_26517 = state_26472__$1;(statearr_26487_26517[2] = inst_26466);
(statearr_26487_26517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 11))
{var inst_26444 = (state_26472[10]);var state_26472__$1 = state_26472;var statearr_26488_26518 = state_26472__$1;(statearr_26488_26518[2] = inst_26444);
(statearr_26488_26518[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 12))
{var inst_26431 = (state_26472[9]);var inst_26447 = typeof inst_26431 === 'number';var state_26472__$1 = state_26472;var statearr_26489_26519 = state_26472__$1;(statearr_26489_26519[2] = inst_26447);
(statearr_26489_26519[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 13))
{var inst_26449 = (state_26472[2]);var state_26472__$1 = state_26472;if(cljs.core.truth_(inst_26449))
{var statearr_26490_26520 = state_26472__$1;(statearr_26490_26520[1] = 14);
} else
{var statearr_26491_26521 = state_26472__$1;(statearr_26491_26521[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 14))
{var inst_26431 = (state_26472[9]);var inst_26424 = (state_26472[7]);var inst_26451 = (state_26472[11]);var inst_26451__$1 = huli.main.handle_event.call(null,inst_26431,inst_26424,list);var state_26472__$1 = (function (){var statearr_26492 = state_26472;(statearr_26492[11] = inst_26451__$1);
return statearr_26492;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26472__$1,17,out,inst_26451__$1);
} else
{if((state_val_26473 === 15))
{var inst_26431 = (state_26472[9]);var state_26472__$1 = state_26472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26472__$1,18,out,inst_26431);
} else
{if((state_val_26473 === 16))
{var inst_26460 = (state_26472[2]);var state_26472__$1 = state_26472;var statearr_26494_26522 = state_26472__$1;(statearr_26494_26522[2] = inst_26460);
(statearr_26494_26522[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 17))
{var inst_26451 = (state_26472[11]);var inst_26453 = (state_26472[2]);var inst_26424 = inst_26451;var state_26472__$1 = (function (){var statearr_26495 = state_26472;(statearr_26495[7] = inst_26424);
(statearr_26495[12] = inst_26453);
return statearr_26495;
})();var statearr_26496_26523 = state_26472__$1;(statearr_26496_26523[2] = null);
(statearr_26496_26523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26473 === 18))
{var inst_26424 = (state_26472[7]);var inst_26457 = (state_26472[2]);var tmp26493 = inst_26424;var inst_26424__$1 = tmp26493;var state_26472__$1 = (function (){var statearr_26497 = state_26472;(statearr_26497[7] = inst_26424__$1);
(statearr_26497[13] = inst_26457);
return statearr_26497;
})();var statearr_26498_26524 = state_26472__$1;(statearr_26498_26524[2] = null);
(statearr_26498_26524[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_26502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26502[0] = state_machine__6748__auto__);
(statearr_26502[1] = 1);
return statearr_26502;
});
var state_machine__6748__auto____1 = (function (state_26472){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_26472);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e26503){if((e26503 instanceof Object))
{var ex__6751__auto__ = e26503;var statearr_26504_26525 = state_26472;(statearr_26504_26525[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26526 = state_26472;
state_26472 = G__26526;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_26472){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_26472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_26505 = f__6763__auto__.call(null);(statearr_26505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___26506);
return statearr_26505;
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
var out = cljs.core.async.chan.call(null);var c__6762__auto___26697 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_26658){var state_val_26659 = (state_26658[1]);if((state_val_26659 === 1))
{var inst_26612 = new cljs.core.Keyword(null,"none","none",1017291434);var inst_26613 = new cljs.core.Keyword(null,"none","none",1017291434);var state_26658__$1 = (function (){var statearr_26660 = state_26658;(statearr_26660[7] = inst_26613);
(statearr_26660[8] = inst_26612);
return statearr_26660;
})();var statearr_26661_26698 = state_26658__$1;(statearr_26661_26698[2] = null);
(statearr_26661_26698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 2))
{var state_26658__$1 = state_26658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26658__$1,4,in$);
} else
{if((state_val_26659 === 3))
{var inst_26656 = (state_26658[2]);var state_26658__$1 = state_26658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26658__$1,inst_26656);
} else
{if((state_val_26659 === 4))
{var inst_26616 = (state_26658[9]);var inst_26616__$1 = (state_26658[2]);var inst_26617 = cljs.core._EQ_.call(null,inst_26616__$1,new cljs.core.Keyword(null,"select","select",4402849902));var state_26658__$1 = (function (){var statearr_26662 = state_26658;(statearr_26662[9] = inst_26616__$1);
return statearr_26662;
})();if(inst_26617)
{var statearr_26663_26699 = state_26658__$1;(statearr_26663_26699[1] = 5);
} else
{var statearr_26664_26700 = state_26658__$1;(statearr_26664_26700[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 5))
{var inst_26613 = (state_26658[7]);var inst_26619 = typeof inst_26613 === 'number';var state_26658__$1 = state_26658;if(cljs.core.truth_(inst_26619))
{var statearr_26665_26701 = state_26658__$1;(statearr_26665_26701[1] = 8);
} else
{var statearr_26666_26702 = state_26658__$1;(statearr_26666_26702[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 6))
{var inst_26616 = (state_26658[9]);var state_26658__$1 = state_26658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26658__$1,16,out,inst_26616);
} else
{if((state_val_26659 === 7))
{var inst_26654 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26667_26703 = state_26658__$1;(statearr_26667_26703[2] = inst_26654);
(statearr_26667_26703[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 8))
{var inst_26613 = (state_26658[7]);var inst_26621 = huli.main._unselect_BANG_.call(null,list,inst_26613);var state_26658__$1 = state_26658;var statearr_26668_26704 = state_26658__$1;(statearr_26668_26704[2] = inst_26621);
(statearr_26668_26704[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 9))
{var state_26658__$1 = state_26658;var statearr_26669_26705 = state_26658__$1;(statearr_26669_26705[2] = null);
(statearr_26669_26705[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 10))
{var inst_26612 = (state_26658[8]);var inst_26624 = (state_26658[2]);var inst_26625 = typeof inst_26612 === 'number';var state_26658__$1 = (function (){var statearr_26670 = state_26658;(statearr_26670[10] = inst_26624);
return statearr_26670;
})();if(cljs.core.truth_(inst_26625))
{var statearr_26671_26706 = state_26658__$1;(statearr_26671_26706[1] = 11);
} else
{var statearr_26672_26707 = state_26658__$1;(statearr_26672_26707[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 11))
{var inst_26612 = (state_26658[8]);var inst_26627 = huli.main._select_BANG_.call(null,list,inst_26612);var inst_26628 = cljs.core.nth.call(null,data,inst_26612);var inst_26629 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_26628];var inst_26630 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26629,null));var state_26658__$1 = (function (){var statearr_26674 = state_26658;(statearr_26674[11] = inst_26627);
return statearr_26674;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26658__$1,14,out,inst_26630);
} else
{if((state_val_26659 === 12))
{var inst_26612 = (state_26658[8]);var inst_26634 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_26612];var inst_26635 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26634,null));var state_26658__$1 = state_26658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26658__$1,15,out,inst_26635);
} else
{if((state_val_26659 === 13))
{var inst_26612 = (state_26658[8]);var inst_26639 = (state_26658[2]);var tmp26673 = inst_26612;var inst_26612__$1 = tmp26673;var inst_26613 = tmp26673;var state_26658__$1 = (function (){var statearr_26675 = state_26658;(statearr_26675[7] = inst_26613);
(statearr_26675[8] = inst_26612__$1);
(statearr_26675[12] = inst_26639);
return statearr_26675;
})();var statearr_26676_26708 = state_26658__$1;(statearr_26676_26708[2] = null);
(statearr_26676_26708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 14))
{var inst_26632 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26677_26709 = state_26658__$1;(statearr_26677_26709[2] = inst_26632);
(statearr_26677_26709[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 15))
{var inst_26637 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26679_26710 = state_26658__$1;(statearr_26679_26710[2] = inst_26637);
(statearr_26679_26710[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 16))
{var inst_26616 = (state_26658[9]);var inst_26643 = (state_26658[2]);var inst_26644 = cljs.core._EQ_.call(null,inst_26616,new cljs.core.Keyword(null,"none","none",1017291434));var inst_26645 = typeof inst_26616 === 'number';var inst_26646 = (inst_26644) || (inst_26645);var state_26658__$1 = (function (){var statearr_26682 = state_26658;(statearr_26682[13] = inst_26643);
return statearr_26682;
})();if(cljs.core.truth_(inst_26646))
{var statearr_26683_26711 = state_26658__$1;(statearr_26683_26711[1] = 17);
} else
{var statearr_26684_26712 = state_26658__$1;(statearr_26684_26712[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 17))
{var inst_26616 = (state_26658[9]);var inst_26613 = (state_26658[7]);var tmp26678 = inst_26613;var inst_26612 = inst_26616;var inst_26613__$1 = tmp26678;var state_26658__$1 = (function (){var statearr_26685 = state_26658;(statearr_26685[7] = inst_26613__$1);
(statearr_26685[8] = inst_26612);
return statearr_26685;
})();var statearr_26686_26713 = state_26658__$1;(statearr_26686_26713[2] = null);
(statearr_26686_26713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 18))
{var inst_26613 = (state_26658[7]);var inst_26612 = (state_26658[8]);var tmp26680 = inst_26613;var tmp26681 = inst_26612;var inst_26612__$1 = tmp26681;var inst_26613__$1 = tmp26680;var state_26658__$1 = (function (){var statearr_26687 = state_26658;(statearr_26687[7] = inst_26613__$1);
(statearr_26687[8] = inst_26612__$1);
return statearr_26687;
})();var statearr_26688_26714 = state_26658__$1;(statearr_26688_26714[2] = null);
(statearr_26688_26714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 19))
{var inst_26652 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26689_26715 = state_26658__$1;(statearr_26689_26715[2] = inst_26652);
(statearr_26689_26715[1] = 7);
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
var state_machine__6748__auto____0 = (function (){var statearr_26693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26693[0] = state_machine__6748__auto__);
(statearr_26693[1] = 1);
return statearr_26693;
});
var state_machine__6748__auto____1 = (function (state_26658){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_26658);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e26694){if((e26694 instanceof Object))
{var ex__6751__auto__ = e26694;var statearr_26695_26716 = state_26658;(statearr_26695_26716[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26658);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26717 = state_26658;
state_26658 = G__26717;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_26658){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_26658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_26696 = f__6763__auto__.call(null);(statearr_26696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___26697);
return statearr_26696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
huli.main.menu_proc = (function menu_proc(select,cancel,menu,data){var ctrl = cljs.core.async.chan.call(null);var sel = utils.reactive.map.call(null,cljs.core.second,utils.reactive.filter.call(null,cljs.core.vector_QMARK_,huli.main.selector.call(null,huli.main.highlighter.call(null,select,menu,ctrl),menu,data)));var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_26767){var state_val_26768 = (state_26767[1]);if((state_val_26768 === 6))
{var inst_26765 = (state_26767[2]);var state_26767__$1 = state_26767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26767__$1,inst_26765);
} else
{if((state_val_26768 === 5))
{var inst_26755 = (state_26767[7]);var state_26767__$1 = state_26767;var statearr_26769_26782 = state_26767__$1;(statearr_26769_26782[2] = inst_26755);
(statearr_26769_26782[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26768 === 4))
{var state_26767__$1 = state_26767;var statearr_26770_26783 = state_26767__$1;(statearr_26770_26783[2] = new cljs.core.Keyword(null,"cancel","cancel",3941147116));
(statearr_26770_26783[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26768 === 3))
{var inst_26756 = (state_26767[8]);var inst_26755 = (state_26767[7]);var inst_26758 = (state_26767[2]);var inst_26759 = cljs.core._EQ_.call(null,inst_26756,cancel);var inst_26760 = cljs.core._EQ_.call(null,inst_26755,new cljs.core.Keyword(null,"none","none",1017291434));var inst_26761 = (inst_26759) || (inst_26760);var state_26767__$1 = (function (){var statearr_26771 = state_26767;(statearr_26771[9] = inst_26758);
return statearr_26771;
})();if(cljs.core.truth_(inst_26761))
{var statearr_26772_26784 = state_26767__$1;(statearr_26772_26784[1] = 4);
} else
{var statearr_26773_26785 = state_26767__$1;(statearr_26773_26785[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26768 === 2))
{var inst_26754 = (state_26767[2]);var inst_26755 = cljs.core.nth.call(null,inst_26754,0,null);var inst_26756 = cljs.core.nth.call(null,inst_26754,1,null);var state_26767__$1 = (function (){var statearr_26774 = state_26767;(statearr_26774[8] = inst_26756);
(statearr_26774[7] = inst_26755);
return statearr_26774;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26767__$1,3,ctrl,new cljs.core.Keyword(null,"exit","exit",1017031824));
} else
{if((state_val_26768 === 1))
{var inst_26751 = [cancel,sel];var inst_26752 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26751,null));var state_26767__$1 = state_26767;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26767__$1,2,inst_26752);
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
var state_machine__6748__auto____0 = (function (){var statearr_26778 = [null,null,null,null,null,null,null,null,null,null];(statearr_26778[0] = state_machine__6748__auto__);
(statearr_26778[1] = 1);
return statearr_26778;
});
var state_machine__6748__auto____1 = (function (state_26767){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_26767);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e26779){if((e26779 instanceof Object))
{var ex__6751__auto__ = e26779;var statearr_26780_26786 = state_26767;(statearr_26780_26786[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26787 = state_26767;
state_26767 = G__26787;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_26767){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_26767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_26781 = f__6763__auto__.call(null);(statearr_26781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_26781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
huli.main.autocompleter_STAR_ = (function autocompleter_STAR_(p__26788){var map__26968 = p__26788;var map__26968__$1 = ((cljs.core.seq_QMARK_.call(null,map__26968))?cljs.core.apply.call(null,cljs.core.hash_map,map__26968):map__26968);var opts = map__26968__$1;var menu = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"menu","menu",1017252049));var cancel = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var select = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"select","select",4402849902));var query = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"query","query",1121848378));var focus = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var out = cljs.core.async.chan.call(null);var vec__26969 = utils.reactive.split.call(null,utils.reactive.throttle_msg_QMARK_,query);var query__$1 = cljs.core.nth.call(null,vec__26969,0,null);var raw = cljs.core.nth.call(null,vec__26969,1,null);var c__6762__auto___27147 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_27079){var state_val_27080 = (state_27079[1]);if((state_val_27080 === 32))
{var inst_27061 = (state_27079[2]);var state_27079__$1 = state_27079;var statearr_27082_27148 = state_27079__$1;(statearr_27082_27148[2] = inst_27061);
(statearr_27082_27148[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 1))
{var inst_26970 = null;var inst_26971 = false;var state_27079__$1 = (function (){var statearr_27083 = state_27079;(statearr_27083[7] = inst_26971);
(statearr_27083[8] = inst_26970);
return statearr_27083;
})();var statearr_27084_27149 = state_27079__$1;(statearr_27084_27149[2] = null);
(statearr_27084_27149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 33))
{var inst_26971 = (state_27079[7]);var inst_27058 = (state_27079[2]);var tmp27081 = inst_26971;var inst_26970 = null;var inst_26971__$1 = tmp27081;var state_27079__$1 = (function (){var statearr_27087 = state_27079;(statearr_27087[9] = inst_27058);
(statearr_27087[7] = inst_26971__$1);
(statearr_27087[8] = inst_26970);
return statearr_27087;
})();var statearr_27088_27150 = state_27079__$1;(statearr_27088_27150[2] = null);
(statearr_27088_27150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 2))
{var inst_26974 = [raw,cancel,focus,query__$1,select];var inst_26975 = (new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26974,null));var state_27079__$1 = state_27079;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27079__$1,4,inst_26975);
} else
{if((state_val_27080 === 34))
{var inst_26971 = (state_27079[7]);var inst_26970 = (state_27079[8]);var tmp27085 = inst_26971;var tmp27086 = inst_26970;var inst_26970__$1 = tmp27086;var inst_26971__$1 = tmp27085;var state_27079__$1 = (function (){var statearr_27089 = state_27079;(statearr_27089[7] = inst_26971__$1);
(statearr_27089[8] = inst_26970__$1);
return statearr_27089;
})();var statearr_27090_27151 = state_27079__$1;(statearr_27090_27151[2] = null);
(statearr_27090_27151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 3))
{var inst_27077 = (state_27079[2]);var state_27079__$1 = state_27079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27079__$1,inst_27077);
} else
{if((state_val_27080 === 35))
{var state_27079__$1 = state_27079;var statearr_27091_27152 = state_27079__$1;(statearr_27091_27152[2] = null);
(statearr_27091_27152[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 4))
{var inst_26979 = (state_27079[10]);var inst_26977 = (state_27079[2]);var inst_26978 = cljs.core.nth.call(null,inst_26977,0,null);var inst_26979__$1 = cljs.core.nth.call(null,inst_26977,1,null);var inst_26980 = cljs.core._EQ_.call(null,inst_26979__$1,focus);var state_27079__$1 = (function (){var statearr_27093 = state_27079;(statearr_27093[11] = inst_26978);
(statearr_27093[10] = inst_26979__$1);
return statearr_27093;
})();if(inst_26980)
{var statearr_27094_27153 = state_27079__$1;(statearr_27094_27153[1] = 5);
} else
{var statearr_27095_27154 = state_27079__$1;(statearr_27095_27154[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 36))
{var inst_27067 = (state_27079[2]);var state_27079__$1 = state_27079;var statearr_27096_27155 = state_27079__$1;(statearr_27096_27155[2] = inst_27067);
(statearr_27096_27155[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 5))
{var inst_26970 = (state_27079[8]);var tmp27092 = inst_26970;var inst_26970__$1 = tmp27092;var inst_26971 = true;var state_27079__$1 = (function (){var statearr_27097 = state_27079;(statearr_27097[7] = inst_26971);
(statearr_27097[8] = inst_26970__$1);
return statearr_27097;
})();var statearr_27098_27156 = state_27079__$1;(statearr_27098_27156[2] = null);
(statearr_27098_27156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 6))
{var inst_26979 = (state_27079[10]);var inst_26984 = cljs.core._EQ_.call(null,inst_26979,cancel);var state_27079__$1 = state_27079;if(inst_26984)
{var statearr_27099_27157 = state_27079__$1;(statearr_27099_27157[1] = 8);
} else
{var statearr_27100_27158 = state_27079__$1;(statearr_27100_27158[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 7))
{var inst_27075 = (state_27079[2]);var state_27079__$1 = state_27079;var statearr_27101_27159 = state_27079__$1;(statearr_27101_27159[2] = inst_27075);
(statearr_27101_27159[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 8))
{var inst_26986 = huli.main._hide_BANG_.call(null,menu);var inst_26987 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_26988 = utils.helpers.now.call(null);var state_27079__$1 = (function (){var statearr_27102 = state_27079;(statearr_27102[12] = inst_26986);
return statearr_27102;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27079__$1,11,inst_26987,inst_26988);
} else
{if((state_val_27080 === 9))
{var inst_26971 = (state_27079[7]);var state_27079__$1 = state_27079;if(cljs.core.truth_(inst_26971))
{var statearr_27104_27160 = state_27079__$1;(statearr_27104_27160[1] = 12);
} else
{var statearr_27105_27161 = state_27079__$1;(statearr_27105_27161[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 10))
{var inst_27073 = (state_27079[2]);var state_27079__$1 = state_27079;var statearr_27106_27162 = state_27079__$1;(statearr_27106_27162[2] = inst_27073);
(statearr_27106_27162[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 11))
{var inst_26978 = (state_27079[11]);var inst_26970 = (state_27079[8]);var inst_26990 = (state_27079[2]);var inst_26991 = cljs.core.not_EQ_.call(null,inst_26978,new cljs.core.Keyword(null,"blur","blur",1016931289));var tmp27103 = inst_26970;var inst_26970__$1 = tmp27103;var inst_26971 = inst_26991;var state_27079__$1 = (function (){var statearr_27107 = state_27079;(statearr_27107[13] = inst_26990);
(statearr_27107[7] = inst_26971);
(statearr_27107[8] = inst_26970__$1);
return statearr_27107;
})();var statearr_27108_27163 = state_27079__$1;(statearr_27108_27163[2] = null);
(statearr_27108_27163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 12))
{var inst_26979 = (state_27079[10]);var inst_26995 = cljs.core._EQ_.call(null,inst_26979,query__$1);var state_27079__$1 = state_27079;var statearr_27109_27164 = state_27079__$1;(statearr_27109_27164[2] = inst_26995);
(statearr_27109_27164[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 13))
{var inst_26971 = (state_27079[7]);var state_27079__$1 = state_27079;var statearr_27110_27165 = state_27079__$1;(statearr_27110_27165[2] = inst_26971);
(statearr_27110_27165[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 14))
{var inst_26998 = (state_27079[2]);var state_27079__$1 = state_27079;if(cljs.core.truth_(inst_26998))
{var statearr_27111_27166 = state_27079__$1;(statearr_27111_27166[1] = 15);
} else
{var statearr_27112_27167 = state_27079__$1;(statearr_27112_27167[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 15))
{var inst_26978 = (state_27079[11]);var inst_27001 = new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(opts);var inst_27002 = cljs.core.second.call(null,inst_26978);var inst_27003 = inst_27001.call(null,inst_27002);var inst_27004 = [cancel,inst_27003];var inst_27005 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27004,null));var state_27079__$1 = state_27079;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27079__$1,18,inst_27005);
} else
{if((state_val_27080 === 16))
{var inst_26970 = (state_27079[8]);var state_27079__$1 = state_27079;if(cljs.core.truth_(inst_26970))
{var statearr_27113_27168 = state_27079__$1;(statearr_27113_27168[1] = 22);
} else
{var statearr_27114_27169 = state_27079__$1;(statearr_27114_27169[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 17))
{var inst_27071 = (state_27079[2]);var state_27079__$1 = state_27079;var statearr_27115_27170 = state_27079__$1;(statearr_27115_27170[2] = inst_27071);
(statearr_27115_27170[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 18))
{var inst_27008 = (state_27079[14]);var inst_27007 = (state_27079[2]);var inst_27008__$1 = cljs.core.nth.call(null,inst_27007,0,null);var inst_27009 = cljs.core.nth.call(null,inst_27007,1,null);var inst_27010 = cljs.core._EQ_.call(null,inst_27009,cancel);var inst_27011 = cljs.core.count.call(null,inst_27008__$1);var inst_27012 = (inst_27011 === 0);var inst_27013 = (inst_27010) || (inst_27012);var state_27079__$1 = (function (){var statearr_27117 = state_27079;(statearr_27117[14] = inst_27008__$1);
return statearr_27117;
})();if(cljs.core.truth_(inst_27013))
{var statearr_27118_27171 = state_27079__$1;(statearr_27118_27171[1] = 19);
} else
{var statearr_27119_27172 = state_27079__$1;(statearr_27119_27172[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 19))
{var inst_27008 = (state_27079[14]);var inst_27015 = huli.main._hide_BANG_.call(null,menu);var inst_27016 = cljs.core.not_EQ_.call(null,inst_27008,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_26970 = null;var inst_26971 = inst_27016;var state_27079__$1 = (function (){var statearr_27120 = state_27079;(statearr_27120[15] = inst_27015);
(statearr_27120[7] = inst_26971);
(statearr_27120[8] = inst_26970);
return statearr_27120;
})();var statearr_27121_27173 = state_27079__$1;(statearr_27121_27173[2] = null);
(statearr_27121_27173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 20))
{var inst_27008 = (state_27079[14]);var inst_26971 = (state_27079[7]);var inst_27019 = huli.main._show_BANG_.call(null,menu);var inst_27020 = huli.main._set_items_BANG_.call(null,menu,inst_27008);var tmp27116 = inst_26971;var inst_26970 = inst_27008;var inst_26971__$1 = tmp27116;var state_27079__$1 = (function (){var statearr_27122 = state_27079;(statearr_27122[7] = inst_26971__$1);
(statearr_27122[8] = inst_26970);
(statearr_27122[16] = inst_27019);
(statearr_27122[17] = inst_27020);
return statearr_27122;
})();var statearr_27123_27174 = state_27079__$1;(statearr_27123_27174[2] = null);
(statearr_27123_27174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 21))
{var inst_27023 = (state_27079[2]);var state_27079__$1 = state_27079;var statearr_27124_27175 = state_27079__$1;(statearr_27124_27175[2] = inst_27023);
(statearr_27124_27175[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 22))
{var inst_26979 = (state_27079[10]);var inst_27026 = cljs.core._EQ_.call(null,inst_26979,select);var state_27079__$1 = state_27079;var statearr_27125_27176 = state_27079__$1;(statearr_27125_27176[2] = inst_27026);
(statearr_27125_27176[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 23))
{var inst_26970 = (state_27079[8]);var state_27079__$1 = state_27079;var statearr_27126_27177 = state_27079__$1;(statearr_27126_27177[2] = inst_26970);
(statearr_27126_27177[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 24))
{var inst_27029 = (state_27079[2]);var state_27079__$1 = state_27079;if(cljs.core.truth_(inst_27029))
{var statearr_27127_27178 = state_27079__$1;(statearr_27127_27178[1] = 25);
} else
{var statearr_27128_27179 = state_27079__$1;(statearr_27128_27179[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 25))
{var inst_27031 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_27032 = cljs.core.reset_BANG_.call(null,inst_27031,true);var inst_27033 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_27034 = utils.helpers.now.call(null);var state_27079__$1 = (function (){var statearr_27129 = state_27079;(statearr_27129[18] = inst_27032);
return statearr_27129;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27079__$1,28,inst_27033,inst_27034);
} else
{if((state_val_27080 === 26))
{var state_27079__$1 = state_27079;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_27130_27180 = state_27079__$1;(statearr_27130_27180[1] = 34);
} else
{var statearr_27131_27181 = state_27079__$1;(statearr_27131_27181[1] = 35);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 27))
{var inst_27069 = (state_27079[2]);var state_27079__$1 = state_27079;var statearr_27132_27182 = state_27079__$1;(statearr_27132_27182[2] = inst_27069);
(statearr_27132_27182[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 28))
{var inst_26978 = (state_27079[11]);var inst_26970 = (state_27079[8]);var inst_27036 = (state_27079[2]);var inst_27037 = new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990).cljs$core$IFn$_invoke$arity$1(opts);var inst_27038 = [inst_26978];var inst_27039 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27038,null));var inst_27040 = utils.reactive.concat.call(null,inst_27039,select);var inst_27041 = [raw,cancel];var inst_27042 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_27041,null));var inst_27043 = utils.reactive.fan_in.call(null,inst_27042);var inst_27044 = inst_27037.call(null,inst_27040,inst_27043,menu,inst_26970);var state_27079__$1 = (function (){var statearr_27133 = state_27079;(statearr_27133[19] = inst_27036);
return statearr_27133;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27079__$1,29,inst_27044);
} else
{if((state_val_27080 === 29))
{var inst_27046 = (state_27079[20]);var inst_27046__$1 = (state_27079[2]);var inst_27047 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_27048 = cljs.core.reset_BANG_.call(null,inst_27047,false);var inst_27049 = huli.main._hide_BANG_.call(null,menu);var inst_27050 = cljs.core._EQ_.call(null,inst_27046__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var state_27079__$1 = (function (){var statearr_27134 = state_27079;(statearr_27134[21] = inst_27048);
(statearr_27134[22] = inst_27049);
(statearr_27134[20] = inst_27046__$1);
return statearr_27134;
})();if(inst_27050)
{var statearr_27135_27183 = state_27079__$1;(statearr_27135_27183[1] = 30);
} else
{var statearr_27136_27184 = state_27079__$1;(statearr_27136_27184[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 30))
{var inst_26978 = (state_27079[11]);var inst_27052 = cljs.core.not_EQ_.call(null,inst_26978,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_26970 = null;var inst_26971 = inst_27052;var state_27079__$1 = (function (){var statearr_27137 = state_27079;(statearr_27137[7] = inst_26971);
(statearr_27137[8] = inst_26970);
return statearr_27137;
})();var statearr_27138_27185 = state_27079__$1;(statearr_27138_27185[2] = null);
(statearr_27138_27185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27080 === 31))
{var inst_27046 = (state_27079[20]);var inst_27055 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(opts);var inst_27056 = huli.main._set_text_BANG_.call(null,inst_27055,inst_27046);var state_27079__$1 = (function (){var statearr_27139 = state_27079;(statearr_27139[23] = inst_27056);
return statearr_27139;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27079__$1,33,out,inst_27046);
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
var state_machine__6748__auto____0 = (function (){var statearr_27143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27143[0] = state_machine__6748__auto__);
(statearr_27143[1] = 1);
return statearr_27143;
});
var state_machine__6748__auto____1 = (function (state_27079){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_27079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e27144){if((e27144 instanceof Object))
{var ex__6751__auto__ = e27144;var statearr_27145_27186 = state_27079;(statearr_27145_27186[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27187 = state_27079;
state_27079 = G__27187;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_27079){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_27079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_27146 = f__6763__auto__.call(null);(statearr_27146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___27147);
return statearr_27146;
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
{return console.log("WOOT");
} else
{return null;
}
})),utils.reactive.always.call(null,new cljs.core.Keyword(null,"select","select",4402849902),utils.reactive.filter.call(null,(function (p__27190){var vec__27191 = p__27190;var d = cljs.core.nth.call(null,vec__27191,0,null);var u = cljs.core.nth.call(null,vec__27191,1,null);return cljs.core._EQ_.call(null,d,u);
}),utils.reactive.cyclic_barrier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089)),huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146))], null))))], null));
});
huli.main.html_input_events = (function html_input_events(input){return utils.reactive.split.call(null,(function (p1__27192_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__27192_SHARP_));
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
goog.events.listen(document.body,goog.events.EventType.MOUSEDOWN,(function (e){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27193_SHARP_){return utils.dom.in_QMARK_.call(null,e,p1__27193_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu,input], null))))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,out,utils.helpers.now.call(null));
}
}));
return out;
});
huli.main.html_autocompleter = (function html_autocompleter(input,menu,completions,throttle){var selection_state = cljs.core.atom.call(null,false);var query_ctrl = cljs.core.async.chan.call(null);var vec__27195 = huli.main.html_input_events.call(null,input);var filtered = cljs.core.nth.call(null,vec__27195,0,null);var removed = cljs.core.nth.call(null,vec__27195,1,null);if(cljs.core.truth_(huli.main.less_than_ie9_QMARK_.call(null)))
{goog.events.listen(menu,goog.events.EventType.SELECTSTART,(function (e){return false;
}));
} else
{}
huli.main._set_text_BANG_.call(null,input,"");
return huli.main.autocompleter_STAR_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"completions","completions",1416465289),new cljs.core.Keyword(null,"selection-state","selection-state",2374755458),new cljs.core.Keyword(null,"cancel","cancel",3941147116),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362),new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.Keyword(null,"select","select",4402849902)],[completions,selection_state,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [removed,utils.reactive.always.call(null,new cljs.core.Keyword(null,"blur","blur",1016931289),((cljs.core.not.call(null,huli.main.less_than_ie9_QMARK_.call(null)))?utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"blur","blur",1016931289)):huli.main.ie_blur.call(null,input,menu,selection_state)))], null)),menu,utils.reactive.always.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066),utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"focus","focus",1111509066))),query_ctrl,huli.main.menu_proc,input,utils.reactive.throttle_STAR_.call(null,utils.reactive.distinct.call(null,filtered),throttle,cljs.core.async.chan.call(null),query_ctrl),huli.main.html_menu_events.call(null,input,menu,selection_state)]));
});
huli.main.url__GT_query = (function url__GT_query(url,transform){return (function (query){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_27217){var state_val_27218 = (state_27217[1]);if((state_val_27218 === 2))
{var inst_27214 = (state_27217[2]);var inst_27215 = cljs.core.map.call(null,transform,inst_27214);var state_27217__$1 = state_27217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27217__$1,inst_27215);
} else
{if((state_val_27218 === 1))
{var inst_27211 = [cljs.core.str(url),cljs.core.str(query)].join('');var inst_27212 = utils.reactive.jsonp.call(null,inst_27211);var state_27217__$1 = state_27217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27217__$1,2,inst_27212);
} else
{return null;
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_27222 = [null,null,null,null,null,null,null];(statearr_27222[0] = state_machine__6748__auto__);
(statearr_27222[1] = 1);
return statearr_27222;
});
var state_machine__6748__auto____1 = (function (state_27217){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_27217);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e27223){if((e27223 instanceof Object))
{var ex__6751__auto__ = e27223;var statearr_27224_27226 = state_27217;(statearr_27224_27226[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27217);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27227 = state_27217;
state_27217 = G__27227;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_27217){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_27217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_27225 = f__6763__auto__.call(null);(statearr_27225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_27225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
});
huli.main.autocomplete = (function autocomplete(js_opts){var input_id = js_opts.inputId;var url = js_opts.url;var transform = (function (){var or__3443__auto__ = js_opts.transform;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return ((function (or__3443__auto__,input_id,url){
return (function (p1__27228_SHARP_){var or__3443__auto____$1 = p1__27228_SHARP_;if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return "";
}
});
;})(or__3443__auto__,input_id,url))
}
})();var ac = huli.main.html_autocompleter.call(null,utils.dom.by_id.call(null,input_id),utils.dom.by_id.call(null,[cljs.core.str(input_id),cljs.core.str("-menu")].join('')),huli.main.url__GT_query.call(null,url,transform),750);var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_27267){var state_val_27268 = (state_27267[1]);if((state_val_27268 === 7))
{var inst_27259 = (state_27267[2]);var state_27267__$1 = (function (){var statearr_27269 = state_27267;(statearr_27269[7] = inst_27259);
return statearr_27269;
})();var statearr_27270_27283 = state_27267__$1;(statearr_27270_27283[2] = null);
(statearr_27270_27283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27268 === 6))
{var inst_27263 = (state_27267[2]);var state_27267__$1 = state_27267;var statearr_27271_27284 = state_27267__$1;(statearr_27271_27284[2] = inst_27263);
(statearr_27271_27284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27268 === 5))
{var state_27267__$1 = state_27267;var statearr_27272_27285 = state_27267__$1;(statearr_27272_27285[2] = null);
(statearr_27272_27285[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27268 === 4))
{var state_27267__$1 = state_27267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27267__$1,7,ac);
} else
{if((state_val_27268 === 3))
{var inst_27265 = (state_27267[2]);var state_27267__$1 = state_27267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27267__$1,inst_27265);
} else
{if((state_val_27268 === 2))
{var state_27267__$1 = state_27267;if(true)
{var statearr_27273_27286 = state_27267__$1;(statearr_27273_27286[1] = 4);
} else
{var statearr_27274_27287 = state_27267__$1;(statearr_27274_27287[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27268 === 1))
{var state_27267__$1 = state_27267;var statearr_27275_27288 = state_27267__$1;(statearr_27275_27288[2] = null);
(statearr_27275_27288[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_27279 = [null,null,null,null,null,null,null,null];(statearr_27279[0] = state_machine__6748__auto__);
(statearr_27279[1] = 1);
return statearr_27279;
});
var state_machine__6748__auto____1 = (function (state_27267){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_27267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e27280){if((e27280 instanceof Object))
{var ex__6751__auto__ = e27280;var statearr_27281_27289 = state_27267;(statearr_27281_27289[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27290 = state_27267;
state_27267 = G__27290;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_27267){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_27267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_27282 = f__6763__auto__.call(null);(statearr_27282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_27282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
goog.exportSymbol('huli.main.autocomplete', huli.main.autocomplete);

//# sourceMappingURL=main.js.map