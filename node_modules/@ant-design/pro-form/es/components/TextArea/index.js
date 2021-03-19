function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ProField from '@ant-design/pro-field';
import createField from '../../BaseForm/createField';
/**
 * 文本选择组件
 *
 * @param
 */

var ProFormTextArea = function ProFormTextArea(_ref, ref) {
  var fieldProps = _ref.fieldProps,
      proFieldProps = _ref.proFieldProps;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    text: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value,
    ref: ref,
    mode: "edit",
    valueType: "textarea",
    fieldProps: fieldProps
  }, proFieldProps));
};

export default createField( /*#__PURE__*/React.forwardRef(ProFormTextArea));