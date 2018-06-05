exports.ids = [1];
exports.modules = {

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _InfoBox = __webpack_require__(672);
	
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InfoBox).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports["default"];

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(169);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(321);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _reactRedux = __webpack_require__(448);
	
	var _SocialIcons = __webpack_require__(673);
	
	var _SocialIcons2 = _interopRequireDefault(_SocialIcons);
	
	var _InfoMenu = __webpack_require__(679);
	
	var _InfoMenu2 = _interopRequireDefault(_InfoMenu);
	
	var _InfoHeader = __webpack_require__(680);
	
	var _InfoHeader2 = _interopRequireDefault(_InfoHeader);
	
	var _InfoText = __webpack_require__(682);
	
	var _InfoText2 = _interopRequireDefault(_InfoText);
	
	var _StackIcons = __webpack_require__(683);
	
	var _StackIcons2 = _interopRequireDefault(_StackIcons);
	
	var _shared = __webpack_require__(524);
	
	var _store = __webpack_require__(477);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(687);
	
	var styles = function styles(theme) {
	  var _infoBox;
	
	  return {
	    infoBox: (_infoBox = {
	      display: "none"
	    }, _infoBox["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      color: theme.info.colors.text,
	      background: theme.info.colors.background,
	      position: "absolute",
	      left: 0,
	      top: 0,
	      width: theme.info.sizes.width + "px",
	      height: "100%",
	      padding: "20px 40px",
	      "&::after": {
	        content: "\"\"",
	        position: "absolute",
	        right: 0,
	        top: "20px",
	        bottom: "20px",
	        width: "1px",
	        borderRight: "1px solid " + theme.base.colors.lines
	      }
	    }, _infoBox),
	    wrapper: {
	      position: "absolute",
	      top: theme.info.sizes.headerHeight + "px",
	      bottom: 0,
	      left: 0,
	      width: "100%",
	      padding: "0 40px 0",
	      willChange: "opacity, bottom",
	      transition: "bottom .5s 0s",
	      opacity: 1,
	      transitionTimingFunction: "ease",
	      ".is-aside.closed &": {
	        bottom: theme.navigator.sizes.closedHeight + "px"
	      },
	      ".moving-featured &": {
	        bottom: 0
	      }
	    }
	  };
	};
	
	var InfoBox = function (_React$Component) {
	  _inherits(InfoBox, _React$Component);
	
	  function InfoBox() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, InfoBox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.avatarOnClick = _shared.featureNavigator.bind(_this), _this.menulinkOnClick = _shared.moveNavigatorAside.bind(_this), _this.expandOnClick = function (e) {
	      _this.props.setNavigatorShape("closed");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  InfoBox.prototype.render = function render() {
	    var _props = this.props,
	        classes = _props.classes,
	        parts = _props.parts,
	        pages = _props.pages,
	        navigatorPosition = _props.navigatorPosition,
	        navigatorShape = _props.navigatorShape;
	
	    var info = parts.find(function (el) {
	      return el.node.frontmatter.title === "info";
	    });
	
	    return _react2.default.createElement(
	      "aside",
	      {
	        className: classes.infoBox + " " + (navigatorPosition ? navigatorPosition : "") + " \n        " + (navigatorShape ? navigatorShape : "")
	      },
	      info && _react2.default.createElement(_InfoHeader2.default, {
	        info: info,
	        avatarOnClick: this.avatarOnClick,
	        expandOnClick: this.expandOnClick
	      }),
	      _react2.default.createElement(
	        "div",
	        { className: classes.wrapper },
	        info && _react2.default.createElement(_InfoText2.default, { info: info }),
	        _react2.default.createElement(_SocialIcons2.default, null),
	        pages && _react2.default.createElement(_InfoMenu2.default, { pages: pages, linkOnClick: this.menulinkOnClick }),
	        _react2.default.createElement(_StackIcons2.default, null)
	      )
	    );
	  };
	
	  return InfoBox;
	}(_react2.default.Component);
	
	InfoBox.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  parts: _propTypes2.default.array.isRequired,
	  pages: _propTypes2.default.array.isRequired,
	  navigatorPosition: _propTypes2.default.string.isRequired,
	  navigatorShape: _propTypes2.default.string.isRequired,
	  isWideScreen: _propTypes2.default.bool.isRequired,
	  setNavigatorShape: _propTypes2.default.func.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    navigatorPosition: state.navigatorPosition,
	    navigatorShape: state.navigatorShape,
	    isWideScreen: state.isWideScreen
	  };
	};
	
	var mapDispatchToProps = {
	  setNavigatorPosition: _store.setNavigatorPosition,
	  setNavigatorShape: _store.setNavigatorShape
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactJss2.default)(styles)(InfoBox));
	module.exports = exports["default"];

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(169);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(321);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _Tooltip = __webpack_require__(585);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _config = __webpack_require__(666);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _github = __webpack_require__(674);
	
	var _facebook = __webpack_require__(675);
	
	var _twitter = __webpack_require__(676);
	
	var _linkedin = __webpack_require__(677);
	
	var _instagram = __webpack_require__(678);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    social: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    link: {
	      display: "inline-block",
	      padding: "5px",
	      "&:hover": {
	        "& svg": {
	          fill: theme.info.colors.socialIconsHover
	        }
	      }
	    },
	    svg: {
	      width: "30px",
	      height: "30px",
	      fill: theme.info.colors.socialIcons,
	      transition: "all .5s",
	      pointerEvents: "none"
	    }
	  };
	};
	
	var Socialcons = function Socialcons(props) {
	  var classes = props.classes;
	
	  var items = _config2.default.authorSocialLinks;
	  var icons = {
	    twitter: _twitter.ReactComponent,
	    facebook: _facebook.ReactComponent,
	    github: _github.ReactComponent,
	    linkedin: _linkedin.ReactComponent,
	    instagram: _instagram.ReactComponent
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: classes.social },
	    items.map(function (item) {
	      var Icon = icons[item.name];
	      return _react2.default.createElement(
	        _Tooltip2.default,
	        { title: item.title, key: item.name },
	        _react2.default.createElement(
	          "a",
	          {
	            href: item.url,
	            className: classes.link,
	            target: "_blank",
	            rel: "noopener noreferrer"
	          },
	          _react2.default.createElement(Icon, { className: classes.svg })
	        )
	      );
	    })
	  );
	};
	
	Socialcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(Socialcons);
	module.exports = exports["default"];

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("title", null, "GitHub icon");
	
	var _ref2 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
	});
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    "aria-labelledby": "simpleicons-github-icon",
	    viewBox: "0 0 24 24"
	  }, props), _ref, _ref2);
	};
	
	exports.default = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUgaWQ9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIj5HaXRIdWIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg==";
	exports.ReactComponent = SvgComponent;

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("title", null, "Facebook icon");
	
	var _ref2 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
	});
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    "aria-labelledby": "simpleicons-facebook-icon",
	    viewBox: "0 0 24 24"
	  }, props), _ref, _ref2);
	};
	
	exports.default = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWZhY2Vib29rLWljb24iIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZSBpZD0ic2ltcGxlaWNvbnMtZmFjZWJvb2staWNvbiI+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4=";
	exports.ReactComponent = SvgComponent;

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("title", null, "Twitter icon");
	
	var _ref2 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"
	});
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    "aria-labelledby": "simpleicons-twitter-icon",
	    viewBox: "0 0 24 24"
	  }, props), _ref, _ref2);
	};
	
	exports.default = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLXR3aXR0ZXItaWNvbiIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlIGlkPSJzaW1wbGVpY29ucy10d2l0dGVyLWljb24iPlR3aXR0ZXIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk1NCA0LjU2OWMtLjg4NS4zODktMS44My42NTQtMi44MjUuNzc1IDEuMDE0LS42MTEgMS43OTQtMS41NzQgMi4xNjMtMi43MjMtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0LS44OTYtLjk1OS0yLjE3My0xLjU1OS0zLjU5MS0xLjU1OS0yLjcxNyAwLTQuOTIgMi4yMDMtNC45MiA0LjkxNyAwIC4zOS4wNDUuNzY1LjEyNyAxLjEyNEM3LjY5MSA4LjA5NCA0LjA2NiA2LjEzIDEuNjQgMy4xNjFjLS40MjcuNzIyLS42NjYgMS41NjEtLjY2NiAyLjQ3NSAwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTYtLjgwNy0uMDI2LTEuNTY2LS4yNDgtMi4yMjgtLjYxNnYuMDYxYzAgMi4zODUgMS42OTMgNC4zNzQgMy45NDYgNC44MjctLjQxMy4xMTEtLjg0OS4xNzEtMS4yOTYuMTcxLS4zMTQgMC0uNjE1LS4wMy0uOTE2LS4wODYuNjMxIDEuOTUzIDIuNDQ1IDMuMzc3IDQuNjA0IDMuNDE3LTEuNjggMS4zMTktMy44MDkgMi4xMDUtNi4xMDIgMi4xMDUtLjM5IDAtLjc3OS0uMDIzLTEuMTctLjA2NyAyLjE4OSAxLjM5NCA0Ljc2OCAyLjIwOSA3LjU1NyAyLjIwOSA5LjA1NCAwIDEzLjk5OS03LjQ5NiAxMy45OTktMTMuOTg2IDAtLjIwOSAwLS40Mi0uMDE1LS42My45NjEtLjY4OSAxLjgtMS41NiAyLjQ2LTIuNTQ4bC0uMDQ3LS4wMnoiLz48L3N2Zz4=";
	exports.ReactComponent = SvgComponent;

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("title", null, "LinkedIn icon");
	
	var _ref2 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
	});
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    "aria-labelledby": "simpleicons-linkedin-icon",
	    viewBox: "0 0 24 24"
	  }, props), _ref, _ref2);
	};
	
	exports.default = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWxpbmtlZGluLWljb24iIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZSBpZD0ic2ltcGxlaWNvbnMtbGlua2VkaW4taWNvbiI+TGlua2VkSW4gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYy0xLjE0NCAwLTIuMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAwaC4wMDN6Ii8+PC9zdmc+";
	exports.ReactComponent = SvgComponent;

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("title", null, "Instagram icon");
	
	var _ref2 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
	});
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    "aria-labelledby": "simpleicons-instagram-icon",
	    viewBox: "0 0 24 24"
	  }, props), _ref, _ref2);
	};
	
	exports.default = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWluc3RhZ3JhbS1pY29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUgaWQ9InNpbXBsZWljb25zLWluc3RhZ3JhbS1pY29uIj5JbnN0YWdyYW0gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIDBDOC43NCAwIDguMzMzLjAxNSA3LjA1My4wNzIgNS43NzUuMTMyIDQuOTA1LjMzMyA0LjE0LjYzYy0uNzg5LjMwNi0xLjQ1OS43MTctMi4xMjYgMS4zODRTLjkzNSAzLjM1LjYzIDQuMTRDLjMzMyA0LjkwNS4xMzEgNS43NzUuMDcyIDcuMDUzLjAxMiA4LjMzMyAwIDguNzQgMCAxMnMuMDE1IDMuNjY3LjA3MiA0Ljk0N2MuMDYgMS4yNzcuMjYxIDIuMTQ4LjU1OCAyLjkxMy4zMDYuNzg4LjcxNyAxLjQ1OSAxLjM4NCAyLjEyNi42NjcuNjY2IDEuMzM2IDEuMDc5IDIuMTI2IDEuMzg0Ljc2Ni4yOTYgMS42MzYuNDk5IDIuOTEzLjU1OEM4LjMzMyAyMy45ODggOC43NCAyNCAxMiAyNHMzLjY2Ny0uMDE1IDQuOTQ3LS4wNzJjMS4yNzctLjA2IDIuMTQ4LS4yNjIgMi45MTMtLjU1OC43ODgtLjMwNiAxLjQ1OS0uNzE4IDIuMTI2LTEuMzg0LjY2Ni0uNjY3IDEuMDc5LTEuMzM1IDEuMzg0LTIuMTI2LjI5Ni0uNzY1LjQ5OS0xLjYzNi41NTgtMi45MTMuMDYtMS4yOC4wNzItMS42ODcuMDcyLTQuOTQ3cy0uMDE1LTMuNjY3LS4wNzItNC45NDdjLS4wNi0xLjI3Ny0uMjYyLTIuMTQ5LS41NTgtMi45MTMtLjMwNi0uNzg5LS43MTgtMS40NTktMS4zODQtMi4xMjZDMjEuMzE5IDEuMzQ3IDIwLjY1MS45MzUgMTkuODYuNjNjLS43NjUtLjI5Ny0xLjYzNi0uNDk5LTIuOTEzLS41NThDMTUuNjY3LjAxMiAxNS4yNiAwIDEyIDB6bTAgMi4xNmMzLjIwMyAwIDMuNTg1LjAxNiA0Ljg1LjA3MSAxLjE3LjA1NSAxLjgwNS4yNDkgMi4yMjcuNDE1LjU2Mi4yMTcuOTYuNDc3IDEuMzgyLjg5Ni40MTkuNDIuNjc5LjgxOS44OTYgMS4zODEuMTY0LjQyMi4zNiAxLjA1Ny40MTMgMi4yMjcuMDU3IDEuMjY2LjA3IDEuNjQ2LjA3IDQuODVzLS4wMTUgMy41ODUtLjA3NCA0Ljg1Yy0uMDYxIDEuMTctLjI1NiAxLjgwNS0uNDIxIDIuMjI3LS4yMjQuNTYyLS40NzkuOTYtLjg5OSAxLjM4Mi0uNDE5LjQxOS0uODI0LjY3OS0xLjM4Ljg5Ni0uNDIuMTY0LTEuMDY1LjM2LTIuMjM1LjQxMy0xLjI3NC4wNTctMS42NDkuMDctNC44NTkuMDctMy4yMTEgMC0zLjU4Ni0uMDE1LTQuODU5LS4wNzQtMS4xNzEtLjA2MS0xLjgxNi0uMjU2LTIuMjM2LS40MjEtLjU2OS0uMjI0LS45Ni0uNDc5LTEuMzc5LS44OTktLjQyMS0uNDE5LS42OS0uODI0LS45LTEuMzgtLjE2NS0uNDItLjM1OS0xLjA2NS0uNDItMi4yMzUtLjA0NS0xLjI2LS4wNjEtMS42NDktLjA2MS00Ljg0NCAwLTMuMTk2LjAxNi0zLjU4Ni4wNjEtNC44NjEuMDYxLTEuMTcuMjU1LTEuODE0LjQyLTIuMjM0LjIxLS41Ny40NzktLjk2LjktMS4zODEuNDE5LS40MTkuODEtLjY4OSAxLjM3OS0uODk4LjQyLS4xNjYgMS4wNTEtLjM2MSAyLjIyMS0uNDIxIDEuMjc1LS4wNDUgMS42NS0uMDYgNC44NTktLjA2bC4wNDUuMDN6bTAgMy42NzhjLTMuNDA1IDAtNi4xNjIgMi43Ni02LjE2MiA2LjE2MiAwIDMuNDA1IDIuNzYgNi4xNjIgNi4xNjIgNi4xNjIgMy40MDUgMCA2LjE2Mi0yLjc2IDYuMTYyLTYuMTYyIDAtMy40MDUtMi43Ni02LjE2Mi02LjE2Mi02LjE2MnpNMTIgMTZjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0em03Ljg0Ni0xMC40MDVjMCAuNzk1LS42NDYgMS40NC0xLjQ0IDEuNDQtLjc5NSAwLTEuNDQtLjY0Ni0xLjQ0LTEuNDQgMC0uNzk0LjY0Ni0xLjQzOSAxLjQ0LTEuNDM5Ljc5My0uMDAxIDEuNDQuNjQ1IDEuNDQgMS40Mzl6Ii8+PC9zdmc+";
	exports.ReactComponent = SvgComponent;

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(169);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(321);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(220);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    infoMenu: {
	      display: "flex",
	      flexDirection: "column",
	      alignItems: "center",
	      listStyle: "none",
	      margin: 0,
	      width: "100%"
	    },
	    link: {
	      padding: ".5em",
	      fontWeight: 300,
	      fontTransform: "lowercase",
	      color: theme.info.colors.menuLink,
	      "&:hover": {
	        color: theme.info.colors.menuLinkHover
	      }
	    }
	  };
	};
	
	var InfoMenu = function InfoMenu(props) {
	  var classes = props.classes,
	      pages = props.pages,
	      linkOnClick = props.linkOnClick;
	
	
	  return _react2.default.createElement(
	    "nav",
	    { className: classes.infoMenu },
	    pages.map(function (page, i) {
	      var _page$node = page.node,
	          fields = _page$node.fields,
	          frontmatter = _page$node.frontmatter;
	
	      return _react2.default.createElement(
	        _gatsbyLink2.default,
	        {
	          key: fields.slug,
	          to: fields.slug,
	          onClick: linkOnClick,
	          className: classes.link,
	          "data-shape": "closed"
	        },
	        frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title
	      );
	    }),
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { to: "/contact/", onClick: linkOnClick, className: classes.link, "data-shape": "closed" },
	      "Contact"
	    )
	  );
	};
	
	InfoMenu.propTypes = {
	  pages: _propTypes2.default.array.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  linkOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoMenu);
	module.exports = exports["default"];

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(169);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(321);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(220);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _IconButton = __webpack_require__(527);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _ExpandMore = __webpack_require__(681);
	
	var _ExpandMore2 = _interopRequireDefault(_ExpandMore);
	
	var _avatar2 = __webpack_require__(667);
	
	var _avatar3 = _interopRequireDefault(_avatar2);
	
	var _config = __webpack_require__(666);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  var _avatarLink, _avatar, _title;
	
	  return {
	    header: {
	      lineHeight: 1,
	      position: "relative"
	    },
	    avatarLink: (_avatarLink = {
	      willChange: "left, top",
	      float: "left",
	      display: "block",
	      position: "relative",
	      margin: "0 12px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 20px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      position: "absolute",
	      top: "10px",
	      left: "50%",
	      marginLeft: "-30px",
	      transition: "all .5s",
	      transitionTimingFunction: "ease",
	      ".navigator-in-transition-from.navigator-is-opened &": {
	        left: "50%"
	      },
	      ".is-aside.open &": {
	        left: "8%",
	        top: "0"
	      }
	    }, _avatarLink),
	    avatar: (_avatar = {
	      width: "36px",
	      height: "36px",
	      borderRadius: "65% 75%",
	      border: "1px solid #ddd",
	      transition: "all .3s",
	      transitionTimingFunction: "ease",
	      display: "inline-block",
	      overflow: "hidden",
	      "& img": {
	        maxWidth: "100%"
	      }
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      width: "44px",
	      height: "44px"
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      width: "60px",
	      height: "60px"
	    }, _avatar["@media (hover: hover)"] = {
	      "&:hover": {
	        borderRadius: "75% 65%"
	      }
	    }, _avatar),
	    title: (_title = {
	      willChange: "transform, left, top",
	      fontSize: theme.info.fonts.boxTitleSize + "em",
	      margin: 0,
	      float: "left",
	      transitionTimingFunction: "ease",
	      "& small": {
	        display: "block",
	        fontSize: ".6em",
	        marginTop: ".3em"
	      }
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeM + "em"
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeL + "em",
	      position: "absolute",
	      top: "85px",
	      textAlign: "center",
	      left: "50%",
	      transform: "translate(-50%)",
	      transition: "all .5s",
	      ".is-aside.open &": {
	        left: "60%",
	        top: 1.9 - theme.info.fonts.boxTitleSizeL + "em",
	        textAlign: "left"
	      }
	    }, _title),
	    expand: {
	      position: "absolute",
	      top: "30px",
	      right: "-25px",
	      display: "none",
	      color: theme.info.colors.text,
	      ".is-aside.open &": {
	        display: "block"
	      }
	    }
	  };
	};
	
	var InfoHeader = function InfoHeader(props) {
	  var classes = props.classes,
	      avatarOnClick = props.avatarOnClick,
	      expandOnClick = props.expandOnClick;
	
	
	  return _react2.default.createElement(
	    "header",
	    { className: classes.header },
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { className: classes.avatarLink, onClick: avatarOnClick, to: "/", title: "back to Home page" },
	      _react2.default.createElement(
	        "div",
	        { className: classes.avatar },
	        _react2.default.createElement("img", { src: _avatar3.default, alt: "" })
	      )
	    ),
	    _react2.default.createElement(
	      "h1",
	      { className: classes.title },
	      _config2.default.infoTitle.replace(/ /g, "\xA0"),
	      _react2.default.createElement(
	        "small",
	        null,
	        _config2.default.infoTitleNote
	      )
	    ),
	    _react2.default.createElement(
	      _IconButton2.default,
	      {
	        "aria-label": "Expand the box",
	        className: classes.expand,
	        onClick: expandOnClick,
	        title: "Expand the box"
	      },
	      _react2.default.createElement(_ExpandMore2.default, null)
	    )
	  );
	};
	
	InfoHeader.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  avatarOnClick: _propTypes2.default.func.isRequired,
	  expandOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoHeader);
	module.exports = exports["default"];

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(554);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(559);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;
	
	var _ref = _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' });
	
	var ExpandMore = function ExpandMore(props) {
	  return _react2.default.createElement(
	    SvgIconCustom,
	    props,
	    _ref
	  );
	};
	
	ExpandMore = (0, _pure2.default)(ExpandMore);
	ExpandMore.muiName = 'SvgIcon';
	
	exports.default = ExpandMore;

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(169);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(321);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    text: {
	      display: "block",
	      fontWeight: 300,
	      lineHeight: 1.5,
	      fontSize: ".95em",
	      textAlign: "left",
	      marginBottom: ".8em",
	      "& p:first-child": {
	        marginTop: 0
	      },
	      "& p:last-child": {
	        marginBottom: 0
	      }
	    }
	  };
	};
	
	var InfoText = function InfoText(props) {
	  var classes = props.classes,
	      info = props.info;
	
	  var text = info.node.html;
	
	  return _react2.default.createElement("div", { className: classes.text, dangerouslySetInnerHTML: { __html: text } });
	};
	
	InfoText.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  info: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoText);
	module.exports = exports["default"];

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(169);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(321);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _Tooltip = __webpack_require__(585);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _config = __webpack_require__(666);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _gentoo = __webpack_require__(684);
	
	var _xmonad = __webpack_require__(685);
	
	var _vim = __webpack_require__(686);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  var _stack;
	
	  return {
	    stack: (_stack = {
	      display: "none"
	    }, _stack["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      position: "absolute",
	      left: 0,
	      bottom: 0,
	      width: "100%",
	      padding: "1em 2em"
	    }, _stack),
	    box: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    link: {
	      display: "inline-block",
	      padding: "8px"
	    },
	    svg: {
	      width: "22px",
	      height: "22px",
	      pointerEvents: "none"
	    },
	    header: {
	      textAlign: "center",
	      fontSize: ".85em",
	      letterSpacing: ".3em",
	      width: "100%",
	      margin: "0 0 .8em 0",
	      fontWeight: 300
	    }
	  };
	};
	
	var StackIcons = function StackIcons(props) {
	  var classes = props.classes;
	
	
	  var items = _config2.default.builtWith;
	  var icons = {
	    gentoo: _gentoo.ReactComponent,
	    xmonad: _xmonad.ReactComponent,
	    vim: _vim.ReactComponent
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: classes.stack },
	    _react2.default.createElement(
	      "h5",
	      { className: classes.header },
	      "built with:"
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: classes.box },
	      items.map(function (item) {
	        var Icon = icons[item.name];
	        return _react2.default.createElement(
	          _Tooltip2.default,
	          { title: item.title, key: item.name },
	          _react2.default.createElement(
	            "a",
	            {
	              href: item.url,
	              className: classes.link,
	              target: "_blank",
	              rel: "noopener noreferrer"
	            },
	            _react2.default.createElement(Icon, { className: classes.svg })
	          )
	        );
	      })
	    )
	  );
	};
	
	StackIcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(StackIcons);
	module.exports = exports["default"];

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256z",
	  fill: "#9991d9"
	});
	
	var _ref2 =
	/*#__PURE__*/
	_react2.default.createElement("g", {
	  fill: "#fff",
	  fontSize: 16,
	  fontFamily: "Times New Roman"
	}, _react2.default.createElement("path", {
	  d: "M245.117 69.44c-6.17.044-12.259.594-18.105 1.663-62.47 11.424-106.422 65.467-110.145 101.074-1.826 17.47 7.59 30.53 12.785 36.302 14.04 15.6 42.031 27.52 60.023 37.393-26.01 22.177-37.948 33-49.696 45.336-17.58 18.461-29.946 38.782-29.984 53.336-.013 4.688-.777 19.643 5.32 31.443 2.294 4.439 8.816 19.245 28.47 30.335 12.562 7.089 30.457 9.687 47.978 7.187 54.222-7.739 126.846-53.72 178.666-96.548 33.027-27.295 57.17-53.743 64.144-66.766 5.626-10.508 6.256-29.37 2.993-41.198-9.272-33.605-84.643-102.413-146.263-130.116-14.117-6.347-30.416-9.553-46.186-9.44zm-.092.961c16.834-.234 33.476 3.682 48.052 10.845 49.766 24.456 133.832 93.183 140.036 127.75 7.669 42.722-142.787 158.4-234.311 176.45-35.508 6.97-65.775 8.864-79.588-28.635-11.974-32.509 11.245-56.29 45.428-87.532 14.195-12.973 25.519-22.664 42.547-37.042.98-.979-82.031-29.602-84.687-62.443-2.73-33.758 50.71-96.052 119.142-99.282 1.123-.053 2.258-.095 3.38-.111z"
	}), _react2.default.createElement("path", {
	  d: "M236.132 78.326c-33.606 3.541-40.042 7.867-70.486 30.9-10.204 7.72-28.983 26.503-33.795 48.787-1.832 8.487.334 15.814 6.446 20.953 19.572 16.454 52.329 29.803 79.203 42.707 7.871 3.78 2.66 10.633-10.033 21.622-32.03 27.73-75.336 61.484-78.36 87.205-1.424 12.12 2.725 28.589 17.437 37.017 17.185 9.845 52.858 3.42 76.678-5.45 34.81-12.963 80.535-41.57 116.837-69.691 37.749-29.241 72.847-66.383 74.583-72.44 2.132-7.438 1.92-14.31-2.195-22.208-6.461-12.406-15.1-21.623-24.374-31.94-24.887-26.237-51.219-49.291-82.722-66.957-22.75-12.758-42.767-23.292-69.22-20.505zm49.364 58.82c24.278 11.739 49.21 42.57-.216 60.315-13.441 4.826-56.065-11.85-54.761-34.608 1.903-33.618 25.333-40.038 54.977-25.706z"
	}), _react2.default.createElement("path", {
	  d: "M236.132 78.326c-33.606 3.541-40.042 7.867-70.486 30.9-10.204 7.72-28.983 26.503-33.795 48.787-1.832 8.487.334 15.814 6.446 20.953 19.572 16.454 52.329 29.803 79.203 42.707 7.871 3.78 2.66 10.633-10.033 21.622-32.03 27.73-75.336 61.484-78.36 87.205-1.424 12.12 2.725 28.589 17.437 37.017 17.185 9.845 52.858 3.42 76.678-5.45 34.81-12.963 80.535-41.57 116.837-69.691 37.749-29.241 72.847-66.383 74.583-72.44 2.132-7.438 1.92-14.31-2.195-22.208-6.461-12.406-15.1-21.623-24.374-31.94-24.887-26.237-51.219-49.291-82.722-66.957-22.75-12.758-42.767-23.292-69.22-20.505zm49.364 58.82c24.278 11.739 49.21 42.57-.216 60.315-13.441 4.826-56.065-11.85-54.761-34.608 1.903-33.618 25.333-40.038 54.977-25.706z"
	}), _react2.default.createElement("path", {
	  d: "M236.132 78.326c-33.606 3.541-40.042 7.867-70.486 30.9-10.204 7.72-28.983 26.503-33.795 48.787-1.832 8.487.334 15.814 6.446 20.953 19.572 16.454 52.329 29.803 79.203 42.707 7.871 3.78 2.66 10.633-10.033 21.622-32.03 27.73-75.336 61.484-78.36 87.205-1.424 12.12 2.725 28.589 17.437 37.017 17.185 9.845 52.858 3.42 76.678-5.45 34.81-12.963 80.535-41.57 116.837-69.691 37.749-29.241 72.847-66.383 74.583-72.44 2.132-7.438 1.92-14.31-2.195-22.208-6.461-12.406-15.1-21.623-24.374-31.94-24.887-26.237-51.219-49.291-82.722-66.957-22.75-12.758-42.767-23.292-69.22-20.505zm49.364 58.82c24.278 11.739 49.21 42.57-.216 60.315-13.441 4.826-56.065-11.85-54.761-34.608 1.903-33.618 25.333-40.038 54.977-25.706z"
	}), _react2.default.createElement("path", {
	  d: "M264.922 143.486c-.294 0-.587.009-.887.018-8.573.276-19.473 4.626-20.396 16.554-.773 9.992 5.392 17.322 12.1 21.67-3.229-2.688-5.786-6.609-5.394-11.676.714-9.227 11.305-10.943 16.184-9.606 5.842 1.6 15.554 8.522 14.687 14.872-1.085 7.948-7.748 11.393-15.685 10.678.455.1.896.182 1.312.24 13.967 1.941 26.014-3.648 27.897-17.44 1.433-10.506-14.646-21.979-24.313-24.626-1.545-.424-3.447-.68-5.505-.684z"
	}));
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    height: 512,
	    viewBox: "0 0 512 512",
	    width: 512
	  }, props), _ref, _ref2);
	};
	
	exports.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTE1LjkxIDcyOC41IiBoZWlnaHQ9IjUxMiIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMi4wMDAwMyA1MTIiIHdpZHRoPSI1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNyIvPjxnIGlkPSJnNDEwOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg3Ljk2Mjg4LDIzLjM2NDU2OSkiPjxwYXRoIGQ9Im0gLTczMy42MjMyOSw3Mi4yNjc5NDQgYyAwLDIwMy44MDQ4NzYgLTE2NS4yMTY0OSwzNjkuMDIxMzY2IC0zNjkuMDIxNDEsMzY5LjAyMTM2NiAtMjAzLjgwNDgsMCAtMzY5LjAyMTMsLTE2NS4yMTY0OSAtMzY5LjAyMTMsLTM2OS4wMjEzNjYgMCwtMjAzLjgwNDg3NCAxNjUuMjE2NSwtMzY5LjAyMTM2NCAzNjkuMDIxMywtMzY5LjAyMTM2NCAyMDMuODA0OTIsMCAzNjkuMDIxNDEsMTY1LjIxNjQ5IDM2OS4wMjE0MSwzNjkuMDIxMzY0IHoiIGlkPSJwYXRoNDk0OCIgc3R5bGU9ImZpbGw6Izk5OTFkOTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42OTM3MjY4MiwwLDAsMC42OTM3MjY4Miw4MzIuOTcxMywxODIuNTAxMjIpIi8+PGcgaWQ9Imc0MDc3IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjczODk3ODkxLDAsMCwwLjczODk3ODkxLC00NS4wODM0ODksMTYuMDczMjE1KSI+PHBhdGggZD0ibSAxNzIuOTM3NSw1MC43NSBjIC0xMC40Mzc5NSwwLjA3NDIgLTIwLjczNjI1LDEuMDA0MDYzIC0zMC42MjUsMi44MTI1IEMgMzYuNjQxMjUyLDcyLjg4NjI0OSAtMzcuNzAzNzUsMTY0LjMwMTI1IC00NCwyMjQuNTMxMjUgYyAtMy4wODg3NSwyOS41NTI1IDEyLjgzNzUsNTEuNjQyNSAyMS42MjUsNjEuNDA2MjUgMjMuNzQ5OTk5LDI2LjM4NjI1IDcxLjA5NzUwMSw0Ni41NTEyNSAxMDEuNTMxMjUsNjMuMjUgLTQzLjk5NzQ5OCwzNy41MTM3NSAtNjQuMTkwMDAxLDU1LjgyIC04NC4wNjI1LDc2LjY4NzUgLTI5LjczNzQ5OSwzMS4yMjc1IC01MC42NTUsNjUuNiAtNTAuNzE4NzUsOTAuMjE4NzUgLTAuMDIyNSw3LjkzIC0xLjMxMzc1LDMzLjIyNjI1IDksNTMuMTg3NSAzLjg3ODc1LDcuNTA3NSAxNC45MTI1MDEsMzIuNTUzNzUgNDguMTU2MjUsNTEuMzEyNSAyMS4yNDg3NDksMTEuOTkgNTEuNTIwMDAxLDE2LjM4NSA4MS4xNTYyNSwxMi4xNTYyNSA5MS43MTc1LC0xMy4wOSAyMTQuNTYzNzUsLTkwLjg2NzUgMzAyLjIxODc1LC0xNjMuMzEyNSA1NS44NjUsLTQ2LjE3IDk2LjcwNSwtOTAuOTA3NSAxMDguNSwtMTEyLjkzNzUgOS41MTYyNSwtMTcuNzczNzUgMTAuNTgyNSwtNDkuNjc4NzUgNS4wNjI1LC02OS42ODc1IEMgNDgyLjc4NSwyMjkuOTcgMzU1LjI5Mzc1LDExMy41Nzg3NSAyNTEuMDYyNSw2Ni43MTg3NSAyMjcuMTgyOTMsNTUuOTgzMzIxIDE5OS42MTIyNyw1MC41NjAzNzYgMTcyLjkzNzUsNTAuNzUgeiBtIC0wLjE1NjI1LDEuNjI1IGMgMjguNDc1MDksLTAuMzk2NjU3IDU2LjYyNjE3LDYuMjI3NzM1IDgxLjI4MTI1LDE4LjM0Mzc1IDg0LjE4MTI1LDQxLjM2ODc1IDIyNi4zOCwxNTcuNjIxMjUgMjM2Ljg3NSwyMTYuMDkzNzUgMTIuOTcxMjUsNzIuMjY1IC0yNDEuNTI3NSwyNjcuOTM1IC0zOTYuMzQzNzUsMjk4LjQ2ODc1IC02MC4wNjEyNDcsMTEuNzkgLTExMS4yNjAwMDEsMTQuOTkzNzUgLTEzNC42MjUsLTQ4LjQzNzUgQyAtNjAuMjg0OTk5LDQ4MS44NTUgLTIxLjAwODc0Nyw0NDEuNjI4NzUgMzYuODEyNSwzODguNzgxMjUgNjAuODIyNDk5LDM2Ni44Mzc1IDc5Ljk3NzUwMSwzNTAuNDQ1IDEwOC43ODEyNSwzMjYuMTI1IDExMC40Mzc1LDMyNC40Njg3NSAtMjkuOTc2MjUsMjc2LjA1MjUgLTM0LjQ2ODc1LDIyMC41IC0zOS4wODc1LDE2My4zOTg3NSA1MS4zMDg3NTMsNTguMDI2MjUgMTY3LjA2MjUsNTIuNTYyNSBjIDEuOSwtMC4wODkzNyAzLjgyMDQxLC0wLjE2MTA1NiA1LjcxODc1LC0wLjE4NzUgeiIgaWQ9InBhdGg4NyIgc3R5bGU9ImZvbnQtc2l6ZToxNnB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTttYXJrZXItc3RhcnQ6bm9uZTttYXJrZXItZW5kOm5vbmU7Zm9udC1mYW1pbHk6VGltZXMgTmV3IFJvbWFuIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjgwMDAwMDA0LDAsMCwwLjgwMDAwMDA0LC04LjMwODU5ODNlLTYsMCkiLz48cGF0aCBkPSJtIDEyNi4xOTA1MSw1Mi42MjQ2MzMgYyAtNDUuNDc2MDAyLDQuNzkyIC01NC4xODUwMDIsMTAuNjQ1IC05NS4zODIwMDIsNDEuODE0IC0xMy44MDgsMTAuNDQ2OTk3IC0zOS4yMTk5OTk5LDM1Ljg2NDk5NyAtNDUuNzMyLDY2LjAxOTk5NyAtMi40NzksMTEuNDg0IDAuNDUyLDIxLjM5OSA4LjcyMzAwMDEsMjguMzUzIDI2LjQ4NDk5OTksMjIuMjY2IDcwLjgxMTk5OTksNDAuMzMgMTA3LjE3ODAwMTksNTcuNzkzIDEwLjY1Miw1LjExNCAzLjYsMTQuMzg4IC0xMy41NzcwMDIsMjkuMjU5IC00My4zNDQsMzcuNTI0IC0xMDEuOTQ2LDgzLjIwMSAtMTA2LjAzNywxMTguMDA3IC0xLjkyOCwxNi40MDEgMy42ODcsMzguNjg3IDIzLjU5NTAwMDEsNTAuMDkyIDIzLjI1NDk5OTksMTMuMzIzIDcxLjUyODk5OTksNC42MjcgMTAzLjc2MzAwMTksLTcuMzc2IDQ3LjEwNSwtMTcuNTQxIDEwOC45ODEsLTU2LjI1MyAxNTguMTA1LC05NC4zMDYgNTEuMDgzLC0zOS41NyA5OC41NzgsLTg5LjgzIDEwMC45MjgsLTk4LjAyNyAyLjg4NSwtMTAuMDY2IDIuNTk3LC0xOS4zNjQgLTIuOTcxLC0zMC4wNTMgLTguNzQzLC0xNi43ODcgLTIwLjQzMiwtMjkuMjYgLTMyLjk4MywtNDMuMjIyIC0zMy42NzcsLTM1LjUwNCAtNjkuMzEsLTY2LjcwMSAtMTExLjk0MSwtOTAuNjA2OTk3IC0zMC43ODYsLTE3LjI2NCAtNTcuODczLC0zMS41MTkgLTkzLjY2OSwtMjcuNzQ3IHogbSA2Ni44MDEsNzkuNTk2OTk3IGMgMzIuODU0LDE1Ljg4NCA2Ni41OTIsNTcuNjA1IC0wLjI5Myw4MS42MTkgLTE4LjE4OCw2LjUzIC03NS44NjgsLTE2LjAzNyAtNzQuMTAzLC00Ni44MzMgMi41NzUsLTQ1LjQ5MiAzNC4yODEsLTU0LjE4IDc0LjM5NiwtMzQuNzg2IHoiIGlkPSJwYXRoOTUiIHN0eWxlPSJmb250LXNpemU6MTZweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7bWFya2VyLXN0YXJ0Om5vbmU7bWFya2VyLWVuZDpub25lO2ZvbnQtZmFtaWx5OlRpbWVzIE5ldyBSb21hbiIvPjxwYXRoIGQ9Im0gMTI2LjE5MDUxLDUyLjYyNDYzMyBjIC00NS40NzYwMDIsNC43OTIgLTU0LjE4NTAwMiwxMC42NDUgLTk1LjM4MjAwMiw0MS44MTQgLTEzLjgwOCwxMC40NDY5OTcgLTM5LjIxOTk5OTksMzUuODY0OTk3IC00NS43MzIsNjYuMDE5OTk3IC0yLjQ3OSwxMS40ODQgMC40NTIsMjEuMzk5IDguNzIzMDAwMSwyOC4zNTMgMjYuNDg0OTk5OSwyMi4yNjYgNzAuODExOTk5OSw0MC4zMyAxMDcuMTc4MDAxOSw1Ny43OTMgMTAuNjUyLDUuMTE0IDMuNiwxNC4zODggLTEzLjU3NzAwMiwyOS4yNTkgLTQzLjM0NCwzNy41MjQgLTEwMS45NDYsODMuMjAxIC0xMDYuMDM3LDExOC4wMDcgLTEuOTI4LDE2LjQwMSAzLjY4NywzOC42ODcgMjMuNTk1MDAwMSw1MC4wOTIgMjMuMjU0OTk5OSwxMy4zMjMgNzEuNTI4OTk5OSw0LjYyNyAxMDMuNzYzMDAxOSwtNy4zNzYgNDcuMTA1LC0xNy41NDEgMTA4Ljk4MSwtNTYuMjUzIDE1OC4xMDUsLTk0LjMwNiA1MS4wODMsLTM5LjU3IDk4LjU3OCwtODkuODMgMTAwLjkyOCwtOTguMDI3IDIuODg1LC0xMC4wNjYgMi41OTcsLTE5LjM2NCAtMi45NzEsLTMwLjA1MyAtOC43NDMsLTE2Ljc4NyAtMjAuNDMyLC0yOS4yNiAtMzIuOTgzLC00My4yMjIgLTMzLjY3NywtMzUuNTA0IC02OS4zMSwtNjYuNzAxIC0xMTEuOTQxLC05MC42MDY5OTcgLTMwLjc4NiwtMTcuMjY0IC01Ny44NzMsLTMxLjUxOSAtOTMuNjY5LC0yNy43NDcgeiBtIDY2LjgwMSw3OS41OTY5OTcgYyAzMi44NTQsMTUuODg0IDY2LjU5Miw1Ny42MDUgLTAuMjkzLDgxLjYxOSAtMTguMTg4LDYuNTMgLTc1Ljg2OCwtMTYuMDM3IC03NC4xMDMsLTQ2LjgzMyAyLjU3NSwtNDUuNDkyIDM0LjI4MSwtNTQuMTggNzQuMzk2LC0zNC43ODYgeiIgaWQ9InBhdGg0MDAwLTQiIHN0eWxlPSJmb250LXNpemU6MTZweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7bWFya2VyLXN0YXJ0Om5vbmU7bWFya2VyLWVuZDpub25lO2ZvbnQtZmFtaWx5OlRpbWVzIE5ldyBSb21hbiIvPjxwYXRoIGQ9Im0gMTI2LjE5MDUxLDUyLjYyNDYzMyBjIC00NS40NzYwMDIsNC43OTIgLTU0LjE4NTAwMiwxMC42NDUgLTk1LjM4MjAwMiw0MS44MTQgLTEzLjgwOCwxMC40NDY5OTcgLTM5LjIxOTk5OTksMzUuODY0OTk3IC00NS43MzIsNjYuMDE5OTk3IC0yLjQ3OSwxMS40ODQgMC40NTIsMjEuMzk5IDguNzIzMDAwMSwyOC4zNTMgMjYuNDg0OTk5OSwyMi4yNjYgNzAuODExOTk5OSw0MC4zMyAxMDcuMTc4MDAxOSw1Ny43OTMgMTAuNjUyLDUuMTE0IDMuNiwxNC4zODggLTEzLjU3NzAwMiwyOS4yNTkgLTQzLjM0NCwzNy41MjQgLTEwMS45NDYsODMuMjAxIC0xMDYuMDM3LDExOC4wMDcgLTEuOTI4LDE2LjQwMSAzLjY4NywzOC42ODcgMjMuNTk1MDAwMSw1MC4wOTIgMjMuMjU0OTk5OSwxMy4zMjMgNzEuNTI4OTk5OSw0LjYyNyAxMDMuNzYzMDAxOSwtNy4zNzYgNDcuMTA1LC0xNy41NDEgMTA4Ljk4MSwtNTYuMjUzIDE1OC4xMDUsLTk0LjMwNiA1MS4wODMsLTM5LjU3IDk4LjU3OCwtODkuODMgMTAwLjkyOCwtOTguMDI3IDIuODg1LC0xMC4wNjYgMi41OTcsLTE5LjM2NCAtMi45NzEsLTMwLjA1MyAtOC43NDMsLTE2Ljc4NyAtMjAuNDMyLC0yOS4yNiAtMzIuOTgzLC00My4yMjIgLTMzLjY3NywtMzUuNTA0IC02OS4zMSwtNjYuNzAxIC0xMTEuOTQxLC05MC42MDY5OTcgLTMwLjc4NiwtMTcuMjY0IC01Ny44NzMsLTMxLjUxOSAtOTMuNjY5LC0yNy43NDcgeiBtIDY2LjgwMSw3OS41OTY5OTcgYyAzMi44NTQsMTUuODg0IDY2LjU5Miw1Ny42MDUgLTAuMjkzLDgxLjYxOSAtMTguMTg4LDYuNTMgLTc1Ljg2OCwtMTYuMDM3IC03NC4xMDMsLTQ2LjgzMyAyLjU3NSwtNDUuNDkyIDM0LjI4MSwtNTQuMTggNzQuMzk2LC0zNC43ODYgeiIgaWQ9InBhdGg0MDA1IiBzdHlsZT0iZm9udC1zaXplOjE2cHg7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO21hcmtlci1zdGFydDpub25lO21hcmtlci1lbmQ6bm9uZTtmb250LWZhbWlseTpUaW1lcyBOZXcgUm9tYW4iLz48cGF0aCBkPSJtIDIwNi40Mzc1LDE3NiBjIC0wLjQ5NzM5LC0wLjAwMSAtMC45OTI0MywwLjAxNDkgLTEuNSwwLjAzMTIgLTE0LjUwMjA2LDAuNDY2MzMgLTMyLjkzODczLDcuODIzMzggLTM0LjUsMjggLTEuMzA3OTMsMTYuOTAxOTggOS4xMjA0NCwyOS4zMDE5NCAyMC40Njg3NSwzNi42NTYyNSAtNS40NjI4LC00LjU0Njc1IC05Ljc4ODIxLC0xMS4xNzk1MSAtOS4xMjUsLTE5Ljc1IDEuMjA3NzcsLTE1LjYwODM0IDE5LjEyMjQ0LC0xOC41MTAwNiAyNy4zNzUsLTE2LjI1IDkuODgyMjksMi43MDY0NCAyNi4zMDk1OSwxNC40MTYyNCAyNC44NDM3NSwyNS4xNTYyNSAtMS44MzU0MiwxMy40NDU2IC0xMy4xMDYyMiwxOS4yNzI5OSAtMjYuNTMxMjUsMTguMDYyNSAwLjc2OTc4LDAuMTY4NDkgMS41MTUwOCwwLjMwODQ2IDIuMjE4NzUsMC40MDYyNSAyMy42MjUzMiwzLjI4NDIgNDQuMDAyOTUsLTYuMTcxMiA0Ny4xODc1LC0yOS41IDIuNDI1NDEsLTE3Ljc3MDc5IC0yNC43NzM0NSwtMzcuMTc4MDkgLTQxLjEyNSwtNDEuNjU2MjUgLTIuNjEzNjQsLTAuNzE1NzggLTUuODMwNzcsLTEuMTQ4NzkgLTkuMzEyNSwtMS4xNTYyNSB6IiBpZD0icGF0aDQwNjciIHN0eWxlPSJmb250LXNpemU6MTZweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7bWFya2VyLXN0YXJ0Om5vbmU7bWFya2VyLWVuZDpub25lO2ZvbnQtZmFtaWx5OlRpbWVzIE5ldyBSb21hbiIgdHJhbnNmb3JtPSJtYXRyaXgoMC44MDAwMDAwNCwwLDAsMC44MDAwMDAwNCwtOC4zMDg1OTgzZS02LDApIi8+PC9nPjwvZz48L3N2Zz4=";
	exports.ReactComponent = SvgComponent;

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("g", {
	  fontSize: 73.724,
	  fontFamily: "Bitstream Vera Sans"
	}, _react2.default.createElement("path", {
	  d: "M6.383 5.353L10.013 0h2.111l-4.67 6.916-1.217 1.36L2.121 14.4H0l5.186-7.688",
	  fill: "#aeaeae"
	}), _react2.default.createElement("path", {
	  d: "M.662 0h2.111l9.662 14.4h-2.111L6.237 8.277 2.121 14.4H0l5.186-7.688L.662 0"
	}));
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    width: 47,
	    height: 72.677,
	    viewBox: "0 0 12.435 19.229"
	  }, props), _react2.default.createElement("g", {
	    fontWeight: 400
	  }, _ref, _react2.default.createElement("path", {
	    style: {
	      lineHeight: "125%",
	      textAlign: "start"
	    },
	    d: "M0 18.39l2.995-1.496L0 15.413v-.84l3.781 1.923v.788L0 19.229m0 0v-.839m7.782-1.106L4 19.229v-.839l2.994-1.496-2.994-1.481v-.84l3.78 1.923zm4.653-1.037h-3.77v-.787h3.77zm0 2.087h-3.77v-.788h3.77z",
	    fontSize: 28.207,
	    fontFamily: "Bitstream Vera Sans Mono",
	    fill: "#ee0a00"
	  })));
	};
	
	exports.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTIuNDM1NDJtbSIKICAgaGVpZ2h0PSIxOS4yMjkyMTJtbSIKICAgdmlld0JveD0iMCAwIDEyLjQzNTQyIDE5LjIyOTIxMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMTAzIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjIgMjQwNTU0NiwgMjAxOC0wMy0xMSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ieG1vbmFkLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczk3IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIyLjgiCiAgICAgaW5rc2NhcGU6Y3g9IjE2NC45NTAyNCIKICAgICBpbmtzY2FwZTpjeT0iNjMuMTg0OTE3IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMjg4MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxNTUyIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSI2OCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTEwMCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyLjkxOTE5NSwtNDIuNDU2ODIzKSI+CiAgICA8ZwogICAgICAgaWQ9ImczMjEyIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNzAzMDA5OCwwLDAsMC4yNjc5NDM1NCw0My4xODc5OSw0Mi4zNjg3NTcpIj4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NzMuNzI0NDAzMzhweDtmb250LWZhbWlseTonQml0c3RyZWFtIFZlcmEgU2Fucyc7ZmlsbDojYWVhZWFlO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAyMi42MjA0MywyMC4zMDc3MDcgMzYuMDQ3NzgsMC4zMjg2NzM0OSBoIDcuODExNjIyIEwgMjYuNTgwMjM4LDI2LjEzOTQyNSAyMi4wODA0NTYsMzEuMjE1MTc5IDYuODUzMTkyNSw1NC4wNzQwNzQgSCAtMC45OTQ0Mjc5IEwgMTguMTkyNjQ0LDI1LjM4MzQ2MiIKICAgICAgICAgaWQ9InRleHQyMjIwIgogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDMyMDYiCiAgICAgICAgIGQ9Ik0gMS40NTM0NTM3LDAuMzI4NjczNDkgSCA5LjI2NTA3NTggTCA0NS4wMTEzNDcsNTQuMDc0MDc0IEggMzcuMTk5NzI1IEwgMjIuMDgwNDU2LDMxLjIxNTE3OSA2Ljg1MzE5MjUsNTQuMDc0MDc0IEggLTAuOTk0NDI3OSBMIDE4LjE5MjY0NCwyNS4zODM0NjIgMS40NTM0NTM3LDAuMzI4NjczNDkiCiAgICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjczLjcyNDQwMzM4cHg7Zm9udC1mYW1pbHk6J0JpdHN0cmVhbSBWZXJhIFNhbnMnO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZToyOC4yMDczOTkzN3B4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6J0JpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubyc7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiNlZTBhMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA0Mi45MTkxOTksNjAuODQ2ODI2IDIuOTk0NjU5LC0xLjQ5NTU3MSAtMi45OTQ2NTksLTEuNDgxNTA2IHYgLTAuODM5MjA4IGwgMy43ODEyOTIsMS45MjIyMDcgdiAwLjc4NzYzNyBsIC0zLjc4MTI5MiwxLjk0NTY0OSBtIDAsMCB2IC0wLjgzOTIwOCBtIDcuNzgxODE3LC0xLjEwNjQ0MSAtMy43ODEyOTMsMS45NDU2NDkgdiAtMC44MzkyMDggbCAyLjk5NDY1OSwtMS40OTU1NzEgLTIuOTk0NjU5LC0xLjQ4MTUwNiB2IC0wLjgzOTIwOCBsIDMuNzgxMjkzLDEuOTIyMjA3IHogbSA0LjY1MzU5OSwtMS4wMzYxMTcgaCAtMy43Njk2MSB2IC0wLjc4NzYzNiBoIDMuNzY5NjEgeiBtIDAsMi4wODYyOTkgaCAtMy43Njk2MSBWIDYwLjAwMjkzIGggMy43Njk2MSB6IgogICAgICAgaWQ9InRleHQzMjE2IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2MiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDwvZz4KPC9zdmc+Cg==";
	exports.ReactComponent = SvgComponent;

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactComponent = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}
	
	var _ref =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M128.286 1.952L1.945 127.885 128.286 254.4l125.761-126.515L128.286 1.952",
	  fill: "#019833"
	});
	
	var _ref2 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M128.264 13.516V2.885L2.774 127.908h10.753L128.264 13.516",
	  fill: "#66FE98"
	});
	
	var _ref3 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M128.264 13.516V2.885l125.88 125.023h-11.636L128.264 13.516",
	  fill: "#45FE02"
	});
	
	var _ref4 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M128.264 242.836v11.769L2.774 127.908h10.753l114.737 114.928",
	  fill: "#017D17"
	});
	
	var _ref5 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M128.264 242.836v11.769l125.88-126.697h-11.636L128.264 242.836",
	  fill: "#005D04"
	});
	
	var _ref6 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M65.226 230.591H40.9l-9.5-9.258V44.55h-7.54l-6.455-6.464V18.325l6.687-7.253h85.075l7.649 7.658v18.756l-6.356 7.747h-6.428v59.758l60.487-59.758h-3.377l-7.035-7.587V17.758l6.912-6.345h85.872l6.796 6.805v18.81L65.226 230.591"
	});
	
	var _ref7 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M128.264 256.342L0 127.908 128.264 0 256 127.908 128.264 256.342zM3.929 127.908L128.264 252.41l123.805-124.502L128.264 3.935 3.929 127.908z"
	});
	
	var _ref8 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M108.075 22.742l3.779-2.441-3.861-4.008H26.156l-4.158 4.164v15.75l4.61 4.616 2.199-4.616-2.892-2.897V22.207l2.169-1.931 77.264.095 2.727 2.371",
	  fill: "#FEFEFE"
	});
	
	var _ref9 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M41.458 35.833v184.334l2.592 2.468-2.077 3.925-5.451-5.369V40.612l4.936-4.779",
	  fill: "#FEFEFE"
	});
	
	var _ref10 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M28.236 35.833l-1.628 4.99h9.886l5.719-4.99H28.236",
	  fill: "gray"
	});
	
	var _ref11 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M166.531 35.897l-3.457-2.442v-9.896l3.616-3.621h75.449l2.893 3.862 4.117-3.249-4.238-3.872h-81.114l-4.038 4.043v15.871l4.252 3.848m-65.615 76.31l-7.879 19.144 88.948-89.309-.435-10.804-80.634 80.969",
	  fill: "#FEFEFE"
	});
	
	var _ref12 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M107.897 22.671l3.957-2.37v15.532l-4.517 4.523h-8.778l-.163 76.395-7.849 19.1V35.833h14.659l2.727-2.219-.036-10.943M244.764 22.722l4.385-2.171v14.183L62.408 226.56H41.973l1.994-3.77 15.695.001L244.791 31.379l-.027-8.657M179.03 35.782l-4.548 4.569-10.471.09 2.557-4.59 12.462-.069",
	  fill: "gray"
	});
	
	var _ref13 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M165.973 19.79l-2.89 2.893v10.624l2.531 2.534h13.372v10.265l-88.46 89.783V35.968h14.701l3.016-3.02V22.197l-2.784-2.154H28.093l-2.531 2.535V33.56l2.573 2.577h13.457v184.002l2.531 2.534h15.292L244.794 31.131v-8.448l-2.89-2.893h-75.931",
	  fill: "#CCC"
	});
	
	var _ref14 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M59.519 222.918H44.022l-2.674-2.678V36.381H28.034l-2.716-2.72V22.476l2.674-2.677h77.551l2.945 2.278v10.972l-3.159 3.163H90.77v99.081l87.972-89.288v-9.919h-13.229l-2.674-2.678V22.582l3.032-3.037h76.134l3.033 3.037v8.648l-.068.071L59.519 222.918zm-15.294-.489h15.087L244.55 31.033v-8.249l-2.747-2.75h-75.729l-2.747 2.75v10.422l2.388 2.391h13.516v10.609l-.07.071-88.879 90.208V35.724h14.844l2.873-2.878V22.317l-2.623-2.03H28.194l-2.388 2.392v10.78l2.431 2.434h13.599v184.144l2.389 2.392z",
	  fill: "gray"
	});
	
	var _ref15 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M134.566 143.819a.834.834 0 0 0-.38.19l-3.585 3.083a.84.84 0 0 0-.232.359l-3.586 10.054a.835.835 0 0 0 .19.866l2.742 2.745a.835.835 0 0 0 .591.233h11.073a.83.83 0 0 0 .59-.233l2.89-2.914c.1-.1.172-.224.211-.359l3.08-10.582a.835.835 0 0 0-.211-.823l-2.384-2.387a.827.827 0 0 0-.59-.232h-10.23a.796.796 0 0 0-.169 0zm-20.29 28.343a.833.833 0 0 0-.633.613l-1.371 5.449a.833.833 0 0 0 .801 1.035h6.518l-16.157 46.19a.833.833 0 0 0 .781 1.099h23.517a.834.834 0 0 0 .802-.571l1.54-4.963a.834.834 0 0 0-.802-1.077h-5.315l15.988-46.676a.833.833 0 0 0-.781-1.099h-24.72a.943.943 0 0 0-.168 0zm74.835.169a.835.835 0 0 0-.465.275l-4.893 5.533h-7.783l-5.189-5.385a.828.828 0 0 0-.59-.254h-18.582a.832.832 0 0 0-.781.549l-1.708 5.112a.834.834 0 0 0 .78 1.098h4.978l-15.482 45.683a.835.835 0 0 0 .781 1.099h19.784a.833.833 0 0 0 .781-.549l1.518-4.457a.833.833 0 0 0-.78-1.098h-3.459l9.871-31.111h17.865l-11.263 36.138a.832.832 0 0 0 .801 1.077h19.088a.834.834 0 0 0 .76-.507l1.708-4.098a.832.832 0 0 0-.759-1.14h-3.459l10.04-31.639h17l-11.432 36.307a.833.833 0 0 0 .802 1.077h20.965a.835.835 0 0 0 .781-.528l1.708-4.457a.833.833 0 0 0-.78-1.119h-4.156l12.635-41.079a.836.836 0 0 0-.127-.761l-3.923-5.28a.832.832 0 0 0-.675-.317h-14.996a.829.829 0 0 0-.612.254l-4.725 5.195h-8.268l-4.893-5.364a.83.83 0 0 0-.612-.254h-12.086a.943.943 0 0 0-.168 0z",
	  fill: "#CCC"
	});
	
	var _ref16 =
	/*#__PURE__*/
	_react2.default.createElement("path", {
	  d: "M128.359 162.524c.523.504 1.207.78 1.901.78l.046-.001h11.039c.742.023 1.444-.263 2.013-.81l2.883-2.909c.334-.334.579-.751.706-1.195l3.079-10.58a2.785 2.785 0 0 0-.705-2.752l-2.409-2.413a2.713 2.713 0 0 0-1.947-.78h-10.16a2.756 2.756 0 0 0-.436.01l-.205.032c-.47.099-.909.318-1.252.62l-3.586 3.084-.041.037c-.349.318-.612.72-.764 1.167l-3.578 10.031a2.81 2.81 0 0 0 .647 2.907l2.769 2.772zm16.154-16.751l1.575 1.577-2.816 9.676-2.346 2.368-10.168.001-1.897-1.9 3.257-9.13 3.014-2.592h9.381zM241.638 176.931l-3.923-5.28-.035-.045a2.792 2.792 0 0 0-2.225-1.06h-14.948a2.763 2.763 0 0 0-2.049.848l-4.184 4.601h-6.541l-4.312-4.727-.04-.043a2.818 2.818 0 0 0-2.016-.848h-12.016a2.759 2.759 0 0 0-.436.01l-.202.031a2.78 2.78 0 0 0-1.529.893l-4.31 4.874h-6.071l-4.615-4.79a2.81 2.81 0 0 0-1.995-.849h-18.588a2.796 2.796 0 0 0-2.612 1.837l-1.724 5.155a2.792 2.792 0 0 0 2.633 3.675h2.252l-14.61 43.11a2.794 2.794 0 0 0 1.757 3.528c.277.092.565.141.878.144h19.79a2.807 2.807 0 0 0 2.625-1.873l1.522-4.466a2.793 2.793 0 0 0-2.634-3.674h-.789l8.631-27.201H183.1l-10.476 33.611a2.791 2.791 0 0 0 1.847 3.48 3.1 3.1 0 0 0 .824.123H194.4a2.79 2.79 0 0 0 2.547-1.709l1.722-4.13a2.79 2.79 0 0 0-2.577-3.815h-.788l8.799-27.729h12.905l-10.637 33.782a2.792 2.792 0 0 0 2.657 3.601H229.995a2.817 2.817 0 0 0 2.619-1.783l1.719-4.485a2.791 2.791 0 0 0-2.616-3.745h-1.51l11.847-38.518a2.788 2.788 0 0 0-.416-2.533zm-16.723 44.96h5.169l-.842 2.195h-18.676l11.772-37.383h-21.096l-11.28 35.548h4.432l-.765 1.835h-16.815l11.599-37.214h-21.952l-11.111 35.019h4.554l-.748 2.195H141.75l15.854-46.782h-6.137l.952-2.849h17.287l5.433 5.639h9.495l5.135-5.808 11.114-.001 5.124 5.619h9.996l4.955-5.449h13.97l3.236 4.356-13.249 43.08zM130.096 218.105a3.01 3.01 0 0 0-.824-.123h-2.58l15.106-44.099a2.792 2.792 0 0 0-2.634-3.675h-24.65a2.771 2.771 0 0 0-.437.01l-.213.034a2.769 2.769 0 0 0-2.117 2.046l-1.372 5.454a2.794 2.794 0 0 0 2.034 3.38c.212.052.431.08.664.081h3.763l-15.255 43.615a2.792 2.792 0 0 0 2.634 3.674h23.53c1.204 0 2.263-.763 2.656-1.946l1.542-4.971a2.791 2.791 0 0 0-1.847-3.48zm-24.292 6.488l16.541-47.289h-7.826l.802-3.187h22.264l-16.364 47.774h6.534l-.838 2.702h-21.113z"
	});
	
	var SvgComponent = function SvgComponent(props) {
	  return _react2.default.createElement("svg", _extends({
	    width: 256,
	    height: 257,
	    viewBox: "0 0 256 257",
	    preserveAspectRatio: "xMidYMid"
	  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16);
	};
	
	exports.default = __webpack_require__.p + "static/vim.e6a94e03.svg";
	exports.ReactComponent = SvgComponent;

/***/ })

};;
//# sourceMappingURL=1.render-page.js.map