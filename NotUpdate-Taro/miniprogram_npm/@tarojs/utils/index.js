module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950381, function(require, module, exports) {
module.exports = require('./dist/index.js').default
module.exports.default = module.exports

}, function(modId) {var map = {"./dist/index.js":1589772950382}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950382, function(require, module, exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/* eslint-disable */
var objectIs = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var SimpleMap = /*#__PURE__*/function () {
  function SimpleMap() {
    _classCallCheck(this, SimpleMap);

    this.cache = [];
    this.size = 0;
  }

  _createClass(SimpleMap, [{
    key: "set",
    value: function set(k, v) {
      var len = this.cache.length;

      if (!len) {
        this.cache.push({
          k: k,
          v: v
        });
        this.size += 1;
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          item.v = v;
          return;
        }
      }

      this.cache.push({
        k: k,
        v: v
      });
      this.size += 1;
    }
  }, {
    key: "get",
    value: function get(k) {
      var len = this.cache.length;

      if (!len) {
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return item.v;
        }
      }
    }
  }, {
    key: "has",
    value: function has(k) {
      var len = this.cache.length;

      if (!len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "delete",
    value: function _delete(k) {
      var len = this.cache.length;

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          this.cache.splice(i, 1);
          this.size -= 1;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "clear",
    value: function clear() {
      var len = this.cache.length;
      this.size = 0;

      if (!len) {
        return;
      }

      while (len) {
        this.cache.pop();
        len--;
      }
    }
  }]);

  return SimpleMap;
}();

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}

function getCurrentPageUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  return addLeadingSlash(currentPage.route || currentPage.__route__);
}

var index = {
  shallowEqual: shallowEqual,
  getCurrentPageUrl: getCurrentPageUrl,
  SimpleMap: SimpleMap
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = index;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'shallowEqual', { enumerable: true, configurable: true, get: function() { return shallowEqual; } });Object.defineProperty(exports, 'getCurrentPageUrl', { enumerable: true, configurable: true, get: function() { return getCurrentPageUrl; } });Object.defineProperty(exports, 'SimpleMap', { enumerable: true, configurable: true, get: function() { return SimpleMap; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950381);
})()
//# sourceMappingURL=index.js.map