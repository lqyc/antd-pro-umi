import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/descriptions/style";
import _Descriptions from "antd/es/descriptions";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/space/style";
import _Space from "antd/es/space";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext, useEffect } from 'react';
import { EditOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import toArray from "rc-util/es/Children/toArray";
import ProForm, { ProFormField } from '@ant-design/pro-form';
import { InlineErrorFormItem, LabelIconTip, useEditableMap, ErrorBoundary, getFieldPropsOrFormItemProps } from '@ant-design/pro-utils';
import get from "rc-util/es/utils/get";
import { stringify } from 'use-json-comparison';
import ProSkeleton from '@ant-design/pro-skeleton';
import useFetchData from './useFetchData';
import './index.less';
/**
 * 根据 dataIndex 获取值，支持 dataIndex 为数组
 *
 * @param item
 * @param entity
 */

var getDataFromConfig = function getDataFromConfig(item, entity) {
  var dataIndex = item.dataIndex;

  if (dataIndex) {
    var data = Array.isArray(dataIndex) ? get(entity, dataIndex) : entity[dataIndex];

    if (data !== undefined || data !== null) {
      return data;
    }
  }

  return item.children;
};
/**
 * 这里会处理编辑的功能
 *
 * @param props
 */


export var FieldRender = function FieldRender(props) {
  var valueEnum = props.valueEnum,
      action = props.action,
      index = props.index,
      text = props.text,
      entity = props.entity,
      mode = props.mode,
      render = props.render,
      editableUtils = props.editableUtils,
      valueType = props.valueType,
      plain = props.plain,
      dataIndex = props.dataIndex,
      request = props.request,
      renderFormItem = props.renderFormItem,
      params = props.params;
  var fieldConfig = {
    text: text,
    valueEnum: valueEnum,
    mode: mode || 'read',
    proFieldProps: {
      render: render ? function () {
        return render === null || render === void 0 ? void 0 : render(text, entity, index, action, _objectSpread(_objectSpread({}, props), {}, {
          type: 'descriptions'
        }));
      } : undefined
    },
    ignoreFormItem: true,
    valueType: valueType,
    request: request,
    params: params,
    plain: plain
  };
  /** 如果是只读模式，fieldProps 的 form是空的，所以需要兜底处理 */

  if (mode === 'read' || !mode || valueType === 'option') {
    var fieldProps = getFieldPropsOrFormItemProps(props.fieldProps, undefined, _objectSpread(_objectSpread({}, props), {}, {
      rowKey: dataIndex,
      isEditable: false
    }));
    return /*#__PURE__*/React.createElement(ProFormField, _extends({}, fieldConfig, {
      fieldProps: fieldProps
    }));
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '-5px 0'
    }
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    noStyle: true,
    shouldUpdate: true
  }, function (form) {
    var _editableUtils$action;

    var formItemProps = getFieldPropsOrFormItemProps(props.formItemProps, form, _objectSpread(_objectSpread({}, props), {}, {
      rowKey: dataIndex,
      isEditable: true
    }));
    var fieldProps = getFieldPropsOrFormItemProps(props.fieldProps, form, _objectSpread(_objectSpread({}, props), {}, {
      rowKey: dataIndex,
      isEditable: true
    }));
    var dom = renderFormItem ? renderFormItem === null || renderFormItem === void 0 ? void 0 : renderFormItem(_objectSpread(_objectSpread({}, props), {}, {
      type: 'descriptions'
    }), {
      isEditable: true,
      recordKey: dataIndex,
      record: form.getFieldValue([dataIndex].flat(1)),
      defaultRender: function defaultRender() {
        return /*#__PURE__*/React.createElement(ProFormField, _extends({}, fieldConfig, {
          fieldProps: fieldProps
        }));
      },
      type: 'descriptions'
    }, form) : undefined;
    return /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement(InlineErrorFormItem, _extends({
      style: {
        margin: 0
      },
      name: dataIndex
    }, formItemProps, {
      initialValue: text || (formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.initialValue)
    }), dom || /*#__PURE__*/React.createElement(ProFormField, _extends({}, fieldConfig, {
      // @ts-ignore
      proFieldProps: _objectSpread({}, fieldConfig.proFieldProps),
      fieldProps: fieldProps
    }))), editableUtils === null || editableUtils === void 0 ? void 0 : (_editableUtils$action = editableUtils.actionRender) === null || _editableUtils$action === void 0 ? void 0 : _editableUtils$action.call(editableUtils, dataIndex || index, form, {
      cancelText: /*#__PURE__*/React.createElement(CloseOutlined, null),
      saveText: /*#__PURE__*/React.createElement(CheckOutlined, null),
      deleteText: false
    }));
  }));
};

