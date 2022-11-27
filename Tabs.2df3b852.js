import{r as a}from"./chunks/index.489a0169.js";import{s as p}from"./chunks/index.e3b0c442.46d97fc1.js";import{j as x}from"./chunks/jsx-runtime.d04579fd.js";let d=[],T=t=>{let e,n=[],r={lc:0,value:t,set(s){r.value=s,r.notify()},get(){return r.lc||r.listen(()=>{})(),r.value},notify(s){e=n;let o=!d.length;for(let i=0;i<e.length;i++)d.push(e[i],r.value,s);if(o){for(let i=0;i<d.length;i+=3)d[i](d[i+1],d[i+2]);d.length=0}},listen(s){return n===e&&(n=n.slice()),r.lc=n.push(s),()=>{n===e&&(n=n.slice());let o=n.indexOf(s);~o&&(n.splice(o,1),r.lc--)}},subscribe(s){let o=r.listen(s);return s(r.value),o},off(){}};return r},C=(t={})=>{let e=T(t);return e.setKey=function(n,r){typeof r>"u"?n in e.value&&(e.value={...e.value},delete e.value[n],e.notify(n)):e.value[n]!==r&&(e.value={...e.value,[n]:r},e.notify(n))},e};function N(t,e,n){let r=new Set([...e,void 0]);return t.listen((s,o)=>{r.has(o)&&n(s,o)})}const R=T(0),E=C({});function O(){const t=R.get();return R.set(t+1),t}var j={exports:{}},I={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=a.exports;function F(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var P=typeof Object.is=="function"?Object.is:F,k=b.useState,A=b.useEffect,D=b.useLayoutEffect,Q=b.useDebugValue;function W(t,e){var n=e(),r=k({inst:{value:n,getSnapshot:e}}),s=r[0].inst,o=r[1];return D(function(){s.value=n,s.getSnapshot=e,g(s)&&o({inst:s})},[t,n,e]),A(function(){return g(s)&&o({inst:s}),t(function(){g(s)&&o({inst:s})})},[t]),Q(n),n}function g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!P(t,n)}catch{return!0}}function X(t,e){return e()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?X:W;I.useSyncExternalStore=b.useSyncExternalStore!==void 0?b.useSyncExternalStore:_;(function(t){t.exports=I})(j);function q(t,e={}){let n=a.exports.useCallback(s=>e.keys?N(t,e.keys,s):t.listen(s),[e.keys,t]),r=t.get.bind(t);return j.exports.useSyncExternalStore(n,r,r)}function G(t,e){const n=q(E),r=a.exports.useState(t);if(!e)return r;const s=n[e]?.curr??t;function o(i){if(e)E.setKey(e,{curr:i});else throw new Error("[Tabs] Looks like a sharedStore key is no longer present on your tab view! If your store key is dynamic, consider using a static string value instead.")}return[s,o]}const w="tab.",$="panel.";function z(t){const[e]=t;return e.startsWith(w)}function H(t){const[e]=t;return e.startsWith($)}function y(t){return t.replace(new RegExp(`^${w}`),"")}function S(t){return t.replace(new RegExp(`^${$}`),"")}function V({sharedStore:t,...e}){const n=O(),r=Object.entries(e).filter(z),s=Object.entries(e).filter(H),o=a.exports.useRef({}),i=a.exports.useRef(null),m=a.exports.useRef(null),v=a.exports.useRef(null),B=s[0]?.[0]??"",[f,K]=G(S(B),t);function h(u,l){t&&(i.current=l),K(y(u))}a.exports.useEffect(()=>{i.current&&(i.current.scrollIntoView({behavior:"smooth"}),i.current=null)},[f]),a.exports.useLayoutEffect(()=>{const u=o?.current[`tab.${f}`];if(v.current&&m.current&&u){const l=u.getBoundingClientRect(),c=m.current.getBoundingClientRect();v.current.style.width||(v.current.style.width="1px"),v.current.style.transform=`translateX(${l.left-c.left}px) scaleX(${l.width})`}},[f]);function L(u){if(u.key==="ArrowLeft"){const l=r.findIndex(([c])=>y(c)===f);if(l>0){const[c]=r[l-1];h(c,o.current[c]),o.current[c]?.focus()}}if(u.key==="ArrowRight"){const l=r.findIndex(([c])=>y(c)===f);if(l<r.length-1){const[c]=r[l+1];h(c,o.current[c]),o.current[c]?.focus()}}}return x.exports.jsxs("div",{className:p.container,children:[x.exports.jsx("div",{className:p["tab-scroll-overflow"],children:x.exports.jsxs("div",{ref:m,className:`${p.tablist} TabGroup no-flex`,role:"tablist",onKeyDown:L,children:[r.map(([u,l])=>x.exports.jsx("button",{ref:c=>o.current[u]=c,onClick:()=>h(u,o.current[u]),"aria-selected":f===y(u),tabIndex:f===y(u)?0:-1,role:"tab",type:"button",className:p.tab,id:`${n}-${u}`,children:l},u)),x.exports.jsx("span",{ref:v,className:p.selectedIndicator,"aria-hidden":"true"})]})}),s.map(([u,l])=>x.exports.jsx("div",{hidden:f!==S(u),role:"tabpanel","aria-labelledby":`${n}-${w}${S(u)}`,className:p.tabpanel,children:l},u))]})}export{V as default};