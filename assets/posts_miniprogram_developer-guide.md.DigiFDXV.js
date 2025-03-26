import{_ as i,c as a,o as n,ak as t}from"./chunks/framework.CzoNZSwu.js";const y=JSON.parse('{"title":"微信小程序开发指南","description":"","frontmatter":{"author":"Io_oTI","date":"2024-10-30T00:00:00.000Z","publish":true,"tag":"miniprogram","title":"微信小程序开发指南"},"headers":[],"relativePath":"posts/miniprogram/developer-guide.md","filePath":"posts/miniprogram/developer-guide.md","lastUpdated":1742979040000}'),h={name:"posts/miniprogram/developer-guide.md"};function l(p,s,k,e,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<p>推荐第一次开发微信小程序的开发者阅读微信官方的文档<a href="https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=0008aeea9a8978ab0086a685851c0a" target="_blank" rel="noreferrer">《小程序开发指南》</a>，本文的是对此文档的一些补充。</p><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h2><p>使用 npm 的命令需安装 node.js，请先自行安装。</p><ol><li><p>安装 npm 包</p><p>在小程序 package.json 所在的目录中执行命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">npm</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> install</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> [package </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">name]</span></span></code></pre></div></li><li><p>构建 npm 包</p><p>点击微信开发者工具中的菜单栏：<code>工具</code> --&gt; <code>构建 npm</code></p><p>等待构建完成后，package.json 所在的目录中会有一个 <code>miniprogram_npm</code> 文件夹， 这里面就是已经构建好的 npm 包。</p></li><li><p>在 JS 文件中引用：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> packageName </span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;packageName&#39;</span></span></code></pre></div></li></ol><p>详细步骤可参考官方文档：<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html" target="_blank" rel="noreferrer">npm 支持</a></p><h2 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h2><p>小程序有许多地方与 Vue 很像，但是并没有 Vue 的 computed 和 watch，想要使用这些特性可以安装并构建一个 npm 包来实现。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">npm</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> install</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --save</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> miniprogram-computed</span></span></code></pre></div><p>在 Component 构造器中的使用示例：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pyu05" id="tab-dCYLvQ4" checked><label data-title="computed" for="tab-dCYLvQ4">computed</label><input type="radio" name="group-pyu05" id="tab-QNUfyuT"><label data-title="watch" for="tab-QNUfyuT">watch</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> computedBehavior </span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;miniprogram-computed&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Component</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  behaviors</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> [computedBehavior]</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    a</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    b</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  computed</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">    sum</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EBA0AC;--shiki-dark-font-style:italic;">data</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">      return</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">a </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">+</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">b</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> computedBehavior </span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;miniprogram-computed&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Component</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  behaviors</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> [computedBehavior]</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    a</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    b</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    sum</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 2</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  watch</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">    &#39;a, b&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> function</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EBA0AC;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EBA0AC;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;">      this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">setData</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">        sum</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> a </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">+</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> b</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">      }</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span></code></pre></div></div></div><p>在 Page 构造器中 computed 的使用示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> computedBehavior </span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;miniprogram-computed&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Page</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  behaviors</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> [</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">    Behavior</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">      behaviors</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> [computedBehavior]</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">      computed</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">        sum</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">(</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EBA0AC;--shiki-dark-font-style:italic;">data</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">          return</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">a </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">+</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">b</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">        },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">      }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    }</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  ]</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    a</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    b</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span></code></pre></div><p>更多详细信息可以参考：<a href="https://github.com/wechat-miniprogram/computed" target="_blank" rel="noreferrer">miniprogram-computed</a></p><h2 id="状态管理器" tabindex="-1">状态管理器 <a class="header-anchor" href="#状态管理器" aria-label="Permalink to &quot;状态管理器&quot;">​</a></h2><p>与 computed 的情况相似，如果需要用到全局的状态管理，则需要安装并构建 <code>mobx-miniprogram</code> 和 <code>mobx-miniprogram-bindings</code> npm 包:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">npm</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> install</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --save</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> mobx-miniprogram</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> mobx-miniprogram-bindings</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-B41dI" id="tab-_HAK-TI" checked><label data-title="创建 store" for="tab-_HAK-TI">创建 store</label><input type="radio" name="group-B41dI" id="tab-9FnmUfN"><label data-title="在 Component 构造器中使用" for="tab-9FnmUfN">在 Component 构造器中使用</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">// store.js</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> observable</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> action </span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;mobx-miniprogram&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">// 创建 store 时可以采用任何 mobx 的接口风格</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">// 这里以传统的 observable 风格为例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">export</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> store </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> observable</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  // data</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  numA</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  numB</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 2</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  // computed</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">  get</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> sum</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    return</span><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">numA </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">+</span><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">numB</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  // actions</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  update</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> action</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">function</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> ()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">    const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> sum </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">sum</span></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;">    this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">numA </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">numB</span></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;">    this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">numB </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> sum</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  }</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> storeBindingsBehavior </span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;mobx-miniprogram-bindings&#39;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> store </span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;./store&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Component</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">{</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  behaviors</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> [storeBindingsBehavior]</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"> // 添加这个 behavior</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    someData</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;...&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  storeBindings</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    store</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    fields</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">      numA</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> ()</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> =&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> store</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">numA</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">      numB</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> (</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EBA0AC;--shiki-dark-font-style:italic;">store</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> =&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> store</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">numB</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">      sum</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;sum&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    },</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">    actions</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">      buttonTap</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;update&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  methods</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">    myMethod</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#F38BA8;">      this</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">sum </span><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">// 来自于 MobX store 的字段</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">    },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">  },</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span></code></pre></div></div></div><p>更多详细信息可以参考：<a href="https://github.com/wechat-miniprogram/mobx-miniprogram-bindings" target="_blank" rel="noreferrer">mobx-miniprogram-bindings</a></p>`,18)]))}const c=i(h,[["render",l]]);export{y as __pageData,c as default};
