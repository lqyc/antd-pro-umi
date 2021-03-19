function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import ProField from '@ant-design/pro-field';
import { runFunction } from '@ant-design/pro-utils';
import createField from '../../BaseForm/createField';
/**
 * 最普通的 Text 组件
 *
 * @param
 */

var ProFormField = function ProFormField(_ref) {
  var fieldProps = _ref.fieldProps,
      children = _ref.children,
      labelCol = _ref.labelCol,
      label = _ref.label,
      isDefaultDom = _ref.isDefaultDom,
      render = _ref.render,
      proFieldProps = _ref.proFieldProps,
      renderFormItem = _ref.renderFormItem,
      valueType = _ref.valueType,
      initialValue = _ref.initialValue,
      _onChange = _ref.onChange,
      valueEnum = _ref.valueEnum,
      restProps = _objectWithoutProperties(_ref, ["fieldProps", "children", "labelCol", "label", "isDefaultDom", "render", "proFieldProps", "renderFormItem", "valueType", "initialValue", "onChange", "valueEnum"]);

  // 防止 formItem 的值被吃掉
  if (children) {
    if ( /*#__PURE__*/React.isValidElement(children)) {
      return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, restProps), {}, {
        onChange: function onChange() {
          var _fieldProps$onChange;

          for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
            restParams[_key] = arguments[_key];
          }

          fieldProps === null || fieldProps === void 0 ? void 0 : (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 ? void 0 : _fieldProps$onChange.call.apply(_fieldProps$onChange, [fieldProps].concat(restParams));
          _onChange === null || _onChange === void 0 ? void 0 : _onChange.apply(void 0, restParams);
        }
      }, children.props));
    }

    return children;
  }

  return /*#__PURE__*/React.createElement(ProField, _extends({
    text: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value,
    mode: "edit",
    valueType: valueType || 'text',
    fieldProps: _objectSpread(_objectSpread({}, fieldProps), {}, {
      onChange: function onChange() {
        var _fieldProps$onChange2;

        for (var _len2 = arguments.length, restParams = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          restParams[_key2] = arguments[_key2];
        }

        fieldProps === null || fieldProps === void 0 ? void 0 : (_fieldProps$onChange2 = fieldProps.onChange) === null || _fieldProps$onChange2 === void 0 ? void 0 : _fieldProps$onChange2.call.apply(_fieldProps$onChange2, [fieldProps].concat(restParams));
        _onChange === null || _onChange === void 0 ? void 0 : _onChange.apply(void 0, restParams);
      }
    }),
    valueEnum: runFunction(valueEnum)
  }, proFieldProps, restProps));
};

export default createField(ProFormField);