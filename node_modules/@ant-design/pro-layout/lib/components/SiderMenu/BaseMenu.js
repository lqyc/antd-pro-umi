"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("./index.less");

var _icons = _interopRequireWildcard(require("@ant-design/icons"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useMergedState5 = _interopRequireDefault(require("rc-util/es/hooks/useMergedState"));

var _proUtils = require("@ant-design/pro-utils");

var _defaultSettings = _interopRequireDefault(require("../../defaultSettings"));

var _utils = require("../../utils/utils");

var _Counter = _interopRequireDefault(require("./Counter"));

var _PageLoading = _interopRequireDefault(require("../PageLoading"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubMenu = _menu.default.SubMenu,
    ItemGroup = _menu.default.ItemGroup;
var IconFont = (0, _icons.createFromIconfontCN)({
  scriptUrl: _defaultSettings.default.iconfontUrl
}); // Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,

var getIcon = function getIcon(icon) {
  var iconPrefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'icon-';

  if (typeof icon === 'string' && icon !== '') {
    if ((0, _proUtils.isUrl)(icon) || (0, _proUtils.isImg)(icon)) {
      return /*#__PURE__*/_react.default.createElement(_icons.default, {
        component: function component() {
          return /*#__PURE__*/_react.default.createElement("img", {
            src: icon,
            alt: "icon",
            className: "ant-pro-sider-menu-icon"
          });
        }
      });
    }

    if (icon.startsWith(iconPrefixes)) {
      return /*#__PURE__*/_react.default.createElement(IconFont, {
        type: icon
      });
    }
  }

  return icon;
};

var MenuUtil = function MenuUtil(props) {
  var _this = this;

  _classCallCheck(this, MenuUtil);

  this.getNavMenuItems = function () {
    var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var isChildren = arguments.length > 1 ? arguments[1] : undefined;
    return menusData.map(function (item) {
      return _this.getSubMenuOrItem(item, isChildren);
    }).filter(function (item) {
      return item;
    });
  };
  /** Get SubMenu or Item */


  this.getSubMenuOrItem = function (item, isChildren) {
    if (Array.isArray(item.children) && item && item.children.length > 0) {
      var name = _this.getIntlName(item);

      var _this$props = _this.props,
          subMenuItemRender = _this$props.subMenuItemRender,
          prefixCls = _this$props.prefixCls,
          menu = _this$props.menu,
          iconPrefixes = _this$props.iconPrefixes; //  get defaultTitle by menuItemRender

      var defaultTitle = item.icon ? /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item"),
        title: name
      }, !isChildren && getIcon(item.icon, iconPrefixes), /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name)) : /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item"),
        title: name
      }, name); // subMenu only title render

      var title = subMenuItemRender ? subMenuItemRender(_objectSpread(_objectSpread({}, item), {}, {
        isUrl: false
      }), defaultTitle) : defaultTitle;
      var MenuComponents = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group' ? ItemGroup : SubMenu;
      return /*#__PURE__*/_react.default.createElement(MenuComponents, {
        title: title,
        key: item.key || item.path,
        onTitleClick: item.onTitleClick
      }, _this.getNavMenuItems(item.children, true));
    }

    return /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      disabled: item.disabled,
      key: item.key || item.path,
      onClick: item.onTitleClick
    }, _this.getMenuItemPath(item, isChildren));
  };

  this.getIntlName = function (item) {
    var name = item.name,
        locale = item.locale;
    var _this$props2 = _this.props,
        menu = _this$props2.menu,
        formatMessage = _this$props2.formatMessage;

    if (locale && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
      return formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
        id: locale,
        defaultMessage: name
      });
    }

    return name;
  };
  /**
   * 判断是否是http链接.返回 Link 或 a Judge whether it is http link.return a or Link
   *
   * @memberof SiderMenu
   */


  this.getMenuItemPath = function (item, isChildren) {
    var itemPath = _this.conversionPath(item.path || '/');

    var _this$props3 = _this.props,
        _this$props3$location = _this$props3.location,
        location = _this$props3$location === void 0 ? {
      pathname: '/'
    } : _this$props3$location,
        isMobile = _this$props3.isMobile,
        onCollapse = _this$props3.onCollapse,
        menuItemRender = _this$props3.menuItemRender,
        iconPrefixes = _this$props3.iconPrefixes; // if local is true formatMessage all name。

    var name = _this.getIntlName(item);

    var prefixCls = _this.props.prefixCls;
    var icon = isChildren ? null : getIcon(item.icon, iconPrefixes);

    var defaultItem = /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-menu-item")
    }, icon, /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-menu-item-title")
    }, name));

    var isHttpUrl = (0, _proUtils.isUrl)(itemPath); // Is it a http link

    if (isHttpUrl) {
      defaultItem = /*#__PURE__*/_react.default.createElement("span", {
        title: name,
        onClick: function onClick() {
          window.open(itemPath);
        },
        className: "".concat(prefixCls, "-menu-item ").concat(prefixCls, "-menu-item-link")
      }, icon, /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name));
    }

    if (menuItemRender) {
      var renderItemProps = _objectSpread(_objectSpread({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath: itemPath,
        isMobile: isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        }
      });

      return menuItemRender(renderItemProps, defaultItem);
    }

    return defaultItem;
  };

  this.conversionPath = function (path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    }

    return "/".concat(path || '').replace(/\/+/g, '/');
  };

  this.props = props;
};
/**
 * 生成openKeys 的对象，因为设置了openKeys 就会变成受控，所以需要一个空对象
 *
 * @param BaseMenuProps
 */


