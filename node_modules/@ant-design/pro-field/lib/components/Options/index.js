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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addArrayKeys = function addArrayKeys(doms) {
  return doms.map(function (dom, index) {
    if (! /*#__PURE__*/_react.default.isValidElement(dom)) {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: index
      }, dom);
    }

    return /*#__PURE__*/_react.default.cloneElement(dom, _objectSpread({
      // eslint-disable-next-line react/no-array-index-key
      key: index
    }, dom === null || dom === void 0 ? void 0 : dom.props));
  });
};
/**
 * 一般用于放多个按钮
 *
 * @param
 */


var FieldOptions = function FieldOptions(_ref) {
  var text = _ref.text,
      type = _ref.mode,
      render = _ref.render,
      fieldProps = _ref.fieldProps;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-field-option');

  if (render) {
    var doms = render(text, _objectSpread({
      mode: type
    }, fieldProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));

    if (!doms || (doms === null || doms === void 0 ? void 0 : doms.length) < 1 || !Array.isArray(doms)) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement(_space.default, {
      size: 16,
      className: className
    }, addArrayKeys(doms));
  }

  if (!text || !Array.isArray(text)) {
    if (! /*#__PURE__*/_react.default.isValidElement(text)) {
      return null;
    }

    return text;
  }

  return /*#__PURE__*/_react.default.createElement(_space.default, {
    size: 16,
    className: className
  }, addArrayKeys(text));
};

var _default = FieldOptions;
exports.default = _default;