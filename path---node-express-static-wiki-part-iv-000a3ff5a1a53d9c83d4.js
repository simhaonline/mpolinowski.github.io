webpackJsonp([0x6291209189da],{666:function(e,t){e.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2016-08-17--node-express-static-wiki-part-iv/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-11627898645_5f0761ff9e_o-65a4bb9682b131df95bd3b6fd0295e2a-72e4a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABXUlEQVQoz42QT4uBURSHXy9GGEqMIllRyrwrNhpjZcewGTVW/pQNGSQpERsLJdmMlE8wdsp6fIbxHXyOZ957S8NMU7P4nXs6nfOc37nKrd2Oz+cjEokQjUZJJh+o1+s0m02q1SqVSoVarUav16Pf79Nut5lMJhSLL4TDYfx+P06nE0VRUHUpZpMJm82Gx+OR0FTqkVzuiW63y2g0YjabsVwumc/nDIdDxuMx6/WaTqdDqVSiUHjGrs8LoFEAb8xmrFYrLpeLQCCApt2TzWZoNBosFgum06kErlZvbLfv7Pd7WRcXCJfChMVi+QaeHbrdbkKhEPF4jHw+R6v1SiaTYTAYsNls2O12HA4fHI9HXZ+cTifK5bIEnSVPNshgwGg0YtbdOhwOvN476VY0aZpGMBiUy9LpNIlEglgspv91UtYN+uwVUL2AXW77r1RVvQb+1XjeLAZELt6f+S+4ri+0v9qnnE+8bAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Angkor Wat, Cambodia"\n        title=""\n        src="/static/photo-11627898645_5f0761ff9e_o-65a4bb9682b131df95bd3b6fd0295e2a-48538.png"\n        srcset="/static/photo-11627898645_5f0761ff9e_o-65a4bb9682b131df95bd3b6fd0295e2a-bed0f.png 200w,\n/static/photo-11627898645_5f0761ff9e_o-65a4bb9682b131df95bd3b6fd0295e2a-5fd34.png 400w,\n/static/photo-11627898645_5f0761ff9e_o-65a4bb9682b131df95bd3b6fd0295e2a-48538.png 800w,\n/static/photo-11627898645_5f0761ff9e_o-65a4bb9682b131df95bd3b6fd0295e2a-b70ec.png 1200w,\n/static/photo-11627898645_5f0761ff9e_o-65a4bb9682b131df95bd3b6fd0295e2a-72e4a.png 1500w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="nodeexpress-wikiknowledgebase"><a href="#nodeexpress-wikiknowledgebase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node/Express Wiki/Knowledgebase</h2>\n<p><strong>Bootstrap/Accelerated Mobile Pages</strong></p>\n<p>This code is part of a training in web development with <strong>Node.js</strong> and <strong>Express /Generator</strong>. Goal of this course is to quickly set up a node/express environment to serve static HTML/CSS/JS content.</p>\n<p>This App was created in several steps:</p>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#nodeexpress-wikiknowledgebase">Node/Express Wiki/Knowledgebase</a></p>\n<ul>\n<li><a href="#7-run-the-app-as-a-service-pm2">7 Run the app as a service (PM2)</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h3 id="7-run-the-app-as-a-service-pm2"><a href="#7-run-the-app-as-a-service-pm2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7 Run the app as a service (PM2)</h3>\n<hr>\n<ul>\n<li><strong>Step One</strong> — Demonization</li>\n</ul>\n<p>Now we will install PM2, which is a process manager for Node.js applications. PM2 provides an easy way to manage and daemonize applications (run them as a service).</p>\n<p>We will use Node Packaged Modules (NPM), which is basically a package manager for Node modules that installs with Node.js, to install PM2 on our app server. Use this command to install PM2:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo npm install pm2@latest -g</code></pre>\n      </div>\n<p>To update PM2 to the latest version and update version in memory</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo npm install pm2@latest -g\n\n pm2 update</code></pre>\n      </div>\n<ul>\n<li><strong>Step Two</strong> — Manage Application with PM2</li>\n</ul>\n<p>The first thing you will want to do is use the pm2 start command to run your application, app.js, in the background. With node Node apps the entry point is the app.js (or index.js). In case you used Express-Generator to do your app scaffolding, use the www file in the /bin directory instead :</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 start app.js</code></pre>\n      </div>\n<p>This also adds your application to PM2’s process list, which is outputted every time you start an application:</p>\n<table>\n<thead>\n<tr>\n<th>App name</th>\n<th align="center">id</th>\n<th align="center">mode</th>\n<th align="center">pid</th>\n<th align="center">status</th>\n<th align="center">restart</th>\n<th align="center">uptime</th>\n<th align="center">mem</th>\n<th align="right">watching</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>app</td>\n<td align="center">0</td>\n<td align="center">fork</td>\n<td align="center">9495</td>\n<td align="center">online</td>\n<td align="center">0</td>\n<td align="center">0s</td>\n<td align="center">36.4 MB</td>\n<td align="right">disabled</td>\n</tr>\n</tbody>\n</table>\n<p>Repeat for all your node apps and save:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 save</code></pre>\n      </div>\n<p>Applications that are running under PM2 will be restarted automatically if the application crashes or is killed, but an additional step needs to be taken to get the application to launch on system startup (boot or reboot). Luckily, PM2 provides an easy way to do this, the startup subcommand.</p>\n<p>Once you started all apps, type the following to make sure that they restart after a server restart. You must also specify the init system you are running on, which is centos, in our case:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 startup [ubuntu | ubuntu14 | ubuntu12 | centos | centos6 | arch | oracle | amazon | macos | darwin | freesd | systemd | systemv | upstart | launchd | rcd]</code></pre>\n      </div>\n<p>The startup subcommand generates and configures a startup script to launch PM2 and its managed processes on server boots. We won´t specify our OS and let pm2 decide what to do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo pm2 startup</code></pre>\n      </div>\n<p>Bring back previously saved processes (via pm2 save):</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 save</code></pre>\n      </div>\n<p>Disabling startup system</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">pm2 resurrect</code></pre>\n      </div>\n<p>Disabling startup system</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">pm2 unstartup</code></pre>\n      </div>\n<ul>\n<li><strong>Step Three</strong> — Other PM2 Commands (Optional)</li>\n</ul>\n<p>Stop an application with this command (specify the PM2 App name or id):</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo pm2 stop app</code></pre>\n      </div>\n<p>Restart an application with this command (specify the PM2 App name or id):</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo pm2 restart app</code></pre>\n      </div>\n<p>Will 0s downtime reload (for NETWORKED apps):</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo pm2 reload all</code></pre>\n      </div>\n<p>Will remove process 0 from pm2 list:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 delete 0</code></pre>\n      </div>\n<p>The list of applications currently managed by PM2 can also be looked up with the list subcommand:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 list</code></pre>\n      </div>\n<p>More information about a specific application can be found by using the info subcommand (specify the PM2 App name or id):</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 info app</code></pre>\n      </div>\n<p>The PM2 process monitor can be pulled up with the monit subcommand. This displays the application status, CPU, and memory usage:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> pm2 monit</code></pre>\n      </div>\n<br/>\n<p><a href="/node-express-static-wiki-part-iii/">Previous Step</a> / <a href="/node-express-static-wiki-part-v/">Next Step</a></p>',fields:{slug:"/node-express-static-wiki-part-iv/",prefix:"2016-08-17"},frontmatter:{title:"Node Express Static (IV)",subTitle:"Building a product Wiki based on Node.js, Express.js, AMP and Elasticsearch",cover:{childImageSharp:{resize:{src:"/static/photo-11627898645_5f0761ff9e_o-cover-b08a03ff59506d39e6926bd5a55494a9-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/node-express-static-wiki-part-iv/"}}}});
//# sourceMappingURL=path---node-express-static-wiki-part-iv-000a3ff5a1a53d9c83d4.js.map