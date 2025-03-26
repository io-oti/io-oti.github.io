import{_ as i,c as a,o as t,ak as n}from"./chunks/framework.CzoNZSwu.js";const c=JSON.parse('{"title":"Composition API","description":"","frontmatter":{"author":"Io_oTI","date":"2024-07-12T00:00:00.000Z","publish":false,"tag":"vue","title":"Composition API"},"headers":[],"relativePath":"posts/vue/vue-3/composition-api.md","filePath":"posts/vue/vue-3/composition-api.md","lastUpdated":1742979040000}'),e={name:"posts/vue/vue-3/composition-api.md"};function l(p,s,h,k,o,r){return t(),a("div",null,s[0]||(s[0]=[n(`<p>组合式 API 是 Vue 中的一组用于编写组件和组合式函数的函数。</p><p>该词也用于描述用于编写组件的两种主要风格之一，另一种是选项式 API。通过组合式 API 编写的组件使用 <code>&lt;script setup&gt;</code> 或显式的 <code>setup()</code> 函数。</p><h2 id="setup-函数" tabindex="-1">setup() 函数 <a class="header-anchor" href="#setup-函数" aria-label="Permalink to &quot;setup() 函数&quot;">​</a></h2><p><code>setup()</code> 函数是组合式 API 的核心。它是一个函数，它接收一个上下文对象作为参数，并返回一个对象，包含了组件的状态、数据、方法和生命周期钩子。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> ref</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> onMounted </span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">export</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> default</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">  setup</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> count </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> ref</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">0</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">    onMounted</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">()</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> =&gt;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">      console</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">log</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&#39;Component mounted&#39;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    return</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#E64553;--shiki-dark:#EBA0AC;">      count</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span></span></code></pre></div><ol><li><code>ref()</code> 函数用于创建响应式变量。</li><li><code>onMounted()</code> 函数用于注册一个回调函数，在组件被挂载后执行。</li><li><code>return</code> 语句返回一个对象，包含了组件的状态 <code>count</code>。</li></ol><h2 id="响应式-核心" tabindex="-1">响应式: 核心 <a class="header-anchor" href="#响应式-核心" aria-label="Permalink to &quot;响应式: 核心&quot;">​</a></h2><p>✍ 敬请期待</p><h2 id="响应式-工具" tabindex="-1">响应式: 工具 <a class="header-anchor" href="#响应式-工具" aria-label="Permalink to &quot;响应式: 工具&quot;">​</a></h2><p>✍ 敬请期待</p><h2 id="响应式-进阶" tabindex="-1">响应式: 进阶 <a class="header-anchor" href="#响应式-进阶" aria-label="Permalink to &quot;响应式: 进阶&quot;">​</a></h2><p>✍ 敬请期待</p><h2 id="生命周期钩子" tabindex="-1">生命周期钩子 <a class="header-anchor" href="#生命周期钩子" aria-label="Permalink to &quot;生命周期钩子&quot;">​</a></h2><p>✍ 敬请期待</p><h2 id="依赖注入" tabindex="-1">依赖注入 <a class="header-anchor" href="#依赖注入" aria-label="Permalink to &quot;依赖注入&quot;">​</a></h2><p>✍ 敬请期待</p><h2 id="辅助" tabindex="-1">辅助 <a class="header-anchor" href="#辅助" aria-label="Permalink to &quot;辅助&quot;">​</a></h2><p>✍ 敬请期待</p>`,18)]))}const F=i(e,[["render",l]]);export{c as __pageData,F as default};
