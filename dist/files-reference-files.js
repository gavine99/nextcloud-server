(()=>{"use strict";var e,i,r,n={37308:(e,i,r)=>{var n=r(85471),s=r(53334),o=(r(63431),r(40708)),a=(r(37382),r(63814)),l=r(21777),d=r(85168);r(35810);const c={name:"FileIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var p=r(14486);const u=(0,p.A)(c,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon file-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var h=r(11358),f=r(43627),m=r.n(f),A=r(96763);const E=(0,n.pM)({name:"ReferenceFileWidget",components:{FolderIcon:h.A,FileIcon:u},props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0}},data:()=>({previewUrl:null,failedViewer:!1}),computed:{availableViewerHandlers:()=>window?.OCA?.Viewer?.availableHandlers||[],viewerHandler(){return this.availableViewerHandlers.find((t=>t.mimes.includes(this.richObject.mimetype)))},viewerFile(){const t=(0,a.dC)(`dav/files/${(0,l.HW)()?.uid}/${this.richObject.path}`).replace(/\/\/$/,"/");return{filename:this.richObject.path,basename:this.richObject.name,lastmod:new Date(1e3*this.richObject.mtime),size:this.richObject.size,type:"file",mime:this.richObject.mimetype,fileid:this.richObject.id,failed:!1,loaded:!0,davPath:t,source:t}},fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return m().dirname(this.richObject.path)},filePreviewStyle(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{}},filePreviewClass(){return this.previewUrl?"widget-file__image--preview":"widget-file__image--icon"},isFolder(){return"httpd/unix-directory"===this.richObject.mimetype}},mounted(){if(this.richObject["preview-available"]){const t=(0,a.Jv)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),e=new Image;e.onload=()=>{this.previewUrl=t},e.onerror=t=>{A.error("could not load recommendation preview",t)},e.src=t}},methods:{navigate(t){this.isFolder?(t.stopPropagation(),t.preventDefault(),this.openFilePicker()):-1===window?.OCA?.Viewer?.mimetypes.indexOf(this.richObject.mimetype)||window?.OCA?.Viewer?.file||(t.stopPropagation(),t.preventDefault(),window?.OCA?.Viewer?.open({path:this.richObject.path}))},openFilePicker(){(0,d.a1)(t("settings","Your files")).allowDirectories(!0).setMultiSelect(!1).addButton({id:"open",label:this.t("settings","Open in files"),callback(t){t[0]&&window.open((0,a.Jv)("/f/{fileid}",{fileid:t[0].fileid}))},type:"primary"}).disableNavigation().startAt(this.richObject.path).build().pick()}}});var g=r(85072),b=r.n(g),v=r(97825),w=r.n(v),N=r(77659),I=r.n(N),O=r(55056),C=r.n(O),y=r(10540),R=r.n(y),_=r(41113),x=r.n(_),L=r(10857),$={};$.styleTagTransform=x(),$.setAttributes=C(),$.insert=I().bind(null,"head"),$.domAPI=w(),$.insertStyleElement=R(),b()(L.A,$),L.A&&L.A.locals&&L.A.locals;const T=(0,p.A)(E,(function(){var t=this,e=t._self._c;return t._self._setupProxy,t.accessible?t.interactive&&t.viewerHandler&&!t.failedViewer?e(t.viewerHandler.component,t._b({tag:"component",staticClass:"widget-file widget-file--interactive",attrs:{active:!1,"can-swipe":!1,"can-zoom":!1,"is-embedded":!0,"file-list":[t.viewerFile],"is-full-screen":!1,"is-sidebar-shown":!1},on:{error:function(e){t.failedViewer=!0}}},"component",t.viewerFile,!1)):e("a",{staticClass:"widget-file widget-file--link",attrs:{href:t.richObject.link,target:"_blank"},on:{click:t.navigate}},[e("span",{staticClass:"widget-file__image",class:t.filePreviewClass,style:t.filePreviewStyle},[t.previewUrl?t._e():[t.isFolder?e("FolderIcon",{attrs:{size:88,"fill-color":"var(--color-primary-element)"}}):e("FileIcon",{attrs:{size:88}})]],2),t._v(" "),e("span",{staticClass:"widget-file__details"},[e("p",{staticClass:"widget-file__title"},[t._v(t._s(t.richObject.name))]),t._v(" "),e("p",{staticClass:"widget-file__description"},[t._v(t._s(t.fileSize)),e("br"),t._v(t._s(t.fileMtime))]),t._v(" "),e("p",{staticClass:"widget-file__link"},[t._v(t._s(t.filePath))])])]):e("div",{staticClass:"widget-file widget-file--no-access"},[e("span",{staticClass:"widget-file__image widget-file__image--icon"},[t.isFolder?e("FolderIcon",{attrs:{size:88}}):e("FileIcon",{attrs:{size:88}})],1),t._v(" "),e("span",{staticClass:"widget-file__details"},[e("p",{staticClass:"widget-file__title"},[t._v("\n\t\t\t"+t._s(t.t("files","File cannot be accessed"))+"\n\t\t")]),t._v(" "),e("p",{staticClass:"widget-file__description"},[t._v("\n\t\t\t"+t._s(t.t("files","The file could not be found or you do not have permissions to view it. Ask the sender to share it."))+"\n\t\t")])])])}),[],!1,null,"5a7c7442",null).exports;var P=r(29291);const F=(0,n.pM)({name:"FileReferencePickerElement",components:{FilePicker:P.FilePickerVue},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},computed:{containerId:()=>`filepicker-${Math.random().toString(36).slice(7)}`,filepickerOptions(){return{allowPickDirectory:!1,buttons:this.buttonFactory,container:`#${this.containerId}`,multiselect:!1,name:(0,s.Tl)("files","Select file or folder to link to")}}},methods:{t:s.Tl,buttonFactory(t){const e=[];return 0===t.length?e.push({label:(0,s.Tl)("files","Choose file"),type:"tertiary",callback:this.onClose}):e.push({label:(0,s.Tl)("files","Choose {file}",{file:t[0].basename}),type:"primary",callback:this.onClose}),e},onClose(t){void 0===t||0===t.length?this.$emit("cancel"):this.onSubmit(t[0])},onSubmit(t){const e=new URL(window.location.href);e.pathname=(0,a.Jv)("/f/{fileId}",{fileId:t.fileid}),e.search="",this.$emit("submit",e.href)}}}),S=(0,p.A)(F,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{attrs:{id:t.containerId}},[e("FilePicker",t._b({on:{close:t.onClose}},"FilePicker",t.filepickerOptions,!1))],1)}),[],!1,null,null,null).exports;n.Ay.mixin({methods:{t:s.Tl}}),(0,o.r)("file",((t,e)=>{let{richObjectType:i,richObject:r,accessible:s,interactive:o}=e;new(n.Ay.extend(T))({propsData:{richObjectType:i,richObject:r,accessible:s,interactive:o}}).$mount(t)}),(()=>{}),{hasInteractiveView:!0}),(0,o.b)("files",((t,e)=>{let{providerId:i,accessible:r}=e;const s=new(n.Ay.extend(S))({propsData:{providerId:i,accessible:r}}).$mount(t);return new o.N(s.$el,s)}),((t,e)=>{e.object.$destroy()}))},10857:(t,e,i)=>{i.d(e,{A:()=>a});var r=i(71354),n=i.n(r),s=i(76314),o=i.n(s)()(n());o.push([t.id,".widget-file[data-v-5a7c7442]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important;padding:0 !important}.widget-file__image[data-v-5a7c7442]{width:30%;min-width:160px;max-width:320px;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file__image--icon[data-v-5a7c7442]{min-width:88px;max-width:88px;padding:12px;padding-right:0;display:flex;align-items:center;justify-content:center}.widget-file__title[data-v-5a7c7442]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file__details[data-v-5a7c7442]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file__details p[data-v-5a7c7442]{margin:0;padding:0}.widget-file__description[data-v-5a7c7442]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-5a7c7442]{color:var(--color-text-maxcontrast)}.widget-file--interactive[data-v-5a7c7442]{position:relative;height:400px;max-height:50vh;margin:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CACA,oBAAA,CAEA,qCACC,SAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,2CACC,cAAA,CACA,cAAA,CACA,YAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAID,oCACC,mCAAA,CAGD,2CACC,iBAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA",sourcesContent:["\n.widget-file {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tcolor: var(--color-main-text) !important;\n\ttext-decoration: none !important;\n\tpadding: 0 !important;\n\n\t&__image {\n\t\twidth: 30%;\n\t\tmin-width: 160px;\n\t\tmax-width: 320px;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\n\t\t&--icon {\n\t\t\tmin-width: 88px;\n\t\t\tmax-width: 88px;\n\t\t\tpadding: 12px;\n\t\t\tpadding-right: 0;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\tfont-weight: bold;\n\t}\n\n\t&__details {\n\t\tpadding: 12px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tp {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t&__description {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 3;\n\t\tline-clamp: 3;\n\t\t-webkit-box-orient: vertical;\n\t}\n\n\t// No preview, standard link to ressource\n\t&--link {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&--interactive {\n\t\tposition: relative;\n\t\theight: 400px;\n\t\tmax-height: 50vh;\n\t\tmargin: 0;\n\t}\n}\n"],sourceRoot:""}]);const a=o},29291:(t,e,i)=>{i.d(e,{FilePickerVue:()=>r});const r=(0,i(85471).$V)((()=>Promise.all([i.e(4208),i.e(802)]).then(i.bind(i,15580))))},35810:(t,e,i)=>{i.d(e,{Al:()=>F,H4:()=>T,Q$:()=>P,R3:()=>N,VL:()=>w,lJ:()=>L,pt:()=>I,ur:()=>M,v7:()=>j});var r=i(35947),n=i(21777),s=i(43627),o=i(71225),a=i(63814),l=i(36117),d=i(44719),c=i(82680),p=(i(87485),i(53334)),u=i(380),h=i(65606),f=i(96763);const m=(0,r.YK)().setApp("@nextcloud/files").detectUser().build();var A=(t=>(t[t.NONE=0]="NONE",t[t.CREATE=4]="CREATE",t[t.READ=1]="READ",t[t.UPDATE=2]="UPDATE",t[t.DELETE=8]="DELETE",t[t.SHARE=16]="SHARE",t[t.ALL=31]="ALL",t))(A||{});const E=["d:getcontentlength","d:getcontenttype","d:getetag","d:getlastmodified","d:creationdate","d:displayname","d:quota-available-bytes","d:resourcetype","nc:has-preview","nc:is-encrypted","nc:mount-type","oc:comments-unread","oc:favorite","oc:fileid","oc:owner-display-name","oc:owner-id","oc:permissions","oc:size"],g={d:"DAV:",nc:"http://nextcloud.org/ns",oc:"http://owncloud.org/ns",ocs:"http://open-collaboration-services.org/ns"},b=function(){return void 0===window._nc_dav_properties&&(window._nc_dav_properties=[...E]),window._nc_dav_properties.map((t=>`<${t} />`)).join(" ")},v=function(){return void 0===window._nc_dav_namespaces&&(window._nc_dav_namespaces={...g}),Object.keys(window._nc_dav_namespaces).map((t=>`xmlns:${t}="${window._nc_dav_namespaces?.[t]}"`)).join(" ")},w=function(){return`<?xml version="1.0"?>\n\t\t<d:propfind ${v()}>\n\t\t\t<d:prop>\n\t\t\t\t${b()}\n\t\t\t</d:prop>\n\t\t</d:propfind>`},N=function(t){return`<?xml version="1.0" encoding="UTF-8"?>\n<d:searchrequest ${v()}\n\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns">\n\t<d:basicsearch>\n\t\t<d:select>\n\t\t\t<d:prop>\n\t\t\t\t${b()}\n\t\t\t</d:prop>\n\t\t</d:select>\n\t\t<d:from>\n\t\t\t<d:scope>\n\t\t\t\t<d:href>/files/${(0,n.HW)()?.uid}/</d:href>\n\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t</d:scope>\n\t\t</d:from>\n\t\t<d:where>\n\t\t\t<d:and>\n\t\t\t\t<d:or>\n\t\t\t\t\t<d:not>\n\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t<d:getcontenttype/>\n\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t<d:literal>httpd/unix-directory</d:literal>\n\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t</d:not>\n\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<oc:size/>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t<d:literal>0</d:literal>\n\t\t\t\t\t</d:eq>\n\t\t\t\t</d:or>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>${t}</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t</d:and>\n\t\t</d:where>\n\t\t<d:orderby>\n\t\t\t<d:order>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:descending/>\n\t\t\t</d:order>\n\t\t</d:orderby>\n\t\t<d:limit>\n\t\t\t<d:nresults>100</d:nresults>\n\t\t\t<ns:firstresult>0</ns:firstresult>\n\t\t</d:limit>\n\t</d:basicsearch>\n</d:searchrequest>`};var I=(t=>(t.Folder="folder",t.File="file",t))(I||{});const O=function(t,e){return null!==t.match(e)},C=(t,e)=>{if(t.id&&"number"!=typeof t.id)throw new Error("Invalid id type of value");if(!t.source)throw new Error("Missing mandatory source");try{new URL(t.source)}catch(t){throw new Error("Invalid source format, source must be a valid URL")}if(!t.source.startsWith("http"))throw new Error("Invalid source format, only http(s) is supported");if(t.displayname&&"string"!=typeof t.displayname)throw new Error("Invalid displayname type");if(t.mtime&&!(t.mtime instanceof Date))throw new Error("Invalid mtime type");if(t.crtime&&!(t.crtime instanceof Date))throw new Error("Invalid crtime type");if(!t.mime||"string"!=typeof t.mime||!t.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))throw new Error("Missing or invalid mandatory mime");if("size"in t&&"number"!=typeof t.size&&void 0!==t.size)throw new Error("Invalid size type");if("permissions"in t&&void 0!==t.permissions&&!("number"==typeof t.permissions&&t.permissions>=A.NONE&&t.permissions<=A.ALL))throw new Error("Invalid permissions");if(t.owner&&null!==t.owner&&"string"!=typeof t.owner)throw new Error("Invalid owner type");if(t.attributes&&"object"!=typeof t.attributes)throw new Error("Invalid attributes type");if(t.root&&"string"!=typeof t.root)throw new Error("Invalid root type");if(t.root&&!t.root.startsWith("/"))throw new Error("Root must start with a leading slash");if(t.root&&!t.source.includes(t.root))throw new Error("Root must be part of the source");if(t.root&&O(t.source,e)){const i=t.source.match(e)[0];if(!t.source.includes((0,s.join)(i,t.root)))throw new Error("The root must be relative to the service. e.g /files/emma")}if(t.status&&!Object.values(y).includes(t.status))throw new Error("Status must be a valid NodeStatus")};var y=(t=>(t.NEW="new",t.FAILED="failed",t.LOADING="loading",t.LOCKED="locked",t))(y||{});class R{_data;_attributes;_knownDavService=/(remote|public)\.php\/(web)?dav/i;readonlyAttributes=Object.entries(Object.getOwnPropertyDescriptors(R.prototype)).filter((t=>"function"==typeof t[1].get&&"__proto__"!==t[0])).map((t=>t[0]));handler={set:(t,e,i)=>!this.readonlyAttributes.includes(e)&&Reflect.set(t,e,i),deleteProperty:(t,e)=>!this.readonlyAttributes.includes(e)&&Reflect.deleteProperty(t,e),get:(t,e,i)=>this.readonlyAttributes.includes(e)?(m.warn(`Accessing "Node.attributes.${e}" is deprecated, access it directly on the Node instance.`),Reflect.get(this,e)):Reflect.get(t,e,i)};constructor(t,e){C(t,e||this._knownDavService),this._data={displayname:t.attributes?.displayname,...t,attributes:{}},this._attributes=new Proxy(this._data.attributes,this.handler),this.update(t.attributes??{}),e&&(this._knownDavService=e)}get source(){return this._data.source.replace(/\/$/i,"")}get encodedSource(){const{origin:t}=new URL(this.source);return t+(0,o.O0)(this.source.slice(t.length))}get basename(){return(0,s.basename)(this.source)}get displayname(){return this._data.displayname||this.basename}set displayname(t){this._data.displayname=t}get extension(){return(0,s.extname)(this.source)}get dirname(){if(this.root){let t=this.source;this.isDavRessource&&(t=t.split(this._knownDavService).pop());const e=t.indexOf(this.root),i=this.root.replace(/\/$/,"");return(0,s.dirname)(t.slice(e+i.length)||"/")}const t=new URL(this.source);return(0,s.dirname)(t.pathname)}get mime(){return this._data.mime}get mtime(){return this._data.mtime}set mtime(t){this._data.mtime=t}get crtime(){return this._data.crtime}get size(){return this._data.size}set size(t){this.updateMtime(),this._data.size=t}get attributes(){return this._attributes}get permissions(){return null!==this.owner||this.isDavRessource?void 0!==this._data.permissions?this._data.permissions:A.NONE:A.READ}set permissions(t){this.updateMtime(),this._data.permissions=t}get owner(){return this.isDavRessource?this._data.owner:null}get isDavRessource(){return O(this.source,this._knownDavService)}get root(){return this._data.root?this._data.root.replace(/^(.+)\/$/,"$1"):this.isDavRessource&&(0,s.dirname)(this.source).split(this._knownDavService).pop()||null}get path(){if(this.root){let t=this.source;this.isDavRessource&&(t=t.split(this._knownDavService).pop());const e=t.indexOf(this.root),i=this.root.replace(/\/$/,"");return t.slice(e+i.length)||"/"}return(this.dirname+"/"+this.basename).replace(/\/\//g,"/")}get fileid(){return this._data?.id}get status(){return this._data?.status}set status(t){this._data.status=t}move(t){C({...this._data,source:t},this._knownDavService);const e=this.basename;this._data.source=t,this.displayname===e&&this.basename!==e&&(this.displayname=this.basename),this.updateMtime()}rename(t){if(t.includes("/"))throw new Error("Invalid basename");this.move((0,s.dirname)(this.source)+"/"+t)}updateMtime(){this._data.mtime&&(this._data.mtime=new Date)}update(t){for(const[e,i]of Object.entries(t))try{void 0===i?delete this.attributes[e]:this.attributes[e]=i}catch(t){if(t instanceof TypeError)continue;throw t}}}class _ extends R{get type(){return I.File}}class x extends R{constructor(t){super({...t,mime:"httpd/unix-directory"})}get type(){return I.Folder}get extension(){return null}get mime(){return"httpd/unix-directory"}}const L=(0,c.f)()?`/files/${(0,c.G)()}`:`/files/${(0,n.HW)()?.uid}`,$=function(){const t=(0,a.dC)("dav");return(0,c.f)()?t.replace("remote.php","public.php"):t}(),T=function(t=$,e={}){const i=(0,d.UU)(t,{headers:e});function r(t){i.setHeaders({...e,"X-Requested-With":"XMLHttpRequest",requesttoken:t??""})}return(0,n.zo)(r),r((0,n.do)()),(0,d.Gu)().patch("fetch",((t,e)=>{const i=e.headers;return i?.method&&(e.method=i.method,delete i.method),fetch(t,e)})),i},P=(t,e="/",i=L)=>{const r=new AbortController;return new l.CancelablePromise((async(n,s,o)=>{o((()=>r.abort()));try{n((await t.getDirectoryContents(`${i}${e}`,{signal:r.signal,details:!0,data:`<?xml version="1.0"?>\n\t\t<oc:filter-files ${v()}>\n\t\t\t<d:prop>\n\t\t\t\t${b()}\n\t\t\t</d:prop>\n\t\t\t<oc:filter-rules>\n\t\t\t\t<oc:favorite>1</oc:favorite>\n\t\t\t</oc:filter-rules>\n\t\t</oc:filter-files>`,headers:{method:"REPORT"},includeSelf:!0})).data.filter((t=>t.filename!==e)).map((t=>F(t,i))))}catch(t){s(t)}}))},F=function(t,e=L,i=$){let r=(0,n.HW)()?.uid;if((0,c.f)())r=r??"anonymous";else if(!r)throw new Error("No user id found");const s=t.props,o=function(t=""){let e=A.NONE;return t?((t.includes("C")||t.includes("K"))&&(e|=A.CREATE),t.includes("G")&&(e|=A.READ),(t.includes("W")||t.includes("N")||t.includes("V"))&&(e|=A.UPDATE),t.includes("D")&&(e|=A.DELETE),t.includes("R")&&(e|=A.SHARE),e):e}(s?.permissions),a=String(s?.["owner-id"]||r),l=s.fileid||0,d={id:l,source:`${i}${t.filename}`,mtime:new Date(Date.parse(t.lastmod)),mime:t.mime||"application/octet-stream",displayname:void 0!==s.displayname?String(s.displayname):void 0,size:s?.size||Number.parseInt(s.getcontentlength||"0"),status:l<0?y.FAILED:void 0,permissions:o,owner:a,root:e,attributes:{...t,...s,hasPreview:s?.["has-preview"]}};return delete d.attributes?.props,"file"===t.type?new _(d):new x(d)};Error;const S=["B","KB","MB","GB","TB","PB"],D=["B","KiB","MiB","GiB","TiB","PiB"];function j(t,e=!1,i=!1,r=!1){i=i&&!r,"string"==typeof t&&(t=Number(t));let n=t>0?Math.floor(Math.log(t)/Math.log(r?1e3:1024)):0;n=Math.min((i?D.length:S.length)-1,n);const s=i?D[n]:S[n];let o=(t/Math.pow(r?1e3:1024,n)).toFixed(1);return!0===e&&0===n?("0.0"!==o?"< 1 ":"0 ")+(i?D[1]:S[1]):(o=n<2?parseFloat(o).toFixed(0):parseFloat(o).toLocaleString((0,p.lO)()),o+" "+s)}function k(t){return t instanceof Date?t.toISOString():String(t)}function M(t,e={}){const i={sortingMode:"basename",sortingOrder:"asc",...e};return function(t,e,i){i=i??[];const r=(e=e??[t=>t]).map(((t,e)=>"asc"===(i[e]??"asc")?1:-1)),n=Intl.Collator([(0,p.Z0)(),(0,p.lO)()],{numeric:!0,usage:"sort"});return[...t].sort(((t,i)=>{for(const[s,o]of e.entries()){const e=n.compare(k(o(t)),k(o(i)));if(0!==e)return e*r[s]}return 0}))}(t,[...i.sortFavoritesFirst?[t=>1!==t.attributes?.favorite]:[],...i.sortFoldersFirst?[t=>"folder"!==t.type]:[],..."basename"!==i.sortingMode?[t=>t[i.sortingMode]]:[],t=>{return(e=t.attributes?.displayname||t.basename).lastIndexOf(".")>0?e.slice(0,e.lastIndexOf(".")):e;var e},t=>t.basename],[...i.sortFavoritesFirst?["asc"]:[],...i.sortFoldersFirst?["asc"]:[],..."mtime"===i.sortingMode?["asc"===i.sortingOrder?"desc":"asc"]:[],..."mtime"!==i.sortingMode&&"basename"!==i.sortingMode?[i.sortingOrder]:[],i.sortingOrder,i.sortingOrder])}var G={};!function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",i="["+e+"]["+e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+i+"$");t.isExist=function(t){return void 0!==t},t.isEmptyObject=function(t){return 0===Object.keys(t).length},t.merge=function(t,e,i){if(e){const r=Object.keys(e),n=r.length;for(let s=0;s<n;s++)t[r[s]]="strict"===i?[e[r[s]]]:e[r[s]]}},t.getValue=function(e){return t.isExist(e)?e:""},t.isName=function(t){return!(null==r.exec(t))},t.getAllMatches=function(t,e){const i=[];let r=e.exec(t);for(;r;){const n=[];n.startIndex=e.lastIndex-r[0].length;const s=r.length;for(let t=0;t<s;t++)n.push(r[t]);i.push(n),r=e.exec(t)}return i},t.nameRegexp=i}(G);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var U={};const B={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,i){return t}};U.buildOptions=function(t){return Object.assign({},B,t)},U.defaultOptions=B,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat),new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var V={};function X(t,e,i){let r;const n={};for(let s=0;s<t.length;s++){const o=t[s],a=z(o);let l="";if(l=void 0===i?a:i+"."+a,a===e.textNodeName)void 0===r?r=o[a]:r+=""+o[a];else{if(void 0===a)continue;if(o[a]){let t=X(o[a],e,l);const i=q(t,e);o[":@"]?H(t,o[":@"],l,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==n[a]&&n.hasOwnProperty(a)?(Array.isArray(n[a])||(n[a]=[n[a]]),n[a].push(t)):e.isArray(a,l,i)?n[a]=[t]:n[a]=t}}}return"string"==typeof r?r.length>0&&(n[e.textNodeName]=r):void 0!==r&&(n[e.textNodeName]=r),n}function z(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const i=e[t];if(":@"!==i)return i}}function H(t,e,i,r){if(e){const n=Object.keys(e),s=n.length;for(let o=0;o<s;o++){const s=n[o];r.isArray(s,i+"."+s,!0,!0)?t[s]=[e[s]]:t[s]=e[s]}}}function q(t,e){const{textNodeName:i}=e,r=Object.keys(t).length;return 0===r||!(1!==r||!t[i]&&"boolean"!=typeof t[i]&&0!==t[i])}V.prettify=function(t,e){return X(t,e)};const{buildOptions:W}=U,{prettify:Y}=V;function Z(t,e,i,r){let n="",s=!1;for(let o=0;o<t.length;o++){const a=t[o],l=K(a);if(void 0===l)continue;let d="";if(d=0===i.length?l:`${i}.${l}`,l===e.textNodeName){let t=a[l];Q(d,e)||(t=e.tagValueProcessor(l,t),t=tt(t,e)),s&&(n+=r),n+=t,s=!1;continue}if(l===e.cdataPropName){s&&(n+=r),n+=`<![CDATA[${a[l][0][e.textNodeName]}]]>`,s=!1;continue}if(l===e.commentPropName){n+=r+`\x3c!--${a[l][0][e.textNodeName]}--\x3e`,s=!0;continue}if("?"===l[0]){const t=J(a[":@"],e),i="?xml"===l?"":r;let o=a[l][0][e.textNodeName];o=0!==o.length?" "+o:"",n+=i+`<${l}${o}${t}?>`,s=!0;continue}let c=r;""!==c&&(c+=e.indentBy);const p=r+`<${l}${J(a[":@"],e)}`,u=Z(a[l],e,d,c);-1!==e.unpairedTags.indexOf(l)?e.suppressUnpairedNode?n+=p+">":n+=p+"/>":u&&0!==u.length||!e.suppressEmptyNode?u&&u.endsWith(">")?n+=p+`>${u}${r}</${l}>`:(n+=p+">",u&&""!==r&&(u.includes("/>")||u.includes("</"))?n+=r+e.indentBy+u+r:n+=u,n+=`</${l}>`):n+=p+"/>",s=!0}return n}function K(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const r=e[i];if(t.hasOwnProperty(r)&&":@"!==r)return r}}function J(t,e){let i="";if(t&&!e.ignoreAttributes)for(let r in t){if(!t.hasOwnProperty(r))continue;let n=e.attributeValueProcessor(r,t[r]);n=tt(n,e),!0===n&&e.suppressBooleanAttributes?i+=` ${r.substr(e.attributeNamePrefix.length)}`:i+=` ${r.substr(e.attributeNamePrefix.length)}="${n}"`}return i}function Q(t,e){let i=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let r in e.stopNodes)if(e.stopNodes[r]===t||e.stopNodes[r]==="*."+i)return!0;return!1}function tt(t,e){if(t&&t.length>0&&e.processEntities)for(let i=0;i<e.entities.length;i++){const r=e.entities[i];t=t.replace(r.regex,r.val)}return t}const et=function(t,e){let i="";return e.format&&e.indentBy.length>0&&(i="\n"),Z(t,e,"",i)},it={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function rt(t){this.options=Object.assign({},it,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=ot),this.processTextOrObjNode=nt,this.options.format?(this.indentate=st,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function nt(t,e,i){const r=this.j2x(t,i+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,i):this.buildObjectNode(r.val,e,r.attrStr,i)}function st(t){return this.options.indentBy.repeat(t)}function ot(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}rt.prototype.build=function(t){return this.options.preserveOrder?et(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},rt.prototype.j2x=function(t,e){let i="",r="";for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n))if(void 0===t[n])this.isAttribute(n)&&(r+="");else if(null===t[n])this.isAttribute(n)?r+="":"?"===n[0]?r+=this.indentate(e)+"<"+n+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+n+"/"+this.tagEndChar;else if(t[n]instanceof Date)r+=this.buildTextValNode(t[n],n,"",e);else if("object"!=typeof t[n]){const s=this.isAttribute(n);if(s)i+=this.buildAttrPairStr(s,""+t[n]);else if(n===this.options.textNodeName){let e=this.options.tagValueProcessor(n,""+t[n]);r+=this.replaceEntitiesValue(e)}else r+=this.buildTextValNode(t[n],n,"",e)}else if(Array.isArray(t[n])){const i=t[n].length;let s="",o="";for(let a=0;a<i;a++){const i=t[n][a];if(void 0===i);else if(null===i)"?"===n[0]?r+=this.indentate(e)+"<"+n+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+n+"/"+this.tagEndChar;else if("object"==typeof i)if(this.options.oneListGroup){const t=this.j2x(i,e+1);s+=t.val,this.options.attributesGroupName&&i.hasOwnProperty(this.options.attributesGroupName)&&(o+=t.attrStr)}else s+=this.processTextOrObjNode(i,n,e);else if(this.options.oneListGroup){let t=this.options.tagValueProcessor(n,i);t=this.replaceEntitiesValue(t),s+=t}else s+=this.buildTextValNode(i,n,"",e)}this.options.oneListGroup&&(s=this.buildObjectNode(s,n,o,e)),r+=s}else if(this.options.attributesGroupName&&n===this.options.attributesGroupName){const e=Object.keys(t[n]),r=e.length;for(let s=0;s<r;s++)i+=this.buildAttrPairStr(e[s],""+t[n][e[s]])}else r+=this.processTextOrObjNode(t[n],n,e);return{attrStr:i,val:r}},rt.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},rt.prototype.buildObjectNode=function(t,e,i,r){if(""===t)return"?"===e[0]?this.indentate(r)+"<"+e+i+"?"+this.tagEndChar:this.indentate(r)+"<"+e+i+this.closeTag(e)+this.tagEndChar;{let n="</"+e+this.tagEndChar,s="";return"?"===e[0]&&(s="?",n=""),!i&&""!==i||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===s.length?this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(r)+"<"+e+i+s+this.tagEndChar+t+this.indentate(r)+n:this.indentate(r)+"<"+e+i+s+">"+t+n}},rt.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},rt.prototype.buildTextValNode=function(t,e,i,r){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(r)+"<"+e+i+"?"+this.tagEndChar;{let n=this.options.tagValueProcessor(e,t);return n=this.replaceEntitiesValue(n),""===n?this.indentate(r)+"<"+e+i+this.closeTag(e)+this.tagEndChar:this.indentate(r)+"<"+e+i+">"+n+"</"+e+this.tagEndChar}},rt.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const i=this.options.entities[e];t=t.replace(i.regex,i.val)}return t};var at="object"==typeof h&&h.env&&h.env.NODE_DEBUG&&/\bsemver\b/i.test(h.env.NODE_DEBUG)?(...t)=>f.error("SEMVER",...t):()=>{},lt={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},dt={exports:{}};!function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:r,MAX_LENGTH:n}=lt,s=at,o=(e=t.exports={}).re=[],a=e.safeRe=[],l=e.src=[],d=e.t={};let c=0;const p="[a-zA-Z0-9-]",u=[["\\s",1],["\\d",n],[p,r]],h=(t,e,i)=>{const r=(t=>{for(const[e,i]of u)t=t.split(`${e}*`).join(`${e}{0,${i}}`).split(`${e}+`).join(`${e}{1,${i}}`);return t})(e),n=c++;s(t,n,e),d[t]=n,l[n]=e,o[n]=new RegExp(e,i?"g":void 0),a[n]=new RegExp(r,i?"g":void 0)};h("NUMERICIDENTIFIER","0|[1-9]\\d*"),h("NUMERICIDENTIFIERLOOSE","\\d+"),h("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),h("MAINVERSION",`(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})`),h("MAINVERSIONLOOSE",`(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})`),h("PRERELEASEIDENTIFIER",`(?:${l[d.NUMERICIDENTIFIER]}|${l[d.NONNUMERICIDENTIFIER]})`),h("PRERELEASEIDENTIFIERLOOSE",`(?:${l[d.NUMERICIDENTIFIERLOOSE]}|${l[d.NONNUMERICIDENTIFIER]})`),h("PRERELEASE",`(?:-(${l[d.PRERELEASEIDENTIFIER]}(?:\\.${l[d.PRERELEASEIDENTIFIER]})*))`),h("PRERELEASELOOSE",`(?:-?(${l[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[d.PRERELEASEIDENTIFIERLOOSE]})*))`),h("BUILDIDENTIFIER",`${p}+`),h("BUILD",`(?:\\+(${l[d.BUILDIDENTIFIER]}(?:\\.${l[d.BUILDIDENTIFIER]})*))`),h("FULLPLAIN",`v?${l[d.MAINVERSION]}${l[d.PRERELEASE]}?${l[d.BUILD]}?`),h("FULL",`^${l[d.FULLPLAIN]}$`),h("LOOSEPLAIN",`[v=\\s]*${l[d.MAINVERSIONLOOSE]}${l[d.PRERELEASELOOSE]}?${l[d.BUILD]}?`),h("LOOSE",`^${l[d.LOOSEPLAIN]}$`),h("GTLT","((?:<|>)?=?)"),h("XRANGEIDENTIFIERLOOSE",`${l[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),h("XRANGEIDENTIFIER",`${l[d.NUMERICIDENTIFIER]}|x|X|\\*`),h("XRANGEPLAIN",`[v=\\s]*(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:${l[d.PRERELEASE]})?${l[d.BUILD]}?)?)?`),h("XRANGEPLAINLOOSE",`[v=\\s]*(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:${l[d.PRERELEASELOOSE]})?${l[d.BUILD]}?)?)?`),h("XRANGE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAIN]}$`),h("XRANGELOOSE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAINLOOSE]}$`),h("COERCEPLAIN",`(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`),h("COERCE",`${l[d.COERCEPLAIN]}(?:$|[^\\d])`),h("COERCEFULL",l[d.COERCEPLAIN]+`(?:${l[d.PRERELEASE]})?(?:${l[d.BUILD]})?(?:$|[^\\d])`),h("COERCERTL",l[d.COERCE],!0),h("COERCERTLFULL",l[d.COERCEFULL],!0),h("LONETILDE","(?:~>?)"),h("TILDETRIM",`(\\s*)${l[d.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",h("TILDE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAIN]}$`),h("TILDELOOSE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAINLOOSE]}$`),h("LONECARET","(?:\\^)"),h("CARETTRIM",`(\\s*)${l[d.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",h("CARET",`^${l[d.LONECARET]}${l[d.XRANGEPLAIN]}$`),h("CARETLOOSE",`^${l[d.LONECARET]}${l[d.XRANGEPLAINLOOSE]}$`),h("COMPARATORLOOSE",`^${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]})$|^$`),h("COMPARATOR",`^${l[d.GTLT]}\\s*(${l[d.FULLPLAIN]})$|^$`),h("COMPARATORTRIM",`(\\s*)${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]}|${l[d.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",h("HYPHENRANGE",`^\\s*(${l[d.XRANGEPLAIN]})\\s+-\\s+(${l[d.XRANGEPLAIN]})\\s*$`),h("HYPHENRANGELOOSE",`^\\s*(${l[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[d.XRANGEPLAINLOOSE]})\\s*$`),h("STAR","(<|>)?=?\\s*\\*"),h("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),h("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}(dt,dt.exports);var ct=dt.exports;Object.freeze({loose:!0}),Object.freeze({});const pt=/^[0-9]+$/,ut=(t,e)=>{const i=pt.test(t),r=pt.test(e);return i&&r&&(t=+t,e=+e),t===e?0:i&&!r?-1:r&&!i?1:t<e?-1:1};var ht={compareIdentifiers:ut,rcompareIdentifiers:(t,e)=>ut(e,t)};const{MAX_LENGTH:ft,MAX_SAFE_INTEGER:mt}=lt,{safeRe:At,t:Et}=ct,{compareIdentifiers:gt}=ht;u.m}},s={};function o(t){var e=s[t];if(void 0!==e)return e.exports;var i=s[t]={id:t,loaded:!1,exports:{}};return n[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=n,e=[],o.O=(t,i,r,n)=>{if(!i){var s=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],n=e[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((t=>o.O[t](i[l])))?i.splice(l--,1):(a=!1,n<s&&(s=n));if(a){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,r,n]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,i)=>(o.f[i](t,e),e)),[])),o.u=t=>t+"-"+t+".js?v="+{802:"3e355e3181e29540e74c",9291:"077955af818a227340aa"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i={},r="nextcloud:",o.l=(t,e,n,s)=>{if(i[t])i[t].push(e);else{var a,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+n){a=p;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+n),a.src=t),i[t]=[e];var u=(e,r)=>{a.onerror=a.onload=null,clearTimeout(h);var n=i[t];if(delete i[t],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((t=>t(r))),e)return e(r)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=54,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=i[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={54:0,9291:0};o.f.j=(e,i)=>{var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise(((i,n)=>r=t[e]=[i,n]));i.push(r[2]=n);var s=o.p+o.u(e),a=new Error;o.l(s,(i=>{if(o.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",a.name="ChunkLoadError",a.type=n,a.request=s,r[1](a)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,i)=>{var r,n,s=i[0],a=i[1],l=i[2],d=0;if(s.some((e=>0!==t[e]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var c=l(o)}for(e&&e(i);d<s.length;d++)n=s[d],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(37308)));a=o.O(a)})();
//# sourceMappingURL=files-reference-files.js.map?v=9eae056b5490bcf704be