import{G as p,U as w}from"./dialog-6f45771e.js";import{d as v,C as y,y as h,v as x,o as g,c as _,w as n,b as c,u as o,f,E as C,k as b,a5 as k,r as d,a6 as E}from"./app-bbf2e22b.js";import{k as m,S}from"./transition-2c6bc955.js";const B=f("div",{class:"fixed inset-0 bg-gray-500/25 backdrop-blur transition-opacity"},null,-1),D={class:"fixed inset-0 overflow-y-auto"},T={class:"flex min-h-full items-center justify-center p-4 text-center"},G=v({__name:"confirmation-dialog",props:{size:{default:"lg"},closeable:{type:Boolean,default:!0},show:{type:Boolean,default:!1}},emits:["close"],setup(u,{emit:t}){const a=u,r=t;y(()=>a.show,e=>{e&&r("close")});const l=()=>{a.closeable&&r("close")};h(()=>document.addEventListener("keydown",e=>e.key==="Escape"&&l()));const i=x(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[a.size]);return(e,s)=>(g(),_(o(S),{appear:"",as:"template",show:e.show},{default:n(()=>[c(o(w),{as:"div",class:"relative z-50",onClose:l},{default:n(()=>[c(o(m),{as:"template","leave-to":"opacity-0",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100",onAfterLeave:l},{default:n(()=>[B]),_:1}),f("div",D,[f("div",T,[c(o(m),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[c(o(p),{class:C([[o(i)],"w-full rounded-2xl bg-white text-left align-middle shadow-xl transition-all"])},{default:n(()=>[b(e.$slots,"default")]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"]))}});function I(){const u=k(),t=d(!1),a=d(!1),r=()=>{a.value=!0};async function l(e,s){t.value=!0;try{e(),t.value=!1,i(),s&&s.onSuccess&&s.onSuccess()}catch{u.error("Something went wrong, please try again.",{icon:!0,position:E.BOTTOM_CENTER}),t.value=!1,s&&s.onError&&s.onError()}}const i=()=>{a.value=!1};return{loading:t,showDialog:a,openDialog:r,performAction:l,closeDialog:i}}export{G as _,I as u};