var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
  var layout = _ref.layout,
      collapsed = _ref.collapsed;
  var openKeysProps = {};

  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys: openKeys
    };
  }

  return openKeysProps;
};

var BaseMenu = function BaseMenu(props) {
  var theme = props.theme,
      mode = props.mode,
      className = props.className,
      handleOpenChange = props.handleOpenChange,
      style = props.style,
      menuData = props.menuData,
      menu = props.menu,
      matchMenuKeys = props.matchMenuKeys,
      iconfontUrl = props.iconfontUrl,
      collapsed = props.collapsed,
      propsSelectedKeys = props.selectedKeys,
      onSelect = props.onSelect,
      propsOpenKeys = props.openKeys; // 用于减少 defaultOpenKeys 计算的组件

  var defaultOpenKeysRef = (0, _react.useRef)([]);

  var _MenuCounter$useConta = _Counter.default.useContainer(),
      flatMenuKeys = _MenuCounter$useConta.flatMenuKeys;

  var _useState = (0, _react.useState)(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll),
      _useState2 = _slicedToArray(_useState, 2),
      defaultOpenAll = _useState2[0],
      setDefaultOpenAll = _useState2[1];

  var _useMergedState = (0, _useMergedState5.default)(function () {
    if (menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) {
      return (0, _utils.getOpenKeysFromMenuData)(menuData) || [];
    }

    if (propsOpenKeys === false) {
      return false;
    }

    return [];
  }, {
    value: propsOpenKeys === false ? undefined : propsOpenKeys,
    onChange: handleOpenChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      openKeys = _useMergedState2[0],
      setOpenKeys = _useMergedState2[1];

  var _useMergedState3 = (0, _useMergedState5.default)([], {
    value: propsSelectedKeys,
    onChange: onSelect ? function (keys) {
      if (onSelect && keys) {
        onSelect(keys);
      }
    } : undefined
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      selectedKeys = _useMergedState4[0],
      setSelectedKeys = _useMergedState4[1];

  (0, _react.useEffect)(function () {
    if ((menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) || propsOpenKeys === false || flatMenuKeys.length) {
      return;
    }

    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [matchMenuKeys.join('-')]);
  (0, _react.useEffect)(function () {
    // reset IconFont
    if (iconfontUrl) {
      IconFont = (0, _icons.createFromIconfontCN)({
        scriptUrl: iconfontUrl
      });
    }
  }, [iconfontUrl]);
  (0, _react.useEffect)(function () {
    // if pathname can't match, use the nearest parent's key
    if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) {
      setSelectedKeys(matchMenuKeys);
    }

    if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join('-') !== (openKeys || []).join('-')) {
      var newKeys = matchMenuKeys; // 如果不自动关闭，我需要把 openKeys 放进去

      if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) {
        newKeys = Array.from(new Set([].concat(_toConsumableArray(matchMenuKeys), _toConsumableArray(openKeys || []))));
      }

      setOpenKeys(newKeys);
    } else if (flatMenuKeys.length > 0) setDefaultOpenAll(false); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [matchMenuKeys.join('-'), collapsed]); // eslint-disable-next-line react-hooks/exhaustive-deps

  var openKeysProps = (0, _react.useMemo)(function () {
    return getOpenKeysProps(openKeys, props);
  }, [// eslint-disable-next-line react-hooks/exhaustive-deps
  openKeys && openKeys.join(','), props.layout, props.collapsed]);

  var _useState3 = (0, _react.useState)(function () {
    return new MenuUtil(props);
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      menuUtils = _useState4[0];

  if (menu === null || menu === void 0 ? void 0 : menu.loading) {
    return /*#__PURE__*/_react.default.createElement(_PageLoading.default, null);
  }

  var cls = (0, _classnames.default)(className, {
    'top-nav-menu': mode === 'horizontal'
  }); // sync props

  menuUtils.props = props; // 这次 openKeys === false 的时候的情况，这种情况下帮用户选中一次
  // 第二此不会使用，所以用了 defaultOpenKeys
  // 这里返回 null，是为了让 defaultOpenKeys 生效

  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }

  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;

  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_menu.default, _extends({}, openKeysProps, {
    key: "Menu",
    mode: mode,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: theme,
    selectedKeys: selectedKeys,
    style: style,
    className: cls,
    onOpenChange: setOpenKeys
  }, props.menuProps), menuUtils.getNavMenuItems(finallyData, false));
};

BaseMenu.defaultProps = {
  postMenuData: function postMenuData(data) {
    return data || [];
  }
};
var _default = BaseMenu;
exports.default = _default;