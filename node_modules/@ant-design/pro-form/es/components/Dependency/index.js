import "antd/es/form/style";
import _Form from "antd/es/form";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import get from "rc-util/es/utils/get";
import { useCallback, useContext, useMemo } from 'react';
import set from "rc-util/es/utils/set";
import { FormListContext } from '../List';

var ProFormDependency = function ProFormDependency(_ref) {
  var name = _ref.name,
      children = _ref.children,
      ignoreFormListField = _ref.ignoreFormListField,
      rest = _objectWithoutProperties(_ref, ["name", "children", "ignoreFormListField"]);

  // ProFromList 的 filed，里面有name和key
  var formListField = useContext(FormListContext);
  /**
   * 处理放到 Form.List 的情况
   *
   * @param itemName
   */

  var getNamePath = useCallback(function (itemName) {
    if (formListField.name === undefined || ignoreFormListField) {
      return [itemName].flat(1);
    }

    return [formListField.listName, formListField.name, itemName].flat(1);
  }, [formListField.listName, formListField.name, ignoreFormListField]);
  var names = useMemo(function () {
    if (formListField.name === undefined) {
      return name;
    }

    return name.map(function (itemName) {
      return [formListField.listName, formListField.name, itemName].flat(1);
    });
  }, [formListField.listName, formListField.name, name]);
  return /*#__PURE__*/React.createElement(_Form.Item, _extends({}, rest, {
    noStyle: true,
    shouldUpdate: function shouldUpdate(prevValues, nextValues) {
      return names.some(function (nameItem) {
        var arrayName = Array.isArray(nameItem) ? nameItem : [nameItem];
        return get(prevValues, arrayName) !== get(nextValues, arrayName);
      });
    }
  }), function (form) {
    var values = form.getFieldsValue(names);
    var nameValues = name.map(function (itemName) {
      var namePath = getNamePath(itemName);
      return set({}, [itemName].flat(1), get(values, namePath));
    }).reduce(function (pre, next) {
      return _objectSpread(_objectSpread({}, pre), next);
    }, {});
    return children === null || children === void 0 ? void 0 : children(nameValues, form);
  });
};

export default ProFormDependency;