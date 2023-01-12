/*! For license information please see settings-vue-settings-personal-password.js.LICENSE.txt */
!function(){"use strict";var t,n={5738:function(t,n,e){var s=e(20144),o=e(13299),r=e.n(o),a=e(10861),i=e.n(a),l=e(22660),d=e.n(l),c=e(4820),u=e(79753),p=e(26932),f={name:"PasswordSection",components:{NcSettingsSection:r(),NcButton:i(),NcPasswordField:d()},data:function(){return{oldPass:"",newPass:""}},methods:{changePassword:function(){var t=this;c.default.post((0,u.generateUrl)("/settings/personal/changepassword"),{oldpassword:this.oldPass,newpassword:this.newPass}).then((function(t){return t.data})).then((function(n){"error"===n.status?(t.errorMessage=n.data.message,(0,p.x2)(n.data.message)):(0,p.s$)(n.data.message)}))}}},w=e(93379),h=e.n(w),m=e(7795),g=e.n(m),v=e(90569),P=e.n(v),b=e(3565),y=e.n(b),A=e(19216),S=e.n(A),N=e(44589),x=e.n(N),C=e(73954),O={};O.styleTagTransform=x(),O.setAttributes=y(),O.insert=P().bind(null,"head"),O.domAPI=g(),O.insertStyleElement=S(),h()(C.Z,O),C.Z&&C.Z.locals&&C.Z.locals;var T=(0,e(51900).Z)(f,(function(){var t=this,n=t._self._c;return n("NcSettingsSection",{attrs:{title:t.t("settings","Password")}},[n("form",{attrs:{id:"passwordform",method:"POST"},on:{submit:function(n){return n.preventDefault(),t.changePassword.apply(null,arguments)}}},[n("NcPasswordField",{attrs:{id:"old-pass",label:t.t("settings","Current password"),"label-visible":!0,name:"oldpassword",value:t.oldPass,autocomplete:"current-password",autocapitalize:"none",autocorrect:"off"},on:{"update:value":function(n){t.oldPass=n}}}),t._v(" "),n("NcPasswordField",{attrs:{id:"new-pass",label:t.t("settings","New password"),"label-visible":!0,value:t.newPass,maxlength:469,autocomplete:"new-password",autocapitalize:"none",autocorrect:"off","check-password-strength":!0},on:{"update:value":function(n){t.newPass=n}}}),t._v(" "),n("NcButton",{attrs:{type:"primary","native-type":"submit",disabled:0===t.newPass.length||0===t.oldPass.length}},[t._v("\n\t\t\t"+t._s(t.t("settings","Change password"))+"\n\t\t")])],1)])}),[],!1,null,null,null),F=T.exports,j=e(31352);e.nc=btoa(OC.requestToken),s.ZP.prototype.t=j.Iu,s.ZP.prototype.n=j.uN,new s.ZP({el:"#security-password",name:"main-personal-password",render:function(t){return t(F)}})},73954:function(t,n,e){var s=e(87537),o=e.n(s),r=e(23645),a=e.n(r)()(o());a.push([t.id,"\n#passwordform {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tmax-width: 400px;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/PasswordSection.vue"],names:[],mappings:";AAmGA;CACA,aAAA;CACA,sBAAA;CACA,SAAA;CACA,gBAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright 2022 Carl Schwan <carl@carlschwan.eu>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n<template>\n\t<NcSettingsSection :title="t(\'settings\', \'Password\')">\n\t\t<form id="passwordform" method="POST" @submit.prevent="changePassword">\n\t\t\t<NcPasswordField id="old-pass"\n\t\t\t\t:label="t(\'settings\', \'Current password\')"\n\t\t\t\t:label-visible="true"\n\t\t\t\tname="oldpassword"\n\t\t\t\t:value.sync="oldPass"\n\t\t\t\tautocomplete="current-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tautocorrect="off" />\n\n\t\t\t<NcPasswordField id="new-pass"\n\t\t\t\t:label="t(\'settings\', \'New password\')"\n\t\t\t\t:label-visible="true"\n\t\t\t\t:value.sync="newPass"\n\t\t\t\t:maxlength="469"\n\t\t\t\tautocomplete="new-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tautocorrect="off"\n\t\t\t\t:check-password-strength="true" />\n\n\t\t\t<NcButton type="primary"\n\t\t\t\tnative-type="submit"\n\t\t\t\t:disabled="newPass.length === 0 || oldPass.length === 0">\n\t\t\t\t{{ t(\'settings\', \'Change password\') }}\n\t\t\t</NcButton>\n\t\t</form>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport NcSettingsSection from \'@nextcloud/vue/dist/Components/NcSettingsSection.js\'\nimport NcButton from \'@nextcloud/vue/dist/Components/NcButton.js\'\nimport NcPasswordField from \'@nextcloud/vue/dist/Components/NcPasswordField.js\'\nimport axios from \'@nextcloud/axios\'\nimport { generateUrl } from \'@nextcloud/router\'\nimport { showSuccess, showError } from \'@nextcloud/dialogs\'\n\nexport default {\n\tname: \'PasswordSection\',\n\tcomponents: {\n\t\tNcSettingsSection,\n\t\tNcButton,\n\t\tNcPasswordField,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\toldPass: \'\',\n\t\t\tnewPass: \'\',\n\t\t}\n\t},\n\tmethods: {\n\t\tchangePassword() {\n\t\t\taxios.post(generateUrl(\'/settings/personal/changepassword\'), {\n\t\t\t\toldpassword: this.oldPass,\n\t\t\t\tnewpassword: this.newPass,\n\t\t\t})\n\t\t\t\t.then(res => res.data)\n\t\t\t\t.then(data => {\n\t\t\t\t\tif (data.status === \'error\') {\n\t\t\t\t\t\tthis.errorMessage = data.data.message\n\t\t\t\t\t\tshowError(data.data.message)\n\t\t\t\t\t} else {\n\t\t\t\t\t\tshowSuccess(data.data.message)\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\t},\n}\n<\/script>\n\n<style>\n\t#passwordform {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\t\tmax-width: 400px;\n\t}\n</style>\n'],sourceRoot:""}]),n.Z=a}},e={};function s(t){var o=e[t];if(void 0!==o)return o.exports;var r=e[t]={id:t,loaded:!1,exports:{}};return n[t].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=n,t=[],s.O=function(n,e,o,r){if(!e){var a=1/0;for(c=0;c<t.length;c++){e=t[c][0],o=t[c][1],r=t[c][2];for(var i=!0,l=0;l<e.length;l++)(!1&r||a>=r)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(i=!1,r<a&&(a=r));if(i){t.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[e,o,r]},s.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(n,{a:n}),n},s.d=function(t,n){for(var e in n)s.o(n,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},s.j=3574,function(){s.b=document.baseURI||self.location.href;var t={3574:0};s.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,r,a=e[0],i=e[1],l=e[2],d=0;if(a.some((function(n){return 0!==t[n]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var c=l(s)}for(n&&n(e);d<a.length;d++)r=a[d],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}(),s.nc=void 0;var o=s.O(void 0,[7874],(function(){return s(5738)}));o=s.O(o)}();
//# sourceMappingURL=settings-vue-settings-personal-password.js.map?v=d33a36cd6b7e652ae7a7