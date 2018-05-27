webpackJsonp([0x6cfb29f3ee22],{670:function(e,a){e.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-09-04--react-under-the-hood-part-ii/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-34443677922_8f09e47dd3_o-73db46a6abf375129316cc916fb1473c-72e4a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 48%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAC4ElEQVQozw2SW0+TBwCGP0HqR/vZUrCFylpLabEnWykGutJQK7RQGAqdljoOwqwwp2LRKczFRYrIHNU5JR4wMM/REUw8NBENukSjiXqjJt54s5v9jmff7Xvx5HnzvoLebEFn0BMO1TGYHuXIqRlOzy1y8e8lbj15ybP3H3n7+Quf/v2P5fcfSA2P0Jn8jq07uugZ/IHkQIrv00dJpPYhShqEdesrsDhttEU9HP8xwMK149x+mCP3/Dmv3r3j5es3vHjxlOnfx9k10EN3X5LfspOcmp5gZvZPps5Ocfjnw+zZP4RUVIxgdZmoclfQHvMy+Usnc2f6uHl9mkcP53i6dJdc7jbLT+Z5sPAHi4tXuXxpkuWleXL3s1y/cpRzUynGx5JkxhJoilYjGMylrK0ox1djpTvuJZPezLXzQ9yZTfPXxUNcPneQezcz3L0xzsKtCaZPDnHjUprZ7G6mjnUxcSROOhVhZLAZrVYGqrUSZaUaYgEj2f0+LozWs6e3kdO/Jjl28BtG9zZxYqSZRHsNO+MhehKNDPW30t/dSte3EVqbAzTUb8TjtiKpZaCpTEnApSEZLifVaiHRYmfv7nrZpFeu0yeDt/HP4wwLsykO9NcQDXtpiXxNc5OfULCahoAXh70Cw1o9qtUSgs0ksclRjMVcgqQVsdrU9A+EGB7u5NBwO+cnOpg5GefEWCfz2Tb6uhxEG62EGnxsDtbhdlWhVIkoFAUoRBFBr1OiLlYilqyivFJFTa2eSFuAlo5Gunub+GnfFq5kmoh3VBMMe4jFqojGLASDeuxOExs8Dmw2E4WqQvIKFAh5Yh750gqKygowVkrYNxjw+N3UhnyEW/y0d9ST2F5LJOqi2m/D4jbirDbh9umwOVehXaPA+JUBS6UZUVmIsEIhIKrzUJXkoy0T0ZnWYHatw+mz4vPbqQs6CDSsx+6Vs43lGKtK0RpL0BiK0BnlQU0K+dACK1fKYvn5/A/Ly4FuGJSSXAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Harbin, China"\n        title=""\n        src="/static/photo-34443677922_8f09e47dd3_o-73db46a6abf375129316cc916fb1473c-48538.png"\n        srcset="/static/photo-34443677922_8f09e47dd3_o-73db46a6abf375129316cc916fb1473c-bed0f.png 200w,\n/static/photo-34443677922_8f09e47dd3_o-73db46a6abf375129316cc916fb1473c-5fd34.png 400w,\n/static/photo-34443677922_8f09e47dd3_o-73db46a6abf375129316cc916fb1473c-48538.png 800w,\n/static/photo-34443677922_8f09e47dd3_o-73db46a6abf375129316cc916fb1473c-b70ec.png 1200w,\n/static/photo-34443677922_8f09e47dd3_o-73db46a6abf375129316cc916fb1473c-72e4a.png 1500w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>A look behind the curtain of React Starters like:</p>\n<ul>\n<li><a href="https://github.com/facebookincubator/create-react-app">create-react-app</a></li>\n<li><a href="https://github.com/gatsbyjs/gatsby">Gatsby.js</a></li>\n<li><a href="https://github.com/zeit/next.js">Next.js</a></li>\n<li><a href="https://neutrino.js.org">Neutrino</a></li>\n</ul>\n<p>React is often said to be easy to learn, but impossible to set up in an dev environment. Once you start reading about it, you will be faced by an exhausting amount of choices that you have to make, before you can move on to actual coding. Starter Packages, like the ones named above, give a quick access to the React world. Let’s take a look into that black box now.</p>\n</blockquote>\n<p><a href="https://github.com/mpolinowski/react-under-the-hood">Github</a></p>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#02-jsx-and-babel">02 JSX and Babel</a></p>\n<ul>\n<li><a href="#transpilation">Transpilation</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h2 id="02-jsx-and-babel"><a href="#02-jsx-and-babel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>02 JSX and Babel</h2>\n<p>React offers a way to write our mark-up directly inside the Javascript component - called JSX. The title component written in JSX looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">render</span><span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>h1 id <span class="token operator">=</span> <span class="token string">\'title\'</span>\n\t\t\tclassName <span class="token operator">=</span> <span class="token string">\'header\'</span>\n\t\t\tstyle <span class="token operator">=</span> <span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">></span>\n\t\tHello World\n\t<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>\n\tdocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'react-container\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Since our webbrowser don’t understand JSX, we will have to transpile it to pure Javascript using Babel - this can be quickly done with the babel-cli transpiler. Let us first initialize our node project by <em>npm init -y</em> then install the babel-cli both globally as well as a development dependency inside our project:</p>\n<h3 id="transpilation"><a href="#transpilation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transpilation</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g babel-cli\n\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-cli</code></pre>\n      </div>\n<p>now create a folder called src inside the root dir and move the index.js file into it - since we want to use Babel to transpile all JSX files from the source directory and copy them to the distribution directory, where they can be picked up and served by our webserver.</p>\n<p>Now we need to configure Babel to transpile JSX and all latest and proposed versions of ECMA Script, by adding a file .babelrc inside the root director:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  \'presets\'<span class="token operator">:</span> <span class="token punctuation">[</span>\'latest\'<span class="token punctuation">,</span> \'react\'<span class="token punctuation">,</span> \'stage-<span class="token number">0</span>\'<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now we need to install those presets as dev-dependencies <strong>be advised</strong>: <em>we later throw out babel-preset-latest babel-preset-stage-0 and replace it with <a href="https://babeljs.io/docs/plugins/preset-env/">babel-preset-env</a> to work with webpack 3!</em> :</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-react babel-preset-latest babel-preset-stage-0</code></pre>\n      </div>\n<p>We can now use the cli tool to transpile our JSX source file and create the browser-readable bundle.js file from it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">babel ./src/index.js --out-file ./dist/bundle.js</code></pre>\n      </div>\n<p>Now open index.html inside the /dist directory and change the index.js to bundle.js. Reloading our webserver will now show our app again. To make our life easier we will add the httpster call as our npm start script inside the package.json file - then start your webserver with <em>npm start</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"httpster -p 3000 -d ./dist"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We are now able to write our React code in JSX as well as to use ES2015 or ES2017 syntax inside our source files. Babel will transpile them into browser-friendly code inside /dist/bundle.js. But now we don’t want to do this by hand, every time we made a small edit on our page - we need an automation solution for this process.</p>',fields:{slug:"/react-under-the-hood-part-ii/",prefix:"2017-09-04"},frontmatter:{title:"React under the Hood (II)",subTitle:"A look behind the curtain of React Starters",cover:{childImageSharp:{resize:{src:"/static/photo-34443677922_8f09e47dd3_o-cover-1cae134eef2312de361870e76f7b84fe-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/react-under-the-hood-part-ii/"}}}});
//# sourceMappingURL=path---react-under-the-hood-part-ii-0f961a333bea003b16f6.js.map