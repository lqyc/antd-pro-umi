import "antd/es/dropdown/style";
import _Dropdown from "antd/es/dropdown";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
import "antd/es/menu/style";
import _Menu from "antd/es/menu";
import { useIntl } from '@ant-design/pro-provider';
import React from 'react';
import { ColumnHeightOutlined } from '@ant-design/icons';
import Container from '../../container';

var DensityIcon = function DensityIcon() {
  var counter = Container.useContainer();
  var intl = useIntl();
  return /*#__PURE__*/React.createElement(_Dropdown, {
    overlay: /*#__PURE__*/React.createElement(_Menu, {
      selectedKeys: [counter.tableSize],
      onClick: function onClick(_ref) {
        var key = _ref.key;

        if (counter.setTableSize) {
          counter.setTableSize(key);
        }
      },
      style: {
        width: 80
      }
    }, /*#__PURE__*/React.createElement(_Menu.Item, {
      key: "large"
    }, intl.getMessage('tableToolBar.densityLarger', '默认')), /*#__PURE__*/React.createElement(_Menu.Item, {
      key: "middle"
    }, intl.getMessage('tableToolBar.densityMiddle', '中等')), /*#__PURE__*/React.createElement(_Menu.Item, {
      key: "small"
    }, intl.getMessage('tableToolBar.densitySmall', '紧凑'))),
    trigger: ['click']
  }, /*#__PURE__*/React.createElement(_Tooltip, {
    title: intl.getMessage('tableToolBar.density', '表格密度')
  }, /*#__PURE__*/React.createElement(ColumnHeightOutlined, null)));
};

export default /*#__PURE__*/React.memo(DensityIcon);