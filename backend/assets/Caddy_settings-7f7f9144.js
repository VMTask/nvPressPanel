import{A as _,al as i,am as d,z as p,az as m,L as f,o as y,k as g,w as t,B as e,j as s,C as k,D as h}from"./index-68af38a3.js";import{B as x,a as b}from"./index-af604ea7.js";const $={setup(){const a=i(),o=d();return{route:a,router:o}},async mounted(){if($cookies.isKey("token")==!1)this.router.push("/auth/login");else if($cookies.isKey("token")==!0){let a={username:$cookies.get("username"),password:$cookies.get("token")};try{(await p.post("/api/auth/login",a)).data.status=="403"&&this.router.push("/auth/login")}catch(o){m.error(o)}}}};function B(a,o,C,w,L,v){const r=b,n=x,u=k,c=h,l=f;return y(),g(l,{style:{padding:"0 24px",background:"rgb(var(--gray-2))"}},{default:t(()=>[e(n,{style:{margin:"16px 0"}},{default:t(()=>[e(r,null,{default:t(()=>[s("主页")]),_:1}),e(r,null,{default:t(()=>[s("设置")]),_:1}),e(r,null,{default:t(()=>[s("Caddy")]),_:1})]),_:1}),e(u,{style:{color:"var(--color-text-1)"}}),e(c,{style:{color:"var(--color-text-1)"}},{default:t(()=>[s("Footer")]),_:1})]),_:1})}const K=_($,[["render",B]]);export{K as default};