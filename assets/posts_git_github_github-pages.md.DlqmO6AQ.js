import{_ as n,c as t,j as i,a as l,t as e,a4 as h,o as p}from"./chunks/framework.1wn7T0sM.js";const A=JSON.parse('{"title":"Github Pages","description":"","frontmatter":{"author":"Io_oTI","date":"2023-09-28T00:00:00.000Z","publish":true,"tag":"github","title":"Github Pages"},"headers":[],"relativePath":"posts/git/github/github-pages.md","filePath":"posts/git/github/github-pages.md","lastUpdated":1735550718000}'),k={name:"posts/git/github/github-pages.md"},r={id:"frontmatter-title",tabindex:"-1"};function o(a,s,d,c,g,y){return p(),t("div",null,[i("h1",r,[l(e(a.$frontmatter.title)+" ",1),s[0]||(s[0]=i("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),s[1]||(s[1]=h(`<h2 id="配置-github-pages" tabindex="-1">配置 Github Pages <a class="header-anchor" href="#配置-github-pages" aria-label="Permalink to &quot;配置 Github Pages&quot;">​</a></h2><ol><li>新建 <code>&lt;github username&gt;.github.io</code> 的仓库</li><li>克隆新建的 github 仓库到本地并修改内容</li><li>在 github 上修改仓库的配置 <code>Settings</code> &gt; <code>Pages</code> &gt; <code>Build and deployment</code>，Source 选项选择 <code>Deploy from a branch</code>，Branch 选项选择 <code>gh-pages</code> 分支和 <code>/root</code> 路径</li></ol><h2 id="配置-github-actions" tabindex="-1">配置 Github Actions <a class="header-anchor" href="#配置-github-actions" aria-label="Permalink to &quot;配置 Github Actions&quot;">​</a></h2><p>项目根目录下新建 <code>.github/workflows/deploy.yml</code> 文件，配置如下：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">name</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> Deploy Github Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">on</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  # Runs on pushes targeting the default branch</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">  push</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">    branches</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> [</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&#39;main&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  # Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">  workflow_dispatch</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">jobs</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  # Single deploy job since we&#39;re just deploying</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">  deploy</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">    runs-on</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">    steps</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">      -</span><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;"> name</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> Checkout</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        uses</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        with</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">          fetch-depth</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">      -</span><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;"> name</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> Use Node.js</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        uses</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> actions/setup-node@v3</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        with</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">          node-version</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;16.x&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">      -</span><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;"> name</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        run</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> npm install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">      -</span><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;"> name</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> Run build script</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        run</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> npm run docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">      -</span><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;"> name</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> Deploy to Github Pages</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        uses</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> crazy-max/ghaction-github-pages@v3</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        with</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">          # Deploy to gh-pages branch</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">          target_branch</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> gh-pages</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">          # Deploy the default output  dir of Vitepress</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">          build_dir</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> docs/.vitepress/dist</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">        env</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">          GITHUB_TOKEN</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> \${{ secrets.GITHUB_TOKEN }}</span></span></code></pre></div><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><ol><li><p>在 github 上添加环境变量: <code>Settings</code> &gt; <code>Environments</code> &gt; <code>Pages</code> &gt; <code>github-pages</code> &gt; <code>Environment variables</code> &gt; <code>Add environment variable</code>，输入你的环境变量名和值。</p></li><li><p>修改<code>.github/workflows/deploy.yml</code> 文件，添加环境变量：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">name</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> Deploy Github Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">on</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  # Runs on pushes targeting the default branch</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">  push</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">    branches</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> [</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&#39;main&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  # Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">  workflow_dispatch</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">env</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span></span>
<span class="line has-focus"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;">  # Setting an environment variable with the value of a configuration variable</span></span>
<span class="line has-focus"><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">  MY_VARIABLE</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> \${{ vars.MY_VARIABLE }}</span></span></code></pre></div></li><li><p>在 js 文件中引入环境变量：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;">const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> myVariable </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> process</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">env</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">MY_VARIABLE</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span></span></code></pre></div></li></ol><h3 id="部署问题" tabindex="-1">部署问题： <a class="header-anchor" href="#部署问题" aria-label="Permalink to &quot;部署问题：&quot;">​</a></h3><p>错误信息：</p><blockquote><p>Error: The process &#39;/usr/bin/git&#39; failed with exit code 128</p></blockquote><p>解决方法：</p><blockquote><p>在 github 上修改仓库的配置: <code>Settings</code> &gt; <code>Actions</code> &gt; <code>Genneral</code> &gt; <code>Workflow permissions</code>，选择 <code>Read and write permissions</code> 选项并保存</p></blockquote><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages" target="_blank" rel="noreferrer">Github Pages 官方文档</a></li><li><a href="https://pages.github.com/" target="_blank" rel="noreferrer">Github Pages 官方教程</a></li><li><a href="https://docs.github.com/en/actions" target="_blank" rel="noreferrer">Github Actions 官方文档</a></li><li><a href="https://docs.github.com/zh/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#using-the-vars-context-to-access-configuration-variable-values" target="_blank" rel="noreferrer">Github 文档 | 使用 vars 上下文访问配置变量值</a></li></ul>`,14))])}const E=n(k,[["render",o]]);export{A as __pageData,E as default};