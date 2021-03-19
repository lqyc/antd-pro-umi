import "antd/es/avatar/style";
import _Avatar from "antd/es/avatar";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import { pickProProps, omitUndefined } from '@ant-design/pro-utils';
import ConfigContext, { useIntl } from '@ant-design/pro-provider';
import FieldPercent from './components/Percent';
import FieldIndexColumn from './components/IndexColumn';
import FieldProgress from './components/Progress';
import FieldMoney from './components/Money';
import FieldDatePicker from './components/DatePicker';
import FieldFromNow from './components/FromNow';
import FieldRangePicker from './components/RangePicker';
import FieldCode from './components/Code';
import FieldTimePicker, { FieldTimeRangePicker } from './components/TimePicker';
import FieldText from './components/Text';
import FieldTextArea from './components/TextArea';
import FieldPassword from './components/Password';
import FieldStatus from './components/Status';
import FieldOptions from './components/Options';
import FieldSelect, { proFieldParsingText, proFieldParsingValueEnumToArray } from './components/Select';
import FieldCheckbox from './components/Checkbox';
import FieldRate from './components/Rate';
import FieldSwitch from './components/Switch';
import FieldDigit from './components/Digit';
import FieldSecond from './components/Second';
import FieldRadio from './components/Radio';
import FieldImage from './components/Image';
/**
 * Render valueType object
 *
 * @param text String | number
 * @param valueType ProColumnsValueObjectType
 */

var defaultRenderTextByObject = function defaultRenderTextByObject(text, valueType, props) {
  var pickFormItemProps = pickProProps(props.fieldProps);

  if (valueType.type === 'progress') {
    return /*#__PURE__*/React.createElement(FieldProgress, _extends({}, props, {
      text: text,
      fieldProps: _objectSpread({
        status: valueType.status ? valueType.status : undefined
      }, pickFormItemProps)
    }));
  }

  if (valueType.type === 'money') {
    return /*#__PURE__*/React.createElement(FieldMoney, _extends({
      locale: valueType.locale
    }, props, {
      fieldProps: pickFormItemProps,
      text: text,
      moneySymbol: valueType.moneySymbol
    }));
  }

  if (valueType.type === 'percent') {
    return /*#__PURE__*/React.createElement(FieldPercent, _extends({}, props, {
      text: text,
      showSymbol: valueType.showSymbol,
      precision: valueType.precision,
      fieldProps: pickFormItemProps,
      showColor: valueType.showColor
    }));
  }

  if (valueType.type === 'image') {
    return /*#__PURE__*/React.createElement(FieldImage, _extends({}, props, {
      text: text,
      width: valueType.width
    }));
  }

  return text;
};
/**
 * 根据不同的类型来转化数值
 *
 * @param text
 * @param valueType
 */


