import "antd/es/switch/style";
import _Switch from "antd/es/switch";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import Omit from 'omit.js';
/**
 * 评分组件
 *
 * @param
 */

var FieldSwitch = function FieldSwitch(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      fieldProps = _ref.fieldProps;

  if (mode === 'read') {
    var dom = text ? fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checkedChildren : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.unCheckedChildren;

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/React.createElement(React.Fragment, null, dom));
    }

    return dom || '-';
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/React.createElement(_Switch, _extends({
      ref: ref
    }, Omit(fieldProps, ['value']), {
      checked: (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checked) || (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value)
    }));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldSwitch);