webpackJsonp([0xe02f61c966a1],{665:function(e,n){e.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2016-08-15--node-express-static-wiki-part-iii/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-15328454698_e5687fc21d_o-bba0deab5c359ed08d63408a42efd487-72e4a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 40.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACLElEQVQozw2RyU4TAQCGR4hVsAt0AexAQ2lLaQu2nTZQWko3ZrpD6TZTlulCANliNCTevWjiwRh9AI8+ghe9eTbx5tX4Hp99gD/5vu8XbpoxGltuRnKQQS/ATSGMEp5Hya+ym3Wj5ByoPQnfqpXJSQGz3UBq00+/pVCWN4hmTOTrIoV0kr2cjHChSQw6TuolgXJhglR4hmZ2hS/vbVzqZjKSiKp6qek2rHMPiew46A08nKir6L0Y6v4a+3sh2u3nJHdOEfTDIM2SjVbVTK8YoJSeQ1ct/Ps1ybvX0yhxEb34FKVuQuvbedWJcjsUubgLcjWqUNheoVubJxQUCPoFhE51nWE5QDFh48WZymm7SCJq57hl5EhbYjcyR8g7NR6auOt6qGac9AduNC1CPO5lM2rhXLOhZKx0z5wIa94Fjqub1DIiB4qPg4qP/I4Vv9tIWJpFipgIRR6wlZ4mJ82QS9sp1qwMBtNkZQelssRRx0ytaaHRDyD0GwVu1Rz7iohWsY61RRpRA+HAE1ziY9rNKX5/N/Pt6wTx2AQLTiNSbIbhaJluK0B3tE5nsEhPVdCHLYS7S53rkwKdsov7opNL2Us+biGbWsS3bEY7NPD35yP+/DDQVo3412bJbLmo15YZHQeojPuej0p8+njFSW8b4cObaz6/veflsMBNM4SSnKWcXRo/7kIcE8qKB7Vt46BkRN5zsBEVSGybKR7aeJawkExbKNU8nF+nONUr/AcvgxWpfB5pkAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Mustang, Nepal"\n        title=""\n        src="/static/photo-15328454698_e5687fc21d_o-bba0deab5c359ed08d63408a42efd487-48538.png"\n        srcset="/static/photo-15328454698_e5687fc21d_o-bba0deab5c359ed08d63408a42efd487-bed0f.png 200w,\n/static/photo-15328454698_e5687fc21d_o-bba0deab5c359ed08d63408a42efd487-5fd34.png 400w,\n/static/photo-15328454698_e5687fc21d_o-bba0deab5c359ed08d63408a42efd487-48538.png 800w,\n/static/photo-15328454698_e5687fc21d_o-bba0deab5c359ed08d63408a42efd487-b70ec.png 1200w,\n/static/photo-15328454698_e5687fc21d_o-bba0deab5c359ed08d63408a42efd487-72e4a.png 1500w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="nodeexpress-wikiknowledgebase"><a href="#nodeexpress-wikiknowledgebase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node/Express Wiki/Knowledgebase</h2>\n<p><strong>Bootstrap/Accelerated Mobile Pages</strong></p>\n<p>This code is part of a training in web development with <strong>Node.js</strong> and <strong>Express /Generator</strong>. Goal of this course is to quickly set up a node/express environment to serve static HTML/CSS/JS content.</p>\n<p>This App was created in several steps:</p>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#nodeexpress-wikiknowledgebase">Node/Express Wiki/Knowledgebase</a></p>\n<ul>\n<li><a href="#4-install-nginx-on-a-centos-7-web-server">4 Install NGINX on a CentOS 7 web server</a></li>\n<li><a href="#5-install-nodejs-on-a-centos-7-web-server">5 Install Node.js on a CentOS 7 web server</a></li>\n<li><a href="#6-clone-repo-from-git">6 Clone Repo from Git</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h3 id="4-install-nginx-on-a-centos-7-web-server"><a href="#4-install-nginx-on-a-centos-7-web-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4 Install NGINX on a CentOS 7 web server</h3>\n<hr>\n<ul>\n<li><strong>Step One</strong> — Add Nginx Repository</li>\n</ul>\n<p>Step One—Add Nginx Repository\nTo add the CentOS 7 EPEL repository, open terminal and use the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo yum install epel-release</code></pre>\n      </div>\n<ul>\n<li><strong>Step Two</strong> — Install Nginx</li>\n</ul>\n<p>Now that the Nginx repository is installed on your server, install Nginx using the following yum command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo yum install nginx</code></pre>\n      </div>\n<ul>\n<li><strong>Step Three</strong> — Start Nginx</li>\n</ul>\n<p>Nginx does not start on its own. To get Nginx running, type:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo systemctl start nginx</code></pre>\n      </div>\n<p>Test:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">http://server_domain_name_or_IP/</code></pre>\n      </div>\n<ul>\n<li><strong>Step Four</strong> — Nginx as a Service</li>\n</ul>\n<p>To enable Nginx to start when your system boots, enter the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo systemctl enable nginx</code></pre>\n      </div>\n<p>Always test your config after changes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">nginx -t</code></pre>\n      </div>\n<p>And try to reload instead of restarting - reload will fail but old config keeps running in case of error</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">service nginx reload</code></pre>\n      </div>\n<p>To restart the Nginx service, enter the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> service nginx restart</code></pre>\n      </div>\n<h3 id="5-install-nodejs-on-a-centos-7-web-server"><a href="#5-install-nodejs-on-a-centos-7-web-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5 Install Node.js on a CentOS 7 web server</h3>\n<hr>\n<ul>\n<li><strong>Step One</strong> — Download the Node.js Source</li>\n</ul>\n<p>Choose your version and download the source:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -</code></pre>\n      </div>\n<ul>\n<li><strong>Step Two</strong> — Install Node.js</li>\n</ul>\n<p>Then install, as root:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo yum -y install nodejs</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo yum install -y gcc-c++ make</code></pre>\n      </div>\n<h3 id="6-clone-repo-from-git"><a href="#6-clone-repo-from-git" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6 Clone Repo from Git</h3>\n<hr>\n<ul>\n<li><strong>Step One</strong> — Install Git</li>\n</ul>\n<p>After this line you will have Git installed on your CentOS server:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo yum install -y git</code></pre>\n      </div>\n<p>Putting your Git code on your server:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> cd /opt/\n sudo mkdir apps\n sudo chown your_app_user_name app\n git clone https://github.com/INSTAR-Deutschland/express-static.git apps\n cd apps\n npm install</code></pre>\n      </div>\n<p>Update an existing repo by cd into directory and:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> git pull origin master</code></pre>\n      </div>\n<br/>\n<p><a href="/node-express-static-wiki-part-ii/">Previous Step</a> / <a href="/node-express-static-wiki-part-iv/">Next Step</a></p>',fields:{slug:"/node-express-static-wiki-part-iii/",prefix:"2016-08-15"},frontmatter:{title:"Node Express Static (III)",subTitle:"Building a product Wiki based on Node.js, Express.js, AMP and Elasticsearch",cover:{childImageSharp:{resize:{src:"/static/photo-15328454698_e5687fc21d_o-cover-9c1230e7a347cd6ba14f38a8bb034ecd-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/node-express-static-wiki-part-iii/"}}}});
//# sourceMappingURL=path---node-express-static-wiki-part-iii-398c677aff8bc5c9001e.js.map