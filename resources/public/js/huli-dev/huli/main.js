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
huli.main.key__GT_keyword = (function key__GT_keyword(code){var pred__32552 = cljs.core._EQ_;var expr__32553 = code;if(cljs.core.truth_(pred__32552.call(null,huli.main.UP_ARROW,expr__32553)))
{return new cljs.core.Keyword(null,"previous","previous",4035096169);
} else
{if(cljs.core.truth_(pred__32552.call(null,huli.main.DOWN_ARROW,expr__32553)))
{return new cljs.core.Keyword(null,"next","next",1017282149);
} else
{if(cljs.core.truth_(pred__32552.call(null,huli.main.ENTER,expr__32553)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__32552.call(null,huli.main.TAB,expr__32553)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__32552.call(null,huli.main.ESC,expr__32553)))
{return new cljs.core.Keyword(null,"exit","exit",1017031824);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32553)].join('')));
}
}
}
}
}
});
huli.main.IHighlightable = (function (){var obj32556 = {};return obj32556;
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
huli.main.ISelectable = (function (){var obj32558 = {};return obj32558;
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
huli.main.IHideable = (function (){var obj32560 = {};return obj32560;
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
huli.main.ITextField = (function (){var obj32562 = {};return obj32562;
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
huli.main.IUIList = (function (){var obj32564 = {};return obj32564;
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
HTMLUListElement.prototype.huli$main$IUIList$_set_items_BANG_$arity$2 = (function (list,items){var list__$1 = this;utils.helpers.frak.call(null,items);
return utils.dom.set_html_BANG_.call(null,list__$1,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4160__auto__ = (function iter__32565(s__32566){return (new cljs.core.LazySeq(null,(function (){var s__32566__$1 = s__32566;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32566__$1);if(temp__4092__auto__)
{var s__32566__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32566__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__32566__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__32568 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__32567 = 0;while(true){
if((i__32567 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__32567);cljs.core.chunk_append.call(null,b__32568,[cljs.core.str("<li>"),cljs.core.str(item),cljs.core.str("</li>")].join(''));
{
var G__32569 = (i__32567 + 1);
i__32567 = G__32569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32568),iter__32565.call(null,cljs.core.chunk_rest.call(null,s__32566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32568),null);
}
} else
{var item = cljs.core.first.call(null,s__32566__$2);return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(item),cljs.core.str("</li>")].join(''),iter__32565.call(null,cljs.core.rest.call(null,s__32566__$2)));
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
}catch (e32584){if((e32584 instanceof Error))
{var e__4830__auto__ = e32584;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32584;
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
}catch (e32585){if((e32585 instanceof Error))
{var e__4830__auto__ = e32585;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32585;
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
}catch (e32582){if((e32582 instanceof Error))
{var e__4830__auto__ = e32582;if((e__4830__auto__ === cljs.core.match.backtrack))
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
}catch (e32583){if((e32583 instanceof Error))
{var e__4830__auto____$1 = e32583;if((e__4830__auto____$1 === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(idx),cljs.core.str(" "),cljs.core.str(key)].join('')));
} else
{throw e__4830__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32583;
} else
{return null;
}
}
}} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32582;
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
var out = cljs.core.async.chan.call(null);var c__6762__auto___32750 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_32716){var state_val_32717 = (state_32716[1]);if((state_val_32717 === 1))
{var inst_32668 = new cljs.core.Keyword(null,"none","none",1017291434);var state_32716__$1 = (function (){var statearr_32718 = state_32716;(statearr_32718[7] = inst_32668);
return statearr_32718;
})();var statearr_32719_32751 = state_32716__$1;(statearr_32719_32751[2] = null);
(statearr_32719_32751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 2))
{var inst_32671 = [in$,control];var inst_32672 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_32671,null));var state_32716__$1 = state_32716;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32716__$1,4,inst_32672);
} else
{if((state_val_32717 === 3))
{var inst_32714 = (state_32716[2]);var state_32716__$1 = state_32716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32716__$1,inst_32714);
} else
{if((state_val_32717 === 4))
{var inst_32676 = (state_32716[8]);var inst_32674 = (state_32716[2]);var inst_32675 = cljs.core.nth.call(null,inst_32674,0,null);var inst_32676__$1 = cljs.core.nth.call(null,inst_32674,1,null);var inst_32680 = cljs.core._EQ_.call(null,control,inst_32676__$1);var state_32716__$1 = (function (){var statearr_32720 = state_32716;(statearr_32720[9] = inst_32675);
(statearr_32720[8] = inst_32676__$1);
return statearr_32720;
})();if(inst_32680)
{var statearr_32721_32752 = state_32716__$1;(statearr_32721_32752[1] = 5);
} else
{var statearr_32722_32753 = state_32716__$1;(statearr_32722_32753[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 5))
{var state_32716__$1 = state_32716;var statearr_32723_32754 = state_32716__$1;(statearr_32723_32754[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_32723_32754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 6))
{var inst_32676 = (state_32716[8]);var inst_32683 = cljs.core._EQ_.call(null,in$,inst_32676);var state_32716__$1 = state_32716;if(inst_32683)
{var statearr_32724_32755 = state_32716__$1;(statearr_32724_32755[1] = 8);
} else
{var statearr_32725_32756 = state_32716__$1;(statearr_32725_32756[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 7))
{var inst_32712 = (state_32716[2]);var state_32716__$1 = state_32716;var statearr_32726_32757 = state_32716__$1;(statearr_32726_32757[2] = inst_32712);
(statearr_32726_32757[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 8))
{var inst_32688 = (state_32716[10]);var inst_32675 = (state_32716[9]);var inst_32685 = [new cljs.core.Keyword(null,"previous","previous",4035096169),null,new cljs.core.Keyword(null,"clear","clear",1108650431),null,new cljs.core.Keyword(null,"next","next",1017282149),null];var inst_32686 = (new cljs.core.PersistentArrayMap(null,3,inst_32685,null));var inst_32687 = (new cljs.core.PersistentHashSet(null,inst_32686,null));var inst_32688__$1 = inst_32687.call(null,inst_32675);var state_32716__$1 = (function (){var statearr_32727 = state_32716;(statearr_32727[10] = inst_32688__$1);
return statearr_32727;
})();if(cljs.core.truth_(inst_32688__$1))
{var statearr_32728_32758 = state_32716__$1;(statearr_32728_32758[1] = 11);
} else
{var statearr_32729_32759 = state_32716__$1;(statearr_32729_32759[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 9))
{var inst_32676 = (state_32716[8]);var inst_32706 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_32676)].join('');var inst_32707 = (new Error(inst_32706));var inst_32708 = (function(){throw inst_32707})();var state_32716__$1 = state_32716;var statearr_32730_32760 = state_32716__$1;(statearr_32730_32760[2] = inst_32708);
(statearr_32730_32760[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 10))
{var inst_32710 = (state_32716[2]);var state_32716__$1 = state_32716;var statearr_32731_32761 = state_32716__$1;(statearr_32731_32761[2] = inst_32710);
(statearr_32731_32761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 11))
{var inst_32688 = (state_32716[10]);var state_32716__$1 = state_32716;var statearr_32732_32762 = state_32716__$1;(statearr_32732_32762[2] = inst_32688);
(statearr_32732_32762[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 12))
{var inst_32675 = (state_32716[9]);var inst_32691 = typeof inst_32675 === 'number';var state_32716__$1 = state_32716;var statearr_32733_32763 = state_32716__$1;(statearr_32733_32763[2] = inst_32691);
(statearr_32733_32763[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 13))
{var inst_32693 = (state_32716[2]);var state_32716__$1 = state_32716;if(cljs.core.truth_(inst_32693))
{var statearr_32734_32764 = state_32716__$1;(statearr_32734_32764[1] = 14);
} else
{var statearr_32735_32765 = state_32716__$1;(statearr_32735_32765[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 14))
{var inst_32695 = (state_32716[11]);var inst_32668 = (state_32716[7]);var inst_32675 = (state_32716[9]);var inst_32695__$1 = huli.main.handle_event.call(null,inst_32675,inst_32668,list);var state_32716__$1 = (function (){var statearr_32736 = state_32716;(statearr_32736[11] = inst_32695__$1);
return statearr_32736;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32716__$1,17,out,inst_32695__$1);
} else
{if((state_val_32717 === 15))
{var inst_32675 = (state_32716[9]);var state_32716__$1 = state_32716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32716__$1,18,out,inst_32675);
} else
{if((state_val_32717 === 16))
{var inst_32704 = (state_32716[2]);var state_32716__$1 = state_32716;var statearr_32738_32766 = state_32716__$1;(statearr_32738_32766[2] = inst_32704);
(statearr_32738_32766[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 17))
{var inst_32695 = (state_32716[11]);var inst_32697 = (state_32716[2]);var inst_32668 = inst_32695;var state_32716__$1 = (function (){var statearr_32739 = state_32716;(statearr_32739[12] = inst_32697);
(statearr_32739[7] = inst_32668);
return statearr_32739;
})();var statearr_32740_32767 = state_32716__$1;(statearr_32740_32767[2] = null);
(statearr_32740_32767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32717 === 18))
{var inst_32668 = (state_32716[7]);var inst_32701 = (state_32716[2]);var tmp32737 = inst_32668;var inst_32668__$1 = tmp32737;var state_32716__$1 = (function (){var statearr_32741 = state_32716;(statearr_32741[7] = inst_32668__$1);
(statearr_32741[13] = inst_32701);
return statearr_32741;
})();var statearr_32742_32768 = state_32716__$1;(statearr_32742_32768[2] = null);
(statearr_32742_32768[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_32746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32746[0] = state_machine__6748__auto__);
(statearr_32746[1] = 1);
return statearr_32746;
});
var state_machine__6748__auto____1 = (function (state_32716){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_32716);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e32747){if((e32747 instanceof Object))
{var ex__6751__auto__ = e32747;var statearr_32748_32769 = state_32716;(statearr_32748_32769[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32716);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32770 = state_32716;
state_32716 = G__32770;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_32716){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_32716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_32749 = f__6763__auto__.call(null);(statearr_32749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___32750);
return statearr_32749;
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
var out = cljs.core.async.chan.call(null);var c__6762__auto___32941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_32902){var state_val_32903 = (state_32902[1]);if((state_val_32903 === 1))
{var inst_32856 = new cljs.core.Keyword(null,"none","none",1017291434);var inst_32857 = new cljs.core.Keyword(null,"none","none",1017291434);var state_32902__$1 = (function (){var statearr_32904 = state_32902;(statearr_32904[7] = inst_32856);
(statearr_32904[8] = inst_32857);
return statearr_32904;
})();var statearr_32905_32942 = state_32902__$1;(statearr_32905_32942[2] = null);
(statearr_32905_32942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 2))
{var state_32902__$1 = state_32902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32902__$1,4,in$);
} else
{if((state_val_32903 === 3))
{var inst_32900 = (state_32902[2]);var state_32902__$1 = state_32902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32902__$1,inst_32900);
} else
{if((state_val_32903 === 4))
{var inst_32860 = (state_32902[9]);var inst_32860__$1 = (state_32902[2]);var inst_32861 = cljs.core._EQ_.call(null,inst_32860__$1,new cljs.core.Keyword(null,"select","select",4402849902));var state_32902__$1 = (function (){var statearr_32906 = state_32902;(statearr_32906[9] = inst_32860__$1);
return statearr_32906;
})();if(inst_32861)
{var statearr_32907_32943 = state_32902__$1;(statearr_32907_32943[1] = 5);
} else
{var statearr_32908_32944 = state_32902__$1;(statearr_32908_32944[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 5))
{var inst_32857 = (state_32902[8]);var inst_32863 = typeof inst_32857 === 'number';var state_32902__$1 = state_32902;if(cljs.core.truth_(inst_32863))
{var statearr_32909_32945 = state_32902__$1;(statearr_32909_32945[1] = 8);
} else
{var statearr_32910_32946 = state_32902__$1;(statearr_32910_32946[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 6))
{var inst_32860 = (state_32902[9]);var state_32902__$1 = state_32902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32902__$1,16,out,inst_32860);
} else
{if((state_val_32903 === 7))
{var inst_32898 = (state_32902[2]);var state_32902__$1 = state_32902;var statearr_32911_32947 = state_32902__$1;(statearr_32911_32947[2] = inst_32898);
(statearr_32911_32947[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 8))
{var inst_32857 = (state_32902[8]);var inst_32865 = huli.main._unselect_BANG_.call(null,list,inst_32857);var state_32902__$1 = state_32902;var statearr_32912_32948 = state_32902__$1;(statearr_32912_32948[2] = inst_32865);
(statearr_32912_32948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 9))
{var state_32902__$1 = state_32902;var statearr_32913_32949 = state_32902__$1;(statearr_32913_32949[2] = null);
(statearr_32913_32949[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 10))
{var inst_32856 = (state_32902[7]);var inst_32868 = (state_32902[2]);var inst_32869 = typeof inst_32856 === 'number';var state_32902__$1 = (function (){var statearr_32914 = state_32902;(statearr_32914[10] = inst_32868);
return statearr_32914;
})();if(cljs.core.truth_(inst_32869))
{var statearr_32915_32950 = state_32902__$1;(statearr_32915_32950[1] = 11);
} else
{var statearr_32916_32951 = state_32902__$1;(statearr_32916_32951[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 11))
{var inst_32856 = (state_32902[7]);var inst_32871 = huli.main._select_BANG_.call(null,list,inst_32856);var inst_32872 = cljs.core.nth.call(null,data,inst_32856);var inst_32873 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_32872];var inst_32874 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_32873,null));var state_32902__$1 = (function (){var statearr_32918 = state_32902;(statearr_32918[11] = inst_32871);
return statearr_32918;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32902__$1,14,out,inst_32874);
} else
{if((state_val_32903 === 12))
{var inst_32856 = (state_32902[7]);var inst_32878 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_32856];var inst_32879 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_32878,null));var state_32902__$1 = state_32902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32902__$1,15,out,inst_32879);
} else
{if((state_val_32903 === 13))
{var inst_32856 = (state_32902[7]);var inst_32883 = (state_32902[2]);var tmp32917 = inst_32856;var inst_32856__$1 = tmp32917;var inst_32857 = tmp32917;var state_32902__$1 = (function (){var statearr_32919 = state_32902;(statearr_32919[7] = inst_32856__$1);
(statearr_32919[8] = inst_32857);
(statearr_32919[12] = inst_32883);
return statearr_32919;
})();var statearr_32920_32952 = state_32902__$1;(statearr_32920_32952[2] = null);
(statearr_32920_32952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 14))
{var inst_32876 = (state_32902[2]);var state_32902__$1 = state_32902;var statearr_32921_32953 = state_32902__$1;(statearr_32921_32953[2] = inst_32876);
(statearr_32921_32953[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 15))
{var inst_32881 = (state_32902[2]);var state_32902__$1 = state_32902;var statearr_32923_32954 = state_32902__$1;(statearr_32923_32954[2] = inst_32881);
(statearr_32923_32954[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 16))
{var inst_32860 = (state_32902[9]);var inst_32887 = (state_32902[2]);var inst_32888 = cljs.core._EQ_.call(null,inst_32860,new cljs.core.Keyword(null,"none","none",1017291434));var inst_32889 = typeof inst_32860 === 'number';var inst_32890 = (inst_32888) || (inst_32889);var state_32902__$1 = (function (){var statearr_32926 = state_32902;(statearr_32926[13] = inst_32887);
return statearr_32926;
})();if(cljs.core.truth_(inst_32890))
{var statearr_32927_32955 = state_32902__$1;(statearr_32927_32955[1] = 17);
} else
{var statearr_32928_32956 = state_32902__$1;(statearr_32928_32956[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 17))
{var inst_32860 = (state_32902[9]);var inst_32857 = (state_32902[8]);var tmp32922 = inst_32857;var inst_32856 = inst_32860;var inst_32857__$1 = tmp32922;var state_32902__$1 = (function (){var statearr_32929 = state_32902;(statearr_32929[7] = inst_32856);
(statearr_32929[8] = inst_32857__$1);
return statearr_32929;
})();var statearr_32930_32957 = state_32902__$1;(statearr_32930_32957[2] = null);
(statearr_32930_32957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 18))
{var inst_32856 = (state_32902[7]);var inst_32857 = (state_32902[8]);var tmp32924 = inst_32856;var tmp32925 = inst_32857;var inst_32856__$1 = tmp32924;var inst_32857__$1 = tmp32925;var state_32902__$1 = (function (){var statearr_32931 = state_32902;(statearr_32931[7] = inst_32856__$1);
(statearr_32931[8] = inst_32857__$1);
return statearr_32931;
})();var statearr_32932_32958 = state_32902__$1;(statearr_32932_32958[2] = null);
(statearr_32932_32958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32903 === 19))
{var inst_32896 = (state_32902[2]);var state_32902__$1 = state_32902;var statearr_32933_32959 = state_32902__$1;(statearr_32933_32959[2] = inst_32896);
(statearr_32933_32959[1] = 7);
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
var state_machine__6748__auto____0 = (function (){var statearr_32937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32937[0] = state_machine__6748__auto__);
(statearr_32937[1] = 1);
return statearr_32937;
});
var state_machine__6748__auto____1 = (function (state_32902){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_32902);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e32938){if((e32938 instanceof Object))
{var ex__6751__auto__ = e32938;var statearr_32939_32960 = state_32902;(statearr_32939_32960[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32961 = state_32902;
state_32902 = G__32961;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_32902){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_32902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_32940 = f__6763__auto__.call(null);(statearr_32940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___32941);
return statearr_32940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
huli.main.menu_proc = (function menu_proc(select,cancel,menu,data){var ctrl = cljs.core.async.chan.call(null);var sel = utils.reactive.map.call(null,cljs.core.second,utils.reactive.filter.call(null,cljs.core.vector_QMARK_,huli.main.selector.call(null,huli.main.highlighter.call(null,select,menu,ctrl),menu,data)));var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_33011){var state_val_33012 = (state_33011[1]);if((state_val_33012 === 6))
{var inst_33009 = (state_33011[2]);var state_33011__$1 = state_33011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33011__$1,inst_33009);
} else
{if((state_val_33012 === 5))
{var inst_32999 = (state_33011[7]);var state_33011__$1 = state_33011;var statearr_33013_33026 = state_33011__$1;(statearr_33013_33026[2] = inst_32999);
(statearr_33013_33026[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33012 === 4))
{var state_33011__$1 = state_33011;var statearr_33014_33027 = state_33011__$1;(statearr_33014_33027[2] = new cljs.core.Keyword(null,"cancel","cancel",3941147116));
(statearr_33014_33027[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33012 === 3))
{var inst_32999 = (state_33011[7]);var inst_33000 = (state_33011[8]);var inst_33002 = (state_33011[2]);var inst_33003 = cljs.core._EQ_.call(null,inst_33000,cancel);var inst_33004 = cljs.core._EQ_.call(null,inst_32999,new cljs.core.Keyword(null,"none","none",1017291434));var inst_33005 = (inst_33003) || (inst_33004);var state_33011__$1 = (function (){var statearr_33015 = state_33011;(statearr_33015[9] = inst_33002);
return statearr_33015;
})();if(cljs.core.truth_(inst_33005))
{var statearr_33016_33028 = state_33011__$1;(statearr_33016_33028[1] = 4);
} else
{var statearr_33017_33029 = state_33011__$1;(statearr_33017_33029[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33012 === 2))
{var inst_32998 = (state_33011[2]);var inst_32999 = cljs.core.nth.call(null,inst_32998,0,null);var inst_33000 = cljs.core.nth.call(null,inst_32998,1,null);var state_33011__$1 = (function (){var statearr_33018 = state_33011;(statearr_33018[7] = inst_32999);
(statearr_33018[8] = inst_33000);
return statearr_33018;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33011__$1,3,ctrl,new cljs.core.Keyword(null,"exit","exit",1017031824));
} else
{if((state_val_33012 === 1))
{var inst_32995 = [cancel,sel];var inst_32996 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_32995,null));var state_33011__$1 = state_33011;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33011__$1,2,inst_32996);
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
var state_machine__6748__auto____0 = (function (){var statearr_33022 = [null,null,null,null,null,null,null,null,null,null];(statearr_33022[0] = state_machine__6748__auto__);
(statearr_33022[1] = 1);
return statearr_33022;
});
var state_machine__6748__auto____1 = (function (state_33011){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_33011);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e33023){if((e33023 instanceof Object))
{var ex__6751__auto__ = e33023;var statearr_33024_33030 = state_33011;(statearr_33024_33030[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33031 = state_33011;
state_33011 = G__33031;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_33011){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_33011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_33025 = f__6763__auto__.call(null);(statearr_33025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_33025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
huli.main.autocompleter_STAR_ = (function autocompleter_STAR_(p__33032){var map__33212 = p__33032;var map__33212__$1 = ((cljs.core.seq_QMARK_.call(null,map__33212))?cljs.core.apply.call(null,cljs.core.hash_map,map__33212):map__33212);var opts = map__33212__$1;var menu = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"menu","menu",1017252049));var cancel = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var select = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"select","select",4402849902));var query = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"query","query",1121848378));var focus = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var out = cljs.core.async.chan.call(null);var vec__33213 = utils.reactive.split.call(null,utils.reactive.throttle_msg_QMARK_,query);var query__$1 = cljs.core.nth.call(null,vec__33213,0,null);var raw = cljs.core.nth.call(null,vec__33213,1,null);var c__6762__auto___33391 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_33323){var state_val_33324 = (state_33323[1]);if((state_val_33324 === 32))
{var inst_33305 = (state_33323[2]);var state_33323__$1 = state_33323;var statearr_33326_33392 = state_33323__$1;(statearr_33326_33392[2] = inst_33305);
(statearr_33326_33392[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 1))
{var inst_33214 = null;var inst_33215 = false;var state_33323__$1 = (function (){var statearr_33327 = state_33323;(statearr_33327[7] = inst_33214);
(statearr_33327[8] = inst_33215);
return statearr_33327;
})();var statearr_33328_33393 = state_33323__$1;(statearr_33328_33393[2] = null);
(statearr_33328_33393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 33))
{var inst_33215 = (state_33323[8]);var inst_33302 = (state_33323[2]);var tmp33325 = inst_33215;var inst_33214 = null;var inst_33215__$1 = tmp33325;var state_33323__$1 = (function (){var statearr_33331 = state_33323;(statearr_33331[9] = inst_33302);
(statearr_33331[7] = inst_33214);
(statearr_33331[8] = inst_33215__$1);
return statearr_33331;
})();var statearr_33332_33394 = state_33323__$1;(statearr_33332_33394[2] = null);
(statearr_33332_33394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 2))
{var inst_33218 = [raw,cancel,focus,query__$1,select];var inst_33219 = (new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,inst_33218,null));var state_33323__$1 = state_33323;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33323__$1,4,inst_33219);
} else
{if((state_val_33324 === 34))
{var inst_33214 = (state_33323[7]);var inst_33215 = (state_33323[8]);var tmp33329 = inst_33214;var tmp33330 = inst_33215;var inst_33214__$1 = tmp33329;var inst_33215__$1 = tmp33330;var state_33323__$1 = (function (){var statearr_33333 = state_33323;(statearr_33333[7] = inst_33214__$1);
(statearr_33333[8] = inst_33215__$1);
return statearr_33333;
})();var statearr_33334_33395 = state_33323__$1;(statearr_33334_33395[2] = null);
(statearr_33334_33395[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 3))
{var inst_33321 = (state_33323[2]);var state_33323__$1 = state_33323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33323__$1,inst_33321);
} else
{if((state_val_33324 === 35))
{var state_33323__$1 = state_33323;var statearr_33335_33396 = state_33323__$1;(statearr_33335_33396[2] = null);
(statearr_33335_33396[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 4))
{var inst_33223 = (state_33323[10]);var inst_33221 = (state_33323[2]);var inst_33222 = cljs.core.nth.call(null,inst_33221,0,null);var inst_33223__$1 = cljs.core.nth.call(null,inst_33221,1,null);var inst_33224 = cljs.core._EQ_.call(null,inst_33223__$1,focus);var state_33323__$1 = (function (){var statearr_33337 = state_33323;(statearr_33337[10] = inst_33223__$1);
(statearr_33337[11] = inst_33222);
return statearr_33337;
})();if(inst_33224)
{var statearr_33338_33397 = state_33323__$1;(statearr_33338_33397[1] = 5);
} else
{var statearr_33339_33398 = state_33323__$1;(statearr_33339_33398[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 36))
{var inst_33311 = (state_33323[2]);var state_33323__$1 = state_33323;var statearr_33340_33399 = state_33323__$1;(statearr_33340_33399[2] = inst_33311);
(statearr_33340_33399[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 5))
{var inst_33214 = (state_33323[7]);var tmp33336 = inst_33214;var inst_33214__$1 = tmp33336;var inst_33215 = true;var state_33323__$1 = (function (){var statearr_33341 = state_33323;(statearr_33341[7] = inst_33214__$1);
(statearr_33341[8] = inst_33215);
return statearr_33341;
})();var statearr_33342_33400 = state_33323__$1;(statearr_33342_33400[2] = null);
(statearr_33342_33400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 6))
{var inst_33223 = (state_33323[10]);var inst_33228 = cljs.core._EQ_.call(null,inst_33223,cancel);var state_33323__$1 = state_33323;if(inst_33228)
{var statearr_33343_33401 = state_33323__$1;(statearr_33343_33401[1] = 8);
} else
{var statearr_33344_33402 = state_33323__$1;(statearr_33344_33402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 7))
{var inst_33319 = (state_33323[2]);var state_33323__$1 = state_33323;var statearr_33345_33403 = state_33323__$1;(statearr_33345_33403[2] = inst_33319);
(statearr_33345_33403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 8))
{var inst_33230 = huli.main._hide_BANG_.call(null,menu);var inst_33231 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_33232 = utils.helpers.now.call(null);var state_33323__$1 = (function (){var statearr_33346 = state_33323;(statearr_33346[12] = inst_33230);
return statearr_33346;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33323__$1,11,inst_33231,inst_33232);
} else
{if((state_val_33324 === 9))
{var inst_33215 = (state_33323[8]);var state_33323__$1 = state_33323;if(cljs.core.truth_(inst_33215))
{var statearr_33348_33404 = state_33323__$1;(statearr_33348_33404[1] = 12);
} else
{var statearr_33349_33405 = state_33323__$1;(statearr_33349_33405[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 10))
{var inst_33317 = (state_33323[2]);var state_33323__$1 = state_33323;var statearr_33350_33406 = state_33323__$1;(statearr_33350_33406[2] = inst_33317);
(statearr_33350_33406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 11))
{var inst_33214 = (state_33323[7]);var inst_33222 = (state_33323[11]);var inst_33234 = (state_33323[2]);var inst_33235 = cljs.core.not_EQ_.call(null,inst_33222,new cljs.core.Keyword(null,"blur","blur",1016931289));var tmp33347 = inst_33214;var inst_33214__$1 = tmp33347;var inst_33215 = inst_33235;var state_33323__$1 = (function (){var statearr_33351 = state_33323;(statearr_33351[13] = inst_33234);
(statearr_33351[7] = inst_33214__$1);
(statearr_33351[8] = inst_33215);
return statearr_33351;
})();var statearr_33352_33407 = state_33323__$1;(statearr_33352_33407[2] = null);
(statearr_33352_33407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 12))
{var inst_33223 = (state_33323[10]);var inst_33239 = cljs.core._EQ_.call(null,inst_33223,query__$1);var state_33323__$1 = state_33323;var statearr_33353_33408 = state_33323__$1;(statearr_33353_33408[2] = inst_33239);
(statearr_33353_33408[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 13))
{var inst_33215 = (state_33323[8]);var state_33323__$1 = state_33323;var statearr_33354_33409 = state_33323__$1;(statearr_33354_33409[2] = inst_33215);
(statearr_33354_33409[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 14))
{var inst_33242 = (state_33323[2]);var state_33323__$1 = state_33323;if(cljs.core.truth_(inst_33242))
{var statearr_33355_33410 = state_33323__$1;(statearr_33355_33410[1] = 15);
} else
{var statearr_33356_33411 = state_33323__$1;(statearr_33356_33411[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 15))
{var inst_33222 = (state_33323[11]);var inst_33245 = new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(opts);var inst_33246 = cljs.core.second.call(null,inst_33222);var inst_33247 = inst_33245.call(null,inst_33246);var inst_33248 = [cancel,inst_33247];var inst_33249 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_33248,null));var state_33323__$1 = state_33323;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33323__$1,18,inst_33249);
} else
{if((state_val_33324 === 16))
{var inst_33214 = (state_33323[7]);var state_33323__$1 = state_33323;if(cljs.core.truth_(inst_33214))
{var statearr_33357_33412 = state_33323__$1;(statearr_33357_33412[1] = 22);
} else
{var statearr_33358_33413 = state_33323__$1;(statearr_33358_33413[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 17))
{var inst_33315 = (state_33323[2]);var state_33323__$1 = state_33323;var statearr_33359_33414 = state_33323__$1;(statearr_33359_33414[2] = inst_33315);
(statearr_33359_33414[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 18))
{var inst_33252 = (state_33323[14]);var inst_33251 = (state_33323[2]);var inst_33252__$1 = cljs.core.nth.call(null,inst_33251,0,null);var inst_33253 = cljs.core.nth.call(null,inst_33251,1,null);var inst_33254 = cljs.core._EQ_.call(null,inst_33253,cancel);var inst_33255 = cljs.core.count.call(null,inst_33252__$1);var inst_33256 = (inst_33255 === 0);var inst_33257 = (inst_33254) || (inst_33256);var state_33323__$1 = (function (){var statearr_33361 = state_33323;(statearr_33361[14] = inst_33252__$1);
return statearr_33361;
})();if(cljs.core.truth_(inst_33257))
{var statearr_33362_33415 = state_33323__$1;(statearr_33362_33415[1] = 19);
} else
{var statearr_33363_33416 = state_33323__$1;(statearr_33363_33416[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 19))
{var inst_33252 = (state_33323[14]);var inst_33259 = huli.main._hide_BANG_.call(null,menu);var inst_33260 = cljs.core.not_EQ_.call(null,inst_33252,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_33214 = null;var inst_33215 = inst_33260;var state_33323__$1 = (function (){var statearr_33364 = state_33323;(statearr_33364[7] = inst_33214);
(statearr_33364[8] = inst_33215);
(statearr_33364[15] = inst_33259);
return statearr_33364;
})();var statearr_33365_33417 = state_33323__$1;(statearr_33365_33417[2] = null);
(statearr_33365_33417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 20))
{var inst_33252 = (state_33323[14]);var inst_33215 = (state_33323[8]);var inst_33263 = huli.main._show_BANG_.call(null,menu);var inst_33264 = huli.main._set_items_BANG_.call(null,menu,inst_33252);var tmp33360 = inst_33215;var inst_33214 = inst_33252;var inst_33215__$1 = tmp33360;var state_33323__$1 = (function (){var statearr_33366 = state_33323;(statearr_33366[7] = inst_33214);
(statearr_33366[8] = inst_33215__$1);
(statearr_33366[16] = inst_33263);
(statearr_33366[17] = inst_33264);
return statearr_33366;
})();var statearr_33367_33418 = state_33323__$1;(statearr_33367_33418[2] = null);
(statearr_33367_33418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 21))
{var inst_33267 = (state_33323[2]);var state_33323__$1 = state_33323;var statearr_33368_33419 = state_33323__$1;(statearr_33368_33419[2] = inst_33267);
(statearr_33368_33419[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 22))
{var inst_33223 = (state_33323[10]);var inst_33270 = cljs.core._EQ_.call(null,inst_33223,select);var state_33323__$1 = state_33323;var statearr_33369_33420 = state_33323__$1;(statearr_33369_33420[2] = inst_33270);
(statearr_33369_33420[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 23))
{var inst_33214 = (state_33323[7]);var state_33323__$1 = state_33323;var statearr_33370_33421 = state_33323__$1;(statearr_33370_33421[2] = inst_33214);
(statearr_33370_33421[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 24))
{var inst_33273 = (state_33323[2]);var state_33323__$1 = state_33323;if(cljs.core.truth_(inst_33273))
{var statearr_33371_33422 = state_33323__$1;(statearr_33371_33422[1] = 25);
} else
{var statearr_33372_33423 = state_33323__$1;(statearr_33372_33423[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 25))
{var inst_33275 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_33276 = cljs.core.reset_BANG_.call(null,inst_33275,true);var inst_33277 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_33278 = utils.helpers.now.call(null);var state_33323__$1 = (function (){var statearr_33373 = state_33323;(statearr_33373[18] = inst_33276);
return statearr_33373;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33323__$1,28,inst_33277,inst_33278);
} else
{if((state_val_33324 === 26))
{var state_33323__$1 = state_33323;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_33374_33424 = state_33323__$1;(statearr_33374_33424[1] = 34);
} else
{var statearr_33375_33425 = state_33323__$1;(statearr_33375_33425[1] = 35);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 27))
{var inst_33313 = (state_33323[2]);var state_33323__$1 = state_33323;var statearr_33376_33426 = state_33323__$1;(statearr_33376_33426[2] = inst_33313);
(statearr_33376_33426[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 28))
{var inst_33214 = (state_33323[7]);var inst_33222 = (state_33323[11]);var inst_33280 = (state_33323[2]);var inst_33281 = new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990).cljs$core$IFn$_invoke$arity$1(opts);var inst_33282 = [inst_33222];var inst_33283 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_33282,null));var inst_33284 = utils.reactive.concat.call(null,inst_33283,select);var inst_33285 = [raw,cancel];var inst_33286 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_33285,null));var inst_33287 = utils.reactive.fan_in.call(null,inst_33286);var inst_33288 = inst_33281.call(null,inst_33284,inst_33287,menu,inst_33214);var state_33323__$1 = (function (){var statearr_33377 = state_33323;(statearr_33377[19] = inst_33280);
return statearr_33377;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33323__$1,29,inst_33288);
} else
{if((state_val_33324 === 29))
{var inst_33290 = (state_33323[20]);var inst_33290__$1 = (state_33323[2]);var inst_33291 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_33292 = cljs.core.reset_BANG_.call(null,inst_33291,false);var inst_33293 = huli.main._hide_BANG_.call(null,menu);var inst_33294 = cljs.core._EQ_.call(null,inst_33290__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var state_33323__$1 = (function (){var statearr_33378 = state_33323;(statearr_33378[20] = inst_33290__$1);
(statearr_33378[21] = inst_33293);
(statearr_33378[22] = inst_33292);
return statearr_33378;
})();if(inst_33294)
{var statearr_33379_33427 = state_33323__$1;(statearr_33379_33427[1] = 30);
} else
{var statearr_33380_33428 = state_33323__$1;(statearr_33380_33428[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 30))
{var inst_33222 = (state_33323[11]);var inst_33296 = cljs.core.not_EQ_.call(null,inst_33222,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_33214 = null;var inst_33215 = inst_33296;var state_33323__$1 = (function (){var statearr_33381 = state_33323;(statearr_33381[7] = inst_33214);
(statearr_33381[8] = inst_33215);
return statearr_33381;
})();var statearr_33382_33429 = state_33323__$1;(statearr_33382_33429[2] = null);
(statearr_33382_33429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33324 === 31))
{var inst_33290 = (state_33323[20]);var inst_33299 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(opts);var inst_33300 = huli.main._set_text_BANG_.call(null,inst_33299,inst_33290);var state_33323__$1 = (function (){var statearr_33383 = state_33323;(statearr_33383[23] = inst_33300);
return statearr_33383;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33323__$1,33,out,inst_33290);
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
var state_machine__6748__auto____0 = (function (){var statearr_33387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33387[0] = state_machine__6748__auto__);
(statearr_33387[1] = 1);
return statearr_33387;
});
var state_machine__6748__auto____1 = (function (state_33323){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_33323);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e33388){if((e33388 instanceof Object))
{var ex__6751__auto__ = e33388;var statearr_33389_33430 = state_33323;(statearr_33389_33430[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33431 = state_33323;
state_33323 = G__33431;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_33390 = f__6763__auto__.call(null);(statearr_33390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___33391);
return statearr_33390;
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
})),utils.reactive.always.call(null,new cljs.core.Keyword(null,"select","select",4402849902),utils.reactive.filter.call(null,(function (p__33434){var vec__33435 = p__33434;var d = cljs.core.nth.call(null,vec__33435,0,null);var u = cljs.core.nth.call(null,vec__33435,1,null);return cljs.core._EQ_.call(null,d,u);
}),utils.reactive.cyclic_barrier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089)),huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146))], null))))], null));
});
huli.main.html_input_events = (function html_input_events(input){return utils.reactive.split.call(null,(function (p1__33436_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__33436_SHARP_));
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
goog.events.listen(document.body,goog.events.EventType.MOUSEDOWN,(function (e){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__33437_SHARP_){return utils.dom.in_QMARK_.call(null,e,p1__33437_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu,input], null))))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,out,utils.helpers.now.call(null));
}
}));
return out;
});
huli.main.html_autocompleter = (function html_autocompleter(input,menu,completions,throttle){var selection_state = cljs.core.atom.call(null,false);var query_ctrl = cljs.core.async.chan.call(null);var vec__33439 = huli.main.html_input_events.call(null,input);var filtered = cljs.core.nth.call(null,vec__33439,0,null);var removed = cljs.core.nth.call(null,vec__33439,1,null);if(cljs.core.truth_(huli.main.less_than_ie9_QMARK_.call(null)))
{goog.events.listen(menu,goog.events.EventType.SELECTSTART,(function (e){return false;
}));
} else
{}
huli.main._set_text_BANG_.call(null,input,"");
return huli.main.autocompleter_STAR_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"completions","completions",1416465289),new cljs.core.Keyword(null,"selection-state","selection-state",2374755458),new cljs.core.Keyword(null,"cancel","cancel",3941147116),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362),new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.Keyword(null,"select","select",4402849902)],[completions,selection_state,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [removed,utils.reactive.always.call(null,new cljs.core.Keyword(null,"blur","blur",1016931289),((cljs.core.not.call(null,huli.main.less_than_ie9_QMARK_.call(null)))?utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"blur","blur",1016931289)):huli.main.ie_blur.call(null,input,menu,selection_state)))], null)),menu,utils.reactive.always.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066),utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"focus","focus",1111509066))),query_ctrl,huli.main.menu_proc,input,utils.reactive.throttle_STAR_.call(null,utils.reactive.distinct.call(null,filtered),throttle,cljs.core.async.chan.call(null),query_ctrl),huli.main.html_menu_events.call(null,input,menu,selection_state)]));
});
huli.main.url__GT_query = (function url__GT_query(url,transform){return (function (query){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_33461){var state_val_33462 = (state_33461[1]);if((state_val_33462 === 2))
{var inst_33458 = (state_33461[2]);var inst_33459 = cljs.core.map.call(null,transform,inst_33458);var state_33461__$1 = state_33461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33461__$1,inst_33459);
} else
{if((state_val_33462 === 1))
{var inst_33455 = [cljs.core.str(url),cljs.core.str(query)].join('');var inst_33456 = utils.reactive.jsonp.call(null,inst_33455);var state_33461__$1 = state_33461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,2,inst_33456);
} else
{return null;
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_33466 = [null,null,null,null,null,null,null];(statearr_33466[0] = state_machine__6748__auto__);
(statearr_33466[1] = 1);
return statearr_33466;
});
var state_machine__6748__auto____1 = (function (state_33461){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_33461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e33467){if((e33467 instanceof Object))
{var ex__6751__auto__ = e33467;var statearr_33468_33470 = state_33461;(statearr_33468_33470[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33471 = state_33461;
state_33461 = G__33471;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_33461){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_33461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_33469 = f__6763__auto__.call(null);(statearr_33469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_33469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
});
huli.main.suggestions_obj = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"How do I",new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),34,new cljs.core.Keyword(null,"type","type",1017479852),"Post"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"What is",new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),35,new cljs.core.Keyword(null,"type","type",1017479852),"Post"], null)], null)], null);
huli.main.suggestions_flat1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post 11","post 2","post 3"], null);
huli.main.suggestions_flat2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["post 4","post 5","post 6"], null);
huli.main.datasets_1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source-data","source-data",882603406),huli.main.suggestions_flat1,new cljs.core.Keyword(null,"header","header",4087600639),"<li class='huli-header'>HEADER</li>",new cljs.core.Keyword(null,"footer","footer",4040009997),"<li class='huli-footer'>FOOT</li>",new cljs.core.Keyword(null,"empty","empty",1110538431),"<li>woot</li>"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-data","source-data",882603406),huli.main.suggestions_flat2], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-data","source-data",882603406),huli.main.suggestions_obj], null)], null);
huli.main.autocomplete = (function autocomplete(js_opts){var input_id = js_opts.inputId;var url = js_opts.url;var transform = (function (){var or__3443__auto__ = js_opts.transform;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return ((function (or__3443__auto__,input_id,url){
return (function (p1__33472_SHARP_){var or__3443__auto____$1 = p1__33472_SHARP_;if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return "";
}
});
;})(or__3443__auto__,input_id,url))
}
})();var menu_el = utils.dom.insert_sibling.call(null,utils.dom.html.call(null,huli.ui.show_menu.call(null,huli.main.datasets_1)),utils.dom.by_id.call(null,input_id));var ac = huli.main.html_autocompleter.call(null,utils.dom.by_id.call(null,input_id),menu_el,huli.main.url__GT_query.call(null,url,transform),750);var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_33511){var state_val_33512 = (state_33511[1]);if((state_val_33512 === 7))
{var inst_33503 = (state_33511[2]);var state_33511__$1 = (function (){var statearr_33513 = state_33511;(statearr_33513[7] = inst_33503);
return statearr_33513;
})();var statearr_33514_33527 = state_33511__$1;(statearr_33514_33527[2] = null);
(statearr_33514_33527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33512 === 6))
{var inst_33507 = (state_33511[2]);var state_33511__$1 = state_33511;var statearr_33515_33528 = state_33511__$1;(statearr_33515_33528[2] = inst_33507);
(statearr_33515_33528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33512 === 5))
{var state_33511__$1 = state_33511;var statearr_33516_33529 = state_33511__$1;(statearr_33516_33529[2] = null);
(statearr_33516_33529[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33512 === 4))
{var state_33511__$1 = state_33511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33511__$1,7,ac);
} else
{if((state_val_33512 === 3))
{var inst_33509 = (state_33511[2]);var state_33511__$1 = state_33511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33511__$1,inst_33509);
} else
{if((state_val_33512 === 2))
{var state_33511__$1 = state_33511;if(true)
{var statearr_33517_33530 = state_33511__$1;(statearr_33517_33530[1] = 4);
} else
{var statearr_33518_33531 = state_33511__$1;(statearr_33518_33531[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33512 === 1))
{var state_33511__$1 = state_33511;var statearr_33519_33532 = state_33511__$1;(statearr_33519_33532[2] = null);
(statearr_33519_33532[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_33523 = [null,null,null,null,null,null,null,null];(statearr_33523[0] = state_machine__6748__auto__);
(statearr_33523[1] = 1);
return statearr_33523;
});
var state_machine__6748__auto____1 = (function (state_33511){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_33511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e33524){if((e33524 instanceof Object))
{var ex__6751__auto__ = e33524;var statearr_33525_33533 = state_33511;(statearr_33525_33533[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33511);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33534 = state_33511;
state_33511 = G__33534;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_33511){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_33511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_33526 = f__6763__auto__.call(null);(statearr_33526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_33526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
goog.exportSymbol('huli.main.autocomplete', huli.main.autocomplete);

//# sourceMappingURL=main.js.map