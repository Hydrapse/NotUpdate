(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/tabs/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENV = _taroWeapp2.default.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;

var AtTabs = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTabs, _AtComponent);

  function AtTabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTabs.__proto__ || Object.getPrototypeOf(AtTabs)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "loopArray8", "tabList", "rootCls", "scroll", "_tabId", "scrollX", "scrollY", "_scrollLeft", "_scrollTop", "_scrollIntoView", "swipeable", "tabDirection", "current", "customStyle", "className", "height", "animated", "children"], _this.updateState = function (idx) {
      if (_this.props.scroll) {
        // 标签栏滚动
        switch (ENV) {
          case _taroWeapp2.default.ENV_TYPE.WEAPP:
          case _taroWeapp2.default.ENV_TYPE.ALIPAY:
          case _taroWeapp2.default.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);
              _this.setState({
                _scrollIntoView: "tab" + index
              });
              break;
            }
          case _taroWeapp2.default.ENV_TYPE.WEB:
            {
              var _index = Math.max(idx - 1, 0);
              var prevTabItem = _this.tabHeaderRef.childNodes[_index];
              prevTabItem && _this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }
          default:
            {
              console.warn('AtTab 组件在该环境还未适配');
              break;
            }
        }
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTabs, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtTabs.prototype.__proto__ || Object.getPrototypeOf(AtTabs.prototype), '_constructor', this).call(this, props);

      this.state = {
        _scrollLeft: 0,
        _scrollTop: 0,
        _scrollIntoView: ''
      };
      this._tabId = (0, _utils.isTest)() ? 'tabs-AOTU2018' : (0, _utils.uuid)();
      // 触摸时的原点
      this._touchDot = 0;
      // 定时器
      this._timer = null;
      // 滑动时间间隔
      this._interval = 0;
      // 是否已经在滑动
      this._isMoving = false;
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'handleClick',
    value: function handleClick(index, event) {
      this.props.onClick(index, event);
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      var _this2 = this;

      var _props = this.props,
          swipeable = _props.swipeable,
          tabDirection = _props.tabDirection;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      } // 获取触摸时的原点
      this._touchDot = e.touches[0].pageX;
      // 使用js计时器记录时间
      this._timer = setInterval(function () {
        _this2._interval++;
      }, 100);
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      var _props2 = this.props,
          swipeable = _props2.swipeable,
          tabDirection = _props2.tabDirection,
          current = _props2.current,
          tabList = _props2.tabList;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      }var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this._touchDot;
      var maxIndex = tabList.length;
      if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -100) {
          this._isMoving = true;
          this.handleClick(current + 1, e);
          // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this._isMoving = true;
          this.handleClick(current - 1, e);
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      var _props3 = this.props,
          swipeable = _props3.swipeable,
          tabDirection = _props3.tabDirection;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      }clearInterval(this._timer);
      this._interval = 0;
      this._isMoving = false;
    }
  }, {
    key: 'getTabHeaderRef',
    value: function getTabHeaderRef() {
      if (ENV === _taroWeapp2.default.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this._tabId);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scroll !== this.props.scroll) {
        this.getTabHeaderRef();
      }
      if (nextProps.current !== this.props.current) {
        this.updateState(nextProps.current);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getTabHeaderRef();
      this.updateState(this.props.current);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.tabHeaderRef = null;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _classNames;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var _tabId = this._tabId;
      var _props4 = this.__props,
          customStyle = _props4.customStyle,
          className = _props4.className,
          height = _props4.height,
          tabDirection = _props4.tabDirection,
          animated = _props4.animated,
          tabList = _props4.tabList,
          scroll = _props4.scroll,
          current = _props4.current;
      var _state = this.__state,
          _scrollLeft = _state._scrollLeft,
          _scrollTop = _state._scrollTop,
          _scrollIntoView = _state._scrollIntoView;

      var heightStyle = { height: height };
      var underlineStyle = {
        height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
        width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
      };
      var bodyStyle = {};
      var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";
      if (tabDirection === 'horizontal') {
        transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
      }
      Object.assign(bodyStyle, {
        transform: transformStyle,
        '-webkit-transform': transformStyle
      });
      if (!animated) {
        bodyStyle.transition = 'unset';
      }

      var rootCls = (0, _classnames2.default)((_classNames = {
        'at-tabs': true,
        'at-tabs--scroll': scroll
      }, _defineProperty(_classNames, "at-tabs--" + tabDirection, true), _defineProperty(_classNames, "at-tabs--" + ENV, true), _classNames), className);
      var scrollX = tabDirection === 'horizontal';
      var scrollY = tabDirection === 'vertical';
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(heightStyle, customStyle));
      var anonymousState__temp2 = scroll ? (0, _taroWeapp.internal_inline_style)(heightStyle) : null;
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(bodyStyle, heightStyle));
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(underlineStyle);
      var loopArray8 = tabList.map(function (item, idx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var itemCls = (0, _classnames2.default)({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx
        });
        return {
          itemCls: itemCls,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray8: loopArray8,
        tabList: tabList,
        rootCls: rootCls,
        scroll: scroll,
        _tabId: _tabId,
        scrollX: scrollX,
        scrollY: scrollY
      });
      return this.__state;
    }
  }]);

  return AtTabs;
}(_component2.default), _class.$$events = ["handleClick", "handleTouchStart", "handleTouchEnd", "handleTouchMove"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/tabs/index", _temp2);


AtTabs.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  onClick: function onClick() {}
};
AtTabs.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  height: _propTypes2.default.string,
  tabDirection: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  current: _propTypes2.default.number,
  swipeable: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  animated: _propTypes2.default.bool,
  tabList: _propTypes2.default.array,
  onClick: _propTypes2.default.func
};
exports.default = AtTabs;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtTabs));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-ui/dist/weapp/components/tabs/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/synapse/vscode_workspace/NodeJS_project/NotUpdate/NotUpdate-Taro/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_synapse_vscode_workspace_NodeJS_project_NotUpdate_NotUpdate_Taro_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx","runtime","taro","vendors"]]]);