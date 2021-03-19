"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/slider/style");

var _slider = _interopRequireDefault(require("antd/es/slider"));

var _react = _interopRequireDefault(require("react"));

var _createField = _interopRequireDefault(require("../../BaseForm/createField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 文本选择组件
 *
 * @param
 */
var ProFormSlider = function ProFormSlider(_ref, ref) {
  var fieldProps = _ref.fieldProps,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      marks = _ref.marks,
      vertical = _ref.vertical,
      range = _ref.range;
  return /*#__PURE__*/_react.default.createElement(_slider.default, _extends({
    min: min,
    max: max,
    step: step,
    marks: marks,
    vertical: vertical,
    range: range
  }, fieldProps, {
    ref: ref
  }));
};

var _default = (0, _createField.default)( /*#__PURE__*/_react.default.forwardRef(ProFormSlider), {
  lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
    if (Array.isArray(value)) {
      return value.join('~');
    }

    return value;
  }
});

exports.default = _default;