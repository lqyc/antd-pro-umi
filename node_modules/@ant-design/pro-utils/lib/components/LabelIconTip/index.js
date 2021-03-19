"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 在 form 的 label 后面增加一个 tips 来展示一些说明文案
 *
 * @param props
 */
var LabelIconTip = function LabelIconTip(props) {
  var label = props.label,
      tooltip = props.tooltip,
      subTitle = props.subTitle;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  if (!tooltip && !subTitle) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label);
  }

  var className = getPrefixCls('pro-core-label-tip');
  var tooltipProps = typeof tooltip === 'string' ? {
    title: tooltip
  } : tooltip;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, label, subTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-subtitle")
  }, subTitle), tooltip && /*#__PURE__*/_react.default.createElement(_tooltip.default, tooltipProps, /*#__PURE__*/_react.default.createElement(_icons.InfoCircleOutlined, {
    className: "".concat(className, "-icon")
  })));
};

var _default = /*#__PURE__*/_react.default.memo(LabelIconTip);

exports.default = _default;