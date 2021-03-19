import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useMemo } from 'react';
import omit from 'omit.js';
import { DeleteOutlined, PlusOutlined, CopyOutlined } from '@ant-design/icons';
import './index.less';
var FormListContext = /*#__PURE__*/React.createContext({});

var ProFormList = function ProFormList(_ref) {
  var children = _ref.children,
      actionRender = _ref.actionRender,
      creatorButtonProps = _ref.creatorButtonProps,
      label = _ref.label,
      tooltip = _ref.tooltip,
      creatorRecord = _ref.creatorRecord,
      itemRender = _ref.itemRender,
      rest = _objectWithoutProperties(_ref, ["children", "actionRender", "creatorButtonProps", "label", "tooltip", "creatorRecord", "itemRender"]);

  var context = useContext(_ConfigProvider.ConfigContext);
  var listContext = useContext(FormListContext);
  var baseClassName = context.getPrefixCls('pro-form-list'); // 处理 list 的嵌套

  var name = useMemo(function () {
    if (listContext.fieldKey === undefined) {
      return rest.name;
    }

    return [listContext.fieldKey, rest.name].flat(1);
  }, [listContext.fieldKey, rest.name]);
  return /*#__PURE__*/React.createElement(_Form.Item, {
    label: label,
    tooltip: tooltip,
    shouldUpdate: true
  }, function (_ref2) {
    var getFieldValue = _ref2.getFieldValue;
    return /*#__PURE__*/React.createElement("div", {
      className: baseClassName
    }, /*#__PURE__*/React.createElement(_Form.List, _extends({}, rest, {
      name: name
    }), function (fields, action, meta) {
      var creatorButton = creatorButtonProps !== false && /*#__PURE__*/React.createElement(_Button, _extends({
        className: "".concat(baseClassName, "-creator-button-").concat((creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) || 'bottom'),
        type: "dashed",
        block: true,
        icon: /*#__PURE__*/React.createElement(PlusOutlined, null)
      }, omit(creatorButtonProps || {}, ['position', 'creatorButtonText']), {
        onClick: function onClick() {
          var index;
          if ((creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) === 'top') index = 0;
          action.add(creatorRecord, index);
        }
      }), (creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.creatorButtonText) || '添加一行数据');

      if (typeof children === 'function') {
        return children(fields, action, meta);
      }

      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: 'max-content'
        }
      }, creatorButtonProps !== false && (creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) === 'top' && creatorButton, fields.map(function (field) {
        var defaultActionDom = [/*#__PURE__*/React.createElement(_Tooltip, {
          title: "\u590D\u5236\u6B64\u884C",
          key: "copy"
        }, /*#__PURE__*/React.createElement(CopyOutlined, {
          className: "".concat(baseClassName, "-action-icon"),
          onClick: function onClick() {
            action.add(getFieldValue([rest.name, field.key].flat(1)));
          }
        })), /*#__PURE__*/React.createElement(_Tooltip, {
          title: "\u5220\u9664\u6B64\u884C",
          key: "delete"
        }, /*#__PURE__*/React.createElement(DeleteOutlined, {
          className: "".concat(baseClassName, "-action-icon"),
          onClick: function onClick() {
            return action.remove(field.name);
          }
        }))];
        var dom = /*#__PURE__*/React.createElement("div", {
          className: "".concat(baseClassName, "-action")
        }, (actionRender === null || actionRender === void 0 ? void 0 : actionRender(field, action, defaultActionDom)) || defaultActionDom);
        var contentDom = (itemRender === null || itemRender === void 0 ? void 0 : itemRender({
          listDom: /*#__PURE__*/React.createElement("div", {
            className: "".concat(baseClassName, "-container")
          }, children),
          action: dom
        }, {
          field: field,
          record: getFieldValue([rest.name, field.key].flat(1)),
          fields: fields,
          operation: action,
          meta: meta
        })) || /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-end'
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(baseClassName, "-container")
        }, children), dom);
        return /*#__PURE__*/React.createElement(FormListContext.Provider, {
          key: field.name,
          value: _objectSpread(_objectSpread({}, field), {}, {
            listName: rest.name
          })
        }, contentDom);
      }), creatorButtonProps !== false && (creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) !== 'top' && creatorButton);
    }));
  });
};

export { FormListContext };
export default ProFormList;