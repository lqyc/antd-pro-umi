"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _proProvider = require("@ant-design/pro-provider");

var _proUtils = require("@ant-design/pro-utils");

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * 日期选择组件
 *
 * @param
 */
var FieldDatePicker = function FieldDatePicker(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      format = _ref.format,
      label = _ref.label,
      light = _ref.light,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      showTime = _ref.showTime,
      fieldProps = _ref.fieldProps,
      picker = _ref.picker,
      bordered = _ref.bordered;
  var intl = (0, _proProvider.useIntl)();
  var size = (0, _react.useContext)(_configProvider.default.SizeContext);

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-field-date-picker');

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  if (mode === 'read') {
    var dom = /*#__PURE__*/_react.default.createElement("span", {
      ref: ref
    }, text ? (0, _moment.default)(text).format(format || 'YYYY-MM-DD') : '-');

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_react.default.createElement("span", null, dom));
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom;

    var disabled = fieldProps.disabled,
        value = fieldProps.value,
        _onChange = fieldProps.onChange,
        allowClear = fieldProps.allowClear,
        _fieldProps$placehold = fieldProps.placeholder,
        placeholder = _fieldProps$placehold === void 0 ? intl.getMessage('tableForm.selectPlaceholder', '请选择') : _fieldProps$placehold;
    var momentValue = (0, _proUtils.parseValueToMoment)(value);

    if (light) {
      var valueStr = momentValue && momentValue.format(format) || '';
      _dom = /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-light"),
        onClick: function onClick() {
          setOpen(true);
        }
      }, /*#__PURE__*/_react.default.createElement(_datePicker.default, _extends({
        picker: picker,
        showTime: showTime,
        format: format,
        ref: ref
      }, fieldProps, {
        value: momentValue,
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
      })), /*#__PURE__*/_react.default.createElement(_proUtils.FieldLabel, {
        label: label,
        disabled: disabled,
        placeholder: placeholder,
        size: size,
        value: valueStr,
        onClear: function onClear() {
          if (_onChange) {
            _onChange(null);
          }
        },
        allowClear: allowClear,
        bordered: bordered,
        expanded: open
      }));
    } else {
      _dom = /*#__PURE__*/_react.default.createElement(_datePicker.default, _extends({
        picker: picker,
        showTime: showTime,
        format: format,
        placeholder: placeholder,
        bordered: plain === undefined ? true : !plain,
        ref: ref
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

var _default = /*#__PURE__*/_react.default.forwardRef(FieldDatePicker);

exports.default = _default;