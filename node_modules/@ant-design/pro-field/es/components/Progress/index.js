import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import "antd/es/progress/style";
import _Progress from "antd/es/progress";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import toNumber from 'lodash.tonumber';
import React, { useMemo } from 'react';
export function getProgressStatus(text) {
  if (typeof text !== 'number') {
    return 'exception';
  }

  if (text === 100) {
    return 'success';
  }

  if (text < 0) {
    return 'exception';
  }

  if (text < 100) {
    return 'active';
  }

  return 'normal';
}
/**
 * 进度条组件
 *
 * @param
 */

var FieldProgress = function FieldProgress(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      plain = _ref.plain,
      renderFormItem = _ref.renderFormItem,
      fieldProps = _ref.fieldProps,
      rest = _objectWithoutProperties(_ref, ["text", "mode", "render", "plain", "renderFormItem", "fieldProps"]);

  var realValue = useMemo(function () {
    return typeof text === 'string' && text.includes('%') ? toNumber(text.replace('%', '')) : toNumber(text);
  }, [text]);

  if (mode === 'read') {
    var dom = /*#__PURE__*/React.createElement(_Progress, _extends({
      ref: ref,
      size: "small",
      style: {
        minWidth: 100,
        maxWidth: 320
      },
      percent: realValue,
      steps: plain ? 10 : undefined,
      status: getProgressStatus(realValue)
    }, fieldProps));

    if (render) {
      return render(realValue, _objectSpread({
        mode: mode
      }, fieldProps), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/React.createElement(_InputNumber, _extends({
      ref: ref
    }, rest, fieldProps));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldProgress);