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
huli.main.key__GT_keyword = (function key__GT_keyword(code){var pred__11318 = cljs.core._EQ_;var expr__11319 = code;if(cljs.core.truth_(pred__11318.call(null,huli.main.UP_ARROW,expr__11319)))
{return new cljs.core.Keyword(null,"previous","previous",4035096169);
} else
{if(cljs.core.truth_(pred__11318.call(null,huli.main.DOWN_ARROW,expr__11319)))
{return new cljs.core.Keyword(null,"next","next",1017282149);
} else
{if(cljs.core.truth_(pred__11318.call(null,huli.main.ENTER,expr__11319)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__11318.call(null,huli.main.TAB,expr__11319)))
{return new cljs.core.Keyword(null,"select","select",4402849902);
} else
{if(cljs.core.truth_(pred__11318.call(null,huli.main.ESC,expr__11319)))
{return new cljs.core.Keyword(null,"exit","exit",1017031824);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11319)].join('')));
}
}
}
}
}
});
huli.main.IHighlightable = (function (){var obj11322 = {};return obj11322;
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
huli.main.ISelectable = (function (){var obj11324 = {};return obj11324;
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
huli.main.IHideable = (function (){var obj11326 = {};return obj11326;
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
huli.main.ITextField = (function (){var obj11328 = {};return obj11328;
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
huli.main.IUIList = (function (){var obj11330 = {};return obj11330;
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
HTMLUListElement.prototype.huli$main$IUIList$_set_items_BANG_$arity$2 = (function (list,items){var list__$1 = this;return utils.dom.set_html_BANG_.call(null,list__$1,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4160__auto__ = (function iter__11331(s__11332){return (new cljs.core.LazySeq(null,(function (){var s__11332__$1 = s__11332;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11332__$1);if(temp__4092__auto__)
{var s__11332__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11332__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__11332__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__11334 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__11333 = 0;while(true){
if((i__11333 < size__4159__auto__))
{var item = cljs.core._nth.call(null,c__4158__auto__,i__11333);cljs.core.chunk_append.call(null,b__11334,[cljs.core.str("<li>"),cljs.core.str(item),cljs.core.str("</li>")].join(''));
{
var G__11335 = (i__11333 + 1);
i__11333 = G__11335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11334),iter__11331.call(null,cljs.core.chunk_rest.call(null,s__11332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11334),null);
}
} else
{var item = cljs.core.first.call(null,s__11332__$2);return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(item),cljs.core.str("</li>")].join(''),iter__11331.call(null,cljs.core.rest.call(null,s__11332__$2)));
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
}catch (e11350){if((e11350 instanceof Error))
{var e__4830__auto__ = e11350;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11350;
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
}catch (e11351){if((e11351 instanceof Error))
{var e__4830__auto__ = e11351;if((e__4830__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11351;
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
}catch (e11348){if((e11348 instanceof Error))
{var e__4830__auto__ = e11348;if((e__4830__auto__ === cljs.core.match.backtrack))
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
}catch (e11349){if((e11349 instanceof Error))
{var e__4830__auto____$1 = e11349;if((e__4830__auto____$1 === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(idx),cljs.core.str(" "),cljs.core.str(key)].join('')));
} else
{throw e__4830__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11349;
} else
{return null;
}
}
}} else
{throw e__4830__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11348;
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
var out = cljs.core.async.chan.call(null);var c__6762__auto___11516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_11482){var state_val_11483 = (state_11482[1]);if((state_val_11483 === 1))
{var inst_11434 = new cljs.core.Keyword(null,"none","none",1017291434);var state_11482__$1 = (function (){var statearr_11484 = state_11482;(statearr_11484[7] = inst_11434);
return statearr_11484;
})();var statearr_11485_11517 = state_11482__$1;(statearr_11485_11517[2] = null);
(statearr_11485_11517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 2))
{var inst_11437 = [in$,control];var inst_11438 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11437,null));var state_11482__$1 = state_11482;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11482__$1,4,inst_11438);
} else
{if((state_val_11483 === 3))
{var inst_11480 = (state_11482[2]);var state_11482__$1 = state_11482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11482__$1,inst_11480);
} else
{if((state_val_11483 === 4))
{var inst_11442 = (state_11482[8]);var inst_11440 = (state_11482[2]);var inst_11441 = cljs.core.nth.call(null,inst_11440,0,null);var inst_11442__$1 = cljs.core.nth.call(null,inst_11440,1,null);var inst_11446 = cljs.core._EQ_.call(null,control,inst_11442__$1);var state_11482__$1 = (function (){var statearr_11486 = state_11482;(statearr_11486[8] = inst_11442__$1);
(statearr_11486[9] = inst_11441);
return statearr_11486;
})();if(inst_11446)
{var statearr_11487_11518 = state_11482__$1;(statearr_11487_11518[1] = 5);
} else
{var statearr_11488_11519 = state_11482__$1;(statearr_11488_11519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 5))
{var state_11482__$1 = state_11482;var statearr_11489_11520 = state_11482__$1;(statearr_11489_11520[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_11489_11520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 6))
{var inst_11442 = (state_11482[8]);var inst_11449 = cljs.core._EQ_.call(null,in$,inst_11442);var state_11482__$1 = state_11482;if(inst_11449)
{var statearr_11490_11521 = state_11482__$1;(statearr_11490_11521[1] = 8);
} else
{var statearr_11491_11522 = state_11482__$1;(statearr_11491_11522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 7))
{var inst_11478 = (state_11482[2]);var state_11482__$1 = state_11482;var statearr_11492_11523 = state_11482__$1;(statearr_11492_11523[2] = inst_11478);
(statearr_11492_11523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 8))
{var inst_11454 = (state_11482[10]);var inst_11441 = (state_11482[9]);var inst_11451 = [new cljs.core.Keyword(null,"previous","previous",4035096169),null,new cljs.core.Keyword(null,"clear","clear",1108650431),null,new cljs.core.Keyword(null,"next","next",1017282149),null];var inst_11452 = (new cljs.core.PersistentArrayMap(null,3,inst_11451,null));var inst_11453 = (new cljs.core.PersistentHashSet(null,inst_11452,null));var inst_11454__$1 = inst_11453.call(null,inst_11441);var state_11482__$1 = (function (){var statearr_11493 = state_11482;(statearr_11493[10] = inst_11454__$1);
return statearr_11493;
})();if(cljs.core.truth_(inst_11454__$1))
{var statearr_11494_11524 = state_11482__$1;(statearr_11494_11524[1] = 11);
} else
{var statearr_11495_11525 = state_11482__$1;(statearr_11495_11525[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 9))
{var inst_11442 = (state_11482[8]);var inst_11472 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_11442)].join('');var inst_11473 = (new Error(inst_11472));var inst_11474 = (function(){throw inst_11473})();var state_11482__$1 = state_11482;var statearr_11496_11526 = state_11482__$1;(statearr_11496_11526[2] = inst_11474);
(statearr_11496_11526[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 10))
{var inst_11476 = (state_11482[2]);var state_11482__$1 = state_11482;var statearr_11497_11527 = state_11482__$1;(statearr_11497_11527[2] = inst_11476);
(statearr_11497_11527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 11))
{var inst_11454 = (state_11482[10]);var state_11482__$1 = state_11482;var statearr_11498_11528 = state_11482__$1;(statearr_11498_11528[2] = inst_11454);
(statearr_11498_11528[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 12))
{var inst_11441 = (state_11482[9]);var inst_11457 = typeof inst_11441 === 'number';var state_11482__$1 = state_11482;var statearr_11499_11529 = state_11482__$1;(statearr_11499_11529[2] = inst_11457);
(statearr_11499_11529[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 13))
{var inst_11459 = (state_11482[2]);var state_11482__$1 = state_11482;if(cljs.core.truth_(inst_11459))
{var statearr_11500_11530 = state_11482__$1;(statearr_11500_11530[1] = 14);
} else
{var statearr_11501_11531 = state_11482__$1;(statearr_11501_11531[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 14))
{var inst_11461 = (state_11482[11]);var inst_11434 = (state_11482[7]);var inst_11441 = (state_11482[9]);var inst_11461__$1 = huli.main.handle_event.call(null,inst_11441,inst_11434,list);var state_11482__$1 = (function (){var statearr_11502 = state_11482;(statearr_11502[11] = inst_11461__$1);
return statearr_11502;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11482__$1,17,out,inst_11461__$1);
} else
{if((state_val_11483 === 15))
{var inst_11441 = (state_11482[9]);var state_11482__$1 = state_11482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11482__$1,18,out,inst_11441);
} else
{if((state_val_11483 === 16))
{var inst_11470 = (state_11482[2]);var state_11482__$1 = state_11482;var statearr_11504_11532 = state_11482__$1;(statearr_11504_11532[2] = inst_11470);
(statearr_11504_11532[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 17))
{var inst_11461 = (state_11482[11]);var inst_11463 = (state_11482[2]);var inst_11434 = inst_11461;var state_11482__$1 = (function (){var statearr_11505 = state_11482;(statearr_11505[12] = inst_11463);
(statearr_11505[7] = inst_11434);
return statearr_11505;
})();var statearr_11506_11533 = state_11482__$1;(statearr_11506_11533[2] = null);
(statearr_11506_11533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11483 === 18))
{var inst_11434 = (state_11482[7]);var inst_11467 = (state_11482[2]);var tmp11503 = inst_11434;var inst_11434__$1 = tmp11503;var state_11482__$1 = (function (){var statearr_11507 = state_11482;(statearr_11507[7] = inst_11434__$1);
(statearr_11507[13] = inst_11467);
return statearr_11507;
})();var statearr_11508_11534 = state_11482__$1;(statearr_11508_11534[2] = null);
(statearr_11508_11534[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_11512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11512[0] = state_machine__6748__auto__);
(statearr_11512[1] = 1);
return statearr_11512;
});
var state_machine__6748__auto____1 = (function (state_11482){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_11482);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e11513){if((e11513 instanceof Object))
{var ex__6751__auto__ = e11513;var statearr_11514_11535 = state_11482;(statearr_11514_11535[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11536 = state_11482;
state_11482 = G__11536;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_11482){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_11482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_11515 = f__6763__auto__.call(null);(statearr_11515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___11516);
return statearr_11515;
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
var out = cljs.core.async.chan.call(null);var c__6762__auto___11707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_11668){var state_val_11669 = (state_11668[1]);if((state_val_11669 === 1))
{var inst_11622 = new cljs.core.Keyword(null,"none","none",1017291434);var inst_11623 = new cljs.core.Keyword(null,"none","none",1017291434);var state_11668__$1 = (function (){var statearr_11670 = state_11668;(statearr_11670[7] = inst_11622);
(statearr_11670[8] = inst_11623);
return statearr_11670;
})();var statearr_11671_11708 = state_11668__$1;(statearr_11671_11708[2] = null);
(statearr_11671_11708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 2))
{var state_11668__$1 = state_11668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11668__$1,4,in$);
} else
{if((state_val_11669 === 3))
{var inst_11666 = (state_11668[2]);var state_11668__$1 = state_11668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11668__$1,inst_11666);
} else
{if((state_val_11669 === 4))
{var inst_11626 = (state_11668[9]);var inst_11626__$1 = (state_11668[2]);var inst_11627 = cljs.core._EQ_.call(null,inst_11626__$1,new cljs.core.Keyword(null,"select","select",4402849902));var state_11668__$1 = (function (){var statearr_11672 = state_11668;(statearr_11672[9] = inst_11626__$1);
return statearr_11672;
})();if(inst_11627)
{var statearr_11673_11709 = state_11668__$1;(statearr_11673_11709[1] = 5);
} else
{var statearr_11674_11710 = state_11668__$1;(statearr_11674_11710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 5))
{var inst_11623 = (state_11668[8]);var inst_11629 = typeof inst_11623 === 'number';var state_11668__$1 = state_11668;if(cljs.core.truth_(inst_11629))
{var statearr_11675_11711 = state_11668__$1;(statearr_11675_11711[1] = 8);
} else
{var statearr_11676_11712 = state_11668__$1;(statearr_11676_11712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 6))
{var inst_11626 = (state_11668[9]);var state_11668__$1 = state_11668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11668__$1,16,out,inst_11626);
} else
{if((state_val_11669 === 7))
{var inst_11664 = (state_11668[2]);var state_11668__$1 = state_11668;var statearr_11677_11713 = state_11668__$1;(statearr_11677_11713[2] = inst_11664);
(statearr_11677_11713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 8))
{var inst_11623 = (state_11668[8]);var inst_11631 = huli.main._unselect_BANG_.call(null,list,inst_11623);var state_11668__$1 = state_11668;var statearr_11678_11714 = state_11668__$1;(statearr_11678_11714[2] = inst_11631);
(statearr_11678_11714[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 9))
{var state_11668__$1 = state_11668;var statearr_11679_11715 = state_11668__$1;(statearr_11679_11715[2] = null);
(statearr_11679_11715[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 10))
{var inst_11622 = (state_11668[7]);var inst_11634 = (state_11668[2]);var inst_11635 = typeof inst_11622 === 'number';var state_11668__$1 = (function (){var statearr_11680 = state_11668;(statearr_11680[10] = inst_11634);
return statearr_11680;
})();if(cljs.core.truth_(inst_11635))
{var statearr_11681_11716 = state_11668__$1;(statearr_11681_11716[1] = 11);
} else
{var statearr_11682_11717 = state_11668__$1;(statearr_11682_11717[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 11))
{var inst_11622 = (state_11668[7]);var inst_11637 = huli.main._select_BANG_.call(null,list,inst_11622);var inst_11638 = cljs.core.nth.call(null,data,inst_11622);var inst_11639 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_11638];var inst_11640 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11639,null));var state_11668__$1 = (function (){var statearr_11684 = state_11668;(statearr_11684[11] = inst_11637);
return statearr_11684;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11668__$1,14,out,inst_11640);
} else
{if((state_val_11669 === 12))
{var inst_11622 = (state_11668[7]);var inst_11644 = [new cljs.core.Keyword(null,"select","select",4402849902),inst_11622];var inst_11645 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11644,null));var state_11668__$1 = state_11668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11668__$1,15,out,inst_11645);
} else
{if((state_val_11669 === 13))
{var inst_11622 = (state_11668[7]);var inst_11649 = (state_11668[2]);var tmp11683 = inst_11622;var inst_11622__$1 = tmp11683;var inst_11623 = tmp11683;var state_11668__$1 = (function (){var statearr_11685 = state_11668;(statearr_11685[12] = inst_11649);
(statearr_11685[7] = inst_11622__$1);
(statearr_11685[8] = inst_11623);
return statearr_11685;
})();var statearr_11686_11718 = state_11668__$1;(statearr_11686_11718[2] = null);
(statearr_11686_11718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 14))
{var inst_11642 = (state_11668[2]);var state_11668__$1 = state_11668;var statearr_11687_11719 = state_11668__$1;(statearr_11687_11719[2] = inst_11642);
(statearr_11687_11719[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 15))
{var inst_11647 = (state_11668[2]);var state_11668__$1 = state_11668;var statearr_11689_11720 = state_11668__$1;(statearr_11689_11720[2] = inst_11647);
(statearr_11689_11720[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 16))
{var inst_11626 = (state_11668[9]);var inst_11653 = (state_11668[2]);var inst_11654 = cljs.core._EQ_.call(null,inst_11626,new cljs.core.Keyword(null,"none","none",1017291434));var inst_11655 = typeof inst_11626 === 'number';var inst_11656 = (inst_11654) || (inst_11655);var state_11668__$1 = (function (){var statearr_11692 = state_11668;(statearr_11692[13] = inst_11653);
return statearr_11692;
})();if(cljs.core.truth_(inst_11656))
{var statearr_11693_11721 = state_11668__$1;(statearr_11693_11721[1] = 17);
} else
{var statearr_11694_11722 = state_11668__$1;(statearr_11694_11722[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 17))
{var inst_11626 = (state_11668[9]);var inst_11623 = (state_11668[8]);var tmp11688 = inst_11623;var inst_11622 = inst_11626;var inst_11623__$1 = tmp11688;var state_11668__$1 = (function (){var statearr_11695 = state_11668;(statearr_11695[7] = inst_11622);
(statearr_11695[8] = inst_11623__$1);
return statearr_11695;
})();var statearr_11696_11723 = state_11668__$1;(statearr_11696_11723[2] = null);
(statearr_11696_11723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 18))
{var inst_11622 = (state_11668[7]);var inst_11623 = (state_11668[8]);var tmp11690 = inst_11622;var tmp11691 = inst_11623;var inst_11622__$1 = tmp11690;var inst_11623__$1 = tmp11691;var state_11668__$1 = (function (){var statearr_11697 = state_11668;(statearr_11697[7] = inst_11622__$1);
(statearr_11697[8] = inst_11623__$1);
return statearr_11697;
})();var statearr_11698_11724 = state_11668__$1;(statearr_11698_11724[2] = null);
(statearr_11698_11724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11669 === 19))
{var inst_11662 = (state_11668[2]);var state_11668__$1 = state_11668;var statearr_11699_11725 = state_11668__$1;(statearr_11699_11725[2] = inst_11662);
(statearr_11699_11725[1] = 7);
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
var state_machine__6748__auto____0 = (function (){var statearr_11703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11703[0] = state_machine__6748__auto__);
(statearr_11703[1] = 1);
return statearr_11703;
});
var state_machine__6748__auto____1 = (function (state_11668){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_11668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e11704){if((e11704 instanceof Object))
{var ex__6751__auto__ = e11704;var statearr_11705_11726 = state_11668;(statearr_11705_11726[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11727 = state_11668;
state_11668 = G__11727;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_11668){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_11668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_11706 = f__6763__auto__.call(null);(statearr_11706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___11707);
return statearr_11706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
huli.main.menu_proc = (function menu_proc(select,cancel,menu,data){var ctrl = cljs.core.async.chan.call(null);var sel = utils.reactive.map.call(null,cljs.core.second,utils.reactive.filter.call(null,cljs.core.vector_QMARK_,huli.main.selector.call(null,huli.main.highlighter.call(null,select,menu,ctrl),menu,data)));var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_11777){var state_val_11778 = (state_11777[1]);if((state_val_11778 === 6))
{var inst_11775 = (state_11777[2]);var state_11777__$1 = state_11777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11777__$1,inst_11775);
} else
{if((state_val_11778 === 5))
{var inst_11765 = (state_11777[7]);var state_11777__$1 = state_11777;var statearr_11779_11792 = state_11777__$1;(statearr_11779_11792[2] = inst_11765);
(statearr_11779_11792[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 4))
{var state_11777__$1 = state_11777;var statearr_11780_11793 = state_11777__$1;(statearr_11780_11793[2] = new cljs.core.Keyword(null,"cancel","cancel",3941147116));
(statearr_11780_11793[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 3))
{var inst_11765 = (state_11777[7]);var inst_11766 = (state_11777[8]);var inst_11768 = (state_11777[2]);var inst_11769 = cljs.core._EQ_.call(null,inst_11766,cancel);var inst_11770 = cljs.core._EQ_.call(null,inst_11765,new cljs.core.Keyword(null,"none","none",1017291434));var inst_11771 = (inst_11769) || (inst_11770);var state_11777__$1 = (function (){var statearr_11781 = state_11777;(statearr_11781[9] = inst_11768);
return statearr_11781;
})();if(cljs.core.truth_(inst_11771))
{var statearr_11782_11794 = state_11777__$1;(statearr_11782_11794[1] = 4);
} else
{var statearr_11783_11795 = state_11777__$1;(statearr_11783_11795[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 2))
{var inst_11764 = (state_11777[2]);var inst_11765 = cljs.core.nth.call(null,inst_11764,0,null);var inst_11766 = cljs.core.nth.call(null,inst_11764,1,null);var state_11777__$1 = (function (){var statearr_11784 = state_11777;(statearr_11784[7] = inst_11765);
(statearr_11784[8] = inst_11766);
return statearr_11784;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11777__$1,3,ctrl,new cljs.core.Keyword(null,"exit","exit",1017031824));
} else
{if((state_val_11778 === 1))
{var inst_11761 = [cancel,sel];var inst_11762 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11761,null));var state_11777__$1 = state_11777;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11777__$1,2,inst_11762);
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
var state_machine__6748__auto____0 = (function (){var statearr_11788 = [null,null,null,null,null,null,null,null,null,null];(statearr_11788[0] = state_machine__6748__auto__);
(statearr_11788[1] = 1);
return statearr_11788;
});
var state_machine__6748__auto____1 = (function (state_11777){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_11777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e11789){if((e11789 instanceof Object))
{var ex__6751__auto__ = e11789;var statearr_11790_11796 = state_11777;(statearr_11790_11796[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11797 = state_11777;
state_11777 = G__11797;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_11777){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_11777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_11791 = f__6763__auto__.call(null);(statearr_11791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_11791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
huli.main.autocompleter_STAR_ = (function autocompleter_STAR_(p__11798){var map__11978 = p__11798;var map__11978__$1 = ((cljs.core.seq_QMARK_.call(null,map__11978))?cljs.core.apply.call(null,cljs.core.hash_map,map__11978):map__11978);var opts = map__11978__$1;var menu = cljs.core.get.call(null,map__11978__$1,new cljs.core.Keyword(null,"menu","menu",1017252049));var cancel = cljs.core.get.call(null,map__11978__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var select = cljs.core.get.call(null,map__11978__$1,new cljs.core.Keyword(null,"select","select",4402849902));var query = cljs.core.get.call(null,map__11978__$1,new cljs.core.Keyword(null,"query","query",1121848378));var focus = cljs.core.get.call(null,map__11978__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var out = cljs.core.async.chan.call(null);var vec__11979 = utils.reactive.split.call(null,utils.reactive.throttle_msg_QMARK_,query);var query__$1 = cljs.core.nth.call(null,vec__11979,0,null);var raw = cljs.core.nth.call(null,vec__11979,1,null);var c__6762__auto___12157 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_12089){var state_val_12090 = (state_12089[1]);if((state_val_12090 === 32))
{var inst_12071 = (state_12089[2]);var state_12089__$1 = state_12089;var statearr_12092_12158 = state_12089__$1;(statearr_12092_12158[2] = inst_12071);
(statearr_12092_12158[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 1))
{var inst_11980 = null;var inst_11981 = false;var state_12089__$1 = (function (){var statearr_12093 = state_12089;(statearr_12093[7] = inst_11981);
(statearr_12093[8] = inst_11980);
return statearr_12093;
})();var statearr_12094_12159 = state_12089__$1;(statearr_12094_12159[2] = null);
(statearr_12094_12159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 33))
{var inst_11981 = (state_12089[7]);var inst_12068 = (state_12089[2]);var tmp12091 = inst_11981;var inst_11980 = null;var inst_11981__$1 = tmp12091;var state_12089__$1 = (function (){var statearr_12097 = state_12089;(statearr_12097[7] = inst_11981__$1);
(statearr_12097[8] = inst_11980);
(statearr_12097[9] = inst_12068);
return statearr_12097;
})();var statearr_12098_12160 = state_12089__$1;(statearr_12098_12160[2] = null);
(statearr_12098_12160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 2))
{var inst_11984 = [raw,cancel,focus,query__$1,select];var inst_11985 = (new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11984,null));var state_12089__$1 = state_12089;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12089__$1,4,inst_11985);
} else
{if((state_val_12090 === 34))
{var inst_11981 = (state_12089[7]);var inst_11980 = (state_12089[8]);var tmp12095 = inst_11981;var tmp12096 = inst_11980;var inst_11980__$1 = tmp12096;var inst_11981__$1 = tmp12095;var state_12089__$1 = (function (){var statearr_12099 = state_12089;(statearr_12099[7] = inst_11981__$1);
(statearr_12099[8] = inst_11980__$1);
return statearr_12099;
})();var statearr_12100_12161 = state_12089__$1;(statearr_12100_12161[2] = null);
(statearr_12100_12161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 3))
{var inst_12087 = (state_12089[2]);var state_12089__$1 = state_12089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12089__$1,inst_12087);
} else
{if((state_val_12090 === 35))
{var state_12089__$1 = state_12089;var statearr_12101_12162 = state_12089__$1;(statearr_12101_12162[2] = null);
(statearr_12101_12162[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 4))
{var inst_11989 = (state_12089[10]);var inst_11987 = (state_12089[2]);var inst_11988 = cljs.core.nth.call(null,inst_11987,0,null);var inst_11989__$1 = cljs.core.nth.call(null,inst_11987,1,null);var inst_11990 = cljs.core._EQ_.call(null,inst_11989__$1,focus);var state_12089__$1 = (function (){var statearr_12103 = state_12089;(statearr_12103[10] = inst_11989__$1);
(statearr_12103[11] = inst_11988);
return statearr_12103;
})();if(inst_11990)
{var statearr_12104_12163 = state_12089__$1;(statearr_12104_12163[1] = 5);
} else
{var statearr_12105_12164 = state_12089__$1;(statearr_12105_12164[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 36))
{var inst_12077 = (state_12089[2]);var state_12089__$1 = state_12089;var statearr_12106_12165 = state_12089__$1;(statearr_12106_12165[2] = inst_12077);
(statearr_12106_12165[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 5))
{var inst_11980 = (state_12089[8]);var tmp12102 = inst_11980;var inst_11980__$1 = tmp12102;var inst_11981 = true;var state_12089__$1 = (function (){var statearr_12107 = state_12089;(statearr_12107[7] = inst_11981);
(statearr_12107[8] = inst_11980__$1);
return statearr_12107;
})();var statearr_12108_12166 = state_12089__$1;(statearr_12108_12166[2] = null);
(statearr_12108_12166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 6))
{var inst_11989 = (state_12089[10]);var inst_11994 = cljs.core._EQ_.call(null,inst_11989,cancel);var state_12089__$1 = state_12089;if(inst_11994)
{var statearr_12109_12167 = state_12089__$1;(statearr_12109_12167[1] = 8);
} else
{var statearr_12110_12168 = state_12089__$1;(statearr_12110_12168[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 7))
{var inst_12085 = (state_12089[2]);var state_12089__$1 = state_12089;var statearr_12111_12169 = state_12089__$1;(statearr_12111_12169[2] = inst_12085);
(statearr_12111_12169[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 8))
{var inst_11996 = huli.main._hide_BANG_.call(null,menu);var inst_11997 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_11998 = utils.helpers.now.call(null);var state_12089__$1 = (function (){var statearr_12112 = state_12089;(statearr_12112[12] = inst_11996);
return statearr_12112;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12089__$1,11,inst_11997,inst_11998);
} else
{if((state_val_12090 === 9))
{var inst_11981 = (state_12089[7]);var state_12089__$1 = state_12089;if(cljs.core.truth_(inst_11981))
{var statearr_12114_12170 = state_12089__$1;(statearr_12114_12170[1] = 12);
} else
{var statearr_12115_12171 = state_12089__$1;(statearr_12115_12171[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 10))
{var inst_12083 = (state_12089[2]);var state_12089__$1 = state_12089;var statearr_12116_12172 = state_12089__$1;(statearr_12116_12172[2] = inst_12083);
(statearr_12116_12172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 11))
{var inst_11988 = (state_12089[11]);var inst_11980 = (state_12089[8]);var inst_12000 = (state_12089[2]);var inst_12001 = cljs.core.not_EQ_.call(null,inst_11988,new cljs.core.Keyword(null,"blur","blur",1016931289));var tmp12113 = inst_11980;var inst_11980__$1 = tmp12113;var inst_11981 = inst_12001;var state_12089__$1 = (function (){var statearr_12117 = state_12089;(statearr_12117[7] = inst_11981);
(statearr_12117[8] = inst_11980__$1);
(statearr_12117[13] = inst_12000);
return statearr_12117;
})();var statearr_12118_12173 = state_12089__$1;(statearr_12118_12173[2] = null);
(statearr_12118_12173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 12))
{var inst_11989 = (state_12089[10]);var inst_12005 = cljs.core._EQ_.call(null,inst_11989,query__$1);var state_12089__$1 = state_12089;var statearr_12119_12174 = state_12089__$1;(statearr_12119_12174[2] = inst_12005);
(statearr_12119_12174[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 13))
{var inst_11981 = (state_12089[7]);var state_12089__$1 = state_12089;var statearr_12120_12175 = state_12089__$1;(statearr_12120_12175[2] = inst_11981);
(statearr_12120_12175[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 14))
{var inst_12008 = (state_12089[2]);var state_12089__$1 = state_12089;if(cljs.core.truth_(inst_12008))
{var statearr_12121_12176 = state_12089__$1;(statearr_12121_12176[1] = 15);
} else
{var statearr_12122_12177 = state_12089__$1;(statearr_12122_12177[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 15))
{var inst_11988 = (state_12089[11]);var inst_12011 = new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(opts);var inst_12012 = cljs.core.second.call(null,inst_11988);var inst_12013 = inst_12011.call(null,inst_12012);var inst_12014 = [cancel,inst_12013];var inst_12015 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12014,null));var state_12089__$1 = state_12089;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12089__$1,18,inst_12015);
} else
{if((state_val_12090 === 16))
{var inst_11980 = (state_12089[8]);var state_12089__$1 = state_12089;if(cljs.core.truth_(inst_11980))
{var statearr_12123_12178 = state_12089__$1;(statearr_12123_12178[1] = 22);
} else
{var statearr_12124_12179 = state_12089__$1;(statearr_12124_12179[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 17))
{var inst_12081 = (state_12089[2]);var state_12089__$1 = state_12089;var statearr_12125_12180 = state_12089__$1;(statearr_12125_12180[2] = inst_12081);
(statearr_12125_12180[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 18))
{var inst_12018 = (state_12089[14]);var inst_12017 = (state_12089[2]);var inst_12018__$1 = cljs.core.nth.call(null,inst_12017,0,null);var inst_12019 = cljs.core.nth.call(null,inst_12017,1,null);var inst_12020 = cljs.core._EQ_.call(null,inst_12019,cancel);var inst_12021 = cljs.core.count.call(null,inst_12018__$1);var inst_12022 = (inst_12021 === 0);var inst_12023 = (inst_12020) || (inst_12022);var state_12089__$1 = (function (){var statearr_12127 = state_12089;(statearr_12127[14] = inst_12018__$1);
return statearr_12127;
})();if(cljs.core.truth_(inst_12023))
{var statearr_12128_12181 = state_12089__$1;(statearr_12128_12181[1] = 19);
} else
{var statearr_12129_12182 = state_12089__$1;(statearr_12129_12182[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 19))
{var inst_12018 = (state_12089[14]);var inst_12025 = huli.main._hide_BANG_.call(null,menu);var inst_12026 = cljs.core.not_EQ_.call(null,inst_12018,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_11980 = null;var inst_11981 = inst_12026;var state_12089__$1 = (function (){var statearr_12130 = state_12089;(statearr_12130[7] = inst_11981);
(statearr_12130[8] = inst_11980);
(statearr_12130[15] = inst_12025);
return statearr_12130;
})();var statearr_12131_12183 = state_12089__$1;(statearr_12131_12183[2] = null);
(statearr_12131_12183[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 20))
{var inst_11981 = (state_12089[7]);var inst_12018 = (state_12089[14]);var inst_12029 = huli.main._show_BANG_.call(null,menu);var inst_12030 = huli.main._set_items_BANG_.call(null,menu,inst_12018);var tmp12126 = inst_11981;var inst_11980 = inst_12018;var inst_11981__$1 = tmp12126;var state_12089__$1 = (function (){var statearr_12132 = state_12089;(statearr_12132[16] = inst_12029);
(statearr_12132[7] = inst_11981__$1);
(statearr_12132[8] = inst_11980);
(statearr_12132[17] = inst_12030);
return statearr_12132;
})();var statearr_12133_12184 = state_12089__$1;(statearr_12133_12184[2] = null);
(statearr_12133_12184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 21))
{var inst_12033 = (state_12089[2]);var state_12089__$1 = state_12089;var statearr_12134_12185 = state_12089__$1;(statearr_12134_12185[2] = inst_12033);
(statearr_12134_12185[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 22))
{var inst_11989 = (state_12089[10]);var inst_12036 = cljs.core._EQ_.call(null,inst_11989,select);var state_12089__$1 = state_12089;var statearr_12135_12186 = state_12089__$1;(statearr_12135_12186[2] = inst_12036);
(statearr_12135_12186[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 23))
{var inst_11980 = (state_12089[8]);var state_12089__$1 = state_12089;var statearr_12136_12187 = state_12089__$1;(statearr_12136_12187[2] = inst_11980);
(statearr_12136_12187[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 24))
{var inst_12039 = (state_12089[2]);var state_12089__$1 = state_12089;if(cljs.core.truth_(inst_12039))
{var statearr_12137_12188 = state_12089__$1;(statearr_12137_12188[1] = 25);
} else
{var statearr_12138_12189 = state_12089__$1;(statearr_12138_12189[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 25))
{var inst_12041 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_12042 = cljs.core.reset_BANG_.call(null,inst_12041,true);var inst_12043 = new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362).cljs$core$IFn$_invoke$arity$1(opts);var inst_12044 = utils.helpers.now.call(null);var state_12089__$1 = (function (){var statearr_12139 = state_12089;(statearr_12139[18] = inst_12042);
return statearr_12139;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12089__$1,28,inst_12043,inst_12044);
} else
{if((state_val_12090 === 26))
{var state_12089__$1 = state_12089;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_12140_12190 = state_12089__$1;(statearr_12140_12190[1] = 34);
} else
{var statearr_12141_12191 = state_12089__$1;(statearr_12141_12191[1] = 35);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 27))
{var inst_12079 = (state_12089[2]);var state_12089__$1 = state_12089;var statearr_12142_12192 = state_12089__$1;(statearr_12142_12192[2] = inst_12079);
(statearr_12142_12192[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 28))
{var inst_11988 = (state_12089[11]);var inst_11980 = (state_12089[8]);var inst_12046 = (state_12089[2]);var inst_12047 = new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990).cljs$core$IFn$_invoke$arity$1(opts);var inst_12048 = [inst_11988];var inst_12049 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12048,null));var inst_12050 = utils.reactive.concat.call(null,inst_12049,select);var inst_12051 = [raw,cancel];var inst_12052 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12051,null));var inst_12053 = utils.reactive.fan_in.call(null,inst_12052);var inst_12054 = inst_12047.call(null,inst_12050,inst_12053,menu,inst_11980);var state_12089__$1 = (function (){var statearr_12143 = state_12089;(statearr_12143[19] = inst_12046);
return statearr_12143;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12089__$1,29,inst_12054);
} else
{if((state_val_12090 === 29))
{var inst_12056 = (state_12089[20]);var inst_12056__$1 = (state_12089[2]);var inst_12057 = new cljs.core.Keyword(null,"selection-state","selection-state",2374755458).cljs$core$IFn$_invoke$arity$1(opts);var inst_12058 = cljs.core.reset_BANG_.call(null,inst_12057,false);var inst_12059 = huli.main._hide_BANG_.call(null,menu);var inst_12060 = cljs.core._EQ_.call(null,inst_12056__$1,new cljs.core.Keyword(null,"cancel","cancel",3941147116));var state_12089__$1 = (function (){var statearr_12144 = state_12089;(statearr_12144[21] = inst_12059);
(statearr_12144[22] = inst_12058);
(statearr_12144[20] = inst_12056__$1);
return statearr_12144;
})();if(inst_12060)
{var statearr_12145_12193 = state_12089__$1;(statearr_12145_12193[1] = 30);
} else
{var statearr_12146_12194 = state_12089__$1;(statearr_12146_12194[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 30))
{var inst_11988 = (state_12089[11]);var inst_12062 = cljs.core.not_EQ_.call(null,inst_11988,new cljs.core.Keyword(null,"blur","blur",1016931289));var inst_11980 = null;var inst_11981 = inst_12062;var state_12089__$1 = (function (){var statearr_12147 = state_12089;(statearr_12147[7] = inst_11981);
(statearr_12147[8] = inst_11980);
return statearr_12147;
})();var statearr_12148_12195 = state_12089__$1;(statearr_12148_12195[2] = null);
(statearr_12148_12195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12090 === 31))
{var inst_12056 = (state_12089[20]);var inst_12065 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(opts);var inst_12066 = huli.main._set_text_BANG_.call(null,inst_12065,inst_12056);var state_12089__$1 = (function (){var statearr_12149 = state_12089;(statearr_12149[23] = inst_12066);
return statearr_12149;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12089__$1,33,out,inst_12056);
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
var state_machine__6748__auto____0 = (function (){var statearr_12153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12153[0] = state_machine__6748__auto__);
(statearr_12153[1] = 1);
return statearr_12153;
});
var state_machine__6748__auto____1 = (function (state_12089){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_12089);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e12154){if((e12154 instanceof Object))
{var ex__6751__auto__ = e12154;var statearr_12155_12196 = state_12089;(statearr_12155_12196[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12089);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12197 = state_12089;
state_12089 = G__12197;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_12089){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_12089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_12156 = f__6763__auto__.call(null);(statearr_12156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___12157);
return statearr_12156;
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
})),utils.reactive.always.call(null,new cljs.core.Keyword(null,"select","select",4402849902),utils.reactive.filter.call(null,(function (p__12200){var vec__12201 = p__12200;var d = cljs.core.nth.call(null,vec__12201,0,null);var u = cljs.core.nth.call(null,vec__12201,1,null);return cljs.core._EQ_.call(null,d,u);
}),utils.reactive.cyclic_barrier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089)),huli.main.menu_item_event.call(null,input,menu,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146))], null))))], null));
});
huli.main.html_input_events = (function html_input_events(input){return utils.reactive.split.call(null,(function (p1__12202_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__12202_SHARP_));
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
goog.events.listen(document.body,goog.events.EventType.MOUSEDOWN,(function (e){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12203_SHARP_){return utils.dom.in_QMARK_.call(null,e,p1__12203_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu,input], null))))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,out,utils.helpers.now.call(null));
}
}));
return out;
});
huli.main.html_autocompleter = (function html_autocompleter(input,menu,completions,throttle){var selection_state = cljs.core.atom.call(null,false);var query_ctrl = cljs.core.async.chan.call(null);var vec__12205 = huli.main.html_input_events.call(null,input);var filtered = cljs.core.nth.call(null,vec__12205,0,null);var removed = cljs.core.nth.call(null,vec__12205,1,null);if(cljs.core.truth_(huli.main.less_than_ie9_QMARK_.call(null)))
{goog.events.listen(menu,goog.events.EventType.SELECTSTART,(function (e){return false;
}));
} else
{}
huli.main._set_text_BANG_.call(null,input,"");
return huli.main.autocompleter_STAR_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"completions","completions",1416465289),new cljs.core.Keyword(null,"selection-state","selection-state",2374755458),new cljs.core.Keyword(null,"cancel","cancel",3941147116),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"query-ctrl","query-ctrl",799079362),new cljs.core.Keyword(null,"menu-proc","menu-proc",3735823990),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.Keyword(null,"select","select",4402849902)],[completions,selection_state,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [removed,utils.reactive.always.call(null,new cljs.core.Keyword(null,"blur","blur",1016931289),((cljs.core.not.call(null,huli.main.less_than_ie9_QMARK_.call(null)))?utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"blur","blur",1016931289)):huli.main.ie_blur.call(null,input,menu,selection_state)))], null)),menu,utils.reactive.always.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066),utils.reactive.listen.call(null,input,new cljs.core.Keyword(null,"focus","focus",1111509066))),query_ctrl,huli.main.menu_proc,input,utils.reactive.throttle_STAR_.call(null,utils.reactive.distinct.call(null,filtered),throttle,cljs.core.async.chan.call(null),query_ctrl),huli.main.html_menu_events.call(null,input,menu,selection_state)]));
});
huli.main.foo = (function foo(x){return cljs.core.nth.call(null,x,1);
});
huli.main.url__GT_query = (function url__GT_query(url,transform){return (function (query){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_12227){var state_val_12228 = (state_12227[1]);if((state_val_12228 === 2))
{var inst_12224 = (state_12227[2]);var inst_12225 = transform.call(null,inst_12224);var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12227__$1,inst_12225);
} else
{if((state_val_12228 === 1))
{var inst_12221 = [cljs.core.str(url),cljs.core.str(query)].join('');var inst_12222 = utils.reactive.jsonp.call(null,inst_12221);var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12227__$1,2,inst_12222);
} else
{return null;
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_12232 = [null,null,null,null,null,null,null];(statearr_12232[0] = state_machine__6748__auto__);
(statearr_12232[1] = 1);
return statearr_12232;
});
var state_machine__6748__auto____1 = (function (state_12227){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_12227);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e12233){if((e12233 instanceof Object))
{var ex__6751__auto__ = e12233;var statearr_12234_12236 = state_12227;(statearr_12234_12236[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12237 = state_12227;
state_12227 = G__12237;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_12227){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_12227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_12235 = f__6763__auto__.call(null);(statearr_12235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_12235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
});
huli.main.autocomplete = (function autocomplete(js_opts){var input_id = js_opts.inputId;var url = js_opts.url;var transform = (function (){var or__3443__auto__ = js_opts.transform;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return ((function (or__3443__auto__,input_id,url){
return (function (p1__12238_SHARP_){var or__3443__auto____$1 = p1__12238_SHARP_;if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return "";
}
});
;})(or__3443__auto__,input_id,url))
}
})();var ac = huli.main.html_autocompleter.call(null,utils.dom.by_id.call(null,input_id),utils.dom.by_id.call(null,[cljs.core.str(input_id),cljs.core.str("-menu")].join('')),huli.main.url__GT_query.call(null,url,transform),750);var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_12277){var state_val_12278 = (state_12277[1]);if((state_val_12278 === 7))
{var inst_12269 = (state_12277[2]);var state_12277__$1 = (function (){var statearr_12279 = state_12277;(statearr_12279[7] = inst_12269);
return statearr_12279;
})();var statearr_12280_12293 = state_12277__$1;(statearr_12280_12293[2] = null);
(statearr_12280_12293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12278 === 6))
{var inst_12273 = (state_12277[2]);var state_12277__$1 = state_12277;var statearr_12281_12294 = state_12277__$1;(statearr_12281_12294[2] = inst_12273);
(statearr_12281_12294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12278 === 5))
{var state_12277__$1 = state_12277;var statearr_12282_12295 = state_12277__$1;(statearr_12282_12295[2] = null);
(statearr_12282_12295[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12278 === 4))
{var state_12277__$1 = state_12277;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12277__$1,7,ac);
} else
{if((state_val_12278 === 3))
{var inst_12275 = (state_12277[2]);var state_12277__$1 = state_12277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12277__$1,inst_12275);
} else
{if((state_val_12278 === 2))
{var state_12277__$1 = state_12277;if(true)
{var statearr_12283_12296 = state_12277__$1;(statearr_12283_12296[1] = 4);
} else
{var statearr_12284_12297 = state_12277__$1;(statearr_12284_12297[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12278 === 1))
{var state_12277__$1 = state_12277;var statearr_12285_12298 = state_12277__$1;(statearr_12285_12298[2] = null);
(statearr_12285_12298[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_12289 = [null,null,null,null,null,null,null,null];(statearr_12289[0] = state_machine__6748__auto__);
(statearr_12289[1] = 1);
return statearr_12289;
});
var state_machine__6748__auto____1 = (function (state_12277){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_12277);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e12290){if((e12290 instanceof Object))
{var ex__6751__auto__ = e12290;var statearr_12291_12299 = state_12277;(statearr_12291_12299[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12277);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12300 = state_12277;
state_12277 = G__12300;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_12277){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_12277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_12292 = f__6763__auto__.call(null);(statearr_12292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_12292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
goog.exportSymbol('huli.main.autocomplete', huli.main.autocomplete);
huli.main.base_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
huli.main.wikipedia_search = (function wikipedia_search(query){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_12322){var state_val_12323 = (state_12322[1]);if((state_val_12323 === 2))
{var inst_12319 = (state_12322[2]);var inst_12320 = cljs.core.nth.call(null,inst_12319,1);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12322__$1,inst_12320);
} else
{if((state_val_12323 === 1))
{var inst_12316 = [cljs.core.str(huli.main.base_url),cljs.core.str(query)].join('');var inst_12317 = utils.reactive.jsonp.call(null,inst_12316);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12322__$1,2,inst_12317);
} else
{return null;
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_12327 = [null,null,null,null,null,null,null];(statearr_12327[0] = state_machine__6748__auto__);
(statearr_12327[1] = 1);
return statearr_12327;
});
var state_machine__6748__auto____1 = (function (state_12322){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_12322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e12328){if((e12328 instanceof Object))
{var ex__6751__auto__ = e12328;var statearr_12329_12331 = state_12322;(statearr_12329_12331[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12332 = state_12322;
state_12322 = G__12332;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_12322){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_12322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_12330 = f__6763__auto__.call(null);(statearr_12330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_12330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});

//# sourceMappingURL=main.js.map