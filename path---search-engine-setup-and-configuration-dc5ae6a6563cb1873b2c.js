webpackJsonp([20312554098202],{643:function(e,a){e.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-10-03--search-engine-setup-and-configuration/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-fae0f.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 47.67676767676768%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAc1gWBqP/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECEQMhMf/aAAgBAQABBQKKQ6poxvb5M//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAABIHH/2gAIAQEABj8ClYf/xAAcEAADAQACAwAAAAAAAAAAAAAAAREhMUFRcYH/2gAIAQEAAT8h8Ki5Y4J7u6McVyCa+HL0H//aAAwDAQACAAMAAAAQg8//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QXH//xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8QdFD/xAAbEAEAAwADAQAAAAAAAAAAAAABABExIVFhof/aAAgBAQABPxCtXJZYv2aX0F77CogUpXUStkrF4yBgQnZh/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Search Engine Setup and Configuration"\n        title=""\n        src="/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-78f2b.jpg"\n        srcset="/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-dce19.jpg 200w,\n/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-c1413.jpg 400w,\n/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-78f2b.jpg 800w,\n/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-ab4c4.jpg 1200w,\n/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-bc99b.jpg 1600w,\n/static/photo-34139903180_fd0c397abc_o-930aac8f3a871f5fa98561ef8136c2d6-fae0f.jpg 1980w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<!-- TOC -->\n<ul>\n<li>\n<p><a href="#01-search-engine-setup-and-configuration">01 Search Engine Setup and Configuration</a></p>\n<ul>\n<li><a href="#installing-elasticsearch-6x-on-centos">Installing Elasticsearch 6.x on CentOS</a></li>\n<li><a href="#import-the-elasticsearch-pgp-key">Import the Elasticsearch PGP Key</a></li>\n<li><a href="#installing-from-the-rpm-repository">Installing from the RPM repository</a></li>\n<li><a href="#running-elasticsearch-with-_systemd_">Running Elasticsearch with <em>systemd</em></a></li>\n<li><a href="#checking-that-elasticsearch-is-running">Checking that Elasticsearch is running</a></li>\n<li><a href="#configuring-elasticsearch">Configuring Elasticsearch</a></li>\n<li><a href="#installing-kibana-6x-on-centos">Installing Kibana 6.x on CentOS</a></li>\n<li><a href="#running-kibana-with-_systemd_">Running Kibana with <em>systemd</em></a></li>\n<li><a href="#install-x-pack">Install X-Pack</a></li>\n<li><a href="#elasticsearch-security">Elasticsearch Security</a></li>\n<li><a href="#kibana-security">Kibana Security</a></li>\n<li><a href="#enabling-anonymous-access">Enabling Anonymous Access</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h2 id="01-search-engine-setup-and-configuration"><a href="#01-search-engine-setup-and-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>01 Search Engine Setup and Configuration</h2>\n<h3 id="installing-elasticsearch-6x-on-centos"><a href="#installing-elasticsearch-6x-on-centos" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing Elasticsearch 6.x on CentOS</h3>\n<p>Elasticsearch is a distributed, JSON-based search and analytics engine designed for horizontal scalability, maximum reliability, and easy management.</p>\n<h4 id="import-the-elasticsearch-pgp-key"><a href="#import-the-elasticsearch-pgp-key" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Import the Elasticsearch PGP Key</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch</code></pre>\n      </div>\n<h3 id="installing-from-the-rpm-repository"><a href="#installing-from-the-rpm-repository" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing from the RPM repository</h3>\n<p>Create a file called elasticsearch.repo in the <em>/etc/yum.repos.d/</em> directory and add the following lines:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[elasticsearch-6.x]\nname=Elasticsearch repository for 6.x packages\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md</code></pre>\n      </div>\n<p>And your repository is ready for use. You can now install Elasticsearch with one of the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo yum install elasticsearch</code></pre>\n      </div>\n<h4 id="running-elasticsearch-with-systemd"><a href="#running-elasticsearch-with-systemd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Elasticsearch with <em>systemd</em></h4>\n<p>To configure Elasticsearch to start automatically when the system boots up, run the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo /bin/systemctl daemon-reload\nsudo /bin/systemctl enable elasticsearch.service</code></pre>\n      </div>\n<p>Apparently there is no way to quietly reload the Elasticsearch service after changing the config file - you will be required to stop and restart instead:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo systemctl stop elasticsearch.service\nsudo systemctl start elasticsearch.service</code></pre>\n      </div>\n<p>These commands provide no feedback as to whether Elasticsearch was started successfully or not. Instead, this information will be written in the log files located in /var/log/elasticsearch/.</p>\n<h4 id="checking-that-elasticsearch-is-running"><a href="#checking-that-elasticsearch-is-running" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Checking that Elasticsearch is running</h4>\n<p>You can test that your Elasticsearch node is running by sending an HTTP request to port 9200 on localhost:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">curl -XGET &#39;localhost:9200/?pretty&#39;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">http://localhost:9200/_cat/indices?v&amp;pretty</code></pre>\n      </div>\n<h4 id="configuring-elasticsearch"><a href="#configuring-elasticsearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring Elasticsearch</h4>\n<p>Elasticsearch loads its configuration from the <em>/etc/elasticsearch/elasticsearch.yml</em> file by default. Examples:</p>\n<ul>\n<li><strong>cluster.name:</strong> e.g. <em>instar-wiki</em></li>\n<li><strong>node.name</strong> e.g. <em>c21</em></li>\n<li><strong>node.attr.rack:</strong> e.g <em>r44</em></li>\n<li><strong>path.data:</strong> <em>/path/to/data</em></li>\n<li><strong>path.logs:</strong> <em>/path/to/logs</em></li>\n<li><strong>network.host:</strong> <em>localhost</em> <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-network.html#network-interface-values">see config</a> <strong>*</strong></li>\n<li><strong>http.port:</strong> <em>9200</em></li>\n<li><strong>http.cors:</strong> <em>enabled:</em> true , <em>allow-origin:</em> /https?://localhost(:[0-9]+)?/, <em>allow-origin:</em> /https?://localhost(:<a href="">0-9</a><a href="">0-9</a>)?/</li>\n<li><strong>*</strong> <em>e.g. network.host: 127.0.0.1, 192.168.1.200, 7.114.21.49</em></li>\n</ul>\n<p>The RPM places config files, logs, and the data directory in the appropriate locations for an RPM-based system:</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Type</strong></td>\n<td><strong>Description</strong></td>\n<td><strong>Default Location</strong></td>\n<td><strong>Setting</strong></td>\n</tr>\n<tr>\n<td>home</td>\n<td>Elasticsearch home directory or $ES_HOME</td>\n<td><em>/usr/share/elasticsearch</em></td>\n<td></td>\n</tr>\n<tr>\n<td>bin</td>\n<td>Binary scripts including elasticsearch to start a node and elasticsearch-plugin to install plugins</td>\n<td><em>/usr/share/elasticsearch/bin</em></td>\n<td></td>\n</tr>\n<tr>\n<td>conf</td>\n<td>Configuration files including elasticsearch.yml</td>\n<td><em>/etc/elasticsearch</em></td>\n<td>ES\n<em>PATH</em>\nCONF</td>\n</tr>\n<tr>\n<td>conf</td>\n<td>Environment variables including heap size, file descriptors.</td>\n<td><em>/etc/sysconfig/elasticsearch</em></td>\n<td></td>\n</tr>\n<tr>\n<td>data</td>\n<td>The location of the data files of each index / shard allocated on the node. Can hold multiple locations.</td>\n<td><em>/var/lib/elasticsearch</em></td>\n<td>path.data</td>\n</tr>\n<tr>\n<td>logs</td>\n<td>Log files location.</td>\n<td><em>/var/log/elasticsearch</em></td>\n<td>path.logs</td>\n</tr>\n<tr>\n<td>plugins</td>\n<td>Plugin files location. Each plugin will be contained in a subdirectory.</td>\n<td><em>/usr/share/elasticsearch/plugins</em></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 id="installing-kibana-6x-on-centos"><a href="#installing-kibana-6x-on-centos" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing Kibana 6.x on CentOS</h3>\n<p>Kibana gives shape to your data and is the extensible user interface for configuring and managing all aspects of the Elastic Stack.</p>\n<p>Create a file called kibana.repo in the <em>/etc/yum.repos.d/</em> directory and add the following lines:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[kibana-6.x]\nname=Kibana repository for 6.x packages\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md</code></pre>\n      </div>\n<p>And your repository is ready for use. You can now install Kibana with one of the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo yum install kibana</code></pre>\n      </div>\n<h4 id="running-kibana-with-systemd"><a href="#running-kibana-with-systemd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Kibana with <em>systemd</em></h4>\n<p>To configure Kibana to start automatically when the system boots up, run the following commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo /bin/systemctl daemon-reload\nsudo /bin/systemctl enable kibana.service</code></pre>\n      </div>\n<p>Kibana can be started and stopped as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo systemctl stop kibana.service\nsudo systemctl start kibana.service</code></pre>\n      </div>\n<p>These commands provide no feedback as to whether Kibana was started successfully or not. Instead, this information will be written in the log files located in <em>/var/log/kibana/</em>. Kibana loads its configuration from the <em>/etc/kibana/kibana.yml</em> file by default. Examples:</p>\n<ul>\n<li><strong>elasticsearch.url:</strong> Default: <em><a href="http://localhost:9200">http://localhost:9200</a></em> The URL of the Elasticsearch instance to use for all your queries.</li>\n<li><strong>server.port:</strong> Server port for the Kibana web UI - <em>default 5601</em></li>\n<li><strong>server.host:</strong> Specifies the address to which the Kibana server will bind. IP addresses and host names are both valid values. The default is <em>localhost</em>, which usually means remote machines will not be able to connect. To allow connections from remote users, set this parameter to a non-loopback address.</li>\n<li><strong>console.enabled:</strong>  Default: true Set to false to disable Console.</li>\n<li><strong>elasticsearch.username:</strong> s. below</li>\n<li><strong>elasticsearch.password:</strong> If your Elasticsearch is protected with basic authentication, these settings provide the username and password that the Kibana server uses to perform maintenance on the Kibana index at startup. Your Kibana users still need to authenticate with Elasticsearch, which is proxied through the Kibana server. (see X-Pack below)</li>\n<li><strong>server.ssl.enabled:</strong> Default: “false” Enables SSL for outgoing requests from the Kibana server to the browser. When set to true, server.ssl.certificate and server.ssl.key are required</li>\n<li><strong>server.ssl.certificate:</strong> s. below</li>\n<li><strong>server.ssl.key:</strong> Paths to the PEM-format SSL certificate and SSL key files, respectively.</li>\n<li><strong>server.ssl.certificateAuthorities:</strong> List of paths to PEM encoded certificate files that should be trusted.</li>\n<li><strong>server.ssl.cipherSuites:</strong> Default: <em>ECDHE-RSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES256-GCM-SHA384, DHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES128-SHA256, DHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, DHE-RSA-AES256-SHA384, ECDHE-RSA-AES256-SHA256, DHE-RSA-AES256-SHA256, HIGH,!aNULL, !eNULL, !EXPORT, !DES, !RC4, !MD5, !PSK, !SRP, !CAMELLIA</em>. Details on the format, and the valid options, are available via the <a href="https://www.openssl.org/docs/man1.0.2/apps/ciphers.html#CIPHER-LIST-FORMAT">OpenSSL cipher list format documentation</a></li>\n<li><strong>server.ssl.keyPassphrase:</strong> The passphrase that will be used to decrypt the private key. This value is optional as the key may not be encrypted.</li>\n<li><strong>server.ssl.redirectHttpFromPort:</strong> Kibana will bind to this port and redirect all http requests to https over the port configured as server.port.</li>\n<li><strong>server.ssl.supportedProtocols:</strong> <em>Default</em>: TLSv1, TLSv1.1, TLSv1.2 Supported protocols with versions. Valid protocols: TLSv1, TLSv1.1, TLSv1.2</li>\n<li><strong>status.allowAnonymous:</strong> Default: false If authentication is enabled, setting this to true allows unauthenticated users to access the Kibana server status API and status page.</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Description</th>\n<th>Default Location</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>home</td>\n<td>Kibana home directory or $KIBANA_HOME</td>\n<td><em>/usr/share/kibana</em></td>\n</tr>\n<tr>\n<td>bin</td>\n<td>Binary scripts including kibana to start the Kibana server and kibana-plugin to install plugins</td>\n<td><em>/usr/share/kibana/bin</em></td>\n</tr>\n<tr>\n<td>config</td>\n<td>Configuration files including kibana.yml</td>\n<td><em>/etc/kibana</em></td>\n</tr>\n<tr>\n<td>data</td>\n<td>The location of the data files written to disk by Kibana and its plugins</td>\n<td><em>/var/lib/kibana</em></td>\n</tr>\n<tr>\n<td>optimize</td>\n<td>Transpiled source code. Certain administrative actions (e.g. plugin install) result in the source code being retranspiled on the fly.</td>\n<td><em>/usr/share/kibana/optimize</em></td>\n</tr>\n<tr>\n<td>plugins</td>\n<td>Plugin files location. Each plugin will be contained in a subdirectory.</td>\n<td><em>/usr/share/kibana/plugins</em></td>\n</tr>\n</tbody>\n</table>\n<h3 id="install-x-pack"><a href="#install-x-pack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install X-Pack</h3>\n<p>X-Pack is a single extension that integrates handy features — security, alerting, monitoring, reporting, graph exploration, and machine learning — you can trust across the Elastic Stack.</p>\n<h4 id="elasticsearch-security"><a href="#elasticsearch-security" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Elasticsearch Security</h4>\n<p>We need to add a user athentication to our Elasticsearch / Kibana setup. We will do this by installing X-Pack. To get started with installing the Elasticsearch plugin, go to <em>/etc/elasticsearch/</em> and call the following function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">bin/elasticsearch-plugin install x-pack</code></pre>\n      </div>\n<p>Now restart Elasticsearch:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo systemctl stop elasticsearch.service\nsudo systemctl start elasticsearch.service</code></pre>\n      </div>\n<p>You can either use the auto function to generate user passwords for Elasticsearch, Kibana (and the not yet installed Logstash):</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">bin/x-pack/setup-passwords auto</code></pre>\n      </div>\n<p>or swap the <em>auto</em> flag with <em>interactive</em> to use your own user logins. The auto output will look something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Changed password for user kibana \nPASSWORD kibana = *&amp;$*(80gfddzg\n\nChanged password for user logstash_system\nPASSWORD logstash_system = 58#$)Qljfksh\n\nChanged password for user elastic\nPASSWORD elastic = jgfisg)#*%&amp;(@*#)</code></pre>\n      </div>\n<p><strong>Now every interaction with Elasticsearch or Kibana will require you to authenticate with <em>username: elastic</em> and <em>password: jgfisg)#<em>%&#x26;(@</em>#)</em></strong></p>\n<h4 id="kibana-security"><a href="#kibana-security" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kibana Security</h4>\n<p>Now we repeat these steps with Kibana. First navigate to <em>/etc/kibana/</em> and call the following function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">bin/kibana-plugin install x-pack</code></pre>\n      </div>\n<p>And we have to add the login that Kibana has to use to access Elasticsearch (auto generated above) to the <em>kibana.yml</em> file in <em>/etc/kibana/</em>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">elasticsearch.username: &quot;kibana&quot;\nelasticsearch.password:  &quot;*&amp;$*(80gfddzg&quot;</code></pre>\n      </div>\n<p>Now restart Kibana:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo systemctl stop kibana.service\nsudo systemctl start kibana.service</code></pre>\n      </div>\n<p>Now navigate your browser <em><a href="http://localhost:5601/">http://localhost:5601/</a></em> and login with the “elastic” user we generated above.</p>\n<h3 id="enabling-anonymous-access"><a href="#enabling-anonymous-access" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling Anonymous Access</h3>\n<p>Incoming requests are considered to be anonymous if no authentication token can be extracted from the incoming request. By default, anonymous requests are rejected and an authentication error is returned (status code 401). To allow anonymous user to send search queries (Read access to specified indices), we need to add the following lines to the <em>elasticsearch.yml</em> file in <em>/etc/elasticsearch/</em>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">xpack.security.authc:\n  anonymous:\n    username: anonymous_user \n    roles: wiki_reader \n    authz_exception: true </code></pre>\n      </div>\n<p>Now we have to switch to the Kibana webUI on <em><a href="http://localhost:5601/">http://localhost:5601/</a></em> and create the <em>role:</em> <em>wiki_reader</em> to allow read access to the wiki indices. First switch to the <strong>Management</strong> tab and click on user:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/kibana_01-c9a531800e728519d6d4bbf580438842-e86a3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 51.8139534883721%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABIUlEQVQoz2PwaZqqkdnAF16w8uCp///+fPv+/T/RgEE9s14lvZYtKGft0bNA/s8fP///+weX/odfs2xSpVxyFUtA1jqQ5n8//vwhwWaVtFql1BrWwOy1R8/9//f348HDf27eAlsKsvXXnz9//+G0nkEmsVIhpZovvHDDiQtA/o9DR35fvAxU/u8vUNe/H79+/wEzsAIGsZhi6fgyFv+MNUdO//v5/cPv379AtkLBfyQ2Fs3q+R2aBR28sZVrT1yEBtjfv8T6WaliulrlTOHciRvP3wbyMR2Jx2oG7pAc3tBcJr/01YdP//n+7dv3H8jSQJNwe/kfA09YATC0mPyz1h0/D7T547fvyKq///wFFPn5+89/mCt+//nz6dsPYCwA2QBJeA1IP6EtuAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Add a Elasticsearch User with Read Access"\n        title=""\n        src="/static/kibana_01-c9a531800e728519d6d4bbf580438842-48538.png"\n        srcset="/static/kibana_01-c9a531800e728519d6d4bbf580438842-bed0f.png 200w,\n/static/kibana_01-c9a531800e728519d6d4bbf580438842-5fd34.png 400w,\n/static/kibana_01-c9a531800e728519d6d4bbf580438842-48538.png 800w,\n/static/kibana_01-c9a531800e728519d6d4bbf580438842-e86a3.png 1075w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Then click on <strong>Add a User</strong> and add a user with the <strong>watcher_user</strong> role:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/kibana_02-adc70e430693671259fe869778965e9f-ad157.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.36170212765957%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7CAAAOwgEVKEqAAAABMklEQVQoz5WSz0rDQBDGcxQRL6K1WK2iL+NVEESL2iheBA+mrf3jwXeo+BS+gvgGHrz6B8EGhbRJSVKzSXb3czaxwVvTgbnsDL/9vpnRtm+6KJ+0saa38fxhwhv9wA8YophjHFLK3Kmtn3ZQOGygeNTA+3c/AQghEIYhGGMIgmA64ObZNUrVFkHrMAdOCqSCbdvwPB9xHCeNeUNb1VtYrNSwctxEr+9kFvuWhRHZn9qyApaqzWSOY6Cy7LouoiiC5BxCJTWr90mpFcnqwv4llipGBuRcJPNLflUK1Sdc5ANuXd1ho3aLstHFp+2mQCo4wyGYWs7DI+LXtz8on2x5/qCO2T0Dy3onU8joZO6fXvBFSxIElixMleaZ4dzuBWZ2zlGgxWSWSZlpDWC7PuS/W8wTv7zFjug51GTbAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Add a Elasticsearch User with Read Access"\n        title=""\n        src="/static/kibana_02-adc70e430693671259fe869778965e9f-48538.png"\n        srcset="/static/kibana_02-adc70e430693671259fe869778965e9f-bed0f.png 200w,\n/static/kibana_02-adc70e430693671259fe869778965e9f-5fd34.png 400w,\n/static/kibana_02-adc70e430693671259fe869778965e9f-48538.png 800w,\n/static/kibana_02-adc70e430693671259fe869778965e9f-ad157.png 1175w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Switch back to the <strong>Management</strong> tab and click on role:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/kibana_03-8534892360f85303c447addd712a0031-e86a3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.18604651162791%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABMklEQVQoz2PQzm1STq9l9M9cdvDk////f/z69R8d/Pv/799/bIBBOqFCPqWayS9j2QGg5n/ff/wAKYUjhAn/MBGDUmqNSnotc0DmUqDmv3+/fvuGrOH3//9/3r//dezEv+/fsdgsm1ipmFrDFZq38vBZIP/P37//4ODv3x///v969uLnxi1/P30GOuMfsizQZrGYEtnEcka/jKX7T/z//fPDx4+/fv2CS/+HkP///8MGGJSymlRzWtjCi5YcPA1U8v3Hz39owQPk/vmDNcwYZIomK5ZN40zrWnnqGpD/+8/ff0QDBp7QXP7wAgaf9CX7jv/98e3rt++kaA7L548oZPBNX37oNNDmD1+/Izv7x6/fH7/9+Pn7D1wEGKJAEaADQc6Ga155+AzY2X/QjMcMLLgIAAN0CytjowtvAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Add a Elasticsearch User with Read Access"\n        title=""\n        src="/static/kibana_03-8534892360f85303c447addd712a0031-48538.png"\n        srcset="/static/kibana_03-8534892360f85303c447addd712a0031-bed0f.png 200w,\n/static/kibana_03-8534892360f85303c447addd712a0031-5fd34.png 400w,\n/static/kibana_03-8534892360f85303c447addd712a0031-48538.png 800w,\n/static/kibana_03-8534892360f85303c447addd712a0031-e86a3.png 1075w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Click on <strong>Create Role</strong> and add the name <strong>wiki_reader</strong> that we choose for the role of the anonymous user inside the elasticsearch.yml file, assign the <strong>monitor_watcher</strong> privilege and choose the indices that you want the anonymous user to have <strong>READ</strong> access to:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/kibana_04-31e9fc5fad4988a0dae14a068f6d9bfe-e86a3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.25581395348837%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABWklEQVQoz4WST0sCQRjGhyC6FHjqYlB6kPooJV3CoOhQiFaGiHkwCknoUscu3VX6GGFdsj/XvkPg7K6bO7vuzt/t3bYuqbvPYZhh5jfPO887aK3UzJSaaPOo9dDzfd/2KIyCc8YYpVQp5U8XSu7XV4oNlD1sd19hLZUajVyMseM4hBAhRBScLlxkji/Bud19CTylBMCyLNd1/TihpYOzVLExt1W+f3r7gRXUa5qmbdtSyhh4ca+2nD9H2ULozMFZii/TZIzHO6dPrlYr1zO509bj+y8shGEYfYyJTVSkOUpWb1P1u9nCTef5Iyw7hLGmQWAxac/nyomdKlrPd/7KBum6bhESX/bCdiWxW0MbxU7YKqlsj332NUPXo/s0GXY92scaBA7JqUj9h6HP8LuCVjkOvHcckCp41zRYedQbDAaUsXESDsC3HQ6Hk2Eugls554HJJEEQsBvOvwGyVqTSflUhcwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Add a Elasticsearch User with Read Access"\n        title=""\n        src="/static/kibana_04-31e9fc5fad4988a0dae14a068f6d9bfe-48538.png"\n        srcset="/static/kibana_04-31e9fc5fad4988a0dae14a068f6d9bfe-bed0f.png 200w,\n/static/kibana_04-31e9fc5fad4988a0dae14a068f6d9bfe-5fd34.png 400w,\n/static/kibana_04-31e9fc5fad4988a0dae14a068f6d9bfe-48538.png 800w,\n/static/kibana_04-31e9fc5fad4988a0dae14a068f6d9bfe-e86a3.png 1075w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Your configuration will be active after restarting Elasticsearch. Now you can use webservices to read from your ES database. But only the <strong>elastic</strong> user has the privileg to <strong>WRITE</strong> and to work in Kibana.</p>',
fields:{slug:"/search-engine-setup-and-configuration/",prefix:"2017-10-03"},frontmatter:{title:"Search Engine Setup and Configuration",subTitle:"Elasticsearch is a distributed, JSON-based search and analytics engine designed for horizontal scalability, maximum reliability, and easy management.",cover:{childImageSharp:{resize:{src:"/static/photo-34139903180_fd0c397abc_o-cover-cb3617819da80d792750819fd6e7d485-ada8c.jpg"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/search-engine-setup-and-configuration/"}}}});
//# sourceMappingURL=path---search-engine-setup-and-configuration-dc5ae6a6563cb1873b2c.js.map