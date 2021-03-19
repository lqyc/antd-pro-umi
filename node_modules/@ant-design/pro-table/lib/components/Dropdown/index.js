"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@ant-design/icons");

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 一个简单的下拉菜单
 *
 * @param param0
 */
var DropdownButton = function DropdownButton(_ref) {
  var children = _ref.children,
      menus = _ref.menus,
      onSelect = _ref.onSelect,
      className = _ref.className,
      style = _ref.style;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var tempClassName = getPrefixCls('pro-table-dropdown');

  var menu = /*#__PURE__*/_react.default.createElement(_menu.default, {
    onClick: function onClick(params) {
      return onSelect && onSelect(params.key);
    }
  }, menus === null || menus === void 0 ? void 0 : menus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      key: item.key
    }, item.name);
  }));

  return /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    overlay: menu,
    className: (0, _classnames.default)(tempClassName, className)
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    style: style
  }, children, " ", /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null)));
};

var TableDropdown = function TableDropdown(_ref2) {
  var propsClassName = _ref2.className,
      style = _ref2.style,
      onSelect = _ref2.onSelect,
      _ref2$menus = _ref2.menus,
      menus = _ref2$menus === void 0 ? [] : _ref2$menus;

  var _useContext2 = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext2.getPrefixCls;

  var className = getPrefixCls('pro-table-dropdown');

  var menu = /*#__PURE__*/_react.default.createElement(_menu.default, {
    onClick: function onClick(params) {
      return onSelect && onSelect(params.key);
    }
  }, menus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      key: item.key
    }, item.name);
  }));

  return /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    overlay: menu,
    className: (0, _classnames.default)(className, propsClassName)
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_icons.EllipsisOutlined, null)));
};

TableDropdown.Button = DropdownButton;
var _default = TableDropdown;
exports.default = _default;