import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/button/style";
import _Button from "antd/es/button";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import omit from 'omit.js';
import { useIntl } from '@ant-design/pro-provider';
/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */

var Submitter = function Submitter(props) {
  var intl = useIntl();

  if (props.render === false) {
    return null;
  }

  var form = props.form,
      onSubmit = props.onSubmit,
      render = props.render,
      onReset = props.onReset,
      _props$searchConfig = props.searchConfig,
      searchConfig = _props$searchConfig === void 0 ? {} : _props$searchConfig,
      submitButtonProps = props.submitButtonProps,
      _props$resetButtonPro = props.resetButtonProps,
      resetButtonProps = _props$resetButtonPro === void 0 ? {} : _props$resetButtonPro;

  var submit = function submit() {
    form.submit();
    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
  };

  var reset = function reset() {
    form.resetFields();
    requestAnimationFrame(function () {
      onReset === null || onReset === void 0 ? void 0 : onReset();
    });
  };

  var _searchConfig$submitT = searchConfig.submitText,
      submitText = _searchConfig$submitT === void 0 ? intl.getMessage('tableForm.submit', '提交') : _searchConfig$submitT,
      _searchConfig$resetTe = searchConfig.resetText,
      resetText = _searchConfig$resetTe === void 0 ? intl.getMessage('tableForm.reset', '重置') : _searchConfig$resetTe;
  /** 默认的操作的逻辑 */

  var dom = [/*#__PURE__*/React.createElement(_Button, _extends({}, omit(resetButtonProps, ['preventDefault']), {
    key: "rest",
    onClick: function onClick(e) {
      var _resetButtonProps$onC;

      if (!(resetButtonProps === null || resetButtonProps === void 0 ? void 0 : resetButtonProps.preventDefault)) reset();
      resetButtonProps === null || resetButtonProps === void 0 ? void 0 : (_resetButtonProps$onC = resetButtonProps.onClick) === null || _resetButtonProps$onC === void 0 ? void 0 : _resetButtonProps$onC.call(resetButtonProps, e);
    }
  }), resetText), /*#__PURE__*/React.createElement(_Button, _extends({
    type: "primary"
  }, omit(submitButtonProps || {}, ['preventDefault']), {
    key: "submit",
    onClick: function onClick(e) {
      var _submitButtonProps$on;

      if (!(submitButtonProps === null || submitButtonProps === void 0 ? void 0 : submitButtonProps.preventDefault)) submit();
      submitButtonProps === null || submitButtonProps === void 0 ? void 0 : (_submitButtonProps$on = submitButtonProps.onClick) === null || _submitButtonProps$on === void 0 ? void 0 : _submitButtonProps$on.call(submitButtonProps, e);
    }
  }), submitText)];
  var renderDom = render ? render(_objectSpread(_objectSpread({}, props), {}, {
    submit: submit,
    reset: reset
  }), dom) : dom;

  if (!renderDom) {
    return null;
  }

  if (Array.isArray(renderDom)) {
    if ((renderDom === null || renderDom === void 0 ? void 0 : renderDom.length) < 1) {
      return null;
    }

    return /*#__PURE__*/React.createElement(_Space, null, renderDom);
  }

  return renderDom;
};

export default Submitter;