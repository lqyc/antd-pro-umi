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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @zh-cn 单选 Switch
 * @en-us Single Choice Switch
 */
var ProFormSwitch = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      unCheckedChildren = _ref.unCheckedChildren,
      checkedChildren = _ref.checkedChildren,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({
    valueType: "switch",
    mode: "edit",
    fieldProps: _objectSpread(_objectSpread({}, fieldProps), {}, {
      unCheckedChildren: unCheckedChildren,
      checkedChildren: checkedChildren
    }),
    text: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checked,
    ref: ref
  }, proFieldProps));
});

var _default = (0, _createField.default)(ProFormSwitch, {
  valuePropName: 'checked'
});

exports.default = _default;