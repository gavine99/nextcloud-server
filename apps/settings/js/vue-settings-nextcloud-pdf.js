!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/js/",r(r.s=594)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},100:function(t,n,r){var e=r(101);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},101:function(t,n,r){var e=r(3),o=r(160),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a function")}},102:function(t,n,r){var e=r(8),o=r(0);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},103:function(t,n,r){var e=r(2),o=r(12),i=r(35),u=r(167).indexOf,c=r(59),a=e([].push);t.exports=function(t,n){var r,e=i(t),f=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&a(s,r);for(;n.length>f;)o(e,r=n[f++])&&(~u(s,r)||a(s,r));return s}},104:function(t,n,r){var e=r(42),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},105:function(t,n){n.f=Object.getOwnPropertySymbols},106:function(t,n,r){var e=r(2);t.exports=e({}.isPrototypeOf)},107:function(t,n,r){var e=r(171);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},12:function(t,n,r){var e=r(2),o=r(27),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},15:function(t,n,r){var e=r(40),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},158:function(t,n,r){var e=r(15),o=r(20),i=r(88),u=r(100),c=r(161),a=r(6),f=TypeError,s=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,a=u(t,s);if(a){if(void 0===n&&(n="default"),r=e(a,t,n),!o(r)||i(r))return r;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},159:function(t,n,r){var e=r(31);t.exports=e("navigator","userAgent")||""},160:function(t,n){var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},161:function(t,n,r){var e=r(15),o=r(3),i=r(20),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw u("Can't convert object to primitive value")}},162:function(t,n,r){var e=r(0),o=r(3),i=r(12),u=r(8),c=r(79).CONFIGURABLE,a=r(54),f=r(75),s=f.enforce,p=f.get,l=Object.defineProperty,v=u&&!e((function(){return 8!==l((function(){}),"length",{value:8}).length})),y=String(String).split("String"),b=t.exports=function(t,n,r){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!i(t,"name")||c&&t.name!==n)&&(u?l(t,"name",{value:n,configurable:!0}):t.name=n),v&&r&&i(r,"arity")&&t.length!==r.arity&&l(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?u&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=s(t);return i(e,"source")||(e.source=y.join("string"==typeof n?n:"")),t};Function.prototype.toString=b((function(){return o(this)&&p(this).source||a(this)}),"toString")},163:function(t,n,r){var e=r(4),o=r(3),i=r(54),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},164:function(t,n,r){var e=r(12),o=r(165),i=r(87),u=r(21);t.exports=function(t,n,r){for(var c=o(n),a=u.f,f=i.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||a(t,p,f(n,p))}}},165:function(t,n,r){var e=r(31),o=r(2),i=r(166),u=r(105),c=r(18),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?a(n,r(t)):n}},166:function(t,n,r){var e=r(103),o=r(63).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},167:function(t,n,r){var e=r(35),o=r(168),i=r(61),u=function(t){return function(n,r,u){var c,a=e(n),f=i(a),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},168:function(t,n,r){var e=r(42),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},169:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},170:function(t,n,r){var e=r(0),o=r(3),i=/#|\.prototype\./,u=function(t,n){var r=a[c(t)];return r==s||r!=f&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},171:function(t,n,r){var e=r(98),o=r(172),i=r(20),u=r(6)("species"),c=Array;t.exports=function(t){var n;return e(t)&&(n=t.constructor,(o(n)&&(n===c||e(n.prototype))||i(n)&&null===(n=n[u]))&&(n=void 0)),void 0===n?c:n}},172:function(t,n,r){var e=r(2),o=r(0),i=r(3),u=r(68),c=r(31),a=r(54),f=function(){},s=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),y=!l.exec(f),b=function(t){if(!i(t))return!1;try{return p(f,s,t),!0}catch(t){return!1}},d=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,a(t))}catch(t){return!0}};d.sham=!0,t.exports=!p||o((function(){var t;return b(b.call)||!b(Object)||!b((function(){t=!0}))||t}))?d:b},18:function(t,n,r){var e=r(20),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not an object")}},181:function(t,n,r){"use strict";var e=r(37),o=r(0),i=r(98),u=r(20),c=r(27),a=r(61),f=r(182),s=r(183),p=r(107),l=r(184),v=r(6),y=r(60),b=v("isConcatSpreadable"),d=y>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=l("concat"),h=function(t){if(!u(t))return!1;var n=t[b];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,arity:1,forced:!d||!g},{concat:function(t){var n,r,e,o,i,u=c(this),l=p(u,0),v=0;for(n=-1,e=arguments.length;n<e;n++)if(h(i=-1===n?u:arguments[n]))for(o=a(i),f(v+o),r=0;r<o;r++,v++)r in i&&s(l,v,i[r]);else f(v+1),s(l,v++,i);return l.length=v,l}})},182:function(t,n){var r=TypeError;t.exports=function(t){if(t>9007199254740991)throw r("Maximum allowed index exceeded");return t}},183:function(t,n,r){"use strict";var e=r(57),o=r(21),i=r(48);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},184:function(t,n,r){var e=r(0),o=r(6),i=r(60),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},2:function(t,n,r){var e=r(40),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},20:function(t,n,r){var e=r(3);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},21:function(t,n,r){var e=r(8),o=r(92),i=r(102),u=r(18),c=r(57),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor;n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&"writable"in r&&!r.writable){var e=s(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:"configurable"in r?r.configurable:e.configurable,enumerable:"enumerable"in r?r.enumerable:e.enumerable,writable:!1})}return f(t,n,r)}:f:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return f(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},23:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loadState=function(t,n,r){var e=document.querySelector("#initial-state-".concat(t,"-").concat(n));if(null===e){if(void 0!==r)return r;throw new Error("Could not find initial state ".concat(n," of ").concat(t))}try{return JSON.parse(atob(e.value))}catch(r){throw new Error("Could not parse initial state ".concat(n," of ").concat(t))}},r(181)},27:function(t,n,r){var e=r(41),o=Object;t.exports=function(t){return o(e(t))}},3:function(t,n){t.exports=function(t){return"function"==typeof t}},31:function(t,n,r){var e=r(4),o=r(3),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},34:function(t,n,r){var e=r(3),o=r(21),i=r(162),u=r(53);t.exports=function(t,n,r,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:n;if(e(r)&&i(r,f,c),c.global)a?t[n]=r:u(n,r);else{try{c.unsafe?t[n]&&(a=!0):delete t[n]}catch(t){}a?t[n]=r:o.f(t,n,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},35:function(t,n,r){var e=r(62),o=r(41);t.exports=function(t){return e(o(t))}},37:function(t,n,r){var e=r(4),o=r(87).f,i=r(38),u=r(34),c=r(53),a=r(164),f=r(170);t.exports=function(t,n){var r,s,p,l,v,y=t.target,b=t.global,d=t.stat;if(r=b?e:d?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.dontCallGetSet?(v=o(r,s))&&v.value:r[s],!f(b?s:y+(d?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},38:function(t,n,r){var e=r(8),o=r(21),i=r(48);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},39:function(t,n,r){var e=r(2),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},4:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(7))},40:function(t,n,r){var e=r(0);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},41:function(t,n){var r=TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},42:function(t,n,r){var e=r(169);t.exports=function(t){var n=+t;return n!=n||0===n?0:e(n)}},48:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},52:function(t,n,r){var e=r(4),o=r(53),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},53:function(t,n,r){var e=r(4),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},54:function(t,n,r){var e=r(2),o=r(3),i=r(52),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},57:function(t,n,r){var e=r(158),o=r(88);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},58:function(t,n,r){var e=r(70),o=r(52);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.24.1",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},59:function(t,n){t.exports={}},594:function(t,n,r){"use strict";r.r(n);var e=r(23),o=!0===Object(e.loadState)("settings","has-reasons-use-nextcloud-pdf");window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("open-reasons-use-nextcloud-pdf");t&&o&&t.addEventListener("click",(function(t){t.preventDefault(),OCA.Viewer.open({path:"/Reasons to use Nextcloud.pdf"})}))}))},6:function(t,n,r){var e=r(4),o=r(58),i=r(12),u=r(91),c=r(90),a=r(89),f=o("wks"),s=e.Symbol,p=s&&s.for,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&p?p(n):l(n)}return f[t]}},60:function(t,n,r){var e,o,i=r(4),u=r(159),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},61:function(t,n,r){var e=r(104);t.exports=function(t){return e(t.length)}},62:function(t,n,r){var e=r(2),o=r(0),i=r(39),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},63:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},68:function(t,n,r){var e=r(71),o=r(3),i=r(39),u=r(6)("toStringTag"),c=Object,a="Arguments"==i(function(){return arguments}());t.exports=e?i:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=c(t),u))?r:a?i(n):"Object"==(e=i(n))&&o(n.callee)?"Arguments":e}},7:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},70:function(t,n){t.exports=!1},71:function(t,n,r){var e={};e[r(6)("toStringTag")]="z",t.exports="[object z]"===String(e)},74:function(t,n,r){var e=r(4),o=r(20),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},75:function(t,n,r){var e,o,i,u=r(163),c=r(4),a=r(2),f=r(20),s=r(38),p=r(12),l=r(52),v=r(76),y=r(59),b=c.TypeError,d=c.WeakMap;if(u||l.state){var g=l.state||(l.state=new d),h=a(g.get),x=a(g.has),m=a(g.set);e=function(t,n){if(x(g,t))throw new b("Object already initialized");return n.facade=t,m(g,t,n),n},o=function(t){return h(g,t)||{}},i=function(t){return x(g,t)}}else{var w=v("state");y[w]=!0,e=function(t,n){if(p(t,w))throw new b("Object already initialized");return n.facade=t,s(t,w,n),n},o=function(t){return p(t,w)?t[w]:{}},i=function(t){return p(t,w)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw b("Incompatible receiver, "+t+" required");return r}}}},76:function(t,n,r){var e=r(58),o=r(91),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},79:function(t,n,r){var e=r(8),o=r(12),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},8:function(t,n,r){var e=r(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},87:function(t,n,r){var e=r(8),o=r(15),i=r(99),u=r(48),c=r(35),a=r(57),f=r(12),s=r(92),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=a(n),s)try{return p(t,n)}catch(t){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},88:function(t,n,r){var e=r(31),o=r(3),i=r(106),u=r(89),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},89:function(t,n,r){var e=r(90);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},90:function(t,n,r){var e=r(60),o=r(0);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},91:function(t,n,r){var e=r(2),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},92:function(t,n,r){var e=r(8),o=r(0),i=r(74);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},98:function(t,n,r){var e=r(39);t.exports=Array.isArray||function(t){return"Array"==e(t)}},99:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e}});
//# sourceMappingURL=vue-settings-nextcloud-pdf.js.map?v=8eb5fa08a486f04677d0