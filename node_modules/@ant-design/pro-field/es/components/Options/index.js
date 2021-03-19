import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';

var addArrayKeys = function addArrayKeys(doms) {
  return doms.map(function (dom, index) {
    if (! /*#__PURE__*/React.isValidElement(dom)) {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: index
      }, dom);
    }

    return /*#__PURE__*/React.cloneElement(dom, _objectSpread({
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

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-field-option');

  if (render) {
    var doms = render(text, _objectSpread({
      mode: type
    }, fieldProps), /*#__PURE__*/React.createElement(React.Fragment, null));

    if (!doms || (doms === null || doms === void 0 ? void 0 : doms.length) < 1 || !Array.isArray(doms)) {
      return null;
    }

    return /*#__PURE__*/React.createElement(_Space, {
      size: 16,
      className: className
    }, addArrayKeys(doms));
  }

  if (!text || !Array.isArray(text)) {
    if (! /*#__PURE__*/React.isValidElement(text)) {
      return null;
    }

    return text;
  }

  return /*#__PURE__*/React.createElement(_Space, {
    size: 16,
    className: className
  }, addArrayKeys(text));
};

export default FieldOptions;