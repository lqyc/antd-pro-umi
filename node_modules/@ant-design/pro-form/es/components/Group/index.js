import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import { RightOutlined } from '@ant-design/icons';
import FieldContext from '../../FieldContext';
import './index.less';
import { LabelIconTip, useMountMergeState } from '@ant-design/pro-utils';
import classNames from 'classnames';
var Group = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(FieldContext),
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

  var _useMountMergeState = useMountMergeState(function () {
    return defaultCollapsed || false;
  }, {
    value: props.collapsed,
    onChange: props.onCollapse
  }),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      collapsed = _useMountMergeState2[0],
      setCollapsed = _useMountMergeState2[1];

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-form-group');
  var collapsibleButton = collapsible && /*#__PURE__*/React.createElement(RightOutlined, {
    style: {
      marginRight: 8
    },
    rotate: !collapsed ? 90 : undefined
  });
  var label = /*#__PURE__*/React.createElement(LabelIconTip, {
    label: collapsibleButton ? /*#__PURE__*/React.createElement("div", null, collapsibleButton, title) : title,
    tooltip: tooltip
  });
  var titleDom = titleRender ? titleRender(label, props) : label;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, _defineProperty({}, "".concat(className, "-twoLine"), labelLayout === 'twoLine')),
    style: style,
    ref: ref
  }, (title || tooltip || extra) && /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, "-title"),
    style: titleStyle,
    onClick: function onClick() {
      setCollapsed(!collapsed);
    }
  }, extra ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, titleDom, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, extra)) : titleDom), collapsible && collapsed ? null : /*#__PURE__*/React.createElement(_Space, {
    className: "".concat(className, "-container"),
    size: size,
    direction: direction
  }, children));
});
Group.displayName = 'ProForm-Group';
export default Group;