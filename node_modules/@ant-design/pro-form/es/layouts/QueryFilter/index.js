import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import "antd/es/col/style";
import _Col from "antd/es/col";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

import React, { useMemo } from 'react';
import RcResizeObserver from 'rc-resize-observer';
import { useIntl } from '@ant-design/pro-provider';
import { isBrowser, useMountMergeState } from '@ant-design/pro-utils';
import useMergedState from "rc-util/es/hooks/useMergedState";
import BaseForm from '../../BaseForm';
import Actions from './Actions';
var CONFIG_SPAN_BREAKPOINTS = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 992,
  xl: 1057,
  xxl: Infinity
};
/** 配置表单列变化的容器宽度断点 */

var BREAKPOINTS = {
  vertical: [// [breakpoint, cols, layout]
  [513, 1, 'vertical'], [785, 2, 'vertical'], [1057, 3, 'vertical'], [Infinity, 4, 'vertical']],
  default: [[513, 1, 'vertical'], [701, 2, 'vertical'], [1062, 3, 'horizontal'], [1352, 3, 'horizontal'], [Infinity, 4, 'horizontal']]
};
/**
 * 合并用户和默认的配置
 *
 * @param layout
 * @param width
 */

var getSpanConfig = function getSpanConfig(layout, width, span) {
  if (width === 16) {
    return {
      span: 8,
      layout: 'inline'
    };
  }

  if (span && typeof span === 'number') {
    return {
      span: span,
      layout: layout
    };
  }

  var spanConfig = span ? Object.keys(span).map(function (key) {
    return [CONFIG_SPAN_BREAKPOINTS[key], 24 / span[key], 'horizontal'];
  }) : BREAKPOINTS[layout || 'default'];
  var breakPoint = (spanConfig || BREAKPOINTS.default).find(function (item) {
    return width < item[0] + 16;
  });
  return {
    span: 24 / breakPoint[1],
    layout: breakPoint[2]
  };
};