var defaultRenderText = function defaultRenderText(text, valueType, props, valueTypeMap) {
  if (_typeof(valueType) === 'object') {
    return defaultRenderTextByObject(text, valueType, props);
  }

  var _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'read' : _props$mode,
      _props$emptyText = props.emptyText,
      emptyText = _props$emptyText === void 0 ? '-' : _props$emptyText;
  var customValueTypeConfig = valueTypeMap && valueTypeMap[valueType];

  if (customValueTypeConfig) {
    // eslint-disable-next-line no-param-reassign
    delete props.ref;

    if (mode === 'read') {
      var _customValueTypeConfi;

      return (_customValueTypeConfi = customValueTypeConfig.render) === null || _customValueTypeConfi === void 0 ? void 0 : _customValueTypeConfi.call(customValueTypeConfig, text, _objectSpread(_objectSpread({
        text: text
      }, props), {}, {
        mode: mode || 'read'
      }), /*#__PURE__*/React.createElement(React.Fragment, null, text));
    }

    if (mode === 'update' || mode === 'edit') {
      var _customValueTypeConfi2;

      return (_customValueTypeConfi2 = customValueTypeConfig.renderFormItem) === null || _customValueTypeConfi2 === void 0 ? void 0 : _customValueTypeConfi2.call(customValueTypeConfig, text, _objectSpread({
        text: text
      }, props), /*#__PURE__*/React.createElement(React.Fragment, null, text));
    }
  }

  if (emptyText !== false && mode === 'read' && valueType !== 'option' && valueType !== 'switch') {
    if (typeof text !== 'boolean' && typeof text !== 'number' && !text) {
      var fieldProps = props.fieldProps,
          render = props.render;

      if (render) {
        return render(text, _objectSpread({
          mode: mode
        }, fieldProps), /*#__PURE__*/React.createElement(React.Fragment, null, emptyText));
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, emptyText);
    }
  } // eslint-disable-next-line no-param-reassign


  delete props.emptyText;
  /** 如果是金额的值 */

  if (valueType === 'money') {
    return /*#__PURE__*/React.createElement(FieldMoney, _extends({}, props, {
      text: text
    }));
  }
  /** 如果是日期的值 */


  if (valueType === 'date') {
    return /*#__PURE__*/React.createElement(FieldDatePicker, _extends({
      text: text,
      format: "YYYY-MM-DD"
    }, props));
  }
  /** 如果是周的值 */


  if (valueType === 'dateWeek') {
    return /*#__PURE__*/React.createElement(FieldDatePicker, _extends({
      text: text,
      format: "YYYY-wo",
      picker: "week"
    }, props));
  }
  /** 如果是月的值 */


  if (valueType === 'dateMonth') {
    return /*#__PURE__*/React.createElement(FieldDatePicker, _extends({
      text: text,
      format: "YYYY-MM",
      picker: "month"
    }, props));
  }
  /** 如果是季度的值 */


  if (valueType === 'dateQuarter') {
    return /*#__PURE__*/React.createElement(FieldDatePicker, _extends({
      text: text,
      format: "YYYY-\\QQ",
      picker: "quarter"
    }, props));
  }
  /** 如果是年的值 */


  if (valueType === 'dateYear') {
    return /*#__PURE__*/React.createElement(FieldDatePicker, _extends({
      text: text,
      format: "YYYY",
      picker: "year"
    }, props));
  }
  /** 如果是日期范围的值 */


  if (valueType === 'dateRange') {
    return /*#__PURE__*/React.createElement(FieldRangePicker, _extends({
      text: text,
      format: "YYYY-MM-DD"
    }, props));
  }
  /** 如果是日期加时间类型的值 */


  if (valueType === 'dateTime') {
    return /*#__PURE__*/React.createElement(FieldDatePicker, _extends({
      text: text,
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: true
    }, props));
  }
  /** 如果是日期加时间类型的值的值 */


  if (valueType === 'dateTimeRange') {
    // 值不存在的时候显示 "-"
    return /*#__PURE__*/React.createElement(FieldRangePicker, _extends({
      text: text,
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: true
    }, props));
  }
  /** 如果是时间类型的值 */


  if (valueType === 'time') {
    return /*#__PURE__*/React.createElement(FieldTimePicker, _extends({
      text: text,
      format: "HH:mm:ss"
    }, props));
  }
  /** 如果是时间类型的值 */


  if (valueType === 'timeRange') {
    return /*#__PURE__*/React.createElement(FieldTimeRangePicker, _extends({
      text: text,
      format: "HH:mm:ss"
    }, props));
  }

  if (valueType === 'fromNow') {
    return /*#__PURE__*/React.createElement(FieldFromNow, _extends({
      text: text
    }, props));
  }

  if (valueType === 'index') {
    return /*#__PURE__*/React.createElement(FieldIndexColumn, null, text + 1);
  }

  if (valueType === 'indexBorder') {
    return /*#__PURE__*/React.createElement(FieldIndexColumn, {
      border: true
    }, text + 1);
  }

  if (valueType === 'progress') {
    return /*#__PURE__*/React.createElement(FieldProgress, _extends({}, props, {
      text: text
    }));
  }
  /** 百分比, 默认展示符号, 不展示小数位 */


  if (valueType === 'percent') {
    return /*#__PURE__*/React.createElement(FieldPercent, _extends({
      text: text
    }, props));
  }

  if (valueType === 'avatar' && typeof text === 'string' && props.mode === 'read') {
    return /*#__PURE__*/React.createElement(_Avatar, {
      src: text,
      size: 22,
      shape: "circle"
    });
  }

  if (valueType === 'code') {
    return /*#__PURE__*/React.createElement(FieldCode, _extends({
      text: text
    }, props));
  }

  if (valueType === 'jsonCode') {
    return /*#__PURE__*/React.createElement(FieldCode, _extends({
      text: text,
      language: "json"
    }, props));
  }

  if (valueType === 'textarea') {
    return /*#__PURE__*/React.createElement(FieldTextArea, _extends({
      text: text
    }, props));
  }

  if (valueType === 'digit') {
    return /*#__PURE__*/React.createElement(FieldDigit, _extends({
      text: text
    }, props));
  }

  if (valueType === 'second') {
    return /*#__PURE__*/React.createElement(FieldSecond, _extends({
      text: text
    }, props));
  }

  if (valueType === 'select' || valueType === 'text' && (props.valueEnum || props.request)) {
    return /*#__PURE__*/React.createElement(FieldSelect, _extends({
      text: text
    }, props));
  }

  if (valueType === 'checkbox') {
    return /*#__PURE__*/React.createElement(FieldCheckbox, _extends({
      text: text
    }, props));
  }

  if (valueType === 'radio') {
    return /*#__PURE__*/React.createElement(FieldRadio, _extends({
      text: text
    }, props));
  }

  if (valueType === 'radioButton') {
    return /*#__PURE__*/React.createElement(FieldRadio, _extends({
      radioType: "button",
      text: text
    }, props));
  }

  if (valueType === 'rate') {
    return /*#__PURE__*/React.createElement(FieldRate, _extends({
      text: text
    }, props));
  }

  if (valueType === 'switch') {
    return /*#__PURE__*/React.createElement(FieldSwitch, _extends({
      text: text
    }, props));
  }

  if (valueType === 'option') {
    return /*#__PURE__*/React.createElement(FieldOptions, _extends({
      text: text
    }, props));
  }

  if (valueType === 'password') {
    return /*#__PURE__*/React.createElement(FieldPassword, _extends({
      text: text
    }, props));
  }

  if (valueType === 'image') {
    return /*#__PURE__*/React.createElement(FieldImage, _extends({
      text: text
    }, props));
  }

  return /*#__PURE__*/React.createElement(FieldText, _extends({
    text: text
  }, props));
};

