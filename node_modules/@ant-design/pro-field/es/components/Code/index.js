import "antd/es/input/style";
import _Input from "antd/es/input";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';

var languageFormat = function languageFormat(text, language) {
  if (typeof text !== 'string') {
    return text;
  }

  try {
    if (language === 'json') {
      return JSON.stringify(JSON.parse(text), null, 2);
    }
  } catch (error) {// console.log(error)
  }

  return text;
};
/**
 * 代码片段组件 这个组件为了显示简单的配置，复杂的请使用更加重型的组件
 *
 * @param
 */


var FieldCode = function FieldCode(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? 'text' : _ref$language,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      fieldProps = _ref.fieldProps;
  var code = languageFormat(text, language);

  if (mode === 'read') {
    var dom = /*#__PURE__*/React.createElement("pre", _extends({
      ref: ref
    }, fieldProps, {
      style: _objectSpread({
        padding: 16,
        overflow: 'auto',
        fontSize: '85%',
        lineHeight: 1.45,
        backgroundColor: '#f6f8fa',
        borderRadius: 3,
        width: 'min-content'
      }, fieldProps.style)
    }), /*#__PURE__*/React.createElement("code", null, code));

    if (render) {
      return render(code, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        ref: ref
      }), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/React.createElement(_Input.TextArea, _extends({
      rows: 5
    }, fieldProps, {
      ref: ref
    }));

    if (plain) {
      _dom = /*#__PURE__*/React.createElement(_Input, _extends({}, fieldProps, {
        ref: ref
      }));
    }

    if (renderFormItem) {
      return renderFormItem(code, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        ref: ref
      }), _dom);
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldCode);