module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950315, function(require, module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["taroComponents"] = factory();
	else
		root["taroComponents"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("nervjs");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("weui");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("omit.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-h5");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var View = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(View, _Nerv$Component);

  function View() {
    var _this;

    _classCallCheck(this, View);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));

    _defineProperty(_assertThisInitialized(_this), "timeoutEvent", 0);

    _defineProperty(_assertThisInitialized(_this), "startTime", 0);

    _this.state = {
      hover: false,
      touch: false
    };
    return _this;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          hoverClass = _this$props.hoverClass,
          onTouchStart = _this$props.onTouchStart,
          onTouchEnd = _this$props.onTouchEnd,
          onTouchMove = _this$props.onTouchMove,
          className = _this$props.className,
          _this$props$hoverStar = _this$props.hoverStartTime,
          hoverStartTime = _this$props$hoverStar === void 0 ? 50 : _this$props$hoverStar,
          _this$props$hoverStay = _this$props.hoverStayTime,
          hoverStayTime = _this$props$hoverStay === void 0 ? 400 : _this$props$hoverStay,
          other = _objectWithoutProperties(_this$props, ["hoverClass", "onTouchStart", "onTouchEnd", "onTouchMove", "className", "hoverStartTime", "hoverStayTime"]);

      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('', _defineProperty({}, "".concat(hoverClass), this.state.hover), className);

      var _onTouchStart = function _onTouchStart(e) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        if (hoverClass) {
          this.setState(function () {
            _newArrowCheck(this, _this3);

            return {
              touch: true
            };
          }.bind(this));
          setTimeout(function () {
            var _this4 = this;

            _newArrowCheck(this, _this3);

            if (this.state.touch) {
              this.setState(function () {
                _newArrowCheck(this, _this4);

                return {
                  hover: true
                };
              }.bind(this));
            }
          }.bind(this), hoverStartTime);
        }

        onTouchStart && onTouchStart(e);

        if (this.props.onLongPress) {
          this.timeoutEvent = setTimeout(function () {
            _newArrowCheck(this, _this3);

            this.props.onLongPress();
          }.bind(this), 350);
          this.startTime = new Date().getTime();
        }
      }.bind(this);

      var _onTouchMove = function _onTouchMove(e) {
        _newArrowCheck(this, _this2);

        clearTimeout(this.timeoutEvent);
        onTouchMove && onTouchMove(e);
      }.bind(this);

      var _onTouchEnd = function _onTouchEnd(e) {
        var _this5 = this;

        _newArrowCheck(this, _this2);

        var spanTime = new Date().getTime() - this.startTime;

        if (spanTime < 350) {
          clearTimeout(this.timeoutEvent);
        }

        if (hoverClass) {
          this.setState(function () {
            _newArrowCheck(this, _this5);

            return {
              touch: false
            };
          }.bind(this));
          setTimeout(function () {
            var _this6 = this;

            _newArrowCheck(this, _this5);

            if (!this.state.touch) {
              this.setState(function () {
                _newArrowCheck(this, _this6);

                return {
                  hover: false
                };
              }.bind(this));
            }
          }.bind(this), hoverStayTime);
        }

        onTouchEnd && onTouchEnd(e);
      }.bind(this);

      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['hoverClass', 'onTouchStart', 'onTouchEnd', 'onTouchMove', 'className', 'hoverStartTime', 'hoverStayTime']), other, {
        className: cls,
        onTouchStart: _onTouchStart,
        onTouchEnd: _onTouchEnd,
        onTouchMove: _onTouchMove
      }), this.props.children);
    }
  }]);

  return View;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDistanceUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parseDistanceUnit; });
function isBoolean(value) {
  return typeof value === 'boolean';
}

function isNumber(value) {
  return typeof value === 'number';
}

function isString(value) {
  return typeof value === 'string';
}

function isFunction(value) {
  return typeof value === 'function';
}

function isDistanceUnit(value) {
  return isNumber(value) || isString(value) && /^[+-]?\d*\.\d*(px)?$/i.test(value);
}

function parseDistanceUnit(value) {
  if (isNumber(value) || isString(value) && /^[+-]?\d*\.\d*$/.test(value)) {
    return value + 'px';
  } else if (isString(value) && /^[+-]?\d*\.\d*px$/i.test(value)) {
    return value;
  }

  return '0px';
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = typeof document === 'undefined' ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  location: {
    hash: ''
  }
} : document; // eslint-disable-line

var win = typeof window === 'undefined' ? {
  document: doc,
  navigator: {
    userAgent: ''
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {}
} : window; // eslint-disable-line



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MASK_HEIGHT; });
var TOP = 102;
var LINE_HEIGHT = 34;
var MASK_HEIGHT = LINE_HEIGHT * 7;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calcDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeNumber; });
var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var formatTime = function formatTime(time) {
  _newArrowCheck(this, _this);

  if (time === null) return '';
  var sec = Math.round(time % 60);
  var min = Math.round((time - sec) / 60);
  return "".concat(min < 10 ? "0".concat(min) : min, ":").concat(sec < 10 ? "0".concat(sec) : sec);
}.bind(this);
var calcDist = function calcDist(x, y) {
  _newArrowCheck(this, _this);

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}.bind(this);
var normalizeNumber = function normalizeNumber(number) {
  _newArrowCheck(this, _this);

  return Math.max(-1, Math.min(number, 1));
}.bind(this);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_view__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_0__components_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_block__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return __WEBPACK_IMPORTED_MODULE_1__components_block__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_image__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return __WEBPACK_IMPORTED_MODULE_2__components_image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_text__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_3__components_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_switch__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_4__components_switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_5__components_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_icon__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_6__components_icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_radio__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_7__components_radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_input__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_8__components_input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_scroll_view__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return __WEBPACK_IMPORTED_MODULE_9__components_scroll_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_swiper__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return __WEBPACK_IMPORTED_MODULE_10__components_swiper__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return __WEBPACK_IMPORTED_MODULE_10__components_swiper__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_checkbox__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_11__components_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_picker__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return __WEBPACK_IMPORTED_MODULE_12__components_picker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_label__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_13__components_label__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_textarea__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_14__components_textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_slider__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_15__components_slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_video__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return __WEBPACK_IMPORTED_MODULE_16__components_video__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_audio__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return __WEBPACK_IMPORTED_MODULE_17__components_audio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_camera__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return __WEBPACK_IMPORTED_MODULE_18__components_camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_progress__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return __WEBPACK_IMPORTED_MODULE_19__components_progress__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_rich_text__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return __WEBPACK_IMPORTED_MODULE_20__components_rich_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_form__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_21__components_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_radio_radio_group__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_22__components_radio_radio_group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_checkbox_checkbox_group__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return __WEBPACK_IMPORTED_MODULE_23__components_checkbox_checkbox_group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_tabbar__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tabbar", function() { return __WEBPACK_IMPORTED_MODULE_24__components_tabbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_tabbar_container__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarContainer", function() { return __WEBPACK_IMPORTED_MODULE_25__components_tabbar_container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tabbar_panel__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarPanel", function() { return __WEBPACK_IMPORTED_MODULE_26__components_tabbar_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_navigator__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return __WEBPACK_IMPORTED_MODULE_27__components_navigator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_web_view__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return __WEBPACK_IMPORTED_MODULE_28__components_web_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_open_data__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return __WEBPACK_IMPORTED_MODULE_29__components_open_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_canvas__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return __WEBPACK_IMPORTED_MODULE_30__components_canvas__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_movable_view__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return __WEBPACK_IMPORTED_MODULE_31__components_movable_view__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return __WEBPACK_IMPORTED_MODULE_31__components_movable_view__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_cover_view__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return __WEBPACK_IMPORTED_MODULE_32__components_cover_view__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return __WEBPACK_IMPORTED_MODULE_32__components_cover_view__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_picker_view__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return __WEBPACK_IMPORTED_MODULE_33__components_picker_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_picker_view_column__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return __WEBPACK_IMPORTED_MODULE_34__components_picker_view_column__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_pull_down_refresh_index__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PullDownRefresh", function() { return __WEBPACK_IMPORTED_MODULE_35__components_pull_down_refresh_index__["a"]; });





































/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "body, html {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n", ""]);



/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Block = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Block, _Nerv$Component);

  function Block(props) {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, _getPrototypeOf(Block).call(this, props));
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", null, this.props.children);
    }
  }]);

  return Block;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






__webpack_require__(20);

var Image = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Image, _Nerv$Component);

  function Image() {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
    _this.state = {
      isLoaded: false,
      aspectFillMode: 'width'
    };
    _this.imageOnLoad = _this.imageOnLoad.bind(_assertThisInitialized(_this));
    _this.observer = {};
    return _this;
  }

  _createClass(Image, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.lazyLoad) {
        this.observer = new IntersectionObserver(function (entries, observer) {
          var _this3 = this;

          _newArrowCheck(this, _this2);

          // 异步 api 关系
          if (entries[entries.length - 1].isIntersecting) {
            this.setState({
              isLoaded: true
            }, function () {
              _newArrowCheck(this, _this3);

              __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.findDOMNode(this).children[0].src = this.props.src;
            }.bind(this));
          }
        }.bind(this), {
          rootMargin: '300px 0px'
        });
        this.observer.observe(this.imgRef);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.disconnect && this.observer.disconnect();
    }
  }, {
    key: "imageOnLoad",
    value: function imageOnLoad(e) {
      var onLoad = this.props.onLoad;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        writable: true,
        value: {
          width: this.imgRef.width,
          height: this.imgRef.height
        }
      });

      if (this.imgRef.naturalWidth > this.imgRef.naturalHeight) {
        this.setState({
          aspectFillMode: 'width'
        });
      } else {
        this.setState({
          aspectFillMode: 'height'
        });
      }

      onLoad && onLoad(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          className = _this$props.className,
          src = _this$props.src,
          style = _this$props.style,
          mode = _this$props.mode,
          onError = _this$props.onError,
          lazyLoad = _this$props.lazyLoad,
          imgProps = _this$props.imgProps,
          reset = _objectWithoutProperties(_this$props, ["className", "src", "style", "mode", "onError", "lazyLoad", "imgProps"]);

      var aspectFillMode = this.state.aspectFillMode;
      var cls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-img', {
        'taro-img__widthfix': mode === 'widthFix'
      }, className);
      var imgCls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-img__mode-' + (mode || 'scaleToFill').toLowerCase().replace(/\s/g, ''), _defineProperty({}, "taro-img__mode-aspectfill--".concat(aspectFillMode), mode === 'aspectFill'));
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
        className: cls,
        style: style
      }, reset), lazyLoad ? __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("img", _extends({
        ref: function (img) {
          _newArrowCheck(this, _this4);

          return this.imgRef = img;
        }.bind(this),
        className: imgCls,
        "data-src": src,
        onLoad: this.imageOnLoad,
        onError: onError
      }, imgProps)) : __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("img", _extends({
        ref: function (img) {
          _newArrowCheck(this, _this4);

          return this.imgRef = img;
        }.bind(this),
        className: imgCls,
        src: src,
        onLoad: this.imageOnLoad,
        onError: onError
      }, imgProps)));
    }
  }]);

  return Image;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(19);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "img[src=\"\"] {\n  opacity: 0; }\n\n.taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px; }\n  .taro-img.taro-img__widthfix {\n    height: 100%; }\n  .taro-img__mode-scaletofill {\n    width: 100%;\n    height: 100%; }\n  .taro-img__mode-aspectfit {\n    max-width: 100%;\n    max-height: 100%; }\n  .taro-img__mode-aspectfill {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n    .taro-img__mode-aspectfill--width {\n      min-width: 100%;\n      height: 100%; }\n    .taro-img__mode-aspectfill--height {\n      width: 100%;\n      min-height: 100%; }\n  .taro-img__mode-widthfix {\n    width: 100%; }\n  .taro-img__mode-top {\n    width: 100%; }\n  .taro-img__mode-bottom {\n    width: 100%;\n    position: absolute;\n    bottom: 0; }\n  .taro-img__mode-left {\n    height: 100%; }\n  .taro-img__mode-right {\n    position: absolute;\n    height: 100%;\n    right: 0; }\n  .taro-img__mode-topright {\n    position: absolute;\n    right: 0; }\n  .taro-img__mode-bottomleft {\n    position: absolute;\n    bottom: 0; }\n  .taro-img__mode-bottomright {\n    position: absolute;\n    right: 0;\n    bottom: 0; }\n", ""]);



/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function () {
   // Exit early if we're not running in a browser.

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object') {
    return;
  } // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.


  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }

    return;
  }
  /**
   * A local reference to the document.
   */


  var document = window.document;
  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */

  var registry = [];
  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */

  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */


  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};

    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }

    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    } // Binds and throttles `this._checkForIntersections`.


    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
  }
  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */


  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */

  IntersectionObserver.prototype.POLL_INTERVAL = null;
  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */

  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */

  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();

    this._observationTargets.push({
      element: target,
      entry: null
    });

    this._monitorIntersections();

    this._checkForIntersections();
  };
  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */


  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });

    if (!this._observationTargets.length) {
      this._unmonitorIntersections();

      this._unregisterInstance();
    }
  };
  /**
   * Stops observing all target elements for intersection changes.
   */


  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];

    this._unmonitorIntersections();

    this._unregisterInstance();
  };
  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */


  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();

    this._queuedEntries = [];
    return records;
  };
  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */


  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }

      return t !== a[i - 1];
    });
  };
  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */


  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }

      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    }); // Handles shorthand.

    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @private
   */


  IntersectionObserver.prototype._monitorIntersections = function () {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true; // If a poll interval is set, use polling instead of listening to
      // resize and scroll events or DOM mutations.

      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
      } else {
        addEvent(window, 'resize', this._checkForIntersections, true);
        addEvent(document, 'scroll', this._checkForIntersections, true);

        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);

          this._domObserver.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @private
   */


  IntersectionObserver.prototype._unmonitorIntersections = function () {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;
      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;
      removeEvent(window, 'resize', this._checkForIntersections, true);
      removeEvent(document, 'scroll', this._checkForIntersections, true);

      if (this._domObserver) {
        this._domObserver.disconnect();

        this._domObserver = null;
      }
    }
  };
  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */


  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();

    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);

      var rootContainsTarget = this._rootContainsTarget(target);

      var oldEntry = item.entry;

      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */


  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;
    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

      if (parentComputedStyle.display == 'none') return;

      if (parent == this.root || parent == document) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      } // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.


      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        if (!intersectionRect) break;
      }

      parent = getParentNode(parent);
    }

    return intersectionRect;
  };
  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */


  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;

    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }

    return this._expandRectByRootMargin(rootRect);
  };
  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */


  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });

    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */


  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

    if (oldRatio === newRatio) return;

    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.

      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */


  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };
  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */


  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target);
  };
  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */


  IntersectionObserver.prototype._registerInstance = function () {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */


  IntersectionObserver.prototype._unregisterInstance = function () {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };
  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */


  function now() {
    return window.performance && performance.now && performance.now();
  }
  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */


  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */


  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }
  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */


  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }
  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */


  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */


  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect(); // Older IE

    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }

    return rect;
  }
  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */


  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */


  function containsDeep(parent, child) {
    var node = child;

    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }

    return false;
  }
  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */


  function getParentNode(node) {
    var parent = node.parentNode;

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }

    if (parent && parent.assignedSlot) {
      // If the parent is distributed in a <slot>, return the parent of a slot.
      return parent.assignedSlot.parentNode;
    }

    return parent;
  } // Exposes the constructors globally.


  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Text = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Text, _Nerv$Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$selectabl = _this$props.selectable,
          selectable = _this$props$selectabl === void 0 ? false : _this$props$selectabl;
      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('taro-text', {
        'taro-text__selectable': selectable
      }, className);
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("span", _extends({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['selectable', 'className']), {
        className: cls
      }), this.props.children);
    }
  }]);

  return Text;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(23);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .taro-text__selectable {\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    -ms-user-select: text;\n    user-select: text; }\n", ""]);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var types = {
  "switch": 'switch',
  checkbox: 'check'
};

function parseType(type) {
  if (!types[type]) throw new Error('unexpected type');
  return types[type];
}

var Switch = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Switch, _Nerv$Component);

  function Switch() {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).apply(this, arguments));
    _this.state = {
      checked: _this.props.checked
    };
    _this.switchChange = _this.switchChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Switch, [{
    key: "switchChange",
    value: function switchChange(e) {
      var onChange = this.props.onChange;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.checked
        }
      });
      onChange && onChange(e);
      this.setState({
        checked: e.target.checked
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('checked')) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'switch' : _this$props$type,
          className = _this$props.className,
          color = _this$props.color;
      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "weui-".concat(parseType(type)), true), className);
      var sty;

      if (this.state.checked) {
        sty = {
          borderColor: color || '04BE02',
          backgroundColor: color || '04BE02'
        };
      } else {
        sty = '';
      }

      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("input", _extends({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['className', 'checked', 'onChange']), {
        className: cls,
        checked: this.state.checked,
        type: "checkbox",
        onChange: this.switchChange,
        style: sty
      }));
    }
  }]);

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Button = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Button, _Nerv$Component);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
    _this.state = {
      hover: false,
      touch: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.startTimer && clearTimeout(this.startTimer);
      this.endTimer && clearTimeout(this.endTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          className = _this$props.className,
          style = _this$props.style,
          onClick = _this$props.onClick,
          onTouchStart = _this$props.onTouchStart,
          onTouchEnd = _this$props.onTouchEnd,
          _this$props$hoverClas = _this$props.hoverClass,
          hoverClass = _this$props$hoverClas === void 0 ? 'button-hover' : _this$props$hoverClas,
          _this$props$hoverStar = _this$props.hoverStartTime,
          hoverStartTime = _this$props$hoverStar === void 0 ? 20 : _this$props$hoverStar,
          _this$props$hoverStay = _this$props.hoverStayTime,
          hoverStayTime = _this$props$hoverStay === void 0 ? 70 : _this$props$hoverStay,
          size = _this$props.size,
          plain = _this$props.plain,
          _this$props$loading = _this$props.loading,
          loading = _this$props$loading === void 0 ? false : _this$props$loading,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'default' : _this$props$type;
      var cls = className || __WEBPACK_IMPORTED_MODULE_3_classnames___default()('weui-btn', (_classNames = {}, _defineProperty(_classNames, "".concat(hoverClass), this.state.hover && !disabled && hoverClass !== 'none'), _defineProperty(_classNames, "weui-btn_plain-".concat(type), plain), _defineProperty(_classNames, "weui-btn_".concat(type), !plain && type), _defineProperty(_classNames, 'weui-btn_mini', size === 'mini'), _defineProperty(_classNames, 'weui-btn_loading', loading), _defineProperty(_classNames, 'weui-btn_disabled', disabled), _classNames));

      var _onTouchStart = function _onTouchStart(e) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        this.setState(function () {
          _newArrowCheck(this, _this3);

          return {
            touch: true
          };
        }.bind(this));

        if (hoverClass && hoverClass !== 'none' && !disabled) {
          this.startTimer = setTimeout(function () {
            var _this4 = this;

            _newArrowCheck(this, _this3);

            if (this.state.touch) {
              this.setState(function () {
                _newArrowCheck(this, _this4);

                return {
                  hover: true
                };
              }.bind(this));
            }
          }.bind(this), hoverStartTime);
        }

        onTouchStart && onTouchStart(e);
      }.bind(this);

      var _onTouchEnd = function _onTouchEnd(e) {
        var _this5 = this;

        _newArrowCheck(this, _this2);

        this.setState(function () {
          _newArrowCheck(this, _this5);

          return {
            touch: false
          };
        }.bind(this));

        if (hoverClass && hoverClass !== 'none' && !disabled) {
          this.endTimer = setTimeout(function () {
            var _this6 = this;

            _newArrowCheck(this, _this5);

            if (!this.state.touch) {
              this.setState(function () {
                _newArrowCheck(this, _this6);

                return {
                  hover: false
                };
              }.bind(this));
            }
          }.bind(this), hoverStayTime);
        }

        onTouchEnd && onTouchEnd(e);
      }.bind(this);

      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("button", _extends({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['hoverClass', 'onTouchStart', 'onTouchEnd']), {
        className: cls,
        style: style,
        onClick: onClick,
        disabled: disabled,
        onTouchStart: _onTouchStart,
        onTouchEnd: _onTouchEnd
      }), loading && __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("i", {
        "class": "weui-loading"
      }), children);
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8; }\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent; }\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7; }\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19; }\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent; }\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7; }\n", ""]);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_omit_js__);
var _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var Icon = function Icon(props) {
  _newArrowCheck(this, _this);

  var type = props.type,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$size = props.size,
      size = _props$size === void 0 ? '23' : _props$size,
      color = props.color;
  if (type) type = type.replace(/_/g, '-');
  var cls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(_defineProperty({}, "weui-icon-".concat(type), true), className);
  var style = {
    'font-size': size + 'px',
    color: color
  };
  return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("i", _extends({}, __WEBPACK_IMPORTED_MODULE_3_omit_js___default()(props, ['type', 'className']), {
    className: cls,
    style: style
  }));
}.bind(this);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Radio = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Radio, _Nerv$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Radio).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          className = _this$props.className,
          checked = _this$props.checked,
          name = _this$props.name,
          style = _this$props.style;
      var key = this.props["for"];
      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('weui-check', className);
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("span", {
        className: "weui-cells_checkbox",
        onClick: onChange && function (e) {
          _newArrowCheck(this, _this);

          return onChange(e, key);
        }.bind(this),
        style: style
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("input", _extends({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['className', 'checked', 'onChange', 'name', 'id', 'type', 'style']), {
        id: key,
        type: "radio",
        name: name,
        className: cls,
        checked: checked
      })), className ? false : __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("i", {
        className: "weui-icon-checked"
      }), this.props.children);
    }
  }]);

  return Radio;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Radio);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







function getTrueType(type, confirmType, password) {
  if (!type) {
    throw new Error('unexpected type');
  }

  if (confirmType === 'search') type = 'search';
  if (password) type = 'password';
  if (type === 'digit') type = 'number';
  return type;
}

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

var Input = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Input, _Nerv$Component);

  function Input() {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.handleComposition = _this.handleComposition.bind(_assertThisInitialized(_this)); // input hook

    _this.isOnComposition = false;
    _this.onInputExcuted = false;
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 修复无法选择文件
      if (this.props.type === 'file') {
        this.inputRef.addEventListener('change', this.onInput);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 修复无法选择文件
      if (this.props.type === 'file') {
        this.inputRef.removeEventListener('change', this.onInput);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          maxLength = _this$props.maxLength,
          confirmType = _this$props.confirmType,
          password = _this$props.password,
          _this$props$onInput = _this$props.onInput,
          onInput = _this$props$onInput === void 0 ? '' : _this$props$onInput,
          _this$props$onChange = _this$props.onChange,
          onChange = _this$props$onChange === void 0 ? '' : _this$props$onChange;

      if (!this.isOnComposition && !this.onInputExcuted) {
        var value = e.target.value;
        var inputType = getTrueType(type, confirmType, password);
        this.onInputExcuted = true;
        /* 修复 number 类型 maxLength 无效 */

        if (inputType === 'number' && value && maxLength <= value.length) {
          value = value.substring(0, maxLength);
          e.target.value = value;
        }

        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            value: value
          }
        }); // 修复 IOS 光标跳转问题

        if (!(['number', 'file'].indexOf(inputType) >= 0)) {
          var pos = e.target.selectionEnd;
          setTimeout(function () {
            _newArrowCheck(this, _this2);

            e.target.selectionStart = pos;
            e.target.selectionEnd = pos;
          }.bind(this));
        }

        if (onChange) return onChange(e);
        if (onInput) return onInput(e);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var onFocus = this.props.onFocus;
      this.onInputExcuted = false;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onFocus && onFocus(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onBlur && onBlur(e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var _this$props2 = this.props,
          onConfirm = _this$props2.onConfirm,
          onKeyDown = _this$props2.onKeyDown;
      this.onInputExcuted = false;
      onKeyDown && onKeyDown(e);

      if (e.keyCode === 13 && onConfirm) {
        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            value: e.target.value
          }
        });
        onConfirm(e);
      }
    }
  }, {
    key: "handleComposition",
    value: function handleComposition(e) {
      if (!(e.target instanceof HTMLInputElement)) return;

      if (e.type === 'compositionend') {
        this.isOnComposition = false;
        this.onInputExcuted = false;
        this.onInput(e);
      } else {
        this.isOnComposition = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          _this$props3$classNam = _this$props3.className,
          className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
          placeholder = _this$props3.placeholder,
          _this$props3$type = _this$props3.type,
          type = _this$props3$type === void 0 ? 'text' : _this$props3$type,
          password = _this$props3.password,
          disabled = _this$props3.disabled,
          maxLength = _this$props3.maxLength,
          _this$props3$confirmT = _this$props3.confirmType,
          confirmType = _this$props3$confirmT === void 0 ? '' : _this$props3$confirmT,
          _this$props3$focus = _this$props3.focus,
          focus = _this$props3$focus === void 0 ? false : _this$props3$focus,
          value = _this$props3.value;
      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('weui-input', className);
      var otherProps = __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['className', 'placeholder', 'disabled', 'max', 'onChange', 'onFocus', 'onBlur', 'type', 'focus']);

      if ('value' in this.props) {
        otherProps.value = fixControlledValue(value);
      }

      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("input", _extends({
        ref: function (input) {
          _newArrowCheck(this, _this3);

          this.inputRef = input;
        }.bind(this)
      }, otherProps, {
        className: cls,
        placeholder: placeholder,
        disabled: disabled,
        maxlength: maxLength,
        onInput: this.onInput,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        autofocus: focus,
        onKeyDown: this.onKeyDown,
        type: getTrueType(type, confirmType, password),
        onCompositionStart: this.handleComposition,
        onCompositionEnd: this.handleComposition
      }));
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

Input.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "input {\n  display: block;\n  height: 24px;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap; }\n", ""]);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }







function easeOutScroll() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var callback = arguments.length > 2 ? arguments[2] : undefined;

  if (from === to || typeof from !== 'number') {
    return;
  }

  var change = to - from;
  var dur = 500;
  var sTime = +new Date();

  function linear(t, b, c, d) {
    return c * t / d + b;
  }

  var isLarger = to >= from;

  function step() {
    from = linear(+new Date() - sTime, from, change, dur);

    if (isLarger && from >= to || !isLarger && to >= from) {
      callback(to);
      return;
    }

    callback(from);
    requestAnimationFrame(step);
  }

  step();
}

function throttle(fn, delay) {
  var timer = null;
  return function () {
    for (var _len = arguments.length, arrs = new Array(_len), _key = 0; _key < _len; _key++) {
      arrs[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(void 0, arrs);
    }, delay);
  };
}

function scrollIntoView(id) {
  document.querySelector("#".concat(id)).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start'
  });
}

function scrollVertical(top, isAnimation) {
  var _this = this;

  if (isAnimation) {
    easeOutScroll(this._scrollTop, top, function (pos) {
      _newArrowCheck(this, _this);

      console.log('props.scrollY', this.container, this._scrollTop);
      if (this.container) this.container.scrollTop = pos;
    }.bind(this));
  } else {
    if (this.container) this.container.scrollTop = top;
  }

  this._scrollTop = top;
}

function scrollHorizontal(left, isAnimation) {
  var _this2 = this;

  if (isAnimation) {
    easeOutScroll(this._scrollLeft, left, function (pos) {
      _newArrowCheck(this, _this2);

      if (this.container) this.container.scrollLeft = pos;
    }.bind(this));
  } else {
    if (this.container) this.container.scrollLeft = left;
  }

  this._scrollLeft = left;
}

