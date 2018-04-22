webpackJsonp([0xe1c009954471],{649:function(n,a){n.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-06-17--unreal-engine-coding-standards-part-i/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-fae0f.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.95959595959596%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAZbJJCT/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQQREv/aAAgBAQABBQJUIdGnaP/EABcRAQADAAAAAAAAAAAAAAAAAAACERP/2gAIAQMBAT8BpnF//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECEhP/2gAIAQIBAT8BszaZ/8QAFhABAQEAAAAAAAAAAAAAAAAAADKh/9oACAEBAAY/AoSjX//EABkQAQACAwAAAAAAAAAAAAAAAAEAEUFhgf/aAAgBAQABPyFKKNQLWnsvxj//2gAMAwEAAgADAAAAEPA//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBh/9oACAEDAQE/EENlf//EABgRAAIDAAAAAAAAAAAAAAAAAAABEUFR/9oACAECAQE/EI7Hof/EABkQAQEBAAMAAAAAAAAAAAAAAAERADFBgf/aAAgBAQABPxCoDzCiOhpHW1Ke2f/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Unreal Engine Coding Standards"\n        title=""\n        src="/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-78f2b.jpg"\n        srcset="/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-dce19.jpg 200w,\n/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-c1413.jpg 400w,\n/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-78f2b.jpg 800w,\n/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-ab4c4.jpg 1200w,\n/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-bc99b.jpg 1600w,\n/static/photo-34221445950_a285c6eee4_o-4ef2ea78a73e4dd4720e56bfc68eb079-fae0f.jpg 1980w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>Learn C++ from scratch. How to make your first video game in Unreal engine. Gain confidence in programming.\nThis is a fork of the Part I of the first section of the <a href="https://github.com/UnrealCourse">Unreal Course</a> teaching C++ coding standards for the Unreal Game Engine.\nThe Source Code can be found in <a href="https://github.com/mpolinowski/consoleApplication">consoleApplication</a>\nThe following is the commented Course Journal:</p>\n</blockquote>\n<h3 id="intro-notes--section-2-assets"><a href="#intro-notes--section-2-assets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Intro, Notes &#x26; Section 2 Assets</h3>\n<ul>\n<li>Welcome to the first actual coding video.</li>\n<li>Why we’re doing this in the IDE only.</li>\n<li>What you’ll be building, see resources.</li>\n<li>You’ll learn types, loops, routines, classes.</li>\n<li>We’ll follow Unreal’s coding style, and re-use.</li>\n<li>Notes and resources are attached.</li>\n</ul>\n<h3 id="s02-game-design-document-gdd"><a href="#s02-game-design-document-gdd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>S02 Game Design Document (GDD)</h3>\n<ul>\n<li>How much planning should we do?</li>\n<li>Define the emotional problem the game solves*</li>\n<li>Chose concept, rules &#x26; requirements.</li>\n<li>Start to think about the architecture.</li>\n<li><em>Copy</em> as much as possible into the code!</li>\n<li>Document now what may change later.</li>\n</ul>\n<p><strong>Useful Links</strong></p>\n<ul>\n<li>* <a href="https://www.amazon.com/gp/product/0735619670/">McConnell, Steve. <em>Code Complete.</em> Microsoft Press 2004. Chapter 3.3</a></li>\n</ul>\n<h3 id="how-solutions--projects-relate"><a href="#how-solutions--projects-relate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How Solutions &#x26; Projects Relate</h3>\n<ul>\n<li>How projects and solutions relate.</li>\n<li>Setting up a new command line project.</li>\n<li>An overview of the structure of our solution.</li>\n<li>(Adding main.cpp to our project).</li>\n</ul>\n<h3 id="c-function-syntax"><a href="#c-function-syntax" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>C++ Function Syntax</h3>\n<ul>\n<li>The difference between an engine and a library.</li>\n<li>How this relates to this console application.</li>\n<li>What is building / compiling code?</li>\n<li>How the console knows where to find our code.</li>\n<li>The syntax of a function in C++.</li>\n<li>Write the minimal C++ program to remove error.</li>\n<li>Testing our application runs without error.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token comment">// Standard C++ library automatically included by Visual Studio</span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">"stdafx.h"</span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Created a C++ function “main” in a file “main.cpp” that can be run CTRL+F5 without errors and returns integer 0.</p>\n<h3 id="using-include-and-namespaces"><a href="#using-include-and-namespaces" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using, #include and Namespaces</h3>\n<ul>\n<li><strong>#</strong> represents a “preprocessor directive”.</li>\n<li><strong>#include</strong> copies-and-pastes other code.</li>\n<li>The idea of using library code.</li>\n<li>Use &#x3C;> for standard libraries.</li>\n<li>Use “ “ for files you have created yourself.</li>\n<li>Notice the namespace icon in autocomplete.</li>\n<li>Import <strong>iostream</strong> library and use <strong>std</strong> namespace</li>\n<li>Clean up your code by removing <strong>std::</strong> that is no longer needed</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">"stdafx.h"</span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Welcome to Bulls and Cows"</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>By defining the std namespace we can simplify our code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">"stdafx.h"</span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>\n\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Welcome to Bulls and Cows"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="magic-numbers-and-constants"><a href="#magic-numbers-and-constants" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Magic Numbers and Constants</h3>\n<ul>\n<li>What a “magic number” is.</li>\n<li>Why it’s a good idea to avoid them.</li>\n<li><strong>constexpr</strong> means “evaluated at compile time”.</li>\n<li>Introduce coding standards*.</li>\n<li>Use a constant expression for the word length.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">// introduce the game</span>\n  <span class="token keyword">constexpr</span> <span class="token keyword">int</span> WORD_LENGTH <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Welcome to Bulls and Cows"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n  cout <span class="token operator">&lt;&lt;</span> "Can you guess the <span class="token operator">&lt;&lt;</span> WORD_LENGTH<span class="token punctuation">;</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">" letter isogram I\'m thinking of?/n"</span><span class="token punctuation">;</span>\n\n  cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>There are 2 ways to break to a new line - “endl” and “/n”. The latter does not flush the output buffer - otherwise identical.</p>\n<p><strong>Useful Links</strong></p>\n<ul>\n<li>* <a href="https://docs.unrealengine.com/latest/INT/Programming/Development/CodingStandard/index.html">Unreal Engine - Coding Standard</a></li>\n</ul>',fields:{slug:"/unreal-engine-coding-standards-part-i/",prefix:"2017-06-17"},frontmatter:{title:"Unreal Engine Coding Standards (I)",subTitle:"The Unreal Engine Developer Course - Learn C++ & Make Games. Learn C++ from scratch. How to make your first video game in Unreal engine. Gain confidence in programming.",cover:{childImageSharp:{resize:{src:"/static/photo-34221445950_a285c6eee4_o-cover-e24b6a28a5919ad856d08c16c5aca550-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/unreal-engine-coding-standards-part-i/"}}}});
//# sourceMappingURL=path---unreal-engine-coding-standards-part-i-49c5696bc22b1ee6896d.js.map