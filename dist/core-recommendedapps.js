/*! For license information please see core-recommendedapps.js.LICENSE.txt */
!function(){"use strict";var n,t={74151:function(n,t,e){var o,a=e(45994),i=e(31352),r=e(20144),c=e(17499),s=null===(o=(0,a.ts)())?(0,c.IY)().setApp("core").build():(0,c.IY)().setApp("core").setUid(o.uid).build(),l=e(4820),p=e(79753),d=e(79954),u=e(63560),f=e(10861),m=e.n(f);function g(n,t,e,o,a,i,r){try{var c=n[i](r),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(o,a)}var A={calendar:{description:(0,i.Iu)("core","Schedule work & meetings, synced with all your devices."),icon:(0,p.imagePath)("core","places/calendar.svg")},contacts:{description:(0,i.Iu)("core","Keep your colleagues and friends in one place without leaking their private info."),icon:(0,p.imagePath)("core","places/contacts.svg")},mail:{description:(0,i.Iu)("core","Simple email app nicely integrated with Files, Contacts and Calendar."),icon:(0,p.imagePath)("core","actions/mail.svg")},spreed:{description:(0,i.Iu)("core","Chatting, video calls, screensharing, online meetings and web conferencing – in your browser and with mobile apps."),icon:(0,p.imagePath)("core","apps/spreed.svg")},richdocuments:{name:"Nextcloud Office",description:(0,i.Iu)("core","Collaborative documents, spreadsheets and presentations, built on Collabora Online."),icon:(0,p.imagePath)("core","apps/richdocuments.svg")},richdocumentscode:{hidden:!0}},h=Object.keys(A),v=(0,d.j)("core","defaultPageUrl"),C={name:"RecommendedApps",components:{NcButton:m()},data:function(){return{showInstallButton:!1,installingApps:!1,loadingApps:!0,loadingAppsError:!1,apps:[],defaultPageUrl:v}},computed:{recommendedApps:function(){return this.apps.filter((function(n){return h.includes(n.id)}))}},mounted:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.default.get((0,p.generateUrl)("settings/apps/list"));case 3:e=n.sent,o=e.data,s.info("".concat(o.apps.length," apps fetched")),t.apps=o.apps.map((function(n){return Object.assign(n,{loading:!1,installationError:!1})})),s.debug("".concat(t.recommendedApps.length," recommended apps found"),{apps:t.recommendedApps}),t.showInstallButton=!0,n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),s.error("could not fetch app list",{error:n.t0}),t.loadingAppsError=!0;case 15:return n.prev=15,t.loadingApps=!1,n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})),function(){var t=this,e=arguments;return new Promise((function(o,a){var i=n.apply(t,e);function r(n){g(i,o,a,r,c,"next",n)}function c(n){g(i,o,a,r,c,"throw",n)}r(void 0)}))})()},methods:{installApps:function(){this.showInstallButton=!1,this.installingApps=!0;var n=(0,u.Z)(1),t=this.recommendedApps.filter((function(n){return!n.active&&n.isCompatible&&n.canInstall})).map((function(t){return n((function(){return s.info("installing ".concat(t.id)),t.loading=!0,l.default.post((0,p.generateUrl)("settings/apps/enable"),{appIds:[t.id],groups:[]}).catch((function(n){s.error("could not install ".concat(t.id),{error:n}),t.installationError=!0})).then((function(){s.info("installed ".concat(t.id)),t.loading=!1}))}))}));s.debug("installing ".concat(t.length," recommended apps")),Promise.all(t).then((function(){s.info("all recommended apps installed, redirecting …"),window.location=v})).catch((function(n){return s.error("could not install recommended apps",{error:n})}))},customIcon:function(n){return n in A&&A[n].icon?A[n].icon:(s.warn("no app icon for recommended app ".concat(n)),(0,p.imagePath)("core","places/default-app-icon.svg"))},customName:function(n){return n.id in A&&A[n.id].name||n.name},customDescription:function(n){return n in A?A[n].description:(s.warn("no app description for recommended app ".concat(n)),"")},isHidden:function(n){return n in A&&!!A[n].hidden},goTo:function(n){window.location.href=n}}},b=C,x=e(93379),w=e.n(x),_=e(7795),y=e.n(_),k=e(90569),I=e.n(k),P=e(3565),B=e.n(P),O=e(19216),j=e.n(O),D=e(44589),E=e.n(D),S=e(47041),T={};T.styleTagTransform=E(),T.setAttributes=B(),T.insert=I().bind(null,"head"),T.domAPI=y(),T.insertStyleElement=j(),w()(S.Z,T),S.Z&&S.Z.locals&&S.Z.locals;var U=(0,e(51900).Z)(b,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"guest-box"},[t("h2",[n._v(n._s(n.t("core","Recommended apps")))]),n._v(" "),n.loadingApps?t("p",{staticClass:"loading text-center"},[n._v("\n\t\t"+n._s(n.t("core","Loading apps …"))+"\n\t")]):n.loadingAppsError?t("p",{staticClass:"loading-error text-center"},[n._v("\n\t\t"+n._s(n.t("core","Could not fetch list of apps from the App Store."))+"\n\t")]):n.installingApps?t("p",{staticClass:"text-center"},[n._v("\n\t\t"+n._s(n.t("core","Installing apps …"))+"\n\t")]):n._e(),n._v(" "),n._l(n.recommendedApps,(function(e){return t("div",{key:e.id,staticClass:"app"},[n.isHidden(e.id)?n._e():[t("img",{attrs:{src:n.customIcon(e.id),alt:""}}),n._v(" "),t("div",{staticClass:"info"},[t("h3",[n._v("\n\t\t\t\t\t"+n._s(n.customName(e))+"\n\t\t\t\t\t"),e.loading?t("span",{staticClass:"icon icon-loading-small-dark"}):e.active?t("span",{staticClass:"icon icon-checkmark-white"}):n._e()]),n._v(" "),t("p",{domProps:{innerHTML:n._s(n.customDescription(e.id))}}),n._v(" "),e.installationError?t("p",[t("strong",[n._v(n._s(n.t("core","App download or installation failed")))])]):e.isCompatible?e.canInstall?n._e():t("p",[t("strong",[n._v(n._s(n.t("core","Cannot install this app")))])]):t("p",[t("strong",[n._v(n._s(n.t("core","Cannot install this app because it is not compatible")))])])])]],2)})),n._v(" "),t("div",{staticClass:"dialog-row"},[n.showInstallButton?t("NcButton",{attrs:{type:"tertiary",role:"link",href:"defaultPageUrl"},on:{click:function(t){return n.goTo(n.defaultPageUrl)}}},[n._v("\n\t\t\t"+n._s(n.t("core","Skip"))+"\n\t\t")]):n._e(),n._v(" "),n.showInstallButton?t("NcButton",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.installApps.apply(null,arguments)}}},[n._v("\n\t\t\t"+n._s(n.t("core","Install recommended apps"))+"\n\t\t")]):n._e()],1)],2)}),[],!1,null,"e55e3a9c",null),Z=U.exports;e.nc=btoa((0,a.IH)()),r.ZP.mixin({methods:{t:i.Iu}}),(new(r.ZP.extend(Z))).$mount("#recommended-apps"),s.debug("recommended apps view rendered")},47041:function(n,t,e){var o=e(87537),a=e.n(o),i=e(23645),r=e.n(i)()(a());r.push([n.id,".dialog-row[data-v-e55e3a9c]{display:flex;justify-content:end;margin-top:8px}p.loading[data-v-e55e3a9c],p.loading-error[data-v-e55e3a9c]{height:100px}p[data-v-e55e3a9c]:last-child{margin-top:10px}.text-center[data-v-e55e3a9c]{text-align:center}.app[data-v-e55e3a9c]{display:flex;flex-direction:row}.app img[data-v-e55e3a9c]{height:50px;width:50px;filter:var(--background-invert-if-dark)}.app img[data-v-e55e3a9c],.app .info[data-v-e55e3a9c]{padding:12px}.app .info h3[data-v-e55e3a9c],.app .info p[data-v-e55e3a9c]{text-align:left}.app .info h3[data-v-e55e3a9c]{margin-top:0}.app .info h3>span.icon[data-v-e55e3a9c]{display:inline-block}","",{version:3,sources:["webpack://./core/src/components/setup/RecommendedApps.vue"],names:[],mappings:"AACA,6BACC,YAAA,CACA,mBAAA,CACA,cAAA,CAIA,4DAEC,YAAA,CAGD,8BACC,eAAA,CAIF,8BACC,iBAAA,CAGD,sBACC,YAAA,CACA,kBAAA,CAEA,0BACC,WAAA,CACA,UAAA,CACA,uCAAA,CAGD,sDACC,YAAA,CAIA,6DACC,eAAA,CAGD,+BACC,YAAA,CAGD,yCACC,oBAAA",sourcesContent:["\n.dialog-row {\n\tdisplay: flex;\n\tjustify-content: end;\n\tmargin-top: 8px;\n}\n\np {\n\t&.loading,\n\t&.loading-error {\n\t\theight: 100px;\n\t}\n\n\t&:last-child {\n\t\tmargin-top: 10px;\n\t}\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.app {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\timg {\n\t\theight: 50px;\n\t\twidth: 50px;\n\t\tfilter: var(--background-invert-if-dark);\n\t}\n\n\timg, .info {\n\t\tpadding: 12px;\n\t}\n\n\t.info {\n\t\th3, p {\n\t\t\ttext-align: left;\n\t\t}\n\n\t\th3 {\n\t\t\tmargin-top: 0;\n\t\t}\n\n\t\th3 > span.icon {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),t.Z=r}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=t,n=[],o.O=function(t,e,a,i){if(!e){var r=1/0;for(p=0;p<n.length;p++){e=n[p][0],a=n[p][1],i=n[p][2];for(var c=!0,s=0;s<e.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((function(n){return o.O[n](e[s])}))?e.splice(s--,1):(c=!1,i<r&&(r=i));if(c){n.splice(p--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[e,a,i]},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,{a:t}),t},o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},o.j=1033,function(){o.b=document.baseURI||self.location.href;var n={1033:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var a,i,r=e[0],c=e[1],s=e[2],l=0;if(r.some((function(t){return 0!==n[t]}))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var p=s(o)}for(t&&t(e);l<r.length;l++)i=r[l],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(p)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}(),o.nc=void 0;var a=o.O(void 0,[7874],(function(){return o(74151)}));a=o.O(a)}();
//# sourceMappingURL=core-recommendedapps.js.map?v=23fda7df781ae16b57e1