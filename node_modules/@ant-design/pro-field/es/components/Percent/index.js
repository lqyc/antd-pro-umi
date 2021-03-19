import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment, useMemo } from 'react';
import toNumber from 'lodash.tonumber';
import { getColorByRealValue, getSymbolByRealValue, getRealTextWithPrecision } from './util';
/**
 * 百分比组件
 *
 * @param PercentPropInt
 */

var FieldPercent = function FieldPercent(_ref, ref) {
  var text = _ref.text,
      prefix = _ref.prefix,
      precision = _ref.precision,
      showSymbol = _ref.showSymbol,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? '%' : _ref$suffix,
      mode = _ref.mode,
      _ref$showColor = _ref.showColor,
      showColor = _ref$showColor === void 0 ? false : _ref$showColor,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      fieldProps = _ref.fieldProps,
      rest = _objectWithoutProperties(_ref, ["text", "prefix", "precision", "showSymbol", "suffix", "mode", "showColor", "render", "renderFormItem", "fieldProps"]);

  var realValue = useMemo(function () {
    return typeof text === 'string' && text.includes('%') ? toNumber(text.replace('%', '')) : toNumber(text);
  }, [text]);

  if (mode === 'read') {
    /** 颜色有待确定, 根据提供 colors: ['正', '负'] | boolean */
    var style = showColor ? {
      color: getColorByRealValue(realValue)
    } : {};
    var dom = /*#__PURE__*/React.createElement("span", {
      style: style,
      ref: ref
    }, prefix && /*#__PURE__*/React.createElement("span", null, prefix), showSymbol && /*#__PURE__*/React.createElement(Fragment, null, getSymbolByRealValue(realValue), " "), getRealTextWithPrecision(Math.abs(realValue), precision), suffix && suffix);

    if (render) {
      return render(text, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        prefix: prefix,
        precision: precision,
        showSymbol: showSymbol,
        suffix: suffix
      }), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/React.createElement(_InputNumber, _extends({
      ref: ref,
      formatter: function formatter(value) {
        if (value && prefix) {
          return "".concat(prefix, " ").concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        return value;
      },
      parser: function parser(value) {
        return value ? value.replace(new RegExp("\\".concat(prefix, "\\s?|(,*)"), 'g'), '') : '';
      }
    }, fieldProps, rest));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldPercent);