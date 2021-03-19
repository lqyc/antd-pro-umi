import "antd/es/input/style";
import _Input from "antd/es/input";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useRef, useImperativeHandle, useState, useEffect } from 'react';
import { useIntl } from '@ant-design/pro-provider';
var CompositionInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var compositionRef = useRef(true);

  var _useState = useState(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      innerValue = _useState2[0],
      setInnerValue = _useState2[1];

  useEffect(function () {
    setInnerValue(props.value);
  }, [props.value]);

  var composition = props.composition,
      rest = _objectWithoutProperties(props, ["composition"]);

  return /*#__PURE__*/React.createElement(_Input, _extends({
    ref: ref
  }, rest, composition ? {
    value: innerValue,
    onCompositionStart: function onCompositionStart() {
      compositionRef.current = false;
    },
    onCompositionEnd: function onCompositionEnd(e) {
      if (compositionRef.current === undefined) {
        var _props$onChange;

        props === null || props === void 0 ? void 0 : (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, e);
      }

      compositionRef.current = true;
    },
    onChange: function onChange(e) {
      setInnerValue(e.target.value);

      if (compositionRef.current) {
        var _props$onChange2;

        props === null || props === void 0 ? void 0 : (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, e);
      } else {
        compositionRef.current = undefined;
      }
    }
  } : {}));
});
/**
 * 最基本的组件，就是个普通的 Input
 *
 * @param
 */

var FieldText = function FieldText(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      fieldProps = _ref.fieldProps;
  var intl = useIntl();
  var inputRef = useRef();
  useImperativeHandle(ref, function () {
    return _objectSpread({}, inputRef.current || {});
  }, [inputRef.current]);

  if (mode === 'read') {
    var dom = text || '-';

    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/React.createElement(React.Fragment, null, dom));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, dom);
  }

  if (mode === 'edit' || mode === 'update') {
    var placeholder = intl.getMessage('tableForm.inputPlaceholder', '请输入');

    var _dom = /*#__PURE__*/React.createElement(CompositionInput, _extends({
      placeholder: placeholder,
      ref: inputRef,
      allowClear: true
    }, fieldProps));

    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldText);