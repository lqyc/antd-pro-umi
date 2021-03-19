import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/typography/style";
import _Typography from "antd/es/typography";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React from 'react';
import { runFunction } from '@ant-design/pro-utils';
import { isNil, LabelIconTip, omitBoolean, omitUndefinedAndEmptyArr } from '@ant-design/pro-utils';
import { proFieldParsingValueEnumToArray } from '@ant-design/pro-field';
import get from "rc-util/es/utils/get";
import defaultRenderText from './defaultRender';
/**
 * 检查值是否存在 为了 避开 0 和 false
 *
 * @param value
 */

export var checkUndefinedOrNull = function checkUndefinedOrNull(value) {
  return value !== undefined && value !== null;
};
/**
 * 根据 key 和 dataIndex 生成唯一 id
 *
 * @param key 用户设置的 key
 * @param dataIndex 在对象中的数据
 * @param index 序列号，理论上唯一
 */

export var genColumnKey = function genColumnKey(key, index) {
  if (key) {
    return Array.isArray(key) ? key.join('-') : key.toString();
  }

  return "".concat(index);
};
/**
 * 生成 Copyable 或 Ellipsis 的 dom
 *
 * @param dom
 * @param item
 * @param text
 */

export var genCopyable = function genCopyable(dom, item, text) {
  if (item.copyable || item.ellipsis) {
    return /*#__PURE__*/React.createElement(_Typography.Text, {
      style: {
        maxWidth: '100%',
        margin: 0,
        padding: 0
      },
      title: "",
      copyable: item.copyable && text ? {
        text: text,
        tooltips: ['', '']
      } : undefined,
      ellipsis: item.ellipsis && text ? {
        tooltip: text
      } : false
    }, dom);
  }

  return dom;
};
/**
 * 合并用户 props 和 预设的 props
 *
 * @param pagination
 * @param action
 * @param intl
 */

export function mergePagination() {
  var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pageInfo = arguments.length > 1 ? arguments[1] : undefined;
  var intl = arguments.length > 2 ? arguments[2] : undefined;

  if (pagination === false) {
    return false;
  }

  var total = pageInfo.total,
      current = pageInfo.current,
      pageSize = pageInfo.pageSize,
      setPageInfo = pageInfo.setPageInfo;
  var defaultPagination = _typeof(pagination) === 'object' ? pagination : {};
  return _objectSpread(_objectSpread({
    showTotal: function showTotal(all, range) {
      return "".concat(intl.getMessage('pagination.total.range', '第'), " ").concat(range[0], "-").concat(range[1], " ").concat(intl.getMessage('pagination.total.total', '条/总共'), " ").concat(all, " ").concat(intl.getMessage('pagination.total.item', '条'));
    },
    showSizeChanger: true,
    total: total
  }, defaultPagination), {}, {
    current: current,
    pageSize: pageSize,
    onChange: function onChange(page, newPageSize) {
      var onChange = pagination.onChange;
      onChange === null || onChange === void 0 ? void 0 : onChange(page, newPageSize || 20); // pageSize 改变之后就没必要切换页码

      if (newPageSize !== pageSize || current !== page) {
        setPageInfo({
          pageSize: newPageSize,
          current: page
        });
      }
    }
  });
}
/**
 * 获取用户的 action 信息
 *
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */

export function useActionType(ref, action, props) {
  /** 这里生成action的映射，保证 action 总是使用的最新 只需要渲染一次即可 */
  var userAction = _objectSpread(_objectSpread({}, props.editableUtils), {}, {
    pageInfo: action.pageInfo,
    reload: function () {
      var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resetPageIndex) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!resetPageIndex) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return props.onCleanSelected();

              case 3:
                action === null || action === void 0 ? void 0 : action.reload();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function reload(_x) {
        return _reload.apply(this, arguments);
      }

      return reload;
    }(),
    reloadAndRest: function () {
      var _reloadAndRest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // reload 之后大概率会切换数据，清空一下选择。
                props.onCleanSelected();
                _context2.next = 3;
                return action.setPageInfo({
                  current: 1
                });

              case 3:
                _context2.next = 5;
                return action === null || action === void 0 ? void 0 : action.reload();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function reloadAndRest() {
        return _reloadAndRest.apply(this, arguments);
      }

      return reloadAndRest;
    }(),
    reset: function () {
      var _reset = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _action$reset;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return props.resetAll();

              case 2:
                _context3.next = 4;
                return action === null || action === void 0 ? void 0 : (_action$reset = action.reset) === null || _action$reset === void 0 ? void 0 : _action$reset.call(action);

              case 4:
                _context3.next = 6;
                return action === null || action === void 0 ? void 0 : action.reload();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function reset() {
        return _reset.apply(this, arguments);
      }

      return reset;
    }(),
    fullScreen: function fullScreen() {
      return props.fullScreen();
    },
    clearSelected: function clearSelected() {
      return props.onCleanSelected();
    }
  }); // eslint-disable-next-line no-param-reassign


  ref.current = userAction;
}
/**
 * 一个转化的 pipeline 列表
 *
 * @param data
 * @param pipeline
 */

