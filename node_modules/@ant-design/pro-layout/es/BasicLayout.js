import "antd/es/layout/style";
import _Layout from "antd/es/layout";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

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

import './BasicLayout.less';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import warning from 'warning';
import useMergedState from "rc-util/es/hooks/useMergedState";
import { stringify } from 'use-json-comparison';
import useAntdMediaQuery from 'use-media-antd-query';
import { useDeepCompareEffect, useDocumentTitle, isBrowser } from '@ant-design/pro-utils';
import Omit from 'omit.js';
import { getMatchMenu } from '@umijs/route-utils';
import Header from './Header';
import { getPageTitleInfo } from './getPageTitle';
import defaultSettings from './defaultSettings';
import getLocales from './locales';
import Footer from './Footer';
import RouteContext from './RouteContext';
import SiderMenu from './components/SiderMenu';
import { getBreadcrumbProps } from './utils/getBreadcrumbProps';
import getMenuData from './utils/getMenuData';
import PageLoading from './components/PageLoading';
import MenuCounter from './components/SiderMenu/Counter';
import WrapContent from './WrapContent';
import compatibleLayout from './utils/compatibleLayout';
import useCurrentMenuLayoutProps from './utils/useCurrentMenuLayoutProps';
import { clearMenuItem } from './utils/utils';

var headerRender = function headerRender(props, matchMenuKeys) {
  if (props.headerRender === false || props.pure) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Header, _extends({
    matchMenuKeys: matchMenuKeys
  }, props));
};

var footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }

  if (props.footerRender) {
    return props.footerRender(_objectSpread({}, props), /*#__PURE__*/React.createElement(Footer, null));
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


  var clearMenuData = clearMenuItem(menuData || []);

  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && splitMenus) {
    return null;
  }

  if (layout === 'top' && !isMobile) {
    return /*#__PURE__*/React.createElement(SiderMenu, _extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      hide: true
    }));
  }

  if (menuRender) {
    var defaultDom = /*#__PURE__*/React.createElement(SiderMenu, _extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      // 这里走了可以少一次循环
      menuData: clearMenuData
    }));
    return menuRender(props, defaultDom);
  }

  return /*#__PURE__*/React.createElement(SiderMenu, _extends({
    matchMenuKeys: matchMenuKeys
  }, props, {
    // 这里走了可以少一次循环
    menuData: clearMenuData
  }));
};

