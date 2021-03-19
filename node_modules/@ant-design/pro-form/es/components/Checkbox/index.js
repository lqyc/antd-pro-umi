import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";

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
var CheckboxGroup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var options = _ref.options,
      fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps,
      valueEnum = _ref.valueEnum,
      rest = _objectWithoutProperties(_ref, ["options", "fieldProps", "proFieldProps", "valueEnum"]);

  return /*#__PURE__*/React.createElement(ProField, _extends({
    ref: ref,
    valueType: "checkbox",
    mode: "edit",
    valueEnum: runFunction(valueEnum, undefined)
  }, rest, {
    fieldProps: _objectSpread({
      options: options
    }, fieldProps)
  }, proFieldProps));
});
/**
 * 多选框的
 *
 * @param
 */

var ProFormCheckbox = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement(_Checkbox, _extends({
    ref: ref
  }, fieldProps), children);
});
var Group = createField(CheckboxGroup);
var WrappedProFormCheckbox = createField(ProFormCheckbox, {
  valuePropName: 'checked'
});
WrappedProFormCheckbox.Group = Group;
export default WrappedProFormCheckbox;