export function postDataPipeline(data, pipeline) {
  if (pipeline.filter(function (item) {
    return item;
  }).length < 1) {
    return data;
  }

  return pipeline.reduce(function (pre, postData) {
    return postData(pre);
  }, data);
}
export var tableColumnSort = function tableColumnSort(columnsMap) {
  return function (a, b) {
    var _columnsMap$aKey, _columnsMap$bKey;

    var aFixed = a.fixed,
        aIndex = a.index;
    var bFixed = b.fixed,
        bIndex = b.index;

    if (aFixed === 'left' && bFixed !== 'left' || bFixed === 'right' && aFixed !== 'right') {
      return -2;
    }

    if (bFixed === 'left' && aFixed !== 'left' || aFixed === 'right' && bFixed !== 'right') {
      return 2;
    } // 如果没有index，在 dataIndex 或者 key 不存在的时候他会报错


    var aKey = a.key || "".concat(aIndex);
    var bKey = b.key || "".concat(bIndex);

    if (((_columnsMap$aKey = columnsMap[aKey]) === null || _columnsMap$aKey === void 0 ? void 0 : _columnsMap$aKey.order) || ((_columnsMap$bKey = columnsMap[bKey]) === null || _columnsMap$bKey === void 0 ? void 0 : _columnsMap$bKey.order)) {
      var _columnsMap$aKey2, _columnsMap$bKey2;

      return (((_columnsMap$aKey2 = columnsMap[aKey]) === null || _columnsMap$aKey2 === void 0 ? void 0 : _columnsMap$aKey2.order) || 0) - (((_columnsMap$bKey2 = columnsMap[bKey]) === null || _columnsMap$bKey2 === void 0 ? void 0 : _columnsMap$bKey2.order) || 0);
    }

    return (a.index || 0) - (b.index || 0);
  };
};
/**
 * 增加了 icon 的功能 render title
 *
 * @param item
 */

export var renderColumnsTitle = function renderColumnsTitle(item) {
  var title = item.title;

  if (title && typeof title === 'function') {
    return title(item, 'table', /*#__PURE__*/React.createElement(LabelIconTip, {
      label: title,
      tooltip: item.tooltip || item.tip
    }));
  }

  return /*#__PURE__*/React.createElement(LabelIconTip, {
    label: title,
    tooltip: item.tooltip || item.tip
  });
};
export var defaultOnFilter = function defaultOnFilter(value, record, dataIndex) {
  var recordElement = Array.isArray(dataIndex) ? get(record, dataIndex) : record[dataIndex];
  var itemValue = String(recordElement);
  return String(itemValue) === String(value);
};

var isMergeCell = function isMergeCell(dom) {
  var _dom$props;

  return dom && _typeof(dom) === 'object' && (dom === null || dom === void 0 ? void 0 : (_dom$props = dom.props) === null || _dom$props === void 0 ? void 0 : _dom$props.colSpan);
};
/** 判断可不可编辑 */


function isEditableCell(text, rowData, index, editable) {
  if (typeof editable === 'boolean') {
    return editable === false;
  }

  return (editable === null || editable === void 0 ? void 0 : editable(text, rowData, index)) === false;
}
/**
 * 这个组件负责单元格的具体渲染
 *
 * @param param0
 */


