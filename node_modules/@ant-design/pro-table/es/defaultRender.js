import "antd/es/form/style";
import _Form from "antd/es/form";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import ProField from '@ant-design/pro-field';
import { runFunction } from '@ant-design/pro-utils';
import { getFieldPropsOrFormItemProps, InlineErrorFormItem } from '@ant-design/pro-utils';
var SHOW_EMPTY_TEXT_LIST = ['', null, undefined];
/**
 * 拼接用于编辑的 key
 *
 * @param base 基本的 key
 * @param dataIndex 需要拼接的key
 */

export var spellNamePath = function spellNamePath(base, dataIndex) {
  if (Array.isArray(dataIndex)) {
    return [base].concat(_toConsumableArray(dataIndex));
  }

  return [base, dataIndex];
};
/**
 * 根据不同的类型来转化数值
 *
 * @param text
 * @param valueType
 */

function defaultRenderText(config) {
  var _columnProps$dataInde;

  var text = config.text,
      valueType = config.valueType,
      rowData = config.rowData,
      columnProps = config.columnProps; // 如果 valueType === text ，没必要多走一次 render

  if ((!valueType || valueType === 'text') && // valueEnum 存在说明是个select
  !(columnProps === null || columnProps === void 0 ? void 0 : columnProps.valueEnum) && config.mode === 'read') {
    // 如果是''、null、undefined 显示columnEmptyText
    return SHOW_EMPTY_TEXT_LIST.includes(text) ? config.columnEmptyText : text;
  }

  if (typeof valueType === 'function' && rowData) {
    // 防止valueType是函数,并且text是''、null、undefined跳过显式设置的columnEmptyText
    return defaultRenderText(_objectSpread(_objectSpread({}, config), {}, {
      valueType: valueType(rowData, config.type) || 'text'
    }));
  }
  /** 生成公用的 proField dom 配置 */


  var proFieldProps = {
    valueEnum: runFunction(columnProps === null || columnProps === void 0 ? void 0 : columnProps.valueEnum, rowData),
    request: columnProps === null || columnProps === void 0 ? void 0 : columnProps.request,
    params: columnProps === null || columnProps === void 0 ? void 0 : columnProps.params,
    proFieldKey: (columnProps === null || columnProps === void 0 ? void 0 : (_columnProps$dataInde = columnProps.dataIndex) === null || _columnProps$dataInde === void 0 ? void 0 : _columnProps$dataInde.toString()) || (columnProps === null || columnProps === void 0 ? void 0 : columnProps.key),
    text: valueType === 'index' || valueType === 'indexBorder' ? config.index : text,
    mode: config.mode,
    emptyText: config.columnEmptyText,
    renderFormItem: undefined,
    valueType: valueType
  };

  if (config.mode !== 'edit') {
    return /*#__PURE__*/React.createElement(ProField, _extends({
      fieldProps: getFieldPropsOrFormItemProps(columnProps === null || columnProps === void 0 ? void 0 : columnProps.fieldProps, null, columnProps)
    }, proFieldProps));
  } // 如果是编辑模式，需要用 Form.Item 包一下


  return /*#__PURE__*/React.createElement(_Form.Item, {
    shouldUpdate: true,
    noStyle: true
  }, function (form) {
    /** 获取 formItemProps Props */
    var formItemProps = getFieldPropsOrFormItemProps(columnProps === null || columnProps === void 0 ? void 0 : columnProps.formItemProps, form, _objectSpread(_objectSpread({
      rowKey: config.recordKey || config.index,
      rowIndex: config.index
    }, columnProps), {}, {
      isEditable: true
    }));

    var messageVariables = _objectSpread({
      label: (columnProps === null || columnProps === void 0 ? void 0 : columnProps.title) || '此项',
      type: (columnProps === null || columnProps === void 0 ? void 0 : columnProps.valueType) || '文本'
    }, formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.messageVariables);

    var name = spellNamePath(config.recordKey || config.index, (columnProps === null || columnProps === void 0 ? void 0 : columnProps.key) || (columnProps === null || columnProps === void 0 ? void 0 : columnProps.dataIndex) || config.index);
    var inputDom = /*#__PURE__*/React.createElement(InlineErrorFormItem, _extends({
      name: name
    }, formItemProps, {
      messageVariables: messageVariables,
      initialValue: text || (formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.initialValue)
    }), /*#__PURE__*/React.createElement(ProField, _extends({
      fieldProps: getFieldPropsOrFormItemProps(columnProps === null || columnProps === void 0 ? void 0 : columnProps.fieldProps, form, _objectSpread(_objectSpread({}, columnProps), {}, {
        rowKey: config.recordKey || config.index,
        rowIndex: config.index,
        isEditable: true
      }))
    }, proFieldProps)));
    /** RenderFormItem 需要被自定义 */

    if (columnProps === null || columnProps === void 0 ? void 0 : columnProps.renderFormItem) {
      var _columnProps$renderFo;

      var renderDom = (_columnProps$renderFo = columnProps.renderFormItem) === null || _columnProps$renderFo === void 0 ? void 0 : _columnProps$renderFo.call(columnProps, _objectSpread(_objectSpread({}, columnProps), {}, {
        index: config.index,
        isEditable: true,
        type: 'table'
      }), {
        defaultRender: function defaultRender() {
          return inputDom;
        },
        type: 'form',
        recordKey: config.recordKey,
        record: form.getFieldValue([config.recordKey || config.index]),
        isEditable: true
      }, form);
      return /*#__PURE__*/React.createElement(InlineErrorFormItem, _extends({
        name: spellNamePath(config.recordKey || config.index, (columnProps === null || columnProps === void 0 ? void 0 : columnProps.key) || (columnProps === null || columnProps === void 0 ? void 0 : columnProps.dataIndex) || config.index)
      }, formItemProps, {
        initialValue: text || (formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.initialValue),
        messageVariables: messageVariables
      }), renderDom);
    }

    return inputDom;
  });
}

export default defaultRenderText;