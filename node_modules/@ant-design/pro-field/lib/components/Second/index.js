"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSecond = formatSecond;
exports.default = void 0;

require("antd/es/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/es/input-number"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 格式化秒
 *
 * @param result
 * @returns {string}
 */
function formatSecond(result) {
  var formatText = '';
  var h = Math.floor(result / 3600);
  var m = Math.floor(result / 60 % 60);
  var s = Math.floor(result % 60);
  formatText = "".concat(s, "\u79D2");

  if (m > 0) {
    formatText = "".concat(m, "\u5206\u949F").concat(formatText);
  }

  if (h > 0) {
    formatText = "".concat(h, "\u5C0F\u65F6").concat(formatText);
  }

  return formatText;
}
/**
 * 格式化秒
 *
 * @param FieldSecond
 */


var Second = function Second(_ref, ref) {
  var text = _ref.text,
      type = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      fieldProps = _ref.fieldProps,
      rest = _objectWithoutProperties(_ref, ["text", "mode", "render", "renderFormItem", "fieldProps"]);

  if (type === 'read') {
    var secondText = formatSecond(Number(text));

    var dom = /*#__PURE__*/_react.default.createElement("span", {
      ref: ref
    }, secondText);

    if (render) {
      return render(text, _objectSpread({
        mode: type
      }, fieldProps), dom);
    }

    return dom;
  }

  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/_react.default.createElement(_inputNumber.default, _extends({
      ref: ref,
      min: 0,
      style: {
        width: '100%'
      }
    }, rest, fieldProps));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: type
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};

var _default = /*#__PURE__*/_react.default.forwardRef(Second);

exports.default = _default;