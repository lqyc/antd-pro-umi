import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";

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

import React from 'react';
import moment from 'moment';
import { parseValueToMoment } from '@ant-design/pro-utils';
import { useIntl } from '@ant-design/pro-provider';
/**
 * 日期范围选择组件
 *
 * @param
 */

var FieldRangePicker = function FieldRangePicker(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      format = _ref.format,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      showTime = _ref.showTime,
      fieldProps = _ref.fieldProps;
  var intl = useIntl();

  var _ref2 = Array.isArray(text) ? text : [],
      _ref3 = _slicedToArray(_ref2, 2),
      startText = _ref3[0],
      endText = _ref3[1]; // activePickerIndex for https://github.com/ant-design/ant-design/issues/22158


  var parsedStartText = startText ? moment(startText).format(format || 'YYYY-MM-DD') : '';
  var parsedEndText = endText ? moment(endText).format(format || 'YYYY-MM-DD') : '';

  if (mode === 'read') {
    var dom = /*#__PURE__*/React.createElement("div", {
      ref: ref
    }, /*#__PURE__*/React.createElement("div", null, parsedStartText || '-'), /*#__PURE__*/React.createElement("div", null, parsedEndText || '-'));

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/React.createElement("span", null, dom));
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var momentValue = parseValueToMoment(fieldProps.value);

    var _dom = /*#__PURE__*/React.createElement(_DatePicker.RangePicker, _extends({
      ref: ref,
      format: format,
      showTime: showTime,
      placeholder: [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')],
      bordered: plain === undefined ? true : !plain
    }, fieldProps, {
      value: momentValue
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

export default /*#__PURE__*/React.forwardRef(FieldRangePicker);