var ScrollView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(ScrollView, _Nerv$Component);

  function ScrollView() {
    var _this4 = this;

    var _this3;

    _classCallCheck(this, ScrollView);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollView).apply(this, arguments));

    _defineProperty(_assertThisInitialized(_this3), "onTouchMove", function (e) {
      _newArrowCheck(this, _this4);

      e.stopPropagation();
    }.bind(this));

    return _this3;
  }

  _createClass(ScrollView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll(this.props, true);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.handleScroll(nextProps);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(props) {
      var _this5 = this;

      var isInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // scrollIntoView
      if (props.scrollIntoView && typeof props.scrollIntoView === 'string' && document && document.querySelector && document.querySelector("#".concat(props.scrollIntoView))) {
        if (isInit) {
          setTimeout(function () {
            _newArrowCheck(this, _this5);

            return scrollIntoView(props.scrollIntoView);
          }.bind(this), 500);
        } else {
          scrollIntoView(props.scrollIntoView);
        }
      } else {
        var isAnimation = 'scrollWithAnimation' in props; // Y 轴滚动

        if (props.scrollY && typeof props.scrollTop === 'number' && props.scrollTop !== this._scrollTop) {
          if (isInit) {
            setTimeout(function () {
              _newArrowCheck(this, _this5);

              return scrollVertical.bind(this)(props.scrollTop, isAnimation);
            }.bind(this), 10);
          } else {
            scrollVertical.bind(this)(props.scrollTop, isAnimation);
          }
        } // X 轴滚动


        if (props.scrollX && typeof props.scrollLeft === 'number' && props.scrollLeft !== this._scrollLeft) {
          if (isInit) {
            setTimeout(function () {
              _newArrowCheck(this, _this5);

              return scrollHorizontal.bind(this)(props.scrollLeft, isAnimation);
            }.bind(this), 10);
          } else {
            scrollHorizontal.bind(this)(props.scrollLeft, isAnimation);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this6 = this;

      var _this$props = this.props,
          className = _this$props.className,
          onScroll = _this$props.onScroll,
          onScrollToUpper = _this$props.onScrollToUpper,
          onScrollToLower = _this$props.onScrollToLower,
          onTouchMove = _this$props.onTouchMove,
          scrollX = _this$props.scrollX,
          scrollY = _this$props.scrollY;
      var _this$props2 = this.props,
          _this$props2$upperThr = _this$props2.upperThreshold,
          upperThreshold = _this$props2$upperThr === void 0 ? 50 : _this$props2$upperThr,
          _this$props2$lowerThr = _this$props2.lowerThreshold,
          lowerThreshold = _this$props2$lowerThr === void 0 ? 50 : _this$props2$lowerThr;
      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('taro-scroll', (_classNames = {}, _defineProperty(_classNames, "taro-scroll-view__scroll-x", scrollX), _defineProperty(_classNames, "taro-scroll-view__scroll-y", scrollY), _classNames), className);
      upperThreshold = parseInt(upperThreshold);
      lowerThreshold = parseInt(lowerThreshold);

      var uperAndLower = function uperAndLower(e) {
        _newArrowCheck(this, _this6);

        if (!this.container) return;
        var _this$container = this.container,
            offsetWidth = _this$container.offsetWidth,
            offsetHeight = _this$container.offsetHeight,
            scrollLeft = _this$container.scrollLeft,
            scrollTop = _this$container.scrollTop,
            scrollHeight = _this$container.scrollHeight,
            scrollWidth = _this$container.scrollWidth;

        if (onScrollToLower && (this.props.scrollY && offsetHeight + scrollTop + lowerThreshold >= scrollHeight || this.props.scrollX && offsetWidth + scrollLeft + lowerThreshold >= scrollWidth)) {
          onScrollToLower(e);
        }

        if (onScrollToUpper && (this.props.scrollY && scrollTop <= upperThreshold || this.props.scrollX && scrollLeft <= upperThreshold)) {
          onScrollToUpper(e);
        }
      }.bind(this);

      var uperAndLowerThrottle = throttle(uperAndLower, 200);

      var _onScroll = function _onScroll(e) {
        _newArrowCheck(this, _this6);

        var _this$container2 = this.container,
            scrollLeft = _this$container2.scrollLeft,
            scrollTop = _this$container2.scrollTop,
            scrollHeight = _this$container2.scrollHeight,
            scrollWidth = _this$container2.scrollWidth;
        this._scrollLeft = scrollLeft;
        this._scrollTop = scrollTop;
        Object.defineProperty(e, 'detail', {
          enumerable: true,
          writable: true,
          value: {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollHeight: scrollHeight,
            scrollWidth: scrollWidth
          }
        });
        uperAndLowerThrottle(e);
        onScroll && onScroll(e);
      }.bind(this);

      var _onTouchMove = function _onTouchMove(e) {
        _newArrowCheck(this, _this6);

        onTouchMove ? onTouchMove(e) : this.onTouchMove(e);
      }.bind(this);

      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
        ref: function (container) {
          _newArrowCheck(this, _this6);

          this.container = container;
        }.bind(this)
      }, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['className', 'scrollTop', 'scrollLeft']), {
        className: cls,
        onScroll: _onScroll,
        onTouchMove: _onTouchMove,
        onLoad: function (e) {
          _newArrowCheck(this, _this6);

          console.log('onload', e);
        }.bind(this)
      }), this.props.children);
    }
  }]);

  return ScrollView;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ScrollView);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".taro-scroll {\n  -webkit-overflow-scrolling: auto; }\n  .taro-scroll::-webkit-scrollbar {\n    display: none; }\n\n.taro-scroll-view {\n  overflow: hidden; }\n  .taro-scroll-view__scroll-x {\n    overflow-x: scroll;\n    overflow-y: hidden; }\n  .taro-scroll-view__scroll-y {\n    overflow-x: hidden;\n    overflow-y: scroll; }\n", ""]);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Swiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SwiperItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_swiper__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_swiper_dist_css_swiper_min_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_swiper_dist_css_swiper_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_swiper_dist_css_swiper_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_index_scss__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_index_scss__);
var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var INSTANCE_ID = 0;

var SwiperItem = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(SwiperItem, _Nerv$Component);

  function SwiperItem() {
    _classCallCheck(this, SwiperItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SwiperItem).apply(this, arguments));
  }

  _createClass(SwiperItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          itemId = _this$props.itemId,
          children = _this$props.children,
          restProps = _objectWithoutProperties(_this$props, ["className", "style", "itemId", "children"]);

      var cls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('swiper-slide', className);
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
        className: cls,
        style: style,
        "item-id": itemId
      }, restProps), children);
    }
  }]);

  return SwiperItem;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

var createEvent = function createEvent(type) {
  _newArrowCheck(this, _this);

  var e;

  try {
    e = new TouchEvent(type);
  } catch (err) {
    e = document.createEvent('Event');
    e.initEvent(type, true, true);
  }

  return e;
}.bind(this);

var Swiper = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(Swiper, _Nerv$Component2);

  function Swiper() {
    var _this2;

    _classCallCheck(this, Swiper);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Swiper).apply(this, arguments));
    _this2.$el = null;
    _this2._id = INSTANCE_ID + 1;
    INSTANCE_ID++;
    _this2._$current = 0;
    _this2._$width = 0;
    _this2._$height = 0;
    return _this2;
  }

  _createClass(Swiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _this$props2 = this.props,
          _this$props2$autoplay = _this$props2.autoplay,
          autoplay = _this$props2$autoplay === void 0 ? false : _this$props2$autoplay,
          _this$props2$interval = _this$props2.interval,
          interval = _this$props2$interval === void 0 ? 5000 : _this$props2$interval,
          _this$props2$duration = _this$props2.duration,
          duration = _this$props2$duration === void 0 ? 500 : _this$props2$duration,
          _this$props2$current = _this$props2.current,
          current = _this$props2$current === void 0 ? 0 : _this$props2$current,
          _this$props2$displayM = _this$props2.displayMultipleItems,
          displayMultipleItems = _this$props2$displayM === void 0 ? 1 : _this$props2$displayM,
          circular = _this$props2.circular,
          vertical = _this$props2.vertical,
          spaceBetween = _this$props2.spaceBetween;
      var that = this;
      var opt = {
        // 指示器
        pagination: {
          el: ".taro-swiper-".concat(this._id, " .swiper-container .swiper-pagination")
        },
        direction: vertical ? 'vertical' : 'horizontal',
        loop: circular,
        slidesPerView: parseFloat(displayMultipleItems, 10),
        initialSlide: parseInt(current, 10),
        speed: parseInt(duration, 10),
        observer: true,
        observeParents: true,
        on: {
          slideChange: function slideChange() {
            var e = createEvent('touchend');

            try {
              Object.defineProperty(e, 'detail', {
                enumerable: true,
                value: {
                  current: this.realIndex
                }
              });
            } catch (err) {}

            that._$current = this.realIndex;
            that.handleOnChange(e);
          },
          transitionEnd: function transitionEnd() {
            var e = createEvent('touchend');

            try {
              Object.defineProperty(e, 'detail', {
                enumerable: true,
                value: {
                  current: this.realIndex
                }
              });
            } catch (err) {}

            that.handleOnAnimationFinish(e);
          },
          observerUpdate: function observerUpdate(e) {
            var _this4 = this;

            _newArrowCheck(this, _this3);

            if (e.target && e.target.className === 'taro_page' && e.target.style.display === 'block' && e.target.contains(this.$el)) {
              if (this.props.autoplay) {
                setTimeout(function () {
                  _newArrowCheck(this, _this4);

                  this.mySwiper.slideTo(this._$current);
                }.bind(this), 1000);
              }
            }
          }.bind(this)
        }
      }; // 自动播放

      if (autoplay) {
        opt.autoplay = {
          delay: parseInt(interval, 10),
          stopOnLastSlide: true,
          disableOnInteraction: false
        };
      } // 两端距离


      if (spaceBetween) {
        opt.spaceBetween = spaceBetween;
      }

      this.mySwiper = new __WEBPACK_IMPORTED_MODULE_3_swiper__["a" /* default */](this.$el, opt);
      setTimeout(function () {
        _newArrowCheck(this, _this3);

        this.mySwiper.update();
      }.bind(this), 500);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.mySwiper) {
        var nextCurrent = typeof nextProps.current === 'number' ? nextProps.current : this._$current || 0;

        if (!this.mySwiper.isBeginning && !this.mySwiper.isEnd) {
          // 是否衔接滚动模式
          if (nextProps.circular) {
            this.mySwiper.loopDestroy();
            this.mySwiper.loopCreate();
            this.mySwiper.slideToLoop(parseInt(nextCurrent, 10)); // 更新下标
          } else {
            this.mySwiper.slideTo(parseInt(nextCurrent, 10)); // 更新下标
          }
        }

        var autoplay = this.mySwiper.autoplay; // 判断是否需要停止或开始自动轮播

        if (autoplay.running !== nextProps.autoplay) {
          if (nextProps.autoplay) {
            autoplay.start();
          } else {
            autoplay.stop();
          }
        }

        if (!autoplay.paused) {
          autoplay.run();
          autoplay.paused = false;
        }

        this.mySwiper.update(); // 更新子元素
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.mySwiper) return;

      if (this.props.autoplay) {
        if (this._$width !== this.mySwiper.width || this._$height !== this.mySwiper.height) {
          this.mySwiper.autoplay.run();
        }
      }

      this._$width = this.mySwiper.width;
      this._$height = this.mySwiper.height;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.$el = null;
      if (this.mySwiper) this.mySwiper.destroy();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(e) {
      var func = this.props.onChange;
      typeof func === 'function' && func(e);
    }
  }, {
    key: "handleOnAnimationFinish",
    value: function handleOnAnimationFinish(e) {
      var func = this.props.onAnimationFinish;
      typeof func === 'function' && func(e);
    }
  }, {
    key: "parsePX",
    value: function parsePX() {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0px';
      return parseFloat(s.replace(/r*px/i, ''), 10);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props3 = this.props,
          className = _this$props3.className,
          style = _this$props3.style,
          vertical = _this$props3.vertical,
          previousMargin = _this$props3.previousMargin,
          nextMargin = _this$props3.nextMargin,
          indicatorColor = _this$props3.indicatorColor,
          indicatorActiveColor = _this$props3.indicatorActiveColor;
      var defaultIndicatorColor = indicatorColor || 'rgba(0, 0, 0, .3)';
      var defaultIndicatorActiveColor = indicatorActiveColor || '#000';
      var cls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()("taro-swiper-".concat(this._id), className);
      var sty = Object.assign({
        paddingTop: vertical ? this.parsePX(previousMargin) : 0,
        paddingRight: vertical ? 0 : this.parsePX(nextMargin),
        paddingBottom: vertical ? this.parsePX(nextMargin) : 0,
        paddingLeft: vertical ? 0 : this.parsePX(previousMargin),
        overflow: 'hidden'
      }, style);
      var paginationCls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('swiper-pagination', {
        'swiper-pagination-hidden': !this.props.indicatorDots,
        'swiper-pagination-bullets': this.props.indicatorDots
      });
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: cls,
        style: sty
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "swiper-container",
        style: {
          overflow: 'visible'
        },
        ref: function (el) {
          _newArrowCheck(this, _this5);

          this.$el = el;
        }.bind(this)
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: "<style type='text/css'>\n              .taro-swiper-".concat(this._id, " .swiper-container .swiper-pagination-bullet { background: ").concat(defaultIndicatorColor, " }\n              .taro-swiper-").concat(this._id, " .swiper-container .swiper-pagination-bullet-active { background: ").concat(defaultIndicatorActiveColor, " }\n              </style>")
        }
      }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "swiper-wrapper"
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: paginationCls
      })));
    }
  }]);

  return Swiper;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ssr_window__ = __webpack_require__(9);
var _this = this;

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

/**
 * Swiper 4.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 1, 2018
 */


var Methods = {
  addClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["c" /* addClass */],
  removeClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["E" /* removeClass */],
  hasClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["m" /* hasClass */],
  toggleClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["H" /* toggleClass */],
  attr: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["e" /* attr */],
  removeAttr: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["D" /* removeAttr */],
  data: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["i" /* data */],
  transform: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["I" /* transform */],
  transition: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["J" /* transition */],
  on: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["u" /* on */],
  off: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["s" /* off */],
  trigger: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["L" /* trigger */],
  transitionEnd: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["K" /* transitionEnd */],
  outerWidth: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["w" /* outerWidth */],
  outerHeight: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["v" /* outerHeight */],
  offset: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["t" /* offset */],
  css: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["h" /* css */],
  each: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["j" /* each */],
  html: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["n" /* html */],
  text: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["G" /* text */],
  is: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["p" /* is */],
  index: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["o" /* index */],
  eq: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["k" /* eq */],
  append: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["d" /* append */],
  prepend: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["z" /* prepend */],
  next: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["q" /* next */],
  nextAll: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["r" /* nextAll */],
  prev: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["A" /* prev */],
  prevAll: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["B" /* prevAll */],
  parent: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["x" /* parent */],
  parents: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["y" /* parents */],
  closest: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["g" /* closest */],
  find: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["l" /* find */],
  children: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["f" /* children */],
  remove: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["C" /* remove */],
  add: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["b" /* add */],
  styles: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["F" /* styles */]
};
Object.keys(Methods).forEach(function (methodName) {
  _newArrowCheck(this, _this);

  __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */].fn[methodName] = Methods[methodName];
}.bind(this));
var Utils = {
  deleteProps: function deleteProps(obj) {
    var _this2 = this;

    var object = obj;
    Object.keys(object).forEach(function (key) {
      _newArrowCheck(this, _this2);

      try {
        object[key] = null;
      } catch (e) {// no getter for object
      }

      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    }.bind(this));
  },
  nextTick: function nextTick(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(callback, delay);
  },
  now: function now() {
    return Date.now();
  },
  getTranslate: function getTranslate(el) {
    var _this3 = this;

    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].getComputedStyle(el, null);

    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          _newArrowCheck(this, _this3);

          return a.replace(',', '.');
        }.bind(this)).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case


      transformMatrix = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }

    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  },
  parseUrlQuery: function parseUrlQuery(url) {
    var _this4 = this;

    var query = {};
    var urlToParse = url || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.href;
    var i;
    var params;
    var param;
    var length;

    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(function (paramsPart) {
        _newArrowCheck(this, _this4);

        return paramsPart !== '';
      }.bind(this));
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }

    return query;
  },
  isObject: function isObject(o) {
    return _typeof(o) === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend: function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  }
};

var Support = function Support() {
  var testDiv = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div');
  return {
    touch: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr.touch === true || function checkTouch() {
      return !!('ontouchstart' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */] || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].DocumentTouch && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */] instanceof __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].DocumentTouch);
    }(),
    pointerEvents: !!(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.pointerEnabled || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].PointerEvent || 'maxTouchPoints' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator),
    prefixedPointerEvents: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.msPointerEnabled,
    transition: function checkTransition() {
      var style = testDiv.style;
      return 'transition' in style || 'webkitTransition' in style || 'MozTransition' in style;
    }(),
    transforms3d: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr.csstransforms3d === true || function checkTransforms3d() {
      var style = testDiv.style;
      return 'webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style;
    }(),
    flexbox: function checkFlexbox() {
      var style = testDiv.style;
      var styles$$1 = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');

      for (var i = 0; i < styles$$1.length; i += 1) {
        if (styles$$1[i] in style) return true;
      }

      return false;
    }(),
    observer: function checkObserver() {
      return 'MutationObserver' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */] || 'WebkitMutationObserver' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */];
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */];
    }()
  };
}();

var SwiperClass = /*#__PURE__*/function () {
  function SwiperClass() {
    var _this5 = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SwiperClass);

    var self = this;
    self.params = params; // Events

    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        _newArrowCheck(this, _this5);

        self.on(eventName, self.params.on[eventName]);
      }.bind(this));
    }
  }

  _createClass(SwiperClass, [{
    key: "on",
    value: function on(events, handler, priority) {
      var _this6 = this;

      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        _newArrowCheck(this, _this6);

        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      }.bind(this));
      return self;
    }
  }, {
    key: "once",
    value: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;

      function onceHandler() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
        self.off(events, onceHandler);
      }

      return self.on(events, onceHandler, priority);
    }
  }, {
    key: "off",
    value: function off(events, handler) {
      var _this7 = this;

      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        var _this8 = this;

        _newArrowCheck(this, _this7);

        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
          self.eventsListeners[event].forEach(function (eventHandler, index$$1) {
            _newArrowCheck(this, _this8);

            if (eventHandler === handler) {
              self.eventsListeners[event].splice(index$$1, 1);
            }
          }.bind(this));
        }
      }.bind(this));
      return self;
    }
  }, {
    key: "emit",
    value: function emit() {
      var _this9 = this;

      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data$$1;
      var context;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data$$1 = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data$$1 = args[0].data;
        context = args[0].context || self;
      }

      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        var _this10 = this;

        _newArrowCheck(this, _this9);

        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            _newArrowCheck(this, _this10);

            handlers.push(eventHandler);
          }.bind(this));
          handlers.forEach(function (eventHandler) {
            _newArrowCheck(this, _this10);

            eventHandler.apply(context, data$$1);
          }.bind(this));
        }
      }.bind(this));
      return self;
    }
  }, {
    key: "useModulesParams",
    value: function useModulesParams(instanceParams) {
      var _this11 = this;

      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        _newArrowCheck(this, _this11);

        var module = instance.modules[moduleName]; // Extend params

        if (module.params) {
          Utils.extend(instanceParams, module.params);
        }
      }.bind(this));
    }
  }, {
    key: "useModules",
    value: function useModules() {
      var _this12 = this;

      var modulesParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var _this13 = this;

        _newArrowCheck(this, _this12);

        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {}; // Extend instance methods and props

        if (module.instance) {
          Object.keys(module.instance).forEach(function (modulePropName) {
            _newArrowCheck(this, _this13);

            var moduleProp = module.instance[modulePropName];

            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          }.bind(this));
        } // Add event listeners


        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            _newArrowCheck(this, _this13);

            instance.on(moduleEventName, module.on[moduleEventName]);
          }.bind(this));
        } // Module create callback


        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      }.bind(this));
    }
  }], [{
    key: "installModule",
    value: function installModule(module) {
      var _this14 = this;

      var Class = this;
      if (!Class.prototype.modules) Class.prototype.modules = {};
      var name = module.name || "".concat(Object.keys(Class.prototype.modules).length, "_").concat(Utils.now());
      Class.prototype.modules[name] = module; // Prototype

      if (module.proto) {
        Object.keys(module.proto).forEach(function (key) {
          _newArrowCheck(this, _this14);

          Class.prototype[key] = module.proto[key];
        }.bind(this));
      } // Class


      if (module["static"]) {
        Object.keys(module["static"]).forEach(function (key) {
          _newArrowCheck(this, _this14);

          Class[key] = module["static"][key];
        }.bind(this));
      } // Callback


      if (module.install) {
        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        module.install.apply(Class, params);
      }

      return Class;
    }
  }, {
    key: "use",
    value: function use(module) {
      var _this15 = this;

      var Class = this;

      if (Array.isArray(module)) {
        module.forEach(function (m) {
          _newArrowCheck(this, _this15);

          return Class.installModule(m);
        }.bind(this));
        return Class;
      }

      for (var _len4 = arguments.length, params = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        params[_key4 - 1] = arguments[_key4];
      }

      return Class.installModule.apply(Class, [module].concat(params));
    }
  }, {
    key: "components",
    set: function set(components) {
      var Class = this;
      if (!Class.use) return;
      Class.use(components);
    }
  }]);

  return SwiperClass;
}();

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
  Utils.extend(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  var _this16 = this;

  var swiper = this;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.snapGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index$$1 = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = slidesPerRow - (params.slidesPerColumn * slidesPerRow - slidesLength);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;

    var _slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }

        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;

        _slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      _slide.css("margin-".concat(swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && "".concat(params.spaceBetween, "px")).attr('data-swiper-column', column).attr('data-swiper-row', row);
    }

    if (_slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].getComputedStyle(_slide[0], null);
      var currentTransform = _slide[0].style.transform;
      var currentWebKitTransform = _slide[0].style.webkitTransform;

      if (currentTransform) {
        _slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? _slide.outerWidth(true) : _slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          slideSize = parseFloat(slideStyles.getPropertyValue('width')) + parseFloat(slideStyles.getPropertyValue('margin-left')) + parseFloat(slideStyles.getPropertyValue('margin-right'));
        } else {
          slideSize = parseFloat(slideStyles.getPropertyValue('height')) + parseFloat(slideStyles.getPropertyValue('margin-top')) + parseFloat(slideStyles.getPropertyValue('margin-bottom'));
        }
      }

      if (currentTransform) {
        _slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = "".concat(slideSize, "px");
        } else {
          slides[i].style.height = "".concat(slideSize, "px");
        }
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index$$1 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index$$1 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index$$1 += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });
  }

  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });else $wrapperEl.css({
      height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });else $wrapperEl.css({
      height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.css({
        marginLeft: "".concat(spaceBetween, "px")
      });else slides.css({
        marginRight: "".concat(spaceBetween, "px")
      });
    } else slides.css({
      marginBottom: "".concat(spaceBetween, "px")
    });
  }

  if (params.centerInsufficientSlides) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _newArrowCheck(this, _this16);

      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    }.bind(this));
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        _newArrowCheck(this, _this16);

        snapGrid[snapIndex] = snap - allSlidesOffset;
      }.bind(this));
      slidesGrid.forEach(function (snap, snapIndex) {
        _newArrowCheck(this, _this16);

        slidesGrid[snapIndex] = snap + allSlidesOffset;
      }.bind(this));
    }
  }

  Utils.extend(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      var index$$1 = swiper.activeIndex + i;
      if (index$$1 > swiper.slides.length) break;
      activeSlides.push(swiper.slides.eq(index$$1)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
}

function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var _slide2 = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - _slide2.swiperSlideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility) {
      var slideBefore = -(offsetCenter - _slide2.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size || slideAfter > 0 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(_slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    _slide2.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.visibleSlides);
}

function updateProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
  var swiper = this;
  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Utils.extend(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Utils.extend(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  swiper.emit('slideChange');
}

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).closest(".".concat(params.slideClass))[0];
  var slideFound = false;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
};

function getTranslate() {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? 'x' : 'y';
  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));else $wrapperEl.transform("translate(".concat(x, "px, ").concat(y, "px)"));
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

var translate = {
  getTranslate: getTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate
};

function setTransition(duration, byController) {
  var swiper = this;
  swiper.$wrapperEl.transition(duration);
  swiper.emit('setTransition', duration, byController);
}

function transitionStart() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd$1() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex;
  swiper.animating = false;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition$1 = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd$1
};

function slideTo() {
  var index$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;
  var swiper = this;
  var slideIndex = index$$1;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (speed === 0 || !Support.transition) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd$$1(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop() {
  var index$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;
  var swiper = this;
  var newIndex = index$$1;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideNext() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slidePrev() {
  var _this17 = this;

  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    _newArrowCheck(this, _this17);

    return normalize(val);
  }.bind(this));
  var normalizedSlidesGrid = slidesGrid.map(function (val) {
    _newArrowCheck(this, _this17);

    return normalize(val);
  }.bind(this));
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideReset() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideToClosest() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var index$$1 = swiper.activeIndex;
  var snapIndex = Math.floor(index$$1 / swiper.params.slidesPerGroup);

  if (snapIndex < swiper.snapGrid.length - 1) {
    var _translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (_translate - currentSnap > (nextSnap - currentSnap) / 2) {
      index$$1 = swiper.params.slidesPerGroup;
    }
  }

  return swiper.slideTo(index$$1, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  var _this18 = this;

  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
        Utils.nextTick(function () {
          _newArrowCheck(this, _this18);

          swiper.slideTo(slideToIndex);
        }.bind(this));
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
      Utils.nextTick(function () {
        _newArrowCheck(this, _this18);

        swiper.slideTo(slideToIndex);
      }.bind(this));
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
  var _this19 = this;

  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
  var slides = $wrapperEl.children(".".concat(params.slideClass));

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children(".".concat(params.slideClass));
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (index$$1, el) {
    _newArrowCheck(this, _this19);

    var slide = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(el);
    if (index$$1 < swiper.loopedSlides) appendSlides.push(el);
    if (index$$1 < slides.length && index$$1 >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index$$1);
  }.bind(this));

  for (var _i3 = 0; _i3 < appendSlides.length; _i3 += 1) {
    $wrapperEl.append(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(appendSlides[_i3].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i4 = prependSlides.length - 1; _i4 >= 0; _i4 -= 1) {
    $wrapperEl.prepend(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(prependSlides[_i4].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  var swiper = this;
  var params = swiper.params,
      activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2 || activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
}

function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
};

function setGrabCursor(moving) {
  var swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  var swiper = this;
  if (Support.touch || swiper.params.watchOverflow && swiper.isLocked) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
};

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index$$1, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var baseLength = swiper.slides.length;

  if (index$$1 <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index$$1 >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index$$1; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var _i5 = 0; _i5 < slides.length; _i5 += 1) {
      if (slides[_i5]) $wrapperEl.append(slides[_i5]);
    }

    newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i6 = 0; _i6 < slidesBuffer.length; _i6 += 1) {
    $wrapperEl.append(slidesBuffer[_i6]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (_typeof(slidesIndexes) === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  addSlide: addSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides
};

var Device = function Device() {
  var ua = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent;
  var device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].cordova || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].phonegap,
    phonegap: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].cordova || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].phonegap
  };
  var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/); // Windows

  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // iOS


  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }

  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }

  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  } // iOS 8+ changed UA


  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  } // Desktop


  device.desktop = !(device.os || device.android || device.webView); // Webview

  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i); // Minimal UI

  if (device.os && device.os === 'ios') {
    var osVersionArr = device.osVersion.split('.');
    var metaViewport = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  } // Pixel Ratio


  device.pixelRatio = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].devicePixelRatio || 1; // Export object

  return device;
}();

function onTouchStart(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  data$$1.isTouchEvent = e.type === 'touchstart';
  if (!data$$1.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data$$1.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data$$1.isTouched && data$$1.isMoved) return;

  if (params.noSwiping && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass))[0]) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e).closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].screen.width - edgeSwipeThreshold)) {
    return;
  }

  Utils.extend(data$$1, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data$$1.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data$$1.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if (Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is(data$$1.formElements)) preventDefault = false;

    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement).is(data$$1.formElements) && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement !== e.target) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data$$1.isTouched) {
    if (data$$1.startMoving && data$$1.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data$$1.isTouchEvent && e.type === 'mousemove') return;
  var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data$$1.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data$$1.touchStartTime = Utils.now();
    }

    return;
  }

  if (data$$1.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data$$1.isTouched = false;
        data$$1.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data$$1.isTouchEvent && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement) {
    if (e.target === __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is(data$$1.formElements)) {
      data$$1.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data$$1.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data$$1.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data$$1.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data$$1.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data$$1.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data$$1.startMoving = true;
    }
  }

  if (data$$1.isScrolling) {
    data$$1.isTouched = false;
    return;
  }

  if (!data$$1.startMoving) {
    return;
  }

  swiper.allowClick = false;
  e.preventDefault();

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data$$1.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data$$1.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data$$1.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data$$1.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data$$1.currentTranslate = diff + data$$1.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data$$1.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data$$1.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data$$1.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data$$1.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data$$1.currentTranslate < data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data$$1.currentTranslate > data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data$$1.allowThresholdMove) {
      if (!data$$1.allowThresholdMove) {
        data$$1.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data$$1.currentTranslate = data$$1.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data$$1.currentTranslate = data$$1.startTranslate;
      return;
    }
  }

  if (!params.followFinger) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data$$1.velocities.length === 0) {
      data$$1.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data$$1.touchStartTime
      });
    }

    data$$1.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now()
    });
  } // Update progress


  swiper.updateProgress(data$$1.currentTranslate); // Update translate

  swiper.setTranslate(data$$1.currentTranslate);
}

function onTouchEnd(event) {
  var _this20 = this;

  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data$$1.allowTouchCallbacks = false;

  if (!data$$1.isTouched) {
    if (data$$1.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data$$1.isMoved && data$$1.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = Utils.now();
  var timeDiff = touchEndTime - data$$1.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);

    if (timeDiff < 300 && touchEndTime - data$$1.lastClickTime > 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      data$$1.clickTimeout = Utils.nextTick(function () {
        _newArrowCheck(this, _this20);

        if (!swiper || swiper.destroyed) return;
        swiper.emit('click', e);
      }.bind(this), 300);
    }

    if (timeDiff < 300 && touchEndTime - data$$1.lastClickTime < 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      swiper.emit('doubleTap', e);
    }
  }

  data$$1.lastClickTime = Utils.now();
  Utils.nextTick(function () {
    _newArrowCheck(this, _this20);

    if (!swiper.destroyed) swiper.allowClick = true;
  }.bind(this));

  if (!data$$1.isTouched || !data$$1.isMoved || !swiper.swipeDirection || touches.diff === 0 || data$$1.currentTranslate === data$$1.startTranslate) {
    data$$1.isTouched = false;
    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  }

  data$$1.isTouched = false;
  data$$1.isMoved = false;
  data$$1.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data$$1.currentTranslate;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data$$1.velocities.length > 1) {
        var lastMoveEvent = data$$1.velocities.pop();
        var velocityEvent = data$$1.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data$$1.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          _newArrowCheck(this, _this20);

          swiper.loopFix();
        }.bind(this));
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          var _this21 = this;

          _newArrowCheck(this, _this20);

          if (!swiper || swiper.destroyed || !data$$1.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(function () {
            _newArrowCheck(this, _this21);

            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          }.bind(this));
        }.bind(this));
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            _newArrowCheck(this, _this20);

            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          }.bind(this));
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }

    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();

    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  var swiper = this;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function attachEvents() {
  var swiper = this;
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;
  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested; // Touch Events

  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
          passive: false,
          capture: capture
        } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mousemove', swiper.onTouchMove, capture);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  } // Resize handler

  swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
}

function detachEvents() {
  var swiper = this;
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;
  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested; // Touch Events

  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mousemove', swiper.onTouchMove, capture);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  } // Resize handler

  swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
}

var events = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};

function setBreakpoint() {
  var _this22 = this;

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Set breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
        _newArrowCheck(this, _this22);

        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;

        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      }.bind(this));
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var needsReLoop = params.loop && breakpointParams.slidesPerView !== params.slidesPerView;
    Utils.extend(swiper.params, breakpointParams);
    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

