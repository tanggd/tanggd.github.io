import{o as a,c as n,e as s}from"./app.17264aa3.js";const e='{"title":"数据驱动","description":"","frontmatter":{},"headers":[{"level":2,"title":"new Vue()","slug":"new-vue"}],"relativePath":"vue-source-code/data-driven.md","lastUpdated":1633616877889}',p={},t=[s('<h1 id="数据驱动"><a class="header-anchor" href="#数据驱动" aria-hidden="true">#</a> 数据驱动</h1><p>数据驱动视图。</p><p>不直接操作DOM。</p><p>DOM和数据一一映射。</p><p>模板和数据如何渲染成最终的DOM？</p><h2 id="new-vue"><a class="header-anchor" href="#new-vue" aria-hidden="true">#</a> new Vue()</h2><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  {{ message }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript line-numbers-mode"><pre><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    message<span class="token operator">:</span> <span class="token string">&#39;Hello Vue!&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',8)];p.render=function(s,e,p,l,o,c){return a(),n("div",null,t)};export{e as __pageData,p as default};