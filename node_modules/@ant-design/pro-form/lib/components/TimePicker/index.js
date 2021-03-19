"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _proField = _interopRequireDefault(require("@ant-design/pro-field"));

var _createField = _interopRequireDefault(require("../../BaseForm/createField"));

var _proUtils = require("@ant-design/pro-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var valueType = 'time';
/** 时间区间选择器 */

var TimeRangePicker = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({
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
  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({
    text: (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) || '',
    mode: "edit",
    fieldProps: fieldProps,
    valueType: valueType
  }, proFieldProps));
};
/** 时间选择器 */


var ProFormTimePicker = (0, _createField.default)(TimePicker, {
  customLightMode: true,
  valueType: valueType
});
ProFormTimePicker.RangePicker = (0, _createField.default)(TimeRangePicker, {
  valueType: 'timeRange',
  lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
    return (0, _proUtils.dateArrayFormatter)(value, 'HH:mm:SS');
  }
});
var _default = ProFormTimePicker;
exports.default = _default;