function getBreakpoint(breakpoints) {
  var _this23 = this;

  var swiper = this; // Get breakpoint for window width

  if (!breakpoints) return undefined;
  var breakpoint = false;
  var points = [];
  Object.keys(breakpoints).forEach(function (point) {
    _newArrowCheck(this, _this23);

    points.push(point);
  }.bind(this));
  points.sort(function (a, b) {
    _newArrowCheck(this, _this23);

    return parseInt(a, 10) - parseInt(b, 10);
  }.bind(this));

  for (var i = 0; i < points.length; i += 1) {
    var point = points[i];

    if (swiper.params.breakpointsInverse) {
      if (point <= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth) {
        breakpoint = point;
      }
    } else if (point >= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
};

var Browser = function Browser() {
  function isSafari() {
    var ua = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isIE: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/Trident/g) || !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/MSIE/g),
    isEdge: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent)
  };
}();

function addClasses() {
  var _this24 = this;

  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el;
  var suffixes = [];
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }

  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }

  if (params.autoHeight) {
    suffixes.push('autoheight');
  }

  if (rtl) {
    suffixes.push('rtl');
  }

  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }

  if (Device.android) {
    suffixes.push('android');
  }

  if (Device.ios) {
    suffixes.push('ios');
  } // WP8 Touch Events Fix


  if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
    suffixes.push("wp8-".concat(params.direction));
  }

  suffixes.forEach(function (suffix) {
    _newArrowCheck(this, _this24);

    classNames.push(params.containerModifierClass + suffix);
  }.bind(this));
  $el.addClass(classNames.join(' '));
}

function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
}

var classes = {
  addClasses: addClasses,
  removeClasses: removeClasses
};

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var image;

  function onReady() {
    if (callback) callback();
  }

  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

var images = {
  loadImage: loadImage,
  preloadImages: preloadImages
};

function checkOverflow() {
  var swiper = this;
  var wasLocked = swiper.isLocked;
  swiper.isLocked = swiper.snapGrid.length === 1;
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = {
  checkOverflow: checkOverflow
};
var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  //
  preventInteractionOnTransition: false,
  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsInverse: false,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true
};
var prototypes = {
  update: update,
  translate: translate,
  transition: transition$1,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  manipulation: manipulation,
  events: events,
  breakpoints: breakpoints,
  checkOverflow: checkOverflow$1,
  classes: classes,
  images: images
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function (_SwiperClass) {
  _inherits(Swiper, _SwiperClass);

  function Swiper() {
    var _this26 = this;

    var _this25;

    _classCallCheck(this, Swiper);

    var el;
    var params;

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;
    _this25 = _possibleConstructorReturn(this, _getPrototypeOf(Swiper).call(this, params));
    Object.keys(prototypes).forEach(function (prototypeGroup) {
      var _this27 = this;

      _newArrowCheck(this, _this26);

      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        _newArrowCheck(this, _this27);

        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      }.bind(this));
    }.bind(this)); // Swiper Instance

    var swiper = _assertThisInitialized(_this25);

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      _newArrowCheck(this, _this26);

      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (_typeof(moduleParams) !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }.bind(this)); // Extend defaults with modules params

    var swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams); // Extend defaults with passed params

    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params); // Save Dom lib

    swiper.$ = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]; // Find el

    var $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return _possibleConstructorReturn(_this25, undefined);
    }

    if ($el.length > 1) {
      var swipers = [];
      $el.each(function (index$$1, containerEl) {
        _newArrowCheck(this, _this26);

        var newParams = Utils.extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      }.bind(this));
      return _possibleConstructorReturn(_this25, swipers);
    }

    el.swiper = swiper;
    $el.data('swiper', swiper); // Find Wrapper

    var $wrapperEl = $el.children(".".concat(swiper.params.wrapperClass)); // Extend Swiper

    Utils.extend(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      // Classes
      classNames: [],
      // Slides
      slides: Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (Support.prefixedPointerEvents) {
          desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules(); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return _possibleConstructorReturn(_this25, swiper);
  }

  _createClass(Swiper, [{
    key: "slidesPerViewDynamic",
    value: function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }

        for (var _i7 = activeIndex - 1; _i7 >= 0; _i7 -= 1) {
          if (slides[_i7] && !breakLoop) {
            slideSize += slides[_i7].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        for (var _i8 = activeIndex + 1; _i8 < slides.length; _i8 += 1) {
          if (slidesGrid[_i8] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }

      return spv;
    }
  }, {
    key: "update",
    value: function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var snapGrid = swiper.snapGrid,
          params = swiper.params; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      var translated;

      if (swiper.params.freeMode) {
        setTranslate();

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }

      swiper.emit('update');
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = this;
      if (swiper.initialized) return;
      swiper.emit('beforeInit'); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes


      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size


      swiper.updateSize(); // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor


      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide


      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      } // Attach events


      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit('init');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this28 = this;

      var deleteInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var cleanStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var swiper = this;
      var params = swiper.params,
          $el = swiper.$el,
          $wrapperEl = swiper.$wrapperEl,
          slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy'); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles


      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');

        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy'); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        _newArrowCheck(this, _this28);

        swiper.off(eventName);
      }.bind(this));

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }

      swiper.destroyed = true;
      return null;
    }
  }], [{
    key: "extendDefaults",
    value: function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    }
  }, {
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }, {
    key: "Class",
    get: function get() {
      return SwiperClass;
    }
  }, {
    key: "$",
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */];
    }
  }]);

  return Swiper;
}(SwiperClass);

var Device$1 = {
  name: 'device',
  proto: {
    device: Device
  },
  "static": {
    device: Device
  }
};
var Support$1 = {
  name: 'support',
  proto: {
    support: Support
  },
  "static": {
    support: Support
  }
};
var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser
  },
  "static": {
    browser: Browser
  }
};
var Resize = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this; // Emit resize

      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy() {
      var swiper = this;
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('resize', swiper.resize.resizeHandler);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};
var Observer = {
  func: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].MutationObserver || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebkitMutationObserver,
  attach: function attach(target) {
    var _this29 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var swiper = this;
    var ObserverFunc = Observer.func;
    var observer = new ObserverFunc(function (mutations) {
      _newArrowCheck(this, _this29);

      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].requestAnimationFrame) {
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].requestAnimationFrame(observerUpdate);
      } else {
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].setTimeout(observerUpdate, 0);
      }
    }.bind(this));
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!Support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: false
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var _this30 = this;

    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      _newArrowCheck(this, _this30);

      observer.disconnect();
    }.bind(this));
    swiper.observer.observers = [];
  }
};
var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: []
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.observer.init();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.destroy();
    }
  }
};
var Virtual = {
  update: function update(force) {
    var _this31 = this;

    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset$$1 = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Utils.extend(swiper.virtual, {
      from: from,
      to: to,
      offset: offset$$1,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset$$1 !== previousOffset) {
        swiper.slides.css(offsetProp, "".concat(offset$$1, "px"));
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset$$1,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });
      onRendered();
      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(".".concat(swiper.params.slideClass)).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")).remove();
        }
      }
    }

    for (var _i9 = 0; _i9 < slides.length; _i9 += 1) {
      if (_i9 >= from && _i9 <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i9);
        } else {
          if (_i9 > previousTo) appendIndexes.push(_i9);
          if (_i9 < previousFrom) prependIndexes.push(_i9);
        }
      }
    }

    appendIndexes.forEach(function (index$$1) {
      _newArrowCheck(this, _this31);

      swiper.$wrapperEl.append(renderSlide(slides[index$$1], index$$1));
    }.bind(this));
    prependIndexes.sort(function (a, b) {
      _newArrowCheck(this, _this31);

      return b - a;
    }.bind(this)).forEach(function (index$$1) {
      _newArrowCheck(this, _this31);

      swiper.$wrapperEl.prepend(renderSlide(slides[index$$1], index$$1));
    }.bind(this));
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, "".concat(offset$$1, "px"));
    onRendered();
  },
  renderSlide: function renderSlide(slide, index$$1) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index$$1]) {
      return swiper.virtual.cache[index$$1];
    }

    var $slideEl = params.renderSlide ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.renderSlide.call(swiper, slide, index$$1)) : Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"".concat(swiper.params.slideClass, "\" data-swiper-slide-index=\"").concat(index$$1, "\">").concat(slide, "</div>"));
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index$$1);
    if (params.cache) swiper.virtual.cache[index$$1] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slide) {
    var swiper = this;
    swiper.virtual.slides.push(slide);
    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slide) {
    var _this32 = this;

    var swiper = this;
    swiper.virtual.slides.unshift(slide);

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        _newArrowCheck(this, _this32);

        newCache[cachedIndex + 1] = cache[cachedIndex];
      }.bind(this));
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideNext(0);
  }
};
var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {}
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
      var overwriteParams = {
        watchSlidesProgress: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
};
var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName && (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName.toLowerCase() === 'input' || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(".".concat(swiper.params.slideClass)).length > 0 && swiper.$el.parents(".".concat(swiper.params.slideActiveClass)).length === 0) {
        return undefined;
      }

      var windowWidth = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth;
      var windowHeight = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (kc === 39 && !rtl || kc === 37 && rtl) swiper.slideNext();
      if (kc === 37 && !rtl || kc === 39 && rtl) swiper.slidePrev();
    } else {
      if (kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (kc === 40) swiper.slideNext();
      if (kc === 38) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    if (swiper.keyboard.enabled) return;
    Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */]).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    if (!swiper.keyboard.enabled) return;
    Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */]).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
};

function isEventSupported() {
  var eventName = 'onwheel';
  var isSupported = eventName in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */];

  if (!isSupported) {
    var element = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: Utils.now(),
  event: function getEvent() {
    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }(),
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var _this33 = this;

    var e = event;
    var swiper = this;
    var params = swiper.params.mousewheel;
    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data$$1 = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY)) delta = data$$1.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data$$1.pixelY) > Math.abs(data$$1.pixelX)) delta = data$$1.pixelY;else return true;
    } else {
      delta = Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY) ? -data$$1.pixelX * rtlFactor : -data$$1.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) return true;
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) return true;
      }

      swiper.mousewheel.lastScrollTime = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Date().getTime();
    } else {
      // Freemode or scrollContainer:
      if (swiper.params.loop) {
        swiper.loopFix();
      }

      var position = swiper.getTranslate() + delta * params.sensitivity;
      var wasBeginning = swiper.isBeginning;
      var wasEnd = swiper.isEnd;
      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(function () {
          _newArrowCheck(this, _this33);

          swiper.slideToClosest();
        }.bind(this), 300);
      } // Emit event


      swiper.emit('scroll', e); // Stop autoplay

      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  enable: function enable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.params.mousewheel.eventsTarged);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.params.mousewheel.eventsTarged);
    }

    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        lastScrollTime: Utils.now()
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
};
var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }

      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }

      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Utils.extend(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
        onNextClick: Navigation.onNextClick.bind(swiper),
        onPrevClick: Navigation.onPrevClick.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.navigation.destroy();
    },
    click: function click(e) {
      var swiper = this;
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if (swiper.params.navigation.hideOnClick && !Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is($prevEl) && !Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is($nextEl)) {
        if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  }
};
var Pagination = {
  update: function update() {
    var _this34 = this;

    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(swiper.pagination.bulletSize * (params.dynamicMainBullets + 4), "px"));

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass("".concat(params.bulletActiveClass, " ").concat(params.bulletActiveClass, "-next ").concat(params.bulletActiveClass, "-next-next ").concat(params.bulletActiveClass, "-prev ").concat(params.bulletActiveClass, "-prev-prev ").concat(params.bulletActiveClass, "-main"));

      if ($el.length > 1) {
        bullets.each(function (index$$1, bullet) {
          _newArrowCheck(this, _this34);

          var $bullet = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
            }
          }
        }.bind(this));
      } else {
        var $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
          }

          $firstDisplayedBullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
          $lastDisplayedBullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
      }
    }

    if (params.type === 'fraction') {
      $el.find(".".concat(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(".".concat(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(".".concat(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }

    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(".".concat(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', ".".concat(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index$$1 = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index$$1 += swiper.loopedSlides;
        swiper.slideTo(index$$1);
      });
    }

    Utils.extend(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', ".".concat(params.bulletClass));
    }
  }
};
var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        _newArrowCheck(this, _this);

        return number;
      }.bind(this),
      formatFractionTotal: function formatFractionTotal(number) {
        _newArrowCheck(this, _this);

        return number;
      }.bind(this),
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange() {
      var swiper = this;

      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange() {
      var swiper = this;

      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange() {
      var swiper = this;

      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange() {
      var swiper = this;

      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.pagination.destroy();
    },
    click: function click(e) {
      var swiper = this;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).hasClass(swiper.params.pagination.bulletClass)) {
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
};
var Scrollbar = {
  setTranslate: function setTranslate() {
    var _this35 = this;

    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform("translate3d(".concat(newPos, "px, 0, 0)"));
      } else {
        $dragEl.transform("translateX(".concat(newPos, "px)"));
      }

      $dragEl[0].style.width = "".concat(newSize, "px");
    } else {
      if (Support.transforms3d) {
        $dragEl.transform("translate3d(0px, ".concat(newPos, "px, 0)"));
      } else {
        $dragEl.transform("translateY(".concat(newPos, "px)"));
      }

      $dragEl[0].style.height = "".concat(newSize, "px");
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        _newArrowCheck(this, _this35);

        $el[0].style.opacity = 0;
        $el.transition(400);
      }.bind(this), 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = "".concat(dragSize, "px");
    } else {
      $dragEl[0].style.height = "".concat(dragSize, "px");
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbarHide) {
      $el[0].style.opacity = 0;
    }

    Utils.extend(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize;
    var pointerPosition;

    if (swiper.isHorizontal()) {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX;
    } else {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
    }

    var positionRatio;
    positionRatio = (pointerPosition - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - dragSize / 2) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var _this36 = this;

    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
        _newArrowCheck(this, _this36);

        $el.css('opacity', 0);
        $el.transition(400);
      }.bind(this), 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!Support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!Support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find(".".concat(swiper.params.scrollbar.dragClass));

    if ($dragEl.length === 0) {
      $dragEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"".concat(swiper.params.scrollbar.dragClass, "\"></div>"));
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize: function resize() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.destroy();
    }
  }
};
var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
    } else {
      x = "".concat(x * progress * rtlFactor, "px");
    }

    if (y.indexOf('%') >= 0) {
      y = "".concat(parseInt(y, 10) * progress, "%");
    } else {
      y = "".concat(y * progress, "px");
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px)"));
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px) scale(").concat(currentScale, ")"));
    }
  },
  setTranslate: function setTranslate() {
    var _this37 = this;

    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, el) {
      _newArrowCheck(this, _this37);

      swiper.parallax.setTransform(el, progress);
    }.bind(this));
    slides.each(function (slideIndex, slideEl) {
      var _this38 = this;

      _newArrowCheck(this, _this37);

      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, el) {
        _newArrowCheck(this, _this38);

        swiper.parallax.setTransform(el, slideProgress);
      }.bind(this));
    }.bind(this));
  },
  setTransition: function setTransition() {
    var _this39 = this;

    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, parallaxEl) {
      _newArrowCheck(this, _this39);

      var $parallaxEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    }.bind(this));
  }
};
var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTransition(duration);
    }
  }
};
var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!Support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).closest('.swiper-slide');
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (Support.gestures) {
      swiper.zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);

      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    e.preventDefault();
    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
      zoom.scale = 1;
      zoom.currentScale = 1;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom["in"](e);
    }
  },
  "in": function _in(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("".concat(params.zoomedSlideClass));
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)"));
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("".concat(params.zoomedSlideClass));
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false; // Scale image

    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false; // Scale image

    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove);
  }
};
var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var _this40 = this;

    var swiper = this;
    var zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      }
    };
    'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
      _newArrowCheck(this, _this40);

      zoom[methodName] = Zoom[methodName].bind(swiper);
    }.bind(this));
    Utils.extend(swiper, {
      zoom: zoom
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.zoom.disable();
    },
    touchStart: function touchStart(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(e) {
      var swiper = this;

      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
};
var Lazy = {
  loadInSlide: function loadInSlide(index$$1) {
    var _this41 = this;

    var loadInDuplicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index$$1 === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index$$1, "\"]")) : swiper.slides.eq(index$$1);
    var $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageIndex, imageEl) {
      var _this42 = this;

      _newArrowCheck(this, _this41);

      var $imageEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        _newArrowCheck(this, _this42);

        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"".concat(background, "\")"));
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(".".concat(params.preloaderClass)).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      }.bind(this));
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    }.bind(this));
  },
  load: function load() {
    var _this43 = this;

    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index$$1) {
      if (isVirtual) {
        if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index$$1, "\"]")).length) {
          return true;
        }
      } else if (slides[index$$1]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).attr('data-swiper-slide-index');
      }

      return Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(function (elIndex, slideEl) {
        _newArrowCheck(this, _this43);

        var index$$1 = isVirtual ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).attr('data-swiper-slide-index') : Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).index();
        swiper.lazy.loadInSlide(index$$1);
      }.bind(this));
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i10 = activeIndex + slidesPerView; _i10 < maxIndex; _i10 += 1) {
          if (slideExist(_i10)) swiper.lazy.loadInSlide(_i10);
        } // Prev Slides


        for (var _i11 = minIndex; _i11 < activeIndex; _i11 += 1) {
          if (slideExist(_i11)) swiper.lazy.loadInSlide(_i11);
        }
      } else {
        var nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  }
};
var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;

      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init() {
      var swiper = this;

      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll: function scroll() {
      var swiper = this;

      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    }
  }
};
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var _this44 = this;

      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        _newArrowCheck(this, _this44);

        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      }.bind(this);
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      var _this45 = this;

      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          Utils.nextTick(function () {
            _newArrowCheck(this, _this45);

            c.updateAutoHeight();
          }.bind(this));
        }

        c.$wrapperEl.transitionEnd(function () {
          _newArrowCheck(this, _this45);

          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        }.bind(this));
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper)
      }
    });
  },
  on: {
    update: function update() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(translate, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};
var a11y = {
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    var $targetEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is(".".concat(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop) return;
    var _swiper$navigation4 = swiper.navigation,
        $nextEl = _swiper$navigation4.$nextEl,
        $prevEl = _swiper$navigation4.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var _this46 = this;

    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
        _newArrowCheck(this, _this46);

        var $bulletEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      }.bind(this));
    }
  },
  init: function init() {
    var swiper = this;
    swiper.$el.append(swiper.a11y.liveRegion); // Navigation

    var params = swiper.params.a11y;
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
    }
  }
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}'
    }
  },
  create: function create() {
    var _this47 = this;

    var swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<span class=\"".concat(swiper.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
      }
    });
    Object.keys(a11y).forEach(function (methodName) {
      _newArrowCheck(this, _this47);

      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    }.bind(this));
  },
  on: {
    init: function init() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
};
var History = {
  init: function init() {
    var swiper = this;
    if (!swiper.params.history) return;

    if (!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history || !__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;

    if (!swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues() {
    var _this48 = this;

    var pathArray = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.pathname.slice(1).split('/').filter(function (part) {
      _newArrowCheck(this, _this48);

      return part !== '';
    }.bind(this));
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index$$1) {
    var swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var slide = swiper.slides.eq(index$$1);
    var value = History.slugify(slide.attr('data-history'));

    if (!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.pathname.includes(key)) {
      value = "".concat(key, "/").concat(value);
    }

    var currentState = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState({
        value: value
      }, null, value);
    } else {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text$$1) {
    return text$$1.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide3 = swiper.slides.eq(i);

        var slideHistory = History.slugify(_slide3.attr('data-history'));

        if (slideHistory === value && !_slide3.hasClass(swiper.params.slideDuplicateClass)) {
          var index$$1 = _slide3.index();

          swiper.slideTo(index$$1, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
};
var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var newHash = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-hash=\"").concat(newHash, "\"]")).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState(null, null, "#".concat(swiper.slides.eq(swiper.activeIndex).attr('data-hash')) || '');
    } else {
      var _slide4 = swiper.slides.eq(swiper.activeIndex);

      var hash = _slide4.attr('data-hash') || _slide4.attr('data-history');

      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash = hash || '';
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide5 = swiper.slides.eq(i);

        var slideHash = _slide5.attr('data-hash') || _slide5.attr('data-history');

        if (slideHash === hash && !_slide5.hasClass(swiper.params.slideDuplicateClass)) {
          var index$$1 = _slide5.index();

          swiper.slideTo(index$$1, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;

    if (swiper.params.hashNavigation.watchState) {
      Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    }
  }
};
/* eslint no-underscore-dangle: "off" */

var Autoplay = {
  run: function run() {
    var _this49 = this;

    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    swiper.autoplay.timeout = Utils.nextTick(function () {
      _newArrowCheck(this, _this49);

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }.bind(this), delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  }
};
var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onTransitionEnd: function onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;

          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        }
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart: function beforeTransitionStart(speed, internal) {
      var swiper = this;

      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove() {
      var swiper = this;

      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    }
  }
};
var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset$$1 = $slideEl[0].swiperSlideOffset;
      var tx = -offset$$1;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
    }
  },
  setTransition: function setTransition(duration) {
    var _this50 = this;

    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        _newArrowCheck(this, _this50);

        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      }.bind(this));
    }
  }
};
var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};
var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: "".concat(swiperWidth, "px")
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform$$1 = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform$$1);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      '-moz-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      '-ms-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset$$1 = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset$$1, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
      }
    }

    var zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "cube"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
};
var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset$$1 = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset$$1;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'left' : 'top', "\"></div>"));
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)"));
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "flip"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
};
var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform$$1 = swiper.translate;
    var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
      var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    } // Set correct perspective for IE10


    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      var ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = "".concat(center, "px 50%");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
};
var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    if (swiper.realIndex !== thumbsSwiper.realIndex) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
      } else {
        newThumbsIndex = swiper.realIndex;
      }

      if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).addClass(thumbActiveClass);
      }
    } else {
      for (var _i12 = 0; _i12 < thumbsToActivate; _i12 += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i12).addClass(thumbActiveClass);
      }
    }
  }
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
}; // Swiper Class

var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);
/* harmony default export */ __webpack_exports__["a"] = (Swiper);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return removeAttr; });
/* unused harmony export prop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return data; });
/* unused harmony export removeData */
/* unused harmony export dataset */
/* unused harmony export val */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return off; });
/* unused harmony export once */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return transitionEnd; });
/* unused harmony export animationEnd */
/* unused harmony export width */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return outerWidth; });
/* unused harmony export height */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return offset; });
/* unused harmony export hide */
/* unused harmony export show */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return css; });
/* unused harmony export toArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return each; });
/* unused harmony export forEach */
/* unused harmony export filter */
/* unused harmony export map */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return is; });
/* unused harmony export indexOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return append; });
/* unused harmony export appendTo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return prepend; });
/* unused harmony export prependTo */
/* unused harmony export insertBefore */
/* unused harmony export insertAfter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return prevAll; });
/* unused harmony export siblings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return remove; });
/* unused harmony export detach */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return add; });
/* unused harmony export empty */
/* unused harmony export scrollTo */
/* unused harmony export scrollTop */
/* unused harmony export scrollLeft */
/* unused harmony export animate */
/* unused harmony export stop */
/* unused harmony export click */
/* unused harmony export blur */
/* unused harmony export focus */
/* unused harmony export focusin */
/* unused harmony export focusout */
/* unused harmony export keyup */
/* unused harmony export keydown */
/* unused harmony export keypress */
/* unused harmony export submit */
/* unused harmony export change */
/* unused harmony export mousedown */
/* unused harmony export mousemove */
/* unused harmony export mouseup */
/* unused harmony export mouseenter */
/* unused harmony export mouseleave */
/* unused harmony export mouseout */
/* unused harmony export mouseover */
/* unused harmony export touchstart */
/* unused harmony export touchend */
/* unused harmony export touchmove */
/* unused harmony export resize */
/* unused harmony export scroll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ssr_window__ = __webpack_require__(9);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */


var Dom7 = function Dom7(arr) {
  _classCallCheck(this, Dom7);

  var self = this; // Create array-like object

  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }

  self.length = arr.length; // Return collection with methods

  return this;
};

function $(selector, context) {
  var arr = [];
  var i = 0;

  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }

  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els;
      var tempParent;

      var _html = selector.trim();

      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement(toCreate);
        tempParent.innerHTML = _html;

        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [__WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]).querySelectorAll(selector.trim());
        }

        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] || selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }

  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

function toCamelCase(string) {
  var _this = this;

  return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
    _newArrowCheck(this, _this);

    return group1.toUpperCase();
  }.bind(this));
}

function requestAnimationFrame(callback) {
  if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].requestAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].requestAnimationFrame(callback);else if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitRequestAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitRequestAnimationFrame(callback);
  return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].setTimeout(callback, 1000 / 60);
}

function cancelAnimationFrame(id) {
  if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].cancelAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].cancelAnimationFrame(id);else if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitCancelAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitCancelAnimationFrame(id);
  return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].clearTimeout(id);
} // Classes and attributes


function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }

  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }

  return this;
}

function removeClass(className) {
  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }

  return this;
}

function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}

function toggleClass(className) {
  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }

  return this;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
} // eslint-disable-next-line


function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
} // eslint-disable-next-line


function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0]; // Get value

    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute("data-".concat(key));

      if (dataKey) {
        return dataKey;
      }

      return undefined;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    // eslint-disable-next-line
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  } // eslint-disable-next-line


  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  var dom = this;

  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        var values = [];

        for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }

        return values;
      }

      return dom[0].value;
    }

    return undefined;
  }

  for (var _i = 0; _i < dom.length; _i += 1) {
    var el = dom[_i];

    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }

  return dom;
} // Transforms
// eslint-disable-next-line


function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }

  return this;
}

function transition(duration) {
  if (typeof duration !== 'string') {
    duration = "".concat(duration, "ms"); // eslint-disable-line
  }

  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }

  return this;
} // Events


function on() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len4 = arguments.length, eventArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      eventArgs[_key4] = arguments[_key4];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var _this2 = this;

  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var evt = void 0;

      try {
        evt = new __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      } // eslint-disable-next-line


      el.dom7EventData = args.filter(function (data, dataIndex) {
        _newArrowCheck(this, _this2);

        return dataIndex > 0;
      }.bind(this));
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }

  return this;
}

function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i;

  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);

    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }

  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }

  return this;
}

function animationEnd(callback) {
  var events = ['webkitAnimationEnd', 'animationend'];
  var dom = this;
  var i;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);

    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }

  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }

  return this;
} // Sizing/Styles


function width() {
  if (this[0] === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) {
    return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  if (this[0] === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) {
    return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;

    var _scrollTop = el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] ? __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].scrollY : el.scrollTop;

    var _scrollLeft = el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] ? __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].scrollX : el.scrollLeft;

    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  if (this[0]) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
} // Dom manipulation


function toArray() {
  var arr = [];

  for (var i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }

  return arr;
} // Iterate over the collection passing elements to `callback`


function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this; // Iterate over the current collection

  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  } // Return `this` to allow chained DOM operations


  return this;
}

function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this; // Iterate over the current collection

  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  } // Return `this` to allow chained DOM operations


  return this;
}

function filter(callback) {
  var matchedItems = [];
  var dom = this;

  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }

  return new Dom7(matchedItems);
}

function map(callback) {
  var modifiedItems = [];
  var dom = this;

  for (var i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }

  return new Dom7(modifiedItems);
} // eslint-disable-next-line


function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
} // eslint-disable-next-line


function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }

    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  } else if (selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]) return el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */];else if (selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) return el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function indexOf(el) {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }

  return -1;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
} // eslint-disable-next-line


function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  var returnIndex;

  if (index > length - 1) {
    return new Dom7([]);
  }

  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }

  return new Dom7([this[index]]);
}

function append() {
  var newChild;

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
} // eslint-disable-next-line


function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
} // eslint-disable-next-line


function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }

      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }

  return new Dom7([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return new Dom7(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }

      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }

  return new Dom7([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return new Dom7(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(unique(parents));
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(unique(parents));
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return new Dom7(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return new Dom7(unique(children));
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  for (i = 0; i < args.length; i += 1) {
    var toAdd = $(args[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      var _this3 = this;

      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (index, el) {
        _newArrowCheck(this, _this3);

        var element = el;
        delete element.dom7AnimateInstance;
      }.bind(this));
      a.que = [];
    },
    done: function done(complete) {
      var _this4 = this;

      a.animating = false;
      a.elements.each(function (index, el) {
        _newArrowCheck(this, _this4);

        var element = el;
        delete element.dom7AnimateInstance;
      }.bind(this));
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      var _this5 = this;

      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (index, el) {
        var _this6 = this;

        _newArrowCheck(this, _this5);

        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          _newArrowCheck(this, _this6);

          initialFullValue = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        }.bind(this));
      }.bind(this));
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        var _this7 = this;

        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var _this8 = this;

          _newArrowCheck(this, _this7);

          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            _newArrowCheck(this, _this8);

            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          }.bind(this));
        }.bind(this));
        if (done) return; // Then call

        a.frameId = requestAnimationFrame(render);
      }

      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function eventShortcut(name) {
  for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  if (typeof args[0] === 'undefined') {
    for (var i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $(this[i]).trigger(name);
        }
      }
    }

    return this;
  }

  return this.on.apply(this, [name].concat(args));
}

function click() {
  for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return eventShortcut.bind(this).apply(void 0, ['click'].concat(args));
}

function blur() {
  for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return eventShortcut.bind(this).apply(void 0, ['blur'].concat(args));
}

function focus() {
  for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return eventShortcut.bind(this).apply(void 0, ['focus'].concat(args));
}

function focusin() {
  for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return eventShortcut.bind(this).apply(void 0, ['focusin'].concat(args));
}

function focusout() {
  for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return eventShortcut.bind(this).apply(void 0, ['focusout'].concat(args));
}

function keyup() {
  for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return eventShortcut.bind(this).apply(void 0, ['keyup'].concat(args));
}

function keydown() {
  for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return eventShortcut.bind(this).apply(void 0, ['keydown'].concat(args));
}

function keypress() {
  for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return eventShortcut.bind(this).apply(void 0, ['keypress'].concat(args));
}

