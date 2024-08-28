/*! For license information please see core-recommendedapps.js.LICENSE.txt */
(()=>{"use strict";var t,e={43474:(t,e,n)=>{var i=n(21777),o=n(53334),a=n(85471),r=n(35947);const s=null===(l=(0,i.HW)())?(0,r.YK)().setApp("core").build():(0,r.YK)().setApp("core").setUid(l.uid).build();var l,c=n(65043),p=n(63814),d=n(32981);let u;function h(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function m(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,A(t,e,"set"),n),n}function v(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,A(t,e,"get"))}function A(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function f(t,e,n){var i;return(e="symbol"==typeof(i=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?i:String(i))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class g{constructor(t){f(this,"value",void 0),f(this,"next",void 0),this.value=t}}var b=new WeakMap,C=new WeakMap,y=new WeakMap;u=Symbol.iterator;class w{constructor(){h(this,b,{writable:!0,value:void 0}),h(this,C,{writable:!0,value:void 0}),h(this,y,{writable:!0,value:void 0}),this.clear()}enqueue(t){var e;const n=new g(t);v(this,b)?(v(this,C).next=n,m(this,C,n)):(m(this,b,n),m(this,C,n)),m(this,y,(e=v(this,y),++e))}dequeue(){var t;const e=v(this,b);if(e)return m(this,b,v(this,b).next),m(this,y,(t=v(this,y),--t)),e.value}clear(){m(this,b,void 0),m(this,C,void 0),m(this,y,0)}get size(){return v(this,y)}*[u](){let t=v(this,b);for(;t;)yield t.value,t=t.next}}function x(t){if(!Number.isInteger(t)&&t!==Number.POSITIVE_INFINITY||!(t>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const e=new w;let n=0;const i=async(t,i,o)=>{n++;const a=(async()=>t(...o))();i(a);try{await a}catch{}n--,e.size>0&&e.dequeue()()},o=function(o){for(var a=arguments.length,r=new Array(a>1?a-1:0),s=1;s<a;s++)r[s-1]=arguments[s];return new Promise((a=>{((o,a,r)=>{e.enqueue(i.bind(void 0,o,a,r)),(async()=>{await Promise.resolve(),n<t&&e.size>0&&e.dequeue()()})()})(o,a,r)}))};return Object.defineProperties(o,{activeCount:{get:()=>n},pendingCount:{get:()=>e.size},clearQueue:{value:()=>{e.clear()}}}),o}var _=n(18740);const k={calendar:{description:(0,o.Tl)("core","Schedule work & meetings, synced with all your devices."),icon:(0,p.d0)("core","places/calendar.svg")},contacts:{description:(0,o.Tl)("core","Keep your colleagues and friends in one place without leaking their private info."),icon:(0,p.d0)("core","places/contacts.svg")},mail:{description:(0,o.Tl)("core","Simple email app nicely integrated with Files, Contacts and Calendar."),icon:(0,p.d0)("core","actions/mail.svg")},spreed:{description:(0,o.Tl)("core","Chatting, video calls, screensharing, online meetings and web conferencing – in your browser and with mobile apps."),icon:(0,p.d0)("core","apps/spreed.svg")},richdocuments:{name:"Nextcloud Office",description:(0,o.Tl)("core","Collaborative documents, spreadsheets and presentations, built on Collabora Online."),icon:(0,p.d0)("core","apps/richdocuments.svg")},notes:{description:(0,o.Tl)("core","Distraction free note taking app."),icon:(0,p.d0)("core","apps/notes.svg")},richdocumentscode:{hidden:!0}},I=Object.keys(k),T={name:"RecommendedApps",components:{NcButton:_.A},data:()=>({showInstallButton:!1,installingApps:!1,loadingApps:!0,loadingAppsError:!1,apps:[],defaultPageUrl:(0,d.C)("core","defaultPageUrl")}),computed:{recommendedApps(){return this.apps.filter((t=>I.includes(t.id)))}},async mounted(){try{const{data:t}=await c.Ay.get((0,p.Jv)("settings/apps/list"));s.info("".concat(t.apps.length," apps fetched")),this.apps=t.apps.map((t=>Object.assign(t,{loading:!1,installationError:!1}))),s.debug("".concat(this.recommendedApps.length," recommended apps found"),{apps:this.recommendedApps}),this.showInstallButton=!0}catch(t){s.error("could not fetch app list",{error:t}),this.loadingAppsError=!0}finally{this.loadingApps=!1}},methods:{installApps(){this.showInstallButton=!1,this.installingApps=!0;const t=x(1),e=this.recommendedApps.filter((t=>!t.active&&t.isCompatible&&t.canInstall)).map((e=>t((()=>(s.info("installing ".concat(e.id)),e.loading=!0,c.Ay.post((0,p.Jv)("settings/apps/enable"),{appIds:[e.id],groups:[]}).catch((t=>{s.error("could not install ".concat(e.id),{error:t}),e.installationError=!0})).then((()=>{s.info("installed ".concat(e.id)),e.loading=!1})))))));s.debug("installing ".concat(e.length," recommended apps")),Promise.all(e).then((()=>{s.info("all recommended apps installed, redirecting …"),window.location=this.defaultPageUrl})).catch((t=>s.error("could not install recommended apps",{error:t})))},customIcon:t=>t in k&&k[t].icon?k[t].icon:(s.warn("no app icon for recommended app ".concat(t)),(0,p.d0)("core","places/default-app-icon.svg")),customName:t=>t.id in k&&k[t.id].name||t.name,customDescription:t=>t in k?k[t].description:(s.warn("no app description for recommended app ".concat(t)),""),isHidden:t=>t in k&&!!k[t].hidden}};var O=n(85072),P=n.n(O),j=n(97825),B=n.n(j),E=n(77659),S=n.n(E),D=n(55056),N=n.n(D),Y=n(10540),M=n.n(Y),U=n(41113),q=n.n(U),z=n(83276),G={};G.styleTagTransform=q(),G.setAttributes=N(),G.insert=S().bind(null,"head"),G.domAPI=B(),G.insertStyleElement=M(),P()(z.A,G),z.A&&z.A.locals&&z.A.locals;const R=(0,n(14486).A)(T,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"guest-box"},[e("h2",[t._v(t._s(t.t("core","Recommended apps")))]),t._v(" "),t.loadingApps?e("p",{staticClass:"loading text-center"},[t._v("\n\t\t"+t._s(t.t("core","Loading apps …"))+"\n\t")]):t.loadingAppsError?e("p",{staticClass:"loading-error text-center"},[t._v("\n\t\t"+t._s(t.t("core","Could not fetch list of apps from the App Store."))+"\n\t")]):t.installingApps?e("p",{staticClass:"text-center"},[t._v("\n\t\t"+t._s(t.t("core","Installing apps …"))+"\n\t")]):t._e(),t._v(" "),t._l(t.recommendedApps,(function(n){return e("div",{key:n.id,staticClass:"app"},[t.isHidden(n.id)?t._e():[e("img",{attrs:{src:t.customIcon(n.id),alt:""}}),t._v(" "),e("div",{staticClass:"info"},[e("h3",[t._v("\n\t\t\t\t\t"+t._s(t.customName(n))+"\n\t\t\t\t\t"),n.loading?e("span",{staticClass:"icon icon-loading-small-dark"}):n.active?e("span",{staticClass:"icon icon-checkmark-white"}):t._e()]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.customDescription(n.id))}}),t._v(" "),n.installationError?e("p",[e("strong",[t._v(t._s(t.t("core","App download or installation failed")))])]):n.isCompatible?n.canInstall?t._e():e("p",[e("strong",[t._v(t._s(t.t("core","Cannot install this app")))])]):e("p",[e("strong",[t._v(t._s(t.t("core","Cannot install this app because it is not compatible")))])])])]],2)})),t._v(" "),e("div",{staticClass:"dialog-row"},[t.showInstallButton?e("NcButton",{attrs:{type:"tertiary",role:"link",href:t.defaultPageUrl}},[t._v("\n\t\t\t"+t._s(t.t("core","Skip"))+"\n\t\t")]):t._e(),t._v(" "),t.showInstallButton?e("NcButton",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.installApps.apply(null,arguments)}}},[t._v("\n\t\t\t"+t._s(t.t("core","Install recommended apps"))+"\n\t\t")]):t._e()],1)],2)}),[],!1,null,"880500b4",null).exports;n.nc=btoa((0,i.do)()),a.Ay.mixin({methods:{t:o.Tl}}),(new(a.Ay.extend(R))).$mount("#recommended-apps"),s.debug("recommended apps view rendered")},83276:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(71354),o=n.n(i),a=n(76314),r=n.n(a)()(o());r.push([t.id,".dialog-row[data-v-880500b4]{display:flex;justify-content:end;margin-top:8px}p.loading[data-v-880500b4],p.loading-error[data-v-880500b4]{height:100px}p[data-v-880500b4]:last-child{margin-top:10px}.text-center[data-v-880500b4]{text-align:center}.app[data-v-880500b4]{display:flex;flex-direction:row}.app img[data-v-880500b4]{height:50px;width:50px;filter:var(--background-invert-if-dark)}.app img[data-v-880500b4],.app .info[data-v-880500b4]{padding:12px}.app .info h3[data-v-880500b4],.app .info p[data-v-880500b4]{text-align:left}.app .info h3[data-v-880500b4]{margin-top:0}.app .info h3>span.icon[data-v-880500b4]{display:inline-block}","",{version:3,sources:["webpack://./core/src/components/setup/RecommendedApps.vue"],names:[],mappings:"AACA,6BACC,YAAA,CACA,mBAAA,CACA,cAAA,CAIA,4DAEC,YAAA,CAGD,8BACC,eAAA,CAIF,8BACC,iBAAA,CAGD,sBACC,YAAA,CACA,kBAAA,CAEA,0BACC,WAAA,CACA,UAAA,CACA,uCAAA,CAGD,sDACC,YAAA,CAIA,6DACC,eAAA,CAGD,+BACC,YAAA,CAGD,yCACC,oBAAA",sourcesContent:["\n.dialog-row {\n\tdisplay: flex;\n\tjustify-content: end;\n\tmargin-top: 8px;\n}\n\np {\n\t&.loading,\n\t&.loading-error {\n\t\theight: 100px;\n\t}\n\n\t&:last-child {\n\t\tmargin-top: 10px;\n\t}\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.app {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\timg {\n\t\theight: 50px;\n\t\twidth: 50px;\n\t\tfilter: var(--background-invert-if-dark);\n\t}\n\n\timg, .info {\n\t\tpadding: 12px;\n\t}\n\n\t.info {\n\t\th3, p {\n\t\t\ttext-align: left;\n\t\t}\n\n\t\th3 {\n\t\t\tmargin-top: 0;\n\t\t}\n\n\t\th3 > span.icon {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=r}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=e,t=[],i.O=(e,n,o,a)=>{if(!n){var r=1/0;for(p=0;p<t.length;p++){n=t[p][0],o=t[p][1],a=t[p][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((t=>i.O[t](n[l])))?n.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(p--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[n,o,a]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=2696,(()=>{i.b=document.baseURI||self.location.href;var t={2696:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var o,a,r=n[0],s=n[1],l=n[2],c=0;if(r.some((e=>0!==t[e]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var p=l(i)}for(e&&e(n);c<r.length;c++)a=r[c],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(p)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0;var o=i.O(void 0,[4208],(()=>i(43474)));o=i.O(o)})();
//# sourceMappingURL=core-recommendedapps.js.map?v=88056e1a238fbf209562