import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { FilterDropdown, FieldLabel, isDropdownValueType, useMountMergeState, omitUndefined } from '@ant-design/pro-utils';
import './index.less';

var LightWrapper = function LightWrapper(props) {
  var _objectSpread3;

  var label = props.label,
      size = props.size,
      disabled = props.disabled,
      onChange = props.onChange,
      onBlur = props.onBlur,
      className = props.className,
      style = props.style,
      children = props.children,
      valuePropName = props.valuePropName,
      light = props.light,
      customLightMode = props.customLightMode,
      placeholder = props.placeholder,
      id = props.id,
      labelFormatter = props.labelFormatter,
      bordered = props.bordered,
      value = props.value;

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-field-light-wrapper');

  var _useState = useState(props[valuePropName]),
      _useState2 = _slicedToArray(_useState, 2),
      tempValue = _useState2[0],
      setTempValue = _useState2[1];

  var _useMountMergeState = useMountMergeState(false),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      open = _useMountMergeState2[0],
      setOpen = _useMountMergeState2[1];

  var isDropdown = /*#__PURE__*/React.isValidElement(children) && isDropdownValueType(children.props.valueType);

  if (!light || customLightMode || isDropdown) {
    if ( /*#__PURE__*/React.isValidElement(children)) {
      return /*#__PURE__*/React.cloneElement(children, omitUndefined(_objectSpread(_objectSpread({
        value: value,
        onChange: onChange,
        onBlur: onBlur
      }, children.props), {}, {
        fieldProps: omitUndefined(_objectSpread(_objectSpread(_defineProperty({
          id: id
        }, valuePropName, props[valuePropName]), children.props.fieldProps), {}, {
          // 这个 onChange 是 Form.Item 添加上的，要通过 fieldProps 透传给 ProField 调用
          onChange: onChange,
          onBlur: onBlur
        }))
      })));
    }

    return children;
  }

  var allowClear;

  if (children && /*#__PURE__*/React.isValidElement(children)) {
    var _children$props$field;

    allowClear = (_children$props$field = children.props.fieldProps) === null || _children$props$field === void 0 ? void 0 : _children$props$field.allowClear;
  }

  var labelValue = props[valuePropName];
  return /*#__PURE__*/React.createElement(FilterDropdown, {
    disabled: disabled,
    onVisibleChange: setOpen,
    visible: open,
    label: /*#__PURE__*/React.createElement(FieldLabel, {
      ellipsis: true,
      size: size,
      onClear: function onClear() {
        onChange === null || onChange === void 0 ? void 0 : onChange();
        setTempValue(undefined);
      },
      bordered: bordered,
      style: style,
      className: className,
      label: label,
      placeholder: placeholder,
      value: labelValue,
      disabled: disabled,
      expanded: open,
      formatter: labelFormatter,
      allowClear: allowClear
    }),
    footer: {
      onClear: function onClear() {
        return setTempValue(undefined);
      },
      onConfirm: function onConfirm() {
        onChange === null || onChange === void 0 ? void 0 : onChange(tempValue);
        setOpen(false);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-container"), className),
    style: style
  }, /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, children.props), {}, {
    fieldProps: _objectSpread((_objectSpread3 = {
      className: "".concat(prefixCls, "-field")
    }, _defineProperty(_objectSpread3, valuePropName, tempValue), _defineProperty(_objectSpread3, "id", id), _defineProperty(_objectSpread3, "onChange", function onChange(e) {
      setTempValue((e === null || e === void 0 ? void 0 : e.target) ? e.target.value : e);
    }), _defineProperty(_objectSpread3, "allowClear", allowClear), _objectSpread3), children.props.fieldProps)
  })) : children));
};

export default LightWrapper;