function submit() {
  for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return eventShortcut.bind(this).apply(void 0, ['submit'].concat(args));
}

function change() {
  for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return eventShortcut.bind(this).apply(void 0, ['change'].concat(args));
}

function mousedown() {
  for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return eventShortcut.bind(this).apply(void 0, ['mousedown'].concat(args));
}

function mousemove() {
  for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return eventShortcut.bind(this).apply(void 0, ['mousemove'].concat(args));
}

function mouseup() {
  for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseup'].concat(args));
}

function mouseenter() {
  for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseenter'].concat(args));
}

function mouseleave() {
  for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseleave'].concat(args));
}

function mouseout() {
  for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseout'].concat(args));
}

function mouseover() {
  for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseover'].concat(args));
}

function touchstart() {
  for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchstart'].concat(args));
}

function touchend() {
  for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchend'].concat(args));
}

function touchmove() {
  for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchmove'].concat(args));
}

function resize() {
  for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return eventShortcut.bind(this).apply(void 0, ['resize'].concat(args));
}

function scroll() {
  for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    args[_key32] = arguments[_key32];
  }

  return eventShortcut.bind(this).apply(void 0, ['scroll'].concat(args));
}



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(40);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../css-loader/dist/cjs.js!./swiper.min.css", function() {
		var newContent = require("!!../../../css-loader/dist/cjs.js!./swiper.min.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "/**\n * Swiper 4.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 1, 2018\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;-o-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s top,.2s -webkit-transform;transition:.2s top,.2s -webkit-transform;-o-transition:.2s transform,.2s top;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s left,.2s -webkit-transform;transition:.2s left,.2s -webkit-transform;-o-transition:.2s transform,.2s left;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s right,.2s -webkit-transform;transition:.2s right,.2s -webkit-transform;-o-transition:.2s transform,.2s right;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}", ""]);



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(42);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".swiper-container {\n  height: 150px; }\n\n.swiper-pagination {\n  font-size: 0; }\n\n.swiper-pagination-bullet {\n  opacity: 1; }\n", ""]);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Checkbox = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Checkbox, _Nerv$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          className = _this$props.className,
          checked = _this$props.checked,
          name = _this$props.name,
          color = _this$props.color;
      var key = this.props["for"];
      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('taro-checkbox_checked ', className);
      var style = {
        color: color
      };
      var sty = this.props.style;
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("span", {
        className: "weui-cells_checkbox",
        style: sty
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("input", _extends({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['className', 'checked', 'onChange', 'name', 'type', 'id', 'style']), {
        id: key,
        type: "checkbox",
        name: name,
        className: cls,
        checked: checked,
        onChange: onChange,
        style: style
      })), this.props.children);
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(45);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".taro-checkbox {\n  position: relative;\n  display: inline-block; }\n  .taro-checkbox_checked {\n    display: inline-block;\n    min-height: 0;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: 0;\n    font-size: 23px;\n    border: 1px solid #d1d1d1;\n    background-color: #ffffff;\n    border-radius: 3px;\n    color: #1AAD19;\n    width: 23px;\n    height: 23px;\n    position: relative;\n    vertical-align: 0;\n    top: 5px; }\n    .taro-checkbox_checked:checked::before {\n      font-family: \"weui\";\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      text-align: center;\n      speak: none;\n      display: inline-block;\n      vertical-align: middle;\n      text-decoration: inherit;\n      content: \"\\EA08\";\n      color: inherit;\n      font-size: inherit;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -48%) scale(0.73); }\n", ""]);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picker_group__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_scss__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author chenjiajian
 * @property {Array} range mode为 selector 或 multiSelector 时，range 有效
 * @property {String} rangeKey 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容
 * @property {Number} value value 的值表示选择了 range 中的第几个（下标从 0 开始）
 * @property {EventHandle} onChange value 改变时触发 change 事件，event.detail = {value: value}
 * @property {Boolean} disabled 是否禁用
 * @property {EventHandle} onCancel 取消选择或点遮罩层收起 picker 时触发
 */






 // todos:
// 1. 加入滚动惯性
// 2. shouldComponentUpdate
// 3. 多指操控。。。
// 4. timePicker 样式问题：不在指定时间范围时，选项样式置灰。缩窄两列间宽度。

var Picker = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Picker, _Nerv$Component);

  /** @type {PickerProps} */
  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));
    _this.index = [];

    _this.handlePrpos();

    _this.state = {
      pickerValue: _this.index,
      hidden: true,
      fadeOut: false,
      height: []
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "handlePrpos",
    value: function handlePrpos() {
      var _this2 = this;

      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var value = nextProps.value,
          range = nextProps.range,
          mode = nextProps.mode;

      if (mode === 'multiSelector') {
        if (!range) {
          range = [];
          this.props.range = [];
        }

        if (range.length === this.index.length) this.index = [];
        range.forEach(function (r, i) {
          _newArrowCheck(this, _this2);

          var v = value && value.length ? value[i] : undefined;
          this.index.push(this.verifyValue(v, r) ? Math.floor(value[i]) : 0);
        }.bind(this));
      } else if (mode === 'time') {
        // check value...
        if (!this.verifyTime(value)) {
          console.warn('time picker value illegal');
          value = '0:0';
        }

        var time = value.split(':').map(function (n) {
          _newArrowCheck(this, _this2);

          return +n;
        }.bind(this));
        this.index = time;
      } else if (mode === 'date') {
        var _nextProps$start = nextProps.start,
            start = _nextProps$start === void 0 ? '' : _nextProps$start,
            _nextProps$end = nextProps.end,
            end = _nextProps$end === void 0 ? '' : _nextProps$end;

        var _value = __WEBPACK_IMPORTED_MODULE_5__date__["b" /* verifyDate */](value);

        var _start = __WEBPACK_IMPORTED_MODULE_5__date__["b" /* verifyDate */](start);

        var _end = __WEBPACK_IMPORTED_MODULE_5__date__["b" /* verifyDate */](end);

        if (!_value) _value = new Date(new Date().setHours(0, 0, 0, 0)); // 没传值或值的合法性错误默认今天时间

        if (!_start) _start = new Date('1970/01/01');
        if (!_end) _end = new Date('2999/01/01'); // 时间区间有效性

        if (_value.getTime() >= _start.getTime() && _value.getTime() <= _end.getTime()) {
          this.index = [_value.getFullYear(), _value.getMonth() + 1, _value.getDate()];

          if (!this.pickerDate || this.pickerDate._value.getTime() !== _value.getTime() || this.pickerDate._start.getTime() !== _start.getTime() || this.pickerDate._end.getTime() !== _end.getTime()) {
            this.pickerDate = {
              _value: _value,
              _start: _start,
              _end: _end,
              _updateValue: [_value.getFullYear(), _value.getMonth() + 1, _value.getDate()]
            };
          }
        } else {
          throw new Error('Date Interval Error');
        } // this.index = dateHandle.

      } else {
        if (!range) {
          range = [];
          this.props.range = [];
        }

        if (this.index.length >= 1) this.index = [];
        this.index.push(this.verifyValue(value, range) ? Math.floor(value) : 0);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.handlePrpos(nextProps);
    } // 校验传入的 value 是否合法

  }, {
    key: "verifyValue",
    value: function verifyValue(value, range) {
      if (!isNaN(+value) && value >= 0 && value < range.length) return true;
      return false;
    } // 检验传入的 time value 是否合法

  }, {
    key: "verifyTime",
    value: function verifyTime(value) {
      var _this3 = this;

      if (!/^\d{1,2}:\d{1,2}$/.test(value)) return false;
      var time = value.split(':').map(function (num) {
        _newArrowCheck(this, _this3);

        return +num;
      }.bind(this));
      if (time[0] < 0 || time[0] > 23) return false;
      if (time[1] < 0 || time[1] > 59) return false;
      return true;
    } // 比较时间

  }, {
    key: "compareTime",
    value: function compareTime(t1, t2) {
      var _this4 = this;

      // logic: t1 <= t2: return true
      t1 = t1.split(':').map(function (i) {
        _newArrowCheck(this, _this4);

        return +i;
      }.bind(this));
      t2 = t2.split(':').map(function (i) {
        _newArrowCheck(this, _this4);

        return +i;
      }.bind(this));
      if (t1[0] < t2[0]) return true;

      if (t1[0] === t2[0]) {
        if (t1[1] <= t2[1]) return true;
      }

      return false;
    }
  }, {
    key: "getMonthRange",
    value: function getMonthRange() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _start = 1;
      var _end = 12;

      if (this.pickerDate._start.getFullYear() === this.pickerDate._end.getFullYear()) {
        _start = this.pickerDate._start.getMonth() + 1;
        _end = this.pickerDate._end.getMonth() + 1;
      } else if (this.pickerDate._start.getFullYear() === this.pickerDate._updateValue[0]) {
        _start = this.pickerDate._start.getMonth() + 1;
        _end = 12;
      } else if (this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0]) {
        _start = 1;
        _end = this.pickerDate._end.getMonth() + 1;
      }

      return this.getDateRange(_start, _end, fields);
    }
  }, {
    key: "getDayRange",
    value: function getDayRange() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _start = 1;

      var _end = __WEBPACK_IMPORTED_MODULE_5__date__["a" /* getMaxDay */](this.pickerDate._updateValue[0], this.pickerDate._updateValue[1]);

      if (this.pickerDate._start.getFullYear() === this.pickerDate._updateValue[0] && this.pickerDate._start.getMonth() + 1 === this.pickerDate._updateValue[1]) {
        _start = this.pickerDate._start.getDate();
      }

      if (this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0] && this.pickerDate._end.getMonth() + 1 === this.pickerDate._updateValue[1]) {
        _end = this.pickerDate._end.getDate();
      }

      return this.getDateRange(_start, _end, fields);
    } // 获取年月日下标或者下标对应的数

  }, {
    key: "getDateArrIndex",
    value: function getDateArrIndex(value, fields) {
      var getIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var year = this.getDateRange(this.pickerDate._start.getFullYear(), this.pickerDate._end.getFullYear());
      var month = this.getMonthRange();
      var day = this.getDayRange();

      if (getIdx) {
        if (fields === 0) {
          return year[value];
        } else if (fields === 1) {
          return month[value];
        } else {
          return day[value];
        }
      } else {
        if (fields === 0) {
          return year.indexOf(value + '');
        } else if (fields === 1) {
          return month.indexOf(value + '');
        } else {
          return day.indexOf(value + '');
        }
      }
    } // 获取时间数组

  }, {
    key: "getDateRange",
    value: function getDateRange(begin, end) {
      var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var range = [];

      for (var i = begin; i <= end; i++) {
        range.push("".concat(i).concat(fields));
      }

      return range;
    } // 隐藏 picker

  }, {
    key: "hidePicker",
    value: function hidePicker() {
      var _this5 = this;

      this.setState({
        fadeOut: true
      });
      setTimeout(function () {
        _newArrowCheck(this, _this5);

        return this.setState({
          hidden: true,
          fadeOut: false
        });
      }.bind(this), 350);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.index = [];
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      // 展示 Picker
      var showPicker = function showPicker() {
        var _this7 = this;

        _newArrowCheck(this, _this6);

        if (this.props.disabled) return;
        var height = this.index.map(function (i, idx) {
          _newArrowCheck(this, _this7);

          var factor = 0;

          if (this.props.mode === 'time') {
            factor = __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */] * 4;
          }

          if (this.props.mode === 'date') {
            return __WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */] * this.getDateArrIndex(i, idx) - factor;
          }

          return __WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */] * i - factor;
        }.bind(this));
        this.setState({
          hidden: false,
          height: height
        });
      }.bind(this); // 点击确定


      var onChange = function onChange(e) {
        var _this8 = this;

        _newArrowCheck(this, _this6);

        this.hidePicker(); // 除了 multiSeclector，都在点击确认时才改变记录的下标值

        this.index = this.state.height.map(function (h) {
          _newArrowCheck(this, _this8);

          return (__WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - h) / __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */];
        }.bind(this));
        var eventObj = getEventObj(e, 'change', {
          value: this.index.length > 1 && this.props.mode !== 'selector' ? this.index : this.index[0]
        });

        if (this.props.mode === 'time') {
          var range = [['20', '21', '22', '23'].concat(_toConsumableArray(getTimeRange(0, 23)), ['00', '01', '02', '03']), ['56', '57', '58', '59'].concat(_toConsumableArray(getTimeRange(0, 59)), ['00', '01', '02', '03'])];
          this.index = this.index.map(function (n, i) {
            _newArrowCheck(this, _this8);

            return range[i][n];
          }.bind(this));
          eventObj.detail.value = this.index.join(':');
        }

        if (this.props.mode === 'date') {
          this.index = this.index.map(function (n, i) {
            _newArrowCheck(this, _this8);

            return this.getDateArrIndex(n, i, true);
          }.bind(this));

          if (this.props.fields === 'year') {
            eventObj.detail.value = [this.index[0]];
          } else if (this.props.fields === 'month') {
            eventObj.detail.value = [this.index[0], this.index[1]];
          } else {
            eventObj.detail.value = this.index;
          }

          eventObj.detail.value = eventObj.detail.value.join('-');
        }

        this.setState({
          pickerValue: eventObj.detail.value
        });
        this.props.onChange && this.props.onChange(eventObj);
      }.bind(this); // 点击取消或蒙层


      var onCancel = function onCancel(e) {
        _newArrowCheck(this, _this6);

        this.hidePicker();
        var eventObj = getEventObj(e, 'cancel', {});
        this.props.onCancel && this.props.onCancel(eventObj);
      }.bind(this); // 列改变


      var onColumnChange = function onColumnChange(height, columnId, e) {
        var _this9 = this;

        _newArrowCheck(this, _this6);

        // 获取 touchend 时的 index
        var index = this.state.height.map(function (h, i) {
          _newArrowCheck(this, _this9);

          if (columnId === i) h = height;
          return (__WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - h) / __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */];
        }.bind(this)); // 前一级列改变时，后面所有级别的 index 都要设为 0, 并初始化高度

        var rangeLen = this.props.range.length;

        if (columnId < rangeLen - 1) {
          for (var i = columnId + 1; i < rangeLen; i++) {
            index[i] = 0;
          }
        }

        this.setState({
          height: index.map(function (i) {
            _newArrowCheck(this, _this9);

            return __WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - i * __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */];
          }.bind(this))
        }); // 改变 index 的值

        this.index = index;
        var eventObj = getEventObj(e, 'columnChange', {
          column: columnId,
          value: index[columnId]
        });
        this.props.onColumnChange && this.props.onColumnChange(eventObj);
      }.bind(this); // 统一抛出的事件对象，和小程序对齐


      var getEventObj = function getEventObj(e, type, detail) {
        _newArrowCheck(this, _this6);

        Object.defineProperties(e, {
          detail: {
            value: detail,
            enumerable: true
          },
          type: {
            value: type,
            enumerable: true
          }
        });
        return e;
      }.bind(this); // 供 PickerGroup 修改对应的 height 值


      var updateHeight = function updateHeight(height, columnId) {
        var _this10 = this;

        var needRevise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _newArrowCheck(this, _this6);

        this.setState(function (prevState) {
          _newArrowCheck(this, _this10);

          prevState.height[columnId] = height;
          return {
            height: prevState.height
          };
        }.bind(this), function () {
          var _this11 = this;

          _newArrowCheck(this, _this10);

          // time picker 必须在规定时间范围内，因此需要在 touchEnd 做修正
          if (needRevise) {
            var _this$props = this.props,
                start = _this$props.start,
                end = _this$props.end;
            if (!this.verifyTime(start)) start = '00:00';
            if (!this.verifyTime(end)) end = '23:59';
            if (!this.compareTime(start, end)) return;
            var time = this.state.height.map(function (h) {
              _newArrowCheck(this, _this11);

              return (__WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - h) / __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */];
            }.bind(this));
            var range = [['20', '21', '22', '23'].concat(_toConsumableArray(getTimeRange(0, 23)), ['00', '01', '02', '03']), ['56', '57', '58', '59'].concat(_toConsumableArray(getTimeRange(0, 59)), ['00', '01', '02', '03'])];
            time = time.map(function (n, i) {
              _newArrowCheck(this, _this11);

              return range[i][n];
            }.bind(this)).join(':');

            if (!this.compareTime(start, time)) {
              // 修正到 start
              var _height = start.split(':').map(function (i) {
                _newArrowCheck(this, _this11);

                return __WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */] * (+i + 4);
              }.bind(this));

              this.setState({
                height: _height
              });
            } else if (!this.compareTime(time, end)) {
              // 修正到 end
              var _height2 = end.split(':').map(function (i) {
                _newArrowCheck(this, _this11);

                return __WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* LINE_HEIGHT */] * (+i + 4);
              }.bind(this));

              this.setState({
                height: _height2
              });
            }
          }
        }.bind(this));
      }.bind(this); // 单列


      var getSelector = function getSelector() {
        _newArrowCheck(this, _this6);

        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
          range: this.props.range,
          rangeKey: this.props['rangeKey'],
          height: this.state.height[0],
          updateHeight: updateHeight,
          columnId: "0"
        });
      }.bind(this); // 多列


      var getMultiSelector = function getMultiSelector() {
        var _this12 = this;

        _newArrowCheck(this, _this6);

        return this.props.range.map(function (range, index) {
          _newArrowCheck(this, _this12);

          return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
            range: range,
            rangeKey: this.props['rangeKey'],
            height: this.state.height[index],
            updateHeight: updateHeight,
            onColumnChange: onColumnChange,
            columnId: index
          });
        }.bind(this));
      }.bind(this); // 时间


      var getTimeSelector = function getTimeSelector() {
        _newArrowCheck(this, _this6);

        var hourRange = ['20', '21', '22', '23'].concat(_toConsumableArray(getTimeRange(0, 23)), ['00', '01', '02', '03']);
        var minRange = ['56', '57', '58', '59'].concat(_toConsumableArray(getTimeRange(0, 59)), ['00', '01', '02', '03']);
        return [__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
          mode: "time",
          range: hourRange,
          height: this.state.height[0],
          updateHeight: updateHeight,
          columnId: "0"
        }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
          mode: "time",
          range: minRange,
          height: this.state.height[1],
          updateHeight: updateHeight,
          columnId: "1"
        })];
      }.bind(this);

      var getTimeRange = function getTimeRange(begin, end) {
        _newArrowCheck(this, _this6);

        var range = [];

        for (var i = begin; i <= end; i++) {
          range.push("".concat(i < 10 ? '0' : '').concat(i));
        }

        return range;
      }.bind(this);
      /**
       * @author zhongxin
       * @description 时间选择
       *
       */
      // ======================= Date start =====================//


      var _updateDay = function updateDay(value, fields) {
        _newArrowCheck(this, _this6);

        this.pickerDate._updateValue[fields] = value; // 滚动年份

        if (fields === 0) {
          var monthRange = this.getMonthRange();

          _updateDay(monthRange[0] * 1, 1);

          updateHeight(__WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */], 1);
        } else if (fields === 1) {
          var dayRange = this.getDayRange();

          _updateDay(dayRange[0] * 1, 2);

          updateHeight(__WEBPACK_IMPORTED_MODULE_4__constant__["c" /* TOP */], 2);
        }
      }.bind(this);

      var gitDateSelector = function gitDateSelector() {
        _newArrowCheck(this, _this6);

        var year = this.getDateRange(this.pickerDate._start.getFullYear(), this.pickerDate._end.getFullYear(), '年');
        var month = this.getMonthRange('月');
        var day = this.getDayRange('日');
        var renderView = [];

        if (this.props.fields === 'year') {
          renderView.push(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
            mode: "date",
            range: year,
            height: this.state.height[0],
            updateDay: _updateDay,
            updateHeight: updateHeight,
            columnId: "0"
          }));
        } else if (this.props.fields === 'month') {
          renderView.push(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
            mode: "date",
            range: year,
            height: this.state.height[0],
            updateDay: _updateDay,
            updateHeight: updateHeight,
            columnId: "0"
          }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
            mode: "date",
            range: month,
            height: this.state.height[1],
            updateDay: _updateDay,
            updateHeight: updateHeight,
            columnId: "1"
          }));
        } else {
          renderView = [__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
            mode: "date",
            range: year,
            height: this.state.height[0],
            updateDay: _updateDay,
            updateHeight: updateHeight,
            columnId: "0"
          }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
            mode: "date",
            range: month,
            height: this.state.height[1],
            updateDay: _updateDay,
            updateHeight: updateHeight,
            columnId: "1"
          }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picker_group__["a" /* default */], {
            mode: "date",
            range: day,
            updateDay: _updateDay,
            height: this.state.height[2],
            updateHeight: updateHeight,
            columnId: "2"
          })];
        }

        return renderView;
      }.bind(this); // ======================= Date end =====================//
      // 动画类名控制逻辑


      var clsMask = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('weui-mask', 'weui-animate-fade-in', {
        'weui-animate-fade-out': this.state.fadeOut
      });
      var clsSlider = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('weui-picker', 'weui-animate-slide-up', {
        'weui-animate-slide-down': this.state.fadeOut
      });
      var shouldDivHidden = this.state.hidden ? 'display: none;' : ''; // // 给 children 绑定事件
      // const children = Nerv.Children.map(this.props.children, child => {
      //   return Nerv.cloneElement(child, {
      //     onClick: showPicker
      //   })
      // })
      // picker__group

      var pickerGroup;

      switch (this.props.mode) {
        case 'multiSelector':
          pickerGroup = getMultiSelector();
          break;

        case 'time':
          pickerGroup = getTimeSelector();
          break;

        case 'date':
          pickerGroup = gitDateSelector();
          break;

        default:
          pickerGroup = getSelector();
      }

      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? '' : _this$props$name;
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: this.props.className
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        onClick: showPicker
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        style: shouldDivHidden,
        className: clsMask,
        onClick: onCancel
      }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        style: shouldDivHidden,
        className: clsSlider
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "weui-picker__hd"
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "weui-picker__action",
        onClick: onCancel
      }, "\u53D6\u6D88"), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "weui-picker__action",
        onClick: onChange
      }, "\u786E\u5B9A")), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "weui-picker__bd"
      }, pickerGroup), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("input", {
        type: "hidden",
        name: name,
        value: this.state.pickerValue
      })));
    }
  }]);

  return Picker;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

_defineProperty(Picker, "defaultProps", {
  mode: 'selector'
});



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickerGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(10);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PickerGroup = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(PickerGroup, _Nerv$Component);

  function PickerGroup(props) {
    _classCallCheck(this, PickerGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(PickerGroup).call(this, props));
  }

  _createClass(PickerGroup, [{
    key: "getPosition",
    value: function getPosition(id) {
      var transition = this.touchEnd ? 0.3 : 0;
      return "transform: translate3d(0, ".concat(this.props.height, "px, 0);-webkit-transform: translate3d(0, ").concat(this.props.height, "px, 0);transition: transform ").concat(transition, "s;-webkit-transition: transform ").concat(transition, "s;");
    }
  }, {
    key: "formulaUnlimitedScroll",
    value: function formulaUnlimitedScroll(range, absoluteHeight, direction) {
      var _this = this;

      var _this$props = this.props,
          height = _this$props.height,
          updateHeight = _this$props.updateHeight,
          columnId = _this$props.columnId;
      var factor = direction === 'up' ? 1 : -1;
      this.touchEnd = false; // 点击超过范围，点击到补帧时，先跳到另一端的补帧

      updateHeight(-range * factor * __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] + height, columnId); // 再做过渡动画

      setTimeout(function () {
        _newArrowCheck(this, _this);

        this.touchEnd = true;
        var index = Math.round(absoluteHeight / -__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */]) + range * factor;
        var relativeHeight = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * index;
        updateHeight(relativeHeight, columnId, true);
      }.bind(this), 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onTouchStart = function onTouchStart(e) {
        _newArrowCheck(this, _this2);

        // 记录第一次的点击位置
        this.startY = e.changedTouches[0].clientY;
        this.preY = e.changedTouches[0].clientY;
        this.hadMove = false;
      }.bind(this);

      var onTouchMove = function onTouchMove(e) {
        _newArrowCheck(this, _this2);

        var y = e.changedTouches[0].clientY;
        var deltaY = y - this.preY;
        this.preY = y;
        this.touchEnd = false;
        if (Math.abs(y - this.startY) > 10) this.hadMove = true;
        var newPos = this.props.height + deltaY; // 处理时间选择器的无限滚动

        if (this.props.mode === 'time') {
          if (this.props.columnId === '0') {
            // 数字 28 来自于 4 格补帧 + 0 ～ 23 的 24 格，共 28 格
            if (newPos > __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 3) {
              newPos = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 27 + deltaY;
            }

            if (newPos < __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 28) {
              newPos = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 4 + deltaY;
            }
          } else if (this.props.columnId === '1') {
            if (newPos > __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 3) {
              newPos = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 63 + deltaY;
            }

            if (newPos < __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 64) {
              newPos = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 4 + deltaY;
            }
          }
        }

        this.props.updateHeight(newPos, this.props.columnId);
        e.preventDefault();
      }.bind(this);

      var onTouchEnd = function onTouchEnd(e) {
        _newArrowCheck(this, _this2);

        var _this$props2 = this.props,
            mode = _this$props2.mode,
            range = _this$props2.range,
            height = _this$props2.height,
            updateHeight = _this$props2.updateHeight,
            onColumnChange = _this$props2.onColumnChange,
            columnId = _this$props2.columnId;
        var max = 0;
        var min = -__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * (range.length - 1);
        var endY = e.changedTouches[0].clientY;
        this.touchEnd = true; // touchEnd 时的高度，可能带小数点，需要再处理

        var absoluteHeight;

        if (!this.hadMove) {
          /** 点击 */
          // 屏幕高度
          var windowHeight = window.innerHeight; // picker__mask 垂直方向距离屏幕顶部的高度

          var relativeY = windowHeight - __WEBPACK_IMPORTED_MODULE_1__constant__["b" /* MASK_HEIGHT */] / 2;
          absoluteHeight = height - __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - (endY - relativeY); // 处理时间选择器的无限滚动

          if (this.props.mode === 'time') {
            if (this.props.columnId === '0') {
              // 点击上溢出
              // absoluteHeight 是相对模块中点来算的，所以会算多半行，这时要减去这半行，即2.5行
              if (absoluteHeight > -__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 2.5) {
                this.formulaUnlimitedScroll(24, absoluteHeight, 'up');
                return;
              } // 点击下溢出


              if (absoluteHeight < -__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 28.5) {
                this.formulaUnlimitedScroll(24, absoluteHeight, 'down');
                return;
              }
            } else if (this.props.columnId === '1') {
              // 点击上溢出
              if (absoluteHeight > -__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 2.5) {
                this.formulaUnlimitedScroll(60, absoluteHeight, 'up');
                return;
              } // 点击下溢出


              if (absoluteHeight < -__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * 64.5) {
                this.formulaUnlimitedScroll(60, absoluteHeight, 'down');
                return;
              }
            }
          }
        } else {
          /** 滚动 */
          absoluteHeight = height - __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */];
        } // 边界情况处理


        if (absoluteHeight > max) absoluteHeight = 0;
        if (absoluteHeight < min) absoluteHeight = min; // 先按公式算出 index, 再用此 index 算出一个整数高度

        var index = Math.round(absoluteHeight / -__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */]);
        var relativeHeight = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* TOP */] - __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* LINE_HEIGHT */] * index;

        if (this.props.mode === 'date') {
          if (this.props.columnId === '0') {
            this.props.updateDay(+this.props.range[index].replace(/[^0-9]/gi, ''), 0);
          }

          if (this.props.columnId === '1') {
            this.props.updateDay(+this.props.range[index].replace(/[^0-9]/gi, ''), 1);
          }

          if (this.props.columnId === '2') {
            this.props.updateDay(+this.props.range[index].replace(/[^0-9]/gi, ''), 2);
          }
        }

        updateHeight(relativeHeight, columnId, mode === 'time');
        onColumnChange && onColumnChange(relativeHeight, columnId, e);
      }.bind(this); // picker__item


      var range = this.props.range || [];
      var pickerItem = range.map(function (item) {
        _newArrowCheck(this, _this2);

        var rangeKey = this.props.rangeKey;
        var content = rangeKey ? item[rangeKey] : item;
        return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
          className: "weui-picker__item"
        }, "".concat(content));
      }.bind(this));
      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "weui-picker__group",
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd
      }, __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "weui-picker__mask"
      }), __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "weui-picker__indicator"
      }), __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "weui-picker__content",
        style: this.getPosition()
      }, pickerItem));
    }
  }]);

  return PickerGroup;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return verifyDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMaxDay; });
/**
 * @author zhongxin
 * @description 日期选择器相关函数
 *
 */

/**
 * 校验日期合法性，返回合法性和日期数组
 *
 * @param {String} date
 * @param {String} start
 * @param {String} end
 * @returns
 */
function verifyDate(date) {
  if (!date) return false;
  date = new Date(date.replace(/-/g, '/'));
  return isNaN(date.getMonth()) ? false : date;
}
/**
 * 获取当月最大天数
 *
 * @param {Number} year
 * @param {Number} month
 * @returns
 */


