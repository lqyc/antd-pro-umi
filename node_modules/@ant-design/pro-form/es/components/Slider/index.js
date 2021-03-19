import "antd/es/slider/style";
import _Slider from "antd/es/slider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import createField from '../../BaseForm/createField';
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
  return /*#__PURE__*/React.createElement(_Slider, _extends({
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

export default createField( /*#__PURE__*/React.forwardRef(ProFormSlider), {
  lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
    if (Array.isArray(value)) {
      return value.join('~');
    }

    return value;
  }
});