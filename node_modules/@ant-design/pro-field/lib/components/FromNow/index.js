"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireDefault(require("react"));

var _proUtils = require("@ant-design/pro-utils");

var _proProvider = require("@ant-design/pro-provider");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 与当前的时间进行比较 http://momentjs.cn/docs/displaying/fromnow.html
 *
 * @param
 */
var FieldFromNow = function FieldFromNow(_ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      format = _ref.format,
      fieldProps = _ref.fieldProps;
  var intl = (0, _proProvider.useIntl)();

  if (mode === 'read') {
    var dom = /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      title: (0, _moment.default)(text).format(format || 'YYYY-MM-DD HH:mm:ss')
    }, (0, _moment.default)(text).fromNow());

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dom));
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dom);
  }

  if (mode === 'edit' || mode === 'update') {
    var placeholder = intl.getMessage('tableForm.selectPlaceholder', '请选择');
    var momentValue = (0, _proUtils.parseValueToMoment)(fieldProps.value);

    var _dom = /*#__PURE__*/_react.default.createElement(_datePicker.default, _extends({
      placeholder: placeholder
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

var _default = FieldFromNow;
exports.default = _default;