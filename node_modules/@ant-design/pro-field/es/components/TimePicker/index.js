import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
import "antd/es/time-picker/style";
import _TimePicker from "antd/es/time-picker";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useContext } from 'react';
import moment from 'moment';
import { FieldLabel, parseValueToMoment } from '@ant-design/pro-utils';
/**
 * 日期选择组件
 *
 * @param
 */

var FieldTimePicker = function FieldTimePicker(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      light = _ref.light,
      label = _ref.label,
      format = _ref.format,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      fieldProps = _ref.fieldProps;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var size = useContext(_ConfigProvider.SizeContext);

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-field-date-picker');

  if (mode === 'read') {
    var dom = /*#__PURE__*/React.createElement("span", {
      ref: ref
    }, text ? moment(text).format(format || 'HH:mm:ss') : '-');

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/React.createElement("span", null, dom));
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom;

    var disabled = fieldProps.disabled,
        _onChange = fieldProps.onChange,
        placeholder = fieldProps.placeholder,
        allowClear = fieldProps.allowClear,
        value = fieldProps.value;
    var momentValue = parseValueToMoment(value);

    if (light) {
      var valueStr = momentValue && momentValue.format(format || 'HH:mm:ss') || '';
      _dom = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-light"),
        onClick: function onClick() {
          setOpen(true);
        }
      }, /*#__PURE__*/React.createElement(_TimePicker, _extends({
        value: momentValue,
        format: format,
        ref: ref
      }, fieldProps, {
        onChange: function onChange(v) {
          if (_onChange) {
            _onChange(v);
          }

          setTimeout(function () {
            setOpen(false);
          }, 0);
        },
        onOpenChange: setOpen,
        open: open
      })), /*#__PURE__*/React.createElement(FieldLabel, {
        label: label,
        disabled: disabled,
        placeholder: placeholder,
        size: size,
        value: valueStr,
        allowClear: allowClear,
        onClear: function onClear() {
          if (_onChange) {
            _onChange(null);
          }
        },
        expanded: open
      }));
    } else {
      _dom = /*#__PURE__*/React.createElement(_DatePicker.TimePicker, _extends({
        ref: ref,
        format: format,
        bordered: plain === undefined ? true : !plain
      }, fieldProps, {
        value: momentValue
      }));
    }

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};
/**
 * 时间区间选择
 *
 * @param param0
 * @param ref
 */


var FieldTimeRangePicker = function FieldTimeRangePicker(_ref2) {
  var text = _ref2.text,
      mode = _ref2.mode,
      format = _ref2.format,
      render = _ref2.render,
      renderFormItem = _ref2.renderFormItem,
      plain = _ref2.plain,
      fieldProps = _ref2.fieldProps;

  var _ref3 = Array.isArray(text) ? text : [],
      _ref4 = _slicedToArray(_ref3, 2),
      startText = _ref4[0],
      endText = _ref4[1];

  var parsedStartText = startText ? moment(startText).format(format || 'YYYY-MM-DD') : '';
  var parsedEndText = endText ? moment(endText).format(format || 'YYYY-MM-DD') : '';

  if (mode === 'read') {
    var dom = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, parsedStartText || '-'), /*#__PURE__*/React.createElement("div", null, parsedEndText || '-'));

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/React.createElement("span", null, dom));
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var value = fieldProps.value;
    var momentValue = parseValueToMoment(value);

    var _dom2 = /*#__PURE__*/React.createElement(_TimePicker.RangePicker, _extends({
      format: format,
      bordered: plain === undefined ? true : !plain
    }, fieldProps, {
      value: momentValue
    }));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom2);
    }

    return _dom2;
  }

  return null;
};

export { FieldTimeRangePicker };
export default /*#__PURE__*/React.forwardRef(FieldTimePicker);