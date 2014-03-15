// Compiled by ClojureScript 0.0-2173
goog.provide('utils.helpers');
goog.require('cljs.core');
utils.helpers.now = (function now(){return (new Date());
});
utils.helpers.index_of = (function index_of(xs,x){var len = cljs.core.count.call(null,xs);var i = 0;while(true){
if((i < len))
{if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,xs,i),x))
{return i;
} else
{{
var G__12760 = (i + 1);
i = G__12760;
continue;
}
}
} else
{return -1;
}
break;
}
});
utils.helpers.error_QMARK_ = (function error_QMARK_(x){return (x instanceof Error);
});
utils.helpers.throw_err = (function throw_err(x){if(utils.helpers.error_QMARK_.call(null,x))
{throw x;
} else
{return x;
}
});
utils.helpers.frak = (function frak(obj){return console.log(cljs.core.clj__GT_js.call(null,obj));
});
/**
* @param {...*} var_args
*/
utils.helpers.fn_or_s = (function() { 
var fn_or_s__delegate = function (fors,args){if(cljs.core.fn_QMARK_.call(null,fors))
{return fors.call(null,args);
} else
{return [cljs.core.str(fors)].join('');
}
};
var fn_or_s = function (fors,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fn_or_s__delegate.call(this,fors,args);};
fn_or_s.cljs$lang$maxFixedArity = 1;
fn_or_s.cljs$lang$applyTo = (function (arglist__12761){
var fors = cljs.core.first(arglist__12761);
var args = cljs.core.rest(arglist__12761);
return fn_or_s__delegate(fors,args);
});
fn_or_s.cljs$core$IFn$_invoke$arity$variadic = fn_or_s__delegate;
return fn_or_s;
})()
;

//# sourceMappingURL=helpers.js.map