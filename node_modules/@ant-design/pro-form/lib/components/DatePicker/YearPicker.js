"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _proField = _interopRequireDefault(require("@ant-design/pro-field"));

var _createField = _interopRequireDefault(require("../../BaseForm/createField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var valueType = 'dateYear';
/**
 * 周选择组件
 *
 * @param
 */

var ProFormDatePickerYear = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var proFieldProps = _ref.proFieldProps,
      fieldProps = _ref.fieldProps;
  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({
    ref: ref,
    text: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value,
    mode: "edit",
    valueType: valueType,
    fieldProps: fieldProps
  }, proFieldProps));
});

var _default = (0, _createField.default)(ProFormDatePickerYear, {
  valueType: valueType,
  customLightMode: true
});

exports.default = _default;