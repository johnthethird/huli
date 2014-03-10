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
var G__12333 = (i + 1);
i = G__12333;
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

//# sourceMappingURL=helpers.js.map