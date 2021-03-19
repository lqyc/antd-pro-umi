"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("./ThemeColor.less");

var _icons = require("@ant-design/icons");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tag = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var color = _ref.color,
      check = _ref.check,
      rest = _objectWithoutProperties(_ref, ["color", "check"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, rest, {
    style: {
      backgroundColor: color
    },
    ref: ref
  }), check ? /*#__PURE__*/_react.default.createElement(_icons.CheckOutlined, null) : '');
});

var ThemeColor = function ThemeColor(_ref2, ref) {
  var colors = _ref2.colors,
      value = _ref2.value,
      onChange = _ref2.onChange,
      formatMessage = _ref2.formatMessage;
  var colorList = colors || [];

  if (colorList.length < 1) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "theme-color",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "theme-color-content"
  }, colorList.map(function (_ref3) {
    var key = _ref3.key,
        color = _ref3.color;
    var themeKey = (0, _utils.genThemeToString)(color);
    return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      key: color,
      title: themeKey ? formatMessage({
        id: "app.setting.themecolor.".concat(themeKey)
      }) : key
    }, /*#__PURE__*/_react.default.createElement(Tag, {
      className: "theme-color-block",
      color: color,
      check: value === key || (0, _utils.genThemeToString)(value) === key,
      onClick: function onClick() {
        return onChange && onChange(key);
      }
    }));
  })));
};

var _default = /*#__PURE__*/_react.default.forwardRef(ThemeColor);

exports.default = _default;