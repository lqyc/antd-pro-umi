import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext, useRef, useCallback, useState, useMemo } from 'react';
import { useIntl } from '@ant-design/pro-provider';
import ProForm, { QueryFilter, LightFilter, ProFormField } from '@ant-design/pro-form';
import classNames from 'classnames';
import omit from 'omit.js';
import { runFunction } from '@ant-design/pro-utils';
import { useDeepCompareEffect, getFieldPropsOrFormItemProps } from '@ant-design/pro-utils';
import './index.less';
/**
 * 获取当前选择的 Form Layout 配置
 *
 * @param isForm
 * @param searchConfig
 * @returns LightFilter | QueryFilter | ProForm
 */

var getFormCompetent = function getFormCompetent(isForm, searchConfig) {
  if (!isForm && searchConfig !== false) {
    if ((searchConfig === null || searchConfig === void 0 ? void 0 : searchConfig.filterType) === 'light') {
      return {
        Competent: LightFilter,
        competentName: 'light-filter'
      };
    }

    return {
      Competent: QueryFilter,
      competentName: 'query-filter'
    };
  }

  return {
    Competent: ProForm,
    competentName: 'form'
  };
};
/**
 * 获取需要传给相应表单的props
 *
 * @param searchConfig
 * @param name
 */


var getFromProps = function getFromProps(isForm, searchConfig, name) {
  if (!isForm && name === 'light-filter') {
    // 传给 lightFilter 的问题
    return omit(_objectSpread({}, searchConfig), ['labelWidth', 'defaultCollapsed', 'filterType']);
  }

  if (!isForm) {
    // 传给 QueryFilter 的配置
    return omit(_objectSpread({
      labelWidth: searchConfig ? searchConfig === null || searchConfig === void 0 ? void 0 : searchConfig.labelWidth : undefined,
      defaultCollapsed: true
    }, searchConfig), ['filterType']);
  }

  return {};
};
/**
 * 从formConfig中获取传给相应表单的配置
 *
 * @param isForm
 * @param formConfig
 */


var getFormConfigs = function getFormConfigs(isForm, formConfig) {
  if (isForm) {
    // 传给Form的配置
    return omit(formConfig, ['ignoreRules']);
  } // 传给Filter的配置


  return _objectSpread({
    ignoreRules: true
  }, formConfig);
};
/**
 * 把配置转化为输入控件
 *
 * @param props
 * @param ref
 */


