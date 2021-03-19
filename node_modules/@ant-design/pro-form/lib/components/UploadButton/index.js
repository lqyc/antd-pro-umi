"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/upload/style");

var _upload = _interopRequireDefault(require("antd/es/upload"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _createField = _interopRequireDefault(require("../../BaseForm/createField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 上传按钮组件
 *
 * @param
 */
var ProFormUploadButton = function ProFormUploadButton(_ref, ref) {
  var fieldProps = _ref.fieldProps,
      action = _ref.action,
      accept = _ref.accept,
      listType = _ref.listType,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '单击上传' : _ref$title,
      max = _ref.max,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? /*#__PURE__*/_react.default.createElement(_icons.UploadOutlined, null) : _ref$icon,
      value = _ref.value,
      buttonProps = _ref.buttonProps,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      proFieldProps = _ref.proFieldProps;
  // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮
  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) !== 'read';
  return /*#__PURE__*/_react.default.createElement(_upload.default, _extends({
    action: action,
    accept: accept,
    ref: ref,
    name: "fileList",
    listType: listType || 'picture',
    fileList: value
  }, fieldProps, {
    onChange: function onChange(info) {
      if (_onChange) {
        _onChange(info);
      }

      if (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange) {
        fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange(info);
      }
    }
  }), showUploadButton && /*#__PURE__*/_react.default.createElement(_button.default, _extends({
    disabled: disabled || (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.disabled)
  }, buttonProps), icon, title));
};

var _default = (0, _createField.default)( /*#__PURE__*/_react.default.forwardRef(ProFormUploadButton), {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});

exports.default = _default;