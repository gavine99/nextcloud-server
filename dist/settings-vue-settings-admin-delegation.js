(()=>{"use strict";var e,r,n,s={78628:(e,r,n)=>{var s=n(85471),o=n(67607),i=n(63814),a=n(65043),l=n(85168);const c=(0,n(35947).YK)().setApp("settings").detectUser().build(),u={name:"GroupSelect",components:{NcSelect:o.A},props:{availableGroups:{type:Array,default:()=>[]},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data(){return{selected:this.authorizedGroups.filter((e=>e.class===this.setting.class)).map((e=>this.availableGroups.find((t=>t.gid===e.group_id)))).filter((e=>void 0!==e))}},watch:{selected(){this.saveGroups()}},methods:{async saveGroups(){const e={newGroups:this.selected,class:this.setting.class};try{await a.Ay.post((0,i.Jv)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",e)}catch(e){(0,l.Qg)(t("settings","Unable to modify setting")),c.error("Unable to modify setting",e)}}}};var d=n(85072),p=n.n(d),g=n(97825),v=n.n(g),h=n(77659),f=n.n(h),b=n(55056),m=n.n(b),A=n(10540),y=n.n(A),C=n(41113),S=n.n(C),w=n(22530),k={};k.styleTagTransform=S(),k.setAttributes=m(),k.insert=f().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=y(),p()(w.A,k),w.A&&w.A.locals&&w.A.locals;var x=n(14486);const O=(0,x.A)(u,(function(){var e=this;return(0,e._self._c)("NcSelect",{staticClass:"group-select",attrs:{"input-id":e.setting.id,placeholder:e.t("settings","None"),label:"displayName",options:e.availableGroups,multiple:!0,"close-on-select":!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}),[],!1,null,null,null).exports;var G=n(88837),j=n(32981);const T={name:"AdminDelegating",components:{GroupSelect:O,NcSettingsSection:G.A},data:()=>({availableSettings:(0,j.C)("settings","available-settings"),availableGroups:(0,j.C)("settings","available-groups"),authorizedGroups:(0,j.C)("settings","authorized-groups"),authorizedSettingsDocLink:(0,j.C)("settings","authorized-settings-doc-link")})};var _=n(41165),z={};z.styleTagTransform=S(),z.setAttributes=m(),z.insert=f().bind(null,"head"),z.domAPI=v(),z.insertStyleElement=y(),p()(_.A,z),_.A&&_.A.locals&&_.A.locals;const N=(0,x.A)(T,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Administration privileges"),description:e.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":e.authorizedSettingsDocLink}},[t("div",{staticClass:"setting-list"},e._l(e.availableSettings,(function(r){return t("div",{key:r.class},[t("label",{attrs:{for:r.id}},[e._v(e._s(r.sectionName))]),e._v(" "),t("GroupSelect",{attrs:{"available-groups":e.availableGroups,"authorized-groups":e.authorizedGroups,setting:r}})],1)})),0)])}),[],!1,null,"9254bf50",null).exports;s.Ay.prototype.OC=OC,s.Ay.prototype.t=t,(new(s.Ay.extend(N))).$mount("#admin-right-sub-granting")},41165:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(71354),s=r.n(n),o=r(76314),i=r.n(o)()(s());i.push([e.id,"label[data-v-9254bf50]{display:block;font-size:16px;margin:12px 0;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegating.vue"],names:[],mappings:"AACA,uBACC,aAAA,CACA,cAAA,CACA,aAAA,CACA,6BAAA",sourcesContent:["\nlabel {\n\tdisplay: block;\n\tfont-size: 16px;\n\tmargin: 12px 0;\n\tcolor: var(--color-text-light);\n}\n"],sourceRoot:""}]);const a=i},22530:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(71354),s=r.n(n),o=r(76314),i=r.n(o)()(s());i.push([e.id,".group-select{width:100%}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AACA,cACC,UAAA",sourcesContent:["\n.group-select {\n\twidth: 100%;\n}\n"],sourceRoot:""}]);const a=i}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return s[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=s,e=[],i.O=(t,r,n,s)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"-"+e+".js?v="+{802:"3e355e3181e29540e74c",9291:"077955af818a227340aa"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="nextcloud:",i.l=(e,t,s,o)=>{if(r[e])r[e].push(t);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+s){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",n+s),a.src=e),r[e]=[t];var p=(t,n)=>{a.onerror=a.onload=null,clearTimeout(g);var s=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((e=>e(n))),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=9464,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={9464:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise(((r,s)=>n=e[t]=[r,s]));r.push(n[2]=s);var o=i.p+i.u(t),a=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,n[1](a)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,o=r[0],a=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(l)var u=l(i)}for(t&&t(r);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var a=i.O(void 0,[4208],(()=>i(78628)));a=i.O(a)})();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=e802335e01a3ad18b04d