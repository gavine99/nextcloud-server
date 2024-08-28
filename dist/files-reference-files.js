/*! For license information please see files-reference-files.js.LICENSE.txt */
(()=>{"use strict";var e,i,n,r={84214:(e,i,n)=>{var r=n(85471),l=n(53334),a=(n(57004),n(40708)),o=(n(37382),n(63814)),s=n(21777),c=n(85168);n(31346);const d={name:"FileIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var A=n(14486);const p=(0,A.A)(d,(function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon file-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports;var f=n(11358),u=n(43627),v=n.n(u),h=n(96763);const m=(0,r.pM)({name:"ReferenceFileWidget",components:{FolderIcon:f.A,FileIcon:p},props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0}},data:()=>({previewUrl:null,failedViewer:!1}),computed:{availableViewerHandlers(){var e;return(null===(e=window)||void 0===e||null===(e=e.OCA)||void 0===e||null===(e=e.Viewer)||void 0===e?void 0:e.availableHandlers)||[]},viewerHandler(){return this.availableViewerHandlers.find((e=>e.mimes.includes(this.richObject.mimetype)))},viewerFile(){var e;const t=(0,o.dC)("dav/files/".concat(null===(e=(0,s.HW)())||void 0===e?void 0:e.uid,"/").concat(this.richObject.path)).replace(/\/\/$/,"/");return{filename:this.richObject.path,basename:this.richObject.name,lastmod:new Date(1e3*this.richObject.mtime),size:this.richObject.size,type:"file",mime:this.richObject.mimetype,fileid:this.richObject.id,failed:!1,loaded:!0,davPath:t,source:t}},fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return v().dirname(this.richObject.path)},filePreviewStyle(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{}},filePreviewClass(){return this.previewUrl?"widget-file__image--preview":"widget-file__image--icon"},isFolder(){return"httpd/unix-directory"===this.richObject.mimetype}},mounted(){if(this.richObject["preview-available"]){const e=(0,o.Jv)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),t=new Image;t.onload=()=>{this.previewUrl=e},t.onerror=e=>{h.error("could not load recommendation preview",e)},t.src=e}},methods:{navigate(e){var t,i;if(this.isFolder)e.stopPropagation(),e.preventDefault(),this.openFilePicker();else if(-1!==(null===(t=window)||void 0===t||null===(t=t.OCA)||void 0===t||null===(t=t.Viewer)||void 0===t?void 0:t.mimetypes.indexOf(this.richObject.mimetype))&&(null===(i=window)||void 0===i||null===(i=i.OCA)||void 0===i||null===(i=i.Viewer)||void 0===i||!i.file)){var n;e.stopPropagation(),e.preventDefault(),null===(n=window)||void 0===n||null===(n=n.OCA)||void 0===n||null===(n=n.Viewer)||void 0===n||n.open({path:this.richObject.path})}},openFilePicker(){(0,c.a1)(t("settings","Your files")).allowDirectories(!0).setMultiSelect(!1).addButton({id:"open",label:this.t("settings","Open in files"),callback(e){e[0]&&window.open((0,o.Jv)("/f/{fileid}",{fileid:e[0].fileid}))},type:"primary"}).disableNavigation().startAt(this.richObject.path).build().pick()}}});var w=n(85072),C=n.n(w),g=n(97825),b=n.n(g),_=n(77659),y=n.n(_),x=n(55056),k=n.n(x),O=n(10540),j=n.n(O),F=n(41113),P=n.n(F),I=n(71699),B={};B.styleTagTransform=P(),B.setAttributes=k(),B.insert=y().bind(null,"head"),B.domAPI=b(),B.insertStyleElement=j(),C()(I.A,B),I.A&&I.A.locals&&I.A.locals;const S=(0,A.A)(m,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.accessible?e.interactive&&e.viewerHandler&&!e.failedViewer?t(e.viewerHandler.component,e._b({tag:"component",staticClass:"widget-file widget-file--interactive",attrs:{active:!1,"can-swipe":!1,"can-zoom":!1,"is-embedded":!0,"file-list":[e.viewerFile],"is-full-screen":!1,"is-sidebar-shown":!1},on:{error:function(t){e.failedViewer=!0}}},"component",e.viewerFile,!1)):t("a",{staticClass:"widget-file widget-file--link",attrs:{href:e.richObject.link,target:"_blank"},on:{click:e.navigate}},[t("span",{staticClass:"widget-file__image",class:e.filePreviewClass,style:e.filePreviewStyle},[e.previewUrl?e._e():[e.isFolder?t("FolderIcon",{attrs:{size:88,"fill-color":"var(--color-primary-element)"}}):t("FileIcon",{attrs:{size:88}})]],2),e._v(" "),t("span",{staticClass:"widget-file__details"},[t("p",{staticClass:"widget-file__title"},[e._v(e._s(e.richObject.name))]),e._v(" "),t("p",{staticClass:"widget-file__description"},[e._v(e._s(e.fileSize)),t("br"),e._v(e._s(e.fileMtime))]),e._v(" "),t("p",{staticClass:"widget-file__link"},[e._v(e._s(e.filePath))])])]):t("div",{staticClass:"widget-file widget-file--no-access"},[t("span",{staticClass:"widget-file__image widget-file__image--icon"},[e.isFolder?t("FolderIcon",{attrs:{size:88}}):t("FileIcon",{attrs:{size:88}})],1),e._v(" "),t("span",{staticClass:"widget-file__details"},[t("p",{staticClass:"widget-file__title"},[e._v("\n\t\t\t"+e._s(e.t("files","File cannot be accessed"))+"\n\t\t")]),e._v(" "),t("p",{staticClass:"widget-file__description"},[e._v("\n\t\t\t"+e._s(e.t("files","The file could not be found or you do not have permissions to view it. Ask the sender to share it."))+"\n\t\t")])])])}),[],!1,null,"182c70c3",null).exports;var T=n(11873);const z=(0,r.pM)({name:"FileReferencePickerElement",components:{FilePicker:T.FilePickerVue},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},computed:{containerId:()=>"filepicker-".concat(Math.random().toString(36).slice(7)),filepickerOptions(){return{allowPickDirectory:!1,buttons:this.buttonFactory,container:"#".concat(this.containerId),multiselect:!1,name:(0,l.Tl)("files","Select file or folder to link to")}}},methods:{t:l.Tl,buttonFactory(e){const t=[];return 0===e.length?t.push({label:(0,l.Tl)("files","Choose file"),type:"tertiary",callback:this.onClose}):t.push({label:(0,l.Tl)("files","Choose {file}",{file:e[0].basename}),type:"primary",callback:this.onClose}),t},onClose(e){void 0===e||0===e.length?this.$emit("cancel"):this.onSubmit(e[0])},onSubmit(e){const t=new URL(window.location.href);t.pathname=(0,o.Jv)("/f/{fileId}",{fileId:e.fileid}),t.search="",this.$emit("submit",t.href)}}}),V=(0,A.A)(z,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{attrs:{id:e.containerId}},[t("FilePicker",e._b({on:{close:e.onClose}},"FilePicker",e.filepickerOptions,!1))],1)}),[],!1,null,null,null).exports;r.Ay.mixin({methods:{t:l.Tl}}),(0,a.r)("file",((e,t)=>{let{richObjectType:i,richObject:n,accessible:l,interactive:a}=t;new(r.Ay.extend(S))({propsData:{richObjectType:i,richObject:n,accessible:l,interactive:a}}).$mount(e)}),(()=>{}),{hasInteractiveView:!0}),(0,a.b)("files",((e,t)=>{let{providerId:i,accessible:n}=t;const l=new(r.Ay.extend(V))({propsData:{providerId:i,accessible:n}}).$mount(e);return new a.N(l.$el,l)}),((e,t)=>{t.object.$destroy()}))},71699:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(71354),r=i.n(n),l=i(76314),a=i.n(l)()(r());a.push([e.id,".widget-file[data-v-182c70c3]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important;padding:0 !important}.widget-file__image[data-v-182c70c3]{width:30%;min-width:160px;max-width:320px;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file__image--icon[data-v-182c70c3]{min-width:88px;max-width:88px;padding:12px;padding-right:0;display:flex;align-items:center;justify-content:center}.widget-file__title[data-v-182c70c3]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file__details[data-v-182c70c3]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file__details p[data-v-182c70c3]{margin:0;padding:0}.widget-file__description[data-v-182c70c3]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-182c70c3]{color:var(--color-text-maxcontrast)}.widget-file--interactive[data-v-182c70c3]{position:relative;height:400px;max-height:50vh;margin:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CACA,oBAAA,CAEA,qCACC,SAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,2CACC,cAAA,CACA,cAAA,CACA,YAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAID,oCACC,mCAAA,CAGD,2CACC,iBAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA",sourcesContent:["\n.widget-file {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tcolor: var(--color-main-text) !important;\n\ttext-decoration: none !important;\n\tpadding: 0 !important;\n\n\t&__image {\n\t\twidth: 30%;\n\t\tmin-width: 160px;\n\t\tmax-width: 320px;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\n\t\t&--icon {\n\t\t\tmin-width: 88px;\n\t\t\tmax-width: 88px;\n\t\t\tpadding: 12px;\n\t\t\tpadding-right: 0;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\tfont-weight: bold;\n\t}\n\n\t&__details {\n\t\tpadding: 12px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tp {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t&__description {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 3;\n\t\tline-clamp: 3;\n\t\t-webkit-box-orient: vertical;\n\t}\n\n\t// No preview, standard link to ressource\n\t&--link {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&--interactive {\n\t\tposition: relative;\n\t\theight: 400px;\n\t\tmax-height: 50vh;\n\t\tmargin: 0;\n\t}\n}\n"],sourceRoot:""}]);const o=a},11873:(e,t,i)=>{i.d(t,{FilePickerVue:()=>n});const n=(0,i(85471).$V)((()=>Promise.all([i.e(4208),i.e(9480)]).then(i.bind(i,9730))))}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var i=l[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=r,e=[],a.O=(t,i,n,r)=>{if(!i){var l=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],r=e[d][2];for(var o=!0,s=0;s<i.length;s++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](i[s])))?i.splice(s--,1):(o=!1,r<l&&(l=r));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{4254:"5c2324570f66dff0c8a1",9480:"dfe0a962e5665010f53b"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},n="nextcloud:",a.l=(e,t,r,l)=>{if(i[e])i[e].push(t);else{var o,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var A=c[d];if(A.getAttribute("src")==e||A.getAttribute("data-webpack")==n+r){o=A;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",n+r),o.src=e),i[e]=[t];var p=(t,n)=>{o.onerror=o.onload=null,clearTimeout(f);var r=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),s&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=54,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={54:0,4254:0};a.f.j=(t,i)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var l=a.p+a.u(t),o=new Error;a.l(l,(i=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",o.name="ChunkLoadError",o.type=r,o.request=l,n[1](o)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,l=i[0],o=i[1],s=i[2],c=0;if(l.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(s)var d=s(a)}for(t&&t(i);c<l.length;c++)r=l[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),a.nc=void 0;var o=a.O(void 0,[4208],(()=>a(84214)));o=a.O(o)})();
//# sourceMappingURL=files-reference-files.js.map?v=2aa34d37b179d2a0a08b