"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ListPageSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.default;
  }
});
Object.defineProperty(exports, "PageHeaderSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.PageHeaderSkeleton;
  }
});
Object.defineProperty(exports, "ListToolbarSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.ListToolbarSkeleton;
  }
});
Object.defineProperty(exports, "ListSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.ListSkeleton;
  }
});
Object.defineProperty(exports, "ListSkeletonItem", {
  enumerable: true,
  get: function get() {
    return _List.ListSkeletonItem;
  }
});
Object.defineProperty(exports, "TableItemSkeleton", {
  enumerable: true,
  get: function get() {
    return _Descriptions.TableItemSkeleton;
  }
});
Object.defineProperty(exports, "DescriptionsSkeleton", {
  enumerable: true,
  get: function get() {
    return _Descriptions.DescriptionsSkeleton;
  }
});
Object.defineProperty(exports, "TableSkeleton", {
  enumerable: true,
  get: function get() {
    return _Descriptions.TableSkeleton;
  }
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireWildcard(require("./component/List"));

var _Result = _interopRequireDefault(require("./component/Result"));

var _Descriptions = _interopRequireWildcard(require("./component/Descriptions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PageSkeleton = function PageSkeleton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'list' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["type"]);

  if (type === 'result') {
    return /*#__PURE__*/_react.default.createElement(_Result.default, rest);
  }

  if (type === 'descriptions') {
    return /*#__PURE__*/_react.default.createElement(_Descriptions.default, rest);
  }

  return /*#__PURE__*/_react.default.createElement(_List.default, rest);
};

var _default = PageSkeleton;
exports.default = _default;