var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = getPageTitleInfo(pageProps);

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

    warning(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
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
  var context = useContext(_ConfigProvider.ConfigContext);
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

    var locales = getLocales();
    return locales[id] ? locales[id] : defaultMessage;
  };

  var _useMergedState = useMergedState(function () {
    return getMenuData((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      menuInfoData = _useMergedState2[0],
      setMenuInfoData = _useMergedState2[1];

  var _menuInfoData$breadcr = menuInfoData.breadcrumb,
      breadcrumb = _menuInfoData$breadcr === void 0 ? {} : _menuInfoData$breadcr,
      breadcrumbMap = menuInfoData.breadcrumbMap,
      _menuInfoData$menuDat = menuInfoData.menuData,
      menuData = _menuInfoData$menuDat === void 0 ? [] : _menuInfoData$menuDat;
  var matchMenus = useMemo(function () {
    return getMatchMenu(location.pathname || '/', menuData, true);
  }, [location.pathname, menuInfoData]);
  var matchMenuKeys = useMemo(function () {
    return Array.from(new Set(matchMenus.map(function (item) {
      return item.key || item.path || '';
    })));
  }, [matchMenus]); // 当前选中的menu，一般不会为空

  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = useCurrentMenuLayoutProps(currentMenu);

  var _props$currentMenuLay = _objectSpread(_objectSpread({}, props), currentMenuLayoutProps),
      fixSiderbar = _props$currentMenuLay.fixSiderbar,
      navTheme = _props$currentMenuLay.navTheme,
      defaultPropsLayout = _props$currentMenuLay.layout,
      rest = _objectWithoutProperties(_props$currentMenuLay, ["fixSiderbar", "navTheme", "layout"]);

  var propsLayout = compatibleLayout(defaultPropsLayout);
  var colSize = useAntdMediaQuery();
  var isMobile = (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  /** 如果 menuRender 不存在，可以做一下性能优化 只要 routers 没有更新就不需要重新计算 */

  useDeepCompareEffect(function () {
    if (menu === null || menu === void 0 ? void 0 : menu.loading) {
      return function () {
        return null;
      };
    }

    var infoData = getMenuData((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender); // 稍微慢一点 render，不然会造成性能问题，看起来像是菜单的卡顿

    var animationFrameId = requestAnimationFrame(function () {
      setMenuInfoData(infoData);
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    };
  }, [props.route, stringify(menu), (_props$location2 = props.location) === null || _props$location2 === void 0 ? void 0 : _props$location2.pathname]); // If it is a fix menu, calculate padding
  // don't need padding in phone mode

  var hasLeftPadding = propsLayout !== 'top' && !isMobile;

  var _useMergedState3 = useMergedState(function () {
    return defaultCollapsed || false;
  }, {
    value: props.collapsed,
    onChange: propsOnCollapse
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      collapsed = _useMergedState4[0],
      onCollapse = _useMergedState4[1]; // Splicing parameters, adding menuData and formatMessage in props


  var defaultProps = Omit(_objectSpread(_objectSpread(_objectSpread({
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

  var breadcrumbProps = getBreadcrumbProps(_objectSpread(_objectSpread({}, defaultProps), {}, {
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

  var _useContext = useContext(RouteContext),
      contextIsChildrenLayout = _useContext.isChildrenLayout; // 如果 props 中定义，以 props 为准


  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var baseClassName = "".concat(prefixCls, "-basicLayout"); // gen className

  var className = classNames(props.className, 'ant-design-pro', baseClassName, (_classNames = {}, _defineProperty(_classNames, "screen-".concat(colSize), colSize), _defineProperty(_classNames, "".concat(baseClassName, "-top-menu"), propsLayout === 'top'), _defineProperty(_classNames, "".concat(baseClassName, "-is-children"), isChildrenLayout), _defineProperty(_classNames, "".concat(baseClassName, "-fix-siderbar"), fixSiderbar), _defineProperty(_classNames, "".concat(baseClassName, "-").concat(propsLayout), propsLayout), _classNames));
  /** 计算 slider 的宽度 */

  var leftSiderWidth = getPaddingLeft(!!hasLeftPadding, collapsed, siderWidth); // siderMenuDom 为空的时候，不需要 padding

  var genLayoutStyle = {
    position: 'relative'
  }; // if is some layout children, don't need min height

  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  var contentClassName = classNames("".concat(baseClassName, "-content"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(baseClassName, "-has-header"), headerDom), _defineProperty(_classNames2, "".concat(baseClassName, "-content-disable-margin"), disableContentMargin), _classNames2));
  /** 页面切换的时候触发 */

  useEffect(function () {
    var onPageChange = props.onPageChange;

    if (onPageChange) {
      onPageChange(props.location);
    }
  }, [(_props$location3 = props.location) === null || _props$location3 === void 0 ? void 0 : _props$location3.pathname, (_props$location4 = props.location) === null || _props$location4 === void 0 ? void 0 : (_props$location4$path = _props$location4.pathname) === null || _props$location4$path === void 0 ? void 0 : _props$location4$path.search]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasFooterToolbar = _useState2[0],
      setHasFooterToolbar = _useState2[1];

  useDocumentTitle(pageTitleInfo, props.title || defaultSettings.title);
  return /*#__PURE__*/React.createElement(MenuCounter.Provider, null, /*#__PURE__*/React.createElement(RouteContext.Provider, {
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
  }, props.pure ? children : /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(_Layout, {
    style: _objectSpread({
      minHeight: '100%'
    }, style)
  }, siderMenuDom, /*#__PURE__*/React.createElement("div", {
    style: genLayoutStyle,
    className: context.getPrefixCls('layout')
  }, headerDom, /*#__PURE__*/React.createElement(WrapContent, _extends({
    isChildrenLayout: isChildrenLayout
  }, rest, {
    className: contentClassName,
    style: contentStyle
  }), loading ? /*#__PURE__*/React.createElement(PageLoading, null) : children), footerDom)))));
};

BasicLayout.defaultProps = _objectSpread(_objectSpread({
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg'
}, defaultSettings), {}, {
  location: isBrowser() ? window.location : undefined
});
export default BasicLayout;