import{o as n,c as s,e as a}from"./app.17264aa3.js";const e='{"title":"coding一下","description":"","frontmatter":{},"headers":[{"level":2,"title":"instanceof","slug":"instanceof"},{"level":2,"title":"new","slug":"new"},{"level":2,"title":"call","slug":"call"},{"level":2,"title":"apply","slug":"apply"},{"level":2,"title":"bind","slug":"bind"},{"level":2,"title":"Promise","slug":"promise"},{"level":2,"title":"Event Bus","slug":"event-bus"},{"level":2,"title":"防抖","slug":"防抖"},{"level":2,"title":"节流","slug":"节流"},{"level":2,"title":"深复制","slug":"深复制"}],"relativePath":"summary/coding/writeMethod.md","lastUpdated":1633616877889}',p={},t=[a('<h1 id="coding一下"><a class="header-anchor" href="#coding一下" aria-hidden="true">#</a> coding一下</h1><h2 id="instanceof"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2><p><code>instanceof</code> 操作符测试构造函数的prototype属性是否出现在对象的原型链上。返回值是布尔值。</p><div class="language-javascript line-numbers-mode"><pre><code><span class="token comment">// 用法</span>\nobject <span class="token keyword">instanceof</span> <span class="token class-name">constructor</span>\n<span class="token comment">// eg:</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>  <span class="token comment">// true</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>  <span class="token comment">// true</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Function</span>  <span class="token comment">// false</span>\n\n<span class="token comment">// 实现</span>\n<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  leftProto <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__\n  <span class="token keyword">const</span> rightPrototype <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype\n  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftProto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftProto <span class="token operator">===</span> rightPrototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n    leftProto <span class="token operator">=</span> leftProto<span class="token punctuation">.</span>__proto__\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="new"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h2><div class="language-javascript line-numbers-mode"><pre><code><span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">Con<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 创建新对象，并连接到构造函数的原型上</span>\n  <span class="token keyword">const</span> newObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Con</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>\n  <span class="token comment">// 绑定this，并执行构造函数</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>newObj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n  <span class="token comment">// 返回对象</span>\n  <span class="token keyword">return</span> <span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> res <span class="token operator">:</span> newObj\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="call"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h2><h2 id="apply"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><h2 id="bind"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h2><h2 id="promise"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><h2 id="event-bus"><a class="header-anchor" href="#event-bus" aria-hidden="true">#</a> Event Bus</h2><h2 id="防抖"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><h2 id="节流"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h2><h2 id="深复制"><a class="header-anchor" href="#深复制" aria-hidden="true">#</a> 深复制</h2>',14)];p.render=function(a,e,p,o,l,c){return n(),s("div",null,t)};export{e as __pageData,p as default};
