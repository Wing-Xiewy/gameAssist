(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f142c7"],{"324d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"result-screen",class:[e.gametype,{close:!e.screen,open:e.screen,yellow:1==e.result,red:2==e.result}]},[r("div",{staticClass:"screen-close",on:{click:e.handleOver}},[r("svg",{staticClass:"icon-mid",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-close"}})])]),r("div",{staticClass:"screen-sign"},[r("svg",{staticClass:"icon-title",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-"+e.gametype}})])]),r("div",{staticClass:"screen-title"},[e._v(e._s(e.title))]),r("div",{staticClass:"screen-tip"},[e._v(e._s(e.tip))]),r("div",{staticClass:"screen-option"},[r("div",{staticClass:"option-btn",class:[e.gametype,{show:e.screen}],on:{click:e.handleOver}},[e._v("确定")])])])},s=[],a=(r("a9e3"),{name:"ResultScreen",props:{screen:Boolean,result:Number,title:String,tip:String,gametype:String},data:function(){return{}},methods:{handleOver:function(){var e=this;setTimeout((function(){e.$emit("update:screen",!1),e.$emit("ok")}),100)}},watch:{}}),i=a,c=r("2877"),o=Object(c["a"])(i,n,s,!1,null,null,null);t["default"]=o.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),s=r("5899"),a="["+s+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),o=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(e,t,r){var n=r("861d"),s=r("d2bb");e.exports=function(e,t,r){var a,i;return s&&"function"==typeof(a=t.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&s(e,i),e}},a9e3:function(e,t,r){"use strict";var n=r("83ab"),s=r("da84"),a=r("94ca"),i=r("6eeb"),c=r("5135"),o=r("c6b6"),l=r("7156"),u=r("c04e"),f=r("d039"),p=r("7c73"),d=r("241c").f,v=r("06cf").f,h=r("9bf2").f,g=r("58a8").trim,N="Number",I=s[N],m=I.prototype,b=o(p(m))==N,E=function(e){var t,r,n,s,a,i,c,o,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=g(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+l}for(a=l.slice(2),i=a.length,c=0;c<i;c++)if(o=a.charCodeAt(c),o<48||o>s)return NaN;return parseInt(a,n)}return+l};if(a(N,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var _,C=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof C&&(b?f((function(){m.valueOf.call(r)})):o(r)!=N)?l(new I(E(t)),r,C):E(t)},w=n?d(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;w.length>y;y++)c(I,_=w[y])&&!c(C,_)&&h(C,_,v(I,_));C.prototype=m,m.constructor=C,i(s,N,C)}}}]);