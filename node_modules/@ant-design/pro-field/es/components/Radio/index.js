import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import "antd/es/spin/style";
import _Spin from "antd/es/spin";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import './index.less';
import { ObjToMap, proFieldParsingText, useFieldFetchData } from '../Select';
/**
 * 单选组件
 *
 * @param param0
 * @param ref
 */

var FieldRadio = function FieldRadio(_ref, ref) {
  var radioType = _ref.radioType,
      renderFormItem = _ref.renderFormItem,
      mode = _ref.mode,
      render = _ref.render,
      rest = _objectWithoutProperties(_ref, ["radioType", "renderFormItem", "mode", "render"]);

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var layoutClassName = getPrefixCls('pro-field-radio');

  var _useFieldFetchData = useFieldFetchData(rest),
      _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 3),
      loading = _useFieldFetchData2[0],
      options = _useFieldFetchData2[1],
      _fetchData = _useFieldFetchData2[2];

  var radioRef = useRef();
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, radioRef.current || {}), {}, {
      fetchData: function fetchData() {
        return _fetchData();
      }
    });
  });

  if (loading) {
    return /*#__PURE__*/React.createElement(_Spin, {
      size: "small"
    });
  }

  if (mode === 'read') {
    var optionsValueEnum = (options === null || options === void 0 ? void 0 : options.length) ? options === null || options === void 0 ? void 0 : options.reduce(function (pre, cur) {
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, cur.value, cur.label));
    }, {}) : undefined;
    var dom = /*#__PURE__*/React.createElement(React.Fragment, null, proFieldParsingText(rest.text, ObjToMap(rest.valueEnum || optionsValueEnum)));

    if (render) {
      return render(rest.text, _objectSpread({
        mode: mode
      }, rest.fieldProps), dom) || null;
    }

    return dom;
  }

  if (mode === 'edit') {
    var _rest$fieldProps;

    var RadioComponents = radioType === 'button' ? _Radio.Button : _Radio;

    var _dom = /*#__PURE__*/React.createElement(_Radio.Group, _extends({
      ref: radioRef
    }, rest.fieldProps, {
      className: classNames((_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : _rest$fieldProps.className, "".concat(layoutClassName, "-").concat(rest.fieldProps.layout || 'horizontal')),
      options: undefined
    }), options === null || options === void 0 ? void 0 : options.map(function (option) {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }

      return option;
    }).map(function (item) {
      return /*#__PURE__*/React.createElement(RadioComponents, _extends({
        key: item.value
      }, item), item.label);
    }));

    if (renderFormItem) {
      return renderFormItem(rest.text, _objectSpread({
        mode: mode
      }, rest.fieldProps), _dom) || null;
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldRadio);