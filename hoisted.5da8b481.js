import"./chunks/HeadCommon.astro_astro_type_script_index_1_lang.2cf439fb.js";import"./chunks/LeftSidebar.astro_astro_type_script_index_0_lang.13436b4b.js";class i{static key="astro-tutorial-progress";static pageKey=i.slugFromPathname(window.location.pathname);static state={[i.pageKey]:{done:!1,lists:{}},...i.load()};static subscribers=new Map;static initialiseList(t){i.pageState.lists[t]||(i.pageState.lists[t]={primary:[],secondary:[]})}static initaliseSubList(t,e,s){i.pageState.lists[t][e].length!==s&&(i.pageState.lists[t][e]=Array.from({length:s},()=>!1),i.store())}static getSubListItem(t,e,s){return i.pageState.lists[t][e][s]}static setSubListItem(t,e,s,n){i.pageState.lists[t][e][s]=n,i.store()}static getPageDone(t){const e=i.state[i.slugFromPathname(t)];return!!e&&e.done}static subscribePageDone(t,e){return i.subscribers.set(e,t),e(i.getPageDone(t)),()=>void i.subscribers.delete(e)}static notifySubscribers(){for(const[t,e]of i.subscribers.entries())t(i.getPageDone(e))}static load(){try{const t=JSON.parse(localStorage.getItem(i.key)||"{}");if(i.validate(t))return t}catch{}return{}}static validate(t){return!!t&&typeof t=="object"&&Object.values(t).every(e=>"done"in e&&e.lists)}static store(){i.pageState.done=i.isPageDone,i.notifySubscribers();try{localStorage.setItem(i.key,JSON.stringify(i.state))}catch{}}static get pageState(){return i.state[i.pageKey]}static get isPageDone(){return Object.values(i.pageState.lists).every(i.isListDone)}static isListDone(t){return["primary","secondary"].map(e=>!!t[e].length&&t[e].every(s=>s)).some(e=>e)}static slugFromPathname(t){return t.split("/").slice(2).join("/").replace(/\/$/,"")}}class f extends HTMLElement{key;constructor(){super(),this.key=this.dataset.key,i.initialiseList(this.key),this.upgradeSubList(this.querySelector(".checklist ul"),"primary"),this.upgradeSubList(this.querySelector(".checklist.alternative ul"),"secondary")}upgradeSubList(t,e){if(!t)return;const s=Array.from(t.children);i.initaliseSubList(this.key,e,s.length),s.forEach((n,a)=>this.upgradeTaskItem(n,e,a))}upgradeTaskItem(t,e,s){const n=t.querySelector('input[type="checkbox"]');n.removeAttribute("disabled"),n.checked=i.getSubListItem(this.key,e,s),n.addEventListener("change",a=>{const r=a.currentTarget,{checked:o}=r;i.setSubListItem(this.key,e,s,o)})}}customElements.define("check-list",f);class p extends HTMLElement{#s;#i;#a;#e;#t;constructor(){super(),this.#s=this.dataset.correctLabel,this.#i=this.dataset.incorrectLabel,this.#a=Math.random().toString(),this.#e=this.querySelector(".submit"),this.#t=this.querySelector(".answer"),this.querySelectorAll(".opt-list > li").forEach(t=>this.#r(t))}#r(t){const e=t.querySelector('input[type="radio"]');!e||(e.removeAttribute("disabled"),e.setAttribute("name",this.#a),e.addEventListener("change",()=>{this.#o(),this.#n()}),e.checked&&this.#n())}#o(){this.#t.innerText="",this.#t.classList.remove("wrong","correct"),this.#t.classList.add("sr-only")}#c(t){const e=this.querySelector("input:checked ~ template");e?this.#t.replaceChildren(e.content.cloneNode(!0)):this.#t.innerText=t?this.#s:this.#i,this.#t.classList.remove("sr-only","wrong","correct"),this.#t.classList.add(t?"correct":"wrong")}#n(){this.#e.removeAttribute("disabled"),this.#e.classList.remove("sr-only"),this.#e.onclick=()=>this.#h()}#l(){this.#e.setAttribute("disabled",""),this.#e.classList.add("sr-only"),this.#e.onclick=null}#h(){const t=this.querySelector("input:checked");if(!t)return;this.#l();const e=t.dataset.isCorrect!==void 0&&["","true"].includes(t.dataset.isCorrect);this.#c(e)}}customElements.define("multiple-choice",p);const y="modulepreload",L=function(l){return"/"+l},m={},g=function(t,e,s){if(!e||e.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(e.map(a=>{if(a=L(a),a in m)return;m[a]=!0;const r=a.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(!!s)for(let u=n.length-1;u>=0;u--){const d=n[u];if(d.href===a&&(!r||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${o}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":y,r||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),r)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};if(window.location.pathname.endsWith("/tutorial/6-islands/3/")&&matchMedia("(prefers-reduced-motion: no-preference").matches){const{default:l}=await g(()=>import("./chunks/confetti.module.fb623647.js"),[]),t=(n,a)=>{l({particleCount:Math.floor(200*n),gravity:2,...a})},e=()=>{t(.25,{spread:26,startVelocity:55}),t(.2,{spread:60}),t(.35,{spread:100,decay:.91,scalar:.8}),t(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),t(.1,{spread:135,startVelocity:45})};let s;i.subscribePageDone(window.location.pathname,n=>{n&&s===!1&&(e(),setTimeout(e,300)),s=n})}const b=document.createElement("script");b.setAttribute("defer","");b.setAttribute("src","https://feedback.fish/ff.js?pid=1b24b5d16c81bd");document.body.append(b);class A extends HTMLElement{id=Math.floor(Math.random()*1e11).toString(32);count=0;TabStore=[];PanelStore=[];constructor(){super();const t=this.querySelectorAll(".panels > section"),e=this.querySelector(".tab-list"),s=e.querySelectorAll("a");e.setAttribute("role","tablist");let n=0;Array.prototype.forEach.call(s,(a,r)=>{a.setAttribute("role","tab"),a.setAttribute("id",this.id+"tab"+this.count++),a.setAttribute("tabindex","-1"),a.parentNode.setAttribute("role","presentation"),this.TabStore[r]||this.TabStore.push(new Set),this.TabStore[r].add(a),"initial"in a.dataset&&a.dataset.initial!=="false"&&(n=r),a.addEventListener("click",o=>{o.preventDefault();const h=e.querySelector("[aria-selected]");o.currentTarget!==h&&this.switchTab(o.currentTarget,r)}),a.addEventListener("keydown",o=>{const h=Array.prototype.indexOf.call(s,o.currentTarget),c=o.key==="ArrowLeft"?h-1:o.key==="ArrowRight"?h+1:o.key==="ArrowDown"?"down":null;c!==null&&(o.preventDefault(),c==="down"?t[r].focus():s[c]&&this.switchTab(s[c],c))})}),Array.prototype.forEach.call(t,(a,r)=>{a.setAttribute("role","tabpanel"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-labelledby",s[r].id),a.hidden=!0,this.PanelStore[r]||this.PanelStore.push(new Set),this.PanelStore[r].add(a)}),s[n].removeAttribute("tabindex"),s[n].setAttribute("aria-selected","true"),t[n].hidden=!1}switchTab(t,e){this.TabStore.forEach(s=>s.forEach(n=>{n.removeAttribute("aria-selected"),n.setAttribute("tabindex","-1")})),this.TabStore[e].forEach(s=>{s.removeAttribute("tabindex"),s.setAttribute("aria-selected","true")}),this.PanelStore.forEach(s=>s.forEach(n=>{n.hidden=!0})),this.PanelStore[e].forEach(s=>{s.hidden=!1}),t.focus()}}customElements.define("tabbed-content",A);class k extends HTMLElement{loaded;todoLabel;doneLabel;label;iconPath;constructor(){super(),this.todoLabel=this.dataset.todoLabel,this.doneLabel=this.dataset.doneLabel,this.label=this.querySelector(".sr-only"),this.iconPath=this.querySelector("svg path"),i.subscribePageDone(this.dataset.path,t=>t?this.setDone():this.setTodo()),this.loaded=!0}setTodo(){this.label.innerText=this.todoLabel,this.iconPath.setAttribute("d","M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"),this.iconPath.removeAttribute("fill")}setDone(){this.label.innerText!==this.doneLabel&&(this.label.innerText=this.doneLabel,this.iconPath.setAttribute("d","M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z"),this.iconPath.setAttribute("fill","hsl(var(--color-green))"),this.loaded&&this.animateDone())}animateDone(){!matchMedia("(prefers-reduced-motion: no-preference").matches||this.querySelector("svg").animate([{transform:"scale(1.1)"}],{duration:200,easing:"ease-in-out"})}}customElements.define("check-mark",k);class S extends HTMLElement{loaded;paths;doneCount;segments;constructor(){super(),this.paths=JSON.parse(this.dataset.paths||"[]"),this.doneCount=this.querySelector(".sr-done-count"),this.segments=this.querySelectorAll(".segment"),this.paths.forEach(t=>i.subscribePageDone(t,()=>this.updateDone())),this.loaded=!0}updateDone(){const t=this.getDoneCount();this.doneCount.textContent=String(t),this.segments.forEach((e,s)=>{const n=s<t,a=this.loaded&&!e.classList.contains("done");n?(e.classList.add("done"),a&&this.animateDone(e)):e.classList.remove("done")})}animateDone(t){!matchMedia("(prefers-reduced-motion: no-preference").matches||t.animate([{transform:"scale(1.1)"}],{duration:200,easing:"ease-in-out"})}getDoneCount(){return this.paths.map(i.getPageDone).filter(t=>t).length}}customElements.define("unit-progress-icon",S);