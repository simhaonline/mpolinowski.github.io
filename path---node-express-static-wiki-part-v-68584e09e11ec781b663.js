webpackJsonp([0xa2a231628faa],{629:function(e,a){e.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2016-08-21--node-express-static-wiki-part-v/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-15491736416_6abd8de751_o-09d4167df7ebb0c770163b06659f107d-72e4a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.266666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAACDUlEQVQozx2PW0uTAQBAv5/SUy1CkUwwhMjCykIrBbUtl2s2L9vc/Gya023fpm1zF5d+pn3zEuYttJKlEdLwAl7KVfoQlC8GQg8hQWlsBsFJejovBw5H8C38JLgK/sUUgcUDhteTKKtJAgsH+OIplOUUoYUkofl9AvE95KVfDK3toazsH/I3I4f+6PsUExt/mNj8i+AMVtE7/5X+uS36Zj4yOPuB6Mt15Bdv8Y+t8Ghqkd7pd0wubRON7xB9s8PUyjdiie/Mbewyndjl9eYPlr7ssbadRLCYj9EgaXD0DtIsDyGGZWq93Rjbgpg9fnTNPgwOPwYpQnV7Pwb/GJWBZ5gevMI2sIx9OIF36hOR2BbdM58RNLczqBczsEsFuPrCuKIK97o6sMtubBEHdW4Ja7uE2ObE6HBR0+JC3yhxw+xGU++hyhHE2B7FFh6n9eE0Qln5cUx12Xic2ZibziEqj9EpMTTdTyjvlCn3SlR0SOjDXZTe78EUUWjqGfgfapJ82Jx+6lsD6K2NFKpLEfSmdEq1KiruZHBLfwKrPReDR6Qq6EQT7qOoc4SroVGuhScojjylpGsSdc9zbsrjh+sRdJZKyrSXySvM5HSuCqFEm4bRmoWuJh2jmEWtJZPq2lNYxDMYGy6gvqulSGohzxPgoidIvtvL9eYGik1qcvIzOX8ljbwCFWcvHeVkzhH+AbmqbB1IN8yqAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Pohkara, Nepal"\n        title=""\n        src="/static/photo-15491736416_6abd8de751_o-09d4167df7ebb0c770163b06659f107d-48538.png"\n        srcset="/static/photo-15491736416_6abd8de751_o-09d4167df7ebb0c770163b06659f107d-bed0f.png 200w,\n/static/photo-15491736416_6abd8de751_o-09d4167df7ebb0c770163b06659f107d-5fd34.png 400w,\n/static/photo-15491736416_6abd8de751_o-09d4167df7ebb0c770163b06659f107d-48538.png 800w,\n/static/photo-15491736416_6abd8de751_o-09d4167df7ebb0c770163b06659f107d-b70ec.png 1200w,\n/static/photo-15491736416_6abd8de751_o-09d4167df7ebb0c770163b06659f107d-72e4a.png 1500w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="nodeexpress-wikiknowledgebase"><a href="#nodeexpress-wikiknowledgebase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node/Express Wiki/Knowledgebase</h2>\n<p><strong>Bootstrap/Accelerated Mobile Pages</strong></p>\n<p>This code is part of a training in web development with <strong>Node.js</strong> and <strong>Express /Generator</strong>. Goal of this course is to quickly set up a node/express environment to serve static HTML/CSS/JS content.</p>\n<p>This App was created in several steps:</p>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#nodeexpress-wikiknowledgebase">Node/Express Wiki/Knowledgebase</a></p>\n<ul>\n<li><a href="#8-install-java">8 Install Java</a></li>\n<li><a href="#public-signing-key">Public Signing Key</a></li>\n<li><a href="#install-java-8">Install Java 8</a></li>\n<li><a href="#9-install-elasticsearch">9 Install Elasticsearch</a></li>\n<li><a href="#public-signing-key-1">Public Signing Key</a></li>\n<li><a href="#install-elasticsearch">Install Elasticsearch</a></li>\n<li><a href="#access-control-allow-origin">Access-Control-Allow-Origin</a></li>\n<li><a href="#set-up-elasticsearch-service">Set-up Elasticsearch Service</a></li>\n<li><a href="#10-install-kibana">10 Install Kibana</a></li>\n<li><a href="#create-and-edit-a-new-yum-repository-file-for-kibana">Create and edit a new yum repository file for Kibana</a></li>\n<li><a href="#install-kibana-with-this-command">Install Kibana with this command:</a></li>\n<li><a href="#set-elasticsearch-connection-url">Set Elasticsearch Connection URL</a></li>\n<li><a href="#install-kibana-service">Install Kibana Service</a></li>\n<li><a href="#secure-kibana-with-nginx">Secure Kibana with NGINX</a></li>\n<li><a href="#securing-kibana-in-a-nginx-server-block">Securing Kibana in a Nginx server block</a></li>\n<li><a href="#install-sense">Install Sense</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h3 id="8-install-java"><a href="#8-install-java" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>8 Install Java</h3>\n<hr>\n<h4 id="public-signing-key"><a href="#public-signing-key" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Public Signing Key</h4>\n<p>Download the Oracle Java 8:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> cd ~\n wget --no-cookies --no-check-certificate --header &quot;Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie&quot; &quot;http://download.oracle.com/otn-pub/java/jdk/8u73-b02/jdk-8u73-linux-x64.rpm&quot;</code></pre>\n      </div>\n<h4 id="install-java-8"><a href="#install-java-8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Java 8</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo yum -y localinstall jdk-8u73-linux-x64.rpm</code></pre>\n      </div>\n<p>Now Java should be installed at /usr/java/jdk1.8.0_73/jre/bin/java, and linked from /usr/bin/java. u may delete the archive file that you downloaded earlier:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">rm ~/jdk-8u*-linux-x64.rpm</code></pre>\n      </div>\n<h3 id="9-install-elasticsearch"><a href="#9-install-elasticsearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>9 Install Elasticsearch</h3>\n<h4 id="public-signing-key-1"><a href="#public-signing-key-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Public Signing Key</h4>\n<p>Download and install the public signing key:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch</code></pre>\n      </div>\n<p>Add the following in your /etc/yum.repos.d/ directory in a file with a .repo suffix, for example elasticsearch.repo</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[elasticsearch-5.x]\nname=Elasticsearch repository for 5.x packages\nbaseurl=https://artifacts.elastic.co/packages/5.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md</code></pre>\n      </div>\n<h4 id="install-elasticsearch"><a href="#install-elasticsearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Elasticsearch</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo yum install elasticsearch</code></pre>\n      </div>\n<h4 id="access-control-allow-origin"><a href="#access-control-allow-origin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Access-Control-Allow-Origin</h4>\n<p>Restrict outside access to your Elasticsearch instance (port 9200)</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo vi /etc/elasticsearch/elasticsearch.yml\n\n-&gt; network.host: localhost</code></pre>\n      </div>\n<p>To get rid of the following Error:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Failed to load http://localhost:9200/: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource. Origin &#39;http://localhost:8000&#39; is therefore not allowed access.</code></pre>\n      </div>\n<p>Add the following line to elasticsearch.yml</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">http.cors:\n  enabled: true\n  allow-origin: /https?:\\/\\/localhost(:[0-9]+)?/</code></pre>\n      </div>\n<h4 id="set-up-elasticsearch-service"><a href="#set-up-elasticsearch-service" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set-up Elasticsearch Service</h4>\n<p>To configure Elasticsearch to start automatically when the system boots up, run the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo /bin/systemctl daemon-reload\nsudo /bin/systemctl enable elasticsearch.service</code></pre>\n      </div>\n<p>Elasticsearch can be started and stopped as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo systemctl start elasticsearch.service\nsudo systemctl stop elasticsearch.service</code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>Type</th>\n<th align="center">Description</th>\n<th align="right">Location RHEL/CentOS</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>home</td>\n<td align="center">Home of elasticsearch installation.</td>\n<td align="right">/usr/share/elasticsearch</td>\n</tr>\n<tr>\n<td>bin</td>\n<td align="center">Binary scripts including elasticsearch to start a node.</td>\n<td align="right">/usr/share/elasticsearch/bin</td>\n</tr>\n<tr>\n<td>conf</td>\n<td align="center">Configuration files elasticsearch.yml and logging.yml.</td>\n<td align="right">/etc/elasticsearch</td>\n</tr>\n<tr>\n<td>conf</td>\n<td align="center">Environment variables including heap size, file descriptors.</td>\n<td align="right">/etc/sysconfig/elasticsearch</td>\n</tr>\n<tr>\n<td>data</td>\n<td align="center">The location of the data files of each index / shard allocated on the node.</td>\n<td align="right">/var/lib/elasticsearch</td>\n</tr>\n<tr>\n<td>logs</td>\n<td align="center">Log files location</td>\n<td align="right">/var/log/elasticsearch</td>\n</tr>\n<tr>\n<td>plugins</td>\n<td align="center">Plugin files location. Each plugin will be contained in a subdirectory.</td>\n<td align="right">/usr/share/elasticsearch/plugins</td>\n</tr>\n<tr>\n<td>repo</td>\n<td align="center">Shared file system repository locations.</td>\n<td align="right">Not configured</td>\n</tr>\n<tr>\n<td>script</td>\n<td align="center">Location of script files.</td>\n<td align="right">/etc/elasticsearch/scripts</td>\n</tr>\n</tbody>\n</table>\n<h3 id="10-install-kibana"><a href="#10-install-kibana" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>10 Install Kibana</h3>\n<hr>\n<h4 id="create-and-edit-a-new-yum-repository-file-for-kibana"><a href="#create-and-edit-a-new-yum-repository-file-for-kibana" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create and edit a new yum repository file for Kibana</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"> sudo vi /etc/yum.repos.d/kibana.repo</code></pre>\n      </div>\n<p>Add the following repository configuration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[kibana-5.x]\nname=Kibana repository for 5.x packages\nbaseurl=https://artifacts.elastic.co/packages/5.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md</code></pre>\n      </div>\n<h4 id="install-kibana-with-this-command"><a href="#install-kibana-with-this-command" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Kibana with this command:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo yum install kibana</code></pre>\n      </div>\n<h4 id="set-elasticsearch-connection-url"><a href="#set-elasticsearch-connection-url" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set Elasticsearch Connection URL</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo vi /opt/kibana/config/kibana.yml\n\n-&gt; elasticsearch.url: &quot;http://localhost:9200&quot;</code></pre>\n      </div>\n<h4 id="install-kibana-service"><a href="#install-kibana-service" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Kibana Service</h4>\n<p>To configure Kibana to start automatically when the system boots up, run the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo /bin/systemctl daemon-reload\nsudo /bin/systemctl enable kibana.service</code></pre>\n      </div>\n<p>Kibana can be started and stopped as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo systemctl start kibana.service\nsudo systemctl stop kibana.service</code></pre>\n      </div>\n<h4 id="secure-kibana-with-nginx"><a href="#secure-kibana-with-nginx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Secure Kibana with NGINX</h4>\n<p>Use NGINX to securely access Kibana and use htpasswd to create an admin user:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo yum -y install httpd-tools\nsudo htpasswd -c /etc/nginx/htpasswd.users admin</code></pre>\n      </div>\n<p>Add your password.</p>\n<h4 id="securing-kibana-in-a-nginx-server-block"><a href="#securing-kibana-in-a-nginx-server-block" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Securing Kibana in a Nginx server block</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo vi /etc/nginx/nginx.conf</code></pre>\n      </div>\n<p>Find the default server block (starts with server {), the last configuration block in the file, and delete it. When you are done, the last two lines in the file should look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">include /etc/nginx/conf.d/*.conf;\n}</code></pre>\n      </div>\n<p>Now we will create an Nginx server block in a new file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo vi /etc/nginx/conf.d/kibana.conf</code></pre>\n      </div>\n<p>Paste the following code block into the file. Be sure to update the server_name to match your server’s name:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">server {\n    listen 80;\n\n    server_name example.com;\n\n    auth_basic &quot;Restricted Access&quot;;\n    auth_basic_user_file /etc/nginx/htpasswd.users;\n\n    location / {\n        proxy_pass http://localhost:5601;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection &#39;upgrade&#39;;\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;        \n    }\n}</code></pre>\n      </div>\n<p>Now start and enable Nginx to put our changes into effect:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo systemctl start nginx\nsudo systemctl enable nginx</code></pre>\n      </div>\n<h4 id="install-sense"><a href="#install-sense" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Sense</h4>\n<p>Once Kibana is installed, you can install Sense running the following command from your /opt/kibana folder:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">./bin/kibana plugin --install elastic/sense</code></pre>\n      </div>\n<p>You will now need to start Kibana:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">./bin/kibana</code></pre>\n      </div>\n<p>The apps are now available via:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">http://localhost:5601/app/kibana\nhttp://localhost:5601/app/sense</code></pre>\n      </div>\n<p>Use Sense to feed Elasticsearch with mappings/postings (see wiki-data.json)</p>\n<br/>\n<p><a href="/node-express-static-wiki-part-iv/">Previous Step</a></p>',fields:{slug:"/node-express-static-wiki-part-v/",prefix:"2016-08-21"},frontmatter:{title:"Node Express Static (V)",subTitle:"Building a product Wiki based on Node.js, Express.js, AMP and Elasticsearch",cover:{childImageSharp:{resize:{src:"/static/photo-15491736416_6abd8de751_o-cover-7ac4f1bb11f44923ee5d03d1370c6a16-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/node-express-static-wiki-part-v/"}}}});
//# sourceMappingURL=path---node-express-static-wiki-part-v-68584e09e11ec781b663.js.map