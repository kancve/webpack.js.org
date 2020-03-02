(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{395:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/html-loader"><img src="https://img.shields.io/npm/v/html-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/html-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/html-loader"><img src="https://david-dm.org/webpack-contrib/html-loader.svg" alt="deps"></a>\n<a href="https://dev.azure.com/webpack-contrib/html-loader/_build/latest?definitionId=38&#x26;branchName=master"><img src="https://dev.azure.com/webpack-contrib/html-loader/_apis/build/status/webpack-contrib.html-loader?branchName=master" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/html-loader"><img src="https://codecov.io/gh/webpack-contrib/html-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=html-loader"><img src="https://packagephobia.now.sh/badge?p=html-loader" alt="size"></a></p>\n<p>Exports HTML as string. HTML is minimized when the compiler demands.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>html-loader</code>:</p>\n<pre><code class="hljs language-console">npm install --save-dev html-loader\n</code></pre>\n<p>Then add the plugin to your <code>webpack</code> config. For example:</p>\n<p><strong>file.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> html <span class="token keyword">from</span> <span class="token string">\'./file.html\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>By default every loadable attributes (for example - <code>&#x3C;img src="image.png"></code>) is imported (<code>const img = require(\'./image.png\')</code> or <code>import img from "./image.png""</code>).\nYou may need to specify loaders for images in your configuration (recommended <code>file-loader</code> or <code>url-loader</code>).</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Type</th>\n<th align="center">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#attributes"><code>attributes</code></a></strong><p class="description mobile"><code>{Boolean\\/Array}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean\\/Array}</code></td>\n<td align="center"><code>[\':srcset\', \'img:src\', \'audio:src\', \'video:src\', \'track:src\', \'embed:src\', \'source:src\',\'input:src\', \'object:data\', \'script:src\']</code></td>\n<td align="left">Enables/Disables attributes handling</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#root"><code>root</code></a></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="center"><code>undefiend</code></td>\n<td align="left">Allow to handle root-relative attributes</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#interpolate"><code>interpolate</code></a></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>false</code></td>\n<td align="left">Allow to use expressions in HTML syntax</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#minimize"><code>minimize</code></a></strong><p class="description mobile"><code>{Boolean\\|Object}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean\\|Object}</code></td>\n<td align="center"><code>true</code>\n in production mode, otherwise \n<code>false</code></td>\n<td align="left">Tell \n<code>html-loader</code>\n to minimize HTML</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#esmodule"><code>esModule</code></a></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>false</code></td>\n<td align="left">Use ES modules syntax</td>\n</tr>\n</tbody>\n</table>\n<h3 id="attributes"><code>attributes</code><a href="#attributes" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean|Array</code>\nDefault: <code>[\':srcset\', \'img:src\', \'audio:src\', \'video:src\', \'track:src\', \'embed:src\', \'source:src\', \'input:src\', \'object:data\', \'script:src\']</code></p>\n<h4 id="boolean"><code>Boolean</code><a href="#boolean" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>The <code>true</code> value enables processing of all default elements and attributes, the <code>false</code> disable processing of all attributes.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token comment">// Disables tags and attributes processing</span>\n          attributes<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="array"><code>Array</code><a href="#array" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Allows you to specify which tags and attributes to process.\nPass an array of <code>&#x3C;tag>:&#x3C;attribute></code> or <code>:&#x3C;attribute></code> combinations.\nYou can specify which tag-attribute combination should be processed by this loader via the query parameter <code>attributes</code>, for example:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          attributes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\':data-src\'</span><span class="token punctuation">,</span> <span class="token string">\'custom-elements:data-src\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>To completely disable tag-attribute processing (for instance, if you\'re handling image loading on the client side) you can pass set <code>false</code> value.</p>\n<h3 id="root"><code>root</code><a href="#root" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>undefined</code></p>\n<p>For urls that start with a <code>/</code>, the default behavior is to not translate them.\nIf a <code>root</code> query parameter is set, however, it will be prepended to the url and then translated.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          root<span class="token punctuation">:</span> <span class="token string">\'./file.html\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="interpolate"><code>interpolate</code><a href="#interpolate" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean|String</code>\nDefault: <code>false</code></p>\n<p>Allow to use expressions in HTML syntax.\nYou can use <code>interpolate</code> flag to enable interpolation syntax for ES6 template strings, like so:</p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-loader?interpolate!./file.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>${require(`./images/gallery.png`).default}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>div</span><span class="token punctuation">></span></span>${require(\'./components/gallery.html\').default}<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n<blockquote>\n<p>⚠ By default <code>file-loader</code> or <code>url-loader</code> use ES module syntax so you need use the <code>default</code> property.\nYou should not use the <code>default</code> property if you setup the <code>esModule</code> option to <code>false</code> value for <code>file-loader</code> or <code>url-loader</code>.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          interpolate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="minimize"><code>minimize</code><a href="#minimize" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean|Object</code>\nDefault: <code>true</code> in production mode, otherwise <code>false</code></p>\n<p>Tell <code>html-loader</code> to minimize HTML.</p>\n<h4 id="boolean-1"><code>Boolean</code><a href="#boolean-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>The enabled rules for minimizing by default are the following ones:</p>\n<ul>\n<li>collapseWhitespace</li>\n<li>conservativeCollapse</li>\n<li>keepClosingSlash</li>\n<li>minifyCSS</li>\n<li>minifyJS</li>\n<li>removeAttributeQuotes</li>\n<li>removeComments</li>\n<li>removeScriptTypeAttributes</li>\n<li>removeStyleTypeAttributes</li>\n<li>useShortDoctype</li>\n</ul>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          minimize<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="object"><code>Object</code><a href="#object" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>webpack.config.js</strong></p>\n<p>See <a href="https://github.com/kangax/html-minifier#options-quick-reference">html-minifier</a>\'s documentation for more information on the available options.</p>\n<p>The rules can be disabled using the following options in your <code>webpack.conf.js</code></p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          minimize<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            removeComments<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            collapseWhitespace<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="esmodule"><code>esModule</code><a href="#esmodule" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>false</code></p>\n<p>By default, <code>html-loader</code> generates JS modules that use the CommonJS modules syntax.\nThere are some cases in which using ES modules is beneficial, like in the case of <a href="/plugins/module-concatenation-plugin/">module concatenation</a> and <a href="/guides/tree-shaking/">tree shaking</a>.</p>\n<p>You can enable a ES module syntax using:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          esModule<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="cdn">CDN<a href="#cdn" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> test<span class="token punctuation">:</span> <span class="token regex">/\\.jpg$/</span><span class="token punctuation">,</span> loader<span class="token punctuation">:</span> <span class="token string">\'file-loader\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> test<span class="token punctuation">:</span> <span class="token regex">/\\.png$/</span><span class="token punctuation">,</span> loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    publicPath<span class="token punctuation">:</span> <span class="token string">\'http://cdn.example.com/[hash]/\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image.png<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image2x.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-loader!./file.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="http://cdn.example.com/49eba9f/a992ca.png" data-src="image2x.png">\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-loader?attributes[]=img:data-src!./file.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="image.png" data-src="data:image/png;base64,..." >\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-loader?attributes[]=img:src&#x26;attributes[]=img:data-src!./file.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="http://cdn.example.com/49eba9f/a992ca.png" data-src="data:image/png;base64,..." >\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-loader?-attributes!./file.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="image.jpg"  data-src="image2x.png" >\'</span></code></pre>\n<pre><code class="hljs language-html">\'<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span>http://cdn.example.com/49eba9f/a9f92ca.jpg</span>\n<span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation">=</span>data:image/png;base64,...</span><span class="token punctuation">></span></span>\'</code></pre>\n<h3 id="process-script-and-link-tags">Process <code>script</code> and <code>link</code> tags<a href="#process-script-and-link-tags" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>script.file.js</strong></p>\n<pre><code class="hljs language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>style.file.css</strong></p>\n<pre><code class="hljs language-css"><span class="token selector">a</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-html"><span class="token doctype">&#x3C;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>title</span><span class="token punctuation">></span></span>Title of the document<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./style.file.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>body</span><span class="token punctuation">></span></span>\n    Content of the document......\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./script.file.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'file-loader?name=[name].[ext]\'</span><span class="token punctuation">,</span> <span class="token string">\'extract-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/i</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/\\.file.js$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.file.js$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'file-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/i</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/\\.file.css$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.file.css$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'file-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="root-relative-urls">\'Root-relative\' URLs<a href="#root-relative-urls" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>With the same configuration as above:</p>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/image.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-loader!./file.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="/image.jpg">\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-loader?root=.!./file.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="http://cdn.example.com/49eba9f/a992ca.jpg">\'</span></code></pre>\n<h3 id="export-into-html-files">Export into HTML files<a href="#export-into-html-files" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>A very common scenario is exporting the HTML into their own <em>.html</em> file, to\nserve them directly instead of injecting with javascript. This can be achieved\nwith a combination of 3 loaders:</p>\n<ul>\n<li><a href="/loaders/file-loader/">file-loader</a></li>\n<li><a href="https://github.com/peerigon/extract-loader">extract-loader</a></li>\n<li>html-loader</li>\n</ul>\n<p>The html-loader will parse the URLs, require the images and everything you\nexpect. The extract loader will parse the javascript back into a proper html\nfile, ensuring images are required and point to proper path, and the file loader\nwill write the <em>.html</em> file for you. Example:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'file-loader?name=[name].[ext]\'</span><span class="token punctuation">,</span> <span class="token string">\'extract-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/html-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/html-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);