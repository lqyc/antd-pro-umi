function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ProField from '@ant-design/pro-field';
import createField from '../../BaseForm/createField';
import { dateArrayFormatter } from '@ant-design/pro-utils';
var valueType = 'time';
/** 时间区间选择器 */

var TimeRangePicker = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    ref: ref,
    text: (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) || '',
    mode: "edit",
    fieldProps: fieldProps,
    valueType: "timeRange"
  }, proFieldProps));
});
/**
 * 时间选择组件
 *
 * @param
 */

var TimePicker = function TimePicker(_ref2) {
  var fieldProps = _ref2.fieldProps,
      proFieldProps = _ref2.proFieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    text: (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) || '',
    mode: "edit",
    fieldProps: fieldProps,
    valueType: valueType
  }, proFieldProps));
};
/** 时间选择器 */


var ProFormTimePicker = createField(TimePicker, {
  customLightMode: true,
  valueType: valueType
});
ProFormTimePicker.RangePicker = createField(TimeRangePicker, {
  valueType: 'timeRange',
  lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
    return dateArrayFormatter(value, 'HH:mm:SS');
  }
});
export default ProFormTimePicker;