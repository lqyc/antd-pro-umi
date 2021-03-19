import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import createField from '../../BaseForm/createField';
/**
 * 拖动上传组件
 *
 * @param
 */

var ProFormUploadDragger = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '单击或拖动文件到此区域进行上传' : _ref$title,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? /*#__PURE__*/React.createElement(InboxOutlined, null) : _ref$icon,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '支持单次或批量上传' : _ref$description,
      action = _ref.action,
      accept = _ref.accept,
      _onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      max = _ref.max,
      proFieldProps = _ref.proFieldProps;
  var context = useContext(_ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('upload'); // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮

  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) !== 'read';
  return /*#__PURE__*/React.createElement(_Upload.Dragger, _extends({
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
  }), /*#__PURE__*/React.createElement("p", {
    className: "".concat(baseClassName, "-drag-icon")
  }, icon), /*#__PURE__*/React.createElement("p", {
    className: "".concat(baseClassName, "-text")
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "".concat(baseClassName, "-hint")
  }, description), children);
});
export default createField(ProFormUploadDragger, {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});