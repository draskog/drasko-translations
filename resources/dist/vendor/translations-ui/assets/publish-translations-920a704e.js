import{_ as P}from"./dialog.vue_vue_type_script_setup_true_lang-4c8ea821.js";import{_ as C}from"./base-button.vue_vue_type_script_setup_true_lang-eedf44f3.js";import{_ as B}from"./alert.vue_vue_type_script_setup_true_lang-6f86fc1e.js";import{_ as z}from"./icon-publish-2c3bbfd2.js";import{o,h as c,f as t,d as E,a5 as T,r as v,b as i,w as r,c as m,a as _,e as h,u as s,E as j,F as O,K as L,O as N,a6 as A,Z as V}from"./app-f79836f7.js";import"./transition-53b06f51.js";import"./dialog-1dde479c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ExclamationCircleIcon-b60ff688.js";import"./XCircleIcon-e68c9a12.js";function S(b,f){return o(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),t("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"})])}const I={key:0,class:"relative flex flex-col items-start justify-center gap-4 px-6 py-4"},M={class:"flex w-full items-start gap-4"},R={class:"flex size-16 shrink-0"},Z=t("div",{class:"flex-1"},[t("h3",{class:"text-xl font-semibold leading-6 text-gray-600"}," Publish Translations "),t("p",{class:"mt-1 text-sm text-gray-500"}," Be cautious when publishing, as this action will update your project with all translations and changes made in the database, overwriting project files. ")],-1),$={class:"w-full text-center"},D=t("strong",null,"Warning:",-1),F=t("span",null,"Download",-1),U={key:1,class:"relative flex flex-col items-start justify-center gap-4 px-6 py-4"},W=t("div",{class:"mx-auto flex size-12 shrink-0 items-center justify-center"},[t("span",{role:"img",class:"text-4xl"},"🤔")],-1),H=t("div",{class:"w-full text-center"},[t("h3",{class:"text-xl font-semibold leading-6 text-gray-600"}," What are you trying to do? "),t("p",{class:"mt-4 text-sm text-gray-500"}," Add languages to your project, then come back to publish translations when you're ready. ")],-1),K=[W,H],ot=E({__name:"publish-translations",props:{canPublish:{type:Boolean},isProductionEnv:{type:Boolean}},setup(b){const f=T(),{close:d}=L(),l=v(!1),n=v(!1),x=()=>{l.value=!0,N.post(route("ltu.translation.export"),{},{preserveScroll:!0,onSuccess:()=>{l.value=!1,d()}})},w=()=>{n.value=!0,fetch(route("ltu.translation.download")).then(async e=>{let g=await e.blob();n.value=!1;const a=document.createElement("a"),u=window.URL.createObjectURL(g);a.download="lang.zip",a.href=u,document.body.appendChild(a),a.click(),document.body.removeChild(a),n.value=!1,d()}).catch(e=>{f.error("Something went wrong, please try again.",{icon:!0,position:A.BOTTOM_CENTER})})};return(e,g)=>{const a=V,u=z,y=B,p=C,k=P;return o(),c(O,null,[i(a,{title:"Add Languages"}),i(k,{size:"lg"},{default:r(()=>[e.canPublish?(o(),c("div",I,[t("div",M,[t("div",R,[i(u,{class:"size-16 text-blue-300"})]),Z]),t("div",$,[e.isProductionEnv?h("",!0):(o(),m(y,{key:0,variant:"warning",class:"text-left"},{default:r(()=>[D,_(" This is a Production Environment. Publishing translations will causing issues with version control and other developers, Please use the download button below instead. ")]),_:1})),e.isProductionEnv?h("",!0):(o(),m(p,{key:1,disabled:s(l)||s(n),"is-loading":s(n),variant:"dark",size:"lg",class:"mt-4","full-width":"",target:"_blank",onClick:w},{default:r(()=>[i(s(S),{class:"size-4"}),F]),_:1},8,["disabled","is-loading"]))])])):(o(),c("div",U,K)),t("div",{class:j(["grid grid-cols-1 gap-6 border-t px-6 py-4",{"md:grid-cols-2":e.canPublish}])},[i(p,{variant:"secondary",type:"button",size:"lg",tabindex:"1",onClick:s(d)},{default:r(()=>[_(" Close ")]),_:1},8,["onClick"]),e.canPublish?(o(),m(p,{key:0,variant:"primary",type:"button",size:"lg",disabled:s(l)||s(n),"is-loading":s(l),onClick:x},{default:r(()=>[_(" Publish ")]),_:1},8,["disabled","is-loading"])):h("",!0)],2)]),_:1})],64)}}});export{ot as default};