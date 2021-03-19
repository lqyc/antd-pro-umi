import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { FilterDropdown, FieldLabel } from '@ant-design/pro-utils';
import { useIntl } from '@ant-design/pro-provider';
import { FilterOutlined } from '@ant-design/icons';
import omit from 'omit.js';
import BaseForm from '../../BaseForm';
import './index.less';
/**
 * 单行的查询表单，一般用于配合 table 或者 list使用 有时也会用于 card 的额外区域
 *
 * @param props
 */

var LightFilterContainer = function LightFilterContainer(props) {
  var items = props.items,
      prefixCls = props.prefixCls,
      _props$size = props.size,
      size = _props$size === void 0 ? 'middle' : _props$size,
      collapse = props.collapse,
      collapseLabel = props.collapseLabel,
      onValuesChange = props.onValuesChange,
      bordered = props.bordered,
      _props$values = props.values,
      values = _props$values === void 0 ? {} : _props$values;
  var intl = useIntl();
  var lightFilterClassName = "".concat(prefixCls, "-light-filter");
  var outsideItems = [];
  var collapseItems = [];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState(function () {
    return _objectSpread({}, values);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      moreValues = _useState4[0],
      setMoreValues = _useState4[1];

  useEffect(function () {
    setMoreValues(_objectSpread({}, values));
  }, [values]);
  items.forEach(function (item) {
    var _ref = item.props || {},
        secondary = _ref.secondary,
        name = _ref.name;

    if (secondary && !values[name] || collapse) {
      collapseItems.push(item);
    } else {
      outsideItems.push(item);
    }
  });

  var collapseLabelRender = function collapseLabelRender() {
    if (collapseLabel) {
      return collapseLabel;
    }

    if (collapse) {
      return /*#__PURE__*/React.createElement(FilterOutlined, {
        className: "".concat(lightFilterClassName, "-collapse-icon")
      });
    }

    return /*#__PURE__*/React.createElement(FieldLabel, {
      size: size,
      label: intl.getMessage('form.lightFilter.more', '更多筛选'),
      expanded: open
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(lightFilterClassName, "".concat(lightFilterClassName, "-").concat(size), _defineProperty({}, "".concat(lightFilterClassName, "-effective"), Object.keys(values).some(function (key) {
      return values[key];
    })))
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(lightFilterClassName, "-container")
  }, outsideItems.map(function (child, index) {
    var key = child.key;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(lightFilterClassName, "-item"),
      key: key || index
    }, /*#__PURE__*/React.cloneElement(child, {
      // proFieldProps 会直接作为 ProField 的 props 传递过去
      proFieldProps: {
        light: true,
        label: child.props.label,
        bordered: bordered
      },
      bordered: bordered
    }));
  }), collapseItems.length ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(lightFilterClassName, "-item"),
    key: "more"
  }, /*#__PURE__*/React.createElement(FilterDropdown, {
    padding: 24,
    onVisibleChange: setOpen,
    visible: open,
    label: collapseLabelRender(),
    footer: {
      onConfirm: function onConfirm() {
        onValuesChange(_objectSpread({}, moreValues));
        setOpen(false);
      },
      onClear: function onClear() {
        var clearValues = {};
        Object.keys(moreValues).forEach(function (key) {
          clearValues[key] = undefined;
        });
        setMoreValues(clearValues);
      }
    }
  }, collapseItems.map(function (child) {
    var key = child.key;
    var _child$props = child.props,
        name = _child$props.name,
        fieldProps = _child$props.fieldProps;

    var newFieldProps = _objectSpread(_objectSpread({}, fieldProps), {}, {
      onChange: function onChange(e) {
        setMoreValues(_objectSpread(_objectSpread({}, moreValues), {}, _defineProperty({}, name, (e === null || e === void 0 ? void 0 : e.target) ? e.target.value : e)));
        return false;
      }
    });

    if (moreValues.hasOwnProperty(name)) {
      newFieldProps[child.props.valuePropName || 'value'] = moreValues[name];
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(lightFilterClassName, "-line"),
      key: key
    }, /*#__PURE__*/React.cloneElement(child, {
      fieldProps: newFieldProps
    }));
  }))) : null));
};

function LightFilter(props) {
  var size = props.size,
      collapse = props.collapse,
      collapseLabel = props.collapseLabel,
      initialValues = props.initialValues,
      _onValuesChange = props.onValuesChange,
      userForm = props.form,
      bordered = props.bordered,
      ignoreRules = props.ignoreRules,
      reset = _objectWithoutProperties(props, ["size", "collapse", "collapseLabel", "initialValues", "onValuesChange", "form", "bordered", "ignoreRules"]);

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-form');

  var _Form$useForm = _Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var realForm = userForm || form;

  var _useState5 = useState(function () {
    return _objectSpread({}, initialValues);
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  return /*#__PURE__*/React.createElement(BaseForm, _extends({
    size: size,
    initialValues: initialValues,
    form: realForm,
    contentRender: function contentRender(items) {
      return /*#__PURE__*/React.createElement(LightFilterContainer, {
        prefixCls: prefixCls,
        items: items.flatMap(function (item) {
          if ((item === null || item === void 0 ? void 0 : item.type.displayName) === 'ProForm-Group') {
            return item.props.children;
          }

          return item;
        }),
        size: size,
        bordered: bordered,
        collapse: collapse,
        collapseLabel: collapseLabel,
        values: values,
        onValuesChange: function onValuesChange(newValues) {
          var newAllValues = _objectSpread(_objectSpread({}, values), newValues);

          setValues(newAllValues);
          realForm.setFieldsValue(newAllValues);
          realForm.submit();

          if (_onValuesChange) {
            _onValuesChange(newValues, newAllValues);
          }
        }
      });
    },
    formItemProps: {
      colon: false,
      labelAlign: 'left'
    },
    fieldProps: {
      style: {
        width: undefined
      }
    }
  }, omit(reset, ['labelWidth']), {
    onValuesChange: function onValuesChange(_, allValues) {
      setValues(allValues);

      if (_onValuesChange) {
        _onValuesChange(_, allValues);
      }

      realForm.submit();
    }
  }));
}

export default LightFilter;