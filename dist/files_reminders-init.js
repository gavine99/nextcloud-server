/*! For license information please see files_reminders-init.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={91410:(e,t,r)=>{var n=r(31346),i=r(53334);const a='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" /></svg>';var o,s=r(85471),l=r(61338),d=r(85168),c=r(18740),m=r(4604),u=r(31126),f=r(94219),p=r(80910);!function(e){e.LaterToday="later-today",e.Tomorrow="tomorrow",e.ThisWeekend="this-weekend",e.NextWeek="next-week"}(o||(o={}));const h=()=>{const e=new Date;return e.setHours(0,0,0,0),e.setDate(e.getDate()-e.getDay()+1),new Date(e)},g=e=>{new Date(e).setHours(0,0,0,0);const t=new Date(e.getFullYear(),0,1,0,0,0,0),r=(e.getTime()-t.getTime())/864e5;return Math.ceil((r+t.getDay()+1)/7)},A=e=>({[o.LaterToday]:()=>{const e=new Date,t=new Date;t.setHours(18,0,0,0);const r=new Date;return r.setHours(17,0,0,0),e>=r?null:t},[o.Tomorrow]:()=>{const e=new Date,t=new Date;return t.setDate(e.getDate()+1),t.setHours(8,0,0,0),t},[o.ThisWeekend]:()=>{const e=new Date;if([5,6,0].includes(e.getDay()))return null;const t=new Date,r=h();return t.setDate(r.getDate()+5),t.setHours(8,0,0,0),t},[o.NextWeek]:()=>{if(0===(new Date).getDay())return null;const e=new Date,t=h();return e.setDate(t.getDate()+7),e.setHours(8,0,0,0),e}}[e]()),v=e=>{let t={hour:"numeric",minute:"2-digit"};const r=new Date;var n,a;return a=r,((n=e).getDate()!==a.getDate()||n.getMonth()!==a.getMonth()||n.getFullYear()!==a.getFullYear())&&(t={...t,weekday:"short"}),((e,t)=>g(e)===g(t)&&e.getFullYear()===t.getFullYear())(e,r)||(t={...t,month:"short",day:"numeric"}),e.getFullYear()!==r.getFullYear()&&(t={...t,year:"numeric"}),e.toLocaleString((0,i.lO)(),t)},b=e=>{let t={month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"2-digit"};const r=new Date;return e.getFullYear()!==r.getFullYear()&&(t={...t,year:"numeric"}),e.toLocaleString((0,i.lO)(),t)},w=(0,r(35947).YK)().setApp("files_reminders").detectUser().build();var y=r(65043),D=r(63814);const T=async(e,t)=>{const r=(0,D.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await y.Ay.put(r,{dueDate:t.toISOString()})).data.ocs.data},C=async e=>{const t=(0,D.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await y.Ay.delete(t)).data.ocs.data},_=s.Ay.extend({name:"SetCustomReminderModal",components:{NcButton:c.A,NcDateTime:m.A,NcDateTimePickerNative:u.A,NcDialog:f.A,NcNoteCard:p.A},data:()=>({node:void 0,hasDueDate:!1,opened:!1,isValid:!0,customDueDate:null,nowDate:new Date}),computed:{fileId(){return this.node.fileid},fileName(){return this.node.basename},name(){return(0,i.Tl)("files_reminders",'Set reminder for "{fileName}"',{fileName:this.fileName})},label:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),clearAriaLabel:()=>(0,i.Tl)("files_reminders","Clear reminder")},methods:{t:i.Tl,getDateString:v,open(e){const t=e.attributes["reminder-due-date"]?new Date(e.attributes["reminder-due-date"]):null;this.node=e,this.hasDueDate=Boolean(t),this.isValid=!0,this.opened=!0,this.customDueDate=null!=t?t:(()=>{const e=new Date,t=new Date;return t.setHours(e.getHours()+2,0,0,0),t})(),this.nowDate=new Date,setTimeout((()=>{const e=document.getElementById("set-custom-reminder");e.focus(),this.hasDueDate||e.showPicker()}),300)},async setCustom(){if(this.customDueDate instanceof Date&&!isNaN(this.customDueDate))try{await T(this.fileId,this.customDueDate),s.Ay.set(this.node.attributes,"reminder-due-date",this.customDueDate.toISOString()),(0,l.Ic)("files:node:updated",this.node),(0,d.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(e){w.error("Failed to set reminder",{error:e}),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}else(0,d.Qg)((0,i.Tl)("files_reminders","Please choose a valid date & time"))},async clear(){try{await C(this.fileId),s.Ay.set(this.node.attributes,"reminder-due-date",""),(0,l.Ic)("files:node:updated",this.node),(0,d.Te)((0,i.Tl)("files_reminders",'Reminder cleared for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(e){w.error("Failed to clear reminder",{error:e}),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to clear reminder"))}},onClose(){this.opened=!1,this.$emit("close")},onInput(){const e=document.getElementById("set-custom-reminder");this.isValid=e.checkValidity()}}});var S=r(85072),L=r.n(S),N=r(97825),x=r.n(N),k=r(77659),I=r.n(k),P=r(55056),M=r.n(P),O=r(10540),F=r.n(O),H=r(41113),Y=r.n(H),B=r(25852),E={};E.styleTagTransform=Y(),E.setAttributes=M(),E.insert=I().bind(null,"head"),E.domAPI=x(),E.insertStyleElement=F(),L()(B.A,E),B.A&&B.A.locals&&B.A.locals;const R=(0,r(14486).A)(_,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.opened?t("NcDialog",{attrs:{name:e.name,"out-transition":!0,size:"small","close-on-click-outside":""},on:{closing:e.onClose},scopedSlots:e._u([{key:"actions",fn:function(){return[t("NcButton",{attrs:{type:"tertiary"},on:{click:e.onClose}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Cancel"))+"\n\t\t")]),e._v(" "),e.hasDueDate?t("NcButton",{on:{click:e.clear}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Clear reminder"))+"\n\t\t")]):e._e(),e._v(" "),t("NcButton",{attrs:{disabled:!e.isValid,type:"primary",form:"set-custom-reminder-form","native-type":"submit"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Set reminder"))+"\n\t\t")])]},proxy:!0}],null,!1,2766788902)},[t("form",{staticClass:"custom-reminder-modal",attrs:{id:"set-custom-reminder-form"},on:{submit:function(t){return t.preventDefault(),e.setCustom.apply(null,arguments)}}},[t("NcDateTimePickerNative",{attrs:{id:"set-custom-reminder",label:e.label,min:e.nowDate,required:!0,type:"datetime-local"},on:{input:e.onInput},model:{value:e.customDueDate,callback:function(t){e.customDueDate=t},expression:"customDueDate"}}),e._v(" "),e.isValid?t("NcNoteCard",{attrs:{type:"info"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","We will remind you of this file"))+"\n\t\t\t"),t("NcDateTime",{attrs:{timestamp:e.customDueDate}})],1):t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Please choose a valid date & time"))+"\n\t\t")])],1)]):e._e()}),[],!1,null,"5a1353a8",null).exports,V=s.Ay.extend(R),j=document.createElement("div");j.id="set-custom-reminder-modal",document.body.appendChild(j);const G=new V({name:"SetCustomReminderModal",el:j}),U=e=>(G.open(e),new Promise((e=>{G.$once("close",e)}))),W=new n.hY({id:"reminder-status",inline:()=>!0,displayName:()=>"",title:e=>{const t=e.at(0),r=new Date(t.attributes["reminder-due-date"]);return"".concat((0,i.Tl)("files_reminders","Reminder set")," – ").concat(b(r))},iconSvgInline:()=>a,enabled:e=>{if(1!==e.length)return!1;const t=e.at(0).attributes["reminder-due-date"];return Boolean(t)},exec:async e=>(U(e),null),order:-15}),Q=new n.hY({id:"clear-reminder",displayName:()=>(0,i.Tl)("files_reminders","Clear reminder"),title:e=>{const t=e.at(0),r=new Date(t.attributes["reminder-due-date"]);return"".concat((0,i.Tl)("files_reminders","Clear reminder")," – ").concat(b(r))},iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm-off" viewBox="0 0 24 24"><path d="M8,3.28L6.6,1.86L5.74,2.57L7.16,4M16.47,18.39C15.26,19.39 13.7,20 12,20A7,7 0 0,1 5,13C5,11.3 5.61,9.74 6.61,8.53M2.92,2.29L1.65,3.57L3,4.9L1.87,5.83L3.29,7.25L4.4,6.31L5.2,7.11C3.83,8.69 3,10.75 3,13A9,9 0 0,0 12,22C14.25,22 16.31,21.17 17.89,19.8L20.09,22L21.36,20.73L3.89,3.27L2.92,2.29M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72M12,6A7,7 0 0,1 19,13C19,13.84 18.84,14.65 18.57,15.4L20.09,16.92C20.67,15.73 21,14.41 21,13A9,9 0 0,0 12,4C10.59,4 9.27,4.33 8.08,4.91L9.6,6.43C10.35,6.16 11.16,6 12,6Z" /></svg>',enabled:e=>{if(1!==e.length)return!1;const t=e.at(0).attributes["reminder-due-date"];return Boolean(t)},async exec(e){if(e.fileid)try{return await C(e.fileid),s.Ay.set(e.attributes,"reminder-due-date",""),(0,l.Ic)("files:node:updated",e),!0}catch(e){return!1}return null},order:19}),$="set-reminder-menu",K=new n.hY({id:$,displayName:()=>(0,i.Tl)("files_reminders","Set reminder"),iconSvgInline:()=>a,enabled:()=>!0,exec:async()=>null,order:20});var Z=r(19672),q={};q.styleTagTransform=Y(),q.setAttributes=M(),q.insert=I().bind(null,"head"),q.domAPI=x(),q.insertStyleElement=F(),L()(Z.A,q),Z.A&&Z.A.locals&&Z.A.locals;const J={dateTimePreset:o.LaterToday,label:(0,i.Tl)("files_reminders","Later today"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for later today"),dateString:"",verboseDateString:""},z={dateTimePreset:o.Tomorrow,label:(0,i.Tl)("files_reminders","Tomorrow"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for tomorrow"),dateString:"",verboseDateString:""},X={dateTimePreset:o.ThisWeekend,label:(0,i.Tl)("files_reminders","This weekend"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for this weekend"),dateString:"",verboseDateString:""},ee={dateTimePreset:o.NextWeek,label:(0,i.Tl)("files_reminders","Next week"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for next week"),dateString:"",verboseDateString:""};[J,z,X,ee].forEach((e=>{const t=A(e.dateTimePreset);t&&(e.dateString=v(t),e.verboseDateString=b(t),setInterval((()=>{const t=A(e.dateTimePreset);t&&(e.dateString=v(t),e.verboseDateString=b(t))}),18e5))}));const te=[J,z,X,ee].map((e=>new n.hY({id:"set-reminder-".concat(e.dateTimePreset),displayName:()=>"".concat(e.label," – ").concat(e.dateString),title:()=>"".concat(e.ariaLabel," – ").concat(e.verboseDateString),iconSvgInline:()=>"<svg></svg>",enabled:()=>Boolean(A(e.dateTimePreset)),parent:$,async exec(t){if(!t.fileid)return w.error("Failed to set reminder, missing file id"),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to set reminder")),null;try{const r=A(e.dateTimePreset);await T(t.fileid,r),s.Ay.set(t.attributes,"reminder-due-date",r.toISOString()),(0,l.Ic)("files:node:updated",t),(0,d.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:t.basename}))}catch(e){w.error("Failed to set reminder",{error:e}),(0,d.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}return null},order:21}))),re=new n.hY({id:"set-reminder-custom",displayName:()=>(0,i.Tl)("files_reminders","Set custom reminder"),title:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-clock" viewBox="0 0 24 24"><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',enabled:()=>!0,parent:$,exec:async e=>(U(e),null),order:22});(0,n.Yc)("nc:reminder-due-date",{nc:"http://nextcloud.org/ns"}),(0,n.Gg)(W),(0,n.Gg)(Q),(0,n.Gg)(K),(0,n.Gg)(re),te.forEach((e=>(0,n.Gg)(e)))},19672:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(71354),i=r.n(n),a=r(76314),o=r.n(a)()(i());o.push([e.id,'.files-list__row-action-set-reminder-custom{margin-top:13px;position:relative}.files-list__row-action-set-reminder-custom::before{content:"";margin:3px 10px 3px 15px;border-bottom:1px solid var(--color-border-dark);cursor:default;display:flex;height:0;position:absolute;left:0;right:0;top:-10px}',"",{version:3,sources:["webpack://./apps/files_reminders/src/actions/setReminderSuggestionActions.scss"],names:[],mappings:"AAuBA,4CACC,eAAA,CACA,iBAAA,CAEA,oDACC,UAAA,CACA,wBAAA,CACA,gDAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,SAAA",sourcesContent:['/**\n * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n // TODO: remove when/if the actions API supports a separator\n // This the last preset action, so we need to add a separator\n.files-list__row-action-set-reminder-custom {\n\tmargin-top: 13px;\n\tposition: relative;\n\n\t&::before {\n\t\tcontent: "";\n\t\tmargin: 3px 10px 3px 15px;\n\t\tborder-bottom: 1px solid var(--color-border-dark);\n\t\tcursor: default;\n\t\tdisplay: flex;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: -10px;\n\t}\n}\n'],sourceRoot:""}]);const s=o},25852:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(71354),i=r.n(n),a=r(76314),o=r.n(a)()(i());o.push([e.id,".custom-reminder-modal[data-v-5a1353a8]{margin:0 12px}","",{version:3,sources:["webpack://./apps/files_reminders/src/components/SetCustomReminderModal.vue"],names:[],mappings:"AACA,wCACC,aAAA",sourcesContent:["\n.custom-reminder-modal {\n\tmargin: 0 12px;\n}\n"],sourceRoot:""}]);const s=o}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,e=[],a.O=(t,r,n,i)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],i=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{802:"092943461a858cceb8ac",9291:"077955af818a227340aa"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",a.l=(e,n,i,o)=>{if(t[e])t[e].push(n);else{var s,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==r+i){s=m;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+i),s.src=e),t[e]=[n];var u=(r,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),r)return r(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=9735,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={9735:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=i);var o=a.p+a.u(t),s=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,o=r[0],s=r[1],l=r[2],d=0;if(o.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var c=l(a)}for(t&&t(r);d<o.length;d++)i=o[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var o=a.O(void 0,[4208],(()=>a(91410)));o=a.O(o)})();
//# sourceMappingURL=files_reminders-init.js.map?v=42e3079e138157e1cea0