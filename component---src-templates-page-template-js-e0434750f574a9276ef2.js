webpackJsonp([0xd5d9d741ef0b],{634:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(1),r=a(n),i=o(2),u=a(i),f=o(176),l=a(f),s=o(242),d=a(s),c=o(241),p=a(c),v=function(e){var t=e.page,o=(t||{}).html;return r.default.createElement(l.default,null,r.default.createElement(d.default,t.frontmatter),r.default.createElement(p.default,{html:o}))};v.propTypes={page:u.default.object.isRequired},t.default=v,e.exports=t.default},635:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(634);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}}),e.exports=t.default},655:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=o(1),f=a(u),l=o(2),s=a(l),d=o(54),c=o(47),p=o(79),v=o(177),g=a(v),b=o(635),h=a(b),m=o(392),y=a(m),_=o(243),E=a(_),P=function(e){function t(){var o,a,i;n(this,t);for(var u=arguments.length,f=Array(u),l=0;l<u;l++)f[l]=arguments[l];return o=a=r(this,e.call.apply(e,[this].concat(f))),a.moveNavigatorAside=p.moveNavigatorAside.bind(a),i=o,r(a,i)}return i(t,e),t.prototype.componentDidMount=function(){"is-featured"===this.props.navigatorPosition&&this.moveNavigatorAside()},t.prototype.render=function(){var e=this.props.data,t=(((e||{}).site||{}).siteMetadata||{}).facebook;return f.default.createElement(g.default,null,f.default.createElement(h.default,{page:e.page}),f.default.createElement(y.default,{footnote:e.footnote}),f.default.createElement(E.default,{data:e.post,facebook:t}))},t}(f.default.Component);P.propTypes={data:s.default.object.isRequired,navigatorPosition:s.default.string.isRequired,setNavigatorPosition:s.default.func.isRequired,isWideScreen:s.default.bool.isRequired};var w=function(e,t){return{navigatorPosition:e.navigatorPosition,isWideScreen:e.isWideScreen}},M={setNavigatorPosition:c.setNavigatorPosition,setNavigatorShape:c.setNavigatorShape};t.default=(0,d.connect)(w,M)(P);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-e0434750f574a9276ef2.js.map