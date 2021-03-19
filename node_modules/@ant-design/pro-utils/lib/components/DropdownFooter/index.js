"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _proProvider = require("@ant-design/pro-provider");

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownFooter = function DropdownFooter(props) {
  var intl = (0, _proProvider.useIntl)();
  var onClear = props.onClear,
      onConfirm = props.onConfirm,
      disabled = props.disabled;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-core-dropdown-footer');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls,
    onClick: function onClick(e) {
      return e.target.getAttribute('data-type') !== 'confirm' && e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    style: {
      visibility: onClear ? 'visible' : 'hidden'
    },
    type: "link",
    size: "small",
    disabled: disabled,
    onClick: function onClick(e) {
      if (onClear) {
        onClear(e);
      }

      e.stopPropagation();
    }
  }, intl.getMessage('form.lightFilter.clear', '清除')), /*#__PURE__*/_react.default.createElement(_button.default, {
    "data-type": "confirm",
    type: "primary",
    size: "small",
    onClick: onConfirm,
    disabled: disabled
  }, intl.getMessage('form.lightFilter.confirm', '确认')));
};

var _default = DropdownFooter;
exports.default = _default;