"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/alert/style");

var _alert = _interopRequireDefault(require("antd/es/alert"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

var _react = _interopRequireWildcard(require("react"));

require("./index.less");

var _proProvider = require("@ant-design/pro-provider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultAlertOptionRender = function defaultAlertOptionRender(props) {
  var intl = props.intl,
      onCleanSelected = props.onCleanSelected;
  return [/*#__PURE__*/_react.default.createElement("a", {
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
    return /*#__PURE__*/_react.default.createElement(_space.default, null, intl.getMessage('alert.selected', '已选择'), selectedRowKeys.length, intl.getMessage('alert.item', '项'), "\xA0\xA0");
  } : _ref$alertInfoRender,
      _ref$alertOptionRende = _ref.alertOptionRender,
      alertOptionRender = _ref$alertOptionRende === void 0 ? defaultAlertOptionRender : _ref$alertOptionRende;
  var intl = (0, _proProvider.useIntl)();
  var option = alertOptionRender && alertOptionRender({
    onCleanSelected: onCleanSelected,
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    intl: intl
  });

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement(_alert.default, {
    message: /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-info")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-info-content")
    }, dom), option ? /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-info-option")
    }, option) : null),
    type: "info"
  }));
}

var _default = TableAlert;
exports.default = _default;