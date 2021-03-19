"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/radio/style");

var _radio = _interopRequireDefault(require("antd/es/radio"));

var _react = _interopRequireDefault(require("react"));

var _proField = _interopRequireDefault(require("@ant-design/pro-field"));

var _createField = _interopRequireDefault(require("../../BaseForm/createField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioGroup = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      options = _ref.options,
      radioType = _ref.radioType,
      layout = _ref.layout,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({
    mode: "edit",
    valueType: radioType === 'button' ? 'radioButton' : 'radio',
    ref: ref,
    fieldProps: _objectSpread({
      options: options,
      layout: layout
    }, fieldProps)
  }, proFieldProps));
});
/**
 * Radio
 *
 * @param
 */


var ProFormRadio = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
      children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement(_radio.default, _extends({}, fieldProps, {
    ref: ref
  }), children);
});

var Group = (0, _createField.default)(RadioGroup, {
  customLightMode: true
}); // @ts-expect-error

var WrappedProFormRadio = (0, _createField.default)(ProFormRadio, {
  valuePropName: 'checked'
});
WrappedProFormRadio.Group = Group;
WrappedProFormRadio.Button = _radio.default.Button;
var _default = WrappedProFormRadio;
exports.default = _default;