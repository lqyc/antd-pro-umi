import "antd/es/form/style";
import _Form from "antd/es/form";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Group from '../../components/Group';
import BaseForm from '../../BaseForm';

function ProForm(props) {
  return /*#__PURE__*/React.createElement(BaseForm, _extends({
    layout: "vertical",
    submitter: {
      // 反转按钮，在正常模式下，按钮应该是主按钮在前
      render: function render(_, dom) {
        return dom.reverse();
      }
    },
    contentRender: function contentRender(items, submitter) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, items, submitter);
    }
  }, props));
}

ProForm.Group = Group;
ProForm.useForm = _Form.useForm;
ProForm.Item = _Form.Item;
export default ProForm;