"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[1689],{20440:(t,e,n)=>{n.d(e,{A:()=>i});var a=n(71354),l=n.n(a),o=n(76314),s=n.n(o)()(l());s.push([t.id,".legacy-prompt__text[data-v-6dd2f36f]{margin-block:0 .75em}.legacy-prompt__input[data-v-6dd2f36f]{margin-block:0 1em}[data-v-6dd2f36f] .legacy-prompt__dialog .dialog__actions{min-width:calc(100% - 12px);justify-content:space-between}","",{version:3,sources:["webpack://./core/src/components/LegacyDialogPrompt.vue"],names:[],mappings:"AAEC,sCACC,oBAAA,CAGD,uCACC,kBAAA,CAIF,0DACC,2BAAA,CACA,6BAAA",sourcesContent:["\n.legacy-prompt {\n\t&__text {\n\t\tmargin-block: 0 .75em;\n\t}\n\n\t&__input {\n\t\tmargin-block: 0 1em;\n\t}\n}\n\n:deep(.legacy-prompt__dialog .dialog__actions) {\n\tmin-width: calc(100% - 12px);\n\tjustify-content: space-between;\n}\n"],sourceRoot:""}]);const i=s},21689:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var a=n(53334),l=n(85471),o=n(94219),s=n(82182),i=n(16044);const p=(0,l.pM)({name:"LegacyDialogPrompt",components:{NcDialog:o.A,NcTextField:s.A,NcPasswordField:i.A},props:{name:{type:String,required:!0},text:{type:String,required:!0},isPassword:{type:Boolean,required:!0},inputName:{type:String,default:"prompt-input"}},emits:["close"],data:()=>({inputValue:""}),computed:{buttons(){return[{label:(0,a.Tl)("core","No"),callback:()=>this.$emit("close",!1,this.inputValue)},{label:(0,a.Tl)("core","Yes"),type:"primary",callback:()=>this.$emit("close",!0,this.inputValue)}]}},mounted(){this.$nextTick((()=>{var t,e;return null===(t=this.$refs.input)||void 0===t||null===(e=t.focus)||void 0===e?void 0:e.call(t)}))}});var u=n(85072),c=n.n(u),r=n(97825),d=n.n(r),m=n(77659),A=n.n(m),g=n(55056),_=n.n(g),f=n(10540),y=n.n(f),b=n(41113),C=n.n(b),v=n(20440),x={};x.styleTagTransform=C(),x.setAttributes=_(),x.insert=A().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=y(),c()(v.A,x),v.A&&v.A.locals&&v.A.locals;const h=(0,n(14486).A)(p,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcDialog",{attrs:{"dialog-classes":"legacy-prompt__dialog",buttons:t.buttons,name:t.name},on:{"update:open":function(e){return t.$emit("close",!1,t.inputValue)}}},[e("p",{staticClass:"legacy-prompt__text",domProps:{textContent:t._s(t.text)}}),t._v(" "),t.isPassword?e("NcPasswordField",{ref:"input",staticClass:"legacy-prompt__input",attrs:{autocomplete:"new-password",label:t.name,name:t.inputName,value:t.inputValue},on:{"update:value":function(e){t.inputValue=e}}}):e("NcTextField",{ref:"input",staticClass:"legacy-prompt__input",attrs:{label:t.name,name:t.inputName,value:t.inputValue},on:{"update:value":function(e){t.inputValue=e}}})],1)}),[],!1,null,"6dd2f36f",null).exports}}]);
//# sourceMappingURL=1689-1689.js.map?v=0232a38fce31b40e36da