"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _proUtils = require("@ant-design/pro-utils");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _warning = require("rc-util/es/warning");

var _FieldContext = _interopRequireDefault(require("../FieldContext"));

var _LightWrapper = _interopRequireDefault(require("./LightWrapper"));

var _List = require("../components/List");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var WIDTH_SIZE_ENUM = {
  // 适用于短数字，短文本或者选项
  xs: 104,
  s: 216,
  // 适用于较短字段录入、如姓名、电话、ID 等。
  sm: 216,
  m: 328,
  // 标准宽度，适用于大部分字段长度。
  md: 328,
  l: 440,
  // 适用于较长字段录入，如长网址、标签组、文件路径等。
  lg: 440,
  // 适用于长文本录入，如长链接、描述、备注等，通常搭配自适应多行输入框或定高文本域使用。
  xl: 552
};
/**
 * 这个方法的主要作用的帮助 Field 增加 FormItem 同时也会处理 lightFilter
 *
 * @param Field
 * @param config
 */

function createField(Field, config) {
  var FieldWithContext = function FieldWithContext(props) {
    var _rest$fieldProps;

    var size = (0, _react.useContext)(_configProvider.default.SizeContext);

    var label = props.label,
        tooltip = props.tooltip,
        placeholder = props.placeholder,
        width = props.width,
        proFieldProps = props.proFieldProps,
        bordered = props.bordered,
        messageVariables = props.messageVariables,
        ignoreFormItem = props.ignoreFormItem,
        transform = props.transform,
        readonly = props.readonly,
        allowClear = props.allowClear,
        colSize = props.colSize,
        propsFormItemProps = props.formItemProps,
        rest = _objectWithoutProperties(props, ["label", "tooltip", "placeholder", "width", "proFieldProps", "bordered", "messageVariables", "ignoreFormItem", "transform", "readonly", "allowClear", "colSize", "formItemProps"]);

    var _ref = config || {},
        valueType = _ref.valueType,
        customLightMode = _ref.customLightMode,
        lightFilterLabelFormatter = _ref.lightFilterLabelFormatter,
        _ref$valuePropName = _ref.valuePropName,
        valuePropName = _ref$valuePropName === void 0 ? 'value' : _ref$valuePropName,
        defaultFormItemProps = _objectWithoutProperties(_ref, ["valueType", "customLightMode", "lightFilterLabelFormatter", "valuePropName"]); // ProFromList 的 filed，里面有name和key


    var formListField = (0, _react.useContext)(_List.FormListContext);
    /** 从 context 中拿到的值 */

    var _React$useContext = _react.default.useContext(_FieldContext.default),
        fieldProps = _React$useContext.fieldProps,
        formItemProps = _React$useContext.formItemProps,
        setFieldValueType = _React$useContext.setFieldValueType; // restFormItemProps is user props pass to Form.Item


    var restFormItemProps = (0, _proUtils.pickProFormItemProps)(rest);
    var formNeedProps = {
      value: rest.value,
      onChange: rest.onChange
    };

    var realFieldProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, ignoreFormItem ? formNeedProps : {}), {}, {
      disabled: props.disabled,
      placeholder: placeholder
    }, fieldProps || {}), rest.fieldProps || {}), {}, {
      style: _objectSpread(_objectSpread({}, (_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : _rest$fieldProps.style), fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style)
    });

    var otherProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
      messageVariables: messageVariables
    }, defaultFormItemProps), formItemProps), restFormItemProps), propsFormItemProps);

    var name = (0, _react.useMemo)(function () {
      if (ignoreFormItem) {
        return [];
      }

      if (formListField.name !== undefined) {
        return [formListField.name, otherProps.name].flat(1);
      }

      return otherProps.name;
    }, [formListField.name, otherProps.name]);
    (0, _react.useEffect)(function () {
      // 如果 setFieldValueType 和 props.name 不存在不存入
      if (!setFieldValueType || !props.name) {
        return;
      } // Field.type === 'ProField' 时 props 里面是有 valueType 的，所以要设置一下
      // 写一个 ts 比较麻烦，用 any 顶一下


      setFieldValueType([formListField.listName, name].flat(1).filter(function (itemName) {
        return itemName !== undefined;
      }), {
        valueType: valueType || rest.valueType || 'text',
        transform: transform
      });
    }, [name, transform, valueType]);
    (0, _warning.noteOnce)( // eslint-disable-next-line @typescript-eslint/dot-notation
    !rest['defaultValue'], '请不要在 Form 中使用 defaultXXX。如果需要默认值请使用 initialValues 和 initialValue。');

    var field = /*#__PURE__*/_react.default.createElement(Field // ProXxx 上面的 props 透传给 FieldProps，可能包含 Field 自定义的 props，
    // 比如 ProFormSelect 的 request
    , _extends({}, rest, {
      fieldProps: (0, _proUtils.omitUndefined)(_objectSpread(_objectSpread({
        allowClear: allowClear
      }, realFieldProps), {}, {
        style: (0, _proUtils.omitUndefined)(_objectSpread({
          width: typeof width === 'number' ? width : undefined
        }, realFieldProps === null || realFieldProps === void 0 ? void 0 : realFieldProps.style)),
        className: (0, _classnames2.default)(realFieldProps === null || realFieldProps === void 0 ? void 0 : realFieldProps.className, _defineProperty({}, "pro-field-".concat(width), width && WIDTH_SIZE_ENUM[width]))
      })),
      proFieldProps: (0, _proUtils.omitUndefined)(_objectSpread({
        mode: readonly ? 'read' : 'edit',
        params: rest.params,
        proFieldKey: otherProps === null || otherProps === void 0 ? void 0 : otherProps.name
      }, proFieldProps))
    }));
    /** 被放到 FormSet 的时候 */


    if (ignoreFormItem) {
      return field;
    }

    return /*#__PURE__*/_react.default.createElement(_form.default.Item, _extends({
      // 全局的提供一个 tip 功能，可以减少代码量
      // 轻量模式下不通过 FormItem 显示 label
      label: label && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.light) !== true ? label : undefined,
      tooltip: (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.light) !== true && tooltip,
      valuePropName: valuePropName
    }, otherProps, {
      name: name,
      messageVariables: _objectSpread({
        label: label
      }, otherProps === null || otherProps === void 0 ? void 0 : otherProps.messageVariables)
    }), /*#__PURE__*/_react.default.createElement(_LightWrapper.default, _extends({}, realFieldProps, {
      allowClear: allowClear,
      bordered: bordered,
      size: size,
      light: proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.light,
      customLightMode: customLightMode,
      label: label,
      labelFormatter: lightFilterLabelFormatter,
      valuePropName: valuePropName
    }), field));
  };

  return FieldWithContext;
}

var _default = createField;
exports.default = _default;