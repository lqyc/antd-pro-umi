import "antd/es/alert/style";
import _Alert from "antd/es/alert";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/space/style";
import _Space from "antd/es/space";
import React, { useContext } from 'react';
import './index.less';
import { useIntl } from '@ant-design/pro-provider';

var defaultAlertOptionRender = function defaultAlertOptionRender(props) {
  var intl = props.intl,
      onCleanSelected = props.onCleanSelected;
  return [/*#__PURE__*/React.createElement("a", {
    onClick: onCleanSelected,
    key: "0"
  }, intl.getMessage('alert.clear', '清空'))];
};

function TableAlert(_ref) {
  var selectedRowKeys = _ref.selectedRowKeys,
      onCleanSelected = _ref.onCleanSelected,
      selectedRows = _ref.selectedRows,
      _ref$alertInfoRender = _ref.alertInfoRender,
      alertInfoRender = _ref$alertInfoRender === void 0 ? function (_ref2) {
    var intl = _ref2.intl;
    return /*#__PURE__*/React.createElement(_Space, null, intl.getMessage('alert.selected', '已选择'), selectedRowKeys.length, intl.getMessage('alert.item', '项'), "\xA0\xA0");
  } : _ref$alertInfoRender,
      _ref$alertOptionRende = _ref.alertOptionRender,
      alertOptionRender = _ref$alertOptionRende === void 0 ? defaultAlertOptionRender : _ref$alertOptionRende;
  var intl = useIntl();
  var option = alertOptionRender && alertOptionRender({
    onCleanSelected: onCleanSelected,
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    intl: intl
  });

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-alert');

  if (alertInfoRender === false) {
    return null;
  }

  var dom = alertInfoRender({
    intl: intl,
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: onCleanSelected
  });

  if (dom === false || selectedRowKeys.length < 1) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(_Alert, {
    message: /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, "-info")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, "-info-content")
    }, dom), option ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, "-info-option")
    }, option) : null),
    type: "info"
  }));
}

export default TableAlert;