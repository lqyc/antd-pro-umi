function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ProField from '@ant-design/pro-field';
import { dateArrayFormatter } from '@ant-design/pro-utils';
import createField from '../../BaseForm/createField';
var valueType = 'dateRange';
/**
 * 日期区间选择组件
 *
 * @param
 */

var ProFormDatePicker = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    ref: ref,
    text: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value,
    mode: "edit",
    fieldProps: fieldProps,
    valueType: valueType
  }, proFieldProps));
});
export default createField(ProFormDatePicker, {
  valueType: valueType,
  lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
    return dateArrayFormatter(value, 'YYYY-MM-DD');
  }
});