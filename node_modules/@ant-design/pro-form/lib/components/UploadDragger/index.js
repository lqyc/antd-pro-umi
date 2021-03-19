"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/upload/style");

var _upload = _interopRequireDefault(require("antd/es/upload"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _createField = _interopRequireDefault(require("../../BaseForm/createField"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 拖动上传组件
 *
 * @param
 */
var ProFormUploadDragger = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '单击或拖动文件到此区域进行上传' : _ref$title,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? /*#__PURE__*/_react.default.createElement(_icons.InboxOutlined, null) : _ref$icon,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '支持单次或批量上传' : _ref$description,
      action = _ref.action,
      accept = _ref.accept,
      _onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      max = _ref.max,
      proFieldProps = _ref.proFieldProps;
  var context = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var baseClassName = context.getPrefixCls('upload'); // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮

  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) !== 'read';
  return /*#__PURE__*/_react.default.createElement(_upload.default.Dragger, _extends({
    // @ts-ignore
    ref: ref,
    name: "files",
    action: action,
    accept: accept,
    fileList: value
  }, fieldProps, {
    onChange: function onChange(info) {
      if (_onChange) {
        _onChange(info);
      }

      if (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange) {
        fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange(info);
      }
    },
    style: _objectSpread(_objectSpread({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style), {}, {
      display: !showUploadButton ? 'none' : undefined
    })
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(baseClassName, "-drag-icon")
  }, icon), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(baseClassName, "-text")
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(baseClassName, "-hint")
  }, description), children);
});

var _default = (0, _createField.default)(ProFormUploadDragger, {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});

exports.default = _default;