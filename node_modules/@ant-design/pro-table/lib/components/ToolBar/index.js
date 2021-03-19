"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _proProvider = require("@ant-design/pro-provider");

var _ListToolBar = _interopRequireDefault(require("../ListToolBar"));

var _ColumnSetting = _interopRequireDefault(require("../ColumnSetting"));

require("./index.less");

var _FullscreenIcon = _interopRequireDefault(require("./FullscreenIcon"));

var _DensityIcon = _interopRequireDefault(require("./DensityIcon"));

var _container = _interopRequireDefault(require("../../container"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getButtonText(_ref) {
  var intl = _ref.intl;
  return {
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: /*#__PURE__*/_react.default.createElement(_icons.ReloadOutlined, null)
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: /*#__PURE__*/_react.default.createElement(_DensityIcon.default, null)
    },
    setting: {
      text: intl.getMessage('tableToolBar.columnSetting', '列设置'),
      icon: /*#__PURE__*/_react.default.createElement(_icons.SettingOutlined, null)
    },
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: /*#__PURE__*/_react.default.createElement(_FullscreenIcon.default, null)
    }
  };
}
/**
 * 渲染默认的 工具栏
 *
 * @param options
 * @param className
 */


function renderDefaultOption(options, defaultOptions, columns) {
  return Object.keys(options).filter(function (item) {
    return item;
  }).map(function (key) {
    var value = options[key];

    if (!value) {
      return null;
    }

    if (key === 'setting') {
      return /*#__PURE__*/_react.default.createElement(_ColumnSetting.default, _extends({}, options[key], {
        columns: columns,
        key: key
      }));
    }

    if (key === 'fullScreen') {
      return /*#__PURE__*/_react.default.createElement("span", {
        key: key,
        onClick: value === true ? defaultOptions[key] : value
      }, /*#__PURE__*/_react.default.createElement(_FullscreenIcon.default, null));
    }

    var optionItem = getButtonText(defaultOptions)[key];

    if (optionItem) {
      return /*#__PURE__*/_react.default.createElement("span", {
        key: key,
        onClick: function onClick() {
          if (value && defaultOptions[key] !== true) {
            if (value !== true) {
              value();
              return;
            }

            defaultOptions[key]();
          }
        }
      }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        title: optionItem.text
      }, optionItem.icon));
    }

    return null;
  }).filter(function (item) {
    return item;
  });
}

function ToolBar(_ref2) {
  var headerTitle = _ref2.headerTitle,
      tooltip = _ref2.tooltip,
      toolBarRender = _ref2.toolBarRender,
      action = _ref2.action,
      propsOptions = _ref2.options,
      selectedRowKeys = _ref2.selectedRowKeys,
      selectedRows = _ref2.selectedRows,
      toolbar = _ref2.toolbar,
      onSearch = _ref2.onSearch,
      columns = _ref2.columns,
      rest = _objectWithoutProperties(_ref2, ["headerTitle", "tooltip", "toolBarRender", "action", "options", "selectedRowKeys", "selectedRows", "toolbar", "onSearch", "columns"]);

  var counter = _container.default.useContainer();

  var intl = (0, _proProvider.useIntl)();
  var optionDom = (0, _react.useMemo)(function () {
    var defaultOptions = {
      reload: function reload() {
        var _action$current;

        return action === null || action === void 0 ? void 0 : (_action$current = action.current) === null || _action$current === void 0 ? void 0 : _action$current.reload();
      },
      density: true,
      setting: true,
      search: false,
      fullScreen: function fullScreen() {
        var _action$current2, _action$current2$full;

        return action === null || action === void 0 ? void 0 : (_action$current2 = action.current) === null || _action$current2 === void 0 ? void 0 : (_action$current2$full = _action$current2.fullScreen) === null || _action$current2$full === void 0 ? void 0 : _action$current2$full.call(_action$current2);
      }
    };

    if (propsOptions === false) {
      return [];
    }

    var options = _objectSpread(_objectSpread({}, defaultOptions), propsOptions || {
      fullScreen: false
    });

    return renderDefaultOption(options, _objectSpread(_objectSpread({}, defaultOptions), {}, {
      intl: intl
    }), columns);
  }, [action, columns, intl, propsOptions]); // 操作列表

  var actions = toolBarRender ? toolBarRender(action === null || action === void 0 ? void 0 : action.current, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows
  }) : [];
  var searchConfig = (0, _react.useMemo)(function () {
    if (!propsOptions) {
      return false;
    }

    if (!propsOptions.search) return false;
    /** 受控的value 和 onChange */

    var defaultSearchConfig = {
      value: counter.keyWords,
      onChange: function onChange(e) {
        return counter.setKeyWords(e.target.value);
      }
    };
    if (propsOptions.search === true) return defaultSearchConfig;
    return _objectSpread(_objectSpread({}, defaultSearchConfig), propsOptions.search);
  }, [counter, propsOptions]);
  (0, _react.useEffect)(function () {
    if (counter.keyWords === undefined) {
      onSearch === null || onSearch === void 0 ? void 0 : onSearch('');
    }
  }, [counter.keyWords, onSearch]);
  return /*#__PURE__*/_react.default.createElement(_ListToolBar.default, _extends({
    title: headerTitle,
    tooltip: tooltip || rest.tip,
    search: searchConfig,
    onSearch: onSearch,
    actions: actions,
    settings: optionDom
  }, toolbar));
}

var _default = ToolBar;
exports.default = _default;