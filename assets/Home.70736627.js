import{g as t,u as e,h as a,i as s,o as i,c as l,b as o,w as n,f as c,t as r,j as v,_ as f,p as d,k as u,F as m,l as k,r as p,a as h,m as g}from"./app.17264aa3.js";d("data-v-0cb9fda2");const y={key:0,class:"home-hero"},x={key:0,class:"figure"},_=["src","alt"],I={key:1,id:"main-title",class:"title"},T={key:2,class:"description"};u();var b=t({setup(t){const{site:d,frontmatter:u}=e(),m=a((()=>{const{heroImage:t,heroText:e,tagline:a,actionLink:s,actionText:i}=u.value;return t||e||a||s&&i})),k=a((()=>u.value.heroText||d.value.title));return(t,e)=>s(m)?(i(),l("header",y,[s(u).heroImage?(i(),l("figure",x,[o("img",{class:"image",src:s(n)(s(u).heroImage),alt:s(u).heroAlt},null,8,_)])):c("v-if",!0),s(k)?(i(),l("h1",I,r(s(k)),1)):c("v-if",!0),s(u).tagline?(i(),l("p",T,r(s(u).tagline),1)):c("v-if",!0),s(u).actionLink&&s(u).actionText?(i(),v(f,{key:3,item:{link:s(u).actionLink,text:s(u).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(u).altActionLink&&s(u).altActionText?(i(),v(f,{key:4,item:{link:s(u).altActionLink,text:s(u).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});b.__scopeId="data-v-0cb9fda2",d("data-v-e39c13e0");const A={key:0,class:"home-features"},L={class:"wrapper"},$={class:"container"},j={class:"features"},w={key:0,class:"title"},C={key:1,class:"details"};u();var F=t({setup(t){const{frontmatter:n}=e(),v=a((()=>n.value.features&&n.value.features.length>0)),f=a((()=>n.value.features?n.value.features:[]));return(t,e)=>s(v)?(i(),l("div",A,[o("div",L,[o("div",$,[o("div",j,[(i(!0),l(m,null,k(s(f),((t,e)=>(i(),l("section",{key:e,class:"feature"},[t.title?(i(),l("h2",w,r(t.title),1)):c("v-if",!0),t.details?(i(),l("p",C,r(t.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});F.__scopeId="data-v-e39c13e0",d("data-v-30918238");const q={key:0,class:"footer"},z={class:"container"},B={class:"text"};u();var D=t({setup(t){const{frontmatter:a}=e();return(t,e)=>s(a).footer?(i(),l("footer",q,[o("div",z,[o("p",B,r(s(a).footer),1)])])):c("v-if",!0)}});D.__scopeId="data-v-30918238",d("data-v-32eddf2f");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};u();var H=t({setup:t=>(t,e)=>{const a=p("Content");return i(),l("main",E,[h(b),g(t.$slots,"hero",{},void 0,!0),h(F),o("div",G,[h(a)]),g(t.$slots,"features",{},void 0,!0),h(D),g(t.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-32eddf2f";export{H as default};