export var formInputRender = function formInputRender(props, ref) {
  var _item$search;

  var item = props.item,
      intl = props.intl,
      form = props.form,
      type = props.type,
      propsFormItemProps = props.formItemProps,
      rest = _objectWithoutProperties(props, ["item", "intl", "form", "type", "formItemProps"]);

  var formItemProps = getFieldPropsOrFormItemProps(propsFormItemProps, form, item);
  var _item$valueType = item.valueType,
      itemValueType = _item$valueType === void 0 ? 'text' : _item$valueType; // if function， run it

  var valueType = (typeof itemValueType === 'function' ? itemValueType({}, type) : itemValueType) || 'text';

  var _getFieldPropsOrFormI = getFieldPropsOrFormItemProps(item.fieldProps || {}, form, item),
      onChange = _getFieldPropsOrFormI.onChange,
      restFieldProps = _objectWithoutProperties(_getFieldPropsOrFormI, ["onChange"]);
  /** 公共的 props */


  var initialProps = {
    name: item.key || item.dataIndex,
    initialValue: item.initialValue,
    params: item.params,
    key: "".concat(item.dataIndex || '', "-").concat(item.key || '', "-").concat(item.index),
    formItemProps: formItemProps,
    transform: item.search ? (_item$search = item.search) === null || _item$search === void 0 ? void 0 : _item$search.transform : undefined
  };
  /** 自定义 render */

  if (item.renderFormItem && form) {
    /** 删除 renderFormItem 防止重复的 dom 渲染 */
    var renderFormItem = item.renderFormItem,
        restItem = _objectWithoutProperties(item, ["renderFormItem"]);

    var defaultRender = function defaultRender(newItem) {
      return formInputRender(_objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
        item: newItem
      })));
    };
    /** 拼接 renderFormItem 的配置 */


    var renderFormItemProps = omit(_objectSpread(_objectSpread({}, rest), {}, {
      type: type,
      defaultRender: defaultRender
    }), ['colSize']); // 自动注入 onChange 和 value，用户自己很有可能忘记

    var dom = renderFormItem(_objectSpread(_objectSpread({}, restItem), {}, {
      type: 'form'
    }), renderFormItemProps, form); // 有可能不是一个组件

    if (! /*#__PURE__*/React.isValidElement(dom)) {
      return dom;
    }

    var defaultProps = dom.props;

    if (defaultProps.isDefaultDom) {
      return dom;
    }

    return /*#__PURE__*/React.createElement(ProFormField, _extends({}, rest, initialProps, {
      ref: ref,
      fieldProps: _objectSpread({
        style: {
          width: undefined
        }
      }, item.fieldProps)
    }), /*#__PURE__*/React.cloneElement(dom, omit(_objectSpread(_objectSpread({}, rest), defaultProps), ['colSize'])));
  }

  var finalValueType = !valueType || ['textarea', 'jsonCode', 'code'].includes(valueType) && type === 'table' ? 'text' : valueType;
  return /*#__PURE__*/React.createElement(ProFormField, _extends({
    ref: ref,
    tooltip: item.tooltip || item.tip,
    isDefaultDom: true,
    valueEnum: runFunction(item.valueEnum, undefined),
    onChange: onChange,
    fieldProps: _objectSpread({
      style: {
        width: undefined
      }
    }, restFieldProps)
  }, rest, initialProps, {
    // valueType = textarea，但是在 查询表单这里，应该是个 input 框
    valueType: finalValueType
  }));
};
export var proFormItemRender = function proFormItemRender(_ref) {
  var item = _ref.item,
      intl = _ref.intl,
      formInstance = _ref.formInstance,
      type = _ref.type;

  var valueType = item.valueType,
      dataIndex = item.dataIndex,
      valueEnum = item.valueEnum,
      renderFormItem = item.renderFormItem,
      render = item.render,
      hideInForm = item.hideInForm,
      hideInSearch = item.hideInSearch,
      search = item.search,
      hideInTable = item.hideInTable,
      renderText = item.renderText,
      order = item.order,
      width = item.width,
      sorter = item.sorter,
      formItemProps = item.formItemProps,
      initialValue = item.initialValue,
      ellipsis = item.ellipsis,
      index = item.index,
      filters = item.filters,
      request = item.request,
      params = item.params,
      colSize = item.colSize,
      rest = _objectWithoutProperties(item, ["valueType", "dataIndex", "valueEnum", "renderFormItem", "render", "hideInForm", "hideInSearch", "search", "hideInTable", "renderText", "order", "width", "sorter", "formItemProps", "initialValue", "ellipsis", "index", "filters", "request", "params", "colSize"]); // 支持 function 的 title


  var getTitle = function getTitle() {
    if (rest.title && typeof rest.title === 'function') {
      return rest.title(item, 'form', '');
    }

    return rest.title;
  };

  var dom = formInputRender({
    item: item,
    type: type,
    intl: intl,
    form: formInstance,
    label: getTitle(),
    request: request,
    params: params,
    formItemProps: formItemProps,
    colSize: colSize
  });

  if (!dom) {
    return null;
  }

  return dom;
};