var schemaToDescriptionsItem = function schemaToDescriptionsItem(items, entity, action, editableUtils) {
  var _items$map;

  var options = []; // 因为 Descriptions 只是个语法糖，children 是不会执行的，所以需要这里处理一下

  var children = items === null || items === void 0 ? void 0 : (_items$map = items.map) === null || _items$map === void 0 ? void 0 : _items$map.call(items, function (item, index) {
    var _restItem$label;

    if ( /*#__PURE__*/React.isValidElement(item)) {
      return item;
    }

    var valueEnum = item.valueEnum,
        render = item.render,
        renderText = item.renderText,
        mode = item.mode,
        plain = item.plain,
        dataIndex = item.dataIndex,
        request = item.request,
        params = item.params,
        editable = item.editable,
        restItem = _objectWithoutProperties(item, ["valueEnum", "render", "renderText", "mode", "plain", "dataIndex", "request", "params", "editable"]);

    var title = typeof restItem.title === 'function' ? restItem.title(item, 'descriptions', restItem.title) : restItem.title;
    var defaultData = getDataFromConfig(item, entity);
    var text = renderText ? renderText(defaultData, entity, index, action) : defaultData; //  dataIndex 无所谓是否存在
    // 有些时候不需要 dataIndex 可以直接 render

    var valueType = typeof restItem.valueType === 'function' ? restItem.valueType(entity || {}, 'descriptions') : restItem.valueType;
    var isEditable = editableUtils === null || editableUtils === void 0 ? void 0 : editableUtils.isEditable(dataIndex || index);
    var fieldMode = mode || isEditable ? 'edit' : 'read';
    var showEditIcon = editableUtils && fieldMode === 'read' && editable !== false && (editable === null || editable === void 0 ? void 0 : editable(text, entity, index)) !== false;
    var Component = showEditIcon ? _Space : React.Fragment;
    var field = /*#__PURE__*/React.createElement(_Descriptions.Item, _extends({}, restItem, {
      key: ((_restItem$label = restItem.label) === null || _restItem$label === void 0 ? void 0 : _restItem$label.toString()) || index,
      label: /*#__PURE__*/React.createElement(LabelIconTip, {
        label: title || restItem.label,
        tooltip: restItem.tooltip || restItem.tip
      })
    }), /*#__PURE__*/React.createElement(Component, null, /*#__PURE__*/React.createElement(FieldRender, _extends({}, item, {
      mode: fieldMode,
      text: text,
      valueType: valueType,
      entity: entity,
      index: index,
      action: action,
      editableUtils: editableUtils
    })), showEditIcon && valueType !== 'option' && /*#__PURE__*/React.createElement(EditOutlined, {
      onClick: function onClick() {
        editableUtils === null || editableUtils === void 0 ? void 0 : editableUtils.startEditable(dataIndex || index);
      }
    }))); // 如果类型是 option 自动放到右上角

    if (valueType === 'option') {
      options.push(field);
      return null;
    }

    return field;
  });
  return {
    // 空数组传递还是会被判定为有值
    options: (options === null || options === void 0 ? void 0 : options.length) ? options : null,
    children: children
  };
};

var ProDescriptionsItem = function ProDescriptionsItem(props) {
  return /*#__PURE__*/React.createElement(_Descriptions.Item, props, props.children);
};

