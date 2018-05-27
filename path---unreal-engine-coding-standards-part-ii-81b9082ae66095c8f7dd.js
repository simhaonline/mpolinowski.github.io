webpackJsonp([0xea8afe404d84],{684:function(n,s){n.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-06-18--unreal-engine-coding-standards-part-ii/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-12567.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 40.320910973084885%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABlciYP//EABgQAAIDAAAAAAAAAAAAAAAAAAACAxNB/9oACAEBAAEFArmkMP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAIBBQAAAAAAAAAAAAAAAAABAhExMpHB/9oACAEBAAY/Ako0sdRk9n//xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAhMYH/2gAIAQEAAT8hVTNKQ97lRCjJNGc4HrP/2gAMAwEAAgADAAAAEHv/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EGf/xAAcEAEAAgIDAQAAAAAAAAAAAAABESEAMUFRYYH/2gAIAQEAAT8QttDSCQsvCsBvJRpWGQTcJP3PFtpue95//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Unreal Engine Coding Standards"\n        title=""\n        src="/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-78f2b.jpg"\n        srcset="/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-dce19.jpg 200w,\n/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-c1413.jpg 400w,\n/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-78f2b.jpg 800w,\n/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-ab4c4.jpg 1200w,\n/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-bc99b.jpg 1600w,\n/static/photo-34221455520_6e72413b0c_o-46e61f9189d6cd808510c66c78683df3-12567.jpg 1932w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>Learn C++ from scratch. How to make your first video game in Unreal engine. Gain confidence in programming.\nThis is a fork of the Part I of the first section of the <a href="https://github.com/UnrealCourse">Unreal Course</a> teaching C++ coding standards for the Unreal Game Engine.\nThe Source Code can be found in <a href="https://github.com/mpolinowski/consoleApplication">consoleApplication</a>\nThe following is the commented Course Journal:</p>\n</blockquote>\n<!-- TOC -->\n<ul>\n<li><a href="#variables-and-cin-for-input">Variables and cin for Input</a></li>\n<li><a href="#using-getline">Using getline()</a></li>\n<li><a href="#simplifying-with-functions">Simplifying With Functions</a></li>\n</ul>\n<!-- /TOC -->\n<h3 id="variables-and-cin-for-input"><a href="#variables-and-cin-for-input" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Variables and cin for Input</h3>\n<ul>\n<li>Introducing pseudocode programming - add a comment to describe the function before you start programming</li>\n<li>Why we need to <strong>#import &#x3C;string></strong></li>\n<li>Getting input using <strong>cin</strong></li>\n<li>cin breaks consuming input at space - you cannot input more then 1 word</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token comment">// string library is needed for the ">>" operator</span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;string></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">// introduce the game</span>\n  <span class="token comment">// ...</span>\n\n  <span class="token comment">// get a guess from player</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Enter your guess: "</span><span class="token punctuation">;</span>\n  string Guess <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\n  cin <span class="token operator">>></span> Guess<span class="token punctuation">;</span>\n\n  <span class="token comment">// return guess to player</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Your guess was: "</span> <span class="token operator">&lt;&lt;</span> Guess <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n\n  cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="using-getline"><a href="#using-getline" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using getline()</h3>\n<ul>\n<li>Solve the problem that you cannot enter a guess with more then one word</li>\n<li><strong>getline()</strong> reads through spaces and discards input stream @endl</li>\n<li>Where to find C++ documentation => www.cplusplus.com</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">// introduce the game</span>\n  <span class="token comment">// ...</span>\n\n  <span class="token comment">// get a guess from player</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Enter your guess: "</span><span class="token punctuation">;</span>\n  string Guess <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\n  getline <span class="token punctuation">(</span>cin<span class="token punctuation">,</span>Guess<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// return guess to player</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Your guess was: "</span> <span class="token operator">&lt;&lt;</span> Guess <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n\n  cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="simplifying-with-functions"><a href="#simplifying-with-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simplifying With Functions</h3>\n<ul>\n<li>\n<p>Programming is all about managing complexity.</p>\n</li>\n<li>\n<p>We want to think about a few things at a time.</p>\n</li>\n<li>\n<p>The idea of abstraction and encapsulation -> the scope of the constexpr WORD_LENGTH is now limited to the PrintIntro function.</p>\n</li>\n<li>\n<p>Always use <strong>return</strong> at the end of your functions.</p>\n</li>\n<li>\n<p>Wrap the code Intro code into function to make our code more readable.</p>\n</li>\n<li>\n<p>The PrintIntro() then be called from within main()</p>\n</li>\n</ul>\n<p><em>PrintIntro</em> function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token keyword">void</span> <span class="token function">PrintIntro</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token comment">// introduce the game</span>\n    <span class="token keyword">constexpr</span> <span class="token keyword">int</span> WORD_LENGTH <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Welcome to Bulls and Cows"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> "Can you guess the <span class="token operator">&lt;&lt;</span> WORD_LENGTH<span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> <span class="token string">" letter isogram I\'m thinking of?/n"</span><span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">//Entry point of application</span>\n  <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token comment">// introduce the game</span>\n    PrintIntro <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// get a guess from player</span>\n    <span class="token comment">// ...</span>\n\n    <span class="token comment">// return guess to player</span>\n    <span class="token comment">// ...</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The collection of functions used by main() should be at the end of the document. We have to put the identifier for the function PrintIntro() on top of the document. This way we can put the body PrintIntro(){} below main()</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token keyword">void</span> <span class="token function">PrintIntro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>\n\n<span class="token comment">//Entry point of application</span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">// introduce the game</span>\n  PrintIntro <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// get a guess from player</span>\n  <span class="token comment">// ...</span>\n\n  <span class="token comment">// return guess to player</span>\n  <span class="token comment">// ...</span>\n\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">void</span> <span class="token function">PrintIntro</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token comment">// introduce the game</span>\n    <span class="token keyword">constexpr</span> <span class="token keyword">int</span> WORD_LENGTH <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Welcome to Bulls and Cows"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> "Can you guess the <span class="token operator">&lt;&lt;</span> WORD_LENGTH<span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> <span class="token string">" letter isogram I\'m thinking of?/n"</span><span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>This makes it easy to spot main() inside the document. Descriptive identifier for each function inside main() make our code readable / <strong>self-documenting</strong></p>\n<p>Repeat this process with all other functions inside main():</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token keyword">void</span> <span class="token function">PrintIntro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>\nstring <span class="token function">GetGuessAndPrintBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Entry point of application</span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  PrintIntro <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  GetGuessAndPrintBack <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// introduce the game</span>\n<span class="token keyword">void</span> <span class="token function">PrintIntro</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>\n\n<span class="token comment">// get a guess from player and print back</span>\nstring <span class="token function">GetGuessAndPrintBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Enter your guess: "</span><span class="token punctuation">;</span>\n  string Guess <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\n  <span class="token function">getline</span><span class="token punctuation">(</span>cin<span class="token punctuation">,</span> Guess<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//print guess back to player</span>\n  cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Your guess was: "</span> <span class="token operator">&lt;&lt;</span> Guess <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> Guess<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{slug:"/unreal-engine-coding-standards-part-ii/",prefix:"2017-06-18"},frontmatter:{title:"Unreal Engine Coding Standards (II)",subTitle:"The Unreal Engine Developer Course - Learn C++ & Make Games. Learn C++ from scratch. How to make your first video game in Unreal engine. Gain confidence in programming.",cover:{childImageSharp:{resize:{src:"/static/photo-34221455520_6e72413b0c_o-cover-935db3e86f437e86f974382d8c715c2f-ada8c.jpg"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/unreal-engine-coding-standards-part-ii/"}}}});
//# sourceMappingURL=path---unreal-engine-coding-standards-part-ii-81b9082ae66095c8f7dd.js.map