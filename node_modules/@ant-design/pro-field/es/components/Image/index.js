import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/image/style";
import _Image from "antd/es/image";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';

/**
 * 数字组件
 *
 * @param FieldImageProps {
 *     text: number;
 *     moneySymbol?: string; }
 */
var FieldImage = function FieldImage(_ref) {
  var text = _ref.text,
      type = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      fieldProps = _ref.fieldProps,
      placeholder = _ref.placeholder,
      width = _ref.width;

  if (type === 'read') {
    var dom = /*#__PURE__*/React.createElement(_Image, {
      width: width || 32,
      src: text
    });

    if (render) {
      return render(text, _objectSpread({
        mode: type
      }, fieldProps), dom);
    }

    return dom;
  }

  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/React.createElement(_Input, _extends({
      placeholder: placeholder
    }, fieldProps));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: type
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};

export default FieldImage;