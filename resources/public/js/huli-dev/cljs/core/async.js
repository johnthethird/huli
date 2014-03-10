// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15352 = (function (f,fn_handler,meta15353){
this.f = f;
this.fn_handler = fn_handler;
this.meta15353 = meta15353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15352.cljs$lang$type = true;
cljs.core.async.t15352.cljs$lang$ctorStr = "cljs.core.async/t15352";
cljs.core.async.t15352.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t15352");
});
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15354){var self__ = this;
var _15354__$1 = this;return self__.meta15353;
});
cljs.core.async.t15352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15354,meta15353__$1){var self__ = this;
var _15354__$1 = this;return (new cljs.core.async.t15352(self__.f,self__.fn_handler,meta15353__$1));
});
cljs.core.async.__GT_t15352 = (function __GT_t15352(f__$1,fn_handler__$1,meta15353){return (new cljs.core.async.t15352(f__$1,fn_handler__$1,meta15353));
});
}
return (new cljs.core.async.t15352(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15356 = buff;if(G__15356)
{var bit__4116__auto__ = null;if(cljs.core.truth_((function (){var or__3466__auto__ = bit__4116__auto__;if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{return G__15356.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15356.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15356);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15356);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15357 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15357);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15357);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3454__auto__ = ret;if(cljs.core.truth_(and__3454__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3454__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4314__auto___15358 = n;var x_15359 = 0;while(true){
if((x_15359 < n__4314__auto___15358))
{(a[x_15359] = 0);
{
var G__15360 = (x_15359 + 1);
x_15359 = G__15360;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15361 = (i + 1);
i = G__15361;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15365 = (function (flag,alt_flag,meta15366){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15366 = meta15366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15365.cljs$lang$type = true;
cljs.core.async.t15365.cljs$lang$ctorStr = "cljs.core.async/t15365";
cljs.core.async.t15365.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t15365");
});
cljs.core.async.t15365.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15367){var self__ = this;
var _15367__$1 = this;return self__.meta15366;
});
cljs.core.async.t15365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15367,meta15366__$1){var self__ = this;
var _15367__$1 = this;return (new cljs.core.async.t15365(self__.flag,self__.alt_flag,meta15366__$1));
});
cljs.core.async.__GT_t15365 = (function __GT_t15365(flag__$1,alt_flag__$1,meta15366){return (new cljs.core.async.t15365(flag__$1,alt_flag__$1,meta15366));
});
}
return (new cljs.core.async.t15365(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15371 = (function (cb,flag,alt_handler,meta15372){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15372 = meta15372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15371.cljs$lang$type = true;
cljs.core.async.t15371.cljs$lang$ctorStr = "cljs.core.async/t15371";
cljs.core.async.t15371.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t15371");
});
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15373){var self__ = this;
var _15373__$1 = this;return self__.meta15372;
});
cljs.core.async.t15371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15373,meta15372__$1){var self__ = this;
var _15373__$1 = this;return (new cljs.core.async.t15371(self__.cb,self__.flag,self__.alt_handler,meta15372__$1));
});
cljs.core.async.__GT_t15371 = (function __GT_t15371(cb__$1,flag__$1,alt_handler__$1,meta15372){return (new cljs.core.async.t15371(cb__$1,flag__$1,alt_handler__$1,meta15372));
});
}
return (new cljs.core.async.t15371(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15374_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15374_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3466__auto__ = wport;if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15375 = (i + 1);
i = G__15375;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3466__auto__ = ret;if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3454__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3454__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3454__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15376){var map__15378 = p__15376;var map__15378__$1 = ((cljs.core.seq_QMARK_.call(null,map__15378))?cljs.core.apply.call(null,cljs.core.hash_map,map__15378):map__15378);var opts = map__15378__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15376 = null;if (arguments.length > 1) {
  p__15376 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15376);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15379){
var ports = cljs.core.first(arglist__15379);
var p__15376 = cljs.core.rest(arglist__15379);
return alts_BANG___delegate(ports,p__15376);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15387 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15387 = (function (ch,f,map_LT_,meta15388){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15388 = meta15388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15387.cljs$lang$type = true;
cljs.core.async.t15387.cljs$lang$ctorStr = "cljs.core.async/t15387";
cljs.core.async.t15387.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t15387");
});
cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15390 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15390 = (function (fn1,_,meta15388,ch,f,map_LT_,meta15391){
this.fn1 = fn1;
this._ = _;
this.meta15388 = meta15388;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15391 = meta15391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15390.cljs$lang$type = true;
cljs.core.async.t15390.cljs$lang$ctorStr = "cljs.core.async/t15390";
cljs.core.async.t15390.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t15390");
});
cljs.core.async.t15390.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15390.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15380_SHARP_){return f1.call(null,(((p1__15380_SHARP_ == null))?null:self__.f.call(null,p1__15380_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15392){var self__ = this;
var _15392__$1 = this;return self__.meta15391;
});
cljs.core.async.t15390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15392,meta15391__$1){var self__ = this;
var _15392__$1 = this;return (new cljs.core.async.t15390(self__.fn1,self__._,self__.meta15388,self__.ch,self__.f,self__.map_LT_,meta15391__$1));
});
cljs.core.async.__GT_t15390 = (function __GT_t15390(fn1__$1,___$2,meta15388__$1,ch__$2,f__$2,map_LT___$2,meta15391){return (new cljs.core.async.t15390(fn1__$1,___$2,meta15388__$1,ch__$2,f__$2,map_LT___$2,meta15391));
});
}
return (new cljs.core.async.t15390(fn1,___$1,self__.meta15388,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3454__auto__ = ret;if(cljs.core.truth_(and__3454__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3454__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15389){var self__ = this;
var _15389__$1 = this;return self__.meta15388;
});
cljs.core.async.t15387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15389,meta15388__$1){var self__ = this;
var _15389__$1 = this;return (new cljs.core.async.t15387(self__.ch,self__.f,self__.map_LT_,meta15388__$1));
});
cljs.core.async.__GT_t15387 = (function __GT_t15387(ch__$1,f__$1,map_LT___$1,meta15388){return (new cljs.core.async.t15387(ch__$1,f__$1,map_LT___$1,meta15388));
});
}
return (new cljs.core.async.t15387(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15396 = (function (ch,f,map_GT_,meta15397){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15397 = meta15397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15396.cljs$lang$type = true;
cljs.core.async.t15396.cljs$lang$ctorStr = "cljs.core.async/t15396";
cljs.core.async.t15396.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t15396");
});
cljs.core.async.t15396.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15396.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15396.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15398){var self__ = this;
var _15398__$1 = this;return self__.meta15397;
});
cljs.core.async.t15396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15398,meta15397__$1){var self__ = this;
var _15398__$1 = this;return (new cljs.core.async.t15396(self__.ch,self__.f,self__.map_GT_,meta15397__$1));
});
cljs.core.async.__GT_t15396 = (function __GT_t15396(ch__$1,f__$1,map_GT___$1,meta15397){return (new cljs.core.async.t15396(ch__$1,f__$1,map_GT___$1,meta15397));
});
}
return (new cljs.core.async.t15396(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15402 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15402 = (function (ch,p,filter_GT_,meta15403){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15403 = meta15403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15402.cljs$lang$type = true;
cljs.core.async.t15402.cljs$lang$ctorStr = "cljs.core.async/t15402";
cljs.core.async.t15402.cljs$lang$ctorPrWriter = (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t15402");
});
cljs.core.async.t15402.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15402.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15402.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15404){var self__ = this;
var _15404__$1 = this;return self__.meta15403;
});
cljs.core.async.t15402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15404,meta15403__$1){var self__ = this;
var _15404__$1 = this;return (new cljs.core.async.t15402(self__.ch,self__.p,self__.filter_GT_,meta15403__$1));
});
cljs.core.async.__GT_t15402 = (function __GT_t15402(ch__$1,p__$1,filter_GT___$1,meta15403){return (new cljs.core.async.t15402(ch__$1,p__$1,filter_GT___$1,meta15403));
});
}
return (new cljs.core.async.t15402(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6785__auto___15487 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_15466){var state_val_15467 = (state_15466[1]);if((state_val_15467 === 1))
{var state_15466__$1 = state_15466;var statearr_15468_15488 = state_15466__$1;(statearr_15468_15488[2] = null);
(statearr_15468_15488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 2))
{var state_15466__$1 = state_15466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15466__$1,4,ch);
} else
{if((state_val_15467 === 3))
{var inst_15464 = (state_15466[2]);var state_15466__$1 = state_15466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15466__$1,inst_15464);
} else
{if((state_val_15467 === 4))
{var inst_15448 = (state_15466[7]);var inst_15448__$1 = (state_15466[2]);var inst_15449 = (inst_15448__$1 == null);var state_15466__$1 = (function (){var statearr_15469 = state_15466;(statearr_15469[7] = inst_15448__$1);
return statearr_15469;
})();if(cljs.core.truth_(inst_15449))
{var statearr_15470_15489 = state_15466__$1;(statearr_15470_15489[1] = 5);
} else
{var statearr_15471_15490 = state_15466__$1;(statearr_15471_15490[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 5))
{var inst_15451 = cljs.core.async.close_BANG_.call(null,out);var state_15466__$1 = state_15466;var statearr_15472_15491 = state_15466__$1;(statearr_15472_15491[2] = inst_15451);
(statearr_15472_15491[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 6))
{var inst_15448 = (state_15466[7]);var inst_15453 = p.call(null,inst_15448);var state_15466__$1 = state_15466;if(cljs.core.truth_(inst_15453))
{var statearr_15473_15492 = state_15466__$1;(statearr_15473_15492[1] = 8);
} else
{var statearr_15474_15493 = state_15466__$1;(statearr_15474_15493[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 7))
{var inst_15462 = (state_15466[2]);var state_15466__$1 = state_15466;var statearr_15475_15494 = state_15466__$1;(statearr_15475_15494[2] = inst_15462);
(statearr_15475_15494[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 8))
{var inst_15448 = (state_15466[7]);var state_15466__$1 = state_15466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15466__$1,11,out,inst_15448);
} else
{if((state_val_15467 === 9))
{var state_15466__$1 = state_15466;var statearr_15476_15495 = state_15466__$1;(statearr_15476_15495[2] = null);
(statearr_15476_15495[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 10))
{var inst_15459 = (state_15466[2]);var state_15466__$1 = (function (){var statearr_15477 = state_15466;(statearr_15477[8] = inst_15459);
return statearr_15477;
})();var statearr_15478_15496 = state_15466__$1;(statearr_15478_15496[2] = null);
(statearr_15478_15496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 11))
{var inst_15456 = (state_15466[2]);var state_15466__$1 = state_15466;var statearr_15479_15497 = state_15466__$1;(statearr_15479_15497[2] = inst_15456);
(statearr_15479_15497[1] = 10);
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
var state_machine__6771__auto____0 = (function (){var statearr_15483 = [null,null,null,null,null,null,null,null,null];(statearr_15483[0] = state_machine__6771__auto__);
(statearr_15483[1] = 1);
return statearr_15483;
});
var state_machine__6771__auto____1 = (function (state_15466){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_15466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e15484){if((e15484 instanceof Object))
{var ex__6774__auto__ = e15484;var statearr_15485_15498 = state_15466;(statearr_15485_15498[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15499 = state_15466;
state_15466 = G__15499;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_15466){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_15466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_15486 = f__6786__auto__.call(null);(statearr_15486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___15487);
return statearr_15486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6785__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_15651){var state_val_15652 = (state_15651[1]);if((state_val_15652 === 1))
{var state_15651__$1 = state_15651;var statearr_15653_15690 = state_15651__$1;(statearr_15653_15690[2] = null);
(statearr_15653_15690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 2))
{var state_15651__$1 = state_15651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15651__$1,4,in$);
} else
{if((state_val_15652 === 3))
{var inst_15649 = (state_15651[2]);var state_15651__$1 = state_15651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15651__$1,inst_15649);
} else
{if((state_val_15652 === 4))
{var inst_15597 = (state_15651[7]);var inst_15597__$1 = (state_15651[2]);var inst_15598 = (inst_15597__$1 == null);var state_15651__$1 = (function (){var statearr_15654 = state_15651;(statearr_15654[7] = inst_15597__$1);
return statearr_15654;
})();if(cljs.core.truth_(inst_15598))
{var statearr_15655_15691 = state_15651__$1;(statearr_15655_15691[1] = 5);
} else
{var statearr_15656_15692 = state_15651__$1;(statearr_15656_15692[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 5))
{var inst_15600 = cljs.core.async.close_BANG_.call(null,out);var state_15651__$1 = state_15651;var statearr_15657_15693 = state_15651__$1;(statearr_15657_15693[2] = inst_15600);
(statearr_15657_15693[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 6))
{var inst_15597 = (state_15651[7]);var inst_15602 = f.call(null,inst_15597);var inst_15607 = cljs.core.seq.call(null,inst_15602);var inst_15608 = inst_15607;var inst_15609 = null;var inst_15610 = 0;var inst_15611 = 0;var state_15651__$1 = (function (){var statearr_15658 = state_15651;(statearr_15658[8] = inst_15611);
(statearr_15658[9] = inst_15610);
(statearr_15658[10] = inst_15608);
(statearr_15658[11] = inst_15609);
return statearr_15658;
})();var statearr_15659_15694 = state_15651__$1;(statearr_15659_15694[2] = null);
(statearr_15659_15694[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 7))
{var inst_15647 = (state_15651[2]);var state_15651__$1 = state_15651;var statearr_15660_15695 = state_15651__$1;(statearr_15660_15695[2] = inst_15647);
(statearr_15660_15695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 8))
{var inst_15611 = (state_15651[8]);var inst_15610 = (state_15651[9]);var inst_15613 = (inst_15611 < inst_15610);var inst_15614 = inst_15613;var state_15651__$1 = state_15651;if(cljs.core.truth_(inst_15614))
{var statearr_15661_15696 = state_15651__$1;(statearr_15661_15696[1] = 10);
} else
{var statearr_15662_15697 = state_15651__$1;(statearr_15662_15697[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 9))
{var inst_15644 = (state_15651[2]);var state_15651__$1 = (function (){var statearr_15663 = state_15651;(statearr_15663[12] = inst_15644);
return statearr_15663;
})();var statearr_15664_15698 = state_15651__$1;(statearr_15664_15698[2] = null);
(statearr_15664_15698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 10))
{var inst_15611 = (state_15651[8]);var inst_15609 = (state_15651[11]);var inst_15616 = cljs.core._nth.call(null,inst_15609,inst_15611);var state_15651__$1 = state_15651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15651__$1,13,out,inst_15616);
} else
{if((state_val_15652 === 11))
{var inst_15622 = (state_15651[13]);var inst_15608 = (state_15651[10]);var inst_15622__$1 = cljs.core.seq.call(null,inst_15608);var state_15651__$1 = (function (){var statearr_15668 = state_15651;(statearr_15668[13] = inst_15622__$1);
return statearr_15668;
})();if(inst_15622__$1)
{var statearr_15669_15699 = state_15651__$1;(statearr_15669_15699[1] = 14);
} else
{var statearr_15670_15700 = state_15651__$1;(statearr_15670_15700[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 12))
{var inst_15642 = (state_15651[2]);var state_15651__$1 = state_15651;var statearr_15671_15701 = state_15651__$1;(statearr_15671_15701[2] = inst_15642);
(statearr_15671_15701[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 13))
{var inst_15611 = (state_15651[8]);var inst_15610 = (state_15651[9]);var inst_15608 = (state_15651[10]);var inst_15609 = (state_15651[11]);var inst_15618 = (state_15651[2]);var inst_15619 = (inst_15611 + 1);var tmp15665 = inst_15610;var tmp15666 = inst_15608;var tmp15667 = inst_15609;var inst_15608__$1 = tmp15666;var inst_15609__$1 = tmp15667;var inst_15610__$1 = tmp15665;var inst_15611__$1 = inst_15619;var state_15651__$1 = (function (){var statearr_15672 = state_15651;(statearr_15672[8] = inst_15611__$1);
(statearr_15672[9] = inst_15610__$1);
(statearr_15672[10] = inst_15608__$1);
(statearr_15672[11] = inst_15609__$1);
(statearr_15672[14] = inst_15618);
return statearr_15672;
})();var statearr_15673_15702 = state_15651__$1;(statearr_15673_15702[2] = null);
(statearr_15673_15702[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 14))
{var inst_15622 = (state_15651[13]);var inst_15624 = cljs.core.chunked_seq_QMARK_.call(null,inst_15622);var state_15651__$1 = state_15651;if(inst_15624)
{var statearr_15674_15703 = state_15651__$1;(statearr_15674_15703[1] = 17);
} else
{var statearr_15675_15704 = state_15651__$1;(statearr_15675_15704[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 15))
{var state_15651__$1 = state_15651;var statearr_15676_15705 = state_15651__$1;(statearr_15676_15705[2] = null);
(statearr_15676_15705[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 16))
{var inst_15640 = (state_15651[2]);var state_15651__$1 = state_15651;var statearr_15677_15706 = state_15651__$1;(statearr_15677_15706[2] = inst_15640);
(statearr_15677_15706[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 17))
{var inst_15622 = (state_15651[13]);var inst_15626 = cljs.core.chunk_first.call(null,inst_15622);var inst_15627 = cljs.core.chunk_rest.call(null,inst_15622);var inst_15628 = cljs.core.count.call(null,inst_15626);var inst_15608 = inst_15627;var inst_15609 = inst_15626;var inst_15610 = inst_15628;var inst_15611 = 0;var state_15651__$1 = (function (){var statearr_15678 = state_15651;(statearr_15678[8] = inst_15611);
(statearr_15678[9] = inst_15610);
(statearr_15678[10] = inst_15608);
(statearr_15678[11] = inst_15609);
return statearr_15678;
})();var statearr_15679_15707 = state_15651__$1;(statearr_15679_15707[2] = null);
(statearr_15679_15707[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 18))
{var inst_15622 = (state_15651[13]);var inst_15631 = cljs.core.first.call(null,inst_15622);var state_15651__$1 = state_15651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15651__$1,20,out,inst_15631);
} else
{if((state_val_15652 === 19))
{var inst_15637 = (state_15651[2]);var state_15651__$1 = state_15651;var statearr_15680_15708 = state_15651__$1;(statearr_15680_15708[2] = inst_15637);
(statearr_15680_15708[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15652 === 20))
{var inst_15622 = (state_15651[13]);var inst_15633 = (state_15651[2]);var inst_15634 = cljs.core.next.call(null,inst_15622);var inst_15608 = inst_15634;var inst_15609 = null;var inst_15610 = 0;var inst_15611 = 0;var state_15651__$1 = (function (){var statearr_15681 = state_15651;(statearr_15681[8] = inst_15611);
(statearr_15681[9] = inst_15610);
(statearr_15681[10] = inst_15608);
(statearr_15681[11] = inst_15609);
(statearr_15681[15] = inst_15633);
return statearr_15681;
})();var statearr_15682_15709 = state_15651__$1;(statearr_15682_15709[2] = null);
(statearr_15682_15709[1] = 8);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_15686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15686[0] = state_machine__6771__auto__);
(statearr_15686[1] = 1);
return statearr_15686;
});
var state_machine__6771__auto____1 = (function (state_15651){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_15651);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e15687){if((e15687 instanceof Object))
{var ex__6774__auto__ = e15687;var statearr_15688_15710 = state_15651;(statearr_15688_15710[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15651);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15711 = state_15651;
state_15651 = G__15711;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_15651){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_15651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_15689 = f__6786__auto__.call(null);(statearr_15689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto__);
return statearr_15689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return c__6785__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6785__auto___15792 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_15771){var state_val_15772 = (state_15771[1]);if((state_val_15772 === 1))
{var state_15771__$1 = state_15771;var statearr_15773_15793 = state_15771__$1;(statearr_15773_15793[2] = null);
(statearr_15773_15793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 2))
{var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15771__$1,4,from);
} else
{if((state_val_15772 === 3))
{var inst_15769 = (state_15771[2]);var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15771__$1,inst_15769);
} else
{if((state_val_15772 === 4))
{var inst_15754 = (state_15771[7]);var inst_15754__$1 = (state_15771[2]);var inst_15755 = (inst_15754__$1 == null);var state_15771__$1 = (function (){var statearr_15774 = state_15771;(statearr_15774[7] = inst_15754__$1);
return statearr_15774;
})();if(cljs.core.truth_(inst_15755))
{var statearr_15775_15794 = state_15771__$1;(statearr_15775_15794[1] = 5);
} else
{var statearr_15776_15795 = state_15771__$1;(statearr_15776_15795[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 5))
{var state_15771__$1 = state_15771;if(cljs.core.truth_(close_QMARK_))
{var statearr_15777_15796 = state_15771__$1;(statearr_15777_15796[1] = 8);
} else
{var statearr_15778_15797 = state_15771__$1;(statearr_15778_15797[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 6))
{var inst_15754 = (state_15771[7]);var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15771__$1,11,to,inst_15754);
} else
{if((state_val_15772 === 7))
{var inst_15767 = (state_15771[2]);var state_15771__$1 = state_15771;var statearr_15779_15798 = state_15771__$1;(statearr_15779_15798[2] = inst_15767);
(statearr_15779_15798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 8))
{var inst_15758 = cljs.core.async.close_BANG_.call(null,to);var state_15771__$1 = state_15771;var statearr_15780_15799 = state_15771__$1;(statearr_15780_15799[2] = inst_15758);
(statearr_15780_15799[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 9))
{var state_15771__$1 = state_15771;var statearr_15781_15800 = state_15771__$1;(statearr_15781_15800[2] = null);
(statearr_15781_15800[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 10))
{var inst_15761 = (state_15771[2]);var state_15771__$1 = state_15771;var statearr_15782_15801 = state_15771__$1;(statearr_15782_15801[2] = inst_15761);
(statearr_15782_15801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 11))
{var inst_15764 = (state_15771[2]);var state_15771__$1 = (function (){var statearr_15783 = state_15771;(statearr_15783[8] = inst_15764);
return statearr_15783;
})();var statearr_15784_15802 = state_15771__$1;(statearr_15784_15802[2] = null);
(statearr_15784_15802[1] = 2);
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
var state_machine__6771__auto____0 = (function (){var statearr_15788 = [null,null,null,null,null,null,null,null,null];(statearr_15788[0] = state_machine__6771__auto__);
(statearr_15788[1] = 1);
return statearr_15788;
});
var state_machine__6771__auto____1 = (function (state_15771){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_15771);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e15789){if((e15789 instanceof Object))
{var ex__6774__auto__ = e15789;var statearr_15790_15803 = state_15771;(statearr_15790_15803[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15804 = state_15771;
state_15771 = G__15804;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_15771){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_15771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_15791 = f__6786__auto__.call(null);(statearr_15791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___15792);
return statearr_15791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6785__auto___15891 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_15869){var state_val_15870 = (state_15869[1]);if((state_val_15870 === 1))
{var state_15869__$1 = state_15869;var statearr_15871_15892 = state_15869__$1;(statearr_15871_15892[2] = null);
(statearr_15871_15892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 2))
{var state_15869__$1 = state_15869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15869__$1,4,ch);
} else
{if((state_val_15870 === 3))
{var inst_15867 = (state_15869[2]);var state_15869__$1 = state_15869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15869__$1,inst_15867);
} else
{if((state_val_15870 === 4))
{var inst_15850 = (state_15869[7]);var inst_15850__$1 = (state_15869[2]);var inst_15851 = (inst_15850__$1 == null);var state_15869__$1 = (function (){var statearr_15872 = state_15869;(statearr_15872[7] = inst_15850__$1);
return statearr_15872;
})();if(cljs.core.truth_(inst_15851))
{var statearr_15873_15893 = state_15869__$1;(statearr_15873_15893[1] = 5);
} else
{var statearr_15874_15894 = state_15869__$1;(statearr_15874_15894[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 5))
{var inst_15853 = cljs.core.async.close_BANG_.call(null,tc);var inst_15854 = cljs.core.async.close_BANG_.call(null,fc);var state_15869__$1 = (function (){var statearr_15875 = state_15869;(statearr_15875[8] = inst_15853);
return statearr_15875;
})();var statearr_15876_15895 = state_15869__$1;(statearr_15876_15895[2] = inst_15854);
(statearr_15876_15895[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 6))
{var inst_15850 = (state_15869[7]);var inst_15856 = p.call(null,inst_15850);var state_15869__$1 = state_15869;if(cljs.core.truth_(inst_15856))
{var statearr_15877_15896 = state_15869__$1;(statearr_15877_15896[1] = 9);
} else
{var statearr_15878_15897 = state_15869__$1;(statearr_15878_15897[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 7))
{var inst_15865 = (state_15869[2]);var state_15869__$1 = state_15869;var statearr_15879_15898 = state_15869__$1;(statearr_15879_15898[2] = inst_15865);
(statearr_15879_15898[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 8))
{var inst_15862 = (state_15869[2]);var state_15869__$1 = (function (){var statearr_15880 = state_15869;(statearr_15880[9] = inst_15862);
return statearr_15880;
})();var statearr_15881_15899 = state_15869__$1;(statearr_15881_15899[2] = null);
(statearr_15881_15899[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 9))
{var state_15869__$1 = state_15869;var statearr_15882_15900 = state_15869__$1;(statearr_15882_15900[2] = tc);
(statearr_15882_15900[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 10))
{var state_15869__$1 = state_15869;var statearr_15883_15901 = state_15869__$1;(statearr_15883_15901[2] = fc);
(statearr_15883_15901[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 11))
{var inst_15850 = (state_15869[7]);var inst_15860 = (state_15869[2]);var state_15869__$1 = state_15869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15869__$1,8,inst_15860,inst_15850);
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
var state_machine__6771__auto____0 = (function (){var statearr_15887 = [null,null,null,null,null,null,null,null,null,null];(statearr_15887[0] = state_machine__6771__auto__);
(statearr_15887[1] = 1);
return statearr_15887;
});
var state_machine__6771__auto____1 = (function (state_15869){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_15869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e15888){if((e15888 instanceof Object))
{var ex__6774__auto__ = e15888;var statearr_15889_15902 = state_15869;(statearr_15889_15902[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15869);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15903 = state_15869;
state_15869 = G__15903;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_15869){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_15869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_15890 = f__6786__auto__.call(null);(statearr_15890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___15891);
return statearr_15890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6785__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_15950){var state_val_15951 = (state_15950[1]);if((state_val_15951 === 7))
{var inst_15946 = (state_15950[2]);var state_15950__$1 = state_15950;var statearr_15952_15968 = state_15950__$1;(statearr_15952_15968[2] = inst_15946);
(statearr_15952_15968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15951 === 6))
{var inst_15936 = (state_15950[7]);var inst_15939 = (state_15950[8]);var inst_15943 = f.call(null,inst_15936,inst_15939);var inst_15936__$1 = inst_15943;var state_15950__$1 = (function (){var statearr_15953 = state_15950;(statearr_15953[7] = inst_15936__$1);
return statearr_15953;
})();var statearr_15954_15969 = state_15950__$1;(statearr_15954_15969[2] = null);
(statearr_15954_15969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15951 === 5))
{var inst_15936 = (state_15950[7]);var state_15950__$1 = state_15950;var statearr_15955_15970 = state_15950__$1;(statearr_15955_15970[2] = inst_15936);
(statearr_15955_15970[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15951 === 4))
{var inst_15939 = (state_15950[8]);var inst_15939__$1 = (state_15950[2]);var inst_15940 = (inst_15939__$1 == null);var state_15950__$1 = (function (){var statearr_15956 = state_15950;(statearr_15956[8] = inst_15939__$1);
return statearr_15956;
})();if(cljs.core.truth_(inst_15940))
{var statearr_15957_15971 = state_15950__$1;(statearr_15957_15971[1] = 5);
} else
{var statearr_15958_15972 = state_15950__$1;(statearr_15958_15972[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15951 === 3))
{var inst_15948 = (state_15950[2]);var state_15950__$1 = state_15950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15950__$1,inst_15948);
} else
{if((state_val_15951 === 2))
{var state_15950__$1 = state_15950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15950__$1,4,ch);
} else
{if((state_val_15951 === 1))
{var inst_15936 = init;var state_15950__$1 = (function (){var statearr_15959 = state_15950;(statearr_15959[7] = inst_15936);
return statearr_15959;
})();var statearr_15960_15973 = state_15950__$1;(statearr_15960_15973[2] = null);
(statearr_15960_15973[1] = 2);
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
var state_machine__6771__auto____0 = (function (){var statearr_15964 = [null,null,null,null,null,null,null,null,null];(statearr_15964[0] = state_machine__6771__auto__);
(statearr_15964[1] = 1);
return statearr_15964;
});
var state_machine__6771__auto____1 = (function (state_15950){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_15950);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e15965){if((e15965 instanceof Object))
{var ex__6774__auto__ = e15965;var statearr_15966_15974 = state_15950;(statearr_15966_15974[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15950);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15975 = state_15950;
state_15950 = G__15975;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_15950){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_15950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_15967 = f__6786__auto__.call(null);(statearr_15967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto__);
return statearr_15967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return c__6785__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6785__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_16037){var state_val_16038 = (state_16037[1]);if((state_val_16038 === 1))
{var inst_16017 = cljs.core.seq.call(null,coll);var inst_16018 = inst_16017;var state_16037__$1 = (function (){var statearr_16039 = state_16037;(statearr_16039[7] = inst_16018);
return statearr_16039;
})();var statearr_16040_16058 = state_16037__$1;(statearr_16040_16058[2] = null);
(statearr_16040_16058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 2))
{var inst_16018 = (state_16037[7]);var state_16037__$1 = state_16037;if(cljs.core.truth_(inst_16018))
{var statearr_16041_16059 = state_16037__$1;(statearr_16041_16059[1] = 4);
} else
{var statearr_16042_16060 = state_16037__$1;(statearr_16042_16060[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 3))
{var inst_16035 = (state_16037[2]);var state_16037__$1 = state_16037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16037__$1,inst_16035);
} else
{if((state_val_16038 === 4))
{var inst_16018 = (state_16037[7]);var inst_16021 = cljs.core.first.call(null,inst_16018);var state_16037__$1 = state_16037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16037__$1,7,ch,inst_16021);
} else
{if((state_val_16038 === 5))
{var state_16037__$1 = state_16037;if(cljs.core.truth_(close_QMARK_))
{var statearr_16043_16061 = state_16037__$1;(statearr_16043_16061[1] = 8);
} else
{var statearr_16044_16062 = state_16037__$1;(statearr_16044_16062[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 6))
{var inst_16033 = (state_16037[2]);var state_16037__$1 = state_16037;var statearr_16045_16063 = state_16037__$1;(statearr_16045_16063[2] = inst_16033);
(statearr_16045_16063[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 7))
{var inst_16018 = (state_16037[7]);var inst_16023 = (state_16037[2]);var inst_16024 = cljs.core.next.call(null,inst_16018);var inst_16018__$1 = inst_16024;var state_16037__$1 = (function (){var statearr_16046 = state_16037;(statearr_16046[8] = inst_16023);
(statearr_16046[7] = inst_16018__$1);
return statearr_16046;
})();var statearr_16047_16064 = state_16037__$1;(statearr_16047_16064[2] = null);
(statearr_16047_16064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 8))
{var inst_16028 = cljs.core.async.close_BANG_.call(null,ch);var state_16037__$1 = state_16037;var statearr_16048_16065 = state_16037__$1;(statearr_16048_16065[2] = inst_16028);
(statearr_16048_16065[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 9))
{var state_16037__$1 = state_16037;var statearr_16049_16066 = state_16037__$1;(statearr_16049_16066[2] = null);
(statearr_16049_16066[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 10))
{var inst_16031 = (state_16037[2]);var state_16037__$1 = state_16037;var statearr_16050_16067 = state_16037__$1;(statearr_16050_16067[2] = inst_16031);
(statearr_16050_16067[1] = 6);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_16054 = [null,null,null,null,null,null,null,null,null];(statearr_16054[0] = state_machine__6771__auto__);
(statearr_16054[1] = 1);
return statearr_16054;
});
var state_machine__6771__auto____1 = (function (state_16037){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_16037);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e16055){if((e16055 instanceof Object))
{var ex__6774__auto__ = e16055;var statearr_16056_16068 = state_16037;(statearr_16056_16068[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16037);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16069 = state_16037;
state_16037 = G__16069;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_16037){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_16037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_16057 = f__6786__auto__.call(null);(statearr_16057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto__);
return statearr_16057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return c__6785__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16071 = {};return obj16071;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3454__auto__ = _;if(and__3454__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4093__auto__ = (((_ == null))?null:_);return (function (){var or__3466__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16073 = {};return obj16073;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16297 = (function (cs,ch,mult,meta16298){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16298 = meta16298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16297.cljs$lang$type = true;
cljs.core.async.t16297.cljs$lang$ctorStr = "cljs.core.async/t16297";
cljs.core.async.t16297.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t16297");
});})(cs))
;
cljs.core.async.t16297.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16297.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16297.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16297.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16297.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16299){var self__ = this;
var _16299__$1 = this;return self__.meta16298;
});})(cs))
;
cljs.core.async.t16297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16299,meta16298__$1){var self__ = this;
var _16299__$1 = this;return (new cljs.core.async.t16297(self__.cs,self__.ch,self__.mult,meta16298__$1));
});})(cs))
;
cljs.core.async.__GT_t16297 = ((function (cs){
return (function __GT_t16297(cs__$1,ch__$1,mult__$1,meta16298){return (new cljs.core.async.t16297(cs__$1,ch__$1,mult__$1,meta16298));
});})(cs))
;
}
return (new cljs.core.async.t16297(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6785__auto___16520 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_16434){var state_val_16435 = (state_16434[1]);if((state_val_16435 === 32))
{var inst_16302 = (state_16434[7]);var inst_16378 = (state_16434[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16434,31,Object,null,30);var inst_16385 = cljs.core.async.put_BANG_.call(null,inst_16378,inst_16302,done);var state_16434__$1 = state_16434;var statearr_16436_16521 = state_16434__$1;(statearr_16436_16521[2] = inst_16385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16434__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 1))
{var state_16434__$1 = state_16434;var statearr_16437_16522 = state_16434__$1;(statearr_16437_16522[2] = null);
(statearr_16437_16522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 33))
{var inst_16391 = (state_16434[9]);var inst_16393 = cljs.core.chunked_seq_QMARK_.call(null,inst_16391);var state_16434__$1 = state_16434;if(inst_16393)
{var statearr_16438_16523 = state_16434__$1;(statearr_16438_16523[1] = 36);
} else
{var statearr_16439_16524 = state_16434__$1;(statearr_16439_16524[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 2))
{var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16434__$1,4,ch);
} else
{if((state_val_16435 === 34))
{var state_16434__$1 = state_16434;var statearr_16440_16525 = state_16434__$1;(statearr_16440_16525[2] = null);
(statearr_16440_16525[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 3))
{var inst_16432 = (state_16434[2]);var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16434__$1,inst_16432);
} else
{if((state_val_16435 === 35))
{var inst_16416 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16441_16526 = state_16434__$1;(statearr_16441_16526[2] = inst_16416);
(statearr_16441_16526[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 4))
{var inst_16302 = (state_16434[7]);var inst_16302__$1 = (state_16434[2]);var inst_16303 = (inst_16302__$1 == null);var state_16434__$1 = (function (){var statearr_16442 = state_16434;(statearr_16442[7] = inst_16302__$1);
return statearr_16442;
})();if(cljs.core.truth_(inst_16303))
{var statearr_16443_16527 = state_16434__$1;(statearr_16443_16527[1] = 5);
} else
{var statearr_16444_16528 = state_16434__$1;(statearr_16444_16528[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 36))
{var inst_16391 = (state_16434[9]);var inst_16395 = cljs.core.chunk_first.call(null,inst_16391);var inst_16396 = cljs.core.chunk_rest.call(null,inst_16391);var inst_16397 = cljs.core.count.call(null,inst_16395);var inst_16370 = inst_16396;var inst_16371 = inst_16395;var inst_16372 = inst_16397;var inst_16373 = 0;var state_16434__$1 = (function (){var statearr_16445 = state_16434;(statearr_16445[10] = inst_16370);
(statearr_16445[11] = inst_16371);
(statearr_16445[12] = inst_16373);
(statearr_16445[13] = inst_16372);
return statearr_16445;
})();var statearr_16446_16529 = state_16434__$1;(statearr_16446_16529[2] = null);
(statearr_16446_16529[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 5))
{var inst_16309 = cljs.core.deref.call(null,cs);var inst_16310 = cljs.core.seq.call(null,inst_16309);var inst_16311 = inst_16310;var inst_16312 = null;var inst_16313 = 0;var inst_16314 = 0;var state_16434__$1 = (function (){var statearr_16447 = state_16434;(statearr_16447[14] = inst_16314);
(statearr_16447[15] = inst_16312);
(statearr_16447[16] = inst_16313);
(statearr_16447[17] = inst_16311);
return statearr_16447;
})();var statearr_16448_16530 = state_16434__$1;(statearr_16448_16530[2] = null);
(statearr_16448_16530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 37))
{var inst_16391 = (state_16434[9]);var inst_16400 = cljs.core.first.call(null,inst_16391);var state_16434__$1 = (function (){var statearr_16449 = state_16434;(statearr_16449[18] = inst_16400);
return statearr_16449;
})();var statearr_16450_16531 = state_16434__$1;(statearr_16450_16531[2] = null);
(statearr_16450_16531[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 6))
{var inst_16362 = (state_16434[19]);var inst_16361 = cljs.core.deref.call(null,cs);var inst_16362__$1 = cljs.core.keys.call(null,inst_16361);var inst_16363 = cljs.core.count.call(null,inst_16362__$1);var inst_16364 = cljs.core.reset_BANG_.call(null,dctr,inst_16363);var inst_16369 = cljs.core.seq.call(null,inst_16362__$1);var inst_16370 = inst_16369;var inst_16371 = null;var inst_16372 = 0;var inst_16373 = 0;var state_16434__$1 = (function (){var statearr_16451 = state_16434;(statearr_16451[10] = inst_16370);
(statearr_16451[11] = inst_16371);
(statearr_16451[19] = inst_16362__$1);
(statearr_16451[20] = inst_16364);
(statearr_16451[12] = inst_16373);
(statearr_16451[13] = inst_16372);
return statearr_16451;
})();var statearr_16452_16532 = state_16434__$1;(statearr_16452_16532[2] = null);
(statearr_16452_16532[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 38))
{var inst_16413 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16453_16533 = state_16434__$1;(statearr_16453_16533[2] = inst_16413);
(statearr_16453_16533[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 7))
{var inst_16430 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16454_16534 = state_16434__$1;(statearr_16454_16534[2] = inst_16430);
(statearr_16454_16534[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 39))
{var inst_16391 = (state_16434[9]);var inst_16409 = (state_16434[2]);var inst_16410 = cljs.core.next.call(null,inst_16391);var inst_16370 = inst_16410;var inst_16371 = null;var inst_16372 = 0;var inst_16373 = 0;var state_16434__$1 = (function (){var statearr_16455 = state_16434;(statearr_16455[10] = inst_16370);
(statearr_16455[11] = inst_16371);
(statearr_16455[21] = inst_16409);
(statearr_16455[12] = inst_16373);
(statearr_16455[13] = inst_16372);
return statearr_16455;
})();var statearr_16456_16535 = state_16434__$1;(statearr_16456_16535[2] = null);
(statearr_16456_16535[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 8))
{var inst_16314 = (state_16434[14]);var inst_16313 = (state_16434[16]);var inst_16316 = (inst_16314 < inst_16313);var inst_16317 = inst_16316;var state_16434__$1 = state_16434;if(cljs.core.truth_(inst_16317))
{var statearr_16457_16536 = state_16434__$1;(statearr_16457_16536[1] = 10);
} else
{var statearr_16458_16537 = state_16434__$1;(statearr_16458_16537[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 40))
{var inst_16400 = (state_16434[18]);var inst_16401 = (state_16434[2]);var inst_16402 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16403 = cljs.core.async.untap_STAR_.call(null,m,inst_16400);var state_16434__$1 = (function (){var statearr_16459 = state_16434;(statearr_16459[22] = inst_16401);
(statearr_16459[23] = inst_16402);
return statearr_16459;
})();var statearr_16460_16538 = state_16434__$1;(statearr_16460_16538[2] = inst_16403);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16434__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 9))
{var inst_16359 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16461_16539 = state_16434__$1;(statearr_16461_16539[2] = inst_16359);
(statearr_16461_16539[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 41))
{var inst_16302 = (state_16434[7]);var inst_16400 = (state_16434[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16434,40,Object,null,39);var inst_16407 = cljs.core.async.put_BANG_.call(null,inst_16400,inst_16302,done);var state_16434__$1 = state_16434;var statearr_16462_16540 = state_16434__$1;(statearr_16462_16540[2] = inst_16407);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16434__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 10))
{var inst_16314 = (state_16434[14]);var inst_16312 = (state_16434[15]);var inst_16320 = cljs.core._nth.call(null,inst_16312,inst_16314);var inst_16321 = cljs.core.nth.call(null,inst_16320,0,null);var inst_16322 = cljs.core.nth.call(null,inst_16320,1,null);var state_16434__$1 = (function (){var statearr_16463 = state_16434;(statearr_16463[24] = inst_16321);
return statearr_16463;
})();if(cljs.core.truth_(inst_16322))
{var statearr_16464_16541 = state_16434__$1;(statearr_16464_16541[1] = 13);
} else
{var statearr_16465_16542 = state_16434__$1;(statearr_16465_16542[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 42))
{var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16434__$1,45,dchan);
} else
{if((state_val_16435 === 11))
{var inst_16311 = (state_16434[17]);var inst_16331 = (state_16434[25]);var inst_16331__$1 = cljs.core.seq.call(null,inst_16311);var state_16434__$1 = (function (){var statearr_16466 = state_16434;(statearr_16466[25] = inst_16331__$1);
return statearr_16466;
})();if(inst_16331__$1)
{var statearr_16467_16543 = state_16434__$1;(statearr_16467_16543[1] = 16);
} else
{var statearr_16468_16544 = state_16434__$1;(statearr_16468_16544[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 43))
{var state_16434__$1 = state_16434;var statearr_16469_16545 = state_16434__$1;(statearr_16469_16545[2] = null);
(statearr_16469_16545[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 12))
{var inst_16357 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16470_16546 = state_16434__$1;(statearr_16470_16546[2] = inst_16357);
(statearr_16470_16546[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 44))
{var inst_16427 = (state_16434[2]);var state_16434__$1 = (function (){var statearr_16471 = state_16434;(statearr_16471[26] = inst_16427);
return statearr_16471;
})();var statearr_16472_16547 = state_16434__$1;(statearr_16472_16547[2] = null);
(statearr_16472_16547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 13))
{var inst_16321 = (state_16434[24]);var inst_16324 = cljs.core.async.close_BANG_.call(null,inst_16321);var state_16434__$1 = state_16434;var statearr_16473_16548 = state_16434__$1;(statearr_16473_16548[2] = inst_16324);
(statearr_16473_16548[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 45))
{var inst_16424 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16477_16549 = state_16434__$1;(statearr_16477_16549[2] = inst_16424);
(statearr_16477_16549[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 14))
{var state_16434__$1 = state_16434;var statearr_16478_16550 = state_16434__$1;(statearr_16478_16550[2] = null);
(statearr_16478_16550[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 15))
{var inst_16314 = (state_16434[14]);var inst_16312 = (state_16434[15]);var inst_16313 = (state_16434[16]);var inst_16311 = (state_16434[17]);var inst_16327 = (state_16434[2]);var inst_16328 = (inst_16314 + 1);var tmp16474 = inst_16312;var tmp16475 = inst_16313;var tmp16476 = inst_16311;var inst_16311__$1 = tmp16476;var inst_16312__$1 = tmp16474;var inst_16313__$1 = tmp16475;var inst_16314__$1 = inst_16328;var state_16434__$1 = (function (){var statearr_16479 = state_16434;(statearr_16479[14] = inst_16314__$1);
(statearr_16479[15] = inst_16312__$1);
(statearr_16479[16] = inst_16313__$1);
(statearr_16479[17] = inst_16311__$1);
(statearr_16479[27] = inst_16327);
return statearr_16479;
})();var statearr_16480_16551 = state_16434__$1;(statearr_16480_16551[2] = null);
(statearr_16480_16551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 16))
{var inst_16331 = (state_16434[25]);var inst_16333 = cljs.core.chunked_seq_QMARK_.call(null,inst_16331);var state_16434__$1 = state_16434;if(inst_16333)
{var statearr_16481_16552 = state_16434__$1;(statearr_16481_16552[1] = 19);
} else
{var statearr_16482_16553 = state_16434__$1;(statearr_16482_16553[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 17))
{var state_16434__$1 = state_16434;var statearr_16483_16554 = state_16434__$1;(statearr_16483_16554[2] = null);
(statearr_16483_16554[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 18))
{var inst_16355 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16484_16555 = state_16434__$1;(statearr_16484_16555[2] = inst_16355);
(statearr_16484_16555[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 19))
{var inst_16331 = (state_16434[25]);var inst_16335 = cljs.core.chunk_first.call(null,inst_16331);var inst_16336 = cljs.core.chunk_rest.call(null,inst_16331);var inst_16337 = cljs.core.count.call(null,inst_16335);var inst_16311 = inst_16336;var inst_16312 = inst_16335;var inst_16313 = inst_16337;var inst_16314 = 0;var state_16434__$1 = (function (){var statearr_16485 = state_16434;(statearr_16485[14] = inst_16314);
(statearr_16485[15] = inst_16312);
(statearr_16485[16] = inst_16313);
(statearr_16485[17] = inst_16311);
return statearr_16485;
})();var statearr_16486_16556 = state_16434__$1;(statearr_16486_16556[2] = null);
(statearr_16486_16556[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 20))
{var inst_16331 = (state_16434[25]);var inst_16341 = cljs.core.first.call(null,inst_16331);var inst_16342 = cljs.core.nth.call(null,inst_16341,0,null);var inst_16343 = cljs.core.nth.call(null,inst_16341,1,null);var state_16434__$1 = (function (){var statearr_16487 = state_16434;(statearr_16487[28] = inst_16342);
return statearr_16487;
})();if(cljs.core.truth_(inst_16343))
{var statearr_16488_16557 = state_16434__$1;(statearr_16488_16557[1] = 22);
} else
{var statearr_16489_16558 = state_16434__$1;(statearr_16489_16558[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 21))
{var inst_16352 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16490_16559 = state_16434__$1;(statearr_16490_16559[2] = inst_16352);
(statearr_16490_16559[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 22))
{var inst_16342 = (state_16434[28]);var inst_16345 = cljs.core.async.close_BANG_.call(null,inst_16342);var state_16434__$1 = state_16434;var statearr_16491_16560 = state_16434__$1;(statearr_16491_16560[2] = inst_16345);
(statearr_16491_16560[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 23))
{var state_16434__$1 = state_16434;var statearr_16492_16561 = state_16434__$1;(statearr_16492_16561[2] = null);
(statearr_16492_16561[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 24))
{var inst_16331 = (state_16434[25]);var inst_16348 = (state_16434[2]);var inst_16349 = cljs.core.next.call(null,inst_16331);var inst_16311 = inst_16349;var inst_16312 = null;var inst_16313 = 0;var inst_16314 = 0;var state_16434__$1 = (function (){var statearr_16493 = state_16434;(statearr_16493[14] = inst_16314);
(statearr_16493[15] = inst_16312);
(statearr_16493[16] = inst_16313);
(statearr_16493[17] = inst_16311);
(statearr_16493[29] = inst_16348);
return statearr_16493;
})();var statearr_16494_16562 = state_16434__$1;(statearr_16494_16562[2] = null);
(statearr_16494_16562[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 25))
{var inst_16373 = (state_16434[12]);var inst_16372 = (state_16434[13]);var inst_16375 = (inst_16373 < inst_16372);var inst_16376 = inst_16375;var state_16434__$1 = state_16434;if(cljs.core.truth_(inst_16376))
{var statearr_16495_16563 = state_16434__$1;(statearr_16495_16563[1] = 27);
} else
{var statearr_16496_16564 = state_16434__$1;(statearr_16496_16564[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 26))
{var inst_16362 = (state_16434[19]);var inst_16420 = (state_16434[2]);var inst_16421 = cljs.core.seq.call(null,inst_16362);var state_16434__$1 = (function (){var statearr_16497 = state_16434;(statearr_16497[30] = inst_16420);
return statearr_16497;
})();if(inst_16421)
{var statearr_16498_16565 = state_16434__$1;(statearr_16498_16565[1] = 42);
} else
{var statearr_16499_16566 = state_16434__$1;(statearr_16499_16566[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 27))
{var inst_16371 = (state_16434[11]);var inst_16373 = (state_16434[12]);var inst_16378 = cljs.core._nth.call(null,inst_16371,inst_16373);var state_16434__$1 = (function (){var statearr_16500 = state_16434;(statearr_16500[8] = inst_16378);
return statearr_16500;
})();var statearr_16501_16567 = state_16434__$1;(statearr_16501_16567[2] = null);
(statearr_16501_16567[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 28))
{var inst_16370 = (state_16434[10]);var inst_16391 = (state_16434[9]);var inst_16391__$1 = cljs.core.seq.call(null,inst_16370);var state_16434__$1 = (function (){var statearr_16505 = state_16434;(statearr_16505[9] = inst_16391__$1);
return statearr_16505;
})();if(inst_16391__$1)
{var statearr_16506_16568 = state_16434__$1;(statearr_16506_16568[1] = 33);
} else
{var statearr_16507_16569 = state_16434__$1;(statearr_16507_16569[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 29))
{var inst_16418 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16508_16570 = state_16434__$1;(statearr_16508_16570[2] = inst_16418);
(statearr_16508_16570[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 30))
{var inst_16370 = (state_16434[10]);var inst_16371 = (state_16434[11]);var inst_16373 = (state_16434[12]);var inst_16372 = (state_16434[13]);var inst_16387 = (state_16434[2]);var inst_16388 = (inst_16373 + 1);var tmp16502 = inst_16370;var tmp16503 = inst_16371;var tmp16504 = inst_16372;var inst_16370__$1 = tmp16502;var inst_16371__$1 = tmp16503;var inst_16372__$1 = tmp16504;var inst_16373__$1 = inst_16388;var state_16434__$1 = (function (){var statearr_16509 = state_16434;(statearr_16509[31] = inst_16387);
(statearr_16509[10] = inst_16370__$1);
(statearr_16509[11] = inst_16371__$1);
(statearr_16509[12] = inst_16373__$1);
(statearr_16509[13] = inst_16372__$1);
return statearr_16509;
})();var statearr_16510_16571 = state_16434__$1;(statearr_16510_16571[2] = null);
(statearr_16510_16571[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 31))
{var inst_16378 = (state_16434[8]);var inst_16379 = (state_16434[2]);var inst_16380 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16381 = cljs.core.async.untap_STAR_.call(null,m,inst_16378);var state_16434__$1 = (function (){var statearr_16511 = state_16434;(statearr_16511[32] = inst_16379);
(statearr_16511[33] = inst_16380);
return statearr_16511;
})();var statearr_16512_16572 = state_16434__$1;(statearr_16512_16572[2] = inst_16381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16434__$1);
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
}
}
}
}
}
}
}
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
var state_machine__6771__auto____0 = (function (){var statearr_16516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16516[0] = state_machine__6771__auto__);
(statearr_16516[1] = 1);
return statearr_16516;
});
var state_machine__6771__auto____1 = (function (state_16434){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_16434);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e16517){if((e16517 instanceof Object))
{var ex__6774__auto__ = e16517;var statearr_16518_16573 = state_16434;(statearr_16518_16573[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16574 = state_16434;
state_16434 = G__16574;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_16434){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_16434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_16519 = f__6786__auto__.call(null);(statearr_16519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___16520);
return statearr_16519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16576 = {};return obj16576;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3454__auto__ = m;if(and__3454__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4093__auto__ = (((m == null))?null:m);return (function (){var or__3466__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16686 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16687){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16687 = meta16687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16686.cljs$lang$type = true;
cljs.core.async.t16686.cljs$lang$ctorStr = "cljs.core.async/t16686";
cljs.core.async.t16686.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t16686");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16686.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16686.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16688){var self__ = this;
var _16688__$1 = this;return self__.meta16687;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16688,meta16687__$1){var self__ = this;
var _16688__$1 = this;return (new cljs.core.async.t16686(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16687__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16686 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16686(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16687){return (new cljs.core.async.t16686(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16687));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16686(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6785__auto___16795 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_16753){var state_val_16754 = (state_16753[1]);if((state_val_16754 === 1))
{var inst_16692 = (state_16753[7]);var inst_16692__$1 = calc_state.call(null);var inst_16693 = cljs.core.seq_QMARK_.call(null,inst_16692__$1);var state_16753__$1 = (function (){var statearr_16755 = state_16753;(statearr_16755[7] = inst_16692__$1);
return statearr_16755;
})();if(inst_16693)
{var statearr_16756_16796 = state_16753__$1;(statearr_16756_16796[1] = 2);
} else
{var statearr_16757_16797 = state_16753__$1;(statearr_16757_16797[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 2))
{var inst_16692 = (state_16753[7]);var inst_16695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16692);var state_16753__$1 = state_16753;var statearr_16758_16798 = state_16753__$1;(statearr_16758_16798[2] = inst_16695);
(statearr_16758_16798[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 3))
{var inst_16692 = (state_16753[7]);var state_16753__$1 = state_16753;var statearr_16759_16799 = state_16753__$1;(statearr_16759_16799[2] = inst_16692);
(statearr_16759_16799[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 4))
{var inst_16692 = (state_16753[7]);var inst_16698 = (state_16753[2]);var inst_16699 = cljs.core.get.call(null,inst_16698,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16700 = cljs.core.get.call(null,inst_16698,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16701 = cljs.core.get.call(null,inst_16698,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16702 = inst_16692;var state_16753__$1 = (function (){var statearr_16760 = state_16753;(statearr_16760[8] = inst_16702);
(statearr_16760[9] = inst_16701);
(statearr_16760[10] = inst_16700);
(statearr_16760[11] = inst_16699);
return statearr_16760;
})();var statearr_16761_16800 = state_16753__$1;(statearr_16761_16800[2] = null);
(statearr_16761_16800[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 5))
{var inst_16702 = (state_16753[8]);var inst_16705 = cljs.core.seq_QMARK_.call(null,inst_16702);var state_16753__$1 = state_16753;if(inst_16705)
{var statearr_16762_16801 = state_16753__$1;(statearr_16762_16801[1] = 7);
} else
{var statearr_16763_16802 = state_16753__$1;(statearr_16763_16802[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 6))
{var inst_16751 = (state_16753[2]);var state_16753__$1 = state_16753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16753__$1,inst_16751);
} else
{if((state_val_16754 === 7))
{var inst_16702 = (state_16753[8]);var inst_16707 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16702);var state_16753__$1 = state_16753;var statearr_16764_16803 = state_16753__$1;(statearr_16764_16803[2] = inst_16707);
(statearr_16764_16803[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 8))
{var inst_16702 = (state_16753[8]);var state_16753__$1 = state_16753;var statearr_16765_16804 = state_16753__$1;(statearr_16765_16804[2] = inst_16702);
(statearr_16765_16804[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 9))
{var inst_16710 = (state_16753[12]);var inst_16710__$1 = (state_16753[2]);var inst_16711 = cljs.core.get.call(null,inst_16710__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16712 = cljs.core.get.call(null,inst_16710__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16713 = cljs.core.get.call(null,inst_16710__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16753__$1 = (function (){var statearr_16766 = state_16753;(statearr_16766[13] = inst_16713);
(statearr_16766[14] = inst_16712);
(statearr_16766[12] = inst_16710__$1);
return statearr_16766;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16753__$1,10,inst_16711);
} else
{if((state_val_16754 === 10))
{var inst_16718 = (state_16753[15]);var inst_16717 = (state_16753[16]);var inst_16716 = (state_16753[2]);var inst_16717__$1 = cljs.core.nth.call(null,inst_16716,0,null);var inst_16718__$1 = cljs.core.nth.call(null,inst_16716,1,null);var inst_16719 = (inst_16717__$1 == null);var inst_16720 = cljs.core._EQ_.call(null,inst_16718__$1,change);var inst_16721 = (inst_16719) || (inst_16720);var state_16753__$1 = (function (){var statearr_16767 = state_16753;(statearr_16767[15] = inst_16718__$1);
(statearr_16767[16] = inst_16717__$1);
return statearr_16767;
})();if(cljs.core.truth_(inst_16721))
{var statearr_16768_16805 = state_16753__$1;(statearr_16768_16805[1] = 11);
} else
{var statearr_16769_16806 = state_16753__$1;(statearr_16769_16806[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 11))
{var inst_16717 = (state_16753[16]);var inst_16723 = (inst_16717 == null);var state_16753__$1 = state_16753;if(cljs.core.truth_(inst_16723))
{var statearr_16770_16807 = state_16753__$1;(statearr_16770_16807[1] = 14);
} else
{var statearr_16771_16808 = state_16753__$1;(statearr_16771_16808[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 12))
{var inst_16718 = (state_16753[15]);var inst_16713 = (state_16753[13]);var inst_16732 = (state_16753[17]);var inst_16732__$1 = inst_16713.call(null,inst_16718);var state_16753__$1 = (function (){var statearr_16772 = state_16753;(statearr_16772[17] = inst_16732__$1);
return statearr_16772;
})();if(cljs.core.truth_(inst_16732__$1))
{var statearr_16773_16809 = state_16753__$1;(statearr_16773_16809[1] = 17);
} else
{var statearr_16774_16810 = state_16753__$1;(statearr_16774_16810[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 13))
{var inst_16749 = (state_16753[2]);var state_16753__$1 = state_16753;var statearr_16775_16811 = state_16753__$1;(statearr_16775_16811[2] = inst_16749);
(statearr_16775_16811[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 14))
{var inst_16718 = (state_16753[15]);var inst_16725 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16718);var state_16753__$1 = state_16753;var statearr_16776_16812 = state_16753__$1;(statearr_16776_16812[2] = inst_16725);
(statearr_16776_16812[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 15))
{var state_16753__$1 = state_16753;var statearr_16777_16813 = state_16753__$1;(statearr_16777_16813[2] = null);
(statearr_16777_16813[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 16))
{var inst_16728 = (state_16753[2]);var inst_16729 = calc_state.call(null);var inst_16702 = inst_16729;var state_16753__$1 = (function (){var statearr_16778 = state_16753;(statearr_16778[8] = inst_16702);
(statearr_16778[18] = inst_16728);
return statearr_16778;
})();var statearr_16779_16814 = state_16753__$1;(statearr_16779_16814[2] = null);
(statearr_16779_16814[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 17))
{var inst_16732 = (state_16753[17]);var state_16753__$1 = state_16753;var statearr_16780_16815 = state_16753__$1;(statearr_16780_16815[2] = inst_16732);
(statearr_16780_16815[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 18))
{var inst_16718 = (state_16753[15]);var inst_16713 = (state_16753[13]);var inst_16712 = (state_16753[14]);var inst_16735 = cljs.core.empty_QMARK_.call(null,inst_16713);var inst_16736 = inst_16712.call(null,inst_16718);var inst_16737 = cljs.core.not.call(null,inst_16736);var inst_16738 = (inst_16735) && (inst_16737);var state_16753__$1 = state_16753;var statearr_16781_16816 = state_16753__$1;(statearr_16781_16816[2] = inst_16738);
(statearr_16781_16816[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 19))
{var inst_16740 = (state_16753[2]);var state_16753__$1 = state_16753;if(cljs.core.truth_(inst_16740))
{var statearr_16782_16817 = state_16753__$1;(statearr_16782_16817[1] = 20);
} else
{var statearr_16783_16818 = state_16753__$1;(statearr_16783_16818[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 20))
{var inst_16717 = (state_16753[16]);var state_16753__$1 = state_16753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16753__$1,23,out,inst_16717);
} else
{if((state_val_16754 === 21))
{var state_16753__$1 = state_16753;var statearr_16784_16819 = state_16753__$1;(statearr_16784_16819[2] = null);
(statearr_16784_16819[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 22))
{var inst_16710 = (state_16753[12]);var inst_16746 = (state_16753[2]);var inst_16702 = inst_16710;var state_16753__$1 = (function (){var statearr_16785 = state_16753;(statearr_16785[19] = inst_16746);
(statearr_16785[8] = inst_16702);
return statearr_16785;
})();var statearr_16786_16820 = state_16753__$1;(statearr_16786_16820[2] = null);
(statearr_16786_16820[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16754 === 23))
{var inst_16743 = (state_16753[2]);var state_16753__$1 = state_16753;var statearr_16787_16821 = state_16753__$1;(statearr_16787_16821[2] = inst_16743);
(statearr_16787_16821[1] = 22);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_16791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16791[0] = state_machine__6771__auto__);
(statearr_16791[1] = 1);
return statearr_16791;
});
var state_machine__6771__auto____1 = (function (state_16753){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_16753);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e16792){if((e16792 instanceof Object))
{var ex__6774__auto__ = e16792;var statearr_16793_16822 = state_16753;(statearr_16793_16822[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16823 = state_16753;
state_16753 = G__16823;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_16753){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_16753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_16794 = f__6786__auto__.call(null);(statearr_16794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___16795);
return statearr_16794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16825 = {};return obj16825;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3454__auto__ = p;if(and__3454__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3454__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4093__auto__ = (((p == null))?null:p);return (function (){var or__3466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4093__auto__)]);if(or__3466__auto__)
{return or__3466__auto__;
} else
{var or__3466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3466__auto____$1)
{return or__3466__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3466__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3466__auto__))
{return or__3466__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3466__auto__,mults){
return (function (p1__16826_SHARP_){if(cljs.core.truth_(p1__16826_SHARP_.call(null,topic)))
{return p1__16826_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16826_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3466__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16951 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16952){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16952 = meta16952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16951.cljs$lang$type = true;
cljs.core.async.t16951.cljs$lang$ctorStr = "cljs.core.async/t16951";
cljs.core.async.t16951.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4033__auto__,writer__4034__auto__,opt__4035__auto__){return cljs.core._write.call(null,writer__4034__auto__,"cljs.core.async/t16951");
});})(mults,ensure_mult))
;
cljs.core.async.t16951.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16951.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16951.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16951.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16951.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16951.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16953){var self__ = this;
var _16953__$1 = this;return self__.meta16952;
});})(mults,ensure_mult))
;
cljs.core.async.t16951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16953,meta16952__$1){var self__ = this;
var _16953__$1 = this;return (new cljs.core.async.t16951(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16952__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16951 = ((function (mults,ensure_mult){
return (function __GT_t16951(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16952){return (new cljs.core.async.t16951(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16952));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16951(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6785__auto___17075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_17027){var state_val_17028 = (state_17027[1]);if((state_val_17028 === 1))
{var state_17027__$1 = state_17027;var statearr_17029_17076 = state_17027__$1;(statearr_17029_17076[2] = null);
(statearr_17029_17076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 2))
{var state_17027__$1 = state_17027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17027__$1,4,ch);
} else
{if((state_val_17028 === 3))
{var inst_17025 = (state_17027[2]);var state_17027__$1 = state_17027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17027__$1,inst_17025);
} else
{if((state_val_17028 === 4))
{var inst_16956 = (state_17027[7]);var inst_16956__$1 = (state_17027[2]);var inst_16957 = (inst_16956__$1 == null);var state_17027__$1 = (function (){var statearr_17030 = state_17027;(statearr_17030[7] = inst_16956__$1);
return statearr_17030;
})();if(cljs.core.truth_(inst_16957))
{var statearr_17031_17077 = state_17027__$1;(statearr_17031_17077[1] = 5);
} else
{var statearr_17032_17078 = state_17027__$1;(statearr_17032_17078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 5))
{var inst_16963 = cljs.core.deref.call(null,mults);var inst_16964 = cljs.core.vals.call(null,inst_16963);var inst_16965 = cljs.core.seq.call(null,inst_16964);var inst_16966 = inst_16965;var inst_16967 = null;var inst_16968 = 0;var inst_16969 = 0;var state_17027__$1 = (function (){var statearr_17033 = state_17027;(statearr_17033[8] = inst_16967);
(statearr_17033[9] = inst_16968);
(statearr_17033[10] = inst_16969);
(statearr_17033[11] = inst_16966);
return statearr_17033;
})();var statearr_17034_17079 = state_17027__$1;(statearr_17034_17079[2] = null);
(statearr_17034_17079[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 6))
{var inst_17006 = (state_17027[12]);var inst_17004 = (state_17027[13]);var inst_16956 = (state_17027[7]);var inst_17004__$1 = topic_fn.call(null,inst_16956);var inst_17005 = cljs.core.deref.call(null,mults);var inst_17006__$1 = cljs.core.get.call(null,inst_17005,inst_17004__$1);var state_17027__$1 = (function (){var statearr_17035 = state_17027;(statearr_17035[12] = inst_17006__$1);
(statearr_17035[13] = inst_17004__$1);
return statearr_17035;
})();if(cljs.core.truth_(inst_17006__$1))
{var statearr_17036_17080 = state_17027__$1;(statearr_17036_17080[1] = 19);
} else
{var statearr_17037_17081 = state_17027__$1;(statearr_17037_17081[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 7))
{var inst_17023 = (state_17027[2]);var state_17027__$1 = state_17027;var statearr_17038_17082 = state_17027__$1;(statearr_17038_17082[2] = inst_17023);
(statearr_17038_17082[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 8))
{var inst_16968 = (state_17027[9]);var inst_16969 = (state_17027[10]);var inst_16971 = (inst_16969 < inst_16968);var inst_16972 = inst_16971;var state_17027__$1 = state_17027;if(cljs.core.truth_(inst_16972))
{var statearr_17042_17083 = state_17027__$1;(statearr_17042_17083[1] = 10);
} else
{var statearr_17043_17084 = state_17027__$1;(statearr_17043_17084[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 9))
{var inst_17002 = (state_17027[2]);var state_17027__$1 = state_17027;var statearr_17044_17085 = state_17027__$1;(statearr_17044_17085[2] = inst_17002);
(statearr_17044_17085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 10))
{var inst_16967 = (state_17027[8]);var inst_16968 = (state_17027[9]);var inst_16969 = (state_17027[10]);var inst_16966 = (state_17027[11]);var inst_16974 = cljs.core._nth.call(null,inst_16967,inst_16969);var inst_16975 = cljs.core.async.muxch_STAR_.call(null,inst_16974);var inst_16976 = cljs.core.async.close_BANG_.call(null,inst_16975);var inst_16977 = (inst_16969 + 1);var tmp17039 = inst_16967;var tmp17040 = inst_16968;var tmp17041 = inst_16966;var inst_16966__$1 = tmp17041;var inst_16967__$1 = tmp17039;var inst_16968__$1 = tmp17040;var inst_16969__$1 = inst_16977;var state_17027__$1 = (function (){var statearr_17045 = state_17027;(statearr_17045[8] = inst_16967__$1);
(statearr_17045[14] = inst_16976);
(statearr_17045[9] = inst_16968__$1);
(statearr_17045[10] = inst_16969__$1);
(statearr_17045[11] = inst_16966__$1);
return statearr_17045;
})();var statearr_17046_17086 = state_17027__$1;(statearr_17046_17086[2] = null);
(statearr_17046_17086[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 11))
{var inst_16980 = (state_17027[15]);var inst_16966 = (state_17027[11]);var inst_16980__$1 = cljs.core.seq.call(null,inst_16966);var state_17027__$1 = (function (){var statearr_17047 = state_17027;(statearr_17047[15] = inst_16980__$1);
return statearr_17047;
})();if(inst_16980__$1)
{var statearr_17048_17087 = state_17027__$1;(statearr_17048_17087[1] = 13);
} else
{var statearr_17049_17088 = state_17027__$1;(statearr_17049_17088[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 12))
{var inst_17000 = (state_17027[2]);var state_17027__$1 = state_17027;var statearr_17050_17089 = state_17027__$1;(statearr_17050_17089[2] = inst_17000);
(statearr_17050_17089[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 13))
{var inst_16980 = (state_17027[15]);var inst_16982 = cljs.core.chunked_seq_QMARK_.call(null,inst_16980);var state_17027__$1 = state_17027;if(inst_16982)
{var statearr_17051_17090 = state_17027__$1;(statearr_17051_17090[1] = 16);
} else
{var statearr_17052_17091 = state_17027__$1;(statearr_17052_17091[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 14))
{var state_17027__$1 = state_17027;var statearr_17053_17092 = state_17027__$1;(statearr_17053_17092[2] = null);
(statearr_17053_17092[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 15))
{var inst_16998 = (state_17027[2]);var state_17027__$1 = state_17027;var statearr_17054_17093 = state_17027__$1;(statearr_17054_17093[2] = inst_16998);
(statearr_17054_17093[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 16))
{var inst_16980 = (state_17027[15]);var inst_16984 = cljs.core.chunk_first.call(null,inst_16980);var inst_16985 = cljs.core.chunk_rest.call(null,inst_16980);var inst_16986 = cljs.core.count.call(null,inst_16984);var inst_16966 = inst_16985;var inst_16967 = inst_16984;var inst_16968 = inst_16986;var inst_16969 = 0;var state_17027__$1 = (function (){var statearr_17055 = state_17027;(statearr_17055[8] = inst_16967);
(statearr_17055[9] = inst_16968);
(statearr_17055[10] = inst_16969);
(statearr_17055[11] = inst_16966);
return statearr_17055;
})();var statearr_17056_17094 = state_17027__$1;(statearr_17056_17094[2] = null);
(statearr_17056_17094[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 17))
{var inst_16980 = (state_17027[15]);var inst_16989 = cljs.core.first.call(null,inst_16980);var inst_16990 = cljs.core.async.muxch_STAR_.call(null,inst_16989);var inst_16991 = cljs.core.async.close_BANG_.call(null,inst_16990);var inst_16992 = cljs.core.next.call(null,inst_16980);var inst_16966 = inst_16992;var inst_16967 = null;var inst_16968 = 0;var inst_16969 = 0;var state_17027__$1 = (function (){var statearr_17057 = state_17027;(statearr_17057[16] = inst_16991);
(statearr_17057[8] = inst_16967);
(statearr_17057[9] = inst_16968);
(statearr_17057[10] = inst_16969);
(statearr_17057[11] = inst_16966);
return statearr_17057;
})();var statearr_17058_17095 = state_17027__$1;(statearr_17058_17095[2] = null);
(statearr_17058_17095[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 18))
{var inst_16995 = (state_17027[2]);var state_17027__$1 = state_17027;var statearr_17059_17096 = state_17027__$1;(statearr_17059_17096[2] = inst_16995);
(statearr_17059_17096[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 19))
{var state_17027__$1 = state_17027;var statearr_17060_17097 = state_17027__$1;(statearr_17060_17097[2] = null);
(statearr_17060_17097[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 20))
{var state_17027__$1 = state_17027;var statearr_17061_17098 = state_17027__$1;(statearr_17061_17098[2] = null);
(statearr_17061_17098[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 21))
{var inst_17020 = (state_17027[2]);var state_17027__$1 = (function (){var statearr_17062 = state_17027;(statearr_17062[17] = inst_17020);
return statearr_17062;
})();var statearr_17063_17099 = state_17027__$1;(statearr_17063_17099[2] = null);
(statearr_17063_17099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 22))
{var inst_17017 = (state_17027[2]);var state_17027__$1 = state_17027;var statearr_17064_17100 = state_17027__$1;(statearr_17064_17100[2] = inst_17017);
(statearr_17064_17100[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 23))
{var inst_17004 = (state_17027[13]);var inst_17008 = (state_17027[2]);var inst_17009 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17004);var state_17027__$1 = (function (){var statearr_17065 = state_17027;(statearr_17065[18] = inst_17008);
return statearr_17065;
})();var statearr_17066_17101 = state_17027__$1;(statearr_17066_17101[2] = inst_17009);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17027__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17028 === 24))
{var inst_17006 = (state_17027[12]);var inst_16956 = (state_17027[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17027,23,Object,null,22);var inst_17013 = cljs.core.async.muxch_STAR_.call(null,inst_17006);var state_17027__$1 = state_17027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17027__$1,25,inst_17013,inst_16956);
} else
{if((state_val_17028 === 25))
{var inst_17015 = (state_17027[2]);var state_17027__$1 = state_17027;var statearr_17067_17102 = state_17027__$1;(statearr_17067_17102[2] = inst_17015);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17027__$1);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_17071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17071[0] = state_machine__6771__auto__);
(statearr_17071[1] = 1);
return statearr_17071;
});
var state_machine__6771__auto____1 = (function (state_17027){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_17027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e17072){if((e17072 instanceof Object))
{var ex__6774__auto__ = e17072;var statearr_17073_17103 = state_17027;(statearr_17073_17103[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17104 = state_17027;
state_17027 = G__17104;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_17027){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_17027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_17074 = f__6786__auto__.call(null);(statearr_17074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___17075);
return statearr_17074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6785__auto___17241 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_17211){var state_val_17212 = (state_17211[1]);if((state_val_17212 === 1))
{var state_17211__$1 = state_17211;var statearr_17213_17242 = state_17211__$1;(statearr_17213_17242[2] = null);
(statearr_17213_17242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 2))
{var inst_17174 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17175 = 0;var state_17211__$1 = (function (){var statearr_17214 = state_17211;(statearr_17214[7] = inst_17174);
(statearr_17214[8] = inst_17175);
return statearr_17214;
})();var statearr_17215_17243 = state_17211__$1;(statearr_17215_17243[2] = null);
(statearr_17215_17243[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 3))
{var inst_17209 = (state_17211[2]);var state_17211__$1 = state_17211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17211__$1,inst_17209);
} else
{if((state_val_17212 === 4))
{var inst_17175 = (state_17211[8]);var inst_17177 = (inst_17175 < cnt);var state_17211__$1 = state_17211;if(cljs.core.truth_(inst_17177))
{var statearr_17216_17244 = state_17211__$1;(statearr_17216_17244[1] = 6);
} else
{var statearr_17217_17245 = state_17211__$1;(statearr_17217_17245[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 5))
{var inst_17195 = (state_17211[2]);var state_17211__$1 = (function (){var statearr_17218 = state_17211;(statearr_17218[9] = inst_17195);
return statearr_17218;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17211__$1,12,dchan);
} else
{if((state_val_17212 === 6))
{var state_17211__$1 = state_17211;var statearr_17219_17246 = state_17211__$1;(statearr_17219_17246[2] = null);
(statearr_17219_17246[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 7))
{var state_17211__$1 = state_17211;var statearr_17220_17247 = state_17211__$1;(statearr_17220_17247[2] = null);
(statearr_17220_17247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 8))
{var inst_17193 = (state_17211[2]);var state_17211__$1 = state_17211;var statearr_17221_17248 = state_17211__$1;(statearr_17221_17248[2] = inst_17193);
(statearr_17221_17248[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 9))
{var inst_17175 = (state_17211[8]);var inst_17188 = (state_17211[2]);var inst_17189 = (inst_17175 + 1);var inst_17175__$1 = inst_17189;var state_17211__$1 = (function (){var statearr_17222 = state_17211;(statearr_17222[8] = inst_17175__$1);
(statearr_17222[10] = inst_17188);
return statearr_17222;
})();var statearr_17223_17249 = state_17211__$1;(statearr_17223_17249[2] = null);
(statearr_17223_17249[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 10))
{var inst_17179 = (state_17211[2]);var inst_17180 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17211__$1 = (function (){var statearr_17224 = state_17211;(statearr_17224[11] = inst_17179);
return statearr_17224;
})();var statearr_17225_17250 = state_17211__$1;(statearr_17225_17250[2] = inst_17180);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17211__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 11))
{var inst_17175 = (state_17211[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17211,10,Object,null,9);var inst_17184 = chs__$1.call(null,inst_17175);var inst_17185 = done.call(null,inst_17175);var inst_17186 = cljs.core.async.take_BANG_.call(null,inst_17184,inst_17185);var state_17211__$1 = state_17211;var statearr_17226_17251 = state_17211__$1;(statearr_17226_17251[2] = inst_17186);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17211__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 12))
{var inst_17197 = (state_17211[12]);var inst_17197__$1 = (state_17211[2]);var inst_17198 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17197__$1);var state_17211__$1 = (function (){var statearr_17227 = state_17211;(statearr_17227[12] = inst_17197__$1);
return statearr_17227;
})();if(cljs.core.truth_(inst_17198))
{var statearr_17228_17252 = state_17211__$1;(statearr_17228_17252[1] = 13);
} else
{var statearr_17229_17253 = state_17211__$1;(statearr_17229_17253[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 13))
{var inst_17200 = cljs.core.async.close_BANG_.call(null,out);var state_17211__$1 = state_17211;var statearr_17230_17254 = state_17211__$1;(statearr_17230_17254[2] = inst_17200);
(statearr_17230_17254[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 14))
{var inst_17197 = (state_17211[12]);var inst_17202 = cljs.core.apply.call(null,f,inst_17197);var state_17211__$1 = state_17211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17211__$1,16,out,inst_17202);
} else
{if((state_val_17212 === 15))
{var inst_17207 = (state_17211[2]);var state_17211__$1 = state_17211;var statearr_17231_17255 = state_17211__$1;(statearr_17231_17255[2] = inst_17207);
(statearr_17231_17255[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17212 === 16))
{var inst_17204 = (state_17211[2]);var state_17211__$1 = (function (){var statearr_17232 = state_17211;(statearr_17232[13] = inst_17204);
return statearr_17232;
})();var statearr_17233_17256 = state_17211__$1;(statearr_17233_17256[2] = null);
(statearr_17233_17256[1] = 2);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_17237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17237[0] = state_machine__6771__auto__);
(statearr_17237[1] = 1);
return statearr_17237;
});
var state_machine__6771__auto____1 = (function (state_17211){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_17211);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e17238){if((e17238 instanceof Object))
{var ex__6774__auto__ = e17238;var statearr_17239_17257 = state_17211;(statearr_17239_17257[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17211);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17258 = state_17211;
state_17211 = G__17258;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_17211){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_17211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_17240 = f__6786__auto__.call(null);(statearr_17240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___17241);
return statearr_17240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6785__auto___17366 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_17342){var state_val_17343 = (state_17342[1]);if((state_val_17343 === 1))
{var inst_17313 = cljs.core.vec.call(null,chs);var inst_17314 = inst_17313;var state_17342__$1 = (function (){var statearr_17344 = state_17342;(statearr_17344[7] = inst_17314);
return statearr_17344;
})();var statearr_17345_17367 = state_17342__$1;(statearr_17345_17367[2] = null);
(statearr_17345_17367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17343 === 2))
{var inst_17314 = (state_17342[7]);var inst_17316 = cljs.core.count.call(null,inst_17314);var inst_17317 = (inst_17316 > 0);var state_17342__$1 = state_17342;if(cljs.core.truth_(inst_17317))
{var statearr_17346_17368 = state_17342__$1;(statearr_17346_17368[1] = 4);
} else
{var statearr_17347_17369 = state_17342__$1;(statearr_17347_17369[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17343 === 3))
{var inst_17340 = (state_17342[2]);var state_17342__$1 = state_17342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17342__$1,inst_17340);
} else
{if((state_val_17343 === 4))
{var inst_17314 = (state_17342[7]);var state_17342__$1 = state_17342;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17342__$1,7,inst_17314);
} else
{if((state_val_17343 === 5))
{var inst_17336 = cljs.core.async.close_BANG_.call(null,out);var state_17342__$1 = state_17342;var statearr_17348_17370 = state_17342__$1;(statearr_17348_17370[2] = inst_17336);
(statearr_17348_17370[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17343 === 6))
{var inst_17338 = (state_17342[2]);var state_17342__$1 = state_17342;var statearr_17349_17371 = state_17342__$1;(statearr_17349_17371[2] = inst_17338);
(statearr_17349_17371[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17343 === 7))
{var inst_17322 = (state_17342[8]);var inst_17321 = (state_17342[9]);var inst_17321__$1 = (state_17342[2]);var inst_17322__$1 = cljs.core.nth.call(null,inst_17321__$1,0,null);var inst_17323 = cljs.core.nth.call(null,inst_17321__$1,1,null);var inst_17324 = (inst_17322__$1 == null);var state_17342__$1 = (function (){var statearr_17350 = state_17342;(statearr_17350[8] = inst_17322__$1);
(statearr_17350[10] = inst_17323);
(statearr_17350[9] = inst_17321__$1);
return statearr_17350;
})();if(cljs.core.truth_(inst_17324))
{var statearr_17351_17372 = state_17342__$1;(statearr_17351_17372[1] = 8);
} else
{var statearr_17352_17373 = state_17342__$1;(statearr_17352_17373[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17343 === 8))
{var inst_17314 = (state_17342[7]);var inst_17322 = (state_17342[8]);var inst_17323 = (state_17342[10]);var inst_17321 = (state_17342[9]);var inst_17326 = (function (){var c = inst_17323;var v = inst_17322;var vec__17319 = inst_17321;var cs = inst_17314;return ((function (c,v,vec__17319,cs,inst_17314,inst_17322,inst_17323,inst_17321,state_val_17343){
return (function (p1__17259_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17259_SHARP_);
});
;})(c,v,vec__17319,cs,inst_17314,inst_17322,inst_17323,inst_17321,state_val_17343))
})();var inst_17327 = cljs.core.filterv.call(null,inst_17326,inst_17314);var inst_17314__$1 = inst_17327;var state_17342__$1 = (function (){var statearr_17353 = state_17342;(statearr_17353[7] = inst_17314__$1);
return statearr_17353;
})();var statearr_17354_17374 = state_17342__$1;(statearr_17354_17374[2] = null);
(statearr_17354_17374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17343 === 9))
{var inst_17322 = (state_17342[8]);var state_17342__$1 = state_17342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17342__$1,11,out,inst_17322);
} else
{if((state_val_17343 === 10))
{var inst_17334 = (state_17342[2]);var state_17342__$1 = state_17342;var statearr_17356_17375 = state_17342__$1;(statearr_17356_17375[2] = inst_17334);
(statearr_17356_17375[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17343 === 11))
{var inst_17314 = (state_17342[7]);var inst_17331 = (state_17342[2]);var tmp17355 = inst_17314;var inst_17314__$1 = tmp17355;var state_17342__$1 = (function (){var statearr_17357 = state_17342;(statearr_17357[7] = inst_17314__$1);
(statearr_17357[11] = inst_17331);
return statearr_17357;
})();var statearr_17358_17376 = state_17342__$1;(statearr_17358_17376[2] = null);
(statearr_17358_17376[1] = 2);
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
var state_machine__6771__auto____0 = (function (){var statearr_17362 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17362[0] = state_machine__6771__auto__);
(statearr_17362[1] = 1);
return statearr_17362;
});
var state_machine__6771__auto____1 = (function (state_17342){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_17342);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e17363){if((e17363 instanceof Object))
{var ex__6774__auto__ = e17363;var statearr_17364_17377 = state_17342;(statearr_17364_17377[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17378 = state_17342;
state_17342 = G__17378;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_17342){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_17342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_17365 = f__6786__auto__.call(null);(statearr_17365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___17366);
return statearr_17365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6785__auto___17471 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_17448){var state_val_17449 = (state_17448[1]);if((state_val_17449 === 1))
{var inst_17425 = 0;var state_17448__$1 = (function (){var statearr_17450 = state_17448;(statearr_17450[7] = inst_17425);
return statearr_17450;
})();var statearr_17451_17472 = state_17448__$1;(statearr_17451_17472[2] = null);
(statearr_17451_17472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 2))
{var inst_17425 = (state_17448[7]);var inst_17427 = (inst_17425 < n);var state_17448__$1 = state_17448;if(cljs.core.truth_(inst_17427))
{var statearr_17452_17473 = state_17448__$1;(statearr_17452_17473[1] = 4);
} else
{var statearr_17453_17474 = state_17448__$1;(statearr_17453_17474[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 3))
{var inst_17445 = (state_17448[2]);var inst_17446 = cljs.core.async.close_BANG_.call(null,out);var state_17448__$1 = (function (){var statearr_17454 = state_17448;(statearr_17454[8] = inst_17445);
return statearr_17454;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17448__$1,inst_17446);
} else
{if((state_val_17449 === 4))
{var state_17448__$1 = state_17448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17448__$1,7,ch);
} else
{if((state_val_17449 === 5))
{var state_17448__$1 = state_17448;var statearr_17455_17475 = state_17448__$1;(statearr_17455_17475[2] = null);
(statearr_17455_17475[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 6))
{var inst_17443 = (state_17448[2]);var state_17448__$1 = state_17448;var statearr_17456_17476 = state_17448__$1;(statearr_17456_17476[2] = inst_17443);
(statearr_17456_17476[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 7))
{var inst_17430 = (state_17448[9]);var inst_17430__$1 = (state_17448[2]);var inst_17431 = (inst_17430__$1 == null);var inst_17432 = cljs.core.not.call(null,inst_17431);var state_17448__$1 = (function (){var statearr_17457 = state_17448;(statearr_17457[9] = inst_17430__$1);
return statearr_17457;
})();if(inst_17432)
{var statearr_17458_17477 = state_17448__$1;(statearr_17458_17477[1] = 8);
} else
{var statearr_17459_17478 = state_17448__$1;(statearr_17459_17478[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 8))
{var inst_17430 = (state_17448[9]);var state_17448__$1 = state_17448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17448__$1,11,out,inst_17430);
} else
{if((state_val_17449 === 9))
{var state_17448__$1 = state_17448;var statearr_17460_17479 = state_17448__$1;(statearr_17460_17479[2] = null);
(statearr_17460_17479[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 10))
{var inst_17440 = (state_17448[2]);var state_17448__$1 = state_17448;var statearr_17461_17480 = state_17448__$1;(statearr_17461_17480[2] = inst_17440);
(statearr_17461_17480[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 11))
{var inst_17425 = (state_17448[7]);var inst_17435 = (state_17448[2]);var inst_17436 = (inst_17425 + 1);var inst_17425__$1 = inst_17436;var state_17448__$1 = (function (){var statearr_17462 = state_17448;(statearr_17462[10] = inst_17435);
(statearr_17462[7] = inst_17425__$1);
return statearr_17462;
})();var statearr_17463_17481 = state_17448__$1;(statearr_17463_17481[2] = null);
(statearr_17463_17481[1] = 2);
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
var state_machine__6771__auto____0 = (function (){var statearr_17467 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17467[0] = state_machine__6771__auto__);
(statearr_17467[1] = 1);
return statearr_17467;
});
var state_machine__6771__auto____1 = (function (state_17448){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_17448);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e17468){if((e17468 instanceof Object))
{var ex__6774__auto__ = e17468;var statearr_17469_17482 = state_17448;(statearr_17469_17482[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17483 = state_17448;
state_17448 = G__17483;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_17448){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_17448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_17470 = f__6786__auto__.call(null);(statearr_17470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___17471);
return statearr_17470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6785__auto___17580 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_17555){var state_val_17556 = (state_17555[1]);if((state_val_17556 === 1))
{var inst_17532 = null;var state_17555__$1 = (function (){var statearr_17557 = state_17555;(statearr_17557[7] = inst_17532);
return statearr_17557;
})();var statearr_17558_17581 = state_17555__$1;(statearr_17558_17581[2] = null);
(statearr_17558_17581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17556 === 2))
{var state_17555__$1 = state_17555;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17555__$1,4,ch);
} else
{if((state_val_17556 === 3))
{var inst_17552 = (state_17555[2]);var inst_17553 = cljs.core.async.close_BANG_.call(null,out);var state_17555__$1 = (function (){var statearr_17559 = state_17555;(statearr_17559[8] = inst_17552);
return statearr_17559;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17555__$1,inst_17553);
} else
{if((state_val_17556 === 4))
{var inst_17535 = (state_17555[9]);var inst_17535__$1 = (state_17555[2]);var inst_17536 = (inst_17535__$1 == null);var inst_17537 = cljs.core.not.call(null,inst_17536);var state_17555__$1 = (function (){var statearr_17560 = state_17555;(statearr_17560[9] = inst_17535__$1);
return statearr_17560;
})();if(inst_17537)
{var statearr_17561_17582 = state_17555__$1;(statearr_17561_17582[1] = 5);
} else
{var statearr_17562_17583 = state_17555__$1;(statearr_17562_17583[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17556 === 5))
{var inst_17532 = (state_17555[7]);var inst_17535 = (state_17555[9]);var inst_17539 = cljs.core._EQ_.call(null,inst_17535,inst_17532);var state_17555__$1 = state_17555;if(inst_17539)
{var statearr_17563_17584 = state_17555__$1;(statearr_17563_17584[1] = 8);
} else
{var statearr_17564_17585 = state_17555__$1;(statearr_17564_17585[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17556 === 6))
{var state_17555__$1 = state_17555;var statearr_17566_17586 = state_17555__$1;(statearr_17566_17586[2] = null);
(statearr_17566_17586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17556 === 7))
{var inst_17550 = (state_17555[2]);var state_17555__$1 = state_17555;var statearr_17567_17587 = state_17555__$1;(statearr_17567_17587[2] = inst_17550);
(statearr_17567_17587[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17556 === 8))
{var inst_17532 = (state_17555[7]);var tmp17565 = inst_17532;var inst_17532__$1 = tmp17565;var state_17555__$1 = (function (){var statearr_17568 = state_17555;(statearr_17568[7] = inst_17532__$1);
return statearr_17568;
})();var statearr_17569_17588 = state_17555__$1;(statearr_17569_17588[2] = null);
(statearr_17569_17588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17556 === 9))
{var inst_17535 = (state_17555[9]);var state_17555__$1 = state_17555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17555__$1,11,out,inst_17535);
} else
{if((state_val_17556 === 10))
{var inst_17547 = (state_17555[2]);var state_17555__$1 = state_17555;var statearr_17570_17589 = state_17555__$1;(statearr_17570_17589[2] = inst_17547);
(statearr_17570_17589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17556 === 11))
{var inst_17535 = (state_17555[9]);var inst_17544 = (state_17555[2]);var inst_17532 = inst_17535;var state_17555__$1 = (function (){var statearr_17571 = state_17555;(statearr_17571[7] = inst_17532);
(statearr_17571[10] = inst_17544);
return statearr_17571;
})();var statearr_17572_17590 = state_17555__$1;(statearr_17572_17590[2] = null);
(statearr_17572_17590[1] = 2);
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
var state_machine__6771__auto____0 = (function (){var statearr_17576 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17576[0] = state_machine__6771__auto__);
(statearr_17576[1] = 1);
return statearr_17576;
});
var state_machine__6771__auto____1 = (function (state_17555){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_17555);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e17577){if((e17577 instanceof Object))
{var ex__6774__auto__ = e17577;var statearr_17578_17591 = state_17555;(statearr_17578_17591[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17555);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17592 = state_17555;
state_17555 = G__17592;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_17555){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_17555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_17579 = f__6786__auto__.call(null);(statearr_17579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___17580);
return statearr_17579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6785__auto___17727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_17697){var state_val_17698 = (state_17697[1]);if((state_val_17698 === 1))
{var inst_17660 = (new Array(n));var inst_17661 = inst_17660;var inst_17662 = 0;var state_17697__$1 = (function (){var statearr_17699 = state_17697;(statearr_17699[7] = inst_17662);
(statearr_17699[8] = inst_17661);
return statearr_17699;
})();var statearr_17700_17728 = state_17697__$1;(statearr_17700_17728[2] = null);
(statearr_17700_17728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 2))
{var state_17697__$1 = state_17697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17697__$1,4,ch);
} else
{if((state_val_17698 === 3))
{var inst_17695 = (state_17697[2]);var state_17697__$1 = state_17697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17697__$1,inst_17695);
} else
{if((state_val_17698 === 4))
{var inst_17665 = (state_17697[9]);var inst_17665__$1 = (state_17697[2]);var inst_17666 = (inst_17665__$1 == null);var inst_17667 = cljs.core.not.call(null,inst_17666);var state_17697__$1 = (function (){var statearr_17701 = state_17697;(statearr_17701[9] = inst_17665__$1);
return statearr_17701;
})();if(inst_17667)
{var statearr_17702_17729 = state_17697__$1;(statearr_17702_17729[1] = 5);
} else
{var statearr_17703_17730 = state_17697__$1;(statearr_17703_17730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 5))
{var inst_17670 = (state_17697[10]);var inst_17665 = (state_17697[9]);var inst_17662 = (state_17697[7]);var inst_17661 = (state_17697[8]);var inst_17669 = (inst_17661[inst_17662] = inst_17665);var inst_17670__$1 = (inst_17662 + 1);var inst_17671 = (inst_17670__$1 < n);var state_17697__$1 = (function (){var statearr_17704 = state_17697;(statearr_17704[10] = inst_17670__$1);
(statearr_17704[11] = inst_17669);
return statearr_17704;
})();if(cljs.core.truth_(inst_17671))
{var statearr_17705_17731 = state_17697__$1;(statearr_17705_17731[1] = 8);
} else
{var statearr_17706_17732 = state_17697__$1;(statearr_17706_17732[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 6))
{var inst_17662 = (state_17697[7]);var inst_17683 = (inst_17662 > 0);var state_17697__$1 = state_17697;if(cljs.core.truth_(inst_17683))
{var statearr_17708_17733 = state_17697__$1;(statearr_17708_17733[1] = 12);
} else
{var statearr_17709_17734 = state_17697__$1;(statearr_17709_17734[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 7))
{var inst_17693 = (state_17697[2]);var state_17697__$1 = state_17697;var statearr_17710_17735 = state_17697__$1;(statearr_17710_17735[2] = inst_17693);
(statearr_17710_17735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 8))
{var inst_17670 = (state_17697[10]);var inst_17661 = (state_17697[8]);var tmp17707 = inst_17661;var inst_17661__$1 = tmp17707;var inst_17662 = inst_17670;var state_17697__$1 = (function (){var statearr_17711 = state_17697;(statearr_17711[7] = inst_17662);
(statearr_17711[8] = inst_17661__$1);
return statearr_17711;
})();var statearr_17712_17736 = state_17697__$1;(statearr_17712_17736[2] = null);
(statearr_17712_17736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 9))
{var inst_17661 = (state_17697[8]);var inst_17675 = cljs.core.vec.call(null,inst_17661);var state_17697__$1 = state_17697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17697__$1,11,out,inst_17675);
} else
{if((state_val_17698 === 10))
{var inst_17681 = (state_17697[2]);var state_17697__$1 = state_17697;var statearr_17713_17737 = state_17697__$1;(statearr_17713_17737[2] = inst_17681);
(statearr_17713_17737[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 11))
{var inst_17677 = (state_17697[2]);var inst_17678 = (new Array(n));var inst_17661 = inst_17678;var inst_17662 = 0;var state_17697__$1 = (function (){var statearr_17714 = state_17697;(statearr_17714[12] = inst_17677);
(statearr_17714[7] = inst_17662);
(statearr_17714[8] = inst_17661);
return statearr_17714;
})();var statearr_17715_17738 = state_17697__$1;(statearr_17715_17738[2] = null);
(statearr_17715_17738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 12))
{var inst_17661 = (state_17697[8]);var inst_17685 = cljs.core.vec.call(null,inst_17661);var state_17697__$1 = state_17697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17697__$1,15,out,inst_17685);
} else
{if((state_val_17698 === 13))
{var state_17697__$1 = state_17697;var statearr_17716_17739 = state_17697__$1;(statearr_17716_17739[2] = null);
(statearr_17716_17739[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 14))
{var inst_17690 = (state_17697[2]);var inst_17691 = cljs.core.async.close_BANG_.call(null,out);var state_17697__$1 = (function (){var statearr_17717 = state_17697;(statearr_17717[13] = inst_17690);
return statearr_17717;
})();var statearr_17718_17740 = state_17697__$1;(statearr_17718_17740[2] = inst_17691);
(statearr_17718_17740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17698 === 15))
{var inst_17687 = (state_17697[2]);var state_17697__$1 = state_17697;var statearr_17719_17741 = state_17697__$1;(statearr_17719_17741[2] = inst_17687);
(statearr_17719_17741[1] = 14);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_17723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17723[0] = state_machine__6771__auto__);
(statearr_17723[1] = 1);
return statearr_17723;
});
var state_machine__6771__auto____1 = (function (state_17697){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_17697);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e17724){if((e17724 instanceof Object))
{var ex__6774__auto__ = e17724;var statearr_17725_17742 = state_17697;(statearr_17725_17742[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17743 = state_17697;
state_17697 = G__17743;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_17697){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_17697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_17726 = f__6786__auto__.call(null);(statearr_17726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___17727);
return statearr_17726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6785__auto___17886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6786__auto__ = (function (){var switch__6770__auto__ = (function (state_17856){var state_val_17857 = (state_17856[1]);if((state_val_17857 === 1))
{var inst_17815 = [];var inst_17816 = inst_17815;var inst_17817 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17856__$1 = (function (){var statearr_17858 = state_17856;(statearr_17858[7] = inst_17816);
(statearr_17858[8] = inst_17817);
return statearr_17858;
})();var statearr_17859_17887 = state_17856__$1;(statearr_17859_17887[2] = null);
(statearr_17859_17887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 2))
{var state_17856__$1 = state_17856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17856__$1,4,ch);
} else
{if((state_val_17857 === 3))
{var inst_17854 = (state_17856[2]);var state_17856__$1 = state_17856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17856__$1,inst_17854);
} else
{if((state_val_17857 === 4))
{var inst_17820 = (state_17856[9]);var inst_17820__$1 = (state_17856[2]);var inst_17821 = (inst_17820__$1 == null);var inst_17822 = cljs.core.not.call(null,inst_17821);var state_17856__$1 = (function (){var statearr_17860 = state_17856;(statearr_17860[9] = inst_17820__$1);
return statearr_17860;
})();if(inst_17822)
{var statearr_17861_17888 = state_17856__$1;(statearr_17861_17888[1] = 5);
} else
{var statearr_17862_17889 = state_17856__$1;(statearr_17862_17889[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 5))
{var inst_17824 = (state_17856[10]);var inst_17817 = (state_17856[8]);var inst_17820 = (state_17856[9]);var inst_17824__$1 = f.call(null,inst_17820);var inst_17825 = cljs.core._EQ_.call(null,inst_17824__$1,inst_17817);var inst_17826 = cljs.core.keyword_identical_QMARK_.call(null,inst_17817,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17827 = (inst_17825) || (inst_17826);var state_17856__$1 = (function (){var statearr_17863 = state_17856;(statearr_17863[10] = inst_17824__$1);
return statearr_17863;
})();if(cljs.core.truth_(inst_17827))
{var statearr_17864_17890 = state_17856__$1;(statearr_17864_17890[1] = 8);
} else
{var statearr_17865_17891 = state_17856__$1;(statearr_17865_17891[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 6))
{var inst_17816 = (state_17856[7]);var inst_17841 = inst_17816.length;var inst_17842 = (inst_17841 > 0);var state_17856__$1 = state_17856;if(cljs.core.truth_(inst_17842))
{var statearr_17867_17892 = state_17856__$1;(statearr_17867_17892[1] = 12);
} else
{var statearr_17868_17893 = state_17856__$1;(statearr_17868_17893[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 7))
{var inst_17852 = (state_17856[2]);var state_17856__$1 = state_17856;var statearr_17869_17894 = state_17856__$1;(statearr_17869_17894[2] = inst_17852);
(statearr_17869_17894[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 8))
{var inst_17824 = (state_17856[10]);var inst_17816 = (state_17856[7]);var inst_17820 = (state_17856[9]);var inst_17829 = inst_17816.push(inst_17820);var tmp17866 = inst_17816;var inst_17816__$1 = tmp17866;var inst_17817 = inst_17824;var state_17856__$1 = (function (){var statearr_17870 = state_17856;(statearr_17870[11] = inst_17829);
(statearr_17870[7] = inst_17816__$1);
(statearr_17870[8] = inst_17817);
return statearr_17870;
})();var statearr_17871_17895 = state_17856__$1;(statearr_17871_17895[2] = null);
(statearr_17871_17895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 9))
{var inst_17816 = (state_17856[7]);var inst_17832 = cljs.core.vec.call(null,inst_17816);var state_17856__$1 = state_17856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17856__$1,11,out,inst_17832);
} else
{if((state_val_17857 === 10))
{var inst_17839 = (state_17856[2]);var state_17856__$1 = state_17856;var statearr_17872_17896 = state_17856__$1;(statearr_17872_17896[2] = inst_17839);
(statearr_17872_17896[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 11))
{var inst_17824 = (state_17856[10]);var inst_17820 = (state_17856[9]);var inst_17834 = (state_17856[2]);var inst_17835 = [];var inst_17836 = inst_17835.push(inst_17820);var inst_17816 = inst_17835;var inst_17817 = inst_17824;var state_17856__$1 = (function (){var statearr_17873 = state_17856;(statearr_17873[12] = inst_17836);
(statearr_17873[13] = inst_17834);
(statearr_17873[7] = inst_17816);
(statearr_17873[8] = inst_17817);
return statearr_17873;
})();var statearr_17874_17897 = state_17856__$1;(statearr_17874_17897[2] = null);
(statearr_17874_17897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 12))
{var inst_17816 = (state_17856[7]);var inst_17844 = cljs.core.vec.call(null,inst_17816);var state_17856__$1 = state_17856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17856__$1,15,out,inst_17844);
} else
{if((state_val_17857 === 13))
{var state_17856__$1 = state_17856;var statearr_17875_17898 = state_17856__$1;(statearr_17875_17898[2] = null);
(statearr_17875_17898[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 14))
{var inst_17849 = (state_17856[2]);var inst_17850 = cljs.core.async.close_BANG_.call(null,out);var state_17856__$1 = (function (){var statearr_17876 = state_17856;(statearr_17876[14] = inst_17849);
return statearr_17876;
})();var statearr_17877_17899 = state_17856__$1;(statearr_17877_17899[2] = inst_17850);
(statearr_17877_17899[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17857 === 15))
{var inst_17846 = (state_17856[2]);var state_17856__$1 = state_17856;var statearr_17878_17900 = state_17856__$1;(statearr_17878_17900[2] = inst_17846);
(statearr_17878_17900[1] = 14);
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
});return ((function (switch__6770__auto__){
return (function() {
var state_machine__6771__auto__ = null;
var state_machine__6771__auto____0 = (function (){var statearr_17882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17882[0] = state_machine__6771__auto__);
(statearr_17882[1] = 1);
return statearr_17882;
});
var state_machine__6771__auto____1 = (function (state_17856){while(true){
var ret_value__6772__auto__ = (function (){try{while(true){
var result__6773__auto__ = switch__6770__auto__.call(null,state_17856);if(cljs.core.keyword_identical_QMARK_.call(null,result__6773__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6773__auto__;
}
break;
}
}catch (e17883){if((e17883 instanceof Object))
{var ex__6774__auto__ = e17883;var statearr_17884_17901 = state_17856;(statearr_17884_17901[5] = ex__6774__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6772__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17902 = state_17856;
state_17856 = G__17902;
continue;
}
} else
{return ret_value__6772__auto__;
}
break;
}
});
state_machine__6771__auto__ = function(state_17856){
switch(arguments.length){
case 0:
return state_machine__6771__auto____0.call(this);
case 1:
return state_machine__6771__auto____1.call(this,state_17856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6771__auto____0;
state_machine__6771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6771__auto____1;
return state_machine__6771__auto__;
})()
;})(switch__6770__auto__))
})();var state__6787__auto__ = (function (){var statearr_17885 = f__6786__auto__.call(null);(statearr_17885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6785__auto___17886);
return statearr_17885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6787__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map