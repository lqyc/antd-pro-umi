"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _proProvider = require("@ant-design/pro-provider");

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _container = _interopRequireDefault(require("../../container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DensityIcon = function DensityIcon() {
  var counter = _container.default.useContainer();

  var intl = (0, _proProvider.useIntl)();
  return /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    overlay: /*#__PURE__*/_react.default.createElement(_menu.default, {
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
    }, /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      key: "large"
    }, intl.getMessage('tableToolBar.densityLarger', '默认')), /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      key: "middle"
    }, intl.getMessage('tableToolBar.densityMiddle', '中等')), /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      key: "small"
    }, intl.getMessage('tableToolBar.densitySmall', '紧凑'))),
    trigger: ['click']
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: intl.getMessage('tableToolBar.density', '表格密度')
  }, /*#__PURE__*/_react.default.createElement(_icons.ColumnHeightOutlined, null)));
};

var _default = /*#__PURE__*/_react.default.memo(DensityIcon);

exports.default = _default;