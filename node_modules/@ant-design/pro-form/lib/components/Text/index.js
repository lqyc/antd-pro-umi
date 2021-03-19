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

var valueType = 'text';
/**
 * 文本组件
 *
 * @param
 */

var ProFormText = (0, _createField.default)(function (_ref) {
  var fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({
    mode: "edit",
    valueType: valueType,
    fieldProps: fieldProps
  }, proFieldProps));
}, {
  valueType: valueType
});
var Password = (0, _createField.default)(function (_ref2) {
  var fieldProps = _ref2.fieldProps,
      proFieldProps = _ref2.proFieldProps;
  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({
    mode: "edit",
    valueType: "password",
    fieldProps: fieldProps
  }, proFieldProps));
}, {
  valueType: valueType
});
var WrappedProFormText = ProFormText;
WrappedProFormText.Password = Password;
var _default = WrappedProFormText;
exports.default = _default;