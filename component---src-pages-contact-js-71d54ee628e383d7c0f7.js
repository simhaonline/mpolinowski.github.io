webpackJsonp([70144966829960],{861:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createContactLink=t.combineHeaders=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),f=n(s),d=r(2),p=t.combineHeaders=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")},m=t.createContactLink=function(e,t,r,n,o){var a=void 0;return n?(a="mailto:"+n,o&&(a+="?"+p(o))):e?a="tel:"+e:t?a="sms:"+t:r&&(a="facetime:"+r),a},b=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){return this.props.obfuscate?this.renderObfuscatedLink():this.renderLink()}},{key:"renderLink",value:function(){var e=this.props,t=e.tel,r=e.sms,n=e.facetime,a=e.email,i=(e.obfuscate,e.headers),l=e.children,c=o(e,["tel","sms","facetime","email","obfuscate","headers","children"]);return f.default.createElement("a",u({href:m(t,r,n,a,i)},c),l||t||r||n||a)}},{key:"reverse",value:function(e){return e.split("").reverse().join("")}},{key:"renderObfuscatedLink",value:function(){var e=this.props,t=e.tel,r=e.sms,n=e.facetime,a=e.email,i=(e.obfuscate,e.headers,e.children),l=e.style,c=o(e,["tel","sms","facetime","email","obfuscate","headers","children","style"]),s=u({},l||{},{unicodeBidi:"bidi-override"});return i||(s.direction="rtl"),f.default.createElement("a",u({onClick:this.handleClick.bind(this),href:"obfuscated"},c,{style:s}),i||this.reverse(t||r||n||a).replace("(",")").replace(")","("))}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,r=t.tel,n=t.sms,o=t.facetime,a=t.email,i=t.headers;window.location.href=m(r,n,o,a,i)}}]),t}(s.Component);b.propTypes={children:d.node,tel:d.string,sms:d.string,facetime:d.string,email:d.string,headers:d.object,obfuscate:d.bool,style:d.object},b.defaultProps={obfuscate:!0},t.default=b},432:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(1),a=n(o),i=r(2),l=n(i),u=r(12),c=n(u),s=r(861),f=n(s),d=r(147),p=n(d),m=r(145),b=n(m),h=r(254),y=n(h),v=r(146),k=n(v),O=function(e){return{}},j=function(){return a.default.createElement(p.default,null,a.default.createElement(b.default,null,a.default.createElement(y.default,{title:"Contact"}),a.default.createElement(k.default,null,"Feel free to contact me by email: ",a.default.createElement(f.default,{email:"mpolinowski@gmail.com"})," or use the form below.")))};j.propTypes={classes:l.default.object.isRequired},t.default=(0,c.default)(O)(j),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-71d54ee628e383d7c0f7.js.map