import{d as e,e as t}from"../.pnpm/.pnpm.ec78171a.js";const n={},o=function(e,t,o){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in n)return;n[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!o)for(let n=r.length-1;n>=0;n--){const o=r[n];if(o.href===e&&(!t||"stylesheet"===o.rel))return}else if(document.querySelector(`link[href="${e}"]${s}`))return;const p=document.createElement("link");return p.rel=t?"stylesheet":"modulepreload",t||(p.as="script",p.crossOrigin=""),p.href=e,document.head.appendChild(p),t?new Promise(((t,n)=>{p.addEventListener("load",t),p.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},r=e({history:t(),routes:[{path:"/",component:()=>o((()=>import("../components/home.a8b54d56.js")),["js/components/home.a8b54d56.js","js/.pnpm/.pnpm.ec78171a.js","assets/.pnpm-a2176d73.css","js/header/header.4450f6ae.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","assets/header-685109aa.css"])},{path:"/caddy",component:()=>o((()=>import("../components/caddy.c4375523.js")),["js/components/caddy.c4375523.js","js/.pnpm/.pnpm.ec78171a.js","assets/.pnpm-a2176d73.css","js/header/header.4450f6ae.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","assets/header-685109aa.css"])},{path:"/nvpress",component:()=>o((()=>import("../components/nvpress.65692be5.js")),["js/components/nvpress.65692be5.js","js/.pnpm/.pnpm.ec78171a.js","assets/.pnpm-a2176d73.css","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/header/header.4450f6ae.js","assets/header-685109aa.css"])},{path:"/ftp",component:()=>o((()=>import("../components/ftp.4792a56c.js")),["js/components/ftp.4792a56c.js","js/.pnpm/.pnpm.ec78171a.js","assets/.pnpm-a2176d73.css","js/header/header.4450f6ae.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","assets/header-685109aa.css"])},{path:"/docker",component:()=>o((()=>import("../components/docker.71141002.js")),["js/components/docker.71141002.js","js/.pnpm/.pnpm.ec78171a.js","assets/.pnpm-a2176d73.css","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","js/header/header.4450f6ae.js","assets/header-685109aa.css"])},{path:"/login",component:()=>o((()=>import("../components/login.5716518b.js")),["js/components/login.5716518b.js","js/.pnpm/.pnpm.ec78171a.js","assets/.pnpm-a2176d73.css","js/header/header.4450f6ae.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.1b428a4d.js","assets/header-685109aa.css"])}]});export{r};
