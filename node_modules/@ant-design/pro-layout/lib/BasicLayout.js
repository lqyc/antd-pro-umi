"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("./BasicLayout.less");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _warning = _interopRequireDefault(require("warning"));

var _useMergedState5 = _interopRequireDefault(require("rc-util/es/hooks/useMergedState"));

var _useJsonComparison = require("use-json-comparison");

var _useMediaAntdQuery = _interopRequireDefault(require("use-media-antd-query"));

var _proUtils = require("@ant-design/pro-utils");

var _omit = _interopRequireDefault(require("omit.js"));

var _routeUtils = require("@umijs/route-utils");

var _Header = _interopRequireDefault(require("./Header"));

var _getPageTitle = require("./getPageTitle");

var _defaultSettings = _interopRequireDefault(require("./defaultSettings"));

var _locales = _interopRequireDefault(require("./locales"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _RouteContext = _interopRequireDefault(require("./RouteContext"));

var _SiderMenu = _interopRequireDefault(require("./components/SiderMenu"));

var _getBreadcrumbProps = require("./utils/getBreadcrumbProps");

var _getMenuData = _interopRequireDefault(require("./utils/getMenuData"));

var _PageLoading = _interopRequireDefault(require("./components/PageLoading"));

var _Counter = _interopRequireDefault(require("./components/SiderMenu/Counter"));

var _WrapContent = _interopRequireDefault(require("./WrapContent"));

var _compatibleLayout = _interopRequireDefault(require("./utils/compatibleLayout"));

var _useCurrentMenuLayoutProps = _interopRequireDefault(require("./utils/useCurrentMenuLayoutProps"));

var _utils = require("./utils/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var headerRender = function headerRender(props, matchMenuKeys) {
  if (props.headerRender === false || props.pure) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
    matchMenuKeys: matchMenuKeys
  }, props));
};

var footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }

  if (props.footerRender) {
    return props.footerRender(_objectSpread({}, props), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

  return null;
};

var renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
  var layout = props.layout,
      isMobile = props.isMobile,
      openKeys = props.openKeys,
      splitMenus = props.splitMenus,
      menuRender = props.menuRender;

  if (props.menuRender === false || props.pure) {
    return null;
  }

  var menuData = props.menuData;
  /** 如果是分割菜单模式，需要专门实现一下 */

  if (splitMenus && openKeys !== false && !isMobile) {
    var _matchMenuKeys = _slicedToArray(matchMenuKeys, 1),
        key = _matchMenuKeys[0];

    if (key) {
      var _props$menuData, _props$menuData$find;

      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 ? void 0 : (_props$menuData$find = _props$menuData.find(function (item) {
        return item.key === key;
      })) === null || _props$menuData$find === void 0 ? void 0 : _props$menuData$find.children) || [];
    } else {
      menuData = [];
    }
  } // 这里走了可以少一次循环


  var clearMenuData = (0, _utils.clearMenuItem)(menuData || []);

  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && splitMenus) {
    return null;
  }

  if (layout === 'top' && !isMobile) {
    return /*#__PURE__*/_react.default.createElement(_SiderMenu.default, _extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      hide: true
    }));
  }

  if (menuRender) {
    var defaultDom = /*#__PURE__*/_react.default.createElement(_SiderMenu.default, _extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      // 这里走了可以少一次循环
      menuData: clearMenuData
    }));

    return menuRender(props, defaultDom);
  }

  return /*#__PURE__*/_react.default.createElement(_SiderMenu.default, _extends({
    matchMenuKeys: matchMenuKeys
  }, props, {
    // 这里走了可以少一次循环
    menuData: clearMenuData
  }));
};

var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = (0, _getPageTitle.getPageTitleInfo)(pageProps);

  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: ''
    };
  }

  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);

    if (typeof title === 'string') {
      return _objectSpread(_objectSpread({}, pageTitleInfo), {}, {
        title: title
      });
    }

    (0, _warning.default)(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
  }

  return pageTitleInfo;
};

var getPaddingLeft = function getPaddingLeft(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 48 : siderWidth;
  }

  return 0;
};
/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */


