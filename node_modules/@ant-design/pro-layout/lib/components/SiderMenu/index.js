"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/drawer/style");

var _drawer = _interopRequireDefault(require("antd/es/drawer"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _routeUtils = require("@umijs/route-utils");

var _SiderMenu = _interopRequireDefault(require("./SiderMenu"));

var _Counter = _interopRequireDefault(require("./Counter"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SiderMenuWrapper = function SiderMenuWrapper(props) {
  var isMobile = props.isMobile,
      menuData = props.menuData,
      siderWidth = props.siderWidth,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse,
      style = props.style,
      className = props.className,
      hide = props.hide,
      getContainer = props.getContainer,
      prefixCls = props.prefixCls,
      matchMenuKeys = props.matchMenuKeys;

  var _MenuCounter$useConta = _Counter.default.useContainer(),
      setFlatMenuKeys = _MenuCounter$useConta.setFlatMenuKeys;

  (0, _react.useEffect)(function () {
    if (!menuData || menuData.length < 1) {
      return function () {
        return null;
      };
    } // 当 menu data 改变的时候重新计算这两个参数


    var newFlatMenus = (0, _routeUtils.getFlatMenus)(menuData);
    var animationFrameId = requestAnimationFrame(function () {
      setFlatMenuKeys(Object.keys(newFlatMenus));
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchMenuKeys.join('-')]);
  (0, _react.useEffect)(function () {
    if (isMobile === true) {
      onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isMobile]);
  var omitProps = (0, _omit.default)(props, ['className', 'style']);

  if (hide) {
    return null;
  }

  return isMobile ? /*#__PURE__*/_react.default.createElement(_drawer.default, {
    visible: !collapsed,
    placement: "left",
    className: (0, _classnames.default)("".concat(prefixCls, "-drawer-sider"), className),
    onClose: function onClose() {
      return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
    },
    style: _objectSpread({
      padding: 0,
      height: '100vh'
    }, style),
    getContainer: getContainer,
    width: siderWidth,
    bodyStyle: {
      height: '100vh',
      padding: 0,
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_SiderMenu.default, _extends({}, omitProps, {
    className: (0, _classnames.default)("".concat(prefixCls, "-sider"), className),
    collapsed: isMobile ? false : collapsed,
    splitMenus: false
  }))) : /*#__PURE__*/_react.default.createElement(_SiderMenu.default, _extends({
    className: (0, _classnames.default)("".concat(prefixCls, "-sider"), className)
  }, omitProps, {
    style: style
  }));
};

var _default = SiderMenuWrapper;
exports.default = _default;