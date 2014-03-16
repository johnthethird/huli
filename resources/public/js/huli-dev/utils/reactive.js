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
utils.reactive.log = (function log(in$){var out = cljs.core.async.chan.call(null);var chan__9574__auto___151731 = in$;var c__6762__auto___151732 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_151713){var state_val_151714 = (state_151713[1]);if((state_val_151714 === 8))
{var inst_151705 = (state_151713[2]);var state_151713__$1 = (function (){var statearr_151715 = state_151713;(statearr_151715[7] = inst_151705);
return statearr_151715;
})();var statearr_151716_151733 = state_151713__$1;(statearr_151716_151733[2] = null);
(statearr_151716_151733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151714 === 7))
{var inst_151709 = (state_151713[2]);var state_151713__$1 = state_151713;var statearr_151717_151734 = state_151713__$1;(statearr_151717_151734[2] = inst_151709);
(statearr_151717_151734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151714 === 6))
{var state_151713__$1 = state_151713;var statearr_151718_151735 = state_151713__$1;(statearr_151718_151735[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_151718_151735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151714 === 5))
{var inst_151701 = (state_151713[8]);var inst_151703 = console.log(inst_151701);var state_151713__$1 = (function (){var statearr_151719 = state_151713;(statearr_151719[9] = inst_151703);
return statearr_151719;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_151713__$1,8,out,inst_151701);
} else
{if((state_val_151714 === 4))
{var inst_151701 = (state_151713[8]);var inst_151701__$1 = (state_151713[2]);var state_151713__$1 = (function (){var statearr_151720 = state_151713;(statearr_151720[8] = inst_151701__$1);
return statearr_151720;
})();if(cljs.core.truth_(inst_151701__$1))
{var statearr_151721_151736 = state_151713__$1;(statearr_151721_151736[1] = 5);
} else
{var statearr_151722_151737 = state_151713__$1;(statearr_151722_151737[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151714 === 3))
{var inst_151711 = (state_151713[2]);var state_151713__$1 = state_151713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151713__$1,inst_151711);
} else
{if((state_val_151714 === 2))
{var state_151713__$1 = state_151713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151713__$1,4,chan__9574__auto___151731);
} else
{if((state_val_151714 === 1))
{var state_151713__$1 = state_151713;var statearr_151723_151738 = state_151713__$1;(statearr_151723_151738[2] = null);
(statearr_151723_151738[1] = 2);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_151727 = [null,null,null,null,null,null,null,null,null,null];(statearr_151727[0] = state_machine__6748__auto__);
(statearr_151727[1] = 1);
return statearr_151727;
});
var state_machine__6748__auto____1 = (function (state_151713){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_151713);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e151728){if((e151728 instanceof Object))
{var ex__6751__auto__ = e151728;var statearr_151729_151739 = state_151713;(statearr_151729_151739[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151740 = state_151713;
state_151713 = G__151740;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_151713){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_151713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_151730 = f__6763__auto__.call(null);(statearr_151730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___151732);
return statearr_151730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
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
utils.reactive.map = (function map(f,in$){var out = cljs.core.async.chan.call(null);var c__6762__auto___151805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_151788){var state_val_151789 = (state_151788[1]);if((state_val_151789 === 8))
{var inst_151779 = (state_151788[2]);var state_151788__$1 = (function (){var statearr_151790 = state_151788;(statearr_151790[7] = inst_151779);
return statearr_151790;
})();var statearr_151791_151806 = state_151788__$1;(statearr_151791_151806[2] = null);
(statearr_151791_151806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151789 === 7))
{var inst_151784 = (state_151788[2]);var state_151788__$1 = state_151788;var statearr_151792_151807 = state_151788__$1;(statearr_151792_151807[2] = inst_151784);
(statearr_151792_151807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151789 === 6))
{var inst_151782 = cljs.core.async.close_BANG_.call(null,out);var state_151788__$1 = state_151788;var statearr_151793_151808 = state_151788__$1;(statearr_151793_151808[2] = inst_151782);
(statearr_151793_151808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151789 === 5))
{var inst_151775 = (state_151788[8]);var inst_151777 = f.call(null,inst_151775);var state_151788__$1 = state_151788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_151788__$1,8,out,inst_151777);
} else
{if((state_val_151789 === 4))
{var inst_151775 = (state_151788[8]);var inst_151775__$1 = (state_151788[2]);var state_151788__$1 = (function (){var statearr_151794 = state_151788;(statearr_151794[8] = inst_151775__$1);
return statearr_151794;
})();if(cljs.core.truth_(inst_151775__$1))
{var statearr_151795_151809 = state_151788__$1;(statearr_151795_151809[1] = 5);
} else
{var statearr_151796_151810 = state_151788__$1;(statearr_151796_151810[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151789 === 3))
{var inst_151786 = (state_151788[2]);var state_151788__$1 = state_151788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151788__$1,inst_151786);
} else
{if((state_val_151789 === 2))
{var state_151788__$1 = state_151788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151788__$1,4,in$);
} else
{if((state_val_151789 === 1))
{var state_151788__$1 = state_151788;var statearr_151797_151811 = state_151788__$1;(statearr_151797_151811[2] = null);
(statearr_151797_151811[1] = 2);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_151801 = [null,null,null,null,null,null,null,null,null];(statearr_151801[0] = state_machine__6748__auto__);
(statearr_151801[1] = 1);
return statearr_151801;
});
var state_machine__6748__auto____1 = (function (state_151788){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_151788);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e151802){if((e151802 instanceof Object))
{var ex__6751__auto__ = e151802;var statearr_151803_151812 = state_151788;(statearr_151803_151812[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151813 = state_151788;
state_151788 = G__151813;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_151788){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_151788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_151804 = f__6763__auto__.call(null);(statearr_151804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___151805);
return statearr_151804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.filter = (function filter(pred,in$){var out = cljs.core.async.chan.call(null);var c__6762__auto___151894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_151873){var state_val_151874 = (state_151873[1]);if((state_val_151874 === 1))
{var state_151873__$1 = state_151873;var statearr_151875_151895 = state_151873__$1;(statearr_151875_151895[2] = null);
(statearr_151875_151895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151874 === 2))
{var state_151873__$1 = state_151873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151873__$1,4,in$);
} else
{if((state_val_151874 === 3))
{var inst_151871 = (state_151873[2]);var state_151873__$1 = state_151873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151873__$1,inst_151871);
} else
{if((state_val_151874 === 4))
{var inst_151856 = (state_151873[7]);var inst_151856__$1 = (state_151873[2]);var state_151873__$1 = (function (){var statearr_151876 = state_151873;(statearr_151876[7] = inst_151856__$1);
return statearr_151876;
})();if(cljs.core.truth_(inst_151856__$1))
{var statearr_151877_151896 = state_151873__$1;(statearr_151877_151896[1] = 5);
} else
{var statearr_151878_151897 = state_151873__$1;(statearr_151878_151897[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151874 === 5))
{var inst_151856 = (state_151873[7]);var inst_151858 = pred.call(null,inst_151856);var state_151873__$1 = state_151873;if(cljs.core.truth_(inst_151858))
{var statearr_151879_151898 = state_151873__$1;(statearr_151879_151898[1] = 8);
} else
{var statearr_151880_151899 = state_151873__$1;(statearr_151880_151899[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151874 === 6))
{var inst_151867 = cljs.core.async.close_BANG_.call(null,out);var state_151873__$1 = state_151873;var statearr_151881_151900 = state_151873__$1;(statearr_151881_151900[2] = inst_151867);
(statearr_151881_151900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151874 === 7))
{var inst_151869 = (state_151873[2]);var state_151873__$1 = state_151873;var statearr_151882_151901 = state_151873__$1;(statearr_151882_151901[2] = inst_151869);
(statearr_151882_151901[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151874 === 8))
{var inst_151856 = (state_151873[7]);var state_151873__$1 = state_151873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_151873__$1,11,out,inst_151856);
} else
{if((state_val_151874 === 9))
{var state_151873__$1 = state_151873;var statearr_151883_151902 = state_151873__$1;(statearr_151883_151902[2] = null);
(statearr_151883_151902[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151874 === 10))
{var inst_151864 = (state_151873[2]);var state_151873__$1 = (function (){var statearr_151884 = state_151873;(statearr_151884[8] = inst_151864);
return statearr_151884;
})();var statearr_151885_151903 = state_151873__$1;(statearr_151885_151903[2] = null);
(statearr_151885_151903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151874 === 11))
{var inst_151861 = (state_151873[2]);var state_151873__$1 = state_151873;var statearr_151886_151904 = state_151873__$1;(statearr_151886_151904[2] = inst_151861);
(statearr_151886_151904[1] = 10);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_151890 = [null,null,null,null,null,null,null,null,null];(statearr_151890[0] = state_machine__6748__auto__);
(statearr_151890[1] = 1);
return statearr_151890;
});
var state_machine__6748__auto____1 = (function (state_151873){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_151873);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e151891){if((e151891 instanceof Object))
{var ex__6751__auto__ = e151891;var statearr_151892_151905 = state_151873;(statearr_151892_151905[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151906 = state_151873;
state_151873 = G__151906;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_151873){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_151873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_151893 = f__6763__auto__.call(null);(statearr_151893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___151894);
return statearr_151893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.remove = (function remove(f,in$){var out = cljs.core.async.chan.call(null);var c__6762__auto___151987 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_151966){var state_val_151967 = (state_151966[1]);if((state_val_151967 === 1))
{var state_151966__$1 = state_151966;var statearr_151968_151988 = state_151966__$1;(statearr_151968_151988[2] = null);
(statearr_151968_151988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151967 === 2))
{var state_151966__$1 = state_151966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151966__$1,4,in$);
} else
{if((state_val_151967 === 3))
{var inst_151964 = (state_151966[2]);var state_151966__$1 = state_151966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151966__$1,inst_151964);
} else
{if((state_val_151967 === 4))
{var inst_151949 = (state_151966[7]);var inst_151949__$1 = (state_151966[2]);var state_151966__$1 = (function (){var statearr_151969 = state_151966;(statearr_151969[7] = inst_151949__$1);
return statearr_151969;
})();if(cljs.core.truth_(inst_151949__$1))
{var statearr_151970_151989 = state_151966__$1;(statearr_151970_151989[1] = 5);
} else
{var statearr_151971_151990 = state_151966__$1;(statearr_151971_151990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151967 === 5))
{var inst_151949 = (state_151966[7]);var inst_151951 = f.call(null,inst_151949);var state_151966__$1 = state_151966;if(cljs.core.truth_(inst_151951))
{var statearr_151972_151991 = state_151966__$1;(statearr_151972_151991[1] = 8);
} else
{var statearr_151973_151992 = state_151966__$1;(statearr_151973_151992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151967 === 6))
{var inst_151960 = cljs.core.async.close_BANG_.call(null,out);var state_151966__$1 = state_151966;var statearr_151974_151993 = state_151966__$1;(statearr_151974_151993[2] = inst_151960);
(statearr_151974_151993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151967 === 7))
{var inst_151962 = (state_151966[2]);var state_151966__$1 = state_151966;var statearr_151975_151994 = state_151966__$1;(statearr_151975_151994[2] = inst_151962);
(statearr_151975_151994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151967 === 8))
{var state_151966__$1 = state_151966;var statearr_151976_151995 = state_151966__$1;(statearr_151976_151995[2] = null);
(statearr_151976_151995[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151967 === 9))
{var inst_151949 = (state_151966[7]);var state_151966__$1 = state_151966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_151966__$1,11,out,inst_151949);
} else
{if((state_val_151967 === 10))
{var inst_151957 = (state_151966[2]);var state_151966__$1 = (function (){var statearr_151977 = state_151966;(statearr_151977[8] = inst_151957);
return statearr_151977;
})();var statearr_151978_151996 = state_151966__$1;(statearr_151978_151996[2] = null);
(statearr_151978_151996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151967 === 11))
{var inst_151955 = (state_151966[2]);var state_151966__$1 = state_151966;var statearr_151979_151997 = state_151966__$1;(statearr_151979_151997[2] = inst_151955);
(statearr_151979_151997[1] = 10);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_151983 = [null,null,null,null,null,null,null,null,null];(statearr_151983[0] = state_machine__6748__auto__);
(statearr_151983[1] = 1);
return statearr_151983;
});
var state_machine__6748__auto____1 = (function (state_151966){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_151966);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e151984){if((e151984 instanceof Object))
{var ex__6751__auto__ = e151984;var statearr_151985_151998 = state_151966;(statearr_151985_151998[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151966);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151999 = state_151966;
state_151966 = G__151999;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_151966){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_151966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_151986 = f__6763__auto__.call(null);(statearr_151986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___151987);
return statearr_151986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.spool = (function spool(xs){var out = cljs.core.async.chan.call(null);var c__6762__auto___152066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152049){var state_val_152050 = (state_152049[1]);if((state_val_152050 === 7))
{var inst_152034 = (state_152049[7]);var inst_152039 = (state_152049[2]);var inst_152040 = cljs.core.next.call(null,inst_152034);var inst_152034__$1 = inst_152040;var state_152049__$1 = (function (){var statearr_152051 = state_152049;(statearr_152051[7] = inst_152034__$1);
(statearr_152051[8] = inst_152039);
return statearr_152051;
})();var statearr_152052_152067 = state_152049__$1;(statearr_152052_152067[2] = null);
(statearr_152052_152067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152050 === 6))
{var inst_152045 = (state_152049[2]);var state_152049__$1 = state_152049;var statearr_152053_152068 = state_152049__$1;(statearr_152053_152068[2] = inst_152045);
(statearr_152053_152068[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152050 === 5))
{var inst_152043 = cljs.core.async.close_BANG_.call(null,out);var state_152049__$1 = state_152049;var statearr_152054_152069 = state_152049__$1;(statearr_152054_152069[2] = inst_152043);
(statearr_152054_152069[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152050 === 4))
{var inst_152034 = (state_152049[7]);var inst_152037 = cljs.core.first.call(null,inst_152034);var state_152049__$1 = state_152049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152049__$1,7,out,inst_152037);
} else
{if((state_val_152050 === 3))
{var inst_152047 = (state_152049[2]);var state_152049__$1 = state_152049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152049__$1,inst_152047);
} else
{if((state_val_152050 === 2))
{var inst_152034 = (state_152049[7]);var state_152049__$1 = state_152049;if(cljs.core.truth_(inst_152034))
{var statearr_152055_152070 = state_152049__$1;(statearr_152055_152070[1] = 4);
} else
{var statearr_152056_152071 = state_152049__$1;(statearr_152056_152071[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152050 === 1))
{var inst_152033 = cljs.core.seq.call(null,xs);var inst_152034 = inst_152033;var state_152049__$1 = (function (){var statearr_152057 = state_152049;(statearr_152057[7] = inst_152034);
return statearr_152057;
})();var statearr_152058_152072 = state_152049__$1;(statearr_152058_152072[2] = null);
(statearr_152058_152072[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_152062 = [null,null,null,null,null,null,null,null,null];(statearr_152062[0] = state_machine__6748__auto__);
(statearr_152062[1] = 1);
return statearr_152062;
});
var state_machine__6748__auto____1 = (function (state_152049){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152049);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152063){if((e152063 instanceof Object))
{var ex__6751__auto__ = e152063;var statearr_152064_152073 = state_152049;(statearr_152064_152073[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152074 = state_152049;
state_152049 = G__152074;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152049){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152065 = f__6763__auto__.call(null);(statearr_152065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152066);
return statearr_152065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.split = (function() {
var split = null;
var split__2 = (function (pred,in$){return split.call(null,pred,in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null),cljs.core.async.chan.call(null)], null));
});
var split__3 = (function (pred,in$,p__152075){var vec__152120 = p__152075;var out1 = cljs.core.nth.call(null,vec__152120,0,null);var out2 = cljs.core.nth.call(null,vec__152120,1,null);var c__6762__auto___152164 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152142){var state_val_152143 = (state_152142[1]);if((state_val_152143 === 1))
{var state_152142__$1 = state_152142;var statearr_152144_152165 = state_152142__$1;(statearr_152144_152165[2] = null);
(statearr_152144_152165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152143 === 2))
{var state_152142__$1 = state_152142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152142__$1,4,in$);
} else
{if((state_val_152143 === 3))
{var inst_152140 = (state_152142[2]);var state_152142__$1 = state_152142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152142__$1,inst_152140);
} else
{if((state_val_152143 === 4))
{var inst_152123 = (state_152142[7]);var inst_152123__$1 = (state_152142[2]);var state_152142__$1 = (function (){var statearr_152145 = state_152142;(statearr_152145[7] = inst_152123__$1);
return statearr_152145;
})();if(cljs.core.truth_(inst_152123__$1))
{var statearr_152146_152166 = state_152142__$1;(statearr_152146_152166[1] = 5);
} else
{var statearr_152147_152167 = state_152142__$1;(statearr_152147_152167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152143 === 5))
{var inst_152123 = (state_152142[7]);var inst_152125 = pred.call(null,inst_152123);var state_152142__$1 = state_152142;if(cljs.core.truth_(inst_152125))
{var statearr_152148_152168 = state_152142__$1;(statearr_152148_152168[1] = 8);
} else
{var statearr_152149_152169 = state_152142__$1;(statearr_152149_152169[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152143 === 6))
{var state_152142__$1 = state_152142;var statearr_152150_152170 = state_152142__$1;(statearr_152150_152170[2] = null);
(statearr_152150_152170[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152143 === 7))
{var inst_152138 = (state_152142[2]);var state_152142__$1 = state_152142;var statearr_152151_152171 = state_152142__$1;(statearr_152151_152171[2] = inst_152138);
(statearr_152151_152171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152143 === 8))
{var inst_152123 = (state_152142[7]);var state_152142__$1 = state_152142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152142__$1,11,out1,inst_152123);
} else
{if((state_val_152143 === 9))
{var inst_152123 = (state_152142[7]);var state_152142__$1 = state_152142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152142__$1,12,out2,inst_152123);
} else
{if((state_val_152143 === 10))
{var inst_152135 = (state_152142[2]);var state_152142__$1 = state_152142;var statearr_152152_152172 = state_152142__$1;(statearr_152152_152172[2] = inst_152135);
(statearr_152152_152172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152143 === 11))
{var inst_152128 = (state_152142[2]);var state_152142__$1 = (function (){var statearr_152153 = state_152142;(statearr_152153[8] = inst_152128);
return statearr_152153;
})();var statearr_152154_152173 = state_152142__$1;(statearr_152154_152173[2] = null);
(statearr_152154_152173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152143 === 12))
{var inst_152132 = (state_152142[2]);var state_152142__$1 = (function (){var statearr_152155 = state_152142;(statearr_152155[9] = inst_152132);
return statearr_152155;
})();var statearr_152156_152174 = state_152142__$1;(statearr_152156_152174[2] = null);
(statearr_152156_152174[1] = 2);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_152160 = [null,null,null,null,null,null,null,null,null,null];(statearr_152160[0] = state_machine__6748__auto__);
(statearr_152160[1] = 1);
return statearr_152160;
});
var state_machine__6748__auto____1 = (function (state_152142){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152161){if((e152161 instanceof Object))
{var ex__6751__auto__ = e152161;var statearr_152162_152175 = state_152142;(statearr_152162_152175[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152176 = state_152142;
state_152142 = G__152176;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152142){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152163 = f__6763__auto__.call(null);(statearr_152163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152164);
return statearr_152163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out1,out2], null);
});
split = function(pred,in$,p__152075){
switch(arguments.length){
case 2:
return split__2.call(this,pred,in$);
case 3:
return split__3.call(this,pred,in$,p__152075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
utils.reactive.concat = (function concat(xs,in$){var out = cljs.core.async.chan.call(null);var c__6762__auto___152275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152251){var state_val_152252 = (state_152251[1]);if((state_val_152252 === 1))
{var inst_152226 = cljs.core.seq.call(null,xs);var inst_152227 = inst_152226;var state_152251__$1 = (function (){var statearr_152253 = state_152251;(statearr_152253[7] = inst_152227);
return statearr_152253;
})();var statearr_152254_152276 = state_152251__$1;(statearr_152254_152276[2] = null);
(statearr_152254_152276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152252 === 2))
{var inst_152227 = (state_152251[7]);var state_152251__$1 = state_152251;if(cljs.core.truth_(inst_152227))
{var statearr_152255_152277 = state_152251__$1;(statearr_152255_152277[1] = 4);
} else
{var statearr_152256_152278 = state_152251__$1;(statearr_152256_152278[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152252 === 3))
{var inst_152249 = (state_152251[2]);var state_152251__$1 = state_152251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152251__$1,inst_152249);
} else
{if((state_val_152252 === 4))
{var inst_152227 = (state_152251[7]);var inst_152230 = cljs.core.first.call(null,inst_152227);var state_152251__$1 = state_152251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152251__$1,7,out,inst_152230);
} else
{if((state_val_152252 === 5))
{var state_152251__$1 = state_152251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152251__$1,8,in$);
} else
{if((state_val_152252 === 6))
{var inst_152247 = (state_152251[2]);var state_152251__$1 = state_152251;var statearr_152257_152279 = state_152251__$1;(statearr_152257_152279[2] = inst_152247);
(statearr_152257_152279[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152252 === 7))
{var inst_152227 = (state_152251[7]);var inst_152232 = (state_152251[2]);var inst_152233 = cljs.core.next.call(null,inst_152227);var inst_152227__$1 = inst_152233;var state_152251__$1 = (function (){var statearr_152258 = state_152251;(statearr_152258[7] = inst_152227__$1);
(statearr_152258[8] = inst_152232);
return statearr_152258;
})();var statearr_152259_152280 = state_152251__$1;(statearr_152259_152280[2] = null);
(statearr_152259_152280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152252 === 8))
{var inst_152237 = (state_152251[9]);var inst_152237__$1 = (state_152251[2]);var state_152251__$1 = (function (){var statearr_152260 = state_152251;(statearr_152260[9] = inst_152237__$1);
return statearr_152260;
})();if(cljs.core.truth_(inst_152237__$1))
{var statearr_152261_152281 = state_152251__$1;(statearr_152261_152281[1] = 9);
} else
{var statearr_152262_152282 = state_152251__$1;(statearr_152262_152282[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152252 === 9))
{var inst_152237 = (state_152251[9]);var state_152251__$1 = state_152251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152251__$1,12,out,inst_152237);
} else
{if((state_val_152252 === 10))
{var inst_152243 = cljs.core.async.close_BANG_.call(null,out);var state_152251__$1 = state_152251;var statearr_152264_152283 = state_152251__$1;(statearr_152264_152283[2] = inst_152243);
(statearr_152264_152283[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152252 === 11))
{var inst_152245 = (state_152251[2]);var state_152251__$1 = state_152251;var statearr_152265_152284 = state_152251__$1;(statearr_152265_152284[2] = inst_152245);
(statearr_152265_152284[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152252 === 12))
{var inst_152227 = (state_152251[7]);var inst_152240 = (state_152251[2]);var tmp152263 = inst_152227;var inst_152227__$1 = tmp152263;var state_152251__$1 = (function (){var statearr_152266 = state_152251;(statearr_152266[7] = inst_152227__$1);
(statearr_152266[10] = inst_152240);
return statearr_152266;
})();var statearr_152267_152285 = state_152251__$1;(statearr_152267_152285[2] = null);
(statearr_152267_152285[1] = 2);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_152271 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_152271[0] = state_machine__6748__auto__);
(statearr_152271[1] = 1);
return statearr_152271;
});
var state_machine__6748__auto____1 = (function (state_152251){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152251);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152272){if((e152272 instanceof Object))
{var ex__6751__auto__ = e152272;var statearr_152273_152286 = state_152251;(statearr_152273_152286[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152287 = state_152251;
state_152251 = G__152287;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152251){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152274 = f__6763__auto__.call(null);(statearr_152274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152275);
return statearr_152274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.distinct = (function distinct(in$){var out = cljs.core.async.chan.call(null);var c__6762__auto___152372 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152350){var state_val_152351 = (state_152350[1]);if((state_val_152351 === 1))
{var inst_152330 = null;var state_152350__$1 = (function (){var statearr_152352 = state_152350;(statearr_152352[7] = inst_152330);
return statearr_152352;
})();var statearr_152353_152373 = state_152350__$1;(statearr_152353_152373[2] = null);
(statearr_152353_152373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152351 === 2))
{var state_152350__$1 = state_152350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152350__$1,4,in$);
} else
{if((state_val_152351 === 3))
{var inst_152348 = (state_152350[2]);var state_152350__$1 = state_152350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152350__$1,inst_152348);
} else
{if((state_val_152351 === 4))
{var inst_152333 = (state_152350[8]);var inst_152333__$1 = (state_152350[2]);var state_152350__$1 = (function (){var statearr_152354 = state_152350;(statearr_152354[8] = inst_152333__$1);
return statearr_152354;
})();if(cljs.core.truth_(inst_152333__$1))
{var statearr_152355_152374 = state_152350__$1;(statearr_152355_152374[1] = 5);
} else
{var statearr_152356_152375 = state_152350__$1;(statearr_152356_152375[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152351 === 5))
{var inst_152330 = (state_152350[7]);var inst_152333 = (state_152350[8]);var inst_152335 = cljs.core.not_EQ_.call(null,inst_152333,inst_152330);var state_152350__$1 = state_152350;if(inst_152335)
{var statearr_152357_152376 = state_152350__$1;(statearr_152357_152376[1] = 8);
} else
{var statearr_152358_152377 = state_152350__$1;(statearr_152358_152377[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152351 === 6))
{var inst_152344 = cljs.core.async.close_BANG_.call(null,out);var state_152350__$1 = state_152350;var statearr_152359_152378 = state_152350__$1;(statearr_152359_152378[2] = inst_152344);
(statearr_152359_152378[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152351 === 7))
{var inst_152346 = (state_152350[2]);var state_152350__$1 = state_152350;var statearr_152360_152379 = state_152350__$1;(statearr_152360_152379[2] = inst_152346);
(statearr_152360_152379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152351 === 8))
{var inst_152333 = (state_152350[8]);var state_152350__$1 = state_152350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152350__$1,11,out,inst_152333);
} else
{if((state_val_152351 === 9))
{var state_152350__$1 = state_152350;var statearr_152361_152380 = state_152350__$1;(statearr_152361_152380[2] = null);
(statearr_152361_152380[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152351 === 10))
{var inst_152333 = (state_152350[8]);var inst_152341 = (state_152350[2]);var inst_152330 = inst_152333;var state_152350__$1 = (function (){var statearr_152362 = state_152350;(statearr_152362[7] = inst_152330);
(statearr_152362[9] = inst_152341);
return statearr_152362;
})();var statearr_152363_152381 = state_152350__$1;(statearr_152363_152381[2] = null);
(statearr_152363_152381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152351 === 11))
{var inst_152338 = (state_152350[2]);var state_152350__$1 = state_152350;var statearr_152364_152382 = state_152350__$1;(statearr_152364_152382[2] = inst_152338);
(statearr_152364_152382[1] = 10);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_152368 = [null,null,null,null,null,null,null,null,null,null];(statearr_152368[0] = state_machine__6748__auto__);
(statearr_152368[1] = 1);
return statearr_152368;
});
var state_machine__6748__auto____1 = (function (state_152350){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152350);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152369){if((e152369 instanceof Object))
{var ex__6751__auto__ = e152369;var statearr_152370_152383 = state_152350;(statearr_152370_152383[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152384 = state_152350;
state_152350 = G__152384;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152350){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152371 = f__6763__auto__.call(null);(statearr_152371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152372);
return statearr_152371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.fan_in = (function() {
var fan_in = null;
var fan_in__1 = (function (ins){return fan_in.call(null,ins,cljs.core.async.chan.call(null));
});
var fan_in__2 = (function (ins,out){var c__6762__auto___152493 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152468){var state_val_152469 = (state_152468[1]);if((state_val_152469 === 1))
{var inst_152439 = cljs.core.vec.call(null,ins);var inst_152440 = inst_152439;var state_152468__$1 = (function (){var statearr_152470 = state_152468;(statearr_152470[7] = inst_152440);
return statearr_152470;
})();var statearr_152471_152494 = state_152468__$1;(statearr_152471_152494[2] = null);
(statearr_152471_152494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152469 === 2))
{var inst_152440 = (state_152468[7]);var inst_152442 = cljs.core.count.call(null,inst_152440);var inst_152443 = (inst_152442 > 0);var state_152468__$1 = state_152468;if(cljs.core.truth_(inst_152443))
{var statearr_152472_152495 = state_152468__$1;(statearr_152472_152495[1] = 4);
} else
{var statearr_152473_152496 = state_152468__$1;(statearr_152473_152496[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152469 === 3))
{var inst_152465 = (state_152468[2]);var inst_152466 = cljs.core.async.close_BANG_.call(null,out);var state_152468__$1 = (function (){var statearr_152474 = state_152468;(statearr_152474[8] = inst_152465);
return statearr_152474;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152468__$1,inst_152466);
} else
{if((state_val_152469 === 4))
{var inst_152440 = (state_152468[7]);var state_152468__$1 = state_152468;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_152468__$1,7,inst_152440);
} else
{if((state_val_152469 === 5))
{var state_152468__$1 = state_152468;var statearr_152475_152497 = state_152468__$1;(statearr_152475_152497[2] = null);
(statearr_152475_152497[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152469 === 6))
{var inst_152463 = (state_152468[2]);var state_152468__$1 = state_152468;var statearr_152476_152498 = state_152468__$1;(statearr_152476_152498[2] = inst_152463);
(statearr_152476_152498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152469 === 7))
{var inst_152448 = (state_152468[9]);var inst_152447 = (state_152468[2]);var inst_152448__$1 = cljs.core.nth.call(null,inst_152447,0,null);var inst_152449 = cljs.core.nth.call(null,inst_152447,1,null);var state_152468__$1 = (function (){var statearr_152477 = state_152468;(statearr_152477[9] = inst_152448__$1);
(statearr_152477[10] = inst_152449);
return statearr_152477;
})();if(cljs.core.truth_(inst_152448__$1))
{var statearr_152478_152499 = state_152468__$1;(statearr_152478_152499[1] = 8);
} else
{var statearr_152479_152500 = state_152468__$1;(statearr_152479_152500[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152469 === 8))
{var inst_152448 = (state_152468[9]);var state_152468__$1 = state_152468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152468__$1,11,out,inst_152448);
} else
{if((state_val_152469 === 9))
{var state_152468__$1 = state_152468;var statearr_152481_152501 = state_152468__$1;(statearr_152481_152501[2] = null);
(statearr_152481_152501[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152469 === 10))
{var inst_152440 = (state_152468[7]);var inst_152449 = (state_152468[10]);var inst_152456 = (state_152468[2]);var inst_152457 = cljs.core.set.call(null,inst_152440);var inst_152458 = cljs.core.disj.call(null,inst_152457,inst_152449);var inst_152459 = cljs.core.vec.call(null,inst_152458);var inst_152440__$1 = inst_152459;var state_152468__$1 = (function (){var statearr_152482 = state_152468;(statearr_152482[11] = inst_152456);
(statearr_152482[7] = inst_152440__$1);
return statearr_152482;
})();var statearr_152483_152502 = state_152468__$1;(statearr_152483_152502[2] = null);
(statearr_152483_152502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152469 === 11))
{var inst_152440 = (state_152468[7]);var inst_152452 = (state_152468[2]);var tmp152480 = inst_152440;var inst_152440__$1 = tmp152480;var state_152468__$1 = (function (){var statearr_152484 = state_152468;(statearr_152484[7] = inst_152440__$1);
(statearr_152484[12] = inst_152452);
return statearr_152484;
})();var statearr_152485_152503 = state_152468__$1;(statearr_152485_152503[2] = null);
(statearr_152485_152503[1] = 2);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_152489 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_152489[0] = state_machine__6748__auto__);
(statearr_152489[1] = 1);
return statearr_152489;
});
var state_machine__6748__auto____1 = (function (state_152468){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152468);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152490){if((e152490 instanceof Object))
{var ex__6751__auto__ = e152490;var statearr_152491_152504 = state_152468;(statearr_152491_152504[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152505 = state_152468;
state_152468 = G__152505;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152468){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152492 = f__6763__auto__.call(null);(statearr_152492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152493);
return statearr_152492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
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
var take_until__3 = (function (pred_sentinel,in$,out){var c__6762__auto___152590 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152569){var state_val_152570 = (state_152569[1]);if((state_val_152570 === 1))
{var state_152569__$1 = state_152569;var statearr_152571_152591 = state_152569__$1;(statearr_152571_152591[2] = null);
(statearr_152571_152591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152570 === 2))
{var state_152569__$1 = state_152569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152569__$1,4,in$);
} else
{if((state_val_152570 === 3))
{var inst_152567 = (state_152569[2]);var state_152569__$1 = state_152569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152569__$1,inst_152567);
} else
{if((state_val_152570 === 4))
{var inst_152550 = (state_152569[7]);var inst_152550__$1 = (state_152569[2]);var state_152569__$1 = (function (){var statearr_152572 = state_152569;(statearr_152572[7] = inst_152550__$1);
return statearr_152572;
})();if(cljs.core.truth_(inst_152550__$1))
{var statearr_152573_152592 = state_152569__$1;(statearr_152573_152592[1] = 5);
} else
{var statearr_152574_152593 = state_152569__$1;(statearr_152574_152593[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152570 === 5))
{var inst_152550 = (state_152569[7]);var state_152569__$1 = state_152569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152569__$1,8,out,inst_152550);
} else
{if((state_val_152570 === 6))
{var inst_152563 = cljs.core.async.close_BANG_.call(null,out);var state_152569__$1 = state_152569;var statearr_152575_152594 = state_152569__$1;(statearr_152575_152594[2] = inst_152563);
(statearr_152575_152594[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152570 === 7))
{var inst_152565 = (state_152569[2]);var state_152569__$1 = state_152569;var statearr_152576_152595 = state_152569__$1;(statearr_152576_152595[2] = inst_152565);
(statearr_152576_152595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152570 === 8))
{var inst_152550 = (state_152569[7]);var inst_152553 = (state_152569[2]);var inst_152554 = pred_sentinel.call(null,inst_152550);var inst_152555 = cljs.core.not.call(null,inst_152554);var state_152569__$1 = (function (){var statearr_152577 = state_152569;(statearr_152577[8] = inst_152553);
return statearr_152577;
})();if(inst_152555)
{var statearr_152578_152596 = state_152569__$1;(statearr_152578_152596[1] = 9);
} else
{var statearr_152579_152597 = state_152569__$1;(statearr_152579_152597[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152570 === 9))
{var state_152569__$1 = state_152569;var statearr_152580_152598 = state_152569__$1;(statearr_152580_152598[2] = null);
(statearr_152580_152598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152570 === 10))
{var inst_152559 = cljs.core.async.close_BANG_.call(null,out);var state_152569__$1 = state_152569;var statearr_152581_152599 = state_152569__$1;(statearr_152581_152599[2] = inst_152559);
(statearr_152581_152599[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152570 === 11))
{var inst_152561 = (state_152569[2]);var state_152569__$1 = state_152569;var statearr_152582_152600 = state_152569__$1;(statearr_152582_152600[2] = inst_152561);
(statearr_152582_152600[1] = 7);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_152586 = [null,null,null,null,null,null,null,null,null];(statearr_152586[0] = state_machine__6748__auto__);
(statearr_152586[1] = 1);
return statearr_152586;
});
var state_machine__6748__auto____1 = (function (state_152569){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152569);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152587){if((e152587 instanceof Object))
{var ex__6751__auto__ = e152587;var statearr_152588_152601 = state_152569;(statearr_152588_152601[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152602 = state_152569;
state_152569 = G__152602;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152569){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152589 = f__6763__auto__.call(null);(statearr_152589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152590);
return statearr_152589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
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
var siphon__2 = (function (in$,coll){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152647){var state_val_152648 = (state_152647[1]);if((state_val_152648 === 7))
{var inst_152643 = (state_152647[2]);var state_152647__$1 = state_152647;var statearr_152649_152665 = state_152647__$1;(statearr_152649_152665[2] = inst_152643);
(statearr_152649_152665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152648 === 6))
{var inst_152634 = (state_152647[7]);var state_152647__$1 = state_152647;var statearr_152650_152666 = state_152647__$1;(statearr_152650_152666[2] = inst_152634);
(statearr_152650_152666[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152648 === 5))
{var inst_152634 = (state_152647[7]);var inst_152637 = (state_152647[8]);var inst_152639 = cljs.core.conj.call(null,inst_152634,inst_152637);var inst_152634__$1 = inst_152639;var state_152647__$1 = (function (){var statearr_152651 = state_152647;(statearr_152651[7] = inst_152634__$1);
return statearr_152651;
})();var statearr_152652_152667 = state_152647__$1;(statearr_152652_152667[2] = null);
(statearr_152652_152667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152648 === 4))
{var inst_152637 = (state_152647[8]);var inst_152637__$1 = (state_152647[2]);var state_152647__$1 = (function (){var statearr_152653 = state_152647;(statearr_152653[8] = inst_152637__$1);
return statearr_152653;
})();if(cljs.core.truth_(inst_152637__$1))
{var statearr_152654_152668 = state_152647__$1;(statearr_152654_152668[1] = 5);
} else
{var statearr_152655_152669 = state_152647__$1;(statearr_152655_152669[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152648 === 3))
{var inst_152645 = (state_152647[2]);var state_152647__$1 = state_152647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152647__$1,inst_152645);
} else
{if((state_val_152648 === 2))
{var state_152647__$1 = state_152647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152647__$1,4,in$);
} else
{if((state_val_152648 === 1))
{var inst_152634 = coll;var state_152647__$1 = (function (){var statearr_152656 = state_152647;(statearr_152656[7] = inst_152634);
return statearr_152656;
})();var statearr_152657_152670 = state_152647__$1;(statearr_152657_152670[2] = null);
(statearr_152657_152670[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_152661 = [null,null,null,null,null,null,null,null,null];(statearr_152661[0] = state_machine__6748__auto__);
(statearr_152661[1] = 1);
return statearr_152661;
});
var state_machine__6748__auto____1 = (function (state_152647){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152647);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152662){if((e152662 instanceof Object))
{var ex__6751__auto__ = e152662;var statearr_152663_152671 = state_152647;(statearr_152663_152671[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152672 = state_152647;
state_152647 = G__152672;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152647){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152664 = f__6763__auto__.call(null);(statearr_152664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_152664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
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
utils.reactive.always = (function always(v,c){var out = cljs.core.async.chan.call(null);var c__6762__auto___152733 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152717){var state_val_152718 = (state_152717[1]);if((state_val_152718 === 8))
{var inst_152708 = (state_152717[2]);var state_152717__$1 = (function (){var statearr_152719 = state_152717;(statearr_152719[7] = inst_152708);
return statearr_152719;
})();var statearr_152720_152734 = state_152717__$1;(statearr_152720_152734[2] = null);
(statearr_152720_152734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152718 === 7))
{var inst_152713 = (state_152717[2]);var state_152717__$1 = state_152717;var statearr_152721_152735 = state_152717__$1;(statearr_152721_152735[2] = inst_152713);
(statearr_152721_152735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152718 === 6))
{var inst_152711 = cljs.core.async.close_BANG_.call(null,out);var state_152717__$1 = state_152717;var statearr_152722_152736 = state_152717__$1;(statearr_152722_152736[2] = inst_152711);
(statearr_152722_152736[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152718 === 5))
{var state_152717__$1 = state_152717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152717__$1,8,out,v);
} else
{if((state_val_152718 === 4))
{var inst_152705 = (state_152717[2]);var state_152717__$1 = state_152717;if(cljs.core.truth_(inst_152705))
{var statearr_152723_152737 = state_152717__$1;(statearr_152723_152737[1] = 5);
} else
{var statearr_152724_152738 = state_152717__$1;(statearr_152724_152738[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152718 === 3))
{var inst_152715 = (state_152717[2]);var state_152717__$1 = state_152717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152717__$1,inst_152715);
} else
{if((state_val_152718 === 2))
{var state_152717__$1 = state_152717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152717__$1,4,c);
} else
{if((state_val_152718 === 1))
{var state_152717__$1 = state_152717;var statearr_152725_152739 = state_152717__$1;(statearr_152725_152739[2] = null);
(statearr_152725_152739[1] = 2);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_152729 = [null,null,null,null,null,null,null,null];(statearr_152729[0] = state_machine__6748__auto__);
(statearr_152729[1] = 1);
return statearr_152729;
});
var state_machine__6748__auto____1 = (function (state_152717){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152717);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152730){if((e152730 instanceof Object))
{var ex__6751__auto__ = e152730;var statearr_152731_152740 = state_152717;(statearr_152731_152740[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152741 = state_152717;
state_152717 = G__152741;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152717){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152732 = f__6763__auto__.call(null);(statearr_152732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152733);
return statearr_152732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.toggle = (function toggle(in$){var out = cljs.core.async.chan.call(null);var control = cljs.core.async.chan.call(null);var c__6762__auto___152890 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152858){var state_val_152859 = (state_152858[1]);if((state_val_152859 === 1))
{var inst_152816 = true;var state_152858__$1 = (function (){var statearr_152860 = state_152858;(statearr_152860[7] = inst_152816);
return statearr_152860;
})();var statearr_152861_152891 = state_152858__$1;(statearr_152861_152891[2] = null);
(statearr_152861_152891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 2))
{var inst_152823 = [in$,control];var inst_152824 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_152823,null));var state_152858__$1 = state_152858;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_152858__$1,4,inst_152824);
} else
{if((state_val_152859 === 3))
{var inst_152856 = (state_152858[2]);var state_152858__$1 = state_152858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152858__$1,inst_152856);
} else
{if((state_val_152859 === 4))
{var inst_152828 = (state_152858[8]);var inst_152826 = (state_152858[9]);var inst_152826__$1 = (state_152858[2]);var inst_152827 = cljs.core.nth.call(null,inst_152826__$1,0,null);var inst_152828__$1 = cljs.core.nth.call(null,inst_152826__$1,1,null);var inst_152829 = cljs.core._EQ_.call(null,inst_152828__$1,in$);var state_152858__$1 = (function (){var statearr_152862 = state_152858;(statearr_152862[8] = inst_152828__$1);
(statearr_152862[10] = inst_152827);
(statearr_152862[9] = inst_152826__$1);
return statearr_152862;
})();if(inst_152829)
{var statearr_152863_152892 = state_152858__$1;(statearr_152863_152892[1] = 5);
} else
{var statearr_152864_152893 = state_152858__$1;(statearr_152864_152893[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 5))
{var inst_152816 = (state_152858[7]);var inst_152826 = (state_152858[9]);var inst_152832 = cljs.core.nth.call(null,inst_152826,0,null);var state_152858__$1 = (function (){var statearr_152865 = state_152858;(statearr_152865[11] = inst_152832);
return statearr_152865;
})();if(cljs.core.truth_(inst_152816))
{var statearr_152866_152894 = state_152858__$1;(statearr_152866_152894[1] = 8);
} else
{var statearr_152867_152895 = state_152858__$1;(statearr_152867_152895[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 6))
{var inst_152828 = (state_152858[8]);var inst_152840 = cljs.core._EQ_.call(null,inst_152828,control);var state_152858__$1 = state_152858;if(inst_152840)
{var statearr_152868_152896 = state_152858__$1;(statearr_152868_152896[1] = 12);
} else
{var statearr_152869_152897 = state_152858__$1;(statearr_152869_152897[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 7))
{var inst_152853 = (state_152858[2]);var inst_152816 = inst_152853;var state_152858__$1 = (function (){var statearr_152870 = state_152858;(statearr_152870[7] = inst_152816);
return statearr_152870;
})();var statearr_152871_152898 = state_152858__$1;(statearr_152871_152898[2] = null);
(statearr_152871_152898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 8))
{var inst_152832 = (state_152858[11]);var state_152858__$1 = state_152858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_152858__$1,11,out,inst_152832);
} else
{if((state_val_152859 === 9))
{var state_152858__$1 = state_152858;var statearr_152872_152899 = state_152858__$1;(statearr_152872_152899[2] = null);
(statearr_152872_152899[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 10))
{var inst_152816 = (state_152858[7]);var inst_152838 = (state_152858[2]);var state_152858__$1 = (function (){var statearr_152873 = state_152858;(statearr_152873[12] = inst_152838);
return statearr_152873;
})();var statearr_152874_152900 = state_152858__$1;(statearr_152874_152900[2] = inst_152816);
(statearr_152874_152900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 11))
{var inst_152835 = (state_152858[2]);var state_152858__$1 = state_152858;var statearr_152875_152901 = state_152858__$1;(statearr_152875_152901[2] = inst_152835);
(statearr_152875_152901[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 12))
{var inst_152826 = (state_152858[9]);var inst_152843 = cljs.core.nth.call(null,inst_152826,0,null);var state_152858__$1 = state_152858;var statearr_152876_152902 = state_152858__$1;(statearr_152876_152902[2] = inst_152843);
(statearr_152876_152902[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 13))
{var inst_152828 = (state_152858[8]);var inst_152845 = cljs.core._EQ_.call(null,inst_152828,new cljs.core.Keyword(null,"default","default",2558708147));var state_152858__$1 = state_152858;if(inst_152845)
{var statearr_152877_152903 = state_152858__$1;(statearr_152877_152903[1] = 15);
} else
{var statearr_152878_152904 = state_152858__$1;(statearr_152878_152904[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 14))
{var inst_152851 = (state_152858[2]);var state_152858__$1 = state_152858;var statearr_152879_152905 = state_152858__$1;(statearr_152879_152905[2] = inst_152851);
(statearr_152879_152905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 15))
{var inst_152827 = (state_152858[10]);var state_152858__$1 = state_152858;var statearr_152880_152906 = state_152858__$1;(statearr_152880_152906[2] = inst_152827);
(statearr_152880_152906[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 16))
{var state_152858__$1 = state_152858;var statearr_152881_152907 = state_152858__$1;(statearr_152881_152907[2] = null);
(statearr_152881_152907[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152859 === 17))
{var inst_152849 = (state_152858[2]);var state_152858__$1 = state_152858;var statearr_152882_152908 = state_152858__$1;(statearr_152882_152908[2] = inst_152849);
(statearr_152882_152908[1] = 14);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_152886 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_152886[0] = state_machine__6748__auto__);
(statearr_152886[1] = 1);
return statearr_152886;
});
var state_machine__6748__auto____1 = (function (state_152858){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152858);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152887){if((e152887 instanceof Object))
{var ex__6751__auto__ = e152887;var statearr_152888_152909 = state_152858;(statearr_152888_152909[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152910 = state_152858;
state_152858 = G__152910;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152858){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152889 = f__6763__auto__.call(null);(statearr_152889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___152890);
return statearr_152889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan","chan",1016956612),out,new cljs.core.Keyword(null,"control","control",1965447375),control], null);
});
utils.reactive.barrier = (function barrier(cs){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_152963){var state_val_152964 = (state_152963[1]);if((state_val_152964 === 7))
{var inst_152948 = (state_152963[7]);var inst_152951 = (state_152963[8]);var inst_152954 = (state_152963[2]);var inst_152955 = cljs.core.conj.call(null,inst_152948,inst_152954);var inst_152947 = inst_152951;var inst_152948__$1 = inst_152955;var state_152963__$1 = (function (){var statearr_152965 = state_152963;(statearr_152965[7] = inst_152948__$1);
(statearr_152965[9] = inst_152947);
return statearr_152965;
})();var statearr_152966_152981 = state_152963__$1;(statearr_152966_152981[2] = null);
(statearr_152966_152981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152964 === 6))
{var inst_152959 = (state_152963[2]);var state_152963__$1 = state_152963;var statearr_152967_152982 = state_152963__$1;(statearr_152967_152982[2] = inst_152959);
(statearr_152967_152982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152964 === 5))
{var inst_152948 = (state_152963[7]);var state_152963__$1 = state_152963;var statearr_152968_152983 = state_152963__$1;(statearr_152968_152983[2] = inst_152948);
(statearr_152968_152983[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152964 === 4))
{var inst_152947 = (state_152963[9]);var inst_152951 = cljs.core.next.call(null,inst_152947);var inst_152952 = cljs.core.first.call(null,inst_152947);var state_152963__$1 = (function (){var statearr_152969 = state_152963;(statearr_152969[8] = inst_152951);
return statearr_152969;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152963__$1,7,inst_152952);
} else
{if((state_val_152964 === 3))
{var inst_152961 = (state_152963[2]);var state_152963__$1 = state_152963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152963__$1,inst_152961);
} else
{if((state_val_152964 === 2))
{var inst_152947 = (state_152963[9]);var state_152963__$1 = state_152963;if(cljs.core.truth_(inst_152947))
{var statearr_152970_152984 = state_152963__$1;(statearr_152970_152984[1] = 4);
} else
{var statearr_152971_152985 = state_152963__$1;(statearr_152971_152985[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_152964 === 1))
{var inst_152946 = cljs.core.seq.call(null,cs);var inst_152947 = inst_152946;var inst_152948 = cljs.core.PersistentVector.EMPTY;var state_152963__$1 = (function (){var statearr_152972 = state_152963;(statearr_152972[7] = inst_152948);
(statearr_152972[9] = inst_152947);
return statearr_152972;
})();var statearr_152973_152986 = state_152963__$1;(statearr_152973_152986[2] = null);
(statearr_152973_152986[1] = 2);
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
var state_machine__6748__auto____0 = (function (){var statearr_152977 = [null,null,null,null,null,null,null,null,null,null];(statearr_152977[0] = state_machine__6748__auto__);
(statearr_152977[1] = 1);
return statearr_152977;
});
var state_machine__6748__auto____1 = (function (state_152963){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_152963);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e152978){if((e152978 instanceof Object))
{var ex__6751__auto__ = e152978;var statearr_152979_152987 = state_152963;(statearr_152979_152987[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e152978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__152988 = state_152963;
state_152963 = G__152988;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_152963){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_152963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_152980 = f__6763__auto__.call(null);(statearr_152980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_152980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return c__6762__auto__;
});
utils.reactive.cyclic_barrier = (function cyclic_barrier(cs){var out = cljs.core.async.chan.call(null);var c__6762__auto___153033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_153021){var state_val_153022 = (state_153021[1]);if((state_val_153022 === 5))
{var inst_153014 = (state_153021[2]);var state_153021__$1 = state_153021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153021__$1,4,out,inst_153014);
} else
{if((state_val_153022 === 4))
{var inst_153016 = (state_153021[2]);var state_153021__$1 = (function (){var statearr_153023 = state_153021;(statearr_153023[7] = inst_153016);
return statearr_153023;
})();var statearr_153024_153034 = state_153021__$1;(statearr_153024_153034[2] = null);
(statearr_153024_153034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153022 === 3))
{var inst_153019 = (state_153021[2]);var state_153021__$1 = state_153021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153021__$1,inst_153019);
} else
{if((state_val_153022 === 2))
{var inst_153012 = utils.reactive.barrier.call(null,cs);var state_153021__$1 = state_153021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153021__$1,5,inst_153012);
} else
{if((state_val_153022 === 1))
{var state_153021__$1 = state_153021;var statearr_153025_153035 = state_153021__$1;(statearr_153025_153035[2] = null);
(statearr_153025_153035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_153029 = [null,null,null,null,null,null,null,null];(statearr_153029[0] = state_machine__6748__auto__);
(statearr_153029[1] = 1);
return statearr_153029;
});
var state_machine__6748__auto____1 = (function (state_153021){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_153021);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e153030){if((e153030 instanceof Object))
{var ex__6751__auto__ = e153030;var statearr_153031_153036 = state_153021;(statearr_153031_153036[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e153030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__153037 = state_153021;
state_153021 = G__153037;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_153021){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_153021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_153032 = f__6763__auto__.call(null);(statearr_153032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___153033);
return statearr_153032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
}));
return out;
});
utils.reactive.mouse_enter = (function mouse_enter(el){var matcher = utils.dom.el_matcher.call(null,el);return utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594)),utils.reactive.filter.call(null,(function (e){var and__3431__auto__ = (el === e.target);if(and__3431__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3431__auto__;
}
}),utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963))));
});
utils.reactive.mouse_leave = (function mouse_leave(el){var matcher = utils.dom.el_matcher.call(null,el);return utils.reactive.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"leave","leave",1116750377)),utils.reactive.filter.call(null,(function (e){var and__3431__auto__ = (el === e.target);if(and__3431__auto__)
{var temp__4090__auto__ = e.relatedTarget;if(cljs.core.truth_(temp__4090__auto__))
{var rel = temp__4090__auto__;return (goog.dom.getAncestor(rel,matcher) == null);
} else
{return true;
}
} else
{return and__3431__auto__;
}
}),utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));
});
utils.reactive.hover = (function hover(el){return utils.reactive.distinct.call(null,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utils.reactive.mouse_enter.call(null,el),utils.reactive.mouse_leave.call(null,el)], null)));
});
utils.reactive.hover_child = (function hover_child(el,tag){var matcher = utils.dom.tag_match.call(null,tag);var over = utils.reactive.map.call(null,((function (matcher){
return (function (p1__153039_SHARP_){return utils.helpers.index_of.call(null,utils.dom.by_tag_name.call(null,el,tag),p1__153039_SHARP_);
});})(matcher))
,utils.reactive.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-match","no-match",570153515),null], null), null),utils.reactive.map.call(null,((function (matcher){
return (function (p1__153038_SHARP_){var target = p1__153038_SHARP_.target;if(cljs.core.truth_(matcher.call(null,target)))
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
return (function (e){var and__3431__auto__ = matcher.call(null,e.target);if(cljs.core.truth_(and__3431__auto__))
{var rel_target = e.relatedTarget;var rel_target__$1 = ((rel_target == null)) || (cljs.core.not.call(null,matcher.call(null,rel_target)));return rel_target__$1;
} else
{return and__3431__auto__;
}
});})(matcher,over))
,utils.reactive.listen.call(null,el,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))));return utils.reactive.distinct.call(null,utils.reactive.fan_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [over,out], null)));
});
utils.reactive.jsonp = (function() {
var jsonp = null;
var jsonp__1 = (function (uri){return jsonp.call(null,cljs.core.async.chan.call(null),uri);
});
var jsonp__2 = (function (c,uri){var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));gjsonp.send(null,(function (p1__153040_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__153040_SHARP_);
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
var throttle_STAR___4 = (function (in$,msecs,out,control){var c__6762__auto___153325 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_153272){var state_val_153273 = (state_153272[1]);if((state_val_153273 === 1))
{var inst_153183 = [in$,control];var inst_153184 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_153183,null));var inst_153185 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_153186 = null;var inst_153187 = inst_153184;var state_153272__$1 = (function (){var statearr_153274 = state_153272;(statearr_153274[7] = inst_153187);
(statearr_153274[8] = inst_153186);
(statearr_153274[9] = inst_153185);
return statearr_153274;
})();var statearr_153275_153326 = state_153272__$1;(statearr_153275_153326[2] = null);
(statearr_153275_153326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 2))
{var inst_153187 = (state_153272[7]);var inst_153190 = cljs.core.nth.call(null,inst_153187,0,null);var inst_153191 = cljs.core.nth.call(null,inst_153187,1,null);var inst_153192 = cljs.core.nth.call(null,inst_153187,2,null);var state_153272__$1 = (function (){var statearr_153276 = state_153272;(statearr_153276[10] = inst_153192);
(statearr_153276[11] = inst_153191);
(statearr_153276[12] = inst_153190);
return statearr_153276;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_153272__$1,4,inst_153187);
} else
{if((state_val_153273 === 3))
{var inst_153270 = (state_153272[2]);var state_153272__$1 = state_153272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153272__$1,inst_153270);
} else
{if((state_val_153273 === 4))
{var inst_153197 = (state_153272[13]);var inst_153195 = (state_153272[2]);var inst_153196 = cljs.core.nth.call(null,inst_153195,0,null);var inst_153197__$1 = cljs.core.nth.call(null,inst_153195,1,null);var inst_153201 = cljs.core._EQ_.call(null,in$,inst_153197__$1);var state_153272__$1 = (function (){var statearr_153277 = state_153272;(statearr_153277[13] = inst_153197__$1);
(statearr_153277[14] = inst_153196);
return statearr_153277;
})();if(inst_153201)
{var statearr_153278_153327 = state_153272__$1;(statearr_153278_153327[1] = 5);
} else
{var statearr_153279_153328 = state_153272__$1;(statearr_153279_153328[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 5))
{var inst_153185 = (state_153272[9]);var inst_153206 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",1017141378),inst_153185);var state_153272__$1 = state_153272;if(inst_153206)
{var statearr_153280_153329 = state_153272__$1;(statearr_153280_153329[1] = 8);
} else
{var statearr_153281_153330 = state_153272__$1;(statearr_153281_153330[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 6))
{var inst_153192 = (state_153272[10]);var inst_153197 = (state_153272[13]);var inst_153232 = cljs.core._EQ_.call(null,inst_153192,inst_153197);var state_153272__$1 = state_153272;if(inst_153232)
{var statearr_153282_153331 = state_153272__$1;(statearr_153282_153331[1] = 17);
} else
{var statearr_153283_153332 = state_153272__$1;(statearr_153283_153332[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 7))
{var inst_153268 = (state_153272[2]);var state_153272__$1 = state_153272;var statearr_153284_153333 = state_153272__$1;(statearr_153284_153333[2] = inst_153268);
(statearr_153284_153333[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 8))
{var inst_153196 = (state_153272[14]);var state_153272__$1 = state_153272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153272__$1,11,out,inst_153196);
} else
{if((state_val_153273 === 9))
{var inst_153185 = (state_153272[9]);var inst_153218 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throttling","throttling",673478873),inst_153185);var state_153272__$1 = state_153272;if(inst_153218)
{var statearr_153285_153334 = state_153272__$1;(statearr_153285_153334[1] = 13);
} else
{var statearr_153286_153335 = state_153272__$1;(statearr_153286_153335[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 10))
{var inst_153230 = (state_153272[2]);var state_153272__$1 = state_153272;var statearr_153288_153336 = state_153272__$1;(statearr_153288_153336[2] = inst_153230);
(statearr_153288_153336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 11))
{var inst_153196 = (state_153272[14]);var inst_153209 = (state_153272[2]);var inst_153210 = [new cljs.core.Keyword(null,"throttle","throttle",2497347228),inst_153196];var inst_153211 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_153210,null));var state_153272__$1 = (function (){var statearr_153289 = state_153272;(statearr_153289[15] = inst_153209);
return statearr_153289;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153272__$1,12,out,inst_153211);
} else
{if((state_val_153273 === 12))
{var inst_153187 = (state_153272[7]);var inst_153186 = (state_153272[8]);var inst_153213 = (state_153272[2]);var inst_153214 = cljs.core.async.timeout.call(null,msecs);var inst_153215 = cljs.core.conj.call(null,inst_153187,inst_153214);var tmp153287 = inst_153186;var inst_153185 = new cljs.core.Keyword(null,"throttling","throttling",673478873);var inst_153186__$1 = tmp153287;var inst_153187__$1 = inst_153215;var state_153272__$1 = (function (){var statearr_153290 = state_153272;(statearr_153290[7] = inst_153187__$1);
(statearr_153290[8] = inst_153186__$1);
(statearr_153290[16] = inst_153213);
(statearr_153290[9] = inst_153185);
return statearr_153290;
})();var statearr_153291_153337 = state_153272__$1;(statearr_153291_153337[2] = null);
(statearr_153291_153337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 13))
{var inst_153196 = (state_153272[14]);var state_153272__$1 = state_153272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153272__$1,16,out,inst_153196);
} else
{if((state_val_153273 === 14))
{var inst_153185 = (state_153272[9]);var inst_153224 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_153185)].join('');var inst_153225 = (new Error(inst_153224));var inst_153226 = (function(){throw inst_153225})();var state_153272__$1 = state_153272;var statearr_153294_153338 = state_153272__$1;(statearr_153294_153338[2] = inst_153226);
(statearr_153294_153338[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 15))
{var inst_153228 = (state_153272[2]);var state_153272__$1 = state_153272;var statearr_153295_153339 = state_153272__$1;(statearr_153295_153339[2] = inst_153228);
(statearr_153295_153339[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 16))
{var inst_153187 = (state_153272[7]);var inst_153185 = (state_153272[9]);var inst_153196 = (state_153272[14]);var inst_153221 = (state_153272[2]);var tmp153292 = inst_153187;var tmp153293 = inst_153185;var inst_153185__$1 = tmp153293;var inst_153186 = inst_153196;var inst_153187__$1 = tmp153292;var state_153272__$1 = (function (){var statearr_153296 = state_153272;(statearr_153296[17] = inst_153221);
(statearr_153296[7] = inst_153187__$1);
(statearr_153296[8] = inst_153186);
(statearr_153296[9] = inst_153185__$1);
return statearr_153296;
})();var statearr_153297_153340 = state_153272__$1;(statearr_153297_153340[2] = null);
(statearr_153297_153340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 17))
{var inst_153186 = (state_153272[8]);var state_153272__$1 = state_153272;if(cljs.core.truth_(inst_153186))
{var statearr_153298_153341 = state_153272__$1;(statearr_153298_153341[1] = 20);
} else
{var statearr_153299_153342 = state_153272__$1;(statearr_153299_153342[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 18))
{var inst_153197 = (state_153272[13]);var inst_153249 = cljs.core._EQ_.call(null,control,inst_153197);var state_153272__$1 = state_153272;if(inst_153249)
{var statearr_153300_153343 = state_153272__$1;(statearr_153300_153343[1] = 24);
} else
{var statearr_153301_153344 = state_153272__$1;(statearr_153301_153344[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 19))
{var inst_153266 = (state_153272[2]);var state_153272__$1 = state_153272;var statearr_153303_153345 = state_153272__$1;(statearr_153303_153345[2] = inst_153266);
(statearr_153303_153345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 20))
{var inst_153186 = (state_153272[8]);var inst_153235 = [new cljs.core.Keyword(null,"throttle","throttle",2497347228),inst_153186];var inst_153236 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_153235,null));var state_153272__$1 = state_153272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153272__$1,23,out,inst_153236);
} else
{if((state_val_153273 === 21))
{var inst_153187 = (state_153272[7]);var inst_153186 = (state_153272[8]);var inst_153244 = cljs.core.pop.call(null,inst_153187);var tmp153302 = inst_153186;var inst_153185 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_153186__$1 = tmp153302;var inst_153187__$1 = inst_153244;var state_153272__$1 = (function (){var statearr_153305 = state_153272;(statearr_153305[7] = inst_153187__$1);
(statearr_153305[8] = inst_153186__$1);
(statearr_153305[9] = inst_153185);
return statearr_153305;
})();var statearr_153306_153346 = state_153272__$1;(statearr_153306_153346[2] = null);
(statearr_153306_153346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 22))
{var inst_153247 = (state_153272[2]);var state_153272__$1 = state_153272;var statearr_153307_153347 = state_153272__$1;(statearr_153307_153347[2] = inst_153247);
(statearr_153307_153347[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 23))
{var inst_153187 = (state_153272[7]);var inst_153185 = (state_153272[9]);var inst_153238 = (state_153272[2]);var inst_153239 = cljs.core.pop.call(null,inst_153187);var inst_153240 = cljs.core.async.timeout.call(null,msecs);var inst_153241 = cljs.core.conj.call(null,inst_153239,inst_153240);var tmp153304 = inst_153185;var inst_153185__$1 = tmp153304;var inst_153186 = null;var inst_153187__$1 = inst_153241;var state_153272__$1 = (function (){var statearr_153308 = state_153272;(statearr_153308[7] = inst_153187__$1);
(statearr_153308[8] = inst_153186);
(statearr_153308[9] = inst_153185__$1);
(statearr_153308[18] = inst_153238);
return statearr_153308;
})();var statearr_153309_153348 = state_153272__$1;(statearr_153309_153348[2] = null);
(statearr_153309_153348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 24))
{var inst_153187 = (state_153272[7]);var inst_153251 = cljs.core.count.call(null,inst_153187);var inst_153252 = cljs.core._EQ_.call(null,inst_153251,3);var state_153272__$1 = state_153272;if(inst_153252)
{var statearr_153310_153349 = state_153272__$1;(statearr_153310_153349[1] = 27);
} else
{var statearr_153311_153350 = state_153272__$1;(statearr_153311_153350[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 25))
{var inst_153197 = (state_153272[13]);var inst_153260 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_153197)].join('');var inst_153261 = (new Error(inst_153260));var inst_153262 = (function(){throw inst_153261})();var state_153272__$1 = state_153272;var statearr_153312_153351 = state_153272__$1;(statearr_153312_153351[2] = inst_153262);
(statearr_153312_153351[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 26))
{var inst_153264 = (state_153272[2]);var state_153272__$1 = state_153272;var statearr_153313_153352 = state_153272__$1;(statearr_153313_153352[2] = inst_153264);
(statearr_153313_153352[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 27))
{var inst_153187 = (state_153272[7]);var inst_153254 = cljs.core.pop.call(null,inst_153187);var state_153272__$1 = state_153272;var statearr_153314_153353 = state_153272__$1;(statearr_153314_153353[2] = inst_153254);
(statearr_153314_153353[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 28))
{var inst_153187 = (state_153272[7]);var state_153272__$1 = state_153272;var statearr_153315_153354 = state_153272__$1;(statearr_153315_153354[2] = inst_153187);
(statearr_153315_153354[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153273 === 29))
{var inst_153257 = (state_153272[2]);var inst_153185 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_153186 = null;var inst_153187 = inst_153257;var state_153272__$1 = (function (){var statearr_153316 = state_153272;(statearr_153316[7] = inst_153187);
(statearr_153316[8] = inst_153186);
(statearr_153316[9] = inst_153185);
return statearr_153316;
})();var statearr_153317_153355 = state_153272__$1;(statearr_153317_153355[2] = null);
(statearr_153317_153355[1] = 2);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_153321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_153321[0] = state_machine__6748__auto__);
(statearr_153321[1] = 1);
return statearr_153321;
});
var state_machine__6748__auto____1 = (function (state_153272){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_153272);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e153322){if((e153322 instanceof Object))
{var ex__6751__auto__ = e153322;var statearr_153323_153356 = state_153272;(statearr_153323_153356[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153272);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e153322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__153357 = state_153272;
state_153272 = G__153357;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_153272){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_153272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_153324 = f__6763__auto__.call(null);(statearr_153324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___153325);
return statearr_153324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
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
var debounce__3 = (function (out,source,msecs){var c__6762__auto___153544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = (function (state_153510){var state_val_153511 = (state_153510[1]);if((state_val_153511 === 1))
{var inst_153451 = [source];var inst_153452 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_153451,null));var inst_153453 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_153454 = inst_153452;var state_153510__$1 = (function (){var statearr_153512 = state_153510;(statearr_153512[7] = inst_153453);
(statearr_153512[8] = inst_153454);
return statearr_153512;
})();var statearr_153513_153545 = state_153510__$1;(statearr_153513_153545[2] = null);
(statearr_153513_153545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 2))
{var inst_153454 = (state_153510[8]);var inst_153457 = cljs.core.nth.call(null,inst_153454,0,null);var inst_153458 = cljs.core.nth.call(null,inst_153454,1,null);var state_153510__$1 = (function (){var statearr_153514 = state_153510;(statearr_153514[9] = inst_153458);
(statearr_153514[10] = inst_153457);
return statearr_153514;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_153510__$1,4,inst_153454);
} else
{if((state_val_153511 === 3))
{var inst_153508 = (state_153510[2]);var state_153510__$1 = state_153510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153510__$1,inst_153508);
} else
{if((state_val_153511 === 4))
{var inst_153463 = (state_153510[11]);var inst_153461 = (state_153510[2]);var inst_153462 = cljs.core.nth.call(null,inst_153461,0,null);var inst_153463__$1 = cljs.core.nth.call(null,inst_153461,1,null);var inst_153467 = cljs.core._EQ_.call(null,source,inst_153463__$1);var state_153510__$1 = (function (){var statearr_153515 = state_153510;(statearr_153515[11] = inst_153463__$1);
(statearr_153515[12] = inst_153462);
return statearr_153515;
})();if(inst_153467)
{var statearr_153516_153546 = state_153510__$1;(statearr_153516_153546[1] = 5);
} else
{var statearr_153517_153547 = state_153510__$1;(statearr_153517_153547[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 5))
{var inst_153453 = (state_153510[7]);var inst_153472 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",1017141378),inst_153453);var state_153510__$1 = state_153510;if(inst_153472)
{var statearr_153518_153548 = state_153510__$1;(statearr_153518_153548[1] = 8);
} else
{var statearr_153519_153549 = state_153510__$1;(statearr_153519_153549[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 6))
{var inst_153463 = (state_153510[11]);var inst_153458 = (state_153510[9]);var inst_153495 = cljs.core._EQ_.call(null,inst_153458,inst_153463);var state_153510__$1 = state_153510;if(inst_153495)
{var statearr_153520_153550 = state_153510__$1;(statearr_153520_153550[1] = 15);
} else
{var statearr_153521_153551 = state_153510__$1;(statearr_153521_153551[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 7))
{var inst_153506 = (state_153510[2]);var state_153510__$1 = state_153510;var statearr_153522_153552 = state_153510__$1;(statearr_153522_153552[2] = inst_153506);
(statearr_153522_153552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 8))
{var inst_153462 = (state_153510[12]);var state_153510__$1 = state_153510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153510__$1,11,out,inst_153462);
} else
{if((state_val_153511 === 9))
{var inst_153453 = (state_153510[7]);var inst_153480 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"debouncing","debouncing",2852749368),inst_153453);var state_153510__$1 = state_153510;if(inst_153480)
{var statearr_153523_153553 = state_153510__$1;(statearr_153523_153553[1] = 12);
} else
{var statearr_153524_153554 = state_153510__$1;(statearr_153524_153554[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 10))
{var inst_153493 = (state_153510[2]);var state_153510__$1 = state_153510;var statearr_153526_153555 = state_153510__$1;(statearr_153526_153555[2] = inst_153493);
(statearr_153526_153555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 11))
{var inst_153454 = (state_153510[8]);var inst_153475 = (state_153510[2]);var inst_153476 = cljs.core.async.timeout.call(null,msecs);var inst_153477 = cljs.core.conj.call(null,inst_153454,inst_153476);var inst_153453 = new cljs.core.Keyword(null,"debouncing","debouncing",2852749368);var inst_153454__$1 = inst_153477;var state_153510__$1 = (function (){var statearr_153527 = state_153510;(statearr_153527[7] = inst_153453);
(statearr_153527[8] = inst_153454__$1);
(statearr_153527[13] = inst_153475);
return statearr_153527;
})();var statearr_153528_153556 = state_153510__$1;(statearr_153528_153556[2] = null);
(statearr_153528_153556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 12))
{var inst_153453 = (state_153510[7]);var inst_153454 = (state_153510[8]);var inst_153482 = cljs.core.pop.call(null,inst_153454);var inst_153483 = cljs.core.async.timeout.call(null,msecs);var inst_153484 = cljs.core.conj.call(null,inst_153482,inst_153483);var tmp153525 = inst_153453;var inst_153453__$1 = tmp153525;var inst_153454__$1 = inst_153484;var state_153510__$1 = (function (){var statearr_153529 = state_153510;(statearr_153529[7] = inst_153453__$1);
(statearr_153529[8] = inst_153454__$1);
return statearr_153529;
})();var statearr_153530_153557 = state_153510__$1;(statearr_153530_153557[2] = null);
(statearr_153530_153557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 13))
{var inst_153453 = (state_153510[7]);var inst_153487 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_153453)].join('');var inst_153488 = (new Error(inst_153487));var inst_153489 = (function(){throw inst_153488})();var state_153510__$1 = state_153510;var statearr_153531_153558 = state_153510__$1;(statearr_153531_153558[2] = inst_153489);
(statearr_153531_153558[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 14))
{var inst_153491 = (state_153510[2]);var state_153510__$1 = state_153510;var statearr_153532_153559 = state_153510__$1;(statearr_153532_153559[2] = inst_153491);
(statearr_153532_153559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 15))
{var inst_153454 = (state_153510[8]);var inst_153497 = cljs.core.pop.call(null,inst_153454);var inst_153453 = new cljs.core.Keyword(null,"init","init",1017141378);var inst_153454__$1 = inst_153497;var state_153510__$1 = (function (){var statearr_153533 = state_153510;(statearr_153533[7] = inst_153453);
(statearr_153533[8] = inst_153454__$1);
return statearr_153533;
})();var statearr_153534_153560 = state_153510__$1;(statearr_153534_153560[2] = null);
(statearr_153534_153560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 16))
{var inst_153463 = (state_153510[11]);var inst_153500 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_153463)].join('');var inst_153501 = (new Error(inst_153500));var inst_153502 = (function(){throw inst_153501})();var state_153510__$1 = state_153510;var statearr_153535_153561 = state_153510__$1;(statearr_153535_153561[2] = inst_153502);
(statearr_153535_153561[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153511 === 17))
{var inst_153504 = (state_153510[2]);var state_153510__$1 = state_153510;var statearr_153536_153562 = state_153510__$1;(statearr_153536_153562[2] = inst_153504);
(statearr_153536_153562[1] = 7);
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
});return ((function (switch__6747__auto__){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_153540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_153540[0] = state_machine__6748__auto__);
(statearr_153540[1] = 1);
return statearr_153540;
});
var state_machine__6748__auto____1 = (function (state_153510){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_153510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e153541){if((e153541 instanceof Object))
{var ex__6751__auto__ = e153541;var statearr_153542_153563 = state_153510;(statearr_153542_153563[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e153541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__153564 = state_153510;
state_153510 = G__153564;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_153510){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_153510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__))
})();var state__6764__auto__ = (function (){var statearr_153543 = f__6763__auto__.call(null);(statearr_153543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto___153544);
return statearr_153543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
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
var G__153613__delegate = function (err,results){var c__6762__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6762__auto__,out){
return (function (){var f__6763__auto__ = (function (){var switch__6747__auto__ = ((function (c__6762__auto__,out){
return (function (state_153599){var state_val_153600 = (state_153599[1]);if((state_val_153600 === 6))
{var inst_153594 = (state_153599[2]);var state_153599__$1 = state_153599;var statearr_153601_153614 = state_153599__$1;(statearr_153601_153614[2] = inst_153594);
(statearr_153601_153614[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153600 === 5))
{var inst_153591 = (state_153599[2]);var state_153599__$1 = state_153599;var statearr_153602_153615 = state_153599__$1;(statearr_153602_153615[2] = inst_153591);
(statearr_153602_153615[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_153600 === 4))
{var inst_153596 = (state_153599[2]);var inst_153597 = cljs.core.async.close_BANG_.call(null,out);var state_153599__$1 = (function (){var statearr_153603 = state_153599;(statearr_153603[7] = inst_153596);
return statearr_153603;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153599__$1,inst_153597);
} else
{if((state_val_153600 === 3))
{var state_153599__$1 = state_153599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153599__$1,6,out,results);
} else
{if((state_val_153600 === 2))
{var state_153599__$1 = state_153599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_153599__$1,5,out,err);
} else
{if((state_val_153600 === 1))
{var state_153599__$1 = state_153599;if(cljs.core.truth_(err))
{var statearr_153604_153616 = state_153599__$1;(statearr_153604_153616[1] = 2);
} else
{var statearr_153605_153617 = state_153599__$1;(statearr_153605_153617[1] = 3);
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
});})(c__6762__auto__,out))
;return ((function (switch__6747__auto__,c__6762__auto__,out){
return (function() {
var state_machine__6748__auto__ = null;
var state_machine__6748__auto____0 = (function (){var statearr_153609 = [null,null,null,null,null,null,null,null];(statearr_153609[0] = state_machine__6748__auto__);
(statearr_153609[1] = 1);
return statearr_153609;
});
var state_machine__6748__auto____1 = (function (state_153599){while(true){
var ret_value__6749__auto__ = (function (){try{while(true){
var result__6750__auto__ = switch__6747__auto__.call(null,state_153599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6750__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6750__auto__;
}
break;
}
}catch (e153610){if((e153610 instanceof Object))
{var ex__6751__auto__ = e153610;var statearr_153611_153618 = state_153599;(statearr_153611_153618[5] = ex__6751__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e153610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__153619 = state_153599;
state_153599 = G__153619;
continue;
}
} else
{return ret_value__6749__auto__;
}
break;
}
});
state_machine__6748__auto__ = function(state_153599){
switch(arguments.length){
case 0:
return state_machine__6748__auto____0.call(this);
case 1:
return state_machine__6748__auto____1.call(this,state_153599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6748__auto____0;
state_machine__6748__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6748__auto____1;
return state_machine__6748__auto__;
})()
;})(switch__6747__auto__,c__6762__auto__,out))
})();var state__6764__auto__ = (function (){var statearr_153612 = f__6763__auto__.call(null);(statearr_153612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6762__auto__);
return statearr_153612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6764__auto__);
});})(c__6762__auto__,out))
);
return c__6762__auto__;
};
var G__153613 = function (err,var_args){
var results = null;if (arguments.length > 1) {
  results = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__153613__delegate.call(this,err,results);};
G__153613.cljs$lang$maxFixedArity = 1;
G__153613.cljs$lang$applyTo = (function (arglist__153620){
var err = cljs.core.first(arglist__153620);
var results = cljs.core.rest(arglist__153620);
return G__153613__delegate(err,results);
});
G__153613.cljs$core$IFn$_invoke$arity$variadic = G__153613__delegate;
return G__153613;
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
run_task.cljs$lang$applyTo = (function (arglist__153621){
var f = cljs.core.first(arglist__153621);
var args = cljs.core.rest(arglist__153621);
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
task.cljs$lang$applyTo = (function (arglist__153622){
var args = cljs.core.seq(arglist__153622);
return task__delegate(args);
});
task.cljs$core$IFn$_invoke$arity$variadic = task__delegate;
return task;
})()
;

//# sourceMappingURL=reactive.js.map