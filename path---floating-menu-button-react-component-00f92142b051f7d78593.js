webpackJsonp([0xc4fb3e8f9f87],{647:function(a,t){a.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-12-11--floating-menu-button-react-component/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-34445490202_b13f40bd9d_o-f0447a1eee1911ddcd4a8428b95fc67b-72e4a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 29.86666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABuElEQVQY0w3Py24SAQBAUT7HH3BrjGIMNoiVqkUQqA0yU2hHWkamPIfh/RjL8LSlEG2raYgsSBcG01oNK42aqKkL08SoC12Y+AlXfuCeXFO83GH0+hdHb//yYvKbg8MfDEefOBifMp78oz34jt7/wu7wMzuDj9QfvyfZfMd64wPFJyekul9J9r/RGf1k//gPJlF045EU3N4QopBgeUnFfVvi7qKC606EaHHA1vMTjO4ryp0x2eYhMWNCtP6GeOOIdPslmfqQqjFAyz/C1FCDpBUB54IXs9WBwxvmvN3PjMvHWestAsVnaL1jysUWWrZCJLuJkmoSjenIxacE5BL2Gw7cVyz47BZM7vkLlFSJam+H8MMaa9UNZL1FuLaNWNtCMPaxLyWwXZ+jpUcYdgs09QzJaIjQisRVixnn3DXued2I4jymmHKRWG6FtFFBbemk2husVgsspFVcqoY/rnLJNotl5jIZLUg3I7Cdl0jIfgTvTSS/h05ZpVd8wG5NwrSm2FjPLpIoBZFzQVazQe7nBMJTpFBJYGgBNvMCijhLTvYgOs2Yz50h5LNOI8vo07u9fpe9Thk16ec/hfsvWD7etUMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Port Vila, Vanuatu"\n        title=""\n        src="/static/photo-34445490202_b13f40bd9d_o-f0447a1eee1911ddcd4a8428b95fc67b-48538.png"\n        srcset="/static/photo-34445490202_b13f40bd9d_o-f0447a1eee1911ddcd4a8428b95fc67b-bed0f.png 200w,\n/static/photo-34445490202_b13f40bd9d_o-f0447a1eee1911ddcd4a8428b95fc67b-5fd34.png 400w,\n/static/photo-34445490202_b13f40bd9d_o-f0447a1eee1911ddcd4a8428b95fc67b-48538.png 800w,\n/static/photo-34445490202_b13f40bd9d_o-f0447a1eee1911ddcd4a8428b95fc67b-b70ec.png 1200w,\n/static/photo-34445490202_b13f40bd9d_o-f0447a1eee1911ddcd4a8428b95fc67b-72e4a.png 1500w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://github.com/mpolinowski/floating-menu-button-react-component">Github</a></p>\n<h2 id="a-material-design-floating-menu-button"><a href="#a-material-design-floating-menu-button" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Material Design Floating Menu Button</h2>\n<p>React component to be used in react applications. Single button, that - when clicked - expands child buttons.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/demo-ecda50277709975965b669f2c3a4ae0d-f6871.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 523px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 130.9751434034417%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABJUlEQVQ4y+2TvUoDQRSF94F8Dluxtba1EYS0dtqksLVM4xOIjYUIVipaGImFhUaiCGGT2Z2duT97PRMFG4m7gXQ5MAML97szO/eczMzqhQQwY+YQQmwpICKSERE+qKWA4NQVvHQYxbNptYdRKUKqGPQPDHEToUyVimnMx+ATjGO999X/Qk1ApRzs6O5mOXpl2FNVQyNVaYHv7lWdLf/5nrzdLhhmqUNZ1jMq/XObYOCdiEXQgnmRYMSVt5cLx5DeGDtWpBCbw5isGYl+77XCl/wLzwuGCAdPT3fk8vjct/HoflheDnKhmEyCHs654k+5aRHZPVzXnY3paU8Pt93J0XpP17r+cTgxkwwWnRNCZDC6SXF1Vn28FbcX/DI4vrH9c/IRl7cv4OHlC6LXQOAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Demo"\n        title=""\n        src="/static/demo-ecda50277709975965b669f2c3a4ae0d-f6871.png"\n        srcset="/static/demo-ecda50277709975965b669f2c3a4ae0d-bbe34.png 200w,\n/static/demo-ecda50277709975965b669f2c3a4ae0d-cff40.png 400w,\n/static/demo-ecda50277709975965b669f2c3a4ae0d-f6871.png 523w"\n        sizes="(max-width: 523px) 100vw, 523px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n<ol>\n<li>Clone / Download Repository</li>\n<li>npm install</li>\n<li>npm start</li>\n<li>open localhost:8080</li>\n</ol>',fields:{slug:"/floating-menu-button-react-component/",prefix:"2017-12-11"},frontmatter:{title:"Floating Menu Buttons",subTitle:"A React.js Component for floating menu Buttons",cover:{childImageSharp:{resize:{src:"/static/photo-34445490202_b13f40bd9d_o-cover-9cd8bfbe63d9f302bc7a06bd3321308c-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/floating-menu-button-react-component/"}}}});
//# sourceMappingURL=path---floating-menu-button-react-component-00f92142b051f7d78593.js.map