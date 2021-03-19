import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/button/style";
import _Button from "antd/es/button";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import createField from '../../BaseForm/createField';
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
      icon = _ref$icon === void 0 ? /*#__PURE__*/React.createElement(UploadOutlined, null) : _ref$icon,
      value = _ref.value,
      buttonProps = _ref.buttonProps,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      proFieldProps = _ref.proFieldProps;
  // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮
  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) !== 'read';
  return /*#__PURE__*/React.createElement(_Upload, _extends({
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
  }), showUploadButton && /*#__PURE__*/React.createElement(_Button, _extends({
    disabled: disabled || (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.disabled)
  }, buttonProps), icon, title));
};

export default createField( /*#__PURE__*/React.forwardRef(ProFormUploadButton), {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});