export function columnRender(_ref) {
  var columnProps = _ref.columnProps,
      text = _ref.text,
      rowData = _ref.rowData,
      index = _ref.index,
      columnEmptyText = _ref.columnEmptyText,
      counter = _ref.counter,
      type = _ref.type,
      editableUtils = _ref.editableUtils;
  var action = counter.action;

  var _editableUtils$isEdit = editableUtils.isEditable(_objectSpread(_objectSpread({}, rowData), {}, {
    index: index
  })),
      isEditable = _editableUtils$isEdit.isEditable,
      recordKey = _editableUtils$isEdit.recordKey;

  var _columnProps$renderTe = columnProps.renderText,
      renderText = _columnProps$renderTe === void 0 ? function (val) {
    return val;
  } : _columnProps$renderTe;
  var renderTextStr = renderText(text, rowData, index, action.current);
  var mode = isEditable && !isEditableCell(text, rowData, index, columnProps === null || columnProps === void 0 ? void 0 : columnProps.editable) ? 'edit' : 'read';
  var textDom = defaultRenderText({
    text: renderTextStr,
    valueType: columnProps.valueType || 'text',
    index: index,
    rowData: rowData,
    columnProps: columnProps,
    columnEmptyText: columnEmptyText,
    type: type,
    recordKey: recordKey,
    mode: mode
  });
  var dom = mode === 'edit' ? textDom : genCopyable(textDom, columnProps, renderTextStr);
  /** 如果是编辑模式，并且 renderFormItem 存在直接走 renderFormItem */

  if (mode === 'edit') {
    if (columnProps.valueType === 'option') {
      return /*#__PURE__*/React.createElement(_Form.Item, {
        shouldUpdate: true,
        noStyle: true
      }, function (form) {
        return /*#__PURE__*/React.createElement(_Space, {
          size: 16
        }, editableUtils.actionRender(_objectSpread(_objectSpread({}, rowData), {}, {
          index: columnProps.index || index
        }), form));
      });
    }

    return dom;
  }

  if (columnProps.render) {
    var renderDom = columnProps.render(dom, rowData, index, _objectSpread(_objectSpread({}, action.current), editableUtils), _objectSpread(_objectSpread({}, columnProps), {}, {
      isEditable: isEditable,
      type: 'table'
    })); // 如果是合并单元格的，直接返回对象

    if (isMergeCell(renderDom)) {
      return renderDom;
    }

    if (renderDom && columnProps.valueType === 'option' && Array.isArray(renderDom)) {
      return /*#__PURE__*/React.createElement(_Space, {
        size: 16
      }, renderDom);
    }

    return renderDom;
  }

  return !isNil(dom) ? dom : null;
}
/**
 * 转化 columns 到 pro 的格式 主要是 render 方法的自行实现
 *
 * @param columns
 * @param map
 * @param columnEmptyText
 */

export function genColumnList(props) {
  var columns = props.columns,
      map = props.map,
      counter = props.counter,
      columnEmptyText = props.columnEmptyText,
      type = props.type,
      editableUtils = props.editableUtils;
  return columns.map(function (columnProps, columnsIndex) {
    var key = columnProps.key,
        dataIndex = columnProps.dataIndex,
        valueEnum = columnProps.valueEnum,
        valueType = columnProps.valueType,
        children = columnProps.children,
        onFilter = columnProps.onFilter,
        _columnProps$filters = columnProps.filters,
        filters = _columnProps$filters === void 0 ? [] : _columnProps$filters;
    var columnKey = genColumnKey(key, columnsIndex); // 这些都没有，说明是普通的表格不需要 pro 管理

    var noNeedPro = !dataIndex && !valueEnum && !valueType && !children;

    if (noNeedPro) {
      return _objectSpread({
        index: columnsIndex
      }, columnProps);
    }

    var propsRef = counter.propsRef;
    var config = map[columnKey] || {
      fixed: columnProps.fixed
    };

    var genOnFilter = function genOnFilter() {
      var _propsRef$current;

      if (!((_propsRef$current = propsRef.current) === null || _propsRef$current === void 0 ? void 0 : _propsRef$current.request) || onFilter === true) {
        return function (value, row) {
          return defaultOnFilter(value, row, dataIndex);
        };
      }

      return omitBoolean(onFilter);
    };

    var tempColumns = _objectSpread(_objectSpread({
      index: columnsIndex
    }, columnProps), {}, {
      title: renderColumnsTitle(columnProps),
      valueEnum: valueEnum,
      filters: filters === true ? proFieldParsingValueEnumToArray(runFunction(valueEnum, undefined)).filter(function (valueItem) {
        return valueItem && valueItem.value !== 'all';
      }) : filters,
      onFilter: genOnFilter(),
      ellipsis: false,
      fixed: config.fixed,
      width: columnProps.width || (columnProps.fixed ? 200 : undefined),
      children: columnProps.children ? genColumnList(_objectSpread(_objectSpread({}, props), {}, {
        columns: columnProps === null || columnProps === void 0 ? void 0 : columnProps.children
      })) : undefined,
      render: function render(text, rowData, index) {
        var renderProps = {
          columnProps: columnProps,
          text: text,
          rowData: rowData,
          index: index,
          columnEmptyText: columnEmptyText,
          counter: counter,
          type: type,
          editableUtils: editableUtils
        };
        return columnRender(renderProps);
      }
    });

    return omitUndefinedAndEmptyArr(tempColumns);
  }).filter(function (item) {
    return !item.hideInTable;
  });
}