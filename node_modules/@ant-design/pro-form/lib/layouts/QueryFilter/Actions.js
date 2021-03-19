"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _proProvider = require("@ant-design/pro-provider");

var _proUtils = require("@ant-design/pro-utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCollapseRender = function defaultCollapseRender(collapsed, _, intl) {
  if (collapsed) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, intl.getMessage('tableForm.collapsed', '展开'), /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
      style: {
        marginLeft: '0.5em',
        transition: '0.3s all',
        transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, intl.getMessage('tableForm.expand', '收起'), /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
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

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var intl = (0, _proProvider.useIntl)();
  var collapseRender = (0, _proUtils.omitBoolean)(props.collapseRender) || defaultCollapseRender;
  return /*#__PURE__*/_react.default.createElement(_space.default, {
    style: style,
    size: 16
  }, submitter, props.collapseRender !== false && /*#__PURE__*/_react.default.createElement("a", {
    className: getPrefixCls('pro-form-collapse-button'),
    onClick: function onClick() {
      return setCollapsed(!collapsed);
    }
  }, collapseRender === null || collapseRender === void 0 ? void 0 : collapseRender(collapsed, props, intl)));
};

var _default = Actions;
exports.default = _default;