function getMaxDay(year, month) {
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;

  if (month === 2) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) return 29;else return 28;
  }

  return 31;
}



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(50);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".weui-picker, .weui-picker__hd {\n  font-size: 12px; }\n", ""]);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Label = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Label, _Nerv$Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("label", reset, this.props.children);
    }
  }]);

  return Label;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Label);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Textarea = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Textarea, _Nerv$Component);

  function Textarea() {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Textarea, [{
    key: "onChange",
    value: function onChange(e) {
      var _this$props = this.props,
          _this$props$onChange = _this$props.onChange,
          onChange = _this$props$onChange === void 0 ? '' : _this$props$onChange,
          _this$props$onInput = _this$props.onInput,
          onInput = _this$props$onInput === void 0 ? '' : _this$props$onInput;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      if (onChange) return onChange && onChange(e);
      if (onInput) return onInput && onInput(e);
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var onFocus = this.props.onFocus;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onFocus && onFocus(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onBlur && onBlur(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          _this$props2$placehol = _this$props2.placeholder,
          placeholder = _this$props2$placehol === void 0 ? '' : _this$props2$placehol,
          disabled = _this$props2.disabled,
          _this$props2$maxlengt = _this$props2.maxlength,
          maxlength = _this$props2$maxlengt === void 0 ? 140 : _this$props2$maxlengt,
          _this$props2$autoFocu = _this$props2.autoFocus,
          autoFocus = _this$props2$autoFocu === void 0 ? false : _this$props2$autoFocu;
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("textarea", _extends({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['className', 'placeholder', 'disabled', 'maxlength', 'onChange', 'onInput', 'onFocus', 'onBlur', 'autofocus']), {
        className: className,
        placeholder: placeholder,
        disabled: disabled,
        maxlength: maxlength,
        autofocus: autoFocus,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }));
    }
  }]);

  return Textarea;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Textarea);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_parse_type__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





/**
 * props 类型检测
 *
 * @param {Object} props
 */

function parseType(props) {
  var _this = this;

  var min = props.min,
      max = props.max,
      step = props.step,
      disabled = props.disabled,
      value = props.value,
      backgroundColor = props.backgroundColor,
      activeColor = props.activeColor,
      blockSize = props.blockSize,
      blockColor = props.blockColor,
      showValue = props.showValue,
      onChange = props.onChange,
      onChanging = props.onChanging; // 抛出错误信息

  var throwErrorMsg = function throwErrorMsg(type) {
    _newArrowCheck(this, _this);

    throw new TypeError(type);
  }.bind(this);

  if (min) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["d" /* isNumber */])(min) ? '' : throwErrorMsg('min');
  if (max) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["d" /* isNumber */])(max) ? '' : throwErrorMsg('max');
  if (step) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["d" /* isNumber */])(step) ? '' : throwErrorMsg('step');
  if (value) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["d" /* isNumber */])(value) ? '' : throwErrorMsg('value');
  if (blockSize) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["d" /* isNumber */])(blockSize) ? '' : throwErrorMsg('blockSize');
  if (disabled) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["a" /* isBoolean */])(disabled) ? '' : throwErrorMsg('disabled');
  if (showValue) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["a" /* isBoolean */])(showValue) ? '' : throwErrorMsg('showValue');

  if (backgroundColor) {
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["e" /* isString */])(backgroundColor) ? '' : throwErrorMsg('backgroundColor');
  }

  if (activeColor) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["e" /* isString */])(activeColor) ? '' : throwErrorMsg('activeColor');
  if (blockColor) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["e" /* isString */])(blockColor) ? '' : throwErrorMsg('blockColor');
  if (onChange) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["c" /* isFunction */])(onChange) ? '' : throwErrorMsg('onChange');
  if (onChanging) Object(__WEBPACK_IMPORTED_MODULE_2__utils_parse_type__["c" /* isFunction */])(onChanging) ? '' : throwErrorMsg('onChanging');
}

var Slider = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Slider, _Nerv$Component);

  function Slider() {
    var _this2;

    _classCallCheck(this, Slider);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
    parseType(_this2.props);
    _this2.sliderInsRef = '';

    if (_this2.props.value) {
      if (_this2.props.value > _this2.props.max) {
        _this2.props.value = _this2.props.max;
      }
    }

    _this2.state = {
      value: _this2.props.value,
      controlled: typeof _this2.props.value !== 'undefined',
      totalWidth: 0,
      touching: false,
      ogX: 0,
      touchID: false,
      percent: _this2.props.value ? parseInt(_this2.props.value / (_this2.props.max - _this2.props.min) * 100) : 0
    };
    _this2.handleTouchStart = _this2.handleTouchStart.bind(_assertThisInitialized(_this2));
    _this2.handleTouchMove = _this2.handleTouchMove.bind(_assertThisInitialized(_this2));
    _this2.handleTouchEnd = _this2.handleTouchEnd.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.value === 0) {
        this.setState({
          value: this.countValue()
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.controlled) {
        if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
          var percent = parseInt(nextProps.value / (this.props.max - this.props.min) * 100);
          this.setState({
            value: nextProps.value,
            percent: percent
          });
        }
      }
    }
  }, {
    key: "countValue",
    value: function countValue() {
      var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.percent;
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.min;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.max;
      var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props.step;
      var value = 0;

      if (percent === 100) {
        value = max;
      } else if (percent === 0) {
        value = min;
      } else {
        value = Math.round(percent * max / 100 / step);
        value = Math.round(value * step);
      }

      return value;
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      if (this.state.touching || this.props.disabled) return;
      var barDOM = __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.findDOMNode(this.sliderInsRef);
      this.setState({
        touching: true,
        touchId: e.targetTouches[0].identifier,
        totalWidth: barDOM.clientWidth,
        ogX: e.targetTouches[0].pageX,
        ogPercent: this.state.percent
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var _this3 = this;

      var onChanging = this.props.onChanging;
      if (!this.state.touching || this.props.disabled) return;
      if (e.targetTouches[0].identifier !== this.state.touchId) return; // 阻止默认事件

      e.preventDefault();
      var pageX = e.targetTouches[0].pageX;
      var diffX = pageX - this.state.ogX;
      var percent = parseInt(diffX / this.state.totalWidth * 100) + this.state.ogPercent;
      percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
      var value = this.countValue(percent);
      if (value === this.state.value) return;
      this.setState({
        percent: percent,
        value: value
      }, function () {
        _newArrowCheck(this, _this3);

        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            detail: e.detail,
            value: this.state.value
          }
        });
        if (onChanging) onChanging(e);
      }.bind(this));
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      var _this4 = this;

      if (!this.state.touching || this.props.disabled) {
        return;
      }

      var onChange = this.props.onChange;
      this.setState({
        touching: false,
        ogX: 0,
        touchId: false,
        ogPercent: 0
      }, function () {
        _newArrowCheck(this, _this4);

        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            detail: e.detail,
            value: this.state.value
          }
        });
        if (onChange) onChange(e);
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          _this$props$name = _this$props.name,
          name = _this$props$name === void 0 ? '' : _this$props$name,
          className = _this$props.className,
          showValue = _this$props.showValue,
          backgroundColor = _this$props.backgroundColor,
          activeColor = _this$props.activeColor,
          blockColor = _this$props.blockColor,
          blockSize = _this$props.blockSize,
          restProps = _objectWithoutProperties(_this$props, ["name", "className", "showValue", "backgroundColor", "activeColor", "blockColor", "blockSize"]);

      var _blockSize = blockSize;
      var cls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('weui-slider-box', className);
      var innerStyles = {
        backgroundColor: backgroundColor
      };
      var percent = this.state.percent > 100 ? 100 : this.state.percent;
      var trackStyles = {
        width: "".concat(percent, "%"),
        backgroundColor: activeColor
      };

      if (_blockSize < 12) {
        _blockSize = 28;
      }

      if (_blockSize > 28) {
        _blockSize = 28;
      }

      var handlerStyles = {
        left: "".concat(percent, "%"),
        width: "".concat(_blockSize, "px"),
        height: "".concat(_blockSize, "px"),
        backgroundColor: blockColor,
        marginTop: "-".concat(Math.floor(_blockSize / 2), "px"),
        marginLeft: "-".concat(Math.floor(_blockSize / 2), "px")
      };
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
        className: cls
      }, restProps), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "weui-slider"
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "weui-slider__inner",
        style: innerStyles,
        ref: function (c) {
          _newArrowCheck(this, _this5);

          return this.sliderInsRef = c;
        }.bind(this)
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        style: trackStyles,
        className: "weui-slider__track"
      }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        style: handlerStyles,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        className: "weui-slider__handler"
      }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("input", {
        type: "hidden",
        name: name,
        value: this.state.value
      }))), showValue ? __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "weui-slider-box__value"
      }, this.state.value) : false);
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

Slider.defaultProps = {
  max: 100,
  min: 0,
  step: 1,
  showValue: false,
  disabled: false,
  value: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__danmu__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_scss__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_weui__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Video组件的样式参考了[uni-app](https://github.com/dcloudio/uni-app/tree/master/packages/uni-h5)的实现
 */








/**
 * @typedef {Object} Danmu
 * @property {string} text 弹幕文字
 * @property {string} color 弹幕颜色
 * @property {number} [time] 弹幕时间
 */

/**
 * Video组件参数
 * @typedef {Object} VideoProps
 * @property {string} src 要播放视频的资源地址
 * @property {boolean} [autoPauseIfNavigate=true] 当跳转到其它小程序页面时，是否自动暂停本页面的视频
 * @property {boolean} [autoPauseIfOpenNative=true] 当跳转到其它微信原生页面时，是否自动暂停本页面的视频
 * @property {boolean} [autoplay=false] 是否自动播放
 * @property {boolean} [controls=true] 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
 * @property {boolean} [danmuBtn=false] 是否显示弹幕按钮，只在初始化时有效，不能动态变更
 * @property {Array.<Danmu>} [danmuList=[]] 弹幕列表
 * @property {boolean} [enableDanmu=false] 是否展示弹幕，只在初始化时有效，不能动态变更
 * @property {boolean} [enablePlayGesture=false] 是否开启播放手势，即双击切换播放/暂停
 * @property {boolean} [enableProgressGesture=true] 是否开启控制进度的手势
 * @property {number} [initialTime=0] 指定视频初始播放位置
 * @property {boolean} [loop=false] 是否循环播放
 * @property {boolean} [muted=false] 是否静音播放
 * @property {string} [objectFit=contain] 当视频大小与 video 容器大小不一致时，视频的表现形式
 * @property {string} [playBtnPosition=bottom] 播放按钮的位置
 * @property {boolean} [showCenterPlayBtn=true] 是否显示视频中间的播放按钮
 * @property {boolean} [showFullscreenBtn=true] 是否显示全屏按钮
 * @property {boolean} [showMuteBtn=false] 是否显示静音按钮
 * @property {boolean} [showPlayBtn=true] 是否显示视频底部控制栏的播放按钮
 * @property {boolean} [showProgress=true] 若不设置，宽度大于240时才会显示
 * @property {boolean} [vslideGesture=false] 在非全屏模式下，是否开启亮度与音量调节手势（同 pageGesture）
 * @property {boolean} [vslideGestureInFullscreen=true] 在全屏模式下，是否开启亮度与音量调节手势
 * @property {number} [direction]  设置全屏时视频的方向，不指定则根据宽高比自动判断
 * @property {number} [duration]  指定视频时长
 * @property {string} [poster]  视频封面的图片网络资源地址。若 controls 属性值为 false 则设置 poster 无效
 * @property {string} [title]  视频的标题，全屏时在顶部展示
 * @property {Function} [onPlay] 当开始/继续播放时触发play事件
 * @property {Function} [onPause] 当暂停播放时触发 pause 事件
 * @property {Function} [onEnded] 当播放到末尾时触发 ended 事件
 * @property {Function} [onTimeUpdate] 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次
 * @property {Function} [onFullscreenChange] 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal
 * @property {Function} [onWaiting] 视频出现缓冲时触发
 * @property {Function} [onError] 视频播放出错时触发
 * @property {Function} [onProgress] 加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比
 */

var Video = /*#__PURE__*/function (_Component) {
  _inherits(Video, _Component);

  /** @type {VideoProps} */

  /** @type {HTMLVideoElement} */

  /** @type {Contorls} */

  /** @type {HTMLDivElement} */

  /** @type {HTMLDivElement} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */
  function Video(props, context) {
    var _this2 = this;

    var _this;

    _classCallCheck(this, Video);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Video).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "videoRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "controlsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "currentTimeRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "danmuRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "currentTime", 0);

    _defineProperty(_assertThisInitialized(_this), "lastClickedTime", void 0);

    _defineProperty(_assertThisInitialized(_this), "lastTouchScreenX", void 0);

    _defineProperty(_assertThisInitialized(_this), "lastTouchScreenY", void 0);

    _defineProperty(_assertThisInitialized(_this), "progressDimentions", {
      left: 0,
      right: 0,
      width: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onTimeUpdate", function (e) {
      _newArrowCheck(this, _this2);

      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          duration: e.srcElement.duration,
          currentTime: e.srcElement.currentTime
        }
      });
      _this.currentTime = _this.videoRef.currentTime;
      var duration = _this.state.duration;

      if (!_this.controlsRef.isDraggingProgressBall && !_this.isDraggingProgress) {
        _this.controlsRef.setProgressBall(_this.currentTime / duration);
      }

      _this.controlsRef.setCurrentTime(_this.currentTime);

      _this.danmuRef.tick(_this.currentTime);

      _this.props.onTimeUpdate && _this.props.onTimeUpdate(e);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onEnded", function (e) {
      _newArrowCheck(this, _this2);

      _this.setState({
        isFirst: true
      });

      _this.pause();

      _this.controlsRef.toggleVisibility();

      _this.props.onEnded && _this.props.onEnded(e);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onPlay", function (e) {
      _newArrowCheck(this, _this2);

      _this.props.onPlay && _this.props.onPlay(e);

      _this.controlsRef.toggleVisibility(true);

      if (!_this.state.isPlaying) {
        _this.setState({
          isPlaying: true
        });
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onPause", function (e) {
      _newArrowCheck(this, _this2);

      _this.props.onPause && _this.props.onPause(e);

      _this.controlsRef.toggleVisibility(true);

      if (_this.state.isPlaying) {
        _this.setState({
          isPlaying: false
        });
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onError", function (e) {
      _newArrowCheck(this, _this2);

      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          errMsg: e.srcElement.error.code
        }
      });
      _this.props.onError && _this.props.onError(e);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onClickContainer", function (e) {
      _newArrowCheck(this, _this2);

      if (_this.props.enablePlayGesture) {
        var now = Date.now();

        if (now - _this.lastClickedTime < 300) {
          // 双击
          if (_this.state.isPlaying) {
            _this.pause();
          } else {
            _this.play();
          }
        }

        _this.lastClickedTime = now;
      }

      _this.controlsRef.toggleVisibility();
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onClickFullScreenBtn", function (e) {
      _newArrowCheck(this, _this2);

      e.stopPropagation();

      _this.toggleFullScreen();
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onLoadedMetadata", function (e) {
      _newArrowCheck(this, _this2);

      _this.setState({
        duration: _this.videoRef.duration
      });

      _this.duration = _this.videoRef.duration;
      if (_this.props.poster) return;

      if (_this.state.isFirst) {
        _this.seek(_this.props.initialTime);
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "toggleDanmu", function (e) {
      _newArrowCheck(this, _this2);

      e.stopPropagation();

      _this.controlsRef.toggleVisibility(true);

      _this.setState({
        enableDanmu: !_this.state.enableDanmu
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "toggleFullScreen", function (nextFullScreenState) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      var isFullScreen = nextFullScreenState === undefined ? !_this.state.isFullScreen : nextFullScreenState;
      var currentTime = _this.currentTime;
      var danmuList = _this.danmuRef.danmuList;

      _this.setState({
        isFullScreen: isFullScreen
      }, function () {
        _newArrowCheck(this, _this3);

        var evt = new Event('fullscreenChange', {
          fullScreen: _this.state.isFullScreen,
          direction: 'vertical'
        });
        _this.props.onFullscreenChange && _this.props.onFullscreenChange(evt);
        _this.danmuRef.danmuList = danmuList;

        _this.seek(currentTime);

        _this.state.isPlaying && _this.play();

        _this.controlsRef.toggleVisibility(true);
      }.bind(this));
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "toggleMute", function (e) {
      var _this4 = this;

      _newArrowCheck(this, _this2);

      e.stopPropagation();

      _this.setState(function () {
        _newArrowCheck(this, _this4);

        var nextMuteState = !_this.state.isMute;
        _this.videoRef.muted = nextMuteState;

        _this.controlsRef.toggleVisibility(true);

        return {
          isMute: nextMuteState
        };
      }.bind(this));
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      _newArrowCheck(this, _this2);

      _this.videoRef.play();

      _this.setState({
        isPlaying: true,
        isFirst: false
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "pause", function () {
      _newArrowCheck(this, _this2);

      _this.videoRef.pause();

      _this.setState({
        isPlaying: false
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "stop", function () {
      _newArrowCheck(this, _this2);

      _this.videoRef.pause();

      _this.seek(0);

      _this.setState({
        isPlaying: false
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "seek", function (position) {
      _newArrowCheck(this, _this2);

      _this.videoRef.currentTime = position;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "showStatusBar", function () {
      _newArrowCheck(this, _this2);

      console.error('暂不支持 videoContext.showStatusBar');
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "hideStatusBar", function () {
      _newArrowCheck(this, _this2);

      console.error('暂不支持 videoContext.hideStatusBar');
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "requestFullScreen", function () {
      _newArrowCheck(this, _this2);

      _this.toggleFullScreen(true);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "exitFullScreen", function () {
      _newArrowCheck(this, _this2);

      _this.toggleFullScreen(false);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "playbackRate", function (rate) {
      _newArrowCheck(this, _this2);

      _this.videoRef.playbackRate = rate;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onTouchStartContainer", function (e) {
      _newArrowCheck(this, _this2);

      _this.lastTouchScreenX = e.touches[0].screenX;
      _this.lastTouchScreenY = e.touches[0].screenY;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "bindTouchEvents", function () {
      var _this5 = this;

      _newArrowCheck(this, _this2);

      var lastVolume;
      var lastPercentage;
      var nextPercentage;
      var gestureType = 'none';

      var analyseGesture = function analyseGesture(e) {
        _newArrowCheck(this, _this5);

        var obj = {};
        var nowX = e.touches[0].screenX;
        var nowY = e.touches[0].screenY;
        var distX = nowX - _this.lastTouchScreenX;
        var distY = nowY - _this.lastTouchScreenY;

        if (gestureType === 'none') {
          var dist = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* calcDist */])(distX, distY);

          if (dist < 10) {
            obj.type = 'none';
            return obj;
          }

          if (distX === 0 || Math.abs(distY / distX) > 1) {
            var enableVslideGesture = _this.state.isFullScreen ? _this.props.vslideGestureInFullscreen : _this.props.vslideGesture;

            if (enableVslideGesture) {
              gestureType = 'adjustVolume';
              lastVolume = _this.videoRef.volume;
            }
          } else if (_this.props.enableProgressGesture && Math.abs(distY / distX) <= 1) {
            gestureType = 'adjustProgress';
            lastPercentage = _this.currentTime / _this.state.duration;
          }
        }

        obj.type = gestureType;
        obj.dataX = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* normalizeNumber */])(distX / window.screen.width);
        obj.dataY = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* normalizeNumber */])(distY / window.screen.height);
        return obj;
      }.bind(this);

      var touchMove = function touchMove(e) {
        _newArrowCheck(this, _this5);

        if (_this.controlsRef.isDraggingProgressBall) return;
        var gestureObj = analyseGesture(e);

        if (gestureObj.type === 'adjustVolume') {
          _this.toastVolumeRef.style.visibility = 'visible';
          var nextVolume = Math.max(Math.min(lastVolume - gestureObj.dataY, 1), 0);
          _this.videoRef.volume = nextVolume;
          _this.toastVolumeBarRef.style.width = "".concat(nextVolume * 100, "%");
        } else if (gestureObj.type === 'adjustProgress') {
          _this.isDraggingProgress = true;
          nextPercentage = Math.max(Math.min(lastPercentage + gestureObj.dataX, 1), 0);

          _this.controlsRef.setProgressBall(nextPercentage);

          _this.controlsRef.toggleVisibility(true);

          _this.toastProgressTitleRef.innerHTML = "".concat(Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* formatTime */])(nextPercentage * _this.duration), " / ").concat(Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* formatTime */])(_this.duration));
          _this.toastProgressRef.style.visibility = 'visible';
        }
      }.bind(this);

      var touchEnd = function touchEnd(e) {
        _newArrowCheck(this, _this5);

        if (gestureType === 'adjustVolume') {
          _this.toastVolumeRef.style.visibility = 'hidden';
        } else if (gestureType === 'adjustProgress') {
          _this.toastProgressRef.style.visibility = 'hidden';
        }

        gestureType = 'none';

        if (_this.isDraggingProgress) {
          _this.isDraggingProgress = false;

          _this.seek(nextPercentage * _this.videoRef.duration);
        }
      }.bind(this);

      document.body.addEventListener('touchmove', touchMove);
      document.body.addEventListener('touchend', touchEnd);
      document.body.addEventListener('touchcancel', touchEnd);
      return function () {
        _newArrowCheck(this, _this5);

        document.body.removeEventListener('touchmove', touchMove);
        document.body.removeEventListener('touchend', touchEnd);
        document.body.removeEventListener('touchcancel', touchEnd);
      }.bind(this);
    }.bind(this));

    var stateObj = _this.getInitialState(_this.props);

    _this.state = Object.assign({
      duration: null,
      isPlaying: false,
      isFirst: true,
      enableDanmu: false,
      isFullScreen: false,
      isMute: false
    }, stateObj);
    return _this;
  }

  _createClass(Video, [{
    key: "sendDanmu",
    value: function sendDanmu(danmu) {
      this.danmuRef.sendDanmu(danmu);
    }
  }, {
    key: "getInitialState",
    value: function getInitialState(props) {
      var stateObj = {
        enableDanmu: props.enableDanmu
      };
      return stateObj;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this6 = this;

      var getRef = function getRef(refName) {
        var _this7 = this;

        _newArrowCheck(this, _this6);

        return function (ref) {
          _newArrowCheck(this, _this7);

          if (!ref) return;
          this[refName] = ref;
        }.bind(this);
      }.bind(this);

      this.getVideoRef = getRef('videoRef');
      this.getControlsRef = getRef('controlsRef');
      this.getDanmuRef = getRef('danmuRef');
      this.getToastProgressRef = getRef('toastProgressRef');
      this.getToastProgressTitleRef = getRef('toastProgressTitleRef');
      this.getToastVolumeRef = getRef('toastVolumeRef');
      this.getToastVolumeBarRef = getRef('toastVolumeBarRef');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this8 = this;

      this.unbindTouchEvents = this.bindTouchEvents();
      this.sendDanmu(this.props.danmuList);
      __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.eventCenter.on('__taroRouterChange', function () {
        _newArrowCheck(this, _this8);

        if (this.state.isPlaying) {
          this.stop();
        }
      }.bind(this));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nProps) {
      var nState = this.getInitialState(nProps);
      this.setState(nState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindTouchEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$props = this.props,
          src = _this$props.src,
          autoplay = _this$props.autoplay,
          className = _this$props.className,
          style = _this$props.style,
          id = _this$props.id,
          initialTime = _this$props.initialTime,
          loop = _this$props.loop,
          muted = _this$props.muted,
          objectFit = _this$props.objectFit,
          poster = _this$props.poster,
          controls = _this$props.controls,
          showFullscreenBtn = _this$props.showFullscreenBtn,
          showMuteBtn = _this$props.showMuteBtn,
          showPlayBtn = _this$props.showPlayBtn,
          showProgress = _this$props.showProgress,
          showCenterPlayBtn = _this$props.showCenterPlayBtn,
          danmuBtn = _this$props.danmuBtn;
      var _this$state = this.state,
          enableDanmu = _this$state.enableDanmu,
          isFirst = _this$state.isFirst,
          isMute = _this$state.isMute,
          isFullScreen = _this$state.isFullScreen;
      var duration = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* formatTime */])(this.props.duration || this.state.duration || null);
      var videoProps = {
        id: id,
        src: src,
        autoplay: autoplay,
        poster: controls ? poster : null,
        loop: loop,
        muted: muted,
        start: initialTime,
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-video-video', className),
        style: Object.assign({
          objectFit: objectFit
        }, style),
        ref: this.getVideoRef,
        playsinline: true,
        'webkit-playsinline': true,
        'object-fit': objectFit,
        controls: false,
        onTimeUpdate: this.onTimeUpdate,
        onEnded: this.onEnded,
        onPlay: this.onPlay,
        onPause: this.onPause,
        onError: this.onError,
        onDurationChange: this.onLoadedMetadata
      };
      var videoNode = __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-video-container', {
          'taro-video-type-fullscreen': isFullScreen,
          'taro-video-type-mute': isMute
        }),
        onTouchStart: this.onTouchStartContainer,
        onClick: this.onClickContainer
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("video", videoProps, "\u6682\u65F6\u4E0D\u652F\u6301\u64AD\u653E\u8BE5\u89C6\u9891"), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__controls__["a" /* default */], {
        controls: controls,
        currentTime: this.currentTime,
        duration: this.props.duration || this.state.duration || null,
        isPlaying: this.state.isPlaying,
        pauseFunc: this.pause,
        playFunc: this.play,
        seekFunc: this.seek,
        showPlayBtn: showPlayBtn,
        showProgress: showProgress,
        ref: this.getControlsRef
      }, showMuteBtn && __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-video-mute', {
          'taro-video-type-mute': isMute
        }),
        onClick: this.toggleMute
      }), danmuBtn && __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-video-danmu-button', {
          'taro-video-danmu-button-active': enableDanmu
        }),
        onClick: this.toggleDanmu
      }, "\u5F39\u5E55"), showFullscreenBtn && __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-video-fullscreen', {
          'taro-video-type-fullscreen': isFullScreen
        }),
        onClick: this.onClickFullScreenBtn
      })), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__danmu__["a" /* default */], {
        ref: this.getDanmuRef,
        enable: enableDanmu
      }), isFirst && showCenterPlayBtn && !this.state.isPlaying && __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        "class": "taro-video-cover"
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        "class": "taro-video-cover-play-button",
        onClick: this.play
      }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("p", {
        "class": "taro-video-cover-duration"
      }, duration)), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        "class": "taro-video-toast taro-video-toast-volume",
        ref: this.getToastVolumeRef
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        "class": "taro-video-toast-title"
      }, "\u97F3\u91CF"), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "taro-video-toast-icon"
      }), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        "class": "taro-video-toast-value"
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        "class": "taro-video-toast-value-content",
        ref: this.getToastVolumeBarRef
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        "class": "taro-video-toast-volume-grids"
      }, new Array(10).fill().map(function (v) {
        _newArrowCheck(this, _this9);

        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
          "class": "taro-video-toast-volume-grids-item"
        });
      }.bind(this)))))), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "taro-video-toast taro-video-toast-progress",
        ref: this.getToastProgressRef
      }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "taro-video-toast-title",
        ref: this.getToastProgressTitleRef
      })));
      return this.state.isFullScreen ? Object(__WEBPACK_IMPORTED_MODULE_1_nervjs__["createPortal"])(videoNode, document.body) : __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
        className: "taro-video",
        style: this.props.style
      }, videoNode);
    }
  }]);

  return Video;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs__["Component"]);

_defineProperty(Video, "defaultProps", {
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true,
  autoplay: false,
  controls: true,
  danmuBtn: false,
  danmuList: [],
  enableDanmu: false,
  enablePlayGesture: false,
  enableProgressGesture: true,
  initialTime: 0,
  loop: false,
  muted: false,
  objectFit: 'contain',
  playBtnPosition: 'bottom',
  showCenterPlayBtn: true,
  showFullscreenBtn: true,
  showMuteBtn: false,
  showPlayBtn: true,
  showProgress: true,
  vslideGesture: false,
  vslideGestureInFullscreen: true
});

