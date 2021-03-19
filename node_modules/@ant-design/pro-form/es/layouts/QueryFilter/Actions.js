import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import React, { useContext } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { omitBoolean } from '@ant-design/pro-utils';

var defaultCollapseRender = function defaultCollapseRender(collapsed, _, intl) {
  if (collapsed) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, intl.getMessage('tableForm.collapsed', '展开'), /*#__PURE__*/React.createElement(DownOutlined, {
      style: {
        marginLeft: '0.5em',
        transition: '0.3s all',
        transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
      }
    }));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, intl.getMessage('tableForm.expand', '收起'), /*#__PURE__*/React.createElement(DownOutlined, {
    style: {
      marginLeft: '0.5em',
      transition: '0.3s all',
      transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
    }
  }));
};
/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */


var Actions = function Actions(props) {
  var setCollapsed = props.setCollapsed,
      _props$collapsed = props.collapsed,
      collapsed = _props$collapsed === void 0 ? false : _props$collapsed,
      submitter = props.submitter,
      style = props.style;

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var intl = useIntl();
  var collapseRender = omitBoolean(props.collapseRender) || defaultCollapseRender;
  return /*#__PURE__*/React.createElement(_Space, {
    style: style,
    size: 16
  }, submitter, props.collapseRender !== false && /*#__PURE__*/React.createElement("a", {
    className: getPrefixCls('pro-form-collapse-button'),
    onClick: function onClick() {
      return setCollapsed(!collapsed);
    }
  }, collapseRender === null || collapseRender === void 0 ? void 0 : collapseRender(collapsed, props, intl)));
};

export default Actions;