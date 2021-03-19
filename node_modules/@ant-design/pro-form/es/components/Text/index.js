function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ProField from '@ant-design/pro-field';
import createField from '../../BaseForm/createField';
var valueType = 'text';
/**
 * 文本组件
 *
 * @param
 */

var ProFormText = createField(function (_ref) {
  var fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    mode: "edit",
    valueType: valueType,
    fieldProps: fieldProps
  }, proFieldProps));
}, {
  valueType: valueType
});
var Password = createField(function (_ref2) {
  var fieldProps = _ref2.fieldProps,
      proFieldProps = _ref2.proFieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    mode: "edit",
    valueType: "password",
    fieldProps: fieldProps
  }, proFieldProps));
}, {
  valueType: valueType
});
var WrappedProFormText = ProFormText;
WrappedProFormText.Password = Password;
export default WrappedProFormText;