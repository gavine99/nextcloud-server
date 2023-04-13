/*! For license information please see core-unified-search.js.LICENSE.txt */
(()=>{"use strict";var e,i={23767:(e,i,r)=>{var s=r(17499),a=r(45994),o=r(31352),c=r(20144),l=r(20296),u=r.n(l),d=r(78595),h=r(64024),A=r(45400),p=r.n(A),f=r(12945),g=r.n(f),C=r(93455),m=r.n(C),_=r(85750),v=r.n(_),b=r(93234),y=r(72875);const x={name:"SearchResult",components:{NcHighlight:r.n(y)()},props:{thumbnailUrl:{type:String,default:null},title:{type:String,required:!0},subline:{type:String,default:null},resourceUrl:{type:String,default:null},icon:{type:String,default:""},rounded:{type:Boolean,default:!1},query:{type:String,default:""},focused:{type:Boolean,default:!1}},data(){return{hasValidThumbnail:this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),loaded:!1}},computed:{isIconUrl(){if(this.icon.startsWith("/"))return!0;try{new URL(this.icon)}catch{return!1}return!0}},watch:{thumbnailUrl(){this.hasValidThumbnail=this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),this.loaded=!1}},methods:{reEmitEvent(t){this.$emit(t.type,t)},onError(){this.hasValidThumbnail=!1},onLoad(){this.loaded=!0}}};var w=r(93379),k=r.n(w),S=r(7795),D=r.n(S),B=r(90569),$=r.n(B),I=r(3565),q=r.n(I),E=r(19216),U=r.n(E),L=r(44589),R=r.n(L),F=r(20427),O={};O.styleTagTransform=R(),O.setAttributes=q(),O.insert=$().bind(null,"head"),O.domAPI=D(),O.insertStyleElement=U(),k()(F.Z,O),F.Z&&F.Z.locals&&F.Z.locals;var P=r(51900);const j=(0,P.Z)(x,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"unified-search__result",class:{"unified-search__result--focused":t.focused},attrs:{href:t.resourceUrl||"#"},on:{click:t.reEmitEvent,focus:t.reEmitEvent}},[e("div",{staticClass:"unified-search__result-icon",class:{"unified-search__result-icon--rounded":t.rounded,"unified-search__result-icon--no-preview":!t.hasValidThumbnail&&!t.loaded,"unified-search__result-icon--with-thumbnail":t.hasValidThumbnail&&t.loaded,[t.icon]:!t.loaded&&!t.isIconUrl},style:{backgroundImage:t.isIconUrl?"url(".concat(t.icon,")"):""}},[t.hasValidThumbnail?e("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],attrs:{src:t.thumbnailUrl,alt:""},on:{error:t.onError,load:t.onLoad}}):t._e()]),t._v(" "),e("span",{staticClass:"unified-search__result-content"},[e("span",{staticClass:"unified-search__result-line-one",attrs:{title:t.title}},[e("NcHighlight",{attrs:{text:t.title,search:t.query}})],1),t._v(" "),t.subline?e("span",{staticClass:"unified-search__result-line-two",attrs:{title:t.subline}},[t._v(t._s(t.subline))]):t._e()])])}),[],!1,null,"0ec7b18f",null).exports,z={name:"SearchResultPlaceholders",data:()=>({light:null,dark:null}),mounted(){const t=getComputedStyle(document.documentElement);this.dark=t.getPropertyValue("--color-placeholder-dark"),this.light=t.getPropertyValue("--color-placeholder-light")},methods:{randWidth:()=>Math.floor(20*Math.random())+30}};var N=r(78033),M={};M.styleTagTransform=R(),M.setAttributes=q(),M.insert=$().bind(null,"head"),M.domAPI=D(),M.insertStyleElement=U(),k()(N.Z,M),N.Z&&N.Z.locals&&N.Z.locals;const T=(0,P.Z)(z,(function(){var t=this,e=t._self._c;return e("ul",[e("svg",{staticClass:"unified-search__result-placeholder-gradient"},[e("defs",[e("linearGradient",{attrs:{id:"unified-search__result-placeholder-gradient"}},[e("stop",{attrs:{offset:"0%","stop-color":t.light}},[e("animate",{attrs:{attributeName:"stop-color",values:"".concat(t.light,"; ").concat(t.light,"; ").concat(t.dark,"; ").concat(t.dark,"; ").concat(t.light),dur:"2s",repeatCount:"indefinite"}})]),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":t.dark}},[e("animate",{attrs:{attributeName:"stop-color",values:"".concat(t.dark,"; ").concat(t.light,"; ").concat(t.light,"; ").concat(t.dark,"; ").concat(t.dark),dur:"2s",repeatCount:"indefinite"}})])],1)],1)]),t._v(" "),t._l([1,2,3],(function(n){return e("li",{key:n},[e("svg",{staticClass:"unified-search__result-placeholder",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"url(#unified-search__result-placeholder-gradient)"}},[e("rect",{staticClass:"unified-search__result-placeholder-icon"}),t._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-one"}),t._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-two",style:{width:"calc(".concat(t.randWidth(),"%)")}})])])}))],2)}),[],!1,null,"9ed03c40",null).exports;var G=r(79753),Z=r(79954),W=r(4820),Q=r(25108);const H=(0,Z.j)("unified-search","limit-default"),V=(0,Z.j)("unified-search","min-search-length",1),Y=(0,Z.j)("unified-search","live-search",!0),K=/(^|\s)in:([a-z_-]+)/gi,X=/(^|\s)-in:([a-z_-]+)/gi;async function J(){try{const{data:t}=await W.default.get((0,G.generateOcsUrl)("search/providers"),{params:{from:window.location.pathname.replace("/index.php","")+window.location.search}});if("ocs"in t&&"data"in t.ocs&&Array.isArray(t.ocs.data)&&t.ocs.data.length>0)return t.ocs.data}catch(t){Q.error(t)}return[]}function tt(t){let{type:e,query:n,cursor:i}=t;const r=W.default.CancelToken.source();return{request:async()=>W.default.get((0,G.generateOcsUrl)("search/providers/{type}/search",{type:e}),{cancelToken:r.token,params:{term:n,cursor:i,from:window.location.pathname.replace("/index.php","")+window.location.search}}),cancel:r.cancel}}const et={name:"UnifiedSearch",components:{Magnify:b.default,NcActionButton:p(),NcActions:g(),NcEmptyContent:m(),NcHeaderMenu:v(),SearchResult:j,SearchResultPlaceholders:T},data:()=>({types:[],cursors:{},limits:{},loading:{},reached:{},requests:[],results:{},query:"",focused:null,triggered:!1,defaultLimit:H,minSearchLength:V,enableLiveSearch:Y,open:!1}),computed:{typesIDs(){return this.types.map((t=>t.id))},typesNames(){return this.types.map((t=>t.name))},typesMap(){return this.types.reduce(((t,e)=>(t[e.id]=e.name,t)),{})},ariaLabel:()=>t("core","Search"),hasResults(){return 0!==Object.keys(this.results).length},orderedResults(){return this.typesIDs.filter((t=>t in this.results)).map((t=>({type:t,list:this.results[t]})))},availableFilters(){return Object.keys(this.results)},usedFiltersIn(){let t;const e=[];for(;null!==(t=K.exec(this.query));)e.push(t[2]);return e},usedFiltersNot(){let t;const e=[];for(;null!==(t=X.exec(this.query));)e.push(t[2]);return e},validQueryTitle(){return this.triggered?t("core","No results for {query}",{query:this.query}):t("core","Press enter to start searching")},shortQueryDescription(){return this.isShortQuery?n("core","Please enter {minSearchLength} character or more to search","Please enter {minSearchLength} characters  or more to search",this.minSearchLength,{minSearchLength:this.minSearchLength}):""},isShortQuery(){return this.query&&this.query.trim().length<V},isValidQuery(){return this.query&&""!==this.query.trim()&&!this.isShortQuery},isDoneSearching(){return Object.values(this.reached).every((t=>!1===t))},isLoading(){return Object.values(this.loading).some((t=>!0===t))}},async created(){(0,d.Ld)("files:navigation:changed",this.resetForm),this.types=await J(),this.logger.debug("Unified Search initialized with the following providers",this.types)},beforeDestroy(){(0,d.r1)("files:navigation:changed",this.resetForm)},mounted(){OCP.Accessibility.disableKeyboardShortcuts()||document.addEventListener("keydown",(t=>{t.ctrlKey&&"f"===t.key&&!this.open&&(t.preventDefault(),this.open=!0),this.open&&("ArrowDown"===t.key&&this.focusNext(t),"ArrowUp"===t.key&&this.focusPrev(t))}))},methods:{async onOpen(){this.types=await J()},onClose(){(0,d.j8)("nextcloud:unified-search.close")},resetForm(){this.$el.querySelector('form[role="search"]').reset()},onReset(){(0,d.j8)("nextcloud:unified-search.reset"),this.logger.debug("Search reset"),this.query="",this.resetState(),this.focusInput()},async resetState(){this.cursors={},this.limits={},this.reached={},this.results={},this.focused=null,this.triggered=!1,await this.cancelPendingRequests()},async cancelPendingRequests(){const t=this.requests.slice(0);this.requests=[],await Promise.all(t.map((t=>t())))},focusInput(){this.$nextTick((()=>{this.$refs.input.focus(),this.$refs.input.select()}))},onInputEnter(){this.hasResults?this.getResultsList()[0].click():this.onInput()},async onInput(){if((0,d.j8)("nextcloud:unified-search.search",{query:this.query}),""===this.query.trim()||this.isShortQuery){for(const t of this.typesIDs)this.$delete(this.results,t);return}let t=this.typesIDs,e=this.query;this.usedFiltersNot.length>0&&(t=this.typesIDs.filter((t=>-1===this.usedFiltersNot.indexOf(t)))),this.usedFiltersIn.length>0&&(t=this.typesIDs.filter((t=>this.usedFiltersIn.indexOf(t)>-1))),e=e.replace(K,"").replace(X,""),await this.resetState(),this.triggered=!0,t.length?(this.$set(this.loading,"all",!0),this.logger.debug("Searching ".concat(e," in"),t),Promise.all(t.map((async t=>{try{const{request:n,cancel:i}=tt({type:t,query:e});this.requests.push(i);const{data:r}=await n();return r.ocs.data.entries.length>0?this.$set(this.results,t,r.ocs.data.entries):this.$delete(this.results,t),r.ocs.data.cursor?this.$set(this.cursors,t,r.ocs.data.cursor):r.ocs.data.isPaginated||this.$set(this.limits,t,this.defaultLimit),r.ocs.data.entries.length<this.defaultLimit&&this.$set(this.reached,t,!0),null===this.focused&&(this.focused=0),1}catch(e){return this.$delete(this.results,t),e.response&&e.response.status?(this.logger.error("Error searching for ".concat(this.typesMap[t]),e),(0,h.x2)(this.t("core","An error occurred while searching for {type}",{type:this.typesMap[t]})),0):2}}))).then((t=>{t.some((t=>2===t))||(this.loading={})}))):this.logger.error("No types to search in")},onInputDebounced:Y?u()((function(t){this.onInput(t)}),500):function(){this.triggered=!1},async loadMore(t){if(!this.loading[t]){if(this.cursors[t]){const{request:e,cancel:n}=tt({type:t,query:this.query,cursor:this.cursors[t]});this.requests.push(n);const{data:i}=await e();i.ocs.data.cursor&&this.$set(this.cursors,t,i.ocs.data.cursor),i.ocs.data.entries.length>0&&this.results[t].push(...i.ocs.data.entries),i.ocs.data.entries.length<this.defaultLimit&&this.$set(this.reached,t,!0)}else this.limits[t]&&this.limits[t]>=0&&(this.limits[t]+=this.defaultLimit,this.limits[t]>=this.results[t].length&&this.$set(this.reached,t,!0));null!==this.focused&&this.$nextTick((()=>{this.focusIndex(this.focused)}))}},limitIfAny(t,e){return e in this.limits?t.slice(0,this.limits[e]):t},getResultsList(){return this.$el.querySelectorAll(".unified-search__results .unified-search__result")},focusFirst(t){const e=this.getResultsList();e&&e.length>0&&(t&&t.preventDefault(),this.focused=0,this.focusIndex(this.focused))},focusNext(t){if(null===this.focused)return void this.focusFirst(t);const e=this.getResultsList();e&&e.length>0&&this.focused+1<e.length&&(t.preventDefault(),this.focused++,this.focusIndex(this.focused))},focusPrev(t){if(null===this.focused)return void this.focusFirst(t);const e=this.getResultsList();e&&e.length>0&&this.focused>0&&(t.preventDefault(),this.focused--,this.focusIndex(this.focused))},focusIndex(t){const e=this.getResultsList();e&&e[t]&&e[t].focus()},setFocusedIndex(t){const e=t.target,n=[...this.getResultsList()].findIndex((t=>t===e));n>-1&&(this.focused=n)},onClickFilter(t){this.query="".concat(this.query," ").concat(t).replace(/ {2}/g," ").trim(),this.onInput()}}};var nt=r(31395),it={};it.styleTagTransform=R(),it.setAttributes=q(),it.insert=$().bind(null,"head"),it.domAPI=D(),it.insertStyleElement=U(),k()(nt.Z,it),nt.Z&&nt.Z.locals&&nt.Z.locals;const rt=(0,P.Z)(et,(function(){var t=this,e=t._self._c;return e("NcHeaderMenu",{staticClass:"unified-search",attrs:{id:"unified-search","exclude-click-outside-classes":"popover",open:t.open,"aria-label":t.ariaLabel},on:{"update:open":function(e){t.open=e},open:t.onOpen,close:t.onClose},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("Magnify",{staticClass:"unified-search__trigger",attrs:{size:22}})]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"unified-search__input-wrapper"},[e("label",{attrs:{for:"unified-search__input"}},[t._v(t._s(t.ariaLabel))]),t._v(" "),e("div",{staticClass:"unified-search__input-row"},[e("form",{staticClass:"unified-search__form",class:{"icon-loading-small":t.isLoading},attrs:{role:"search"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onInputEnter.apply(null,arguments)},reset:function(e){return e.preventDefault(),e.stopPropagation(),t.onReset.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",staticClass:"unified-search__form-input",class:{"unified-search__form-input--with-reset":!!t.query},attrs:{id:"unified-search__input",type:"search",placeholder:t.t("core","Search {types} …",{types:t.typesNames.join(", ")}),"aria-describedby":"unified-search-desc"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},t.onInputDebounced],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),e.stopPropagation(),t.onInputEnter.apply(null,arguments))}}}),t._v(" "),e("p",{staticClass:"hidden-visually",attrs:{id:"unified-search-desc"}},[t._v("\n\t\t\t\t\t"+t._s(t.t("core","Search starts once you start typing and results may be reached with the arrow keys"))+"\n\t\t\t\t")]),t._v(" "),t.query&&!t.isLoading?e("input",{staticClass:"unified-search__form-reset icon-close",attrs:{type:"reset","aria-label":t.t("core","Reset search"),value:""}}):t._e(),t._v(" "),!t.query||t.isLoading||t.enableLiveSearch?t._e():e("input",{staticClass:"unified-search__form-submit icon-confirm",attrs:{type:"submit","aria-label":t.t("core","Start search"),value:""}})]),t._v(" "),t.availableFilters.length>1?e("NcActions",{staticClass:"unified-search__filters",attrs:{placement:"bottom",container:".unified-search__input-wrapper"}},t._l(t.availableFilters,(function(n){return e("NcActionButton",{key:n,attrs:{icon:"icon-filter",title:t.t("core","Search for {name} only",{name:t.typesMap[n]})},on:{click:function(e){return e.stopPropagation(),t.onClickFilter("in:".concat(n))}}},[t._v("\n\t\t\t\t\t"+t._s("in:".concat(n))+"\n\t\t\t\t")])})),1):t._e()],1)]),t._v(" "),t.hasResults?t._l(t.orderedResults,(function(n,i){let{list:r,type:s}=n;return e("ul",{key:s,staticClass:"unified-search__results",class:"unified-search__results-".concat(s),attrs:{"aria-label":t.typesMap[s]}},[e("h2",{staticClass:"unified-search__results-header"},[t._v("\n\t\t\t\t"+t._s(t.typesMap[s])+"\n\t\t\t")]),t._v(" "),t._l(t.limitIfAny(r,s),(function(n,r){return e("li",{key:n.resourceUrl},[e("SearchResult",t._b({attrs:{query:t.query,focused:0===t.focused&&0===i&&0===r},on:{focus:t.setFocusedIndex}},"SearchResult",n,!1))],1)})),t._v(" "),e("li",[t.reached[s]?t._e():e("SearchResult",{staticClass:"unified-search__result-more",attrs:{title:t.loading[s]?t.t("core","Loading more results …"):t.t("core","Load more results"),"icon-class":t.loading[s]?"icon-loading-small":""},on:{click:function(e){return e.stopPropagation(),t.loadMore(s)},focus:t.setFocusedIndex}})],1)],2)})):[t.isLoading?e("SearchResultPlaceholders"):t.isValidQuery?e("NcEmptyContent",{attrs:{title:t.validQueryTitle},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Magnify")]},proxy:!0}],null,!1,931131664)}):!t.isLoading||t.isShortQuery?e("NcEmptyContent",{attrs:{title:t.t("core","Start typing to search"),description:t.shortQueryDescription},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Magnify")]},proxy:!0}],null,!1,931131664)}):t._e()]],2)}),[],!1,null,"e6819cee",null).exports;r.nc=btoa((0,a.IH)());const st=(0,s.IY)().setApp("unified-search").detectUser().build();c.default.mixin({data:()=>({logger:st}),methods:{t:o.Iu,n:o.uN}}),new c.default({el:"#unified-search",name:"UnifiedSearchRoot",render:t=>t(rt)})},20427:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(87537),r=n.n(i),s=n(23645),a=n.n(s)()(r());a.push([t.id,".unified-search__result[data-v-0ec7b18f]{display:flex;align-items:center;height:44px;padding:10px;border:2px solid rgba(0,0,0,0);border-radius:var(--border-radius-large) !important}.unified-search__result--focused[data-v-0ec7b18f]{background-color:var(--color-background-hover)}.unified-search__result[data-v-0ec7b18f]:active,.unified-search__result[data-v-0ec7b18f]:hover,.unified-search__result[data-v-0ec7b18f]:focus{background-color:var(--color-background-hover);border:2px solid var(--color-border-maxcontrast)}.unified-search__result *[data-v-0ec7b18f]{cursor:pointer}.unified-search__result-icon[data-v-0ec7b18f]{overflow:hidden;width:44px;height:44px;border-radius:var(--border-radius);background-repeat:no-repeat;background-position:center center;background-size:32px}.unified-search__result-icon--rounded[data-v-0ec7b18f]{border-radius:22px}.unified-search__result-icon--no-preview[data-v-0ec7b18f]{background-size:32px}.unified-search__result-icon--with-thumbnail[data-v-0ec7b18f]{background-size:cover}.unified-search__result-icon--with-thumbnail[data-v-0ec7b18f]:not(.unified-search__result-icon--rounded){max-width:42px;max-height:42px;border:1px solid var(--color-border)}.unified-search__result-icon img[data-v-0ec7b18f]{width:100%;height:100%;object-fit:cover;object-position:center}.unified-search__result-icon[data-v-0ec7b18f],.unified-search__result-actions[data-v-0ec7b18f]{flex:0 0 44px}.unified-search__result-content[data-v-0ec7b18f]{display:flex;align-items:center;flex:1 1 100%;flex-wrap:wrap;min-width:0;padding-left:10px}.unified-search__result-line-one[data-v-0ec7b18f],.unified-search__result-line-two[data-v-0ec7b18f]{overflow:hidden;flex:1 1 100%;margin:1px 0;white-space:nowrap;text-overflow:ellipsis;color:inherit;font-size:inherit}.unified-search__result-line-two[data-v-0ec7b18f]{opacity:.7;font-size:var(--default-font-size)}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/SearchResult.vue"],names:[],mappings:"AAMA,yCACC,YAAA,CACA,kBAAA,CACA,WANgB,CAOhB,YANQ,CAOR,8BAAA,CACA,mDAAA,CAEA,kDACC,8CAAA,CAGD,8IAGC,8CAAA,CACA,gDAAA,CAGD,2CACC,cAAA,CAGD,8CACC,eAAA,CACA,UA5Be,CA6Bf,WA7Be,CA8Bf,kCAAA,CACA,2BAAA,CACA,iCAAA,CACA,oBAAA,CACA,uDACC,kBAAA,CAED,0DACC,oBAAA,CAED,8DACC,qBAAA,CAED,yGAEC,cAAA,CACA,eAAA,CACA,oCAAA,CAGD,kDAEC,UAAA,CACA,WAAA,CAEA,gBAAA,CACA,sBAAA,CAIF,+FAEC,aAAA,CAGD,iDACC,YAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CAEA,WAAA,CACA,iBAvEO,CA0ER,oGAEC,eAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,aAAA,CACA,iBAAA,CAED,kDACC,UAAA,CACA,kCAAA",sourcesContent:['\n@use "sass:math";\n\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result {\n\tdisplay: flex;\n\talign-items: center;\n\theight: $clickable-area;\n\tpadding: $margin;\n\tborder: 2px solid transparent;\n\tborder-radius: var(--border-radius-large) !important;\n\n\t&--focused {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t\tborder: 2px solid var(--color-border-maxcontrast);\n\t}\n\n\t* {\n\t\tcursor: pointer;\n\t}\n\n\t&-icon {\n\t\toverflow: hidden;\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center center;\n\t\tbackground-size: 32px;\n\t\t&--rounded {\n\t\t\tborder-radius: math.div($clickable-area, 2);\n\t\t}\n\t\t&--no-preview {\n\t\t\tbackground-size: 32px;\n\t\t}\n\t\t&--with-thumbnail {\n\t\t\tbackground-size: cover;\n\t\t}\n\t\t&--with-thumbnail:not(&--rounded) {\n\t\t\t// compensate for border\n\t\t\tmax-width: $clickable-area - 2px;\n\t\t\tmax-height: $clickable-area - 2px;\n\t\t\tborder: 1px solid var(--color-border);\n\t\t}\n\n\t\timg {\n\t\t\t// Make sure to keep ratio\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\t}\n\n\t&-icon,\n\t&-actions {\n\t\tflex: 0 0 $clickable-area;\n\t}\n\n\t&-content {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 1 1 100%;\n\t\tflex-wrap: wrap;\n\t\t// Set to minimum and gro from it\n\t\tmin-width: 0;\n\t\tpadding-left: $margin;\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\toverflow: hidden;\n\t\tflex: 1 1 100%;\n\t\tmargin: 1px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\t// Use the same color as the `a`\n\t\tcolor: inherit;\n\t\tfont-size: inherit;\n\t}\n\t&-line-two {\n\t\topacity: .7;\n\t\tfont-size: var(--default-font-size);\n\t}\n}\n\n'],sourceRoot:""}]);const o=a},78033:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(87537),r=n.n(i),s=n(23645),a=n.n(s)()(r());a.push([t.id,".unified-search__result-placeholder-gradient[data-v-9ed03c40]{position:fixed;height:0;width:0;z-index:-1}.unified-search__result-placeholder[data-v-9ed03c40]{width:calc(100% - 2 * 10px);height:44px;margin:10px}.unified-search__result-placeholder-icon[data-v-9ed03c40]{width:44px;height:44px;rx:var(--border-radius);ry:var(--border-radius)}.unified-search__result-placeholder-line-one[data-v-9ed03c40],.unified-search__result-placeholder-line-two[data-v-9ed03c40]{width:calc(100% - 54px);height:1em;x:54px}.unified-search__result-placeholder-line-one[data-v-9ed03c40]{y:5px}.unified-search__result-placeholder-line-two[data-v-9ed03c40]{y:25px}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue"],names:[],mappings:"AAIA,8DACC,cAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CAGD,qDACC,2BAAA,CACA,WAZgB,CAahB,WAZQ,CAcR,0DACC,UAhBe,CAiBf,WAjBe,CAkBf,uBAAA,CACA,uBAAA,CAGD,4HAEC,uBAAA,CACA,UAAA,CACA,MAAA,CAGD,8DACC,KAAA,CAGD,8DACC,MAAA",sourcesContent:["\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result-placeholder-gradient {\n\tposition: fixed;\n\theight: 0;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.unified-search__result-placeholder {\n\twidth: calc(100% - 2 * #{$margin});\n\theight: $clickable-area;\n\tmargin: $margin;\n\n\t&-icon {\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\trx: var(--border-radius);\n\t\try: var(--border-radius);\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\twidth: calc(100% - #{$margin + $clickable-area});\n\t\theight: 1em;\n\t\tx: $margin + $clickable-area;\n\t}\n\n\t&-line-one {\n\t\ty: 5px;\n\t}\n\n\t&-line-two {\n\t\ty: 25px;\n\t}\n}\n\n"],sourceRoot:""}]);const o=a},31395:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(87537),r=n.n(i),s=n(23645),a=n.n(s)()(r());a.push([t.id,".unified-search__input-wrapper[data-v-e6819cee]{position:sticky;z-index:2;top:0;display:inline-flex;flex-direction:column;align-items:center;width:100%;background-color:var(--color-main-background)}.unified-search__input-wrapper label[for=unified-search__input][data-v-e6819cee]{align-self:flex-start;font-weight:bold;font-size:19px;margin-left:13px}.unified-search__form-input[data-v-e6819cee]{margin:0 !important}.unified-search__input-row[data-v-e6819cee]{display:flex;width:100%;align-items:center}.unified-search__filters[data-v-e6819cee]{margin:10px 0 10px 5px}.unified-search__filters ul[data-v-e6819cee]{display:inline-flex;justify-content:space-between}.unified-search__form[data-v-e6819cee]{position:relative;width:100%;margin:10px 0}.unified-search__form[data-v-e6819cee]::after{right:6px;left:auto}.unified-search__form-input[data-v-e6819cee],.unified-search__form-reset[data-v-e6819cee]{margin:3px}.unified-search__form-input[data-v-e6819cee]{width:100%;height:34px;padding:6px}.unified-search__form-input[data-v-e6819cee],.unified-search__form-input[placeholder][data-v-e6819cee],.unified-search__form-input[data-v-e6819cee]::placeholder{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.unified-search__form-input[data-v-e6819cee]::-webkit-search-decoration,.unified-search__form-input[data-v-e6819cee]::-webkit-search-cancel-button,.unified-search__form-input[data-v-e6819cee]::-webkit-search-results-button,.unified-search__form-input[data-v-e6819cee]::-webkit-search-results-decoration{-webkit-appearance:none}.icon-loading-small .unified-search__form-input[data-v-e6819cee],.unified-search__form-input--with-reset[data-v-e6819cee]{padding-right:34px}.unified-search__form-reset[data-v-e6819cee],.unified-search__form-submit[data-v-e6819cee]{position:absolute;top:0;right:4px;width:28px;height:28px;min-height:30px;padding:0;opacity:.5;border:none;background-color:rgba(0,0,0,0);margin-right:0}.unified-search__form-reset[data-v-e6819cee]:hover,.unified-search__form-reset[data-v-e6819cee]:focus,.unified-search__form-reset[data-v-e6819cee]:active,.unified-search__form-submit[data-v-e6819cee]:hover,.unified-search__form-submit[data-v-e6819cee]:focus,.unified-search__form-submit[data-v-e6819cee]:active{opacity:1}.unified-search__form-submit[data-v-e6819cee]{right:28px}.unified-search__results[data-v-e6819cee]{display:flex;flex-direction:column;gap:4px}.unified-search__results-header[data-v-e6819cee]{display:block;margin:10px;margin-bottom:6px;margin-left:13px;color:var(--color-primary-element);font-size:19px;font-weight:bold}.unified-search .unified-search__result-more[data-v-e6819cee]{color:var(--color-text-maxcontrast)}.unified-search .empty-content[data-v-e6819cee]{margin:10vh 0}.unified-search .empty-content[data-v-e6819cee] .empty-content__title{font-weight:normal;font-size:var(--default-font-size);padding:0 15px;text-align:center}","",{version:3,sources:["webpack://./core/src/views/UnifiedSearch.vue"],names:[],mappings:"AAQC,gDACC,eAAA,CAEA,SAAA,CACA,KAAA,CACA,mBAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,6CAAA,CAEA,iFACC,qBAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CAIF,6CACC,mBAAA,CAGD,4CACC,YAAA,CACA,UAAA,CACA,kBAAA,CAGD,0CACC,sBAAA,CACA,6CACC,mBAAA,CACA,6BAAA,CAIF,uCACC,iBAAA,CACA,UAAA,CACA,aAAA,CAGA,8CACC,SA/Ca,CAgDb,SAAA,CAGD,0FAEC,UAAA,CAGD,6CACC,UAAA,CACA,WA3DY,CA4DZ,WA3Da,CA6Db,iKAGC,eAAA,CACA,kBAAA,CACA,sBAAA,CAID,+SAIC,uBAAA,CAID,0HAEC,kBAjFW,CAqFb,2FACC,iBAAA,CACA,KAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,8BAAA,CACA,cAAA,CAEA,uTAGC,SAAA,CAIF,8CACC,UAAA,CAIF,0CAUC,YAAA,CACA,qBAAA,CACA,OAAA,CAXA,iDACC,aAAA,CACA,WAlHM,CAmHN,iBAAA,CACA,gBAAA,CACA,kCAAA,CACA,cAAA,CACA,gBAAA,CAOF,8DACC,mCAAA,CAGD,gDACC,aAAA,CAEA,sEACC,kBAAA,CACS,kCAAA,CACT,cAAA,CACA,iBAAA",sourcesContent:['\n@use "sass:math";\n\n$margin: 10px;\n$input-height: 34px;\n$input-padding: 6px;\n\n.unified-search {\n\t&__input-wrapper {\n\t\tposition: sticky;\n\t\t// above search results\n\t\tz-index: 2;\n\t\ttop: 0;\n\t\tdisplay: inline-flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\tbackground-color: var(--color-main-background);\n\n\t\tlabel[for="unified-search__input"] {\n\t\t\talign-self: flex-start;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 19px;\n\t\t\tmargin-left: 13px;\n\t\t}\n\t}\n\n\t&__form-input {\n\t\tmargin: 0 !important;\n\t}\n\n\t&__input-row {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\talign-items: center;\n\t}\n\n\t&__filters {\n\t\tmargin: $margin 0 $margin math.div($margin, 2);\n\t\tul {\n\t\t\tdisplay: inline-flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t}\n\n\t&__form {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmargin: $margin 0;\n\n\t\t// Loading spinner\n\t\t&::after {\n\t\t\tright: $input-padding;\n\t\t\tleft: auto;\n\t\t}\n\n\t\t&-input,\n\t\t&-reset {\n\t\t\tmargin: math.div($input-padding, 2);\n\t\t}\n\n\t\t&-input {\n\t\t\twidth: 100%;\n\t\t\theight: $input-height;\n\t\t\tpadding: $input-padding;\n\n\t\t\t&,\n\t\t\t&[placeholder],\n\t\t\t&::placeholder {\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t}\n\n\t\t\t// Hide webkit clear search\n\t\t\t&::-webkit-search-decoration,\n\t\t\t&::-webkit-search-cancel-button,\n\t\t\t&::-webkit-search-results-button,\n\t\t\t&::-webkit-search-results-decoration {\n\t\t\t\t-webkit-appearance: none;\n\t\t\t}\n\n\t\t\t// Ellipsis earlier if reset button is here\n\t\t\t.icon-loading-small &,\n\t\t\t&--with-reset {\n\t\t\t\tpadding-right: $input-height;\n\t\t\t}\n\t\t}\n\n\t\t&-reset, &-submit {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 4px;\n\t\t\twidth: $input-height - $input-padding;\n\t\t\theight: $input-height - $input-padding;\n\t\t\tmin-height: 30px;\n\t\t\tpadding: 0;\n\t\t\topacity: .5;\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tmargin-right: 0;\n\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\t&-submit {\n\t\t\tright: 28px;\n\t\t}\n\t}\n\n\t&__results {\n\t\t&-header {\n\t\t\tdisplay: block;\n\t\t\tmargin: $margin;\n\t\t\tmargin-bottom: $margin - 4px;\n\t\t\tmargin-left: 13px;\n\t\t\tcolor: var(--color-primary-element);\n\t\t\tfont-size: 19px;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 4px;\n\t}\n\n\t.unified-search__result-more::v-deep {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t.empty-content {\n\t\tmargin: 10vh 0;\n\n\t\t::v-deep .empty-content__title {\n\t\t\tfont-weight: normal;\n            font-size: var(--default-font-size);\n\t\t\tpadding: 0 15px;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n}\n\n'],sourceRoot:""}]);const o=a}},r={};function s(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={id:t,loaded:!1,exports:{}};return i[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=i,e=[],s.O=(t,n,i,r)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],r=e[u][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((t=>s.O[t](n[c])))?n.splice(c--,1):(o=!1,r<a&&(a=r));if(o){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,i,r]},s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),s.j=9671,(()=>{s.b=document.baseURI||self.location.href;var t={9671:0};s.O.j=e=>0===t[e];var e=(e,n)=>{var i,r,a=n[0],o=n[1],c=n[2],l=0;if(a.some((e=>0!==t[e]))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var u=c(s)}for(e&&e(n);l<a.length;l++)r=a[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),s.nc=void 0;var a=s.O(void 0,[7874],(()=>s(23767)));a=s.O(a)})();
//# sourceMappingURL=core-unified-search.js.map?v=0b1f02ecfe3769515917