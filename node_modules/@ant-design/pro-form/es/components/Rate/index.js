function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ProField from '@ant-design/pro-field';
import createField from '../../BaseForm/createField';
/**
 * 评分组件
 *
 * @param
 */

var ProFormRate = function ProFormRate(_ref, ref) {
  var fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    valueType: "rate",
    mode: "edit",
    fieldProps: fieldProps,
    ref: ref
  }, proFieldProps));
};

export default createField( /*#__PURE__*/React.forwardRef(ProFormRate));