/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Danmu = /*#__PURE__*/function (_PureComponent) {
  _inherits(Danmu, _PureComponent);

  function Danmu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Danmu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Danmu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      danmuList: []
    });

    _defineProperty(_assertThisInitialized(_this), "danmuList", []);

    _defineProperty(_assertThisInitialized(_this), "danmuElList", []);

    _defineProperty(_assertThisInitialized(_this), "currentTime", 0);

    return _this;
  }

  _createClass(Danmu, [{
    key: "ensureProperties",
    value: function ensureProperties(danmu) {
      var clonedDanmu = _objectSpread({}, danmu);

      if (!('time' in danmu)) {
        clonedDanmu.time = this.currentTime;
      }

      clonedDanmu.key = Math.random();
      clonedDanmu.bottom = "".concat(Math.random() * 90 + 5, "%");
      return clonedDanmu;
    }
  }, {
    key: "sendDanmu",
    value: function sendDanmu(danmuList) {
      var _this2 = this;

      if (Array.isArray(danmuList)) {
        this.danmuList = [].concat(_toConsumableArray(this.danmuList), _toConsumableArray(danmuList.map(function (danmu) {
          _newArrowCheck(this, _this2);

          return this.ensureProperties(danmu);
        }.bind(this))));
      } else {
        var danmu = danmuList;
        this.danmuList = [].concat(_toConsumableArray(this.danmuList), [_objectSpread({}, this.ensureProperties(danmu))]);
      }
    }
  }, {
    key: "tick",
    value: function tick(currentTime) {
      var _this3 = this;

      this.currentTime = currentTime;
      if (!this.props.enable) return;
      var danmuList = this.danmuList;
      /**
       * @todo 这个判断对拖拽进度的处理不严谨
       */

      var newDanmuList = danmuList.filter(function (_ref) {
        var time = _ref.time;

        _newArrowCheck(this, _this3);

        return currentTime - time < 4 && currentTime > time;
      }.bind(this));
      var shouldUpdate = false;
      var oldDanmuList = this.state.danmuList;

      if (newDanmuList.length !== oldDanmuList.length) {
        shouldUpdate = true;
      } else {
        shouldUpdate = newDanmuList.some(function (_ref2) {
          var _this4 = this;

          var key = _ref2.key;

          _newArrowCheck(this, _this3);

          return oldDanmuList.every(function (danmu) {
            _newArrowCheck(this, _this4);

            return key !== danmu.key;
          }.bind(this));
        }.bind(this));
      }

      if (shouldUpdate) {
        this.setState({
          danmuList: newDanmuList
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this5 = this;

      requestAnimationFrame(function () {
        var _this6 = this;

        _newArrowCheck(this, _this5);

        setTimeout(function () {
          var _this7 = this;

          _newArrowCheck(this, _this6);

          var danmuElList = this.danmuElList.splice(0);
          danmuElList.forEach(function (danmu) {
            _newArrowCheck(this, _this7);

            danmu.style.left = 0;
            danmu.style.webkitTransform = 'translateX(-100%)';
            danmu.style.transform = 'translateX(-100%)';
          }.bind(this));
        }.bind(this));
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      if (!this.props.enable) return '';
      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-danmu"
      }, this.state.danmuList.map(function (_ref3) {
        var _this9 = this;

        var text = _ref3.text,
            color = _ref3.color,
            bottom = _ref3.bottom,
            key = _ref3.key;

        _newArrowCheck(this, _this8);

        return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("p", {
          className: "taro-video-danmu-item",
          key: key,
          style: {
            color: color,
            bottom: bottom
          },
          ref: function (ref) {
            _newArrowCheck(this, _this9);

            if (ref) {
              this.danmuElList.push(ref);
            }
          }.bind(this)
        }, text);
      }.bind(this)));
    }
  }]);

  return Danmu;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Danmu);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(11);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * @typedef {Object} ControlsProps
 * @property {Boolean} controls={controls}
 * @property {Number} currentTime={this.currentTime}
 * @property {Number} duration={this.state.duration}
 * @property {Boolean} isPlaying={this.state.isPlaying}
 * @property {Function} pauseFunc={this.pause}
 * @property {Function} playFunc={this.play}
 * @property {Function} seekFunc={this.seek}
 * @property {Boolean} showPlayBtn={showPlayBtn}
 * @property {Boolean} showProgress={showProgress}
 */

var Controls = /*#__PURE__*/function (_Component) {
  _inherits(Controls, _Component);

  function Controls() {
    var _getPrototypeOf2,
        _this2 = this;

    var _this;

    _classCallCheck(this, Controls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Controls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "visible", false);

    _defineProperty(_assertThisInitialized(_this), "isDraggingProgressBall", false);

    _defineProperty(_assertThisInitialized(_this), "hideControlsTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "progressDimentions", {
      left: 0,
      right: 0,
      width: 0
    });

    _defineProperty(_assertThisInitialized(_this), "calcPercentage", function (pageX) {
      _newArrowCheck(this, _this2);

      var pos = pageX - _this.progressDimentions.left;
      pos = Math.max(pos, 0);
      pos = Math.min(pos, _this.progressDimentions.width);
      return pos / _this.progressDimentions.width;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "getControlsRef", function (ref) {
      _newArrowCheck(this, _this2);

      if (!ref) return;
      _this.controlsRef = ref;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "getCurrentTimeRef", function (ref) {
      _newArrowCheck(this, _this2);

      if (!ref) return;
      _this.currentTimeRef = ref;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "getProgressBallRef", function (ref) {
      _newArrowCheck(this, _this2);

      if (!ref) return;
      _this.progressBallRef = ref;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onDragProgressBallStart", function () {
      _newArrowCheck(this, _this2);

      _this.isDraggingProgressBall = true;
      _this.hideControlsTimer && clearTimeout(_this.hideControlsTimer);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onClickProgress", function (e) {
      _newArrowCheck(this, _this2);

      e.stopPropagation();
      var seekFunc = _this.props.seekFunc;

      var percentage = _this.calcPercentage(e.pageX);

      seekFunc(percentage * _this.props.duration);

      _this.toggleVisibility(true);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "bindTouchEvents", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      var percentage = 0;

      var touchMove = function touchMove(e) {
        _newArrowCheck(this, _this3);

        if (!_this.isDraggingProgressBall) return;
        var touchX = e.touches[0].pageX;
        percentage = _this.calcPercentage(touchX);

        _this.setProgressBall(percentage);
      }.bind(this);

      var touchEnd = function touchEnd(e) {
        _newArrowCheck(this, _this3);

        if (!_this.isDraggingProgressBall) return;
        var seekFunc = _this.props.seekFunc;
        _this.isDraggingProgressBall = false;
        seekFunc(percentage * _this.props.duration);

        _this.toggleVisibility(true);
      }.bind(this);

      document.body.addEventListener('touchmove', touchMove);
      document.body.addEventListener('touchend', touchEnd);
      document.body.addEventListener('touchcancel', touchEnd);
      return function () {
        _newArrowCheck(this, _this3);

        document.body.removeEventListener('touchmove', touchMove);
        document.body.removeEventListener('touchend', touchEnd);
        document.body.removeEventListener('touchcancel', touchEnd);
      }.bind(this);
    }.bind(this));

    return _this;
  }

  _createClass(Controls, [{
    key: "setCurrentTime",
    value: function setCurrentTime(time) {
      if (this.currentTimeRef) {
        this.currentTimeRef.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* formatTime */])(time);
      }
    }
  }, {
    key: "setProgressBall",
    value: function setProgressBall(percentage) {
      if (this.progressBallRef) {
        this.progressBallRef.style.left = "".concat(percentage * 100, "%");
      }
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility(nextVisible) {
      var _this4 = this;

      var visible = nextVisible === undefined ? !this.visible : nextVisible;

      if (visible) {
        this.hideControlsTimer && clearTimeout(this.hideControlsTimer);

        if (this.props.isPlaying) {
          this.hideControlsTimer = setTimeout(function () {
            _newArrowCheck(this, _this4);

            this.toggleVisibility(false);
          }.bind(this), 2000);
        }

        if (this.controlsRef) {
          this.controlsRef.style.visibility = 'visible';
        }
      } else {
        if (this.controlsRef) {
          this.controlsRef.style.visibility = 'hidden';
        }
      }

      this.visible = !!visible;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unbindTouchEvents = this.bindTouchEvents();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindTouchEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          controls = _this$props.controls,
          currentTime = _this$props.currentTime,
          duration = _this$props.duration,
          isPlaying = _this$props.isPlaying,
          pauseFunc = _this$props.pauseFunc,
          playFunc = _this$props.playFunc,
          showPlayBtn = _this$props.showPlayBtn,
          showProgress = _this$props.showProgress;
      var formattedDuration = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* formatTime */])(duration);
      var playBtn;

      if (!showPlayBtn) {
        return null;
      } else if (isPlaying) {
        playBtn = __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
          className: "taro-video-control-button taro-video-control-button-pause",
          onClick: pauseFunc
        });
      } else {
        playBtn = __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
          className: "taro-video-control-button taro-video-control-button-play",
          onClick: playFunc
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-bar taro-video-bar-full",
        ref: this.getControlsRef
      }, controls && __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-controls"
      }, playBtn, showProgress && __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-current-time",
        ref: this.getCurrentTimeRef
      }, Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* formatTime */])(currentTime)), showProgress && __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-progress-container",
        onClick: this.onClickProgress
      }, __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-progress",
        ref: function (ref) {
          _newArrowCheck(this, _this5);

          if (ref !== null) {
            var rect = ref.getBoundingClientRect();
            this.progressDimentions.left = rect.left;
            this.progressDimentions.right = rect.right;
            this.progressDimentions.width = rect.width;
          }
        }.bind(this)
      }, __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-progress-buffered",
        style: "width: 100%;"
      }), __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-ball",
        ref: this.getProgressBallRef,
        onTouchStart: this.onDragProgressBallStart,
        style: "left: ".concat(formattedDuration ? this.currentTime / duration * 100 : 0, "%")
      }, __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-inner"
      })))), showProgress && __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", {
        className: "taro-video-duration"
      }, formattedDuration)), this.props.children);
    }
  }]);

  return Controls;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Controls);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(58);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Imports
var urlEscape = __webpack_require__(59);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(60));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(61));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(62));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(63));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(64));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(65));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(66));

// Module
exports.push([module.i, ".taro-video {\n  width: 100%;\n  height: 225px;\n  display: inline-block;\n  line-height: 0;\n  overflow: hidden;\n  position: relative; }\n\n.taro-video[hidden] {\n  display: none; }\n\n.taro-video-container {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  object-position: inherit; }\n\n.taro-video-container.taro-video-type-fullscreen {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 999; }\n\n.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-left {\n  -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n  transform: translate(-50%, -50%) rotate(-90deg); }\n\n.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-right {\n  -webkit-transform: translate(-50%, -50%) rotate(90deg);\n  transform: translate(-50%, -50%) rotate(90deg); }\n\n.taro-video-video {\n  width: 100%;\n  height: 100%;\n  object-position: inherit; }\n\n.taro-video-cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  background-color: rgba(1, 1, 1, 0.5);\n  z-index: 1; }\n\n.taro-video-cover-play-button {\n  width: 40px;\n  height: 40px;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n\n.taro-video-cover-duration {\n  color: #fff;\n  font-size: 16px;\n  line-height: 1;\n  margin-top: 10px; }\n\n.taro-video-bar {\n  visibility: hidden;\n  height: 44px;\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 0 10px;\n  z-index: 0; }\n\n.taro-video-bar.taro-video-bar-full {\n  left: 0; }\n\n.taro-video-controls {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  flex-grow: 1;\n  margin: 0 8.5px; }\n\n.taro-video-control-button {\n  width: 13px;\n  height: 15px;\n  padding: 14.5px 12.5px 14.5px 12.5px;\n  margin-left: -8.5px;\n  box-sizing: content-box; }\n\n.taro-video-control-button:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-size: 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat; }\n\n.taro-video-control-button.taro-video-control-button-play:after, .taro-video-cover-play-button {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n.taro-video-control-button.taro-video-control-button-pause:after {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n\n.taro-video-current-time, .taro-video-duration {\n  height: 14.5px;\n  line-height: 14.5px;\n  margin-top: 15px;\n  margin-bottom: 14.5px;\n  font-size: 12px;\n  color: #cbcbcb; }\n\n.taro-video-progress-container {\n  -webkit-box-flex: 2;\n  -webkit-flex-grow: 2;\n  flex-grow: 2;\n  position: relative; }\n\n.taro-video-progress {\n  height: 2px;\n  margin: 21px 12px;\n  background-color: rgba(255, 255, 255, 0.4);\n  position: relative; }\n\n.taro-video-progress-buffered {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  -webkit-transition: width .1s;\n  transition: width .1s;\n  background-color: rgba(255, 255, 255, 0.8); }\n\n.taro-video-ball {\n  width: 16px;\n  height: 16px;\n  padding: 14px;\n  position: absolute;\n  top: -21px;\n  box-sizing: content-box;\n  left: 0;\n  margin-left: -22px; }\n\n.taro-video-inner {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 50%; }\n\n.taro-video-danmu-button {\n  white-space: nowrap;\n  line-height: 1;\n  padding: 2px 10px;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  font-size: 13px;\n  color: #fff;\n  margin: 0 8.5px; }\n\n.taro-video-danmu-button.taro-video-danmu-button-active {\n  border-color: #48c23d;\n  color: #48c23d; }\n\n.taro-video-fullscreen,\n.taro-video-mute {\n  width: 17px;\n  height: 17px;\n  padding: 8.5px;\n  box-sizing: content-box;\n  background-size: 50%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat; }\n\n.taro-video-fullscreen {\n  background-image: url(" + ___CSS_LOADER_URL___2___ + "); }\n\n.taro-video-fullscreen.taro-video-type-fullscreen {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + "); }\n\n.taro-video-mute {\n  background-image: url(" + ___CSS_LOADER_URL___4___ + "); }\n\n.taro-video-mute.taro-video-type-mute {\n  background-image: url(" + ___CSS_LOADER_URL___5___ + "); }\n\n.taro-video-danmu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin-top: 14px;\n  margin-bottom: 44px;\n  font-size: 14px;\n  line-height: 14px;\n  overflow: visible; }\n\n.taro-video-danmu-item {\n  line-height: 1;\n  position: absolute;\n  color: #fff;\n  white-space: nowrap;\n  left: 100%;\n  -webkit-transform: translatex(0);\n  transform: translatex(0);\n  -webkit-transition-property: left,-webkit-transform;\n  transition-property: left,-webkit-transform;\n  transition-property: left,transform;\n  transition-property: left,transform,-webkit-transform;\n  -webkit-transition-duration: 3s;\n  transition-duration: 3s;\n  -webkit-transition-timing-function: linear;\n  transition-timing-function: linear; }\n\n.taro-video-toast {\n  pointer-events: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #000;\n  display: block;\n  visibility: hidden; }\n\n.taro-video-toast.taro-video-toast-volume {\n  width: 100px;\n  height: 100px;\n  display: block; }\n\n.taro-video-toast-volume .taro-video-toast-title {\n  width: 100%;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  margin-top: 10px;\n  display: block; }\n\n.taro-video-toast-volume .taro-video-toast-icon {\n  fill: #000;\n  width: 50%;\n  height: 50%;\n  margin-left: 25%;\n  display: block;\n  background-image: url(" + ___CSS_LOADER_URL___6___ + ");\n  background-size: 50%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat; }\n\n.taro-video-toast-volume .taro-video-toast-value {\n  width: 80px;\n  height: 5px;\n  margin-top: 5px;\n  margin-left: 10px; }\n\n.taro-video-toast-volume .taro-video-toast-value > .taro-video-toast-value-content {\n  overflow: hidden; }\n\n.taro-video-toast-volume-grids {\n  width: 80px;\n  height: 5px; }\n\n.taro-video-toast-volume-grids-item {\n  float: left;\n  width: 7.1px;\n  height: 5px;\n  background-color: #000; }\n\n.taro-video-toast-volume-grids-item:not(:first-child) {\n  margin-left: 1px; }\n\n.taro-video-toast.taro-video-toast-progress {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  font-size: 14px;\n  line-height: 18px;\n  padding: 6px; }\n", ""]);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {




module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAWhJREFUSA1j+P///0cgBoHjQGzCQCsAtgJB/AMy5wCxGNXtQ9iBwvoA5BUCMQvVLEQxHpNzDSjkRhXLMM3GKrIeKKpEkYVYjcUu+AMo3ALE3GRZiN1MvKKPgbIRJFuG10j8koeA0gZEW4jfLIKyf4EqpgOxMEELCRpFnIJ3QGU5QMyM00LizCFa1SWgSkeslhFtBGkKVwGVy6FYSJp+klR/A6quB2JOkIWMIK0oNlOf8xBoZDE9LAI7nYn6HsBq4l96WHQEaLUpAyiOaASeAM2NgvuPBpaACt82IEYtfKls0UagecpwXyAzqGTRdaA57sjmYrAptAjUsCkGYlYMg9EFyLQI1IiZB8Ti6Obh5JNh0QmgHlOcBuKSIMGi50C18UDMiMssvOJEWPQLqKYbiHnxGkRIkoBF24DyaoTMIEoeh0W3geI+RBlArCI0iz4D+RVAzEasfqLVAQ19AcSg5LoYiKWI1kiiQgCMBLnEEcfDSgAAAABJRU5ErkJggg=="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAAAXNSR0IArs4c6QAAAFlJREFUSA3tksEKACAIQ7X//5zq98wOgQayum8QaGweHhMzG/6OujzKAymn+0LMqivu1XznWmX8/echTIyMyAgTwA72iIwwAexgj8gIE8CO3aMRbDPMaEy5BRGaKcZv8YxRAAAAAElFTkSuQmCC"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhUlEQVRYR+2WSwrAMAhEnZO3PfmULLooGEFTiIXJ2s/kRY2wzQeb85sE9CRA8jSzY1YfAFzhJBnU1AVgxH2dSiArCnD9QgGzRNnOech48SRABHoSyFb5in3PSbhyo6yvCPQkEM3u7BsPe/0FIvBfAh/vhKmVbO9SWun1qk/PSVi9TcVPBG6R1YIhgWwNpQAAAABJRU5ErkJggg=="

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+2Xu0pDURBF1/ZLxNcHKNiIlfhA7C0UBSEE8RNEBNFPUEQEEbGxFiSSSrCwEHsf5E/ccsSUuWfUhKQ40947+y42Z8+ZK/pcinzf9hhwD1xJ2q/qsb0JHAOzkl5y+lGAGnCWICQtZgAS6DxQk3TeLYA6cAo0JSXxjmW7CcwBdUkJurKiDhSA4kBvHbA9CqwBQx2O7BSw8ssU3ALPFRF4knT3nQLbr8B4LjLBOdAAFgJaLUkjbYC9n+zm+i4kXWbmwCqwnRMCHiXthuZAQOzPrxSA4kBxYDAcsH0EzATCfCLpJjOINoCtgFZabg7bk7AFDAeaGpKWgitZTu5N0kQbYBmYrujo9mX0CVxL+gidAdu9vY5zXhWA4sAgOND3X7NJ4AHYCaxkB8B62gslvecSFpoDOZH/PP8Cnt7hIaM5xCEAAAAASUVORK5CYII="

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/unmute.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mute.png";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFhklEQVR4Xu2aeaxfQxTHP1VBES0NIQitWtpaaxeCUkQtaYVa0tiClAq1ExIiQTVppaWxt8RWSa2tWkJQRGgtQaSIpUKEpG0ssbbk28yV2+mZO/e9e3vvu/e98897mZnfzPl+75mZs0wvurn06ub46SGgxwLqZaA3sB/wO/A+8G/V6tS5BU4BJgJbO9DvAMOB36okoQ4CNgAeBEYbQK8Bbm4zAdsBc4EdAyA/APZoKwHHAA8DG2UA/AnYrG0ErAVcD1yXA9gfQJ8c40obsqbPgH7AY8CROTVuFQFD3X7fJid4DWsNAWOAGZ0w58YTsDZwKzChA189PbTRBGwKzAYO6iT4srbAMHfTfAksjulS1iG4JzAH2Dy2YKS/qAVcCdzi1vgZOBZ4PWvNGAG6wgYCW0IwctzNmf06BcEXtYABwOeA4otEfgEOdnGGqV6IAAUopwM6zDYuAVjeKYpYwCjgCWOhH513+b2lhE+Avrj89NPyalzyuCIE6EN9BfQ1dHoPOAD40+9LE6D/5aoqSqtLsgiQC60DTiHzfGCFoaSsQAexZdlTgEuyCDgLuK8u5G7dEAHyKN8CBrtxLwDHAX8Z+l4N3GS0L3db4aN0X5opmc+2XZQAfb2LPd2eciG1lUSRJZ9qYHkZONwiYAjwSc3gs24BXWWWfzEVuMjQez13HljX8v7A28lvEgsInaBVcxLaAvr6sgJLtBWeNTrOB+4w2p8DRvoEnAPcXTVaY70QAbrbXwIONX7zBSAL/tvrk1+iviTllnRry2irr/QSEws4D7izCxMg1XQLLAQGGXpeCkw22kOWI49RMUujCJC+uwAfGtfcImAng4AtAMsBeg04pIkESOfbgQsMsNoGnxrtSrfv7rXrSlwXWN6kLZBgEBiB8iWUUZZPIN/AF1nMoiYSICDfAlt5iB4CxhpAzwXuMtqPBuY1lYB5wFEeqFeAwwyguvIUqvuiQO/xphJwP3Cmhyh0EKrOoGDIF7n+M5pKwEwXrqdBCaQSM77Ig7SSIicDs5pKwIvACA+pzFwZIF9OlKm36QyQV7jEqDDJk5VD58uFgGIGX1Se+6yJFqAKsqI6X84GdDb4Mh0Y5zUqjFYFakUTCXja5QLSmBQHbAL8ahAgT1AeYVreSKLLphGwF/CuAfLJQLldGSTFD75c5d4mNCoWyAqG9gYWGED1AOMKo12ZbiWA/idA++deY2DVTZ0Jh5UJPsFQtD/wDaAHGWl5EzgwaUi2gK4UXS11S0cTIjrMFBtYQdAk4DID0BnAAz4B6wNLgTKKG0VIDBHwqitwpOcW+OOB540FdeipNKbUWFrUtn06o5xOij4KyDuqU0IE3Obl/rLA63pTzm9XA8jKACjdniZAaSKFmUpB1yUhAlTsUEpMh913wEkuTe7rKTzPAHqO44vpKPkFhH3cWWBVV6ogJVYZUgz/tXtIYelzI3Ct0fExIGx6j7iKWBUUveyYBehv1RIjIEsfqziq8Xp4pSBJOYTVJFQcVY3wCFeKUjVGyYfQWB00+5bEVBECrNS+qsOKBpVHNCVWHs+LS7H5PV5pOu9v0+OKEOAXR39w1e1C7wM6AkJ1eLmkRcrpRQiQrqobXO5S3vL3/4kBKMsCknV0k+iasVLUMV3UX5SAPGtED8EOT+L9YENnCasUIXNO2goChFWHqAIRyxXN4qI1BCQg9dJESYq8LnbrCBAR8t50Lig6i0krCRBoVWhVlt45wkBrCRBuRZyPuAguxIPe9lXqhpd9DcZMXOvdkPF0Xu/8dohNUmZ/1QQkuitXr+d4fryuFx3jywQYm6suAqSX8vLTXKJDt4QqO6rtLYspXWZ/nQQkOJTAUJZGIav19q9MvKvN1RUIWKMAY5P3EBBjqO393d4C/gMVHwRQlpx21QAAAABJRU5ErkJggg=="

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_scss__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Audio = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Audio, _Nerv$Component);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Audio).apply(this, arguments));
  }

  _createClass(Audio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindevent();
    }
  }, {
    key: "bindevent",
    value: function bindevent() {
      var _this = this;

      this.audio.addEventListener('timeupdate', function (e) {
        _newArrowCheck(this, _this);

        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            duration: e.srcElement.duration,
            currentTime: e.srcElement.currentTime
          }
        });
        this.props.onTimeUpdate && this.props.onTimeUpdate(e);
      }.bind(this));
      this.audio.addEventListener('ended', function (e) {
        _newArrowCheck(this, _this);

        this.props.onEnded && this.props.onEnded(e);
      }.bind(this));
      this.audio.addEventListener('play', function (e) {
        _newArrowCheck(this, _this);

        this.props.onPlay && this.props.onPlay(e);
      }.bind(this));
      this.audio.addEventListener('pause', function (e) {
        _newArrowCheck(this, _this);

        this.props.onPause && this.props.onPause(e);
      }.bind(this)); // 1网络错误, 2解码错误, 3解码错误，4 不合适资源

      this.audio.addEventListener('error', function (e) {
        _newArrowCheck(this, _this);

        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            errMsg: e.srcElement.error.code
          }
        });
        this.props.onError && this.props.onError(e);
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          src = _this$props.src,
          controls = _this$props.controls,
          autoplay = _this$props.autoplay,
          initialTime = _this$props.initialTime,
          id = _this$props.id,
          loop = _this$props.loop,
          muted = _this$props.muted,
          className = _this$props.className;
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("audio", {
        id: id,
        src: src,
        controls: controls,
        autoplay: autoplay,
        start: initialTime,
        loop: loop,
        muted: muted,
        className: className,
        ref: function (audio) {
          _newArrowCheck(this, _this2);

          this.audio = audio;
        }.bind(this)
      }, "\u6682\u65F6\u4E0D\u652F\u6301\u64AD\u653E\u8BE5\u89C6\u9891");
    }
  }]);

  return Audio;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component); // 默认配置


Audio.defaultProps = {
  autoplay: false,
  controls: true,
  loop: false,
  muted: false
};
/* harmony default export */ __webpack_exports__["a"] = (Audio);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(69);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "audio {\n  max-width: 100%; }\n", ""]);



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Camera = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Camera, _Nerv$Component);

  function Camera() {
    _classCallCheck(this, Camera);

    return _possibleConstructorReturn(this, _getPrototypeOf(Camera).apply(this, arguments));
  }

  _createClass(Camera, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('h5 暂不支持 Camera 组件');
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", null);
    }
  }]);

  return Camera;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Camera);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_parse_type__ = __webpack_require__(8);
var _this3 = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





/**
 * props 类型检测
 *
 * @param {Object} props
 */

function parseType(props) {
  var _this = this;

  var showInfo = props.showInfo,
      percent = props.percent,
      strokeWidth = props.strokeWidth,
      activeColor = props.activeColor,
      backgroundColor = props.backgroundColor,
      active = props.active,
      borderRadius = props.borderRadius,
      fontSize = props.fontSize,
      color = props.color,
      activeMode = props.activeMode,
      duration = props.duration,
      onActiveEnd = props.onActiveEnd; // 抛出错误信息

  var throwErrorMsg = function throwErrorMsg(type) {
    _newArrowCheck(this, _this);

    throw new TypeError(type);
  }.bind(this);

  if (percent) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["d" /* isNumber */])(percent) ? '' : throwErrorMsg('percent');
  if (showInfo) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["a" /* isBoolean */])(showInfo) ? '' : throwErrorMsg('showInfo');
  if (borderRadius) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["b" /* isDistanceUnit */])(borderRadius) ? '' : throwErrorMsg('borderRadius');
  if (fontSize) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["b" /* isDistanceUnit */])(fontSize) ? '' : throwErrorMsg('fontSize');
  if (strokeWidth) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["b" /* isDistanceUnit */])(strokeWidth) ? '' : throwErrorMsg('strokeWidth');
  if (color) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["a" /* isBoolean */])(color) ? '' : throwErrorMsg('color');
  if (activeColor) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["e" /* isString */])(activeColor) ? '' : throwErrorMsg('activeColor');

  if (backgroundColor) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["e" /* isString */])(backgroundColor) ? '' : throwErrorMsg('backgroundColor');
  }

  if (active) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["a" /* isBoolean */])(active) ? '' : throwErrorMsg('active');
  if (activeMode) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["e" /* isString */])(activeMode) ? '' : throwErrorMsg('activeMode');
  if (duration) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["d" /* isNumber */])(duration) ? '' : throwErrorMsg('duration');
  if (onActiveEnd) Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["c" /* isFunction */])(onActiveEnd) ? '' : throwErrorMsg('onActiveEnd');
}

function usePrevious(value) {
  var _this2 = this;

  var ref = Object(__WEBPACK_IMPORTED_MODULE_1_nervjs__["useRef"])();
  Object(__WEBPACK_IMPORTED_MODULE_1_nervjs__["useEffect"])(function () {
    _newArrowCheck(this, _this2);

    ref.current = value;
  }.bind(this), [value]);
  return ref.current;
}

var Progress = function Progress(props) {
  var _this4 = this;

  _newArrowCheck(this, _this3);

  parseType(props);
  var className = props.className,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$showInfo = props.showInfo,
      showInfo = _props$showInfo === void 0 ? false : _props$showInfo,
      _props$borderRadius = props.borderRadius,
      borderRadius = _props$borderRadius === void 0 ? 0 : _props$borderRadius,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 16 : _props$fontSize,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 6 : _props$strokeWidth,
      color = props.color,
      _props$activeColor = props.activeColor,
      activeColor = _props$activeColor === void 0 ? '#09BB07' : _props$activeColor,
      _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? 'EBEBEB' : _props$backgroundColo,
      _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      _props$activeMode = props.activeMode,
      activeMode = _props$activeMode === void 0 ? 'backwards' : _props$activeMode,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 30 : _props$duration,
      onActiveEnd = props.onActiveEnd;
  var prec = percent > 100 ? 100 : percent < 0 ? 0 : percent;
  var prevPercent = usePrevious(prec);
  var innerBarRef = Object(__WEBPACK_IMPORTED_MODULE_1_nervjs__["useRef"])();
  var diff = Math.abs(prec - prevPercent);
  Object(__WEBPACK_IMPORTED_MODULE_1_nervjs__["useEffect"])(function () {
    var _this5 = this;

    _newArrowCheck(this, _this4);

    if (innerBarRef.current && active) {
      if (activeMode !== 'forwards') {
        console.log(prevPercent);
        /** backwards 动画从头播 */

        innerBarRef.current.style.transitionDuration = '0ms';
        innerBarRef.current.style.width = 0;
        setTimeout(function () {
          _newArrowCheck(this, _this5);

          innerBarRef.current.style.transitionDuration = prec * duration + 'ms';
          innerBarRef.current.style.width = prec + '%';
        }.bind(this), 0);
      } else {
        /** forwards 动画从上次结束点接着播 */
        innerBarRef.current.style.transitionDuration = diff * duration + 'ms';
        innerBarRef.current.style.width = prec + '%';
      }
    }
  }.bind(this), [innerBarRef, prec, diff, duration]);
  return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('weui-progress', className)
  }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
    className: "weui-progress__bar",
    style: {
      height: Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["f" /* parseDistanceUnit */])(strokeWidth),
      borderRadius: Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["f" /* parseDistanceUnit */])(borderRadius),
      backgroundColor: backgroundColor
    }
  }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
    className: "weui-progress__inner-bar",
    ref: innerBarRef,
    onTransitionEnd: onActiveEnd,
    style: {
      backgroundColor: activeColor || color,
      transitionTimingFunction: active ? 'linear' : 'none',
      transitionProperty: active ? 'width' : 'none'
    }
  })), showInfo ? __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
    className: "weui-progress__opr",
    style: {
      fontSize: Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["f" /* parseDistanceUnit */])(fontSize)
    }
  }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("span", null, prec, "%")) : false);
}.bind(this);

