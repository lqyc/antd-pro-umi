"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _useMergedState3 = _interopRequireDefault(require("rc-util/es/hooks/useMergedState"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HeaderMenu = function HeaderMenu(props) {
  var _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      _props$type = props.type,
      type = _props$type === void 0 ? 'inline' : _props$type,
      prefixCls = props.prefixCls,
      propActiveKey = props.activeKey;

  var _useMergedState = (0, _useMergedState3.default)(propActiveKey, {
    value: propActiveKey,
    onChange: props.onChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      activeKey = _useMergedState2[0],
      setActiveKey = _useMergedState2[1];

  if (items.length < 1) {
    return null;
  }

  var activeItem = items.find(function (item) {
    return item.key === activeKey;
  }) || items[0];

  if (type === 'inline') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-menu"), "".concat(prefixCls, "-inline-menu"))
    }, items.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: item.key,
        onClick: function onClick() {
          setActiveKey(item.key);
        },
        className: (0, _classnames.default)("".concat(prefixCls, "-inline-menu-item"), activeItem.key === item.key ? "".concat(prefixCls, "-inline-menu-item-active") : undefined)
      }, item.label);
    }));
  }

  if (type === 'tab') {
    return /*#__PURE__*/_react.default.createElement(_tabs.default, {
      activeKey: activeItem.key,
      onTabClick: function onTabClick(key) {
        return setActiveKey(key);
      }
    }, items.map(function (_ref) {
      var label = _ref.label,
          key = _ref.key,
          rest = _objectWithoutProperties(_ref, ["label", "key"]);

      return /*#__PURE__*/_react.default.createElement(_tabs.default.TabPane, _extends({
        tab: label,
        key: key
      }, rest));
    }));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-menu"), "".concat(prefixCls, "-dropdownmenu"))
  }, /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    trigger: ['click'],
    overlay: /*#__PURE__*/_react.default.createElement(_menu.default, {
      selectedKeys: [activeItem.key],
      onClick: function onClick(item) {
        setActiveKey(item.key);
      }
    }, items.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
        key: item.key,
        disabled: item.disabled
      }, item.label);
    }))
  }, /*#__PURE__*/_react.default.createElement(_space.default, {
    className: "".concat(prefixCls, "-dropdownmenu-label")
  }, activeItem.label, /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null))));
};

var _default = HeaderMenu;
exports.default = _default;