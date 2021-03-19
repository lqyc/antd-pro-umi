import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useMemo } from 'react';
import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import ListToolBar from '../ListToolBar';
import ColumnSetting from '../ColumnSetting';
import './index.less';
import FullScreenIcon from './FullscreenIcon';
import DensityIcon from './DensityIcon';
import Container from '../../container';

function getButtonText(_ref) {
  var intl = _ref.intl;
  return {
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: /*#__PURE__*/React.createElement(ReloadOutlined, null)
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: /*#__PURE__*/React.createElement(DensityIcon, null)
    },
    setting: {
      text: intl.getMessage('tableToolBar.columnSetting', '列设置'),
      icon: /*#__PURE__*/React.createElement(SettingOutlined, null)
    },
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: /*#__PURE__*/React.createElement(FullScreenIcon, null)
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
      return /*#__PURE__*/React.createElement(ColumnSetting, _extends({}, options[key], {
        columns: columns,
        key: key
      }));
    }

    if (key === 'fullScreen') {
      return /*#__PURE__*/React.createElement("span", {
        key: key,
        onClick: value === true ? defaultOptions[key] : value
      }, /*#__PURE__*/React.createElement(FullScreenIcon, null));
    }

    var optionItem = getButtonText(defaultOptions)[key];

    if (optionItem) {
      return /*#__PURE__*/React.createElement("span", {
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
      }, /*#__PURE__*/React.createElement(_Tooltip, {
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

  var counter = Container.useContainer();
  var intl = useIntl();
  var optionDom = useMemo(function () {
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
  var searchConfig = useMemo(function () {
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
  useEffect(function () {
    if (counter.keyWords === undefined) {
      onSearch === null || onSearch === void 0 ? void 0 : onSearch('');
    }
  }, [counter.keyWords, onSearch]);
  return /*#__PURE__*/React.createElement(ListToolBar, _extends({
    title: headerTitle,
    tooltip: tooltip || rest.tip,
    search: searchConfig,
    onSearch: onSearch,
    actions: actions,
    settings: optionDom
  }, toolbar));
}

export default ToolBar;