export { defaultRenderText };

var ProField = function ProField(_ref, ref) {
  var _ref2;

  var text = _ref.text,
      _ref$valueType = _ref.valueType,
      valueType = _ref$valueType === void 0 ? 'text' : _ref$valueType,
      _onChange = _ref.onChange,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["text", "valueType", "onChange", "value"]);

  var intl = useIntl();
  var context = useContext(ConfigContext);

  var fieldProps = (value || _onChange || (rest === null || rest === void 0 ? void 0 : rest.fieldProps)) && _objectSpread(_objectSpread({
    value: value
  }, omitUndefined(rest === null || rest === void 0 ? void 0 : rest.fieldProps)), {}, {
    onChange: function onChange() {
      var _rest$fieldProps, _rest$fieldProps$onCh;

      for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
        restParams[_key] = arguments[_key];
      }

      _onChange === null || _onChange === void 0 ? void 0 : _onChange.apply(void 0, restParams);
      rest === null || rest === void 0 ? void 0 : (_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : (_rest$fieldProps$onCh = _rest$fieldProps.onChange) === null || _rest$fieldProps$onCh === void 0 ? void 0 : _rest$fieldProps$onCh.call.apply(_rest$fieldProps$onCh, [_rest$fieldProps].concat(restParams));
    }
  });

  return /*#__PURE__*/React.createElement(React.Fragment, null, defaultRenderText((_ref2 = text !== null && text !== void 0 ? text : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) !== null && _ref2 !== void 0 ? _ref2 : '', valueType || 'text', _objectSpread(_objectSpread({}, rest), {}, {
    mode: rest.mode || 'read',
    ref: ref,
    placeholder: rest.placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入'),
    fieldProps: pickProProps(fieldProps)
  }), context.valueTypeMap));
};

export { FieldPercent, FieldIndexColumn, FieldProgress, FieldMoney, FieldDatePicker, FieldRangePicker, FieldCode, FieldTimePicker, FieldText, FieldStatus, FieldSelect, proFieldParsingText, proFieldParsingValueEnumToArray };
export default /*#__PURE__*/React.forwardRef(ProField);