var FormSearch = function FormSearch(_ref2) {
  var _classNames;

  var onSubmit = _ref2.onSubmit,
      formRef = _ref2.formRef,
      _ref2$dateFormatter = _ref2.dateFormatter,
      dateFormatter = _ref2$dateFormatter === void 0 ? 'string' : _ref2$dateFormatter,
      type = _ref2.type,
      columns = _ref2.columns,
      manualRequest = _ref2.manualRequest,
      _onReset = _ref2.onReset,
      submitButtonLoading = _ref2.submitButtonLoading,
      searchConfig = _ref2.search,
      _ref2$form = _ref2.form,
      formConfig = _ref2$form === void 0 ? {} : _ref2$form,
      bordered = _ref2.bordered;

  /** 为了支持 dom 的消失，支持了这个 api */
  var intl = useIntl();
  var isForm = type === 'form';
  /** 提交表单，根据两种模式不同，方法不相同 */

  var submit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values, firstLoad) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (onSubmit) {
                onSubmit(values, firstLoad);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var columnsList = useMemo(function () {
    return columns.filter(function (item) {
      var valueType = item.valueType;

      if ((item.hideInSearch || item.search === false) && type !== 'form') {
        return false;
      }

      if (type === 'form' && item.hideInForm) {
        return false;
      }

      if (valueType !== 'index' && valueType !== 'indexBorder' && valueType !== 'option' && (item.key || item.dataIndex)) {
        return true;
      }

      return false;
    }).sort(function (a, b) {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }

      return (b.index || 0) - (a.index || 0);
    });
  }, [columns, type]);
  var columnsListRef = useRef([]);
  var updateDomList = useCallback(function (list) {
    var newFormItemList = list.map(function (item, index) {
      return proFormItemRender({
        isForm: isForm,
        formInstance: formRef.current || undefined,
        item: _objectSpread({
          index: index
        }, item),
        type: type,
        intl: intl
      });
    }).filter(function (item) {
      return !!item;
    });
    columnsListRef.current = newFormItemList;
    return newFormItemList;
  }, [formRef, intl, isForm, type]);

  var _useState = useState(function () {
    return updateDomList(columnsList);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      domList = _useState2[0],
      setDomList = _useState2[1];

  useDeepCompareEffect(function () {
    if (columnsList.length < 1) return;
    setDomList(updateDomList(columnsList));
  }, [columnsList]);
  var className = getPrefixCls('pro-table-search');
  var formClassName = getPrefixCls('pro-table-form');

  var _useMemo = useMemo(function () {
    return getFormCompetent(isForm, searchConfig);
  }, [searchConfig, isForm]),
      Competent = _useMemo.Competent,
      competentName = _useMemo.competentName; // 传给每个表单的配置，理论上大家都需要


  var loadingProps = useMemo(function () {
    return {
      submitter: {
        submitButtonProps: {
          loading: submitButtonLoading
        }
      }
    };
  }, [submitButtonLoading]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, (_classNames = {}, _defineProperty(_classNames, formClassName, isForm), _defineProperty(_classNames, getPrefixCls("pro-table-search-".concat(competentName)), true), _defineProperty(_classNames, "".concat(getPrefixCls('card'), "-bordered"), !!bordered), _classNames))
  }, /*#__PURE__*/React.createElement(Competent, _extends({}, loadingProps, getFromProps(isForm, searchConfig, competentName), getFormConfigs(isForm, formConfig), {
    formRef: formRef,
    onValuesChange: function onValuesChange(change, all) {
      setDomList(updateDomList(columnsList));

      if (formConfig.onValuesChange) {
        formConfig.onValuesChange(change, all);
      }
    },
    dateFormatter: dateFormatter,
    onInit: function onInit(values) {
      // 触发一个 submit，之所以这里触发是为了保证 value 都被 format了
      if (type !== 'form') {
        // 重新计算一下dom
        setDomList(updateDomList(columnsList));
        /** 如果是手动模式不需要提交 */

        if (manualRequest) return;
        submit(values, true);
      }
    },
    onReset: function onReset(values) {
      _onReset === null || _onReset === void 0 ? void 0 : _onReset(values);
    },
    onFinish: function onFinish(values) {
      submit(values, false);
    },
    initialValues: formConfig.initialValues
  }), domList));
};

export default /*#__PURE__*/React.memo(FormSearch);