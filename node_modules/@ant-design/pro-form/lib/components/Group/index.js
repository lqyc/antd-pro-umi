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

var _FieldContext = _interopRequireDefault(require("../../FieldContext"));

require("./index.less");

var _proUtils = require("@ant-design/pro-utils");

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Group = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _React$useContext = _react.default.useContext(_FieldContext.default),
      groupProps = _React$useContext.groupProps;

  var _groupProps$props = _objectSpread(_objectSpread({}, groupProps), props),
      children = _groupProps$props.children,
      collapsible = _groupProps$props.collapsible,
      defaultCollapsed = _groupProps$props.defaultCollapsed,
      style = _groupProps$props.style,
      labelLayout = _groupProps$props.labelLayout,
      title = _groupProps$props.title,
      tooltip = _groupProps$props.tooltip,
      direction = _groupProps$props.direction,
      _groupProps$props$siz = _groupProps$props.size,
      size = _groupProps$props$siz === void 0 ? 32 : _groupProps$props$siz,
      titleStyle = _groupProps$props.titleStyle,
      titleRender = _groupProps$props.titleRender,
      extra = _groupProps$props.extra;

  var _useMountMergeState = (0, _proUtils.useMountMergeState)(function () {
    return defaultCollapsed || false;
  }, {
    value: props.collapsed,
    onChange: props.onCollapse
  }),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      collapsed = _useMountMergeState2[0],
      setCollapsed = _useMountMergeState2[1];

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-form-group');

  var collapsibleButton = collapsible && /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
    style: {
      marginRight: 8
    },
    rotate: !collapsed ? 90 : undefined
  });

  var label = /*#__PURE__*/_react.default.createElement(_proUtils.LabelIconTip, {
    label: collapsibleButton ? /*#__PURE__*/_react.default.createElement("div", null, collapsibleButton, title) : title,
    tooltip: tooltip
  });

  var titleDom = titleRender ? titleRender(label, props) : label;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, _defineProperty({}, "".concat(className, "-twoLine"), labelLayout === 'twoLine')),
    style: style,
    ref: ref
  }, (title || tooltip || extra) && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-title"),
    style: titleStyle,
    onClick: function onClick() {
      setCollapsed(!collapsed);
    }
  }, extra ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, titleDom, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, extra)) : titleDom), collapsible && collapsed ? null : /*#__PURE__*/_react.default.createElement(_space.default, {
    className: "".concat(className, "-container"),
    size: size,
    direction: direction
  }, children));
});

Group.displayName = 'ProForm-Group';
var _default = Group;
exports.default = _default;