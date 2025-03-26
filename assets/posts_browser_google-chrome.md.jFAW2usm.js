import{_ as s,c as a,o as t,ak as e}from"./chunks/framework.CzoNZSwu.js";const c=JSON.parse('{"title":"Google Chrome","description":"","frontmatter":{"author":"Io_oTI","date":"2023-09-27T00:00:00.000Z","publish":true,"tag":"browser","title":"Google Chrome"},"headers":[],"relativePath":"posts/browser/google-chrome.md","filePath":"posts/browser/google-chrome.md","lastUpdated":1742979040000}'),l={name:"posts/browser/google-chrome.md"};function h(k,i,n,p,d,o){return t(),a("div",null,i[0]||(i[0]=[e(`<h2 id="chrome-devtools" tabindex="-1">Chrome DevTools <a class="header-anchor" href="#chrome-devtools" aria-label="Permalink to &quot;Chrome DevTools&quot;">​</a></h2><p>打开开发工具</p><table tabindex="0"><thead><tr><th>操作</th><th>Windows/Linux</th><th>macOS</th></tr></thead><tbody><tr><td>打开上次使用的窗格</td><td><code>F12</code> 或 <code>Ctrl + Shift + I</code></td><td><code>⌘ + ⌥ + I</code></td></tr><tr><td>打开“控制台”工具</td><td><code>Ctrl + Shift + J</code></td><td><code>⌘ + ⌥ + J</code></td></tr><tr><td>打开“元素”工具</td><td><code>Ctrl + Shift + C</code></td><td><code>⌘ + ⇧ + C</code> 或 <code>⌘ + ⌥ + C</code></td></tr></tbody></table><p>全局键盘快捷方式</p><table tabindex="0"><thead><tr><th>操作</th><th>Windows/Linux</th><th>macOS</th></tr></thead><tbody><tr><td>显示“设置”</td><td><code>Shift+?</code> 或 <code>F1</code></td><td><code>⇧+?</code> 或 <code>Function+F1</code></td></tr><tr><td>聚焦于下一窗格</td><td><code>Ctrl + ]</code></td><td><code>⌘ + ]</code></td></tr><tr><td>聚焦于上一窗格</td><td><code>Ctrl + [</code></td><td><code>⌘ + [</code></td></tr></tbody></table><h3 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h3><h4 id="snippets" tabindex="-1">Snippets <a class="header-anchor" href="#snippets" aria-label="Permalink to &quot;Snippets&quot;">​</a></h4><p>为所有元素添加边框</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">[]</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">forEach</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">call</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">$$</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&#39;*&#39;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">,</span><span style="--shiki-light:#8839EF;--shiki-dark:#CBA6F7;"> function</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> (</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EBA0AC;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">  a</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">style</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">outline </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &#39;1px solid #&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> +</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> (</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">~~</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(Math</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">random</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">() </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">*</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> (</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">1</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> &lt;&lt;</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;"> 24</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)))</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">toString</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#FE640B;--shiki-dark:#FAB387;">16</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">}</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span></span></code></pre></div><h2 id="关闭浏览器的安全策略-前端跨域" tabindex="-1">关闭浏览器的安全策略（前端跨域） <a class="header-anchor" href="#关闭浏览器的安全策略-前端跨域" aria-label="Permalink to &quot;关闭浏览器的安全策略（前端跨域）&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>以下命令需要替换中 <code>[]</code> 的内容，最好为 <code>--user-data-dir</code> 设置一个空的文件夹。</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UNCII" id="tab-ZOOK4Ew" checked><label data-title="macOS 终端" for="tab-ZOOK4Ew">macOS 终端</label><input type="radio" name="group-UNCII" id="tab-b3qrqQN"><label data-title="Windows 命令提示符" for="tab-b3qrqQN">Windows 命令提示符</label><input type="radio" name="group-UNCII" id="tab-9DBkW7W"><label data-title="Windows PowerShell" for="tab-9DBkW7W">Windows PowerShell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">open</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> -n</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> /Applications/Google</span><span style="--shiki-light:#EA76CB;--shiki-dark:#F5C2E7;">\\ </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">Chrome.app/</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --args</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --disable-web-security</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --user-data-dir=</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">[</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">/Users/Username/browser</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">]</span></span></code></pre></div><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">start chrome </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">--</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">disable</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">web</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">security </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">--</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">user</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">dir</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">[D:\\browser]</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Start-Process</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">FilePath </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&quot;chrome&quot;</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">ArgumentList </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&quot;--disable-web-security --user-data-dir=[D:\\browser]&quot;</span></span></code></pre></div></div></div><h3 id="samesite-v80-跨域不带-cookie" tabindex="-1">SameSite （v80+ 跨域不带 Cookie） <a class="header-anchor" href="#samesite-v80-跨域不带-cookie" aria-label="Permalink to &quot;SameSite （v80+ 跨域不带 Cookie）&quot;">​</a></h3><p>这是一个用来决定 Cookie 的可用网站范围的属性。它有三个值：</p><ul><li>Strict: 仅限于同站请求</li><li>Lax: 同站请求，或者跨站的 GET 的会导致页面 URL 发生变化的导航行为，包括链接、GET 的 Form 提交。比如在 <code>http://www.def.com</code> 网站的页面中嵌入了一个链接 <code>http://www.abc.com</code> ，那么在用户点击此链接时发起的初始请求，会带上 <code>http://www.abc.com</code> 中设置为 Lax 的 Cookie。而那些设置为 Strict 的 Cookie 是不会带上的。这种跨站链接还包括像嵌入到邮件中的链接。</li><li>None: 没有限制，同站及跨站请求中都会带上，与传统的方式一样。</li></ul><p>在新的 Chrome 的 Privacy Sandbox 的策略中：</p><ul><li>如果 Cookie 未设置 SameSite，那把其值默认为 Lax。</li><li>如果 Cookie 设置 SameSite=None，还需要同时设置 Secure，否则此 Cookie 会被浏览器拒绝。设为 Secure 之后，其它三方网站对我方网站资源的引用必须使用 HTTPS，否则还是不会带上此 Cookie，这也要求我方网站必须支持 HTTPS。</li></ul><h4 id="禁用-samesite" tabindex="-1">禁用 SameSite <a class="header-anchor" href="#禁用-samesite" aria-label="Permalink to &quot;禁用 SameSite&quot;">​</a></h4><ol><li>在谷歌浏览器地址栏搜索 <code>chrome://flags</code></li><li>在 <code>Experiments</code> 页面搜索框中搜索 <code>SameSite by default cookies</code></li><li>修改 SameSite by default cookies 选项的值为 <code>Disabled</code></li></ol><h3 id="samesite-v91-跨域不带-cookie" tabindex="-1">SameSite （v91+ 跨域不带 Cookie） <a class="header-anchor" href="#samesite-v91-跨域不带-cookie" aria-label="Permalink to &quot;SameSite （v91+ 跨域不带 Cookie）&quot;">​</a></h3><p>Chrome 91 禁用 SameSiteByDefaultCookies 与 CookiesWithoutSameSiteMustBeSecure</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FTZkW" id="tab-V7DbOSt" checked><label data-title="macOS 终端" for="tab-V7DbOSt">macOS 终端</label><input type="radio" name="group-FTZkW" id="tab-uP2K41T"><label data-title="Windows 命令提示符" for="tab-uP2K41T">Windows 命令提示符</label><input type="radio" name="group-FTZkW" id="tab-hJ2f6rX"><label data-title="Windows PowerShell" for="tab-hJ2f6rX">Windows PowerShell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">open</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> -n</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> /Applications/Google</span><span style="--shiki-light:#EA76CB;--shiki-dark:#F5C2E7;">\\ </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">Chrome.app/</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --args</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --disable-web-security</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> --user-data-dir=</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">[</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">/Users/Username/browser</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">]</span></span></code></pre></div><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">start chrome </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">--</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">disable</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">web</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">security </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">--</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">disable</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">features</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">--</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">user</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">data</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">dir</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">[D:\\browser]</span></span></code></pre></div><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Start</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Process </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">FilePath </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&quot;chrome&quot;</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">ArgumentList </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&quot;--disable-web-security --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure --user-data-dir=[D:\\browser]&quot;</span></span></code></pre></div></div></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.chrome.google.cn/docs/devtools?hl=zh-cn" target="_blank" rel="noreferrer">Chrome DevTools</a></li></ul>`,24)]))}const g=s(l,[["render",h]]);export{c as __pageData,g as default};