/* harmony default export */ __webpack_exports__["a"] = (Progress);
Progress.defaultProps = {
  percent: 0,
  showInfo: false
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RichText = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(RichText, _Nerv$Component);

  function RichText() {
    _classCallCheck(this, RichText);

    return _possibleConstructorReturn(this, _getPrototypeOf(RichText).apply(this, arguments));
  }

  _createClass(RichText, [{
    key: "renderNodes",
    value: function renderNodes(item) {
      if (item.type === 'text') {
        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement('span', {}, item.text);
      } else {
        var child = this.renderChildrens(item.children);
        var obj = {
          className: '',
          style: ''
        };

        if (item.hasOwnProperty('attrs')) {
          for (var key in item.attrs) {
            if (key === 'class') {
              obj.className = item.attrs[key] || '';
            } else {
              obj[key] = item.attrs[key] || '';
            }
          }
        }

        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(item.name, obj, child);
      }
    }
  }, {
    key: "renderChildrens",
    value: function renderChildrens() {
      var _this = this;

      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (arr.length === 0) return;
      return arr.map(function (list, i) {
        _newArrowCheck(this, _this);

        if (list.type === 'text') {
          return list.text;
        }

        return this.renderNodes(list);
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          nodes = _this$props.nodes,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["nodes", "className"]);

      if (Array.isArray(nodes)) {
        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
          className: className
        }, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['nodes', 'className']), other), nodes.map(function (item, idx) {
          _newArrowCheck(this, _this2);

          return this.renderNodes(item);
        }.bind(this)));
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
          className: className
        }, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['className']), other, {
          dangerouslySetInnerHTML: {
            __html: nodes
          }
        }));
      }
    }
  }]);

  return RichText;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (RichText);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Form = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Form, _Nerv$Component);

  function Form() {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
    _this.Forms = [];
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onReset = _this.onReset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Form, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var formDom = __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.findDOMNode(this);
      var elements = [];
      var tagElements = formDom.getElementsByTagName('input');

      for (var j = 0; j < tagElements.length; j++) {
        elements.push(tagElements[j]);
      }

      var formItem = {};
      var hash = {};
      elements.forEach(function (item) {
        _newArrowCheck(this, _this2);

        if (item.className.indexOf('weui-switch') !== -1) {
          formItem[item.name] = item.checked;
          return;
        }

        if (item.type === 'radio') {
          if (item.checked) {
            hash[item.name] = true;
            formItem[item.name] = item.value;
          } else {
            if (!hash[item.name]) {
              formItem[item.name] = '';
            }
          }

          return;
        }

        if (item.type === 'checkbox') {
          if (item.checked) {
            if (hash[item.name]) {
              formItem[item.name].push(item.value);
            } else {
              hash[item.name] = true;
              formItem[item.name] = [item.value];
            }
          } else {
            if (!hash[item.name]) {
              formItem[item.name] = [];
            }
          }

          return;
        }

        formItem[item.name] = item.value;
      }.bind(this));
      var textareaElements = formDom.getElementsByTagName('textarea');
      var textareaEleArr = [];

      for (var i = 0; i < textareaElements.length; i++) {
        textareaEleArr.push(textareaElements[i]);
      }

      textareaEleArr.forEach(function (v) {
        _newArrowCheck(this, _this2);

        formItem[v.name] = v.value;
      }.bind(this));
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: formItem
        }
      });
      this.props.onSubmit(e);
    }
  }, {
    key: "onReset",
    value: function onReset(e) {
      e.preventDefault();
      this.props.onReset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style;
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("form", {
        className: className,
        style: style,
        onSubmit: this.onSubmit,
        onReset: this.onReset
      }, this.props.children);
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_parse_type__ = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var RadioGroup = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(RadioGroup, _Nerv$Component);

  function RadioGroup() {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).apply(this, arguments)); // this.state = {
    //   value: []
    // }

    _this.uniqueName = Date.now().toString(36);
    _this.radioValue = [];
    _this.toggleChange = _this.toggleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "toggleChange",
    value: function toggleChange(e, i) {
      var _this2 = this;

      var checkValue;

      var _value = this.radioValue.map(function (item, idx) {
        _newArrowCheck(this, _this2);

        var curValue = item.value;
        if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_parse_type__["d" /* isNumber */])(item.value)) curValue = item.value.toString();

        if (e.target.value === curValue) {
          checkValue = item.value;
          return {
            name: item.name,
            value: item.value,
            checked: !item.checked
          };
        }

        return item;
      }.bind(this));

      this.radioValue = _value;
      var onChange = this.props.onChange;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: checkValue
        }
      });
      onChange && onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? this.uniqueName : _this$props$name; // 给 children 绑定事件

      var children = __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Children.toArray(this.props.children).map(function (item, i) {
        var _this4 = this;

        _newArrowCheck(this, _this3);

        var _key = item.props["for"] || i;

        var chd = __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Children.toArray(item.props.children).map(function (ch) {
          var _this5 = this;

          _newArrowCheck(this, _this4);

          if (ch.name === 'Radio') {
            if (ch.props.checked) {
              this.radioValue[i] = {
                name: ch.props.name,
                value: ch.props.value,
                checked: true
              };
            } else {
              this.radioValue[i] = {
                name: ch.props.name,
                value: ch.props.value,
                checked: false
              };
            }

            return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.cloneElement(ch, {
              onChange: function onChange(e) {
                _newArrowCheck(this, _this5);

                return this.toggleChange(e, i);
              }.bind(this),
              "for": _key,
              name: name
            });
          }

          return ch;
        }.bind(this));
        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.cloneElement(item, {
          "for": _key
        }, chd);
      }.bind(this));

      function isChildOf(child, parent) {
        // console.log('参数child=' + child + '-' + child.nodeName, '参数parent=' + parent + '-' + parent.nodeName)
        if (child && parent) {
          if (child === parent) return true;
          var myParentNode = child.parentNode; // 定义临时变量，并初始化为child参数的父节点

          while (myParentNode) {
            // console.log('myParentNode=' + myParentNode + '-' + myParentNode.nodeName)
            if (myParentNode === parent) {
              // 如果myParentNode等于parent参数，则证明child参数是parent参数的后代
              return true;
            } else {
              // 找myParentNode的上一代
              myParentNode = myParentNode.parentNode;
            }
          }
        } // 遍历结束后，都没有返回true，则说明child参数找不到它的祖先parent参数


        return false;
      }
      /* TODO 规避Nerv数组diff问题 */


      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
        className: "weui-cells_radiogroup"
      }, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['onChange']), {
        onClick: function (e) {
          _newArrowCheck(this, _this3);

          var index = -1;
          var cs = e && e.currentTarget && e.currentTarget.children || [];

          for (var i = 0; i < cs.length; i++) {
            if (isChildOf(e.toElement, cs[i])) index = i;
          }

          if (index > -1) {
            this.props.onChange(e, index);
          }
        }.bind(this)
      }), children);
    }
  }]);

  return RadioGroup;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (RadioGroup);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CheckboxGroup = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(CheckboxGroup, _Nerv$Component);

  function CheckboxGroup() {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).apply(this, arguments));
    _this.state = {
      value: []
    };
    _this.uniqueName = Date.now().toString(36);
    _this.toggleChange = _this.toggleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "toggleChange",
    value: function toggleChange(e, i) {
      var _this2 = this;

      this.state.value[i] = {
        name: e.target.textContent,
        value: e.target.value,
        checked: e.target.checked
      };
      var resp = [];
      this.state.value.forEach(function (v) {
        _newArrowCheck(this, _this2);

        if (v.checked) {
          resp.push(v.value);
        }
      }.bind(this));
      var onChange = this.props.onChange;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: resp
        }
      });
      onChange && onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? this.uniqueName : _this$props$name; // 给 children 绑定事件

      var children = __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Children.toArray(this.props.children).map(function (item, i) {
        var _this4 = this;

        _newArrowCheck(this, _this3);

        var _key = item.props["for"];

        if (item.name === 'Checkbox') {
          return handleChecked.bind(this)(item, i, _key, name);
        } else {
          return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.cloneElement(item, '', __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Children.toArray(item.props.children).map(function (ch) {
            _newArrowCheck(this, _this4);

            if (ch && ch.name === 'Checkbox') {
              return handleChecked.bind(this)(ch, i, _key, name);
            }

            return ch;
          }.bind(this)));
        }
      }.bind(this));
      return children;
    }
  }]);

  return CheckboxGroup;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

function handleChecked(d, i, key, name) {
  var _this5 = this;

  if (d.props.checked) {
    this.state.value[i] = {
      name: d.props.name,
      value: d.props.value,
      checked: true
    };
  } else {
    this.state.value[i] = {
      name: d.props.name,
      value: d.props.value,
      checked: false
    };
  }

  return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.cloneElement(d, {
    onChange: function onChange(e) {
      _newArrowCheck(this, _this5);

      return this.toggleChange(e, i);
    }.bind(this),
    "for": key,
    name: name
  });
}

/* harmony default export */ __webpack_exports__["a"] = (CheckboxGroup);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_resolve_pathname__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabbarItem__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_index_scss__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_index_scss__);
var _this = this;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }








 // const removeLeadingSlash = str => str.replace(/^\.?\//, '')
// const removeTrailingSearch = str => str.replace(/\?[\s\S]*$/, '')

var addLeadingSlash = function addLeadingSlash(str) {
  _newArrowCheck(this, _this);

  return str[0] === '/' ? str : "/".concat(str);
}.bind(this);

var hasBasename = function hasBasename(path, prefix) {
  _newArrowCheck(this, _this);

  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}.bind(this);

var stripBasename = function stripBasename(path, prefix) {
  _newArrowCheck(this, _this);

  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}.bind(this);

var STATUS_SHOW = 0;
var STATUS_HIDE = 1;
var STATUS_SLIDEOUT = 2;
var basicTabBarClassName = 'taro-tabbar__tabbar';
var hideTabBarClassName = 'taro-tabbar__tabbar-hide';
var hideTabBarWithAnimationClassName = 'taro-tabbar__tabbar-slideout';

var Tabbar = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Tabbar, _Nerv$Component);

  function Tabbar(props) {
    var _this3 = this;

    var _this2;

    _classCallCheck(this, Tabbar);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Tabbar).apply(this, arguments));

    _defineProperty(_assertThisInitialized(_this2), "homePage", '');

    _defineProperty(_assertThisInitialized(_this2), "tabbar", null);

    _defineProperty(_assertThisInitialized(_this2), "tabbarPos", 'bottom');

    _defineProperty(_assertThisInitialized(_this2), "getOriginUrl", function (url) {
      var _this4 = this;

      _newArrowCheck(this, _this3);

      var customRoute = _this2.customRoutes.filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            originUrl = _ref2[0],
            customUrl = _ref2[1];

        _newArrowCheck(this, _this4);

        var patha = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* splitUrl */])(customUrl).path;
        var pathb = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* splitUrl */])(url).path;
        return patha === pathb;
      }.bind(this));

      return customRoute.length ? customRoute[0][0] : url;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "getSelectedIndex", function (url) {
      var _this5 = this;

      _newArrowCheck(this, _this3);

      var foundIndex = -1;

      _this2.state.list.forEach(function (_ref3, idx) {
        var pagePath = _ref3.pagePath;

        _newArrowCheck(this, _this5);

        var patha = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* splitUrl */])(url).path;
        var pathb = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* splitUrl */])(pagePath).path;

        if (patha === pathb) {
          foundIndex = idx;
        }
      }.bind(this));

      return foundIndex;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "switchTab", function (index) {
      _newArrowCheck(this, _this3);

      _this2.setState({
        selectedIndex: index
      });

      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.redirectTo && __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.redirectTo({
        url: _this2.state.list[index].pagePath
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "tabbarRef", function (ref) {
      _newArrowCheck(this, _this3);

      if (!ref) return;
      var domNode = Object(__WEBPACK_IMPORTED_MODULE_2_nervjs__["findDOMNode"])(ref);
      _this2.tabbar = domNode;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "switchTabHandler", function (_ref4) {
      var url = _ref4.url,
          successHandler = _ref4.successHandler,
          errorHandler = _ref4.errorHandler;

      _newArrowCheck(this, _this3);

      var routerMode = _this2.props.conf.mode;
      var currentUrl = routerMode === 'multi' ? _this2.props.currentPagename : _this2.getOriginUrl(_this2.getCurrentUrl() || _this2.homePage);
      var nextTab = Object(__WEBPACK_IMPORTED_MODULE_4_resolve_pathname__["a" /* default */])(url, currentUrl);

      var foundIndex = _this2.getSelectedIndex(nextTab);

      if (foundIndex > -1) {
        _this2.switchTab(foundIndex);

        successHandler({
          errMsg: "switchTab:ok"
        });
      } else {
        errorHandler({
          errMsg: "switchTab:fail page \"".concat(nextTab, "\" is not found")
        });
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "routerChangeHandler", function () {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          toLocation = _ref5.toLocation;

      _newArrowCheck(this, _this3);

      var currentPage;

      if (toLocation && toLocation.path) {
        var tmpPath = addLeadingSlash(toLocation.path);
        currentPage = tmpPath === '/' ? _this2.homePage : tmpPath;
      } else {
        currentPage = _this2.getCurrentUrl();
      }

      _this2.setState({
        selectedIndex: _this2.getSelectedIndex(_this2.getOriginUrl(currentPage))
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "setTabBarBadgeHandler", function (_ref6) {
      var _this6 = this;

      var index = _ref6.index,
          text = _ref6.text,
          successHandler = _ref6.successHandler,
          errorHandler = _ref6.errorHandler;

      _newArrowCheck(this, _this3);

      var list = _this2.state.list;

      if (index in list) {
        list[index].showRedDot = false;
        list[index].badgeText = text;

        _this2.setState({}, function () {
          _newArrowCheck(this, _this6);

          successHandler({
            errMsg: 'setTabBarBadge:ok'
          });
        }.bind(this));
      } else {
        errorHandler({
          errMsg: "setTabBarBadge:fail tabbar item not found"
        });
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "removeTabBarBadgeHandler", function (_ref7) {
      var _this7 = this;

      var index = _ref7.index,
          successHandler = _ref7.successHandler,
          errorHandler = _ref7.errorHandler;

      _newArrowCheck(this, _this3);

      var list = _this2.state.list;

      if (index in list) {
        list[index].badgeText = null;

        _this2.setState({}, function () {
          _newArrowCheck(this, _this7);

          successHandler({
            errMsg: 'removeTabBarBadge:ok'
          });
        }.bind(this));
      } else {
        errorHandler({
          errMsg: "removeTabBarBadge:fail tabbar item not found"
        });
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "showTabBarRedDotHandler", function (_ref8) {
      var _this8 = this;

      var index = _ref8.index,
          successHandler = _ref8.successHandler,
          errorHandler = _ref8.errorHandler;

      _newArrowCheck(this, _this3);

      var list = _this2.state.list;

      if (index in list) {
        list[index].badgeText = null;
        list[index].showRedDot = true;

        _this2.setState({}, function () {
          _newArrowCheck(this, _this8);

          successHandler({
            errMsg: 'showTabBarRedDot:ok'
          });
        }.bind(this));
      } else {
        errorHandler({
          errMsg: "showTabBarRedDot:fail tabbar item not found"
        });
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "hideTabBarRedDotHandler", function (_ref9) {
      var _this9 = this;

      var index = _ref9.index,
          successHandler = _ref9.successHandler,
          errorHandler = _ref9.errorHandler;

      _newArrowCheck(this, _this3);

      var list = _this2.state.list;

      if (index in list) {
        list[index].showRedDot = false;

        _this2.setState({}, function () {
          _newArrowCheck(this, _this9);

          successHandler({
            errMsg: 'hideTabBarRedDot:ok'
          });
        }.bind(this));
      } else {
        errorHandler({
          errMsg: "hideTabBarRedDot:fail tabbar item not found"
        });
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "showTabBarHandler", function (_ref10) {
      var _this10 = this;

      var successHandler = _ref10.successHandler;

      _newArrowCheck(this, _this3);

      _this2.setState({
        status: STATUS_SHOW
      }, function () {
        _newArrowCheck(this, _this10);

        successHandler({
          errMsg: 'showTabBar:ok'
        });
      }.bind(this));
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this2), "hideTabBarHandler", function (_ref11) {
      var _this11 = this;

      var animation = _ref11.animation,
          successHandler = _ref11.successHandler;

      _newArrowCheck(this, _this3);

      _this2.setState({
        status: animation ? STATUS_SLIDEOUT : STATUS_HIDE
      }, function () {
        _newArrowCheck(this, _this11);

        successHandler({
          errMsg: 'hideTabBar:ok'
        });
      }.bind(this));
    }.bind(this));

    var _list = props.conf.list;
    var customRoutes = props.conf.customRoutes;

    if (Object.prototype.toString.call(_list) !== '[object Array]' || _list.length < 2 || _list.length > 5) {
      throw new Error('tabBar 配置错误');
    }

    _this2.homePage = addLeadingSlash(props.homePage);
    _this2.customRoutes = [];

    for (var key in customRoutes) {
      _this2.customRoutes.push([key, customRoutes[key]]);
    }

    _list.forEach(function (item) {
      _newArrowCheck(this, _this3);

      if (item.pagePath.indexOf('/') !== 0) {
        item.pagePath = '/' + item.pagePath;
      }
    }.bind(this));

    _this2.state = {
      list: _list,
      selectedIndex: -1,
      status: STATUS_SHOW
    };
    return _this2;
  }

  _createClass(Tabbar, [{
    key: "getCurrentUrl",
    value: function getCurrentUrl() {
      var currentPagename = this.props.currentPagename;
      var routerMode = this.props.conf.mode;
      var routerBasename = this.props.conf.basename || '/';
      var url;

      if (routerMode === 'hash') {
        var href = window.location.href;
        var hashIndex = href.indexOf('#');
        url = hashIndex === -1 ? '' : href.substring(hashIndex + 1);
      } else if (routerMode === 'multi') {
        url = currentPagename;
      } else {
        url = location.pathname;
      }

      var processedUrl = addLeadingSlash(stripBasename(url, routerBasename));
      return processedUrl === '/' ? this.homePage : processedUrl;
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroRouterChange', this.routerChangeHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroSwitchTab', this.switchTabHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroSetTabBarBadge', this.setTabBarBadgeHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroRemoveTabBarBadge', this.removeTabBarBadgeHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroShowTabBarRedDotHandler', this.showTabBarRedDotHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroHideTabBarRedDotHandler', this.hideTabBarRedDotHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroShowTabBar', this.showTabBarHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.on('__taroHideTabBar', this.hideTabBarHandler);
    }
  }, {
    key: "removeEvent",
    value: function removeEvent() {
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroRouterChange', this.routerChangeHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroSwitchTab', this.switchTabHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroSetTabBarBadge', this.setTabBarBadgeHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroRemoveTabBarBadge', this.removeTabBarBadgeHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroShowTabBarRedDotHandler', this.showTabBarRedDotHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroHideTabBarRedDotHandler', this.hideTabBarRedDotHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroShowTabBarHandler', this.showTabBarHandler);
      __WEBPACK_IMPORTED_MODULE_1__tarojs_taro_h5___default.a.eventCenter.off('__taroHideTabBarHandler', this.hideTabBarHandler);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.tabbar) return;
      this.tabbarPos = this.tabbar.nextElementSibling ? 'top' : 'bottom';
      this.bindEvent();
      this.routerChangeHandler();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2,
          _this12 = this;

      var _this$props = this.props,
          conf = _this$props.conf,
          _this$props$tabbarPos = _this$props.tabbarPos,
          tabbarPos = _this$props$tabbarPos === void 0 ? 'bottom' : _this$props$tabbarPos;
      var status = this.state.status;
      var containerCls = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('weui-tabbar', _defineProperty({}, "taro-tabbar__border-".concat(conf.borderStyle || 'black'), true));
      var shouldHideTabBar = this.state.selectedIndex === -1 || status === STATUS_HIDE;
      var shouldSlideout = status === STATUS_SLIDEOUT;
      return __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("div", {
        ref: this.tabbarRef,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(basicTabBarClassName, "".concat(basicTabBarClassName, "-").concat(tabbarPos), (_classNames2 = {}, _defineProperty(_classNames2, hideTabBarClassName, shouldHideTabBar), _defineProperty(_classNames2, hideTabBarWithAnimationClassName, shouldSlideout), _classNames2))
      }, __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("div", {
        className: containerCls,
        style: {
          backgroundColor: conf.backgroundColor || ''
        }
      }, this.state.list.map(function (item, index) {
        _newArrowCheck(this, _this12);

        var isSelected = this.state.selectedIndex === index;
        var textColor;
        var iconPath;

        if (isSelected) {
          textColor = conf.selectedColor;
          iconPath = item.selectedIconPath;
        } else {
          textColor = conf.color || '';
          iconPath = item.iconPath;
        }

        return __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__tabbarItem__["a" /* default */], {
          index: index,
          onSelect: this.switchTab.bind(this),
          isSelected: isSelected,
          textColor: textColor,
          iconPath: iconPath,
          text: item.text,
          badgeText: item.badgeText,
          showRedDot: item.showRedDot
        });
      }.bind(this))));
    }
  }]);

  return Tabbar;
}(__WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Tabbar);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to, from) {
  if (from === undefined) from = '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nervjs__);
var _this = this;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





var noop = function noop() {
  _newArrowCheck(this, _this);
}.bind(this);

var Tabbar = /*#__PURE__*/function (_Taro$Component) {
  _inherits(Tabbar, _Taro$Component);

  function Tabbar() {
    var _getPrototypeOf2,
        _this3 = this;

    var _this2;

    _classCallCheck(this, Tabbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "onClick", function () {
      _newArrowCheck(this, _this3);

      _this2.props.onSelect(_this2.props.index);
    }.bind(this));

    return _this2;
  }

  _createClass(Tabbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isSelected = _this$props.isSelected,
          index = _this$props.index,
          textColor = _this$props.textColor,
          iconPath = _this$props.iconPath,
          text = _this$props.text,
          badgeText = _this$props.badgeText,
          showRedDot = _this$props.showRedDot;
      var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('weui-tabbar__item', {
        'weui-bar__item_on': isSelected
      });
      var badgeStyle = {
        position: 'absolute',
        top: '-2px',
        right: '-13px'
      };
      var dotStyle = {
        position: 'absolute',
        top: 0,
        right: '-6px'
      };
      return __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("a", {
        key: index,
        href: "javascript:;",
        className: className,
        onClick: this.onClick
      }, __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("span", {
        style: "display: inline-block;position: relative;"
      }, __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("img", {
        src: iconPath,
        alt: "",
        className: "weui-tabbar__icon"
      }), badgeText && __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("span", {
        className: "weui-badge taro-tabbar-badge",
        style: badgeStyle
      }, badgeText), showRedDot && __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("span", {
        className: "weui-badge weui-badge_dot",
        style: dotStyle
      })), __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("p", {
        className: "weui-tabbar__label",
        style: {
          color: textColor
        }
      }, text));
    }
  }]);

  return Tabbar;
}(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.Component);

_defineProperty(Tabbar, "defaultProps", {
  index: null,
  isSelected: false,
  textColor: {},
  iconPath: '',
  onSelect: noop,
  badgeText: null,
  showRedDot: false
});



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* unused harmony export throttle */
/* unused harmony export normalizePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return splitUrl; });
/* unused harmony export isNumber */
var _this2 = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var _this = this;

    var context = scope || this;
    var now = +new Date();
    var args = arguments;

    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        _newArrowCheck(this, _this);

        last = now;
        fn.apply(context, args);
      }.bind(this), threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
var normalizePath = function normalizePath(url) {
  _newArrowCheck(this, _this2);

  var _isRelative;

  var _leadingParents = '';

  var _parent, _pos; // handle relative paths


  if (url.charAt(0) !== '/') {
    _isRelative = true;
    url = '/' + url;
  } // handle relative files (as opposed to directories)


  if (url.substring(-3) === '/..' || url.slice(-2) === '/.') {
    url += '/';
  } // resolve simples


  url = url.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/'); // remember leading parents

  if (_isRelative) {
    _leadingParents = url.substring(1).match(/^(\.\.\/)+/) || '';

    if (_leadingParents) {
      _leadingParents = _leadingParents[0];
    }
  } // resolve parents


  while (true) {
    _parent = url.search(/\/\.\.(\/|$)/);

    if (_parent === -1) {
      // no more ../ to resolve
      break;
    } else if (_parent === 0) {
      // top level cannot be relative, skip it
      url = url.substring(3);
      continue;
    }

    _pos = url.substring(0, _parent).lastIndexOf('/');

    if (_pos === -1) {
      _pos = _parent;
    }

    url = url.substring(0, _pos) + url.substring(_parent + 3);
  } // revert to relative


  if (_isRelative) {
    url = _leadingParents + url.substring(1);
  }

  return url;
}.bind(this);
var splitUrl = function splitUrl(_url) {
  _newArrowCheck(this, _this2);

  var url = _url || '';
  var pos;
  var res = {
    path: null,
    query: null,
    fragment: null
  };
  pos = url.indexOf('#');

  if (pos > -1) {
    res.fragment = url.substring(pos + 1);
    url = url.substring(0, pos);
  }

  pos = url.indexOf('?');

  if (pos > -1) {
    res.query = url.substring(pos + 1);
    url = url.substring(0, pos);
  }

  res.path = url;
  return res;
}.bind(this);
var isNumber = function isNumber(obj) {
  _newArrowCheck(this, _this2);

  return typeof obj === 'number';
}.bind(this);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(81);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "html, body {\n  height: 100%; }\n\n#app {\n  height: 100%; }\n\n.taro-tabbar__border-white::before {\n  border-top-color: #fff !important; }\n\n.taro-tabbar__container {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  overflow: hidden; }\n\n.taro-tabbar__panel {\n  flex: 1;\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.taro-tabbar__tabbar {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  transition: bottom .2s, top .2s; }\n  .taro-tabbar__tabbar-top {\n    top: 0; }\n  .taro-tabbar__tabbar-bottom {\n    bottom: 0; }\n  .taro-tabbar__tabbar-hide {\n    display: none; }\n  .taro-tabbar__tabbar-slideout {\n    top: -52px;\n    flex: 0 0; }\n\n.taro-tabbar__panel + .taro-tabbar__tabbar-slideout {\n  top: auto;\n  bottom: -52px; }\n", ""]);



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabbarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TabbarContainer = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(TabbarContainer, _Nerv$Component);

  function TabbarContainer() {
    _classCallCheck(this, TabbarContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabbarContainer).apply(this, arguments));
  }

  _createClass(TabbarContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          reset = _objectWithoutProperties(_this$props, ["children", "className"]);

      var cls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-tabbar__container', className);
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__view__["a" /* default */], _extends({
        className: cls
      }, reset), children);
    }
  }]);

  return TabbarContainer;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabbarPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TabbarPanel = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(TabbarPanel, _Nerv$Component);

  function TabbarPanel() {
    _classCallCheck(this, TabbarPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabbarPanel).apply(this, arguments));
  }

  _createClass(TabbarPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          reset = _objectWithoutProperties(_this$props, ["children", "className"]);

      var cls = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('taro-tabbar__panel', className);
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__view__["a" /* default */], _extends({
        className: cls
      }, reset), children);
    }
  }]);

  return TabbarPanel;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_hoverable__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigator_css__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigator_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__navigator_css__);
var _dec, _class, _class2, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* eslint-disable prefer-promise-reject-errors */

/**
 * Navigator组件参数
 * @typedef NavigatorProps
 * @property {String} appId 当target="miniProgram"时有效，要打开的小程序 appId
 * @property {String} ariaLabel 无障碍访问，（属性）元素的额外描述
 * @property {Number} delta 当 openType 为 'navigateBack' 时有效，表示回退的层数
 * @property {Object} extraData 当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情
 * @property {String} [openType=navigate]  跳转方式
 * @property {String} path 当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页
 * @property {String} [target=self]  在哪个目标上发生跳转，默认当前小程序，可选值self/miniProgram
 * @property {String} url 当前小程序内的跳转链接
 * @property {version} [version=release]  当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是 *式版，则打开的小程序必定是正式版。
 * @property {String} onFail 当target="miniProgram"时有效，跳转小程序失败
 * @property {String} onComplete 当target="miniProgram"时有效，跳转小程序完成
 * @property {String} onSuccess 当target="miniProgram"时有效，跳转小程序成功
 */

/**
 * TODO: 参数还需要进一步细化对齐
 * Navigator组件
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 **/

var Navigator = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3__utils_hoverable__["a" /* default */])({
  hoverClass: 'navigator-hover',
  hoverStopPropergation: false,
  hoverStartTime: 50,
  hoverStayTime: 600
}), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Taro$Component) {
  _inherits(Navigator, _Taro$Component);

  function Navigator() {
    var _getPrototypeOf2,
        _this2 = this;

    var _this;

    _classCallCheck(this, Navigator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      var _this$props = _this.props,
          openType = _this$props.openType,
          onSuccess = _this$props.onSuccess,
          onFail = _this$props.onFail,
          onComplete = _this$props.onComplete;
      var promise;

      switch (openType) {
        case 'navigate':
          promise = __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.navigateTo({
            url: _this.props.url
          });
          break;

        case 'redirect':
          promise = __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.redirectTo({
            url: _this.props.url
          });
          break;

        case 'switchTab':
          promise = Object(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__["switchTab"])({
            url: _this.props.url
          });
          break;

        case 'reLaunch':
          promise = __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.reLaunch({
            url: _this.props.url
          });
          break;

        case 'navigateBack':
          promise = __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.navigateBack({
            delta: _this.props.delta
          });
          break;

        case 'exit':
          promise = Promise.reject({
            errMsg: "navigator:fail \u6682\u4E0D\u652F\u6301\"openType: exit\""
          });
          break;
      }

      if (promise) {
        promise.then(function (res) {
          _newArrowCheck(this, _this3);

          onSuccess && onSuccess(res);
          onComplete && onComplete(res);
        }.bind(this))["catch"](function (res) {
          _newArrowCheck(this, _this3);

          onFail && onFail(res);
          onComplete && onComplete(res);
        }.bind(this));
      }
    }.bind(this));

    return _this;
  }

  _createClass(Navigator, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isHover = _this$props2.isHover,
          hoverClass = _this$props2.hoverClass,
          onTouchStart = _this$props2.onTouchStart,
          onTouchEnd = _this$props2.onTouchEnd,
          className = _this$props2.className;
      return __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, _defineProperty({}, hoverClass, isHover)),
        onTouchStart: onTouchStart,
        onTouchEnd: onTouchEnd,
        onClick: this.onClick
      }, this.props.children);
    }
  }]);

  return Navigator;
}(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.Component), _defineProperty(_class2, "defaultProps", {
  target: 'self',
  url: null,
  openType: 'navigate',
  delta: null,
  appId: null,
  path: null,
  extraData: {},
  version: 'release',
  onSuccess: null,
  onFail: null,
  onComplete: null,
  isHover: false
}), _temp)) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Navigator);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_omit_js__);
var _this = this;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }




/**
 * 添加touch能力
 * @param {Object} Options hoverable的默认配置
 * @param {String} [Options.hoverClass] 指定点击时的样式类，当hover-class="none"时，没有点击态效果
 * @param {Boolean} [Options.hoverStopPropergation] 指定是否阻止本节点的祖先节点出现点击态
 * @param {Number} [Options.hoverStartTime] 按住后多久出现点击态，单位毫秒
 * @param {Number} [Options.hoverStayTime] 手指松开后点击态保留时间，单位毫秒
 */

