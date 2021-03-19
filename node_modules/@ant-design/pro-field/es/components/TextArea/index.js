import "antd/es/input/style";
import _Input from "antd/es/input";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { useIntl } from '@ant-design/pro-provider';
/**
 * 最基本的组件，就是个普通的 Input.TextArea
 *
 * @param
 */

var FieldTextArea = function FieldTextArea(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      fieldProps = _ref.fieldProps;
  var intl = useIntl();

  if (mode === 'read') {
    var dom = /*#__PURE__*/React.createElement("span", {
      ref: ref
    }, text || '-');

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/React.createElement(_Input.TextArea, _extends({
      rows: 3,
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter') e.stopPropagation();
      },
      placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
      ref: ref
    }, fieldProps));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldTextArea);