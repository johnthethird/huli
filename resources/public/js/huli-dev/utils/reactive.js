// Compiled by ClojureScript 0.0-2173
goog.provide('utils.reactive');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('utils.helpers');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.net.Jsonp');
goog.require('goog.dom');
goog.require('utils.dom');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('utils.helpers');
goog.require('goog.events');
goog.require('goog.Uri');
goog.require('utils.dom');
utils.reactive.atom_QMARK_ = (function atom_QMARK_(x){return (x instanceof cljs.core.Atom);
});
utils.reactive.keyword__GT_event_type = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),new cljs.core.Keyword(null,"keypress","keypress",1530666166),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,"blur","blur",1016931289),new cljs.core.Keyword(null,"focus","focus",1111509066),new cljs.core.Keyword(null,"keydown","keydown",4493897459),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),new cljs.core.Keyword(null,"keyup","keyup",1115849900),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),new cljs.core.Keyword(null,"dblclick","dblclick",3463991820)],[goog.events.EventType.MOUSEDOWN,goog.events.EventType.KEYPRESS,goog.events.EventType.MOUSEOVER,goog.events.EventType.MOUSEOUT,goog.events.EventType.CLICK,goog.events.EventType.BLUR,goog.events.EventType.FOCUS,goog.events.EventType.KEYDOWN,goog.events.EventType.MOUSEUP,goog.events.EventType.KEYUP,goog.events.EventType.MOUSEMOVE,goog.events.EventType.DBLCLICK]);
utils.reactive.log = (function log(in$){var out = cljs.core.async.chan.call(null);var chan__3291__auto___12398 = in$;var c__6785__auto___12399 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_12380){var state_val_12381 = (state_12380[1]);if((state_val_12381 === 8))
{var inst_12372 = (state_12380[2]);var state_12380__$1 = (function (){var statearr_12382 = state_12380;(statearr_12382[7] = inst_12372);
return statearr_12382;
})();var statearr_12383_12400 = state_12380__$1;(statearr_12383_12400[2] = null);
(statearr_12383_12400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12381 === 7))
{var inst_12376 = (state_12380[2]);var state_12380__$1 = state_12380;var statearr_12384_12401 = state_12380__$1;(statearr_12384_12401[2] = inst_12376);
(statearr_12384_12401[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12381 === 6))
{var state_12380__$1 = state_12380;var statearr_12385_12402 = state_12380__$1;(statearr_12385_12402[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_12385_12402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12381 === 5))
{var inst_12368 = (state_12380[8]);var inst_12370 = console.log(inst_12368);var state_12380__$1 = (function (){var statearr_12386 = state_12380;(statearr_12386[9] = inst_12370);
return statearr_12386;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12380__$1,8,out,inst_12368);
} else
{if((state_val_12381 === 4))
{var inst_12368 = (state_12380[8]);var inst_12368__$1 = (state_12380[2]);var state_12380__$1 = (function (){var statearr_12387 = state_12380;(statearr_12387[8] = inst_12368__$1);
return statearr_12387;
})();if(cljs.core.truth_(inst_12368__$1))
{var statearr_12388_12403 = state_12380__$1;(statearr_12388_12403[1] = 5);
} else
{var statearr_12389_12404 = state_12380__$1;(statearr_12389_12404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12381 === 3))
{var inst_12378 = (state_12380[2]);var state_12380__$1 = state_12380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12380__$1,inst_12378);
} else
{if((state_val_12381 === 2))
{var state_12380__$1 = state_12380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12380__$1,4,chan__3291__auto___12398);
} else
{if((state_val_12381 === 1))
{var state_12380__$1 = state_12380;var statearr_12390_12405 = state_12380__$1;(statearr_12390_12405[2] = null);
(statearr_12390_12405[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_12394 = [null,null,null,null,null,null,null,null,null,null];(statearr_12394[0] = state_machine__6771__auto__);
(statearr_12394[1] = 1);
return statearr_12394;
});
var state_machine__6771__auto____1 = (function (state_12380){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_12380);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e12395){if((e12395 instanceof Object))
{var ex__6774__auto__ = e12395;var statearr_12396_12406 = state_12380;(statearr_12396_12406[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12380);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12407 = state_12380;
state_12380 = G__12407;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_12380){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_12380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_12397 = f__6786__auto__.call(null);(statearr_12397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___12399);
return statearr_12397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.listen = (function() {
var listen = null;
var listen__2 = (function (el,type){return listen.call(null,el,type,null);
});
var listen__3 = (function (el,type,f){return listen.call(null,el,type,f,cljs.core.async.chan.call(null));
});
var listen__4 = (function (el,type,f,out){goog.events.listen(el,utils.reactive.keyword__GT_event_type.call(null,type),(function (e){if(cljs.core.truth_(f))
{f.call(null,e);
} else
{}
return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
listen = function(el,type,f,out){
switch(arguments.length){
case 2:
return listen__2.call(this,el,type);
case 3:
return listen__3.call(this,el,type,f);
case 4:
return listen__4.call(this,el,type,f,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$2 = listen__2;
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
listen.cljs$core$IFn$_invoke$arity$4 = listen__4;
return listen;
})()
;
utils.reactive.map = (function map(f,in$){var out = cljs.core.async.chan.call(null);var c__6785__auto___12472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_12455){var state_val_12456 = (state_12455[1]);if((state_val_12456 === 8))
{var inst_12446 = (state_12455[2]);var state_12455__$1 = (function (){var statearr_12457 = state_12455;(statearr_12457[7] = inst_12446);
return statearr_12457;
})();var statearr_12458_12473 = state_12455__$1;(statearr_12458_12473[2] = null);
(statearr_12458_12473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12456 === 7))
{var inst_12451 = (state_12455[2]);var state_12455__$1 = state_12455;var statearr_12459_12474 = state_12455__$1;(statearr_12459_12474[2] = inst_12451);
(statearr_12459_12474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12456 === 6))
{var inst_12449 = cljs.core.async.close_BANG_.call(null,out);var state_12455__$1 = state_12455;var statearr_12460_12475 = state_12455__$1;(statearr_12460_12475[2] = inst_12449);
(statearr_12460_12475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12456 === 5))
{var inst_12442 = (state_12455[8]);var inst_12444 = f.call(null,inst_12442);var state_12455__$1 = state_12455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12455__$1,8,out,inst_12444);
} else
{if((state_val_12456 === 4))
{var inst_12442 = (state_12455[8]);var inst_12442__$1 = (state_12455[2]);var state_12455__$1 = (function (){var statearr_12461 = state_12455;(statearr_12461[8] = inst_12442__$1);
return statearr_12461;
})();if(cljs.core.truth_(inst_12442__$1))
{var statearr_12462_12476 = state_12455__$1;(statearr_12462_12476[1] = 5);
} else
{var statearr_12463_12477 = state_12455__$1;(statearr_12463_12477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12456 === 3))
{var inst_12453 = (state_12455[2]);var state_12455__$1 = state_12455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12455__$1,inst_12453);
} else
{if((state_val_12456 === 2))
{var state_12455__$1 = state_12455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12455__$1,4,in$);
} else
{if((state_val_12456 === 1))
{var state_12455__$1 = state_12455;var statearr_12464_12478 = state_12455__$1;(statearr_12464_12478[2] = null);
(statearr_12464_12478[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_12468 = [null,null,null,null,null,null,null,null,null];(statearr_12468[0] = state_machine__6771__auto__);
(statearr_12468[1] = 1);
return statearr_12468;
});
var state_machine__6771__auto____1 = (function (state_12455){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_12455);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e12469){if((e12469 instanceof Object))
{var ex__6774__auto__ = e12469;var statearr_12470_12479 = state_12455;(statearr_12470_12479[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12480 = state_12455;
state_12455 = G__12480;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_12455){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_12455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_12471 = f__6786__auto__.call(null);(statearr_12471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___12472);
return statearr_12471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.filter = (function filter(pred,in$){var out = cljs.core.async.chan.call(null);var c__6785__auto___12561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_12540){var state_val_12541 = (state_12540[1]);if((state_val_12541 === 1))
{var state_12540__$1 = state_12540;var statearr_12542_12562 = state_12540__$1;(statearr_12542_12562[2] = null);
(statearr_12542_12562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12541 === 2))
{var state_12540__$1 = state_12540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12540__$1,4,in$);
} else
{if((state_val_12541 === 3))
{var inst_12538 = (state_12540[2]);var state_12540__$1 = state_12540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12540__$1,inst_12538);
} else
{if((state_val_12541 === 4))
{var inst_12523 = (state_12540[7]);var inst_12523__$1 = (state_12540[2]);var state_12540__$1 = (function (){var statearr_12543 = state_12540;(statearr_12543[7] = inst_12523__$1);
return statearr_12543;
})();if(cljs.core.truth_(inst_12523__$1))
{var statearr_12544_12563 = state_12540__$1;(statearr_12544_12563[1] = 5);
} else
{var statearr_12545_12564 = state_12540__$1;(statearr_12545_12564[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12541 === 5))
{var inst_12523 = (state_12540[7]);var inst_12525 = pred.call(null,inst_12523);var state_12540__$1 = state_12540;if(cljs.core.truth_(inst_12525))
{var statearr_12546_12565 = state_12540__$1;(statearr_12546_12565[1] = 8);
} else
{var statearr_12547_12566 = state_12540__$1;(statearr_12547_12566[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12541 === 6))
{var inst_12534 = cljs.core.async.close_BANG_.call(null,out);var state_12540__$1 = state_12540;var statearr_12548_12567 = state_12540__$1;(statearr_12548_12567[2] = inst_12534);
(statearr_12548_12567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12541 === 7))
{var inst_12536 = (state_12540[2]);var state_12540__$1 = state_12540;var statearr_12549_12568 = state_12540__$1;(statearr_12549_12568[2] = inst_12536);
(statearr_12549_12568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12541 === 8))
{var inst_12523 = (state_12540[7]);var state_12540__$1 = state_12540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12540__$1,11,out,inst_12523);
} else
{if((state_val_12541 === 9))
{var state_12540__$1 = state_12540;var statearr_12550_12569 = state_12540__$1;(statearr_12550_12569[2] = null);
(statearr_12550_12569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12541 === 10))
{var inst_12531 = (state_12540[2]);var state_12540__$1 = (function (){var statearr_12551 = state_12540;(statearr_12551[8] = inst_12531);
return statearr_12551;
})();var statearr_12552_12570 = state_12540__$1;(statearr_12552_12570[2] = null);
(statearr_12552_12570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12541 === 11))
{var inst_12528 = (state_12540[2]);var state_12540__$1 = state_12540;var statearr_12553_12571 = state_12540__$1;(statearr_12553_12571[2] = inst_12528);
(statearr_12553_12571[1] = 10);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_12557 = [null,null,null,null,null,null,null,null,null];(statearr_12557[0] = state_machine__6771__auto__);
(statearr_12557[1] = 1);
return statearr_12557;
});
var state_machine__6771__auto____1 = (function (state_12540){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_12540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e12558){if((e12558 instanceof Object))
{var ex__6774__auto__ = e12558;var statearr_12559_12572 = state_12540;(statearr_12559_12572[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12573 = state_12540;
state_12540 = G__12573;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_12540){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_12540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_12560 = f__6786__auto__.call(null);(statearr_12560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___12561);
return statearr_12560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.remove = (function remove(f,in$){var out = cljs.core.async.chan.call(null);var c__6785__auto___12654 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_12633){var state_val_12634 = (state_12633[1]);if((state_val_12634 === 1))
{var state_12633__$1 = state_12633;var statearr_12635_12655 = state_12633__$1;(statearr_12635_12655[2] = null);
(statearr_12635_12655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 2))
{var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12633__$1,4,in$);
} else
{if((state_val_12634 === 3))
{var inst_12631 = (state_12633[2]);var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12633__$1,inst_12631);
} else
{if((state_val_12634 === 4))
{var inst_12616 = (state_12633[7]);var inst_12616__$1 = (state_12633[2]);var state_12633__$1 = (function (){var statearr_12636 = state_12633;(statearr_12636[7] = inst_12616__$1);
return statearr_12636;
})();if(cljs.core.truth_(inst_12616__$1))
{var statearr_12637_12656 = state_12633__$1;(statearr_12637_12656[1] = 5);
} else
{var statearr_12638_12657 = state_12633__$1;(statearr_12638_12657[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 5))
{var inst_12616 = (state_12633[7]);var inst_12618 = f.call(null,inst_12616);var state_12633__$1 = state_12633;if(cljs.core.truth_(inst_12618))
{var statearr_12639_12658 = state_12633__$1;(statearr_12639_12658[1] = 8);
} else
{var statearr_12640_12659 = state_12633__$1;(statearr_12640_12659[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 6))
{var inst_12627 = cljs.core.async.close_BANG_.call(null,out);var state_12633__$1 = state_12633;var statearr_12641_12660 = state_12633__$1;(statearr_12641_12660[2] = inst_12627);
(statearr_12641_12660[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 7))
{var inst_12629 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12642_12661 = state_12633__$1;(statearr_12642_12661[2] = inst_12629);
(statearr_12642_12661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 8))
{var state_12633__$1 = state_12633;var statearr_12643_12662 = state_12633__$1;(statearr_12643_12662[2] = null);
(statearr_12643_12662[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 9))
{var inst_12616 = (state_12633[7]);var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12633__$1,11,out,inst_12616);
} else
{if((state_val_12634 === 10))
{var inst_12624 = (state_12633[2]);var state_12633__$1 = (function (){var statearr_12644 = state_12633;(statearr_12644[8] = inst_12624);
return statearr_12644;
})();var statearr_12645_12663 = state_12633__$1;(statearr_12645_12663[2] = null);
(statearr_12645_12663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 11))
{var inst_12622 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12646_12664 = state_12633__$1;(statearr_12646_12664[2] = inst_12622);
(statearr_12646_12664[1] = 10);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_12650 = [null,null,null,null,null,null,null,null,null];(statearr_12650[0] = state_machine__6771__auto__);
(statearr_12650[1] = 1);
return statearr_12650;
});
var state_machine__6771__auto____1 = (function (state_12633){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_12633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e12651){if((e12651 instanceof Object))
{var ex__6774__auto__ = e12651;var statearr_12652_12665 = state_12633;(statearr_12652_12665[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12666 = state_12633;
state_12633 = G__12666;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_12633){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_12633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_12653 = f__6786__auto__.call(null);(statearr_12653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___12654);
return statearr_12653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.spool = (function spool(xs){var out = cljs.core.async.chan.call(null);var c__6785__auto___12733 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_12716){var state_val_12717 = (state_12716[1]);if((state_val_12717 === 7))
{var inst_12701 = (state_12716[7]);var inst_12706 = (state_12716[2]);var inst_12707 = cljs.core.next.call(null,inst_12701);var inst_12701__$1 = inst_12707;var state_12716__$1 = (function (){var statearr_12718 = state_12716;(statearr_12718[7] = inst_12701__$1);
(statearr_12718[8] = inst_12706);
return statearr_12718;
})();var statearr_12719_12734 = state_12716__$1;(statearr_12719_12734[2] = null);
(statearr_12719_12734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 6))
{var inst_12712 = (state_12716[2]);var state_12716__$1 = state_12716;var statearr_12720_12735 = state_12716__$1;(statearr_12720_12735[2] = inst_12712);
(statearr_12720_12735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 5))
{var inst_12710 = cljs.core.async.close_BANG_.call(null,out);var state_12716__$1 = state_12716;var statearr_12721_12736 = state_12716__$1;(statearr_12721_12736[2] = inst_12710);
(statearr_12721_12736[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 4))
{var inst_12701 = (state_12716[7]);var inst_12704 = cljs.core.first.call(null,inst_12701);var state_12716__$1 = state_12716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12716__$1,7,out,inst_12704);
} else
{if((state_val_12717 === 3))
{var inst_12714 = (state_12716[2]);var state_12716__$1 = state_12716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12716__$1,inst_12714);
} else
{if((state_val_12717 === 2))
{var inst_12701 = (state_12716[7]);var state_12716__$1 = state_12716;if(cljs.core.truth_(inst_12701))
{var statearr_12722_12737 = state_12716__$1;(statearr_12722_12737[1] = 4);
} else
{var statearr_12723_12738 = state_12716__$1;(statearr_12723_12738[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 1))
{var inst_12700 = cljs.core.seq.call(null,xs);var inst_12701 = inst_12700;var state_12716__$1 = (function (){var statearr_12724 = state_12716;(statearr_12724[7] = inst_12701);
return statearr_12724;
})();var statearr_12725_12739 = state_12716__$1;(statearr_12725_12739[2] = null);
(statearr_12725_12739[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_12729 = [null,null,null,null,null,null,null,null,null];(statearr_12729[0] = state_machine__6771__auto__);
(statearr_12729[1] = 1);
return statearr_12729;
});
var state_machine__6771__auto____1 = (function (state_12716){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_12716);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e12730){if((e12730 instanceof Object))
{var ex__6774__auto__ = e12730;var statearr_12731_12740 = state_12716;(statearr_12731_12740[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12716);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12741 = state_12716;
state_12716 = G__12741;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_12732 = f__6786__auto__.call(null);(statearr_12732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___12733);
return statearr_12732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.split = (function() {
var split = null;
var split__2 = (function (pred,in$){return split.call(null,pred,in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null),cljs.core.async.chan.call(null)], null));
});
var split__3 = (function (pred,in$,p__12742){var vec__12787 = p__12742;var out1 = cljs.core.nth.call(null,vec__12787,0,null);var out2 = cljs.core.nth.call(null,vec__12787,1,null);var c__6785__auto___12831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_12809){var state_val_12810 = (state_12809[1]);if((state_val_12810 === 1))
{var state_12809__$1 = state_12809;var statearr_12811_12832 = state_12809__$1;(statearr_12811_12832[2] = null);
(statearr_12811_12832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12810 === 2))
{var state_12809__$1 = state_12809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12809__$1,4,in$);
} else
{if((state_val_12810 === 3))
{var inst_12807 = (state_12809[2]);var state_12809__$1 = state_12809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12809__$1,inst_12807);
} else
{if((state_val_12810 === 4))
{var inst_12790 = (state_12809[7]);var inst_12790__$1 = (state_12809[2]);var state_12809__$1 = (function (){var statearr_12812 = state_12809;(statearr_12812[7] = inst_12790__$1);
return statearr_12812;
})();if(cljs.core.truth_(inst_12790__$1))
{var statearr_12813_12833 = state_12809__$1;(statearr_12813_12833[1] = 5);
} else
{var statearr_12814_12834 = state_12809__$1;(statearr_12814_12834[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12810 === 5))
{var inst_12790 = (state_12809[7]);var inst_12792 = pred.call(null,inst_12790);var state_12809__$1 = state_12809;if(cljs.core.truth_(inst_12792))
{var statearr_12815_12835 = state_12809__$1;(statearr_12815_12835[1] = 8);
} else
{var statearr_12816_12836 = state_12809__$1;(statearr_12816_12836[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12810 === 6))
{var state_12809__$1 = state_12809;var statearr_12817_12837 = state_12809__$1;(statearr_12817_12837[2] = null);
(statearr_12817_12837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12810 === 7))
{var inst_12805 = (state_12809[2]);var state_12809__$1 = state_12809;var statearr_12818_12838 = state_12809__$1;(statearr_12818_12838[2] = inst_12805);
(statearr_12818_12838[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12810 === 8))
{var inst_12790 = (state_12809[7]);var state_12809__$1 = state_12809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12809__$1,11,out1,inst_12790);
} else
{if((state_val_12810 === 9))
{var inst_12790 = (state_12809[7]);var state_12809__$1 = state_12809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12809__$1,12,out2,inst_12790);
} else
{if((state_val_12810 === 10))
{var inst_12802 = (state_12809[2]);var state_12809__$1 = state_12809;var statearr_12819_12839 = state_12809__$1;(statearr_12819_12839[2] = inst_12802);
(statearr_12819_12839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12810 === 11))
{var inst_12795 = (state_12809[2]);var state_12809__$1 = (function (){var statearr_12820 = state_12809;(statearr_12820[8] = inst_12795);
return statearr_12820;
})();var statearr_12821_12840 = state_12809__$1;(statearr_12821_12840[2] = null);
(statearr_12821_12840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12810 === 12))
{var inst_12799 = (state_12809[2]);var state_12809__$1 = (function (){var statearr_12822 = state_12809;(statearr_12822[9] = inst_12799);
return statearr_12822;
})();var statearr_12823_12841 = state_12809__$1;(statearr_12823_12841[2] = null);
(statearr_12823_12841[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_12827 = [null,null,null,null,null,null,null,null,null,null];(statearr_12827[0] = state_machine__6771__auto__);
(statearr_12827[1] = 1);
return statearr_12827;
});
var state_machine__6771__auto____1 = (function (state_12809){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_12809);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e12828){if((e12828 instanceof Object))
{var ex__6774__auto__ = e12828;var statearr_12829_12842 = state_12809;(statearr_12829_12842[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12809);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12843 = state_12809;
state_12809 = G__12843;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_12809){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_12809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_12830 = f__6786__auto__.call(null);(statearr_12830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___12831);
return statearr_12830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out1,out2], null);
});
split = function(pred,in$,p__12742){
switch(arguments.length){
case 2:
return split__2.call(this,pred,in$);
case 3:
return split__3.call(this,pred,in$,p__12742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
utils.reactive.concat = (function concat(xs,in$){var out = cljs.core.async.chan.call(null);var c__6785__auto___12942 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_12918){var state_val_12919 = (state_12918[1]);if((state_val_12919 === 1))
{var inst_12893 = cljs.core.seq.call(null,xs);var inst_12894 = inst_12893;var state_12918__$1 = (function (){var statearr_12920 = state_12918;(statearr_12920[7] = inst_12894);
return statearr_12920;
})();var statearr_12921_12943 = state_12918__$1;(statearr_12921_12943[2] = null);
(statearr_12921_12943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12919 === 2))
{var inst_12894 = (state_12918[7]);var state_12918__$1 = state_12918;if(cljs.core.truth_(inst_12894))
{var statearr_12922_12944 = state_12918__$1;(statearr_12922_12944[1] = 4);
} else
{var statearr_12923_12945 = state_12918__$1;(statearr_12923_12945[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12919 === 3))
{var inst_12916 = (state_12918[2]);var state_12918__$1 = state_12918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12918__$1,inst_12916);
} else
{if((state_val_12919 === 4))
{var inst_12894 = (state_12918[7]);var inst_12897 = cljs.core.first.call(null,inst_12894);var state_12918__$1 = state_12918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12918__$1,7,out,inst_12897);
} else
{if((state_val_12919 === 5))
{var state_12918__$1 = state_12918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12918__$1,8,in$);
} else
{if((state_val_12919 === 6))
{var inst_12914 = (state_12918[2]);var state_12918__$1 = state_12918;var statearr_12924_12946 = state_12918__$1;(statearr_12924_12946[2] = inst_12914);
(statearr_12924_12946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12919 === 7))
{var inst_12894 = (state_12918[7]);var inst_12899 = (state_12918[2]);var inst_12900 = cljs.core.next.call(null,inst_12894);var inst_12894__$1 = inst_12900;var state_12918__$1 = (function (){var statearr_12925 = state_12918;(statearr_12925[8] = inst_12899);
(statearr_12925[7] = inst_12894__$1);
return statearr_12925;
})();var statearr_12926_12947 = state_12918__$1;(statearr_12926_12947[2] = null);
(statearr_12926_12947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12919 === 8))
{var inst_12904 = (state_12918[9]);var inst_12904__$1 = (state_12918[2]);var state_12918__$1 = (function (){var statearr_12927 = state_12918;(statearr_12927[9] = inst_12904__$1);
return statearr_12927;
})();if(cljs.core.truth_(inst_12904__$1))
{var statearr_12928_12948 = state_12918__$1;(statearr_12928_12948[1] = 9);
} else
{var statearr_12929_12949 = state_12918__$1;(statearr_12929_12949[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12919 === 9))
{var inst_12904 = (state_12918[9]);var state_12918__$1 = state_12918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12918__$1,12,out,inst_12904);
} else
{if((state_val_12919 === 10))
{var inst_12910 = cljs.core.async.close_BANG_.call(null,out);var state_12918__$1 = state_12918;var statearr_12931_12950 = state_12918__$1;(statearr_12931_12950[2] = inst_12910);
(statearr_12931_12950[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12919 === 11))
{var inst_12912 = (state_12918[2]);var state_12918__$1 = state_12918;var statearr_12932_12951 = state_12918__$1;(statearr_12932_12951[2] = inst_12912);
(statearr_12932_12951[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12919 === 12))
{var inst_12894 = (state_12918[7]);var inst_12907 = (state_12918[2]);var tmp12930 = inst_12894;var inst_12894__$1 = tmp12930;var state_12918__$1 = (function (){var statearr_12933 = state_12918;(statearr_12933[7] = inst_12894__$1);
(statearr_12933[10] = inst_12907);
return statearr_12933;
})();var statearr_12934_12952 = state_12918__$1;(statearr_12934_12952[2] = null);
(statearr_12934_12952[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_12938 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12938[0] = state_machine__6771__auto__);
(statearr_12938[1] = 1);
return statearr_12938;
});
var state_machine__6771__auto____1 = (function (state_12918){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_12918);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e12939){if((e12939 instanceof Object))
{var ex__6774__auto__ = e12939;var statearr_12940_12953 = state_12918;(statearr_12940_12953[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12918);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12954 = state_12918;
state_12918 = G__12954;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_12918){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_12918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_12941 = f__6786__auto__.call(null);(statearr_12941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___12942);
return statearr_12941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.distinct = (function distinct(in$){var out = cljs.core.async.chan.call(null);var c__6785__auto___13039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13017){var state_val_13018 = (state_13017[1]);if((state_val_13018 === 1))
{var inst_12997 = null;var state_13017__$1 = (function (){var statearr_13019 = state_13017;(statearr_13019[7] = inst_12997);
return statearr_13019;
})();var statearr_13020_13040 = state_13017__$1;(statearr_13020_13040[2] = null);
(statearr_13020_13040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 2))
{var state_13017__$1 = state_13017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13017__$1,4,in$);
} else
{if((state_val_13018 === 3))
{var inst_13015 = (state_13017[2]);var state_13017__$1 = state_13017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13017__$1,inst_13015);
} else
{if((state_val_13018 === 4))
{var inst_13000 = (state_13017[8]);var inst_13000__$1 = (state_13017[2]);var state_13017__$1 = (function (){var statearr_13021 = state_13017;(statearr_13021[8] = inst_13000__$1);
return statearr_13021;
})();if(cljs.core.truth_(inst_13000__$1))
{var statearr_13022_13041 = state_13017__$1;(statearr_13022_13041[1] = 5);
} else
{var statearr_13023_13042 = state_13017__$1;(statearr_13023_13042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 5))
{var inst_13000 = (state_13017[8]);var inst_12997 = (state_13017[7]);var inst_13002 = cljs.core.not_EQ_.call(null,inst_13000,inst_12997);var state_13017__$1 = state_13017;if(inst_13002)
{var statearr_13024_13043 = state_13017__$1;(statearr_13024_13043[1] = 8);
} else
{var statearr_13025_13044 = state_13017__$1;(statearr_13025_13044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 6))
{var inst_13011 = cljs.core.async.close_BANG_.call(null,out);var state_13017__$1 = state_13017;var statearr_13026_13045 = state_13017__$1;(statearr_13026_13045[2] = inst_13011);
(statearr_13026_13045[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 7))
{var inst_13013 = (state_13017[2]);var state_13017__$1 = state_13017;var statearr_13027_13046 = state_13017__$1;(statearr_13027_13046[2] = inst_13013);
(statearr_13027_13046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 8))
{var inst_13000 = (state_13017[8]);var state_13017__$1 = state_13017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13017__$1,11,out,inst_13000);
} else
{if((state_val_13018 === 9))
{var state_13017__$1 = state_13017;var statearr_13028_13047 = state_13017__$1;(statearr_13028_13047[2] = null);
(statearr_13028_13047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 10))
{var inst_13000 = (state_13017[8]);var inst_13008 = (state_13017[2]);var inst_12997 = inst_13000;var state_13017__$1 = (function (){var statearr_13029 = state_13017;(statearr_13029[7] = inst_12997);
(statearr_13029[9] = inst_13008);
return statearr_13029;
})();var statearr_13030_13048 = state_13017__$1;(statearr_13030_13048[2] = null);
(statearr_13030_13048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 11))
{var inst_13005 = (state_13017[2]);var state_13017__$1 = state_13017;var statearr_13031_13049 = state_13017__$1;(statearr_13031_13049[2] = inst_13005);
(statearr_13031_13049[1] = 10);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13035 = [null,null,null,null,null,null,null,null,null,null];(statearr_13035[0] = state_machine__6771__auto__);
(statearr_13035[1] = 1);
return statearr_13035;
});
var state_machine__6771__auto____1 = (function (state_13017){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13017);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13036){if((e13036 instanceof Object))
{var ex__6774__auto__ = e13036;var statearr_13037_13050 = state_13017;(statearr_13037_13050[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13051 = state_13017;
state_13017 = G__13051;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13017){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13038 = f__6786__auto__.call(null);(statearr_13038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___13039);
return statearr_13038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.fan_in = (function() {
var fan_in = null;
var fan_in__1 = (function (ins){return fan_in.call(null,ins,cljs.core.async.chan.call(null));
});
var fan_in__2 = (function (ins,out){var c__6785__auto___13160 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13135){var state_val_13136 = (state_13135[1]);if((state_val_13136 === 1))
{var inst_13106 = cljs.core.vec.call(null,ins);var inst_13107 = inst_13106;var state_13135__$1 = (function (){var statearr_13137 = state_13135;(statearr_13137[7] = inst_13107);
return statearr_13137;
})();var statearr_13138_13161 = state_13135__$1;(statearr_13138_13161[2] = null);
(statearr_13138_13161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 2))
{var inst_13107 = (state_13135[7]);var inst_13109 = cljs.core.count.call(null,inst_13107);var inst_13110 = (inst_13109 > 0);var state_13135__$1 = state_13135;if(cljs.core.truth_(inst_13110))
{var statearr_13139_13162 = state_13135__$1;(statearr_13139_13162[1] = 4);
} else
{var statearr_13140_13163 = state_13135__$1;(statearr_13140_13163[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 3))
{var inst_13132 = (state_13135[2]);var inst_13133 = cljs.core.async.close_BANG_.call(null,out);var state_13135__$1 = (function (){var statearr_13141 = state_13135;(statearr_13141[8] = inst_13132);
return statearr_13141;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13135__$1,inst_13133);
} else
{if((state_val_13136 === 4))
{var inst_13107 = (state_13135[7]);var state_13135__$1 = state_13135;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13135__$1,7,inst_13107);
} else
{if((state_val_13136 === 5))
{var state_13135__$1 = state_13135;var statearr_13142_13164 = state_13135__$1;(statearr_13142_13164[2] = null);
(statearr_13142_13164[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 6))
{var inst_13130 = (state_13135[2]);var state_13135__$1 = state_13135;var statearr_13143_13165 = state_13135__$1;(statearr_13143_13165[2] = inst_13130);
(statearr_13143_13165[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 7))
{var inst_13115 = (state_13135[9]);var inst_13114 = (state_13135[2]);var inst_13115__$1 = cljs.core.nth.call(null,inst_13114,0,null);var inst_13116 = cljs.core.nth.call(null,inst_13114,1,null);var state_13135__$1 = (function (){var statearr_13144 = state_13135;(statearr_13144[10] = inst_13116);
(statearr_13144[9] = inst_13115__$1);
return statearr_13144;
})();if(cljs.core.truth_(inst_13115__$1))
{var statearr_13145_13166 = state_13135__$1;(statearr_13145_13166[1] = 8);
} else
{var statearr_13146_13167 = state_13135__$1;(statearr_13146_13167[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 8))
{var inst_13115 = (state_13135[9]);var state_13135__$1 = state_13135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13135__$1,11,out,inst_13115);
} else
{if((state_val_13136 === 9))
{var state_13135__$1 = state_13135;var statearr_13148_13168 = state_13135__$1;(statearr_13148_13168[2] = null);
(statearr_13148_13168[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 10))
{var inst_13116 = (state_13135[10]);var inst_13107 = (state_13135[7]);var inst_13123 = (state_13135[2]);var inst_13124 = cljs.core.set.call(null,inst_13107);var inst_13125 = cljs.core.disj.call(null,inst_13124,inst_13116);var inst_13126 = cljs.core.vec.call(null,inst_13125);var inst_13107__$1 = inst_13126;var state_13135__$1 = (function (){var statearr_13149 = state_13135;(statearr_13149[11] = inst_13123);
(statearr_13149[7] = inst_13107__$1);
return statearr_13149;
})();var statearr_13150_13169 = state_13135__$1;(statearr_13150_13169[2] = null);
(statearr_13150_13169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 11))
{var inst_13107 = (state_13135[7]);var inst_13119 = (state_13135[2]);var tmp13147 = inst_13107;var inst_13107__$1 = tmp13147;var state_13135__$1 = (function (){var statearr_13151 = state_13135;(statearr_13151[12] = inst_13119);
(statearr_13151[7] = inst_13107__$1);
return statearr_13151;
})();var statearr_13152_13170 = state_13135__$1;(statearr_13152_13170[2] = null);
(statearr_13152_13170[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13156 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13156[0] = state_machine__6771__auto__);
(statearr_13156[1] = 1);
return statearr_13156;
});
var state_machine__6771__auto____1 = (function (state_13135){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13157){if((e13157 instanceof Object))
{var ex__6774__auto__ = e13157;var statearr_13158_13171 = state_13135;(statearr_13158_13171[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13157;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13172 = state_13135;
state_13135 = G__13172;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13135){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13159 = f__6786__auto__.call(null);(statearr_13159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___13160);
return statearr_13159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
fan_in = function(ins,out){
switch(arguments.length){
case 1:
return fan_in__1.call(this,ins);
case 2:
return fan_in__2.call(this,ins,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fan_in.cljs$core$IFn$_invoke$arity$1 = fan_in__1;
fan_in.cljs$core$IFn$_invoke$arity$2 = fan_in__2;
return fan_in;
})()
;
utils.reactive.take_until = (function() {
var take_until = null;
var take_until__2 = (function (pred_sentinel,in$){return take_until.call(null,pred_sentinel,in$,cljs.core.async.chan.call(null));
});
var take_until__3 = (function (pred_sentinel,in$,out){var c__6785__auto___13257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13236){var state_val_13237 = (state_13236[1]);if((state_val_13237 === 1))
{var state_13236__$1 = state_13236;var statearr_13238_13258 = state_13236__$1;(statearr_13238_13258[2] = null);
(statearr_13238_13258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13237 === 2))
{var state_13236__$1 = state_13236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13236__$1,4,in$);
} else
{if((state_val_13237 === 3))
{var inst_13234 = (state_13236[2]);var state_13236__$1 = state_13236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13236__$1,inst_13234);
} else
{if((state_val_13237 === 4))
{var inst_13217 = (state_13236[7]);var inst_13217__$1 = (state_13236[2]);var state_13236__$1 = (function (){var statearr_13239 = state_13236;(statearr_13239[7] = inst_13217__$1);
return statearr_13239;
})();if(cljs.core.truth_(inst_13217__$1))
{var statearr_13240_13259 = state_13236__$1;(statearr_13240_13259[1] = 5);
} else
{var statearr_13241_13260 = state_13236__$1;(statearr_13241_13260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13237 === 5))
{var inst_13217 = (state_13236[7]);var state_13236__$1 = state_13236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13236__$1,8,out,inst_13217);
} else
{if((state_val_13237 === 6))
{var inst_13230 = cljs.core.async.close_BANG_.call(null,out);var state_13236__$1 = state_13236;var statearr_13242_13261 = state_13236__$1;(statearr_13242_13261[2] = inst_13230);
(statearr_13242_13261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13237 === 7))
{var inst_13232 = (state_13236[2]);var state_13236__$1 = state_13236;var statearr_13243_13262 = state_13236__$1;(statearr_13243_13262[2] = inst_13232);
(statearr_13243_13262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13237 === 8))
{var inst_13217 = (state_13236[7]);var inst_13220 = (state_13236[2]);var inst_13221 = pred_sentinel.call(null,inst_13217);var inst_13222 = cljs.core.not.call(null,inst_13221);var state_13236__$1 = (function (){var statearr_13244 = state_13236;(statearr_13244[8] = inst_13220);
return statearr_13244;
})();if(inst_13222)
{var statearr_13245_13263 = state_13236__$1;(statearr_13245_13263[1] = 9);
} else
{var statearr_13246_13264 = state_13236__$1;(statearr_13246_13264[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13237 === 9))
{var state_13236__$1 = state_13236;var statearr_13247_13265 = state_13236__$1;(statearr_13247_13265[2] = null);
(statearr_13247_13265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13237 === 10))
{var inst_13226 = cljs.core.async.close_BANG_.call(null,out);var state_13236__$1 = state_13236;var statearr_13248_13266 = state_13236__$1;(statearr_13248_13266[2] = inst_13226);
(statearr_13248_13266[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13237 === 11))
{var inst_13228 = (state_13236[2]);var state_13236__$1 = state_13236;var statearr_13249_13267 = state_13236__$1;(statearr_13249_13267[2] = inst_13228);
(statearr_13249_13267[1] = 7);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13253 = [null,null,null,null,null,null,null,null,null];(statearr_13253[0] = state_machine__6771__auto__);
(statearr_13253[1] = 1);
return statearr_13253;
});
var state_machine__6771__auto____1 = (function (state_13236){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13236);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13254){if((e13254 instanceof Object))
{var ex__6774__auto__ = e13254;var statearr_13255_13268 = state_13236;(statearr_13255_13268[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13269 = state_13236;
state_13236 = G__13269;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13236){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13256 = f__6786__auto__.call(null);(statearr_13256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___13257);
return statearr_13256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
take_until = function(pred_sentinel,in$,out){
switch(arguments.length){
case 2:
return take_until__2.call(this,pred_sentinel,in$);
case 3:
return take_until__3.call(this,pred_sentinel,in$,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_until.cljs$core$IFn$_invoke$arity$2 = take_until__2;
take_until.cljs$core$IFn$_invoke$arity$3 = take_until__3;
return take_until;
})()
;
utils.reactive.siphon = (function() {
var siphon = null;
var siphon__1 = (function (in$){return siphon.call(null,in$,cljs.core.PersistentVector.EMPTY);
});
var siphon__2 = (function (in$,coll){var c__6785__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13314){var state_val_13315 = (state_13314[1]);if((state_val_13315 === 7))
{var inst_13310 = (state_13314[2]);var state_13314__$1 = state_13314;var statearr_13316_13332 = state_13314__$1;(statearr_13316_13332[2] = inst_13310);
(statearr_13316_13332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13315 === 6))
{var inst_13301 = (state_13314[7]);var state_13314__$1 = state_13314;var statearr_13317_13333 = state_13314__$1;(statearr_13317_13333[2] = inst_13301);
(statearr_13317_13333[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13315 === 5))
{var inst_13304 = (state_13314[8]);var inst_13301 = (state_13314[7]);var inst_13306 = cljs.core.conj.call(null,inst_13301,inst_13304);var inst_13301__$1 = inst_13306;var state_13314__$1 = (function (){var statearr_13318 = state_13314;(statearr_13318[7] = inst_13301__$1);
return statearr_13318;
})();var statearr_13319_13334 = state_13314__$1;(statearr_13319_13334[2] = null);
(statearr_13319_13334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13315 === 4))
{var inst_13304 = (state_13314[8]);var inst_13304__$1 = (state_13314[2]);var state_13314__$1 = (function (){var statearr_13320 = state_13314;(statearr_13320[8] = inst_13304__$1);
return statearr_13320;
})();if(cljs.core.truth_(inst_13304__$1))
{var statearr_13321_13335 = state_13314__$1;(statearr_13321_13335[1] = 5);
} else
{var statearr_13322_13336 = state_13314__$1;(statearr_13322_13336[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13315 === 3))
{var inst_13312 = (state_13314[2]);var state_13314__$1 = state_13314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13314__$1,inst_13312);
} else
{if((state_val_13315 === 2))
{var state_13314__$1 = state_13314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13314__$1,4,in$);
} else
{if((state_val_13315 === 1))
{var inst_13301 = coll;var state_13314__$1 = (function (){var statearr_13323 = state_13314;(statearr_13323[7] = inst_13301);
return statearr_13323;
})();var statearr_13324_13337 = state_13314__$1;(statearr_13324_13337[2] = null);
(statearr_13324_13337[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13328 = [null,null,null,null,null,null,null,null,null];(statearr_13328[0] = state_machine__6771__auto__);
(statearr_13328[1] = 1);
return statearr_13328;
});
var state_machine__6771__auto____1 = (function (state_13314){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13314);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13329){if((e13329 instanceof Object))
{var ex__6774__auto__ = e13329;var statearr_13330_13338 = state_13314;(statearr_13330_13338[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13314);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13339 = state_13314;
state_13314 = G__13339;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13314){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13331 = f__6786__auto__.call(null);(statearr_13331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto__);
return statearr_13331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return c__6785__auto__;
});
siphon = function(in$,coll){
switch(arguments.length){
case 1:
return siphon__1.call(this,in$);
case 2:
return siphon__2.call(this,in$,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
siphon.cljs$core$IFn$_invoke$arity$1 = siphon__1;
siphon.cljs$core$IFn$_invoke$arity$2 = siphon__2;
return siphon;
})()
;
utils.reactive.always = (function always(v,c){var out = cljs.core.async.chan.call(null);var c__6785__auto___13400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13384){var state_val_13385 = (state_13384[1]);if((state_val_13385 === 8))
{var inst_13375 = (state_13384[2]);var state_13384__$1 = (function (){var statearr_13386 = state_13384;(statearr_13386[7] = inst_13375);
return statearr_13386;
})();var statearr_13387_13401 = state_13384__$1;(statearr_13387_13401[2] = null);
(statearr_13387_13401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 7))
{var inst_13380 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13388_13402 = state_13384__$1;(statearr_13388_13402[2] = inst_13380);
(statearr_13388_13402[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 6))
{var inst_13378 = cljs.core.async.close_BANG_.call(null,out);var state_13384__$1 = state_13384;var statearr_13389_13403 = state_13384__$1;(statearr_13389_13403[2] = inst_13378);
(statearr_13389_13403[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 5))
{var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13384__$1,8,out,v);
} else
{if((state_val_13385 === 4))
{var inst_13372 = (state_13384[2]);var state_13384__$1 = state_13384;if(cljs.core.truth_(inst_13372))
{var statearr_13390_13404 = state_13384__$1;(statearr_13390_13404[1] = 5);
} else
{var statearr_13391_13405 = state_13384__$1;(statearr_13391_13405[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 3))
{var inst_13382 = (state_13384[2]);var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13384__$1,inst_13382);
} else
{if((state_val_13385 === 2))
{var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13384__$1,4,c);
} else
{if((state_val_13385 === 1))
{var state_13384__$1 = state_13384;var statearr_13392_13406 = state_13384__$1;(statearr_13392_13406[2] = null);
(statearr_13392_13406[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13396 = [null,null,null,null,null,null,null,null];(statearr_13396[0] = state_machine__6771__auto__);
(statearr_13396[1] = 1);
return statearr_13396;
});
var state_machine__6771__auto____1 = (function (state_13384){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13384);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13397){if((e13397 instanceof Object))
{var ex__6774__auto__ = e13397;var statearr_13398_13407 = state_13384;(statearr_13398_13407[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13408 = state_13384;
state_13384 = G__13408;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13384){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13399 = f__6786__auto__.call(null);(statearr_13399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___13400);
return statearr_13399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.toggle = (function toggle(in$){var out = cljs.core.async.chan.call(null);var control = cljs.core.async.chan.call(null);var c__6785__auto___13557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13525){var state_val_13526 = (state_13525[1]);if((state_val_13526 === 1))
{var inst_13483 = true;var state_13525__$1 = (function (){var statearr_13527 = state_13525;(statearr_13527[7] = inst_13483);
return statearr_13527;
})();var statearr_13528_13558 = state_13525__$1;(statearr_13528_13558[2] = null);
(statearr_13528_13558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 2))
{var inst_13490 = [in$,control];var inst_13491 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13490,null));var state_13525__$1 = state_13525;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13525__$1,4,inst_13491);
} else
{if((state_val_13526 === 3))
{var inst_13523 = (state_13525[2]);var state_13525__$1 = state_13525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13525__$1,inst_13523);
} else
{if((state_val_13526 === 4))
{var inst_13495 = (state_13525[8]);var inst_13493 = (state_13525[9]);var inst_13493__$1 = (state_13525[2]);var inst_13494 = cljs.core.nth.call(null,inst_13493__$1,0,null);var inst_13495__$1 = cljs.core.nth.call(null,inst_13493__$1,1,null);var inst_13496 = cljs.core._EQ_.call(null,inst_13495__$1,in$);var state_13525__$1 = (function (){var statearr_13529 = state_13525;(statearr_13529[10] = inst_13494);
(statearr_13529[8] = inst_13495__$1);
(statearr_13529[9] = inst_13493__$1);
return statearr_13529;
})();if(inst_13496)
{var statearr_13530_13559 = state_13525__$1;(statearr_13530_13559[1] = 5);
} else
{var statearr_13531_13560 = state_13525__$1;(statearr_13531_13560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 5))
{var inst_13483 = (state_13525[7]);var inst_13493 = (state_13525[9]);var inst_13499 = cljs.core.nth.call(null,inst_13493,0,null);var state_13525__$1 = (function (){var statearr_13532 = state_13525;(statearr_13532[11] = inst_13499);
return statearr_13532;
})();if(cljs.core.truth_(inst_13483))
{var statearr_13533_13561 = state_13525__$1;(statearr_13533_13561[1] = 8);
} else
{var statearr_13534_13562 = state_13525__$1;(statearr_13534_13562[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 6))
{var inst_13495 = (state_13525[8]);var inst_13507 = cljs.core._EQ_.call(null,inst_13495,control);var state_13525__$1 = state_13525;if(inst_13507)
{var statearr_13535_13563 = state_13525__$1;(statearr_13535_13563[1] = 12);
} else
{var statearr_13536_13564 = state_13525__$1;(statearr_13536_13564[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 7))
{var inst_13520 = (state_13525[2]);var inst_13483 = inst_13520;var state_13525__$1 = (function (){var statearr_13537 = state_13525;(statearr_13537[7] = inst_13483);
return statearr_13537;
})();var statearr_13538_13565 = state_13525__$1;(statearr_13538_13565[2] = null);
(statearr_13538_13565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 8))
{var inst_13499 = (state_13525[11]);var state_13525__$1 = state_13525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13525__$1,11,out,inst_13499);
} else
{if((state_val_13526 === 9))
{var state_13525__$1 = state_13525;var statearr_13539_13566 = state_13525__$1;(statearr_13539_13566[2] = null);
(statearr_13539_13566[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 10))
{var inst_13483 = (state_13525[7]);var inst_13505 = (state_13525[2]);var state_13525__$1 = (function (){var statearr_13540 = state_13525;(statearr_13540[12] = inst_13505);
return statearr_13540;
})();var statearr_13541_13567 = state_13525__$1;(statearr_13541_13567[2] = inst_13483);
(statearr_13541_13567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 11))
{var inst_13502 = (state_13525[2]);var state_13525__$1 = state_13525;var statearr_13542_13568 = state_13525__$1;(statearr_13542_13568[2] = inst_13502);
(statearr_13542_13568[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 12))
{var inst_13493 = (state_13525[9]);var inst_13510 = cljs.core.nth.call(null,inst_13493,0,null);var state_13525__$1 = state_13525;var statearr_13543_13569 = state_13525__$1;(statearr_13543_13569[2] = inst_13510);
(statearr_13543_13569[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 13))
{var inst_13495 = (state_13525[8]);var inst_13512 = cljs.core._EQ_.call(null,inst_13495,new cljs.core.Keyword(null,"default","default",2558708147));var state_13525__$1 = state_13525;if(inst_13512)
{var statearr_13544_13570 = state_13525__$1;(statearr_13544_13570[1] = 15);
} else
{var statearr_13545_13571 = state_13525__$1;(statearr_13545_13571[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 14))
{var inst_13518 = (state_13525[2]);var state_13525__$1 = state_13525;var statearr_13546_13572 = state_13525__$1;(statearr_13546_13572[2] = inst_13518);
(statearr_13546_13572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 15))
{var inst_13494 = (state_13525[10]);var state_13525__$1 = state_13525;var statearr_13547_13573 = state_13525__$1;(statearr_13547_13573[2] = inst_13494);
(statearr_13547_13573[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 16))
{var state_13525__$1 = state_13525;var statearr_13548_13574 = state_13525__$1;(statearr_13548_13574[2] = null);
(statearr_13548_13574[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 17))
{var inst_13516 = (state_13525[2]);var state_13525__$1 = state_13525;var statearr_13549_13575 = state_13525__$1;(statearr_13549_13575[2] = inst_13516);
(statearr_13549_13575[1] = 14);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13553 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13553[0] = state_machine__6771__auto__);
(statearr_13553[1] = 1);
return statearr_13553;
});
var state_machine__6771__auto____1 = (function (state_13525){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13525);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13554){if((e13554 instanceof Object))
{var ex__6774__auto__ = e13554;var statearr_13555_13576 = state_13525;(statearr_13555_13576[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13577 = state_13525;
state_13525 = G__13577;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13525){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13556 = f__6786__auto__.call(null);(statearr_13556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___13557);
return statearr_13556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan","chan",1016956612),out,new cljs.core.Keyword(null,"control","control",1965447375),control], null);
});
utils.reactive.barrier = (function barrier(cs){var c__6785__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13630){var state_val_13631 = (state_13630[1]);if((state_val_13631 === 7))
{var inst_13618 = (state_13630[7]);var inst_13615 = (state_13630[8]);var inst_13621 = (state_13630[2]);var inst_13622 = cljs.core.conj.call(null,inst_13615,inst_13621);var inst_13614 = inst_13618;var inst_13615__$1 = inst_13622;var state_13630__$1 = (function (){var statearr_13632 = state_13630;(statearr_13632[9] = inst_13614);
(statearr_13632[8] = inst_13615__$1);
return statearr_13632;
})();var statearr_13633_13648 = state_13630__$1;(statearr_13633_13648[2] = null);
(statearr_13633_13648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13631 === 6))
{var inst_13626 = (state_13630[2]);var state_13630__$1 = state_13630;var statearr_13634_13649 = state_13630__$1;(statearr_13634_13649[2] = inst_13626);
(statearr_13634_13649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13631 === 5))
{var inst_13615 = (state_13630[8]);var state_13630__$1 = state_13630;var statearr_13635_13650 = state_13630__$1;(statearr_13635_13650[2] = inst_13615);
(statearr_13635_13650[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13631 === 4))
{var inst_13614 = (state_13630[9]);var inst_13618 = cljs.core.next.call(null,inst_13614);var inst_13619 = cljs.core.first.call(null,inst_13614);var state_13630__$1 = (function (){var statearr_13636 = state_13630;(statearr_13636[7] = inst_13618);
return statearr_13636;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13630__$1,7,inst_13619);
} else
{if((state_val_13631 === 3))
{var inst_13628 = (state_13630[2]);var state_13630__$1 = state_13630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13630__$1,inst_13628);
} else
{if((state_val_13631 === 2))
{var inst_13614 = (state_13630[9]);var state_13630__$1 = state_13630;if(cljs.core.truth_(inst_13614))
{var statearr_13637_13651 = state_13630__$1;(statearr_13637_13651[1] = 4);
} else
{var statearr_13638_13652 = state_13630__$1;(statearr_13638_13652[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13631 === 1))
{var inst_13613 = cljs.core.seq.call(null,cs);var inst_13614 = inst_13613;var inst_13615 = cljs.core.PersistentVector.EMPTY;var state_13630__$1 = (function (){var statearr_13639 = state_13630;(statearr_13639[9] = inst_13614);
(statearr_13639[8] = inst_13615);
return statearr_13639;
})();var statearr_13640_13653 = state_13630__$1;(statearr_13640_13653[2] = null);
(statearr_13640_13653[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13644 = [null,null,null,null,null,null,null,null,null,null];(statearr_13644[0] = state_machine__6771__auto__);
(statearr_13644[1] = 1);
return statearr_13644;
});
var state_machine__6771__auto____1 = (function (state_13630){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13645){if((e13645 instanceof Object))
{var ex__6774__auto__ = e13645;var statearr_13646_13654 = state_13630;(statearr_13646_13654[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13655 = state_13630;
state_13630 = G__13655;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13630){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13647 = f__6786__auto__.call(null);(statearr_13647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto__);
return statearr_13647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return c__6785__auto__;
});
utils.reactive.cyclic_barrier = (function cyclic_barrier(cs){var out = cljs.core.async.chan.call(null);var c__6785__auto___13700 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13688){var state_val_13689 = (state_13688[1]);if((state_val_13689 === 5))
{var inst_13681 = (state_13688[2]);var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13688__$1,4,out,inst_13681);
} else
{if((state_val_13689 === 4))
{var inst_13683 = (state_13688[2]);var state_13688__$1 = (function (){var statearr_13690 = state_13688;(statearr_13690[7] = inst_13683);
return statearr_13690;
})();var statearr_13691_13701 = state_13688__$1;(statearr_13691_13701[2] = null);
(statearr_13691_13701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 3))
{var inst_13686 = (state_13688[2]);var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13688__$1,inst_13686);
} else
{if((state_val_13689 === 2))
{var inst_13679 = utils.reactive.barrier.call(null,cs);var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13688__$1,5,inst_13679);
} else
{if((state_val_13689 === 1))
{var state_13688__$1 = state_13688;var statearr_13692_13702 = state_13688__$1;(statearr_13692_13702[2] = null);
(statearr_13692_13702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13696 = [null,null,null,null,null,null,null,null];(statearr_13696[0] = state_machine__6771__auto__);
(statearr_13696[1] = 1);
return statearr_13696;
});
var state_machine__6771__auto____1 = (function (state_13688){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13688);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13697){if((e13697 instanceof Object))
{var ex__6774__auto__ = e13697;var statearr_13698_13703 = state_13688;(statearr_13698_13703[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13704 = state_13688;
state_13688 = G__13704;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13688){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13699 = f__6786__auto__.call(null);(statearr_13699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___13700);
return statearr_13699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
utils.reactive.mouse_enter = (function mouse_enter(el){var matcher = utils.dom.el_matcher.call(null,el);return utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594)),utils.reactive.filter.call(null,(function (e){var and__3454__auto__ = (el === e.target);if(and__3454__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3454__auto__;
}
}),utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963))));
});
utils.reactive.mouse_leave = (function mouse_leave(el){var matcher = utils.dom.el_matcher.call(null,el);return utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"leave","leave",1116750377)),utils.reactive.filter.call(null,(function (e){var and__3454__auto__ = (el === e.target);if(and__3454__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3454__auto__;
}
}),utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));
});
utils.reactive.hover = (function hover(el){return utils.reactive.distinct.call(null,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utils.reactive.mouse_enter.call(null,el),utils.reactive.mouse_leave.call(null,el)], null)));
});
utils.reactive.hover_child = (function hover_child(el,tag){var matcher = utils.dom.tag_match.call(null,tag);var over = utils.reactive.map.call(null,((function (matcher){
return (function (p1__13706_SHARP_){return utils.helpers.index_of.call(null,utils.dom.by_tag_name.call(null,el,tag),p1__13706_SHARP_);
});})(matcher))
,utils.reactive.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-match","no-match",570153515),null], null), null),utils.reactive.map.call(null,((function (matcher){
return (function (p1__13705_SHARP_){var target = p1__13705_SHARP_.target;if(cljs.core.truth_(matcher.call(null,target)))
{return target;
} else
{var temp__4090__auto__ = goog.dom.getAncestor(target,matcher);if(cljs.core.truth_(temp__4090__auto__))
{var el__$1 = temp__4090__auto__;return el__$1;
} else
{return new cljs.core.Keyword(null,"no-match","no-match",570153515);
}
}
});})(matcher))
,utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963)))));var out = utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"clear","clear",1108650431)),utils.reactive.filter.call(null,((function (matcher,over){
return (function (e){var and__3454__auto__ = matcher.call(null,e.target);if(cljs.core.truth_(and__3454__auto__))
{var rel_target = e.relatedTarget;var rel_target__$1 = ((rel_target == null)) || (cljs.core.not.call(null,matcher.call(null,rel_target)));return rel_target__$1;
} else
{return and__3454__auto__;
}
});})(matcher,over))
,utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));return utils.reactive.distinct.call(null,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [over,out], null)));
});
utils.reactive.jsonp = (function() {
var jsonp = null;
var jsonp__1 = (function (uri){return jsonp.call(null,cljs.core.async.chan.call(null),uri);
});
var jsonp__2 = (function (c,uri){var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));gjsonp.send(null,(function (p1__13707_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__13707_SHARP_);
}));
return c;
});
jsonp = function(c,uri){
switch(arguments.length){
case 1:
return jsonp__1.call(this,c);
case 2:
return jsonp__2.call(this,c,uri);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jsonp.cljs$core$IFn$_invoke$arity$1 = jsonp__1;
jsonp.cljs$core$IFn$_invoke$arity$2 = jsonp__2;
return jsonp;
})()
;
utils.reactive.throttle_STAR_ = (function() {
var throttle_STAR_ = null;
var throttle_STAR___2 = (function (in$,msecs){return throttle_STAR_.call(null,in$,msecs,cljs.core.async.chan.call(null));
});
var throttle_STAR___3 = (function (in$,msecs,out){return throttle_STAR_.call(null,in$,msecs,out,cljs.core.async.chan.call(null));
});
var throttle_STAR___4 = (function (in$,msecs,out,control){var c__6785__auto___13992 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_13939){var state_val_13940 = (state_13939[1]);if((state_val_13940 === 1))
{var inst_13850 = [in$,control];var inst_13851 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13850,null));var inst_13852 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_13853 = null;var inst_13854 = inst_13851;var state_13939__$1 = (function (){var statearr_13941 = state_13939;(statearr_13941[7] = inst_13854);
(statearr_13941[8] = inst_13853);
(statearr_13941[9] = inst_13852);
return statearr_13941;
})();var statearr_13942_13993 = state_13939__$1;(statearr_13942_13993[2] = null);
(statearr_13942_13993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 2))
{var inst_13854 = (state_13939[7]);var inst_13857 = cljs.core.nth.call(null,inst_13854,0,null);var inst_13858 = cljs.core.nth.call(null,inst_13854,1,null);var inst_13859 = cljs.core.nth.call(null,inst_13854,2,null);var state_13939__$1 = (function (){var statearr_13943 = state_13939;(statearr_13943[10] = inst_13859);
(statearr_13943[11] = inst_13858);
(statearr_13943[12] = inst_13857);
return statearr_13943;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13939__$1,4,inst_13854);
} else
{if((state_val_13940 === 3))
{var inst_13937 = (state_13939[2]);var state_13939__$1 = state_13939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13939__$1,inst_13937);
} else
{if((state_val_13940 === 4))
{var inst_13864 = (state_13939[13]);var inst_13862 = (state_13939[2]);var inst_13863 = cljs.core.nth.call(null,inst_13862,0,null);var inst_13864__$1 = cljs.core.nth.call(null,inst_13862,1,null);var inst_13868 = cljs.core._EQ_.call(null,in$,inst_13864__$1);var state_13939__$1 = (function (){var statearr_13944 = state_13939;(statearr_13944[13] = inst_13864__$1);
(statearr_13944[14] = inst_13863);
return statearr_13944;
})();if(inst_13868)
{var statearr_13945_13994 = state_13939__$1;(statearr_13945_13994[1] = 5);
} else
{var statearr_13946_13995 = state_13939__$1;(statearr_13946_13995[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 5))
{var inst_13852 = (state_13939[9]);var inst_13873 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",1017141378),inst_13852);var state_13939__$1 = state_13939;if(inst_13873)
{var statearr_13947_13996 = state_13939__$1;(statearr_13947_13996[1] = 8);
} else
{var statearr_13948_13997 = state_13939__$1;(statearr_13948_13997[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 6))
{var inst_13859 = (state_13939[10]);var inst_13864 = (state_13939[13]);var inst_13899 = cljs.core._EQ_.call(null,inst_13859,inst_13864);var state_13939__$1 = state_13939;if(inst_13899)
{var statearr_13949_13998 = state_13939__$1;(statearr_13949_13998[1] = 17);
} else
{var statearr_13950_13999 = state_13939__$1;(statearr_13950_13999[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 7))
{var inst_13935 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13951_14000 = state_13939__$1;(statearr_13951_14000[2] = inst_13935);
(statearr_13951_14000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 8))
{var inst_13863 = (state_13939[14]);var state_13939__$1 = state_13939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13939__$1,11,out,inst_13863);
} else
{if((state_val_13940 === 9))
{var inst_13852 = (state_13939[9]);var inst_13885 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throttling","throttling",673478873),inst_13852);var state_13939__$1 = state_13939;if(inst_13885)
{var statearr_13952_14001 = state_13939__$1;(statearr_13952_14001[1] = 13);
} else
{var statearr_13953_14002 = state_13939__$1;(statearr_13953_14002[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 10))
{var inst_13897 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13955_14003 = state_13939__$1;(statearr_13955_14003[2] = inst_13897);
(statearr_13955_14003[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 11))
{var inst_13863 = (state_13939[14]);var inst_13876 = (state_13939[2]);var inst_13877 = [new cljs.core.Keyword(null,"throttle","throttle",2497347228),inst_13863];var inst_13878 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13877,null));var state_13939__$1 = (function (){var statearr_13956 = state_13939;(statearr_13956[15] = inst_13876);
return statearr_13956;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13939__$1,12,out,inst_13878);
} else
{if((state_val_13940 === 12))
{var inst_13854 = (state_13939[7]);var inst_13853 = (state_13939[8]);var inst_13880 = (state_13939[2]);var inst_13881 = cljs.core.async.timeout.call(null,msecs);var inst_13882 = cljs.core.conj.call(null,inst_13854,inst_13881);var tmp13954 = inst_13853;var inst_13852 = new cljs.core.Keyword(null,"throttling","throttling",673478873);var inst_13853__$1 = tmp13954;var inst_13854__$1 = inst_13882;var state_13939__$1 = (function (){var statearr_13957 = state_13939;(statearr_13957[16] = inst_13880);
(statearr_13957[7] = inst_13854__$1);
(statearr_13957[8] = inst_13853__$1);
(statearr_13957[9] = inst_13852);
return statearr_13957;
})();var statearr_13958_14004 = state_13939__$1;(statearr_13958_14004[2] = null);
(statearr_13958_14004[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 13))
{var inst_13863 = (state_13939[14]);var state_13939__$1 = state_13939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13939__$1,16,out,inst_13863);
} else
{if((state_val_13940 === 14))
{var inst_13852 = (state_13939[9]);var inst_13891 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_13852)].join('');var inst_13892 = (new Error(inst_13891));var inst_13893 = (function(){throw inst_13892})();var state_13939__$1 = state_13939;var statearr_13961_14005 = state_13939__$1;(statearr_13961_14005[2] = inst_13893);
(statearr_13961_14005[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 15))
{var inst_13895 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13962_14006 = state_13939__$1;(statearr_13962_14006[2] = inst_13895);
(statearr_13962_14006[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 16))
{var inst_13854 = (state_13939[7]);var inst_13863 = (state_13939[14]);var inst_13852 = (state_13939[9]);var inst_13888 = (state_13939[2]);var tmp13959 = inst_13854;var tmp13960 = inst_13852;var inst_13852__$1 = tmp13960;var inst_13853 = inst_13863;var inst_13854__$1 = tmp13959;var state_13939__$1 = (function (){var statearr_13963 = state_13939;(statearr_13963[7] = inst_13854__$1);
(statearr_13963[8] = inst_13853);
(statearr_13963[9] = inst_13852__$1);
(statearr_13963[17] = inst_13888);
return statearr_13963;
})();var statearr_13964_14007 = state_13939__$1;(statearr_13964_14007[2] = null);
(statearr_13964_14007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 17))
{var inst_13853 = (state_13939[8]);var state_13939__$1 = state_13939;if(cljs.core.truth_(inst_13853))
{var statearr_13965_14008 = state_13939__$1;(statearr_13965_14008[1] = 20);
} else
{var statearr_13966_14009 = state_13939__$1;(statearr_13966_14009[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 18))
{var inst_13864 = (state_13939[13]);var inst_13916 = cljs.core._EQ_.call(null,control,inst_13864);var state_13939__$1 = state_13939;if(inst_13916)
{var statearr_13967_14010 = state_13939__$1;(statearr_13967_14010[1] = 24);
} else
{var statearr_13968_14011 = state_13939__$1;(statearr_13968_14011[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 19))
{var inst_13933 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13970_14012 = state_13939__$1;(statearr_13970_14012[2] = inst_13933);
(statearr_13970_14012[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 20))
{var inst_13853 = (state_13939[8]);var inst_13902 = [new cljs.core.Keyword(null,"throttle","throttle",2497347228),inst_13853];var inst_13903 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13902,null));var state_13939__$1 = state_13939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13939__$1,23,out,inst_13903);
} else
{if((state_val_13940 === 21))
{var inst_13854 = (state_13939[7]);var inst_13853 = (state_13939[8]);var inst_13911 = cljs.core.pop.call(null,inst_13854);var tmp13969 = inst_13853;var inst_13852 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_13853__$1 = tmp13969;var inst_13854__$1 = inst_13911;var state_13939__$1 = (function (){var statearr_13972 = state_13939;(statearr_13972[7] = inst_13854__$1);
(statearr_13972[8] = inst_13853__$1);
(statearr_13972[9] = inst_13852);
return statearr_13972;
})();var statearr_13973_14013 = state_13939__$1;(statearr_13973_14013[2] = null);
(statearr_13973_14013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 22))
{var inst_13914 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13974_14014 = state_13939__$1;(statearr_13974_14014[2] = inst_13914);
(statearr_13974_14014[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 23))
{var inst_13854 = (state_13939[7]);var inst_13852 = (state_13939[9]);var inst_13905 = (state_13939[2]);var inst_13906 = cljs.core.pop.call(null,inst_13854);var inst_13907 = cljs.core.async.timeout.call(null,msecs);var inst_13908 = cljs.core.conj.call(null,inst_13906,inst_13907);var tmp13971 = inst_13852;var inst_13852__$1 = tmp13971;var inst_13853 = null;var inst_13854__$1 = inst_13908;var state_13939__$1 = (function (){var statearr_13975 = state_13939;(statearr_13975[18] = inst_13905);
(statearr_13975[7] = inst_13854__$1);
(statearr_13975[8] = inst_13853);
(statearr_13975[9] = inst_13852__$1);
return statearr_13975;
})();var statearr_13976_14015 = state_13939__$1;(statearr_13976_14015[2] = null);
(statearr_13976_14015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 24))
{var inst_13854 = (state_13939[7]);var inst_13918 = cljs.core.count.call(null,inst_13854);var inst_13919 = cljs.core._EQ_.call(null,inst_13918,3);var state_13939__$1 = state_13939;if(inst_13919)
{var statearr_13977_14016 = state_13939__$1;(statearr_13977_14016[1] = 27);
} else
{var statearr_13978_14017 = state_13939__$1;(statearr_13978_14017[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 25))
{var inst_13864 = (state_13939[13]);var inst_13927 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_13864)].join('');var inst_13928 = (new Error(inst_13927));var inst_13929 = (function(){throw inst_13928})();var state_13939__$1 = state_13939;var statearr_13979_14018 = state_13939__$1;(statearr_13979_14018[2] = inst_13929);
(statearr_13979_14018[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 26))
{var inst_13931 = (state_13939[2]);var state_13939__$1 = state_13939;var statearr_13980_14019 = state_13939__$1;(statearr_13980_14019[2] = inst_13931);
(statearr_13980_14019[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 27))
{var inst_13854 = (state_13939[7]);var inst_13921 = cljs.core.pop.call(null,inst_13854);var state_13939__$1 = state_13939;var statearr_13981_14020 = state_13939__$1;(statearr_13981_14020[2] = inst_13921);
(statearr_13981_14020[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 28))
{var inst_13854 = (state_13939[7]);var state_13939__$1 = state_13939;var statearr_13982_14021 = state_13939__$1;(statearr_13982_14021[2] = inst_13854);
(statearr_13982_14021[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13940 === 29))
{var inst_13924 = (state_13939[2]);var inst_13852 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_13853 = null;var inst_13854 = inst_13924;var state_13939__$1 = (function (){var statearr_13983 = state_13939;(statearr_13983[7] = inst_13854);
(statearr_13983[8] = inst_13853);
(statearr_13983[9] = inst_13852);
return statearr_13983;
})();var statearr_13984_14022 = state_13939__$1;(statearr_13984_14022[2] = null);
(statearr_13984_14022[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_13988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13988[0] = state_machine__6771__auto__);
(statearr_13988[1] = 1);
return statearr_13988;
});
var state_machine__6771__auto____1 = (function (state_13939){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_13939);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e13989){if((e13989 instanceof Object))
{var ex__6774__auto__ = e13989;var statearr_13990_14023 = state_13939;(statearr_13990_14023[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14024 = state_13939;
state_13939 = G__14024;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_13939){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_13939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_13991 = f__6786__auto__.call(null);(statearr_13991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___13992);
return statearr_13991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
throttle_STAR_ = function(in$,msecs,out,control){
switch(arguments.length){
case 2:
return throttle_STAR___2.call(this,in$,msecs);
case 3:
return throttle_STAR___3.call(this,in$,msecs,out);
case 4:
return throttle_STAR___4.call(this,in$,msecs,out,control);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle_STAR_.cljs$core$IFn$_invoke$arity$2 = throttle_STAR___2;
throttle_STAR_.cljs$core$IFn$_invoke$arity$3 = throttle_STAR___3;
throttle_STAR_.cljs$core$IFn$_invoke$arity$4 = throttle_STAR___4;
return throttle_STAR_;
})()
;
utils.reactive.throttle_msg_QMARK_ = (function throttle_msg_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"throttle","throttle",2497347228)));
});
utils.reactive.throttle = (function() {
var throttle = null;
var throttle__2 = (function (in$,msecs){return throttle.call(null,in$,msecs,cljs.core.async.chan.call(null));
});
var throttle__3 = (function (in$,msecs,out){return utils.reactive.map.call(null,cljs.core.second,utils.reactive.filter.call(null,utils.reactive.throttle_msg_QMARK_,utils.reactive.throttle_STAR_.call(null,in$,msecs,out)));
});
throttle = function(in$,msecs,out){
switch(arguments.length){
case 2:
return throttle__2.call(this,in$,msecs);
case 3:
return throttle__3.call(this,in$,msecs,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
throttle.cljs$core$IFn$_invoke$arity$2 = throttle__2;
throttle.cljs$core$IFn$_invoke$arity$3 = throttle__3;
return throttle;
})()
;
utils.reactive.debounce = (function() {
var debounce = null;
var debounce__2 = (function (source,msecs){return debounce.call(null,cljs.core.async.chan.call(null),source,msecs);
});
var debounce__3 = (function (out,source,msecs){var c__6785__auto___14211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_14177){var state_val_14178 = (state_14177[1]);if((state_val_14178 === 1))
{var inst_14118 = [source];var inst_14119 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14118,null));var inst_14120 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_14121 = inst_14119;var state_14177__$1 = (function (){var statearr_14179 = state_14177;(statearr_14179[7] = inst_14121);
(statearr_14179[8] = inst_14120);
return statearr_14179;
})();var statearr_14180_14212 = state_14177__$1;(statearr_14180_14212[2] = null);
(statearr_14180_14212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 2))
{var inst_14121 = (state_14177[7]);var inst_14124 = cljs.core.nth.call(null,inst_14121,0,null);var inst_14125 = cljs.core.nth.call(null,inst_14121,1,null);var state_14177__$1 = (function (){var statearr_14181 = state_14177;(statearr_14181[9] = inst_14124);
(statearr_14181[10] = inst_14125);
return statearr_14181;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14177__$1,4,inst_14121);
} else
{if((state_val_14178 === 3))
{var inst_14175 = (state_14177[2]);var state_14177__$1 = state_14177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14177__$1,inst_14175);
} else
{if((state_val_14178 === 4))
{var inst_14130 = (state_14177[11]);var inst_14128 = (state_14177[2]);var inst_14129 = cljs.core.nth.call(null,inst_14128,0,null);var inst_14130__$1 = cljs.core.nth.call(null,inst_14128,1,null);var inst_14134 = cljs.core._EQ_.call(null,source,inst_14130__$1);var state_14177__$1 = (function (){var statearr_14182 = state_14177;(statearr_14182[12] = inst_14129);
(statearr_14182[11] = inst_14130__$1);
return statearr_14182;
})();if(inst_14134)
{var statearr_14183_14213 = state_14177__$1;(statearr_14183_14213[1] = 5);
} else
{var statearr_14184_14214 = state_14177__$1;(statearr_14184_14214[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 5))
{var inst_14120 = (state_14177[8]);var inst_14139 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",1017141378),inst_14120);var state_14177__$1 = state_14177;if(inst_14139)
{var statearr_14185_14215 = state_14177__$1;(statearr_14185_14215[1] = 8);
} else
{var statearr_14186_14216 = state_14177__$1;(statearr_14186_14216[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 6))
{var inst_14125 = (state_14177[10]);var inst_14130 = (state_14177[11]);var inst_14162 = cljs.core._EQ_.call(null,inst_14125,inst_14130);var state_14177__$1 = state_14177;if(inst_14162)
{var statearr_14187_14217 = state_14177__$1;(statearr_14187_14217[1] = 15);
} else
{var statearr_14188_14218 = state_14177__$1;(statearr_14188_14218[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 7))
{var inst_14173 = (state_14177[2]);var state_14177__$1 = state_14177;var statearr_14189_14219 = state_14177__$1;(statearr_14189_14219[2] = inst_14173);
(statearr_14189_14219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 8))
{var inst_14129 = (state_14177[12]);var state_14177__$1 = state_14177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14177__$1,11,out,inst_14129);
} else
{if((state_val_14178 === 9))
{var inst_14120 = (state_14177[8]);var inst_14147 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debouncing","debouncing",2852749368),inst_14120);var state_14177__$1 = state_14177;if(inst_14147)
{var statearr_14190_14220 = state_14177__$1;(statearr_14190_14220[1] = 12);
} else
{var statearr_14191_14221 = state_14177__$1;(statearr_14191_14221[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 10))
{var inst_14160 = (state_14177[2]);var state_14177__$1 = state_14177;var statearr_14193_14222 = state_14177__$1;(statearr_14193_14222[2] = inst_14160);
(statearr_14193_14222[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 11))
{var inst_14121 = (state_14177[7]);var inst_14142 = (state_14177[2]);var inst_14143 = cljs.core.async.timeout.call(null,msecs);var inst_14144 = cljs.core.conj.call(null,inst_14121,inst_14143);var inst_14120 = new cljs.core.Keyword(null,"debouncing","debouncing",2852749368);var inst_14121__$1 = inst_14144;var state_14177__$1 = (function (){var statearr_14194 = state_14177;(statearr_14194[7] = inst_14121__$1);
(statearr_14194[8] = inst_14120);
(statearr_14194[13] = inst_14142);
return statearr_14194;
})();var statearr_14195_14223 = state_14177__$1;(statearr_14195_14223[2] = null);
(statearr_14195_14223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 12))
{var inst_14121 = (state_14177[7]);var inst_14120 = (state_14177[8]);var inst_14149 = cljs.core.pop.call(null,inst_14121);var inst_14150 = cljs.core.async.timeout.call(null,msecs);var inst_14151 = cljs.core.conj.call(null,inst_14149,inst_14150);var tmp14192 = inst_14120;var inst_14120__$1 = tmp14192;var inst_14121__$1 = inst_14151;var state_14177__$1 = (function (){var statearr_14196 = state_14177;(statearr_14196[7] = inst_14121__$1);
(statearr_14196[8] = inst_14120__$1);
return statearr_14196;
})();var statearr_14197_14224 = state_14177__$1;(statearr_14197_14224[2] = null);
(statearr_14197_14224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 13))
{var inst_14120 = (state_14177[8]);var inst_14154 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_14120)].join('');var inst_14155 = (new Error(inst_14154));var inst_14156 = (function(){throw inst_14155})();var state_14177__$1 = state_14177;var statearr_14198_14225 = state_14177__$1;(statearr_14198_14225[2] = inst_14156);
(statearr_14198_14225[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 14))
{var inst_14158 = (state_14177[2]);var state_14177__$1 = state_14177;var statearr_14199_14226 = state_14177__$1;(statearr_14199_14226[2] = inst_14158);
(statearr_14199_14226[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 15))
{var inst_14121 = (state_14177[7]);var inst_14164 = cljs.core.pop.call(null,inst_14121);var inst_14120 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_14121__$1 = inst_14164;var state_14177__$1 = (function (){var statearr_14200 = state_14177;(statearr_14200[7] = inst_14121__$1);
(statearr_14200[8] = inst_14120);
return statearr_14200;
})();var statearr_14201_14227 = state_14177__$1;(statearr_14201_14227[2] = null);
(statearr_14201_14227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 16))
{var inst_14130 = (state_14177[11]);var inst_14167 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_14130)].join('');var inst_14168 = (new Error(inst_14167));var inst_14169 = (function(){throw inst_14168})();var state_14177__$1 = state_14177;var statearr_14202_14228 = state_14177__$1;(statearr_14202_14228[2] = inst_14169);
(statearr_14202_14228[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14178 === 17))
{var inst_14171 = (state_14177[2]);var state_14177__$1 = state_14177;var statearr_14203_14229 = state_14177__$1;(statearr_14203_14229[2] = inst_14171);
(statearr_14203_14229[1] = 7);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_14207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14207[0] = state_machine__6771__auto__);
(statearr_14207[1] = 1);
return statearr_14207;
});
var state_machine__6771__auto____1 = (function (state_14177){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_14177);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e14208){if((e14208 instanceof Object))
{var ex__6774__auto__ = e14208;var statearr_14209_14230 = state_14177;(statearr_14209_14230[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14231 = state_14177;
state_14177 = G__14231;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_14177){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_14177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_14210 = f__6786__auto__.call(null);(statearr_14210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___14211);
return statearr_14210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
debounce = function(out,source,msecs){
switch(arguments.length){
case 2:
return debounce__2.call(this,out,source);
case 3:
return debounce__3.call(this,out,source,msecs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
debounce.cljs$core$IFn$_invoke$arity$2 = debounce__2;
debounce.cljs$core$IFn$_invoke$arity$3 = debounce__3;
return debounce;
})()
;
/**
* @param {...*} var_args
*/
utils.reactive.run_task = (function() { 
var run_task__delegate = function (f,args){var out = cljs.core.async.chan.call(null);var cb = ((function (out){
return (function() { 
var G__14280__delegate = function (err,results){var c__6785__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6785__auto__,out){
return (function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = ((function (c__6785__auto__,out){
return (function (state_14266){var state_val_14267 = (state_14266[1]);if((state_val_14267 === 6))
{var inst_14261 = (state_14266[2]);var state_14266__$1 = state_14266;var statearr_14268_14281 = state_14266__$1;(statearr_14268_14281[2] = inst_14261);
(statearr_14268_14281[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 5))
{var inst_14258 = (state_14266[2]);var state_14266__$1 = state_14266;var statearr_14269_14282 = state_14266__$1;(statearr_14269_14282[2] = inst_14258);
(statearr_14269_14282[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 4))
{var inst_14263 = (state_14266[2]);var inst_14264 = cljs.core.async.close_BANG_.call(null,out);var state_14266__$1 = (function (){var statearr_14270 = state_14266;(statearr_14270[7] = inst_14263);
return statearr_14270;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14266__$1,inst_14264);
} else
{if((state_val_14267 === 3))
{var state_14266__$1 = state_14266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14266__$1,6,out,results);
} else
{if((state_val_14267 === 2))
{var state_14266__$1 = state_14266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14266__$1,5,out,err);
} else
{if((state_val_14267 === 1))
{var state_14266__$1 = state_14266;if(cljs.core.truth_(err))
{var statearr_14271_14283 = state_14266__$1;(statearr_14271_14283[1] = 2);
} else
{var statearr_14272_14284 = state_14266__$1;(statearr_14272_14284[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
});})(c__6785__auto__,out))
;return ((function (switch__6770__auto__,c__6785__auto__,out){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_14276 = [null,null,null,null,null,null,null,null];(statearr_14276[0] = state_machine__6771__auto__);
(statearr_14276[1] = 1);
return statearr_14276;
});
var state_machine__6771__auto____1 = (function (state_14266){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_14266);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e14277){if((e14277 instanceof Object))
{var ex__6774__auto__ = e14277;var statearr_14278_14285 = state_14266;(statearr_14278_14285[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14286 = state_14266;
state_14266 = G__14286;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_14266){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_14266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__,c__6785__auto__,out))
})();var state__6787__auto__ = (function (){var statearr_14279 = f__6786__auto__.call(null);(statearr_14279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto__);
return statearr_14279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
});})(c__6785__auto__,out))
);
return c__6785__auto__;
};
var G__14280 = function (err,var_args){
var results = null;if (arguments.length > 1) {
  results = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14280__delegate.call(this,err,results);};
G__14280.cljs$lang$maxFixedArity = 1;
G__14280.cljs$lang$applyTo = (function (arglist__14287){
var err = cljs.core.first(arglist__14287);
var results = cljs.core.rest(arglist__14287);
return G__14280__delegate(err,results);
});
G__14280.cljs$core$IFn$_invoke$arity$variadic = G__14280__delegate;
return G__14280;
})()
;})(out))
;cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb], null)));
return out;
};
var run_task = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return run_task__delegate.call(this,f,args);};
run_task.cljs$lang$maxFixedArity = 1;
run_task.cljs$lang$applyTo = (function (arglist__14288){
var f = cljs.core.first(arglist__14288);
var args = cljs.core.rest(arglist__14288);
return run_task__delegate(f,args);
});
run_task.cljs$core$IFn$_invoke$arity$variadic = run_task__delegate;
return run_task;
})()
;
/**
* @param {...*} var_args
*/
utils.reactive.task = (function() { 
var task__delegate = function (args){return (function (){return cljs.core.apply.call(null,utils.reactive.run_task,args);
});
};
var task = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return task__delegate.call(this,args);};
task.cljs$lang$maxFixedArity = 0;
task.cljs$lang$applyTo = (function (arglist__14289){
var args = cljs.core.seq(arglist__14289);
return task__delegate(args);
});
task.cljs$core$IFn$_invoke$arity$variadic = task__delegate;
return task;
})()
;

//# sourceMappingURL=reactive.js.map