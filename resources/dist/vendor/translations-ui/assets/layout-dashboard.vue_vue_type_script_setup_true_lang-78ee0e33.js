import{o as P,h as S,f as n,r as B,y as oe,s as Y,d as G,v as I,x as de,D as N,F as A,z as pe,A as le,n as ke,b as f,w as y,q as Q,E as Se,a as R,t as L,u as w,p as $e,c as ve,i as fe,e as se,k as Ee,Y as Oe}from"./app-be1c9ac0.js";import{_ as Be}from"./icon-publish-4d97f66d.js";import{_ as Ie}from"./logo-ba85f2b2.js";import{u as Ce}from"./use-auth-041b7b34.js";import{o,m as ae,E as ne,u as V,d as Fe,l as H,V as Me,p as Ne,e as Te,y as je,w as De,h as Le,H as Z,t as z,n as he,f as X,a as ee,g as me,i as W,b as T,P as j,N as F,j as M,c as te,S as ze,k as re}from"./transition-dd822b54.js";function Ae(s,r){return P(),S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}function ue(s,r){return P(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"})])}function Ve(s,r){return P(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function He(s,r){return P(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}function ie(s,r){if(s)return s;let d=r??"button";if(typeof d=="string"&&d.toLowerCase()==="button")return"button"}function Ge(s,r){let d=B(ie(s.value.type,s.value.as));return oe(()=>{d.value=ie(s.value.type,s.value.as)}),Y(()=>{var g;d.value||o(r)&&o(r)instanceof HTMLButtonElement&&!((g=o(r))!=null&&g.hasAttribute("type"))&&(d.value="button")}),d}var Ke=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Ke||{});let be=Symbol("PopoverContext");function J(s){let r=le(be,null);if(r===null){let d=new Error(`<${s} /> is missing a parent <${xe.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,J),d}return r}let Re=Symbol("PopoverGroupContext");function ge(){return le(Re,null)}let _e=Symbol("PopoverPanelContext");function qe(){return le(_e,null)}let xe=G({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(s,{slots:r,attrs:d,expose:g}){var t;let e=B(null);g({el:e,$el:e});let c=B(1),h=B(null),O=B(null),k=B(null),i=B(null),C=I(()=>ae(e)),D=I(()=>{var l,u;if(!o(h)||!o(i))return!1;for(let U of document.querySelectorAll("body > *"))if(Number(U==null?void 0:U.contains(o(h)))^Number(U==null?void 0:U.contains(o(i))))return!0;let v=ne(),$=v.indexOf(o(h)),q=($+v.length-1)%v.length,ye=($+1)%v.length,we=v[q],Pe=v[ye];return!((l=o(i))!=null&&l.contains(we))&&!((u=o(i))!=null&&u.contains(Pe))}),x={popoverState:c,buttonId:B(null),panelId:B(null),panel:i,button:h,isPortalled:D,beforePanelSentinel:O,afterPanelSentinel:k,togglePopover(){c.value=V(c.value,{0:1,1:0})},closePopover(){c.value!==1&&(c.value=1)},close(l){x.closePopover();let u=(()=>l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?o(l):o(x.button):o(x.button))();u==null||u.focus()}};de(be,x),Fe(I(()=>V(c.value,{0:H.Open,1:H.Closed})));let K={buttonId:x.buttonId,panelId:x.panelId,close(){x.closePopover()}},E=ge(),m=E==null?void 0:E.registerPopover,[_,p]=Me(),a=Ne({mainTreeNodeRef:E==null?void 0:E.mainTreeNodeRef,portals:_,defaultContainers:[h,i]});function b(){var l,u,v,$;return($=E==null?void 0:E.isFocusWithinPopoverGroup())!=null?$:((l=C.value)==null?void 0:l.activeElement)&&(((u=o(h))==null?void 0:u.contains(C.value.activeElement))||((v=o(i))==null?void 0:v.contains(C.value.activeElement)))}return Y(()=>m==null?void 0:m(K)),Te((t=C.value)==null?void 0:t.defaultView,"focus",l=>{var u,v;l.target!==window&&l.target instanceof HTMLElement&&c.value===0&&(b()||h&&i&&(a.contains(l.target)||(u=o(x.beforePanelSentinel))!=null&&u.contains(l.target)||(v=o(x.afterPanelSentinel))!=null&&v.contains(l.target)||x.closePopover()))},!0),je(a.resolveContainers,(l,u)=>{var v;x.closePopover(),De(u,Le.Loose)||(l.preventDefault(),(v=o(h))==null||v.focus())},I(()=>c.value===0)),()=>{let l={open:c.value===0,close:x.close};return N(A,[N(p,{},()=>Z({theirProps:{...s,...d},ourProps:{ref:e},slot:l,slots:r,attrs:d,name:"Popover"})),N(a.MainTreeNode)])}}}),ce=G({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${z()}`}},inheritAttrs:!1,setup(s,{attrs:r,slots:d,expose:g}){let t=J("PopoverButton"),e=I(()=>ae(t.button));g({el:t.button,$el:t.button}),oe(()=>{t.buttonId.value=s.id}),pe(()=>{t.buttonId.value=null});let c=ge(),h=c==null?void 0:c.closeOthers,O=qe(),k=I(()=>O===null?!1:O.value===t.panelId.value),i=B(null),C=`headlessui-focus-sentinel-${z()}`;k.value||Y(()=>{t.button.value=i.value});let D=Ge(I(()=>({as:s.as,type:r.type})),i);function x(a){var b,l,u,v,$;if(k.value){if(t.popoverState.value===1)return;switch(a.key){case T.Space:case T.Enter:a.preventDefault(),(l=(b=a.target).click)==null||l.call(b),t.closePopover(),(u=o(t.button))==null||u.focus();break}}else switch(a.key){case T.Space:case T.Enter:a.preventDefault(),a.stopPropagation(),t.popoverState.value===1&&(h==null||h(t.buttonId.value)),t.togglePopover();break;case T.Escape:if(t.popoverState.value!==0)return h==null?void 0:h(t.buttonId.value);if(!o(t.button)||(v=e.value)!=null&&v.activeElement&&!(($=o(t.button))!=null&&$.contains(e.value.activeElement)))return;a.preventDefault(),a.stopPropagation(),t.closePopover();break}}function K(a){k.value||a.key===T.Space&&a.preventDefault()}function E(a){var b,l;s.disabled||(k.value?(t.closePopover(),(b=o(t.button))==null||b.focus()):(a.preventDefault(),a.stopPropagation(),t.popoverState.value===1&&(h==null||h(t.buttonId.value)),t.togglePopover(),(l=o(t.button))==null||l.focus()))}function m(a){a.preventDefault(),a.stopPropagation()}let _=he();function p(){let a=o(t.panel);if(!a)return;function b(){V(_.value,{[M.Forwards]:()=>j(a,F.First),[M.Backwards]:()=>j(a,F.Last)})===te.Error&&j(ne().filter(l=>l.dataset.headlessuiFocusGuard!=="true"),V(_.value,{[M.Forwards]:F.Next,[M.Backwards]:F.Previous}),{relativeTo:o(t.button)})}b()}return()=>{let a=t.popoverState.value===0,b={open:a},{id:l,...u}=s,v=k.value?{ref:i,type:D.value,onKeydown:x,onClick:E}:{ref:i,id:l,type:D.value,"aria-expanded":t.popoverState.value===0,"aria-controls":o(t.panel)?t.panelId.value:void 0,disabled:s.disabled?!0:void 0,onKeydown:x,onKeyup:K,onClick:E,onMousedown:m};return N(A,[Z({ourProps:v,theirProps:{...r,...u},slot:b,attrs:r,slots:d,name:"PopoverButton"}),a&&!k.value&&t.isPortalled.value&&N(X,{id:C,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:p})])}}}),Ue=G({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(s,{attrs:r,slots:d}){let g=J("PopoverOverlay"),t=`headlessui-popover-overlay-${z()}`,e=me(),c=I(()=>e!==null?(e.value&H.Open)===H.Open:g.popoverState.value===0);function h(){g.closePopover()}return()=>{let O={open:g.popoverState.value===0};return Z({ourProps:{id:t,"aria-hidden":!0,onClick:h},theirProps:s,slot:O,attrs:r,slots:d,features:W.RenderStrategy|W.Static,visible:c.value,name:"PopoverOverlay"})}}}),We=G({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${z()}`}},inheritAttrs:!1,setup(s,{attrs:r,slots:d,expose:g}){let{focus:t}=s,e=J("PopoverPanel"),c=I(()=>ae(e.panel)),h=`headlessui-focus-sentinel-before-${z()}`,O=`headlessui-focus-sentinel-after-${z()}`;g({el:e.panel,$el:e.panel}),oe(()=>{e.panelId.value=s.id}),pe(()=>{e.panelId.value=null}),de(_e,e.panelId),Y(()=>{var m,_;if(!t||e.popoverState.value!==0||!e.panel)return;let p=(m=c.value)==null?void 0:m.activeElement;(_=o(e.panel))!=null&&_.contains(p)||j(o(e.panel),F.First)});let k=me(),i=I(()=>k!==null?(k.value&H.Open)===H.Open:e.popoverState.value===0);function C(m){var _,p;switch(m.key){case T.Escape:if(e.popoverState.value!==0||!o(e.panel)||c.value&&!((_=o(e.panel))!=null&&_.contains(c.value.activeElement)))return;m.preventDefault(),m.stopPropagation(),e.closePopover(),(p=o(e.button))==null||p.focus();break}}function D(m){var _,p,a,b,l;let u=m.relatedTarget;u&&o(e.panel)&&((_=o(e.panel))!=null&&_.contains(u)||(e.closePopover(),((a=(p=o(e.beforePanelSentinel))==null?void 0:p.contains)!=null&&a.call(p,u)||(l=(b=o(e.afterPanelSentinel))==null?void 0:b.contains)!=null&&l.call(b,u))&&u.focus({preventScroll:!0})))}let x=he();function K(){let m=o(e.panel);if(!m)return;function _(){V(x.value,{[M.Forwards]:()=>{var p;j(m,F.First)===te.Error&&((p=o(e.afterPanelSentinel))==null||p.focus())},[M.Backwards]:()=>{var p;(p=o(e.button))==null||p.focus({preventScroll:!0})}})}_()}function E(){let m=o(e.panel);if(!m)return;function _(){V(x.value,{[M.Forwards]:()=>{let p=o(e.button),a=o(e.panel);if(!p)return;let b=ne(),l=b.indexOf(p),u=b.slice(0,l+1),v=[...b.slice(l+1),...u];for(let $ of v.slice())if($.dataset.headlessuiFocusGuard==="true"||a!=null&&a.contains($)){let q=v.indexOf($);q!==-1&&v.splice(q,1)}j(v,F.First,{sorted:!1})},[M.Backwards]:()=>{var p;j(m,F.Previous)===te.Error&&((p=o(e.button))==null||p.focus())}})}_()}return()=>{let m={open:e.popoverState.value===0,close:e.close},{id:_,focus:p,...a}=s,b={ref:e.panel,id:_,onKeydown:C,onFocusout:t&&e.popoverState.value===0?D:void 0,tabIndex:-1};return Z({ourProps:b,theirProps:{...r,...a},attrs:r,slot:m,slots:{...d,default:(...l)=>{var u;return[N(A,[i.value&&e.isPortalled.value&&N(X,{id:h,ref:e.beforePanelSentinel,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:K}),(u=d.default)==null?void 0:u.call(d,...l),i.value&&e.isPortalled.value&&N(X,{id:O,ref:e.afterPanelSentinel,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:E})])]}},features:W.RenderStrategy|W.Static,visible:i.value,name:"PopoverPanel"})}}});const Ye={class:"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"},Ze={class:"flex px-2 lg:px-0"},Je={class:"flex shrink-0 items-center"},Qe={"aria-label":"Global",class:"hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4"},Xe={class:"flex items-center lg:hidden"},et=n("span",{class:"absolute -inset-0.5"},null,-1),tt=n("span",{class:"sr-only"},"Open main menu",-1),ot={class:"lg:hidden"},lt={class:"divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black/5"},at={class:"pb-2 pt-3"},nt={class:"flex items-center justify-between px-4"},st=n("h1",{class:"mt-1 text-xl font-medium text-gray-600"},[R("Translations "),n("span",{class:"font-bold text-blue-600"},"UI")],-1),rt={class:"-mr-2"},ut=n("span",{class:"absolute -inset-0.5"},null,-1),it=n("span",{class:"sr-only"},"Close menu",-1),ct={class:"mt-6 space-y-1 px-2"},dt={class:"py-4"},pt={class:"flex items-center px-5"},vt={class:"text-base font-medium text-gray-800"},ft={class:"text-sm font-medium text-gray-500"},ht=n("span",{class:"absolute -inset-1.5"},null,-1),mt=n("span",{class:"sr-only"},"Log Out",-1),bt={class:"hidden gap-4 lg:ml-4 lg:flex lg:items-center"},gt={class:"flex"},_t=n("span",null,"Publish",-1),xt=G({__name:"navbar",setup(s){const r=Ce(),d=[{name:"Dashboard",href:route("home"),current:route().current("home")},{name:"Translations",href:route("ltu.translation.index"),current:route().current("ltu.translation*")||route().current("ltu.source_translation*")||route().current("ltu.phrases*")}];return(g,t)=>{const e=Ie,c=fe,h=Be,O=ke("tooltip");return P(),S("div",Ye,[f(w(xe),{class:"flex h-16 justify-between"},{default:y(({open:k})=>[n("div",Ze,[n("div",Je,[f(c,{href:g.route("ltu.translation.index")},{default:y(()=>[f(e,{class:"h-8 w-auto text-white"})]),_:1},8,["href"])]),n("nav",Qe,[(P(),S(A,null,Q(d,i=>f(c,{key:i.name,href:i.href,class:Se(["rounded-md px-3 py-2 text-sm font-medium",[i.current?"bg-blue-500 text-white":"text-white hover:bg-blue-700 hover:text-white"]]),"aria-current":i.current?"page":void 0},{default:y(()=>[R(L(i.name),1)]),_:2},1032,["href","class","aria-current"])),64))])]),n("div",Xe,[f(w(ce),{class:"relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"},{default:y(()=>[et,tt,f(w(Ve),{class:"block size-6","aria-hidden":"true"})]),_:1})]),f(w(ze),{as:"template",show:k},{default:y(()=>[n("div",ot,[f(w(re),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:y(()=>[f(w(Ue),{class:"fixed inset-0 z-20 bg-black/25","aria-hidden":"true"})]),_:1}),f(w(re),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:y(()=>[f(w(We),{focus:"",class:"absolute right-0 top-0 z-30 w-full max-w-none origin-top p-2 transition"},{default:y(()=>[n("div",lt,[n("div",at,[n("div",nt,[f(c,{href:g.route("ltu.translation.index"),tabindex:"-1",class:"flex items-center gap-3"},{default:y(()=>[f(e,{class:"h-8 w-auto"}),st]),_:1},8,["href"]),n("div",rt,[f(w(ce),{class:"relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"},{default:y(()=>[ut,it,f(w(He),{class:"size-6","aria-hidden":"true"})]),_:1})])]),n("div",ct,[(P(),S(A,null,Q(d,i=>f(c,{key:i.name,href:i.href,class:"block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"},{default:y(()=>[R(L(i.name),1)]),_:2},1032,["href"])),64))])]),n("div",dt,[n("div",pt,[n("div",null,[n("div",vt,L(w(r).name),1),n("div",ft,L(w(r).email),1)]),f(c,{as:"button",method:"POST",href:"{{ route('ltu.logout') }}",class:"relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"},{default:y(()=>[ht,mt,f(w(ue),{class:"size-6","aria-hidden":"true"})]),_:1})])])])]),_:1})]),_:1})])]),_:2},1032,["show"]),n("div",bt,[n("div",gt,[f(c,{href:g.route("ltu.translation.publish"),class:"btn btn-xs btn-success"},{default:y(()=>[f(h,{class:"size-4"}),_t]),_:1},8,["href"])]),$e((P(),ve(c,{href:g.route("ltu.logout"),class:"flex items-center text-white hover:text-gray-900"},{default:y(()=>[f(w(ue),{class:"size-6"})]),_:1},8,["href"])),[[O,"Logout"]])])]),_:1})])}}}),yt={class:"min-h-full"},wt={class:"divide-y bg-blue-600 shadow"},Pt={key:0,class:"overflow-y-auto bg-white py-6"},kt={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between"},St={class:"min-w-0 flex-1"},$t={key:0,class:"flex","aria-label":"Breadcrumb"},Et={role:"list",class:"flex items-center space-x-4"},Ot={key:1,class:"ml-4 whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-700"},Nt=G({__name:"layout-dashboard",props:{breadcrumbs:{}},setup(s){return(r,d)=>{const g=fe;return P(),S("div",yt,[n("header",wt,[f(xt),r.breadcrumbs?(P(),S("div",Pt,[n("div",kt,[n("div",St,[r.breadcrumbs?(P(),S("nav",$t,[n("ol",Et,[n("li",null,[f(g,{href:r.route("ltu.translation.index"),class:"text-sm font-medium text-gray-500 hover:text-gray-700"},{default:y(()=>[R(" Dashboard ")]),_:1},8,["href"])]),(P(!0),S(A,null,Q(r.breadcrumbs,(t,e)=>(P(),S("li",{key:e,class:"flex items-center"},[f(w(Ae),{class:"size-5 shrink-0 text-gray-400","aria-hidden":"true"}),t.link?(P(),ve(g,{key:0,href:t.link,class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},{default:y(()=>[R(L(t.label),1)]),_:2},1032,["href"])):(P(),S("span",Ot,L(t.label),1))]))),128))])])):se("",!0)])])])):se("",!0)]),n("main",null,[Ee(r.$slots,"default")]),f(w(Oe))])}}});export{Nt as _};