var BasicLayout = function BasicLayout(props) {
  var _props$prefixCls, _props$location2, _classNames, _classNames2, _props$location3, _props$location4, _props$location4$path;

  var children = props.children,
      propsOnCollapse = props.onCollapse,
      _props$location = props.location,
      location = _props$location === void 0 ? {
    pathname: '/'
  } : _props$location,
      contentStyle = props.contentStyle,
      route = props.route,
      defaultCollapsed = props.defaultCollapsed,
      style = props.style,
      disableContentMargin = props.disableContentMargin,
      _props$siderWidth = props.siderWidth,
      siderWidth = _props$siderWidth === void 0 ? 208 : _props$siderWidth,
      menu = props.menu,
      propsIsChildrenLayout = props.isChildrenLayout,
      menuDataRender = props.menuDataRender,
      loading = props.loading;
  var context = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');

  var formatMessage = function formatMessage(_ref) {
    var id = _ref.id,
        defaultMessage = _ref.defaultMessage,
        restParams = _objectWithoutProperties(_ref, ["id", "defaultMessage"]);

    if (props.formatMessage) {
      return props.formatMessage(_objectSpread({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }

    var locales = (0, _locales.default)();
    return locales[id] ? locales[id] : defaultMessage;
  };

  var _useMergedState = (0, _useMergedState5.default)(function () {
    return (0, _getMenuData.default)((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      menuInfoData = _useMergedState2[0],
      setMenuInfoData = _useMergedState2[1];

  var _menuInfoData$breadcr = menuInfoData.breadcrumb,
      breadcrumb = _menuInfoData$breadcr === void 0 ? {} : _menuInfoData$breadcr,
      breadcrumbMap = menuInfoData.breadcrumbMap,
      _menuInfoData$menuDat = menuInfoData.menuData,
      menuData = _menuInfoData$menuDat === void 0 ? [] : _menuInfoData$menuDat;
  var matchMenus = (0, _react.useMemo)(function () {
    return (0, _routeUtils.getMatchMenu)(location.pathname || '/', menuData, true);
  }, [location.pathname, menuInfoData]);
  var matchMenuKeys = (0, _react.useMemo)(function () {
    return Array.from(new Set(matchMenus.map(function (item) {
      return item.key || item.path || '';
    })));
  }, [matchMenus]); // 当前选中的menu，一般不会为空

  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = (0, _useCurrentMenuLayoutProps.default)(currentMenu);

  var _props$currentMenuLay = _objectSpread(_objectSpread({}, props), currentMenuLayoutProps),
      fixSiderbar = _props$currentMenuLay.fixSiderbar,
      navTheme = _props$currentMenuLay.navTheme,
      defaultPropsLayout = _props$currentMenuLay.layout,
      rest = _objectWithoutProperties(_props$currentMenuLay, ["fixSiderbar", "navTheme", "layout"]);

  var propsLayout = (0, _compatibleLayout.default)(defaultPropsLayout);
  var colSize = (0, _useMediaAntdQuery.default)();
  var isMobile = (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  /** 如果 menuRender 不存在，可以做一下性能优化 只要 routers 没有更新就不需要重新计算 */

  (0, _proUtils.useDeepCompareEffect)(function () {
    if (menu === null || menu === void 0 ? void 0 : menu.loading) {
      return function () {
        return null;
      };
    }

    var infoData = (0, _getMenuData.default)((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender); // 稍微慢一点 render，不然会造成性能问题，看起来像是菜单的卡顿

    var animationFrameId = requestAnimationFrame(function () {
      setMenuInfoData(infoData);
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    };
  }, [props.route, (0, _useJsonComparison.stringify)(menu), (_props$location2 = props.location) === null || _props$location2 === void 0 ? void 0 : _props$location2.pathname]); // If it is a fix menu, calculate padding
  // don't need padding in phone mode

  var hasLeftPadding = propsLayout !== 'top' && !isMobile;

  var _useMergedState3 = (0, _useMergedState5.default)(function () {
    return defaultCollapsed || false;
  }, {
    value: props.collapsed,
    onChange: propsOnCollapse
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      collapsed = _useMergedState4[0],
      onCollapse = _useMergedState4[1]; // Splicing parameters, adding menuData and formatMessage in props


  var defaultProps = (0, _omit.default)(_objectSpread(_objectSpread(_objectSpread({
    prefixCls: prefixCls
  }, props), {}, {
    siderWidth: siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage: formatMessage,
    breadcrumb: breadcrumb,
    layout: propsLayout
  }), ['className', 'style', 'breadcrumbRender']); // gen page title

  var pageTitleInfo = defaultPageTitleRender(_objectSpread(_objectSpread({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  }), props); // gen breadcrumbProps, parameter for pageHeader

  var breadcrumbProps = (0, _getBreadcrumbProps.getBreadcrumbProps)(_objectSpread(_objectSpread({}, defaultProps), {}, {
    breadcrumbRender: props.breadcrumbRender,
    breadcrumbMap: breadcrumbMap
  })); // render sider dom

  var siderMenuDom = renderSiderMenu(_objectSpread(_objectSpread({}, defaultProps), {}, {
    menuData: menuData,
    onCollapse: onCollapse,
    isMobile: isMobile,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light',
    collapsed: collapsed
  }), matchMenuKeys); // render header dom

  var headerDom = headerRender(_objectSpread(_objectSpread({}, defaultProps), {}, {
    hasSiderMenu: !!siderMenuDom,
    menuData: menuData,
    isMobile: isMobile,
    collapsed: collapsed,
    onCollapse: onCollapse,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light'
  }), matchMenuKeys); // render footer dom

  var footerDom = footerRender(_objectSpread({
    isMobile: isMobile,
    collapsed: collapsed
  }, defaultProps));

  var _useContext = (0, _react.useContext)(_RouteContext.default),
      contextIsChildrenLayout = _useContext.isChildrenLayout; // 如果 props 中定义，以 props 为准


  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var baseClassName = "".concat(prefixCls, "-basicLayout"); // gen className

  var className = (0, _classnames.default)(props.className, 'ant-design-pro', baseClassName, (_classNames = {}, _defineProperty(_classNames, "screen-".concat(colSize), colSize), _defineProperty(_classNames, "".concat(baseClassName, "-top-menu"), propsLayout === 'top'), _defineProperty(_classNames, "".concat(baseClassName, "-is-children"), isChildrenLayout), _defineProperty(_classNames, "".concat(baseClassName, "-fix-siderbar"), fixSiderbar), _defineProperty(_classNames, "".concat(baseClassName, "-").concat(propsLayout), propsLayout), _classNames));
  /** 计算 slider 的宽度 */

  var leftSiderWidth = getPaddingLeft(!!hasLeftPadding, collapsed, siderWidth); // siderMenuDom 为空的时候，不需要 padding

  var genLayoutStyle = {
    position: 'relative'
  }; // if is some layout children, don't need min height

  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  var contentClassName = (0, _classnames.default)("".concat(baseClassName, "-content"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(baseClassName, "-has-header"), headerDom), _defineProperty(_classNames2, "".concat(baseClassName, "-content-disable-margin"), disableContentMargin), _classNames2));
  /** 页面切换的时候触发 */

  (0, _react.useEffect)(function () {
    var onPageChange = props.onPageChange;

    if (onPageChange) {
      onPageChange(props.location);
    }
  }, [(_props$location3 = props.location) === null || _props$location3 === void 0 ? void 0 : _props$location3.pathname, (_props$location4 = props.location) === null || _props$location4 === void 0 ? void 0 : (_props$location4$path = _props$location4.pathname) === null || _props$location4$path === void 0 ? void 0 : _props$location4$path.search]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasFooterToolbar = _useState2[0],
      setHasFooterToolbar = _useState2[1];

  (0, _proUtils.useDocumentTitle)(pageTitleInfo, props.title || _defaultSettings.default.title);
  return /*#__PURE__*/_react.default.createElement(_Counter.default.Provider, null, /*#__PURE__*/_react.default.createElement(_RouteContext.default.Provider, {
    value: _objectSpread(_objectSpread({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData: menuData,
      isMobile: isMobile,
      collapsed: collapsed,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar: hasFooterToolbar,
      setHasFooterToolbar: setHasFooterToolbar,
      pageTitleInfo: pageTitleInfo,
      matchMenus: matchMenus,
      matchMenuKeys: matchMenuKeys,
      currentMenu: currentMenu
    })
  }, props.pure ? children : /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement(_layout.default, {
    style: _objectSpread({
      minHeight: '100%'
    }, style)
  }, siderMenuDom, /*#__PURE__*/_react.default.createElement("div", {
    style: genLayoutStyle,
    className: context.getPrefixCls('layout')
  }, headerDom, /*#__PURE__*/_react.default.createElement(_WrapContent.default, _extends({
    isChildrenLayout: isChildrenLayout
  }, rest, {
    className: contentClassName,
    style: contentStyle
  }), loading ? /*#__PURE__*/_react.default.createElement(_PageLoading.default, null) : children), footerDom)))));
};

BasicLayout.defaultProps = _objectSpread(_objectSpread({
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg'
}, _defaultSettings.default), {}, {
  location: (0, _proUtils.isBrowser)() ? window.location : undefined
});
var _default = BasicLayout;
exports.default = _default;