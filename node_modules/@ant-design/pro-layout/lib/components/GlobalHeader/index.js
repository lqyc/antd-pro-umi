"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./index.less");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SiderMenu = require("../SiderMenu/SiderMenu");

var _TopNavHeader = _interopRequireDefault(require("../TopNavHeader"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderLogo = function renderLogo(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }

  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }

  return logoDom;
};

var GlobalHeader = function GlobalHeader(props) {
  var isMobile = props.isMobile,
      logo = props.logo,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse,
      _props$collapsedButto = props.collapsedButtonRender,
      collapsedButtonRender = _props$collapsedButto === void 0 ? _SiderMenu.defaultRenderCollapsedButton : _props$collapsedButto,
      rightContentRender = props.rightContentRender,
      menuHeaderRender = props.menuHeaderRender,
      onMenuHeaderClick = props.onMenuHeaderClick,
      propClassName = props.className,
      style = props.style,
      layout = props.layout,
      children = props.children,
      _props$headerTheme = props.headerTheme,
      headerTheme = _props$headerTheme === void 0 ? 'dark' : _props$headerTheme,
      splitMenus = props.splitMenus,
      menuData = props.menuData,
      prefixCls = props.prefixCls;
  var baseClassName = "".concat(prefixCls, "-global-header");
  var className = (0, _classnames.default)(propClassName, baseClassName, _defineProperty({}, "".concat(baseClassName, "-layout-").concat(layout), layout && headerTheme === 'dark'));

  if (layout === 'mix' && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        children: undefined
      });
    });
    var clearMenuData = (0, _utils.clearMenuItem)(noChildrenMenuData);
    return /*#__PURE__*/_react.default.createElement(_TopNavHeader.default, _extends({
      mode: "horizontal"
    }, props, {
      splitMenus: false,
      menuData: clearMenuData,
      theme: headerTheme
    }));
  }

  var logoDom = /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(baseClassName, "-logo"),
    key: "logo"
  }, /*#__PURE__*/_react.default.createElement("a", null, (0, _SiderMenu.defaultRenderLogo)(logo)));

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: _objectSpread({}, style)
  }, isMobile && renderLogo(menuHeaderRender, logoDom), isMobile && collapsedButtonRender && /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(baseClassName, "-collapsed-button"),
    onClick: function onClick() {
      if (onCollapse) {
        onCollapse(!collapsed);
      }
    }
  }, collapsedButtonRender(collapsed)), layout === 'mix' && !isMobile && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClassName, "-logo"),
    onClick: onMenuHeaderClick
  }, (0, _SiderMenu.defaultRenderLogoAndTitle)(_objectSpread(_objectSpread({}, props), {}, {
    collapsed: false
  }), 'headerTitleRender'))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1
    }
  }, children), rightContentRender && rightContentRender(props));
};

var _default = GlobalHeader;
exports.default = _default;