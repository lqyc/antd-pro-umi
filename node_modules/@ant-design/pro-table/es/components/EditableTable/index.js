import "antd/es/button/style";
import _Button from "antd/es/button";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext, useImperativeHandle, useMemo, useRef } from 'react';
import useMergedState from "rc-util/es/hooks/useMergedState";
import { PlusOutlined } from '@ant-design/icons';
import { runFunction } from '@ant-design/pro-utils';
import ProTable from '../../Table';
var EditableTableActionContext = /*#__PURE__*/React.createContext(undefined);
/** 可编辑表格的按钮 */

function RecordCreator(props) {
  var children = props.children,
      record = props.record,
      position = props.position,
      newRecordType = props.newRecordType;
  var actionRef = useContext(EditableTableActionContext);
  return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, children.props), {}, {
    onClick: function onClick(e) {
      var _actionRef$current, _children$props$onCli, _children$props;

      actionRef === null || actionRef === void 0 ? void 0 : (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.addEditRecord(record, {
        position: position,
        newRecordType: newRecordType
      });
      (_children$props$onCli = (_children$props = children.props).onClick) === null || _children$props$onCli === void 0 ? void 0 : _children$props$onCli.call(_children$props, e);
    }
  }));
}
/**
 * 可以直接放到 Form 中的可编辑表格
 *
 * @param props
 */


function EditableTable(props) {
  var _props$editable;

  var onTableChange = props.onTableChange,
      maxLength = props.maxLength,
      recordCreatorProps = props.recordCreatorProps,
      rest = _objectWithoutProperties(props, ["onTableChange", "maxLength", "recordCreatorProps"]);

  var actionRef = useRef();
  useImperativeHandle(rest.actionRef, function () {
    return actionRef.current;
  }, [actionRef.current]);

  var _useMergedState = useMergedState(function () {
    return props.value || [];
  }, {
    value: props.value,
    onChange: props.onChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var _ref = recordCreatorProps || {},
      record = _ref.record,
      position = _ref.position,
      creatorButtonText = _ref.creatorButtonText,
      newRecordType = _ref.newRecordType,
      restButtonProps = _objectWithoutProperties(_ref, ["record", "position", "creatorButtonText", "newRecordType"]);

  var isTop = position === 'top';
  var creatorButtonDom = useMemo(function () {
    if (maxLength && maxLength <= (value === null || value === void 0 ? void 0 : value.length)) {
      return false;
    }

    return recordCreatorProps !== false && /*#__PURE__*/React.createElement(RecordCreator, {
      record: runFunction(record, value.length) || {},
      position: position,
      newRecordType: newRecordType
    }, /*#__PURE__*/React.createElement(_Button, _extends({
      type: "dashed",
      style: {
        display: 'block',
        margin: '10px 0',
        width: '100%'
      },
      icon: /*#__PURE__*/React.createElement(PlusOutlined, null)
    }, restButtonProps), creatorButtonText || '添加一行数据'));
  }, [recordCreatorProps, maxLength, value.length]);
  var buttonRenderProps = useMemo(function () {
    if (!creatorButtonDom) {
      return {};
    }

    if (isTop) {
      return {
        components: {
          header: {
            wrapper: function wrapper(_ref2) {
              var _rest$columns;

              var className = _ref2.className,
                  children = _ref2.children;
              return /*#__PURE__*/React.createElement("thead", {
                className: className
              }, children, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
                colSpan: (_rest$columns = rest.columns) === null || _rest$columns === void 0 ? void 0 : _rest$columns.length
              }, creatorButtonDom)));
            }
          }
        }
      };
    }

    return {
      tableViewRender: function tableViewRender(_, dom) {
        var _props$tableViewRende, _props$tableViewRende2;

        return /*#__PURE__*/React.createElement(React.Fragment, null, (_props$tableViewRende = (_props$tableViewRende2 = props.tableViewRender) === null || _props$tableViewRende2 === void 0 ? void 0 : _props$tableViewRende2.call(props, _, dom)) !== null && _props$tableViewRende !== void 0 ? _props$tableViewRende : dom, creatorButtonDom);
      }
    };
  }, [isTop, creatorButtonDom]);
  return /*#__PURE__*/React.createElement(EditableTableActionContext.Provider, {
    value: actionRef
  }, /*#__PURE__*/React.createElement(ProTable, _extends({
    search: false,
    options: false,
    pagination: false
  }, rest, buttonRenderProps, {
    tableLayout: "fixed",
    actionRef: actionRef,
    onChange: onTableChange,
    dataSource: value,
    editable: _objectSpread(_objectSpread({}, props.editable), {}, {
      onValuesChange: (props === null || props === void 0 ? void 0 : props.onValuesChange) || ((_props$editable = props.editable) === null || _props$editable === void 0 ? void 0 : _props$editable.onValuesChange) ? function (r, dataSource) {
        var _props$editable2, _props$editable2$onVa, _props$onValuesChange;

        (_props$editable2 = props.editable) === null || _props$editable2 === void 0 ? void 0 : (_props$editable2$onVa = _props$editable2.onValuesChange) === null || _props$editable2$onVa === void 0 ? void 0 : _props$editable2$onVa.call(_props$editable2, r, dataSource);
        (_props$onValuesChange = props.onValuesChange) === null || _props$onValuesChange === void 0 ? void 0 : _props$onValuesChange.call(props, dataSource, r);
      } : undefined
    }),
    onDataSourceChange: setValue
  })));
}

EditableTable.RecordCreator = RecordCreator;
export default EditableTable;