var hoverable = function hoverable(_ref) {
  var _this2 = this;

  var hoverClass = _ref.hoverClass,
      hoverStopPropergation = _ref.hoverStopPropergation,
      hoverStartTime = _ref.hoverStartTime,
      hoverStayTime = _ref.hoverStayTime;

  _newArrowCheck(this, _this);

  return function (ComponentClass) {
    var _class, _temp;

    _newArrowCheck(this, _this2);

    return _temp = _class = /*#__PURE__*/function (_Taro$Component) {
      _inherits(HoverableComponent, _Taro$Component);

      function HoverableComponent(props, ctx) {
        var _this4 = this;

        var _this3;

        _classCallCheck(this, HoverableComponent);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(HoverableComponent).call(this, props, ctx));

        _defineProperty(_assertThisInitialized(_this3), "touchStartTimer", null);

        _defineProperty(_assertThisInitialized(_this3), "touchEndTimer", null);

        _defineProperty(_assertThisInitialized(_this3), "state", {
          isHover: false,
          onTouchStart: null,
          onTouchEnd: null
        });

        _defineProperty(_assertThisInitialized(_this3), "getInitState", function (_ref2) {
          var hoverClass = _ref2.hoverClass,
              hoverStartTime = _ref2.hoverStartTime,
              hoverStayTime = _ref2.hoverStayTime,
              hoverStopPropergation = _ref2.hoverStopPropergation,
              onTouchStart = _ref2.onTouchStart,
              onTouchEnd = _ref2.onTouchEnd;

          _newArrowCheck(this, _this4);

          if (hoverClass === 'none') return {};
          return {
            onTouchStart: _this3.getOnTouchStart({
              hoverStartTime: hoverStartTime,
              hoverStopPropergation: hoverStopPropergation,
              onTouchStart: onTouchStart
            }),
            onTouchEnd: _this3.getOnTouchEnd({
              hoverStayTime: hoverStayTime,
              hoverStopPropergation: hoverStopPropergation,
              onTouchEnd: onTouchEnd
            })
          };
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "getOnTouchStart", function (_ref3) {
          var _this5 = this;

          var hoverStartTime = _ref3.hoverStartTime,
              hoverStopPropergation = _ref3.hoverStopPropergation,
              onTouchStart = _ref3.onTouchStart;

          _newArrowCheck(this, _this4);

          return function (e) {
            var _this6 = this;

            _newArrowCheck(this, _this5);

            onTouchStart && onTouchStart(e);
            hoverStopPropergation && e.stopPropergation();
            _this3.touchStartTimer && clearTimeout(_this3.touchStartTimer);
            _this3.touchEndTimer && clearTimeout(_this3.touchEndTimer);
            _this3.touchStartTimer = setTimeout(function () {
              _newArrowCheck(this, _this6);

              _this3.setState({
                isHover: true
              });
            }.bind(this), hoverStartTime);
          }.bind(this);
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "getOnTouchEnd", function (_ref4) {
          var _this7 = this;

          var hoverStayTime = _ref4.hoverStayTime,
              hoverStopPropergation = _ref4.hoverStopPropergation,
              onTouchEnd = _ref4.onTouchEnd;

          _newArrowCheck(this, _this4);

          return function (e) {
            var _this8 = this;

            _newArrowCheck(this, _this7);

            onTouchEnd && onTouchEnd(e);
            hoverStopPropergation && e.stopPropergation();
            _this3.touchStartTimer && clearTimeout(_this3.touchStartTimer);
            _this3.touchEndTimer && clearTimeout(_this3.touchEndTimer);
            _this3.touchEndTimer = setTimeout(function () {
              _newArrowCheck(this, _this8);

              _this3.setState({
                isHover: false
              });
            }.bind(this), hoverStayTime);
          }.bind(this);
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "reset", function () {
          _newArrowCheck(this, _this4);

          _this3.setState({
            isHover: false
          });
        }.bind(this));

        _this3.state = _this3.getInitState(_this3.props);
        return _this3;
      }

      _createClass(HoverableComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          document.body.addEventListener('touchstart', this.reset);
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nProps, nCtx) {
          if (nProps.hoverClass !== this.props.hoverClass || nProps.hoverStopPropergation !== this.props.hoverStopPropergation || nProps.hoverStartTime !== this.props.hoverStartTime || nProps.hoverStayTime !== this.props.hoverStayTime) {
            var stateObj = this.getInitState(nProps);
            this.setState(stateObj);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.body.removeEventListener('touchstart', this.reset);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state,
              isHover = _this$state.isHover,
              onTouchStart = _this$state.onTouchStart,
              onTouchEnd = _this$state.onTouchEnd;

          var props = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_omit_js___default()(this.props, ['hoverStopPropergation', 'hoverStartTime', 'hoverStayTime']), {
            isHover: isHover,
            onTouchStart: onTouchStart,
            onTouchEnd: onTouchEnd
          });

          return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(ComponentClass, props);
        }
      }]);

      return HoverableComponent;
    }(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.Component), _defineProperty(_class, "defaultProps", {
      hoverClass: hoverClass,
      hoverStopPropergation: hoverStopPropergation,
      hoverStartTime: hoverStartTime,
      hoverStayTime: hoverStayTime
    }), _temp;
  }.bind(this);
}.bind(this);

/* harmony default export */ __webpack_exports__["a"] = (hoverable);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(87);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/dist/cjs.js!./navigator.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/dist/cjs.js!./navigator.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".navigator-hover {\r\n  background: #efefef;\r\n}\r\n", ""]);



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_scss__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_index_scss__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var WebView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(WebView, _Nerv$Component);

  function WebView() {
    var _this;

    _classCallCheck(this, WebView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebView).apply(this, arguments));
    _this.onLoad = _this.onLoad.bind(_assertThisInitialized(_this));
    _this.onError = _this.onError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WebView, [{
    key: "onLoad",
    value: function onLoad(e) {
      var onLoad = this.props.onLoad;
      onLoad && onLoad(e);
    }
  }, {
    key: "onError",
    value: function onError(e) {
      var onError = this.props.onError;
      onError && onError(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          other = _objectWithoutProperties(_this$props, ["src"]);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("iframe", _extends({
        className: "taro-webview",
        onLoad: this.onLoad,
        onError: this.onError
      }, __WEBPACK_IMPORTED_MODULE_1_omit_js___default()(this.props, ['src', 'className']), {
        src: src
      }, other));
    }
  }]);

  return WebView;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WebView);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(90);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "iframe {\n  border: none; }\n\n.taro-webview {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999; }\n", ""]);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OpenData = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(OpenData, _Nerv$Component);

  function OpenData() {
    _classCallCheck(this, OpenData);

    return _possibleConstructorReturn(this, _getPrototypeOf(OpenData).apply(this, arguments));
  }

  _createClass(OpenData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 OpenData 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return OpenData;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (OpenData);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_touchable__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_css__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_index_css__);
var _dec, _class, _class2, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Canvas组件参数
 * @typedef CanvasProps
 * @property {String} [canvasId=canvas] 组件的唯一标识符
 * @property {Boolean} [disableScroll=false] 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新
 * @property {EventHandle} onTouchstart 手指触摸动作开始
 * @property {EventHandle} onTouchmove 手指触摸后移动
 * @property {EventHandle} onTouchend 手指触摸动作结束
 * @property {EventHandle} onTouchcancel 手指触摸动作被打断，如来电提醒，弹窗
 * @property {EventHandle} onLongtap 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
 * @property {EventHandle} onError 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}
 */

var Canvas = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2__utils_touchable__["a" /* default */])(), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Taro$PureComponent) {
  _inherits(Canvas, _Taro$PureComponent);

  function Canvas() {
    var _getPrototypeOf2,
        _this2 = this;

    var _this;

    _classCallCheck(this, Canvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Canvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "width", 300);

    _defineProperty(_assertThisInitialized(_this), "height", 150);

    _defineProperty(_assertThisInitialized(_this), "getWrapRef", function (ref) {
      _newArrowCheck(this, _this2);

      if (ref) _this.wrapDom = ref;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "getCanvasRef", function (ref) {
      _newArrowCheck(this, _this2);

      if (ref) _this.canvasRef = ref;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "setSize", function (width, height) {
      _newArrowCheck(this, _this2);

      _this.canvasRef.setAttribute('width', width);

      _this.canvasRef.setAttribute('height', height);

      _this.width = width;
      _this.height = height;
    }.bind(this));

    return _this;
  }

  _createClass(Canvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.wrapDom) return;

      var _this$wrapDom$getBoun = this.wrapDom.getBoundingClientRect(),
          width = _this$wrapDom$getBoun.width,
          height = _this$wrapDom$getBoun.height;

      this.setSize(width, height);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$wrapDom$getBoun2 = this.wrapDom.getBoundingClientRect(),
          width = _this$wrapDom$getBoun2.width,
          height = _this$wrapDom$getBoun2.height;

      if (this.width !== width || this.height !== height) {
        this.setSize(width, height);
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(e) {
      var onError = this.props.onError;
      onError && onError({
        errMsg: e.message
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canvasId = _this$props.canvasId,
          onTouchStart = _this$props.onTouchStart,
          onTouchMove = _this$props.onTouchMove,
          onTouchEnd = _this$props.onTouchEnd,
          onTouchCancel = _this$props.onTouchCancel,
          className = _this$props.className,
          restProps = _objectWithoutProperties(_this$props, ["canvasId", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "className"]);

      var wrapProps = _objectSpread({
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('taro-canvas', className),
        ref: this.getWrapRef
      }, restProps);

      var canvasProps = {
        canvasId: canvasId,
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchCancel,
        width: this.width,
        height: this.height,
        ref: this.getCanvasRef
      };
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", wrapProps, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("canvas", canvasProps));
    }
  }]);

  return Canvas;
}(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.PureComponent), _defineProperty(_class2, "defaultProps", {
  canvasId: '',
  disableScroll: false,
  onError: null
}), _temp)) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Canvas);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_omit_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_omit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_omit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nervjs__);
var _this = this;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    offsetY: rect.top + scrollTop,
    offsetX: rect.left + scrollLeft
  };
}
/**
 * 将DOM标准的touches转换为wx的标准
 * @param {TouchList} touches
 */


var transformTouches = function transformTouches(touches, _ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;

  _newArrowCheck(this, _this);

  var wxTouches = [];
  var touchCnt = touches.length;

  for (var idx = 0; idx < touchCnt; idx++) {
    var touch = touches.item(idx);
    wxTouches.push({
      x: touch.pageX - offsetX,
      y: touch.pageY - offsetY,
      identifier: touch.identifier
    });
  }

  return wxTouches;
}.bind(this);

var touchable = function touchable() {
  var _this2 = this;

  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    longTapTime: 500
  };

  _newArrowCheck(this, _this);

  return function (ComponentClass) {
    var _class, _temp;

    _newArrowCheck(this, _this2);

    return _temp = _class = /*#__PURE__*/function (_Taro$Component) {
      _inherits(TouchableComponent, _Taro$Component);

      function TouchableComponent() {
        var _getPrototypeOf2,
            _this4 = this;

        var _this3;

        _classCallCheck(this, TouchableComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this3 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TouchableComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this3), "touchableRef", void 0);

        _defineProperty(_assertThisInitialized(_this3), "timer", null);

        _defineProperty(_assertThisInitialized(_this3), "offset", {
          offsetX: 0,
          offsetY: 0
        });

        _defineProperty(_assertThisInitialized(_this3), "onTouchStart", function (e) {
          var _this5 = this;

          _newArrowCheck(this, _this4);

          var _this3$props = _this3.props,
              onTouchStart = _this3$props.onTouchStart,
              onLongTap = _this3$props.onLongTap;
          Object.defineProperty(e, 'touches', {
            value: transformTouches(e.touches, _this3.offset)
          });
          onTouchStart && onTouchStart(e);
          _this3.timer = setTimeout(function () {
            _newArrowCheck(this, _this5);

            onLongTap && onLongTap(e);
          }.bind(this), opt.longTapTime);
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "onTouchMove", function (e) {
          _newArrowCheck(this, _this4);

          _this3.timer && clearTimeout(_this3.timer);
          var onTouchMove = _this3.props.onTouchMove;
          Object.defineProperty(e, 'touches', {
            value: transformTouches(e.touches, _this3.offset)
          });
          onTouchMove && onTouchMove(e);
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "onTouchEnd", function (e) {
          _newArrowCheck(this, _this4);

          _this3.timer && clearTimeout(_this3.timer);
          var onTouchEnd = _this3.props.onTouchEnd;
          Object.defineProperty(e, 'touches', {
            value: transformTouches(e.touches, _this3.offset)
          });
          onTouchEnd && onTouchEnd(e);
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "onTouchCancel", function (e) {
          _newArrowCheck(this, _this4);

          _this3.timer && clearTimeout(_this3.timer);
          var onTouchCancel = _this3.props.onTouchCancel;
          Object.defineProperty(e, 'touches', {
            value: transformTouches(e.touches, _this3.offset)
          });
          onTouchCancel && onTouchCancel(e);
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "getTouchableRef", function (ref) {
          _newArrowCheck(this, _this4);

          if (ref) {
            _this3.touchableRef = ref;
          }
        }.bind(this));

        _defineProperty(_assertThisInitialized(_this3), "updatePos", function () {
          _newArrowCheck(this, _this4);

          if (!_this3.touchableRef) return;

          var _getOffset = getOffset(Object(__WEBPACK_IMPORTED_MODULE_2_nervjs__["findDOMNode"])(_this3.touchableRef)),
              offsetX = _getOffset.offsetX,
              offsetY = _getOffset.offsetY;

          _this3.offset.offsetX = offsetX;
          _this3.offset.offsetY = offsetY;
        }.bind(this));

        return _this3;
      }

      _createClass(TouchableComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.updatePos();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.updatePos();
        }
      }, {
        key: "render",
        value: function render() {
          var props = _objectSpread({
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd,
            onTouchCancel: this.onTouchCancel
          }, __WEBPACK_IMPORTED_MODULE_1_omit_js___default()(this.props, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'onLongTap']));

          return __WEBPACK_IMPORTED_MODULE_2_nervjs___default.a.createElement(ComponentClass, _extends({}, props, {
            ref: this.getTouchableRef
          }));
        }
      }]);

      return TouchableComponent;
    }(__WEBPACK_IMPORTED_MODULE_0__tarojs_taro_h5___default.a.Component), _defineProperty(_class, "defaultProps", {
      onTouchStart: null,
      onTouchMove: null,
      onTouchEnd: null,
      onTouchCancel: null,
      onLongTap: null
    }), _temp;
  }.bind(this);
}.bind(this);

/* harmony default export */ __webpack_exports__["a"] = (touchable);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(95);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!./index.css", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".taro-canvas {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 150px;\r\n}\r\n", ""]);



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovableArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MovableView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MovableView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(MovableView, _Nerv$Component);

  function MovableView() {
    _classCallCheck(this, MovableView);

    return _possibleConstructorReturn(this, _getPrototypeOf(MovableView).apply(this, arguments));
  }

  _createClass(MovableView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 MovableView 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return MovableView;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);

var MovableArea = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(MovableArea, _Nerv$Component2);

  function MovableArea() {
    _classCallCheck(this, MovableArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(MovableArea).apply(this, arguments));
  }

  _createClass(MovableArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 MovableArea 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return MovableArea;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CoverView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CoverView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(CoverView, _Nerv$Component);

  function CoverView() {
    _classCallCheck(this, CoverView);

    return _possibleConstructorReturn(this, _getPrototypeOf(CoverView).apply(this, arguments));
  }

  _createClass(CoverView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 CoverView 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return CoverView;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);

var CoverImage = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(CoverImage, _Nerv$Component2);

  function CoverImage() {
    _classCallCheck(this, CoverImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(CoverImage).apply(this, arguments));
  }

  _createClass(CoverImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 CoverImage 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return CoverImage;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PickerView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(PickerView, _Nerv$Component);

  function PickerView() {
    _classCallCheck(this, PickerView);

    return _possibleConstructorReturn(this, _getPrototypeOf(PickerView).apply(this, arguments));
  }

  _createClass(PickerView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 PickerView 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return PickerView;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PickerView);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nervjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PickerViewColumn = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(PickerViewColumn, _Nerv$Component);

  function PickerViewColumn() {
    _classCallCheck(this, PickerViewColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(PickerViewColumn).apply(this, arguments));
  }

  _createClass(PickerViewColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 PickerViewColumn 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var rest = _extends({}, this.props);

      return __WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.createElement("div", rest, this.props.children);
    }
  }]);

  return PickerViewColumn;
}(__WEBPACK_IMPORTED_MODULE_0_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PickerViewColumn);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nervjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nervjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarojs_taro_h5__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarojs_taro_h5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tarojs_taro_h5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_index_css__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var StaticRenderer = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(StaticRenderer, _Nerv$Component);

  function StaticRenderer() {
    _classCallCheck(this, StaticRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StaticRenderer).apply(this, arguments));
  }

  _createClass(StaticRenderer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.shouldUpdate;
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", null, this.props.render());
    }
  }]);

  return StaticRenderer;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}

var isWebView = typeof navigator !== 'undefined' && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
var INDICATOR = {
  activate: 'release',
  deactivate: 'pull',
  release: 'loading',
  finish: 'finish'
};
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}

var willPreventDefault = supportsPassive ? {
  passive: false
} : false; // const willNotPreventDefault = supportsPassive ? { passive: true } : false;

var PullToRefresh = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(PullToRefresh, _Nerv$Component2);

  function PullToRefresh() {
    var _getPrototypeOf2,
        _this2 = this;

    var _this;

    _classCallCheck(this, PullToRefresh);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PullToRefresh)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currSt: 'deactivate',
      dragOnEdge: false
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", null);

    _defineProperty(_assertThisInitialized(_this), "contentRef", null);

    _defineProperty(_assertThisInitialized(_this), "_to", null);

    _defineProperty(_assertThisInitialized(_this), "_ScreenY", null);

    _defineProperty(_assertThisInitialized(_this), "_startScreenY", null);

    _defineProperty(_assertThisInitialized(_this), "_lastScreenY", null);

    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "shouldUpdateChildren", false);

    _defineProperty(_assertThisInitialized(_this), "scrollContainer", document.querySelector('.taro-tabbar__panel') || document.body);

    _defineProperty(_assertThisInitialized(_this), "triggerPullDownRefresh", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      // 在初始化时、用代码 自动 触发 pullDownRefresh
      // 添加this._isMounted的判断，否则组建一实例化，currSt就会是finish
      if (!_this.state.dragOnEdge && _this._isMounted) {
        if (_this.props.refreshing) {
          _this._lastScreenY = _this.props.distanceToRefresh + 1; // change dom need after setState

          _this.setState({
            currSt: 'release'
          }, function () {
            _newArrowCheck(this, _this3);

            return _this.setContentStyle(_this._lastScreenY);
          }.bind(this));
        } else {
          _this.setState({
            currSt: 'finish'
          }, function () {
            _newArrowCheck(this, _this3);

            return _this.reset();
          }.bind(this));
        }
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      var _this4 = this;

      _newArrowCheck(this, _this2);

      var ele = _this.scrollContainer;
      _this._to = {
        touchstart: _this.onTouchStart.bind(_assertThisInitialized(_this), ele),
        touchmove: _this.onTouchMove.bind(_assertThisInitialized(_this), ele),
        touchend: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele),
        touchcancel: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele)
      };
      Object.keys(_this._to).forEach(function (key) {
        _newArrowCheck(this, _this4);

        ele.addEventListener(key, _this._to[key], willPreventDefault);
      }.bind(this));
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "destroy", function () {
      var _this5 = this;

      _newArrowCheck(this, _this2);

      var ele = _this.scrollContainer;
      Object.keys(_this._to).forEach(function (key) {
        _newArrowCheck(this, _this5);

        ele.removeEventListener(key, _this._to[key]);
      }.bind(this));
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (_ele, e) {
      _newArrowCheck(this, _this2);

      _this._ScreenY = _this._startScreenY = e.touches[0].screenY; // 一开始 refreshing 为 true 时 this._lastScreenY 有值

      _this._lastScreenY = _this._lastScreenY || 0;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "isEdge", function (ele) {
      _newArrowCheck(this, _this2);

      var container = _this.scrollContainer;

      if (container && container === document.body) {
        // In chrome61 `document.body.scrollTop` is invalid
        var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
        return scrollNode.scrollTop <= 0;
      }

      return ele.scrollTop <= 0;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "damping", function (dy) {
      _newArrowCheck(this, _this2);

      if (Math.abs(_this._lastScreenY) > _this.props.damping) {
        return 0;
      }

      var ratio = Math.abs(_this._ScreenY - _this._startScreenY) / window.screen.height;
      dy *= (1 - ratio) * 0.6;
      return dy;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (ele, e) {
      _newArrowCheck(this, _this2);

      // 使用 pageY 对比有问题
      var _screenY = e.touches[0].screenY; // 拖动方向不符合的不处理

      if (_this._startScreenY > _screenY) {
        return;
      }

      if (_this.isEdge(ele)) {
        if (!_this.state.dragOnEdge) {
          // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
          // 下面这行代码解决了上面这个问题
          _this._ScreenY = _this._startScreenY = e.touches[0].screenY;

          _this.setState({
            dragOnEdge: true
          });
        }

        if (e.cancelable) {
          e.preventDefault();
        } // add stopPropagation with fastclick will trigger content onClick event. why?
        // ref https://github.com/ant-design/ant-design-mobile/issues/2141
        // e.stopPropagation();


        var _diff = Math.round(_screenY - _this._ScreenY);

        _this._ScreenY = _screenY;
        _this._lastScreenY += _this.damping(_diff);

        _this.setContentStyle(_this._lastScreenY);

        if (Math.abs(_this._lastScreenY) < _this.props.distanceToRefresh) {
          if (_this.state.currSt !== 'deactivate') {
            // console.log('back to the distance');
            _this.setState({
              currSt: 'deactivate'
            });
          }
        } else {
          if (_this.state.currSt === 'deactivate') {
            // console.log('reach to the distance');
            _this.setState({
              currSt: 'activate'
            });
          }
        } // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
        // iOS UIWebView issue, It seems no problem in WKWebView


        if (isWebView && e.changedTouches[0].clientY < 0) {
          _this.onTouchEnd();
        }
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function () {
      _newArrowCheck(this, _this2);

      if (_this.state.dragOnEdge) {
        _this.setState({
          dragOnEdge: false
        });
      }

      if (_this.state.currSt === 'activate') {
        _this.setState({
          currSt: 'release'
        });

        _this.props.onRefresh();
      } else if (_this.state.currSt === 'release') {
        _this._lastScreenY = _this.props.distanceToRefresh + 1;

        _this.setContentStyle(_this._lastScreenY);
      } else {
        _this.reset();
      }
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _newArrowCheck(this, _this2);

      _this._lastScreenY = 0;

      _this.setContentStyle(0);
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this), "setContentStyle", function (ty) {
      _newArrowCheck(this, _this2);

      // todos: Why sometimes do not have `this.contentRef` ?
      if (_this.contentRef) {
        setTransform(_this.contentRef.style, "translate3d(0px,".concat(ty, "px,0)"));
      }
    }.bind(this));

    return _this;
  }

  _createClass(PullToRefresh, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      this.shouldUpdateChildren = this.props.children !== nextProps.children;
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps === this.props || prevProps.refreshing === this.props.refreshing) {
        return;
      } // triggerPullDownRefresh 需要尽可能减少 setState 次数


      this.triggerPullDownRefresh();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.init()
      this.triggerPullDownRefresh();
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// Should have no setTimeout here!
      // this.destroy(this.scrollContainer)
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var props = _objectSpread({}, this.props);

      delete props.damping;

      var className = props.className,
          prefixCls = props.prefixCls,
          children = props.children,
          onRefresh = props.onRefresh,
          refreshing = props.refreshing,
          indicator = props.indicator,
          distanceToRefresh = props.distanceToRefresh,
          restProps = _objectWithoutProperties(props, ["className", "prefixCls", "children", "onRefresh", "refreshing", "indicator", "distanceToRefresh"]);

      var renderChildren = __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(StaticRenderer, {
        shouldUpdate: this.shouldUpdateChildren,
        render: function () {
          _newArrowCheck(this, _this6);

          return children;
        }.bind(this)
      });

      var renderRefresh = function renderRefresh(cls) {
        var _this7 = this;

        _newArrowCheck(this, _this6);

        var _this$state = this.state,
            currSt = _this$state.currSt,
            dragOnEdge = _this$state.dragOnEdge;
        var cla = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(cls, !dragOnEdge && "".concat(prefixCls, "-transition"));
        var showIndicator = currSt === 'activate' || currSt === 'release';
        return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
          className: "".concat(prefixCls, "-content-wrapper")
        }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
          className: cla,
          ref: function (el) {
            _newArrowCheck(this, _this7);

            this.contentRef = el;
          }.bind(this)
        }, showIndicator && __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", {
          className: "".concat(prefixCls, "-indicator")
        }, __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", null), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", null), __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", null)), renderChildren));
      }.bind(this);

      if (this.scrollContainer) {
        return renderRefresh("".concat(prefixCls, "-content ").concat(prefixCls, "-down"));
      }

      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement("div", _extends({
        ref: function (el) {
          _newArrowCheck(this, _this6);

          this.containerRef = el;
        }.bind(this),
        className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, prefixCls, "".concat(prefixCls, "-down"))
      }, restProps), renderRefresh("".concat(prefixCls, "-content")));
    }
  }]);

  return PullToRefresh;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

_defineProperty(PullToRefresh, "defaultProps", {
  prefixCls: 'rmc-pull-to-refresh',
  distanceToRefresh: 50,
  damping: 100,
  indicator: INDICATOR
});

var PullDownRefresh = /*#__PURE__*/function (_Nerv$Component3) {
  _inherits(PullDownRefresh, _Nerv$Component3);

  function PullDownRefresh() {
    var _getPrototypeOf3,
        _this9 = this;

    var _this8;

    _classCallCheck(this, PullDownRefresh);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this8 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(PullDownRefresh)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this8), "state", {
      refreshing: false
    });

    _defineProperty(_assertThisInitialized(_this8), "isBound", false);

    _defineProperty(_assertThisInitialized(_this8), "listeners", []);

    _defineProperty(_assertThisInitialized(_this8), "startPullDownRefresh", function () {
      _newArrowCheck(this, _this9);

      _this8.props.onRefresh();

      _this8.setState({
        refreshing: true
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this8), "stopPullDownRefresh", function () {
      _newArrowCheck(this, _this9);

      _this8.setState({
        refreshing: false
      });
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this8), "getPtrRef", function (ref) {
      _newArrowCheck(this, _this9);

      _this8.ptrRef = ref;
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this8), "bindEvent", function () {
      var _this10 = this;

      _newArrowCheck(this, _this9);

      if (_this8.isBound) return;
      _this8.isBound = true;
      _this8.ptrRef && _this8.ptrRef.init();
      _this8.listeners = [['__taroStartPullDownRefresh', function (_ref) {
        var successHandler = _ref.successHandler,
            errorHandler = _ref.errorHandler;

        _newArrowCheck(this, _this10);

        try {
          _this8.startPullDownRefresh();

          successHandler({
            errMsg: "startPullDownRefresh: ok"
          });
        } catch (e) {
          errorHandler({
            errMsg: "startPullDownRefresh: fail"
          });
        }
      }.bind(this)], ['__taroStopPullDownRefresh', function (_ref2) {
        var successHandler = _ref2.successHandler,
            errorHandler = _ref2.errorHandler;

        _newArrowCheck(this, _this10);

        try {
          _this8.stopPullDownRefresh();

          successHandler({
            errMsg: "stopPullDownRefresh: ok"
          });
        } catch (e) {
          errorHandler({
            errMsg: "stopPullDownRefresh: fail"
          });
        }
      }.bind(this)]];

      _this8.listeners.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            evtName = _ref4[0],
            callback = _ref4[1];

        _newArrowCheck(this, _this10);

        __WEBPACK_IMPORTED_MODULE_2__tarojs_taro_h5___default.a.eventCenter.on(evtName, callback);
      }.bind(this));
    }.bind(this));

    _defineProperty(_assertThisInitialized(_this8), "unbindEvent", function () {
      var _this11 = this;

      _newArrowCheck(this, _this9);

      _this8.isBound = false;
      _this8.ptrRef && _this8.ptrRef.destroy();

      _this8.listeners.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            evtName = _ref6[0],
            callback = _ref6[1];

        _newArrowCheck(this, _this11);

        __WEBPACK_IMPORTED_MODULE_2__tarojs_taro_h5___default.a.eventCenter.off(evtName, callback);
      }.bind(this));
    }.bind(this));

    return _this8;
  }

  _createClass(PullDownRefresh, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var props = {
        distanceToRefresh: 100,
        damping: 200,
        refreshing: this.state.refreshing,
        onRefresh: this.startPullDownRefresh,
        ref: this.getPtrRef
      };
      return __WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.createElement(PullToRefresh, props, this.props.children);
    }
  }]);

  return PullDownRefresh;
}(__WEBPACK_IMPORTED_MODULE_1_nervjs___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PullDownRefresh);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(102);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!./index.css", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".rmc-pull-to-refresh-content {\r\n  transform-origin: left top 0px;\r\n}\r\n.rmc-pull-to-refresh-content-wrapper {\r\n  overflow: hidden;\r\n}\r\n\r\n.rmc-pull-to-refresh-transition {\r\n  transition: transform 0.3s;\r\n}\r\n\r\n\r\n@keyframes rmc-pull-to-refresh-indicator {\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rmc-pull-to-refresh-indicator {\r\n  text-align: center;\r\n  height: 30px;\r\n  line-height: 10px;\r\n}\r\n\r\n.rmc-pull-to-refresh-indicator > div {\r\n  background-color: grey;\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 100%;\r\n  margin: 3px;\r\n  animation-fill-mode: both;\r\n  display: inline-block;\r\n  animation: rmc-pull-to-refresh-indicator 0.5s 0s infinite linear;\r\n}\r\n.rmc-pull-to-refresh-indicator > div:nth-child(0) {\r\n  animation-delay: -0.1s !important;\r\n}\r\n.rmc-pull-to-refresh-indicator > div:nth-child(1) {\r\n  animation-delay: -0.2s !important;\r\n}\r\n.rmc-pull-to-refresh-indicator > div:nth-child(2) {\r\n  animation-delay: -0.3s !important;\r\n}\r\n.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator {\r\n  margin-top: -25px;\r\n}\r\n", ""]);



/***/ })
/******/ ]);
});
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950315);
})()
//# sourceMappingURL=index.js.map