var ProDescriptions = function ProDescriptions(props) {
  var _props$editable;

  var request = props.request,
      columns = props.columns,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      dataSource = props.dataSource,
      onDataSourceChange = props.onDataSourceChange,
      formProps = props.formProps,
      editable = props.editable,
      loading = props.loading,
      onLoadingChange = props.onLoadingChange,
      actionRef = props.actionRef,
      onRequestError = props.onRequestError,
      rest = _objectWithoutProperties(props, ["request", "columns", "params", "dataSource", "onDataSourceChange", "formProps", "editable", "loading", "onLoadingChange", "actionRef", "onRequestError"]);

  var context = useContext(_ConfigProvider.ConfigContext);
  var action = useFetchData( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!request) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return request(params);

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = {
              data: {}
            };

          case 7:
            data = _context.t0;
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    onRequestError: onRequestError,
    effects: [stringify(params)],
    manual: !request,
    dataSource: dataSource,
    loading: loading,
    onLoadingChange: onLoadingChange,
    onDataSourceChange: onDataSourceChange
  });
  /*
   * 可编辑行的相关配置
   */

  var editableUtils = useEditableMap(_objectSpread(_objectSpread({}, props.editable), {}, {
    childrenColumnName: undefined,
    dataSource: action.dataSource,
    setDataSource: action.setDataSource
  }));
  /** 支持 reload 的功能 */

  useEffect(function () {
    if (actionRef) {
      actionRef.current = _objectSpread({
        reload: action.reload
      }, editableUtils);
    }
  }, [action, actionRef, editableUtils]); // loading 时展示
  // loading =  undefined 但是 request 存在时也应该展示

  if (action.loading || action.loading === undefined && request) {
    return /*#__PURE__*/React.createElement(ProSkeleton, {
      type: "descriptions",
      list: false,
      pageHeader: false
    });
  }

  var getColumns = function getColumns() {
    // 因为 Descriptions 只是个语法糖，children 是不会执行的，所以需要这里处理一下
    var childrenColumns = toArray(props.children).map(function (item) {
      var _item$props = item.props,
          valueEnum = _item$props.valueEnum,
          valueType = _item$props.valueType,
          dataIndex = _item$props.dataIndex,
          itemRequest = _item$props.request;

      if (!valueType && !valueEnum && !dataIndex && !itemRequest) {
        return item;
      }

      return item.props;
    });
    return [].concat(_toConsumableArray(columns || []), _toConsumableArray(childrenColumns)).filter(function (item) {
      if (['index', 'indexBorder'].includes(item.valueType)) {
        return false;
      }

      return !item.hideInDescriptions;
    }).sort(function (a, b) {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }

      return (b.index || 0) - (a.index || 0);
    });
  };

  var _schemaToDescriptions = schemaToDescriptionsItem(getColumns(), action.dataSource || {}, (actionRef === null || actionRef === void 0 ? void 0 : actionRef.current) || action, editable ? editableUtils : undefined),
      options = _schemaToDescriptions.options,
      children = _schemaToDescriptions.children;
  /** 如果不是可编辑模式，没必要注入 ProForm */


  var FormComponent = editable ? ProForm : function (dom) {
    return dom.children;
  };
  /** 即使组件返回null了, 在传递的过程中还是会被Description检测到为有值 */

  var title = null;

  if (rest.title || rest.tooltip || rest.tip) {
    title = /*#__PURE__*/React.createElement(LabelIconTip, {
      label: rest.title,
      tooltip: rest.tooltip || rest.tip
    });
  }

  var className = context.getPrefixCls('pro-descriptions');
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(FormComponent, _extends({
    form: (_props$editable = props.editable) === null || _props$editable === void 0 ? void 0 : _props$editable.form,
    component: false,
    submitter: false
  }, formProps, {
    onFinish: undefined
  }), /*#__PURE__*/React.createElement(_Descriptions, _extends({
    className: className
  }, rest, {
    extra: rest.extra ? /*#__PURE__*/React.createElement(_Space, null, options, rest.extra) : options,
    title: title
  }), children)));
};

ProDescriptions.Item = ProDescriptionsItem;
export default ProDescriptions;