var flatMapItems = function flatMapItems(items, ignoreRules) {
  return items.flatMap(function (item) {
    var _item$props;

    if ((item === null || item === void 0 ? void 0 : item.type.displayName) === 'ProForm-Group' && !((_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.title)) {
      return item.props.children;
    }

    if (ignoreRules && /*#__PURE__*/React.isValidElement(item)) {
      var _item$props2;

      return /*#__PURE__*/React.cloneElement(item, _objectSpread(_objectSpread({}, item.props), {}, {
        formItemProps: _objectSpread(_objectSpread({}, (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.formItemProps), {}, {
          rules: []
        })
      }));
    }

    return item;
  });
};

var QueryFilterContent = function QueryFilterContent(props) {
  var intl = useIntl();
  var resetText = props.resetText || intl.getMessage('tableForm.reset', '重置');
  var searchText = props.searchText || intl.getMessage('tableForm.search', '搜索');

  var _useMergedState = useMergedState(function () {
    return props.defaultCollapsed && !!props.submitter;
  }, {
    value: props.collapsed,
    onChange: props.onCollapse
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      collapsed = _useMergedState2[0],
      setCollapsed = _useMergedState2[1];

  var optionRender = props.optionRender,
      collapseRender = props.collapseRender,
      split = props.split,
      items = props.items,
      spanSize = props.spanSize,
      showLength = props.showLength;
  var submitter = useMemo(function () {
    if (!props.submitter) {
      return null;
    }

    return /*#__PURE__*/React.cloneElement(props.submitter, _objectSpread({
      searchConfig: {
        resetText: resetText,
        submitText: searchText
      },
      render: optionRender ? function (_, dom) {
        return optionRender(_objectSpread(_objectSpread({}, props), {}, {
          resetText: resetText,
          searchText: searchText
        }), props, dom);
      } : optionRender
    }, props.submitter.props));
  }, [props, resetText, searchText, optionRender]); // totalSpan 统计控件占的位置，计算 offset 保证查询按钮在最后一列

  var totalSpan = submitter ? spanSize.span : 0;
  var itemLength = items.length; // for split compute

  var currentSpan = submitter ? spanSize.span : 0;
  /** 是否需要展示 collapseRender */

  var needCollapseRender = itemLength - 1 >= showLength;
  var doms = flatMapItems(items, props.ignoreRules).map(function (item, index) {
    var _item$props3, _item$props4, _item$props5;

    // 如果 formItem 自己配置了 hidden，默认使用它自己的
    var hidden = (item === null || item === void 0 ? void 0 : (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : _item$props3.hidden) || // 如果收起了
    collapsed && // 如果 超过显示长度 且 总长度超过了 24
    index >= showLength && totalSpan >= 24;
    var colSize = /*#__PURE__*/React.isValidElement(item) ? item === null || item === void 0 ? void 0 : (_item$props4 = item.props) === null || _item$props4 === void 0 ? void 0 : _item$props4.colSize : 1;
    var colSpan = Math.min(spanSize.span * (colSize || 1), 24); // 每一列的key, 一般是存在的

    var itemKey = /*#__PURE__*/React.isValidElement(item) && (item.key || "".concat((_item$props5 = item.props) === null || _item$props5 === void 0 ? void 0 : _item$props5.name)) || index;
    currentSpan += colSpan;

    if ( /*#__PURE__*/React.isValidElement(item) && hidden) {
      if (!props.preserve) {
        return null;
      }

      return /*#__PURE__*/React.cloneElement(item, {
        hidden: true,
        key: itemKey || index
      });
    }

    if (24 - totalSpan % 24 < colSpan) {
      // 如果当前行空余位置放不下，那么折行
      totalSpan += 24 - totalSpan % 24;
    }

    totalSpan += colSpan;
    var colItem = /*#__PURE__*/React.createElement(_Col, {
      key: itemKey,
      span: colSpan
    }, item);

    if (split && currentSpan % 24 === 0 && index < itemLength - 1) {
      return [colItem, /*#__PURE__*/React.createElement(_Col, {
        span: "24",
        key: "line"
      }, /*#__PURE__*/React.createElement(_Divider, {
        style: {
          marginTop: -8,
          marginBottom: 16
        },
        dashed: true
      }))];
    }

    return colItem;
  });
  return /*#__PURE__*/React.createElement(_Row, {
    gutter: 24,
    justify: "start",
    key: "resize-observer-row"
  }, doms, submitter && /*#__PURE__*/React.createElement(_Col, {
    key: "submitter",
    span: spanSize.span,
    offset: 24 - spanSize.span - (totalSpan - spanSize.span) % 24,
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    label: " ",
    colon: false,
    className: "pro-form-query-filter-actions"
  }, /*#__PURE__*/React.createElement(Actions, {
    key: "pro-form-query-filter-actions",
    collapsed: collapsed,
    collapseRender: needCollapseRender && currentSpan > 24 ? collapseRender : false,
    submitter: submitter,
    setCollapsed: setCollapsed
  }))));
};

var defaultWidth = isBrowser() ? 0 : 1024;

function QueryFilter(props) {
  var controlCollapsed = props.collapsed,
      layout = props.layout,
      _props$defaultCollaps = props.defaultCollapsed,
      defaultCollapsed = _props$defaultCollaps === void 0 ? true : _props$defaultCollaps,
      defaultColsNumber = props.defaultColsNumber,
      span = props.span,
      searchText = props.searchText,
      resetText = props.resetText,
      optionRender = props.optionRender,
      collapseRender = props.collapseRender,
      onReset = props.onReset,
      onCollapse = props.onCollapse,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? '80' : _props$labelWidth,
      style = props.style,
      split = props.split,
      _props$preserve = props.preserve,
      preserve = _props$preserve === void 0 ? true : _props$preserve,
      ignoreRules = props.ignoreRules,
      rest = _objectWithoutProperties(props, ["collapsed", "layout", "defaultCollapsed", "defaultColsNumber", "span", "searchText", "resetText", "optionRender", "collapseRender", "onReset", "onCollapse", "labelWidth", "style", "split", "preserve", "ignoreRules"]);

  var _useMountMergeState = useMountMergeState(function () {
    return typeof (style === null || style === void 0 ? void 0 : style.width) === 'number' ? style === null || style === void 0 ? void 0 : style.width : defaultWidth;
  }),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      width = _useMountMergeState2[0],
      setWidth = _useMountMergeState2[1];

  var spanSize = useMemo(function () {
    return getSpanConfig(layout, width + 16, span);
  }, [layout, width, span]);
  var showLength = useMemo(function () {
    if (defaultColsNumber !== undefined) {
      return defaultColsNumber;
    }

    return Math.max(1, 24 / spanSize.span - 1);
  }, [defaultColsNumber, spanSize.span]);
  var labelFlexStyle = useMemo(function () {
    if (labelWidth && spanSize.layout !== 'vertical' && labelWidth !== 'auto') {
      return "0 0 ".concat(labelWidth, "px");
    }

    return undefined;
  }, [spanSize.layout, labelWidth]);
  return /*#__PURE__*/React.createElement(RcResizeObserver, {
    key: "resize-observer",
    onResize: function onResize(offset) {
      if (width !== offset.width) {
        setWidth(offset.width);
      }
    }
  }, /*#__PURE__*/React.createElement(BaseForm, _extends({
    preserve: preserve
  }, rest, {
    onReset: onReset,
    style: style,
    layout: spanSize.layout,
    fieldProps: {
      style: {
        width: '100%'
      }
    },
    formItemProps: {
      labelCol: {
        flex: labelFlexStyle
      }
    },
    groupProps: {
      titleStyle: {
        display: 'inline-block',
        marginRight: 16
      }
    },
    contentRender: function contentRender(items, renderSubmitter, form) {
      return /*#__PURE__*/React.createElement(QueryFilterContent, {
        spanSize: spanSize,
        collapsed: controlCollapsed,
        form: form,
        collapseRender: collapseRender,
        defaultCollapsed: defaultCollapsed,
        onCollapse: onCollapse,
        optionRender: optionRender,
        submitter: renderSubmitter,
        items: items,
        split: split,
        resetText: props.resetText,
        searchText: props.searchText,
        preserve: preserve,
        ignoreRules: ignoreRules,
        showLength: showLength
      });
    }
  })));
}

export default QueryFilter;