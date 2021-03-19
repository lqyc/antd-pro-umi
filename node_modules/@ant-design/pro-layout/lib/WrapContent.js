"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

var _react = _interopRequireDefault(require("react"));

var _proProvider = require("@ant-design/pro-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapContent = function WrapContent(props) {
  var style = props.style,
      className = props.className,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement(_proProvider.ConfigProviderWrap, null, /*#__PURE__*/_react.default.createElement(_layout.default.Content, {
    className: className,
    style: style
  }, children));
};

var _default = WrapContent;
exports.default = _default;