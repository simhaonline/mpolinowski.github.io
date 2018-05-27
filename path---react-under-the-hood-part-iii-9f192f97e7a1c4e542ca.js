webpackJsonp([0xd9db41f5a28f],{671:function(n,a){n.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-09-05--react-under-the-hood-part-iii/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-0572d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.1271186440678%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACSUlEQVQozw2RSW/TABBG/VO4ILVCXZLi1k4dZ3W8JHYcJ3GcpXHthDYuSUpbqRsUlapQqReWG+LAFa4ICcGfe/gwh9Ho07w3I9hmjGZMMa0DdGNORV/SMOcM7CmxO2TeDUh6CXuDC+LxCcPhkm6yoDtf0u4esddfMOyfMBkdE7QXCFN3kob3eD9b4hn76OUItxQSmSGdWp+p7XM2GDJuTZgnt9y/vuDV0T7Jfo+rg4DTvTHns1NG7oieEyE4VkDbSRs3ppLvoSkxsbbksDYhSCnPhyGDmoNddPCtPoEb0LE86qrG43HMdRzydpKSWwlhM0GYBYd0GxFdK2LZHPDtYMaH299MB/f4XpKSdYmsFuPmiFLJR1UaOGWbecOnr/dxah1uJi/4dPGGu6N3CL8uz7gzhrQLHUJvxPlohG2eoeb6aGpAId9Aq3ZotsL0HC1iy6Jb0enVQ/xKi/auhyMZuMUyvm4ifD+J0oGHpGhkRYts1kQVK9RlHVOScKp19FTPkmVMw2M2HDB1LcStMjW5zlz3+dibcVXXcHcVhOuxweelTdOQUiUFQ9qhkBVJKlvE+TUy6yq2WkLJNchumxTlSqpt8HynhppRuHQU/l13+HPZ5kskIYRVhZ8PCbHfRpU1vN0sjrxFWZSppmUXylRyRkpeZGstgylus7lZIrtRoimJzO1tflxl+Dt7wlfnKUIpk+MxKnKzeImeb2JnVvHkLNUUv5xT069rSGKR9XWRtfUdVlZ2eLZRJZ8unxVXeQhlAl2hl8/Rlsv8BwhhYhtmiCl2AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Harbin, China"\n        title=""\n        src="/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-48538.png"\n        srcset="/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-bed0f.png 200w,\n/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-5fd34.png 400w,\n/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-48538.png 800w,\n/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-b70ec.png 1200w,\n/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-d134a.png 1600w,\n/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-f6ead.png 2400w,\n/static/photo-34219553960_350f18edbb_o-3ab587ce485b29f47f37ae231348ba9a-0572d.png 2832w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>A look behind the curtain of React Starters like:</p>\n<ul>\n<li><a href="https://github.com/facebookincubator/create-react-app">create-react-app</a></li>\n<li><a href="https://github.com/gatsbyjs/gatsby">Gatsby.js</a></li>\n<li><a href="https://github.com/zeit/next.js">Next.js</a></li>\n<li><a href="https://neutrino.js.org">Neutrino</a></li>\n</ul>\n<p>React is often said to be easy to learn, but impossible to set up in an dev environment. Once you start reading about it, you will be faced by an exhausting amount of choices that you have to make, before you can move on to actual coding. Starter Packages, like the ones named above, give a quick access to the React world. Let’s take a look into that black box now.</p>\n</blockquote>\n<p><a href="https://github.com/mpolinowski/react-under-the-hood">Github</a></p>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#03-webpack">03 Webpack</a></p>\n<ul>\n<li><a href="#loading-json">Loading JSON</a></li>\n<li><a href="#adding-sass">Adding SASS</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h2 id="03-webpack"><a href="#03-webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>03 Webpack</h2>\n<p>Webpak is a module bundler, that enables us to create static files from our React code. We can use it to automate processes like the Babel transpiling and use it to serve our app in an hot-reloading dev-server environment.</p>\n<p>First we need to add a <a href="https://webpack.js.org/guides/getting-started/">Webpack configuration</a> file inside the root directory - webpack.config.js:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  devServer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    contentBase<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    port<span class="token punctuation">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>\n    inline<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n      exclude<span class="token punctuation">:</span> <span class="token regex">/(node_modules)/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          presets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'env\'</span><span class="token punctuation">,</span> <span class="token string">\'react\'</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./dist/assets/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n    publicPath<span class="token punctuation">:</span> <span class="token string">\'assets\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now we want to <a href="https://webpack.js.org/guides/installation/">install the latest version of Webpack</a> together with the babel-loader &#x26; presets, as well as the Webpack Dev-Server to host our files:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install --save-dev webpack babel-loader babel-core babel-preset-env webpack-dev-server</code></pre>\n      </div>\n<p>We can create an npm script to start webpack from inside the repository (a global installation is not recommended). The start scripts hosts our webapp, according to the devServer configuration inside webpack.config.js. The build script takes all js files (node<em>modules excluded), babel-transpiles them with the babel-loader, and puts them bundled into the _./dist/assets</em> directory. And the watch script will watch the directories for changes and starts up the loader automatically, when we saved an edit.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&quot;scripts&quot;: {\n\t&quot;start&quot;: &quot;webpack-dev-server --open&quot;,\n\t&quot;watch&quot;: &quot;webpack --watch&quot;,\n\t&quot;build&quot;: &quot;webpack --config webpack.config.js&quot;\n}</code></pre>\n      </div>\n<p>We can now run our build process with <em>npm run build</em> / <em>npm run watch</em> and start our devServer with <em>npm start</em>.</p>\n<p>Let us now use Webpack to load our react dependencies - instead of linking them into our HTML page. To do this we first have to install React to the project:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install --save react react-dom</code></pre>\n      </div>\n<h3 id="loading-json"><a href="#loading-json" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading JSON</h3>\n<p>And to demonstrate the function of module loading, we want to use some JSON data, being loaded into our react app by Webpack:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install --save-dev json-loader</code></pre>\n      </div>\n<p>Lets add the JSON loader to our Webpack config file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\trules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\ttest<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n\t\t\texclude<span class="token punctuation">:</span> <span class="token regex">/(node_modules)/</span><span class="token punctuation">,</span>\n\t\t\tuse<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\t\t\tloader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n\t\t\t\toptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\tpresets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'env\'</span><span class="token punctuation">,</span> <span class="token string">\'react\'</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\ttest<span class="token punctuation">:</span> <span class="token regex">/\\.json$/</span><span class="token punctuation">,</span>\n\t\t\texclude<span class="token punctuation">:</span> <span class="token regex">/(node_modules)/</span><span class="token punctuation">,</span>\n\t\t\tuse<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\t\t\tloader<span class="token punctuation">:</span> <span class="token string">\'json-loader\'</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>And create a exciting JSON file <em>./src/title.json</em> :</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data1"</span><span class="token operator">:</span> <span class="token string">"first data"</span><span class="token punctuation">,</span>\n  <span class="token property">"data2"</span><span class="token operator">:</span> <span class="token string">"second data"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And create a JSX module that uses this data in <em>./src/lib.js</em> :</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> text <span class="token keyword">from</span> <span class="token string">\'./titles.json\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> data1 <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>h1 id<span class="token operator">=</span><span class="token string">\'title\'</span>\n      className<span class="token operator">=</span><span class="token string">\'header\'</span>\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>backgroundColor<span class="token punctuation">:</span> <span class="token string">\'teal\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'purple\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token punctuation">{</span>text<span class="token punctuation">.</span>data1<span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>h1 id<span class="token operator">=</span><span class="token string">\'title\'</span>\n      className<span class="token operator">=</span><span class="token string">\'header\'</span>\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>backgroundColor<span class="token punctuation">:</span> <span class="token string">\'purple\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'teal\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token punctuation">{</span>text<span class="token punctuation">.</span>data2<span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>We are now using the module import statement to import React from the installed React dependency, as well as our own JSON file. This is a function that is not yet integrated in JavaScript but is available thanks to Webpack and Babel. Now we can rewrite our <em>./src/index.js</em> file to receive the module that we just created:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./lib\'</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>div<span class="token operator">></span>\n\t\t<span class="token punctuation">{</span>data1<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">{</span>data2<span class="token punctuation">}</span>\n\t<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span>\n\tdocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'react-container\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Notice that we need to import <em>react-dom</em> here, since <strong>render</strong> is not part of <em>react</em>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ruth_03-1914d2238abdd63b082c47a0c9ee9a19-0f893.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 25.842696629213485%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA50lEQVQY02MIio4KSU4ITI3HRAEpcSEZSZZ2tpa2Drb2Dnr6+urq6hpQoAnEDC2ti+o7Vje2r2xqRUcNzct6Jmzx9w/TN7cytba3MDY0MTTQNzDQ1dXV19XR09NluH3u5venX77ee//93gc09OX22/8vf6fEJSkpKdpZWztbmDhYWjhbmVvbOTpbWxjp6jA8ffb0//////79+48B/vz5AyTT0lMVlVTNLSxN9XXM9HWMDfSNTU2NjE20dXQYnjx5AlTx9+/ffxjg9+/fIM2pKQqaunrm1no62oa62jpATbp6Bgb6enr6AD4Vmd50dTIgAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="ruth 03"\n        title=""\n        src="/static/ruth_03-1914d2238abdd63b082c47a0c9ee9a19-48538.png"\n        srcset="/static/ruth_03-1914d2238abdd63b082c47a0c9ee9a19-bed0f.png 200w,\n/static/ruth_03-1914d2238abdd63b082c47a0c9ee9a19-5fd34.png 400w,\n/static/ruth_03-1914d2238abdd63b082c47a0c9ee9a19-48538.png 800w,\n/static/ruth_03-1914d2238abdd63b082c47a0c9ee9a19-0f893.png 979w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="adding-sass"><a href="#adding-sass" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding SASS</h3>\n<p>The same principle can be applied to add styles to our react app app - lets try to add some <a href="http://sass-lang.com/">SASS</a> to our app with the <a href="http://jwebcat.github.io/kraken-sass/index.html">Kraken-Sass</a> boilerplate:</p>\n<p>First we want to install the Webpack loaders for the job of preprocess the source <a href="http://sass-lang.com/guide">SASS</a> into proper CSS:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install --save-dev style-loader css-loader sass-loader</code></pre>\n      </div>\n<p>You will get a warning, that <em>sass-loader</em> requires another dependency called <em><a href="https://github.com/sass/node-sass">node-sass</a></em>, which is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass. This, on the other hand, requires - <strong>under Windows</strong> - the installation of the <a href="https://github.com/felixrieseberg/windows-build-tools">Windows Build Tools</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install --g --production windows-build-tools</code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ruth_04-981d3a404962bf52597333cd6dee4d6e-e86a3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.51162790697674%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABA0lEQVQY02OQqWkTLq/mK6nkKijjLq/lLK/lrqjjKq9lKapkKqxgyC9DoIJyRjBiKihnyC6Wam5lkNRPlDdJk9JPFNKKFNaKFVSPEdGKFdWOB5JC6jHcShFciuEQxCQdzCgVBETM0sEMIr72/pUMKq45Ss7ZcvYZ4uapPLrxnNqxvLrxfAYJvAZAMo5DJ5pNO4pFI4JZI4JRLRyCmNUjGBSCbSJqGdTdM5Wc0xXsU6XtUiUdkmScUqUckrmNorgNo3kMojm0otk0o5hUwxlUwhhhiBnIlQu0Da9h0PUM1HYP0HQJFLYOYDIKYjYKYjQKZNAJZNAMYlAPZlAOBSJGJJ3ImgFeWkK0MBOEFwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="ruth 04"\n        title=""\n        src="/static/ruth_04-981d3a404962bf52597333cd6dee4d6e-48538.png"\n        srcset="/static/ruth_04-981d3a404962bf52597333cd6dee4d6e-bed0f.png 200w,\n/static/ruth_04-981d3a404962bf52597333cd6dee4d6e-5fd34.png 400w,\n/static/ruth_04-981d3a404962bf52597333cd6dee4d6e-48538.png 800w,\n/static/ruth_04-981d3a404962bf52597333cd6dee4d6e-e86a3.png 1075w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Go and get yourself a cup of coffee - as this is going to take a while ¯\\<em>(ツ)</em>/¯</p>\n<p>Once this is through, continue with node-sass:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install --save-dev node-sass</code></pre>\n      </div>\n<p>Then add the <a href="https://webpack.js.org/loaders/sass-loader/">SASS loaders</a> to our Webpack config:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n\ttest<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n\texclude<span class="token punctuation">:</span> <span class="token regex">/(node_modules)/</span><span class="token punctuation">,</span>\n\tuse<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n\t\t\t\t\tloader<span class="token punctuation">:</span> <span class="token string">"style-loader"</span> <span class="token comment">// creates style nodes from JS strings</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\t\t\t\t\tloader<span class="token punctuation">:</span> <span class="token string">"css-loader"</span> <span class="token comment">// translates CSS into CommonJS</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\t\t\t\t\tloader<span class="token punctuation">:</span> <span class="token string">"sass-loader"</span> <span class="token comment">// compiles Sass to CSS</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://github.com/jwebcat/kraken-sass/archive/master.zip">Download the master.zip</a> from kraken-sass and unzip the kraken.scss file (together with the lib folder - that contains all the scss components) to <em>./src/assets/sass</em>.</p>\n<p>Now we can import the <a href="http://jwebcat.github.io/kraken-sass/kraken-way.html">kraken-sass styles</a> into our <em>./src/index.js</em> component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./lib\'</span>\n<span class="token keyword">import</span> <span class="token string">\'./assets/sass/kraken.scss\'</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span>\n\t\t<span class="token operator">&lt;</span>div<span class="token operator">></span>\n\t\t\t<span class="token operator">&lt;</span>h1<span class="token operator">></span>Webpack Styling<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n\t\t\t<span class="token operator">&lt;</span>h4<span class="token operator">></span>With Kraken<span class="token operator">-</span>Sass Boilerplate<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>\n\t    <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"btn btn-blue btn-block"</span><span class="token operator">></span> <span class="token punctuation">{</span>data1<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n\t\t\t<span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"btn btn-blue btn-block"</span><span class="token operator">></span> <span class="token punctuation">{</span>data2<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n  \t<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span>\n\tdocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'react-container\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ruth_05-3f6cafed4e02f7a760bb90dd8efd9159-432cf.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 27.74283717679944%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABJ0lEQVQY02PIzS8AovzCouLSsqLikqKSEhAJRkCR/Px8K1t7eydnY2MjbW1tHVTA8OfrRyD6++vHf1Tw798/IPnhwwcLSyttXT1DIyMDQwM9fX1dXV09INAFAYaZR+5MP3xnxpHb0w7fXnHpJRAtvvBiyYUXi84/X3X1zcMXb6wsLYDKzY2NDA0MjYH6wXqB1gIdwsDffpy79ThvG4hU7Dsl33uKs+koT/NRjsYjol2nTt55bmdtqWtqZWVpaWZibGSgr6mtq6GpqQEEmpoMyy++WgZDa6++WXP19bJLr4BoycWXa66/e/TyraWlpbaplamJiYWhnqmBvp6hsZa2rqamliZQ838cAOLnjx8+mFvbaOrq62pr6mhpaevo6uvpAklNbW2gZgA1qbKljb0gRgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="ruth 05"\n        title=""\n        src="/static/ruth_05-3f6cafed4e02f7a760bb90dd8efd9159-48538.png"\n        srcset="/static/ruth_05-3f6cafed4e02f7a760bb90dd8efd9159-bed0f.png 200w,\n/static/ruth_05-3f6cafed4e02f7a760bb90dd8efd9159-5fd34.png 400w,\n/static/ruth_05-3f6cafed4e02f7a760bb90dd8efd9159-48538.png 800w,\n/static/ruth_05-3f6cafed4e02f7a760bb90dd8efd9159-b70ec.png 1200w,\n/static/ruth_05-3f6cafed4e02f7a760bb90dd8efd9159-432cf.png 1431w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As we can see by now - react allows us to create a collection of separate <a href="https://reactjs.org/docs/components-and-props.html">JSX components</a> and <a href="https://github.com/css-modules/css-modules">CSS modules</a> that offer isolation to our app logic and component styles. Each piece is a building block, that is then imported into our <em>./src/index.js</em> react interface and bundled &#x26; transpiled by Webpack/Babel into a browser-conform website. Lets clean up our folder structure to show the separation between main pages (index.js) and components and modules that can be re-used in every page (make sure to also change the relative links inside each file):</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ruth_06-fc569c38a5b4404a2ed17d5f012c671b-7d43f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 47.947947947947945%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABW0lEQVQoz32S627bMAxG/SZrmsSOLEp2ROpuKzcnQTFs3fs/zei4QfNjGHBgEAI/kDxw1WpqpFk3erWVzA6IMeGUhqmUWxwHfxjcIfcxUzxTOmvMjcSlreoxvm3aJfkIW61dokHTqO2oMGhyCj23CmUXluQcNugbwJcwtdoJ5QR/4bvvm9dwZ9xqC6+TOdxibmlsgC/CpjV811w82cFzbQxHnvxjLTj5XkveSu6zwgImyX1UmGHBZKCBi44G2acGbC2x6ntnMK1rxZdvGhBgunin0ydNv3D6jVfmk25/uHCHn2H8SOMH5am3xYZjdT1Fk3yNWO/NVqidNMSqy83nSyp3m86OyRMXPlxivPp48cMUyz2Xe9Wng0oZQhBoeXMBBPvIC8/CvtzOhlie0A8eL4vzyuUjdG67695rtdrIR5MXOLS2vIr9t+2Qxxb6t82X7VkYw6Oef8J/wn8B1hFyVbSQpJMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="ruth 06"\n        title=""\n        src="/static/ruth_06-fc569c38a5b4404a2ed17d5f012c671b-48538.png"\n        srcset="/static/ruth_06-fc569c38a5b4404a2ed17d5f012c671b-bed0f.png 200w,\n/static/ruth_06-fc569c38a5b4404a2ed17d5f012c671b-5fd34.png 400w,\n/static/ruth_06-fc569c38a5b4404a2ed17d5f012c671b-48538.png 800w,\n/static/ruth_06-fc569c38a5b4404a2ed17d5f012c671b-7d43f.png 999w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',
fields:{slug:"/react-under-the-hood-part-iii/",prefix:"2017-09-05"},frontmatter:{title:"React under the Hood (III)",subTitle:"A look behind the curtain of React Starters",cover:{childImageSharp:{resize:{src:"/static/photo-34219553960_350f18edbb_o-cover-fed35a3b606dbf01b33ea8cccb2c3a31-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/react-under-the-hood-part-iii/"}}}});
//# sourceMappingURL=path---react-under-the-hood-part-iii-9f192f97e7a1c4e542ca.js.map