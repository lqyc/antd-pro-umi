import "antd/es/space/style";
import _Space from "antd/es/space";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useImperativeHandle } from 'react';
import toArray from "rc-util/es/Children/toArray";
import createField from '../../BaseForm/createField';
export function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}

var FieldSet = function FieldSet(_ref) {
  var children = _ref.children,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      valuePropName = _ref.valuePropName,
      onChange = _ref.onChange,
      space = _ref.space;

  var fieldSetOnChange = function fieldSetOnChange(fileValue, index) {
    var newValues = _toConsumableArray(value);

    newValues[index] = defaultGetValueFromEvent(valuePropName || 'value', fileValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValues);
  };

  var itemIndex = -1;
  var list = toArray(children).map(function (item) {
    if ( /*#__PURE__*/React.isValidElement(item)) {
      itemIndex += 1;
      var index = itemIndex;
      return /*#__PURE__*/React.cloneElement(item, _objectSpread(_objectSpread({
        key: index,
        ignoreFormItem: true
      }, item.props || {}), {}, {
        value: value[index],
        onChange: function onChange(itemValue) {
          var _item$props$onChange, _item$props;

          fieldSetOnChange(itemValue, index);
          (_item$props$onChange = (_item$props = item.props).onChange) === null || _item$props$onChange === void 0 ? void 0 : _item$props$onChange.call(_item$props, itemValue);
        }
      }));
    }

    return item;
  });
  return /*#__PURE__*/React.createElement(_Space, space, list);
};

var ProFormFieldSet = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      space = _ref2.space,
      valuePropName = _ref2.valuePropName,
      rest = _objectWithoutProperties(_ref2, ["children", "space", "valuePropName"]);

  useImperativeHandle(ref, function () {}, []);
  return /*#__PURE__*/React.createElement(FieldSet, _extends({
    space: space,
    valuePropName: valuePropName
  }, rest.fieldProps, rest), children);
});
export default createField(ProFormFieldSet);