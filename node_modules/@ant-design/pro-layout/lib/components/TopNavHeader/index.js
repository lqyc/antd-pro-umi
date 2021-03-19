"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

var _SiderMenu = require("../SiderMenu/SiderMenu");

require("./index.less");

var _BaseMenu = _interopRequireDefault(require("../SiderMenu/BaseMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 抽离出来是为了防止 rightSize 经常改变导致菜单 render
 *
 * @param param0
 */
var RightContent = function RightContent(_ref) {
  var rightContentRender = _ref.rightContentRender,
      props = _objectWithoutProperties(_ref, ["rightContentRender"]);

  var _useState = (0, _react.useState)('auto'),
      _useState2 = _slicedToArray(_useState, 2),
      rightSize = _useState2[0],
      setRightSize = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      minWidth: rightSize
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingRight: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_rcResizeObserver.default, {
    onResize: function onResize(_ref2) {
      var width = _ref2.width;
      setRightSize(width);
    }
  }, rightContentRender && /*#__PURE__*/_react.default.createElement("div", null, rightContentRender(_objectSpread({}, props))))));
};

var TopNavHeader = function TopNavHeader(props) {
  var ref = (0, _react.useRef)(null);
  var theme = props.theme,
      onMenuHeaderClick = props.onMenuHeaderClick,
      contentWidth = props.contentWidth,
      rightContentRender = props.rightContentRender,
      propsClassName = props.className,
      style = props.style,
      layout = props.layout;
  var prefixCls = "".concat(props.prefixCls || 'ant-pro', "-top-nav-header");
  var headerDom = (0, _SiderMenu.defaultRenderLogoAndTitle)(_objectSpread(_objectSpread({}, props), {}, {
    collapsed: false
  }), layout === 'mix' ? 'headerTitleRender' : undefined);
  var className = (0, _classnames.default)(prefixCls, propsClassName, {
    light: theme === 'light'
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "".concat(prefixCls, "-main ").concat(contentWidth === 'Fixed' ? 'wide' : '')
  }, headerDom && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-main-left"),
    onClick: onMenuHeaderClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-logo"),
    key: "logo",
    id: "logo"
  }, headerDom)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1
    },
    className: "".concat(prefixCls, "-menu")
  }, /*#__PURE__*/_react.default.createElement(_BaseMenu.default, _extends({}, props, props.menuProps))), rightContentRender && /*#__PURE__*/_react.default.createElement(RightContent, _extends({
    rightContentRender: rightContentRender
  }, props))));
};

var _default = TopNavHeader;
exports.default = _default;