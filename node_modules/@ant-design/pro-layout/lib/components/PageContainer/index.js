"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/affix/style");

var _affix = _interopRequireDefault(require("antd/es/affix"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/page-header/style");

var _pageHeader = _interopRequireDefault(require("antd/es/page-header"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RouteContext = _interopRequireDefault(require("../../RouteContext"));

var _GridContent = _interopRequireDefault(require("../GridContent"));

var _FooterToolbar = _interopRequireDefault(require("../FooterToolbar"));

require("./index.less");

var _PageLoading = _interopRequireDefault(require("../PageLoading"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Render Footer tabList In order to be compatible with the old version of the PageHeader basically
 * all the functions are implemented.
 */
var renderFooter = function renderFooter(_ref) {
  var tabList = _ref.tabList,
      tabActiveKey = _ref.tabActiveKey,
      onTabChange = _ref.onTabChange,
      tabBarExtraContent = _ref.tabBarExtraContent,
      tabProps = _ref.tabProps,
      prefixedClassName = _ref.prefixedClassName;

  if (tabList && tabList.length) {
    return /*#__PURE__*/_react.default.createElement(_tabs.default, _extends({
      className: "".concat(prefixedClassName, "-tabs"),
      activeKey: tabActiveKey,
      onChange: function onChange(key) {
        if (onTabChange) {
          onTabChange(key);
        }
      },
      tabBarExtraContent: tabBarExtraContent
    }, tabProps), tabList.map(function (item, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react.default.createElement(_tabs.default.TabPane, _extends({}, item, {
          tab: item.tab,
          key: item.key || index
        }))
      );
    }));
  }

  return null;
};

var renderPageHeader = function renderPageHeader(content, extraContent, prefixedClassName) {
  if (!content && !extraContent) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-detail")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-main")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-row")
  }, content && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-content")
  }, content), extraContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-extraContent")
  }, extraContent))));
};

var defaultPageHeaderRender = function defaultPageHeaderRender(props, value) {
  var _pageHeaderProps$brea, _pageHeaderProps$brea2, _pageHeaderProps$brea3;

  var title = props.title,
      content = props.content,
      pageHeaderRender = props.pageHeaderRender,
      header = props.header,
      extraContent = props.extraContent,
      style = props.style,
      prefixCls = props.prefixCls,
      restProps = _objectWithoutProperties(props, ["title", "content", "pageHeaderRender", "header", "extraContent", "style", "prefixCls"]);

  if (pageHeaderRender === false) {
    return null;
  }

  if (pageHeaderRender) {
    return pageHeaderRender(_objectSpread(_objectSpread({}, props), value));
  }

  var pageHeaderTitle = title;

  if (!title && title !== false) {
    pageHeaderTitle = value.title;
  }

  var pageHeaderProps = _objectSpread(_objectSpread(_objectSpread({}, value), {}, {
    title: pageHeaderTitle
  }, restProps), {}, {
    footer: renderFooter(_objectSpread(_objectSpread({}, restProps), {}, {
      prefixedClassName: value.prefixedClassName
    }))
  }, header);

  if (!pageHeaderProps.title && !pageHeaderProps.subTitle && !((_pageHeaderProps$brea = pageHeaderProps.breadcrumb) === null || _pageHeaderProps$brea === void 0 ? void 0 : _pageHeaderProps$brea.itemRender) && !((_pageHeaderProps$brea2 = pageHeaderProps.breadcrumb) === null || _pageHeaderProps$brea2 === void 0 ? void 0 : (_pageHeaderProps$brea3 = _pageHeaderProps$brea2.routes) === null || _pageHeaderProps$brea3 === void 0 ? void 0 : _pageHeaderProps$brea3.length) && !pageHeaderProps.extra && !pageHeaderProps.tags && !pageHeaderProps.footer && !pageHeaderProps.avatar && !pageHeaderProps.backIcon && !content && !extraContent) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_pageHeader.default, _extends({}, pageHeaderProps, {
    breadcrumb: _objectSpread(_objectSpread({}, pageHeaderProps.breadcrumb), pageHeaderProps.breadcrumbProps),
    prefixCls: prefixCls
  }), (header === null || header === void 0 ? void 0 : header.children) || renderPageHeader(content, extraContent, value.prefixedClassName));
};

var PageContainer = function PageContainer(props) {
  var children = props.children,
      loading = props.loading,
      style = props.style,
      footer = props.footer,
      affixProps = props.affixProps,
      ghost = props.ghost,
      fixedHeader = props.fixedHeader;
  var value = (0, _react.useContext)(_RouteContext.default);

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var prefixedClassName = "".concat(prefixCls, "-page-container");
  var className = (0, _classnames.default)(prefixedClassName, props.className, _defineProperty({}, "".concat(prefixCls, "-page-container-ghost"), ghost));
  var content = children ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-children-content")
  }, children), value.hasFooterToolbar && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 48,
      marginTop: 24
    }
  })) : null;
  var pageHeaderDom = defaultPageHeaderRender(props, _objectSpread(_objectSpread({}, value), {}, {
    prefixCls: undefined,
    prefixedClassName: prefixedClassName
  }));
  var headerDom = pageHeaderDom ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-warp")
  }, pageHeaderDom) : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: className
  }, fixedHeader && headerDom ?
  /*#__PURE__*/
  // 在 hasHeader 且 fixedHeader 的情况下，才需要设置高度
  _react.default.createElement(_affix.default, _extends({
    offsetTop: value.hasHeader && value.fixedHeader ? value.headerHeight : 0
  }, affixProps), headerDom) : headerDom, /*#__PURE__*/_react.default.createElement(_GridContent.default, null, loading ? /*#__PURE__*/_react.default.createElement(_PageLoading.default, null) : content), footer && /*#__PURE__*/_react.default.createElement(_FooterToolbar.default, {
    prefixCls: prefixCls
  }, footer));
};

var _default = PageContainer;
exports.default = _default;