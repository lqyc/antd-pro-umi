function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ProField from '@ant-design/pro-field';
import createField from '../../BaseForm/createField';
var valueType = 'dateWeek';
/**
 * 周选择组件
 *
 * @param
 */

var ProFormDatePickerWeek = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var proFieldProps = _ref.proFieldProps,
      fieldProps = _ref.fieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    ref: ref,
    text: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value,
    mode: "edit",
    valueType: valueType,
    fieldProps: fieldProps
  }, proFieldProps));
});
export default createField(ProFormDatePickerWeek, {
  valueType: valueType,
  customLightMode: true
});