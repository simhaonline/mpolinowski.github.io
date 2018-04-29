webpackJsonp([47523831627067],{606:function(e,n){e.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-07-22--caloric-burn/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-34221441540_627d018c4b_o-949ae34e99f861e75bd53ebee092d814-72e4a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.46666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAADKklEQVQozw2S20/bBQCFf/+BMVviYmJmfFFxe5FEtkTdHYvAQLFcBuugXbtWeqF0pYUKdsgtwCYwKOPaYbsCLXRc2o62o7TA6thW2BiTDROmM0pmyBJj9NHPPp2373zJOYKrX8HkRC93Hj3mwfYOgTsJssUllKj0lF1QUSiRYZCXoSrIQpIvQlaYQaVOirJcjkVXisWgRFupwWg2U2H+BqG/OgP3VQ1zwZvM3dug8fJlGq9cZczj5FZolLkFJ7bJVqZuz/J9zwCNLU2olRKKC3M4X1pAtUaB0WBEe9FIlaUOIRS/y2ggTGt3N512B97ICuFIkOcJJ6927zHUm4P+y9dxmlKJBrt4vvs3ia1f6BocRqqQUVomwVrfSnVtE1/r9QhnJGI+TnsPa3MLkcQm/kgUe3sdiRtGljs/I9QjJt6lYUD5Pg2WffTYa9n49SVP//wLd3iZ8aTM4xc7DI1NUVFRgSA69BYm7TkWH23hj8W5MTrC8oMNVqfbWEta7TrrePXvJg9jAzQVp1CvfYO2tgq8gXnWX7wk/vMf/PbPf8ncoW9sFuGrzI/o7U+O8mSbicAc1x121n7aYmVpgIXvRPw+UsO608B1eSp9igPU1u7HVpPLt3IpAzNhQsnymR/XiT3bocPWh6AuPoHN1knw/gaToVgSOEx4wcfQxHlqyt9lxVFDXH2C4BdvYz21F6vsTS6Z9nPFZqS+axD7bJi1pOlc4imGSjWCXpVH9UUl/sU4vqVV3KFxrEOZZKj30NuXzrOHbhbGG9j2X6Nf+SnVeXtRqffR3GFmZNLLsHca19QMK082McpyEbSqQmRnc6gyV3IrvoZnyY20NYVjF15D2XKY1VUPAW879ZYiTPp8TFVi6hq0XHPamYlGMF+ykJmTjkRagjj3GEJ23mmycrM4cvQwJckLdDt6GJ52MOJzMejpZ8RtxzXhpKm9mZaOdgZdTrzhIM6bbnQ6GcfT3qEo40NUZ9IpLzqKoDiXjeLsaaQFnyM+mUq+6BN0KjldPb3Mzi8yf/c+vkgMfzSGLxrlB884VcZyREcOcvyDPZSeSqFMdABN3iE04jT+B+1KRIj+NfTRAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Port Vila, Vanuatu"\n        title=""\n        src="/static/photo-34221441540_627d018c4b_o-949ae34e99f861e75bd53ebee092d814-48538.png"\n        srcset="/static/photo-34221441540_627d018c4b_o-949ae34e99f861e75bd53ebee092d814-bed0f.png 200w,\n/static/photo-34221441540_627d018c4b_o-949ae34e99f861e75bd53ebee092d814-5fd34.png 400w,\n/static/photo-34221441540_627d018c4b_o-949ae34e99f861e75bd53ebee092d814-48538.png 800w,\n/static/photo-34221441540_627d018c4b_o-949ae34e99f861e75bd53ebee092d814-b70ec.png 1200w,\n/static/photo-34221441540_627d018c4b_o-949ae34e99f861e75bd53ebee092d814-72e4a.png 1500w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>This app is based on the <a href="https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/">food-lookup-demo</a> from fullstackreact.com.</p>\n<p>Our sample app will be a simple food nutrition lookup table. The data driving the app is supplied by the USDA’s <a href="https://www.ars.usda.gov/northeast-area/beltsville-md/beltsville-human-nutrition-research-center/nutrient-data-laboratory/docs/usda-national-nutrient-database-for-standard-reference/">National Nutrient Database</a>.</p>\n</blockquote>\n<p><a href="https://github.com/mpolinowski/caloric-burn">Github</a></p>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#server-setup">Server Setup</a></p>\n<ul>\n<li><a href="#server-dependencies-installation">Server Dependencies Installation</a></li>\n<li><a href="#test-the-server">Test the Server</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#frontend-client-setup">Frontend Client Setup</a></p>\n<ul>\n<li><a href="#create-react-app">create-react-app</a></li>\n<li><a href="#react-scripts">react-scripts</a></li>\n<li><a href="#concurrently">Concurrently</a></li>\n<li><a href="#react-interface">React Interface</a></li>\n<li><a href="#setting-up-the-proxy">Setting up the proxy</a></li>\n</ul>\n</li>\n<li><a href="#test-your-app">Test your App</a></li>\n<li><a href="#deployment">Deployment</a></li>\n</ul>\n<!-- /TOC -->\n<p>First, git clone this repository and cd into that directory.</p>\n<p>This is where the server lives (server.js). Inside of the db folder is a sqlite database containing the nutrition data.</p>\n<h1 id="server-setup"><a href="#server-setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server Setup</h1>\n<p>We now use <a href="https://nodejs.org/en/">Node.js</a> and the Node Package Manager to install all dependencies for our app. Make sure that you install the latest version of node first. Then use your Terminal, or <a href="https://git-scm.com">Git Bash</a> under Windows, to run the following npm commands.</p>\n<h2 id="server-dependencies-installation"><a href="#server-dependencies-installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server Dependencies Installation</h2>\n<p>Use</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span></code></pre>\n      </div>\n<p>to install all dependencies &#x26; dev-dependecies in a development environment (the default). Later you can use</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --production</code></pre>\n      </div>\n<p>or set the NODE_ENV environment variable to production to avoid installing dev-dependencies.</p>\n<h2 id="test-the-server"><a href="#test-the-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test the Server</h2>\n<p>Let’s boot the server:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run server</code></pre>\n      </div>\n<p>This server provides a single API endpoint, /api/food. It expects a single parameter, q, the food we are searching for. You can test it with your browser or use the CURL command inside your console:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">curl</span> localhost:3001/api/food?q<span class="token operator">=</span>mcflurry</code></pre>\n      </div>\n<p>Now that we understand how this endpoint works, let’s build the front-end application. Kill the server with CTRL+C.</p>\n<h1 id="frontend-client-setup"><a href="#frontend-client-setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Frontend Client Setup</h1>\n<p>Ensure that you have create-react-app installed globally:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g create-react-app</code></pre>\n      </div>\n<h2 id="create-react-app"><a href="#create-react-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>create-react-app</h2>\n<p>At the top-level directory of the project we’ll create our client app. We want the React app to be in a folder called client, so we’ll just use that name in the create-react-app command  (if you are working inside a clone of this repository, please make sure to remove the already existing /client folder first! Don’t delete it completely - you will need some of the files later on):</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">create-react-app client</code></pre>\n      </div>\n<p>This creates a new directory with the following file structure:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">ls</span> client\nREADME.md\nnode_modules/\npackage.json\npublic/\nsrc/</code></pre>\n      </div>\n<p>Taking a look at client/package.json, we can see that we just installed react, react-dom, and react-scripts to the /client directory:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"client"</span><span class="token punctuation">,</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.1.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"react"</span><span class="token operator">:</span> <span class="token string">"^15.6.1"</span><span class="token punctuation">,</span>\n    <span class="token property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^15.6.1"</span><span class="token punctuation">,</span>\n    <span class="token property">"react-scripts"</span><span class="token operator">:</span> <span class="token string">"1.0.12"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"react-scripts start"</span><span class="token punctuation">,</span>\n    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"react-scripts build"</span><span class="token punctuation">,</span>\n    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"react-scripts test --env=jsdom"</span><span class="token punctuation">,</span>\n    <span class="token property">"eject"</span><span class="token operator">:</span> <span class="token string">"react-scripts eject"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Inside that directory, we can now run several commands:</p>\n<blockquote>\n<ul>\n<li>\n<p>npm start</p>\n<ul>\n<li>Starts the development server.</li>\n</ul>\n</li>\n<li>\n<p>npm run build</p>\n<ul>\n<li>Bundles the app into static files for production.</li>\n</ul>\n</li>\n<li>\n<p>npm test</p>\n<ul>\n<li>Starts the test runner.</li>\n</ul>\n</li>\n<li>\n<p>npm run eject</p>\n<ul>\n<li>Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!</li>\n</ul>\n</li>\n</ul>\n</blockquote>\n<h3 id="react-scripts"><a href="#react-scripts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>react-scripts</h3>\n<p>react-scripts is an NPM package specifically for use with create-react-app. It’s the “black box” which contains the essentials:</p>\n<blockquote>\n<ul>\n<li>\n<p>Dependencies</p>\n<ul>\n<li>Like Babel, ESLint, and Webpack.</li>\n</ul>\n</li>\n<li>\n<p>Configuration</p>\n<ul>\n<li>Config files for Webpack, Babel and ESLint, both for development and production.</li>\n</ul>\n</li>\n<li>\n<p>Scripts</p>\n<ul>\n<li>For instance, the command react-scripts start runs a script shipped with this package. It’s responsible for ultimately booting the > Webpack development server.</li>\n</ul>\n</li>\n</ul>\n</blockquote>\n<p>To see it in action, we can run npm start from inside of this folder:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">cd</span> client <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> start</code></pre>\n      </div>\n<p>This will launch a Webpack dev server and should also open localhost:3000 in your browser:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/boilerplate-page-de112cf97cfdf4458b13d598f5ed6ff6-ef203.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 109.97596153846155%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAACc0lEQVQ4y+2US29SQRTH0S9gE6AklpZXoaZAXVATwYjXhBZSY/wIhUi6lOiaRVmgKPBFXHhdGK26aCUk8i5NE2WhBANpoY+kCZXSzmVOz1wel4VNSlyZeJLfzMl/zvznLGZGJsP4vvbuxtfC2sKHjS/cxvo6VywWua2tLS6TyXCpVIrLZrMXksvluGQy6UokEmZZP37lM69/kz349uNnZ6/RgOPjYxAEQaTZbELr5ARO/kCr1WJQlm9vb78fGD55+ox/Ho5AaHWVhEIhGgwGaTgcpvF4nMZiMfoq8oJGX0bEPBaN0ugQqAk4QyAQ+DwwVMjlvEqlAqVSSRA6Pj5OFQoFlTPGrlG9c4Hq7y1iPtbV5fJhCNYD6p8Ghjqdjp+ZmQGj0UgQ6GOYnoapietgXXwINz2PYEo9AQaDAUwmEwzVCWyvXq+XOlSr1TwKoNFoiFarBQZqMD9/C5aWHoDzjgPuOuzg8XjAZrOJa/06RMCGYHJyUjLEE3mr1Qpms5nMmmeB5Yzbdju43W5wuVzAcZyYOxwOsFgsMDc3x+oZAqvFLiXDdDrNHx4eQrlcJghsFjYBrwygLpLP50W6WgYKuJ4vFFg9Q9jf3we8PpLhwcEBD90gbGDXpd1uw9nZGQidDnQQpnU6ApyenqJOgBDS2wICG46OjiTDWq3G94wI23zZ6B0kGtbrdclwZ2dHNKSUkt48CqJho9G42HCU+G/4LxrS0YP0DKXfZnd39+3wSxkxxA7x+UkdViqVN0zE35fg70vZL3wZerViE9Vq9WPf7+ry8rLT7/ev4PzY6/WODMaKz+e7z7xk+Mj7xlf+ElmpVJKdA83QsKCUiNNmAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="boilerplate page"\n        title=""\n        src="/static/boilerplate-page-de112cf97cfdf4458b13d598f5ed6ff6-48538.png"\n        srcset="/static/boilerplate-page-de112cf97cfdf4458b13d598f5ed6ff6-bed0f.png 200w,\n/static/boilerplate-page-de112cf97cfdf4458b13d598f5ed6ff6-5fd34.png 400w,\n/static/boilerplate-page-de112cf97cfdf4458b13d598f5ed6ff6-48538.png 800w,\n/static/boilerplate-page-de112cf97cfdf4458b13d598f5ed6ff6-ef203.png 832w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>We have our API server in the top-level directory and we were able to boot that. And we have our client app down here in client and we’re able to boot a server for this.</p>\n<p>So the user will direct their browser to localhost:3000, hitting the Webpack dev server. But then how will the React app communicate with our API server?</p>\n<p>create-react-app provides a mechanism for working with an API server in development. We can have the Webpack development server proxy requests intended for our API server, like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-21d6c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.64166961443226%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQI1wH0AAv/AFh5j2GBlWGBlVh5kKe1v//8++vs7IeerGmIm2uJnGyJnWWEmNHa4P///+7x83CMn1t8kl5/lFp7kG2LnQAAEjgNPFsLNlYADjaGl6f////29/g9Y3sNPFwiTWoTQV8AMlOuvsn////g5ukXPVwJOVkQP10IOFgROFgAE0NhLVdyLFZxEkNhi6Ct///+9fb2Rm2GCj5gNWB8I1JwBjxepbS91dHOwcbKKlh1E0ZlHE1sFkhnJVRyAPn6+/f5+vj5+vn6+/j5+fz7+/z8/Mnf6LfU4bfS37nU4bnV4ubu8vj29O/y9L7X5LbS4LjT4bbS4L7X5LYLjaPUsFFPAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="flow diagram"\n        title=""\n        src="/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-48538.png"\n        srcset="/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-bed0f.png 200w,\n/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-5fd34.png 400w,\n/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-48538.png 800w,\n/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-b70ec.png 1200w,\n/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-d134a.png 1600w,\n/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-f6ead.png 2400w,\n/static/flow-diagram-336b7203f275aef2956aaccec12e5a0f-21d6c.png 2827w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>In this flow, React makes an API request to localhost:3000, the Webpack development server. And then the development server simply proxies that request to the API server, negating any CORS issues.</p>\n<p>we need to:</p>\n<ol>\n<li>launch both the Webpack dev server and the API server in order to run the app locally.</li>\n<li>we need to get the Webpack dev server to proxy requests intended for our API server.</li>\n</ol>\n<h2 id="concurrently"><a href="#concurrently" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Concurrently</h2>\n<p><a href="https://github.com/kimmobrunfeldt/concurrently">Concurrently</a> is a utility for running multiple processes. Taking a look at our package.json file inside the top-level directory will show you that we already installed Concurrently as a dev-dependency earlier.</p>\n<p>We want concurrently to execute two commands, one to boot the API server and one to boot the Webpack development server. You boot multiple commands by passing them to concurrently in quotes like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">concurrently <span class="token string">"npm run server"</span> <span class="token string">"cd client &amp;&amp; npm start"</span></code></pre>\n      </div>\n<p>However, the &#x26;&#x26; operator is not cross-platform (doesn’t work on Windows). As such, we’ve included a start-client.js script with the project. This script will boot the client from the top-level directory in a manner that is cross-platform.</p>\n<p>Ultimately, we’ll want to boot concurrently like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">concurrently <span class="token string">"npm run server"</span> <span class="token string">"npm run client"</span></code></pre>\n      </div>\n<p>This will be our start command. Let’s add the start and client commands to our package.json now:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"concurrently \\"npm run server\\" \\"npm run client\\""</span><span class="token punctuation">,</span>\n    <span class="token property">"server"</span><span class="token operator">:</span> <span class="token string">"node server.js"</span><span class="token punctuation">,</span>\n    <span class="token property">"client"</span><span class="token operator">:</span> <span class="token string">"node start-client.js"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>For start, we execute both commands, escaping the quotes because we’re in a JSON file. For client, we execute the start-client.js script with node. Now we can boot both servers by running <strong>npm start</strong>.</p>\n<h2 id="react-interface"><a href="#react-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Interface</h2>\n<p>Now we will add the food lookup React components which will make requests against our API server. The components are located in the <strong>/client/src</strong> folder. You can copy them over the auto-generated content by create-react-app, overwriting the original <em>App.js</em>, <em>index.js</em> and <em>index.css</em> files.</p>\n<p>We use <a href="https://semantic-ui.com/introduction/getting-started.html">Semantic UI</a> for styling the app - the files can be found in <strong>/client/src/semantic</strong> as well as <strong>/client/semantic.json</strong> inside this repository - just copy them into your client directory. It’s loaded inside of <strong>/client/src/index.js</strong>. <strong>/client/src/index.css</strong> contains a few margins.</p>\n<p>Changing the value of the search bar (the FoodSearch component) ultimately calls search() on Client. <strong>Client.js</strong> contains a Fetch call to our API endpoint:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`api/food?q=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>query<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    accept<span class="token punctuation">:</span> <span class="token string">"application/json"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>checkStatus<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>parseJSON<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>This is the one touch point between our React web app and the API server. Notice how the URL <em>does not include</em> the base <strong>localhost:3001</strong>. That’s because, as noted earlier, we want this request to be made to the Webpack development server. Thanks to the configuration established by create-react-app, the Webpack dev server will infer what traffic to proxy. It will proxy a request if the URL is not recognized or if the request is not loading static assets (like HTML/CSS/JS).</p>\n<p>We just need to instruct Webpack to use the proxy.</p>\n<h2 id="setting-up-the-proxy"><a href="#setting-up-the-proxy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting up the proxy</h2>\n<p>To have the Webpack development server proxy our API requests to our API server, we just need to add the following line to client/package.json:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">// Inside client/package.json\n<span class="token property">"proxy"</span><span class="token operator">:</span> <span class="token string">"http://localhost:3001/"</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<h1 id="test-your-app"><a href="#test-your-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test your App</h1>\n<p>Our React app is ready and in place in client/. We have concurrently setup to boot both our Webpack dev server and our API server together. And we’ve specified the route that Webpack should proxy API traffic to.</p>\n<p>Let’s boot both servers:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> start</code></pre>\n      </div>\n<p><img src="/usage-demo-a5a0a80a02115c55bc2dd1a451b58345.gif"></p>\n<h1 id="deployment"><a href="#deployment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deployment</h1>\n<p>create-react-app comes with a build command that you can use to create a static bundle of the React app:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">cd</span> client\n<span class="token function">npm</span> run build</code></pre>\n      </div>\n<p>This produces a build/ folder which you can serve with any static asset host. It contains all your app’s HTML, JavaScript, and CSS files. This command is intended for production use. It does all kinds of optimization, to create a fast loading static page.</p>',fields:{slug:"/caloric-burn/",prefix:"2017-07-22"},frontmatter:{title:"Food Caloric Table App",subTitle:"A sample app will be a simple food nutrition lookup table. The data driving the app is supplied by the USDA's National Nutrient Database.",cover:{childImageSharp:{resize:{src:"/static/photo-34221441540_627d018c4b_o-cover-8ef1a9f9d92027069d2fe4f932fa61ec-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/caloric-burn/"}}}});
//# sourceMappingURL=path---caloric-burn-9ca7d958c78bbe596661.js.map