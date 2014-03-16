// Compiled by ClojureScript 0.0-2173
goog.provide('utils.helpers');
goog.require('cljs.core');
utils.helpers.frak = (function frak(obj){return console.log(cljs.core.clj__GT_js.call(null,obj));
});
utils.helpers.now = (function now(){return (new Date());
});
utils.helpers.index_of = (function index_of(xs,x){var len = cljs.core.count.call(null,xs);var i = 0;while(true){
if((i < len))
{if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,xs,i),x))
{return i;
} else
{{
var G__151646 = (i + 1);
i = G__151646;
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
fn_or_s.cljs$lang$applyTo = (function (arglist__151647){
var fors = cljs.core.first(arglist__151647);
var args = cljs.core.rest(arglist__151647);
return fn_or_s__delegate(fors,args);
});
fn_or_s.cljs$core$IFn$_invoke$arity$variadic = fn_or_s__delegate;
return fn_or_s;
})()
;
utils.helpers.getkey_or_compute_val = (function getkey_or_compute_val(fors,obj){if(cljs.core.fn_QMARK_.call(null,fors))
{return fors.call(null,obj);
} else
{return cljs.core.keyword.call(null,fors).call(null,obj);
}
});
utils.helpers.remove_nils = (function remove_nils(m){return cljs.core.apply.call(null,cljs.core.dissoc,m,(function (){var iter__4160__auto__ = (function iter__151656(s__151657){return (new cljs.core.LazySeq(null,(function (){var s__151657__$1 = s__151657;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__151657__$1);if(temp__4092__auto__)
{var s__151657__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__151657__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__151657__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__151659 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__151658 = 0;while(true){
if((i__151658 < size__4159__auto__))
{var vec__151662 = cljs.core._nth.call(null,c__4158__auto__,i__151658);var k = cljs.core.nth.call(null,vec__151662,0,null);var v = cljs.core.nth.call(null,vec__151662,1,null);if((v == null))
{cljs.core.chunk_append.call(null,b__151659,k);
{
var G__151664 = (i__151658 + 1);
i__151658 = G__151664;
continue;
}
} else
{{
var G__151665 = (i__151658 + 1);
i__151658 = G__151665;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151659),iter__151656.call(null,cljs.core.chunk_rest.call(null,s__151657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151659),null);
}
} else
{var vec__151663 = cljs.core.first.call(null,s__151657__$2);var k = cljs.core.nth.call(null,vec__151663,0,null);var v = cljs.core.nth.call(null,vec__151663,1,null);if((v == null))
{return cljs.core.cons.call(null,k,iter__151656.call(null,cljs.core.rest.call(null,s__151657__$2)));
} else
{{
var G__151666 = cljs.core.rest.call(null,s__151657__$2);
s__151657__$1 = G__151666;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,m);
})());
});

//# sourceMappingURL=helpers.js.map