"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/popover/style");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/tree/style");

var _tree = _interopRequireDefault(require("antd/es/tree"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _proProvider = require("@ant-design/pro-provider");

var _icons = require("@ant-design/icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _container = _interopRequireDefault(require("../../container"));

require("./index.less");

var _DragIcon = _interopRequireDefault(require("./DragIcon"));

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToolTipIcon = function ToolTipIcon(_ref) {
  var title = _ref.title,
      show = _ref.show,
      children = _ref.children,
      columnKey = _ref.columnKey,
      fixed = _ref.fixed;

  var _Container$useContain = _container.default.useContainer(),
      columnsMap = _Container$useContain.columnsMap,
      setColumnsMap = _Container$useContain.setColumnsMap;

  if (!show) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: title
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      var config = columnsMap[columnKey] || {};

      var columnKeyMap = _objectSpread(_objectSpread({}, columnsMap), {}, _defineProperty({}, columnKey, _objectSpread(_objectSpread({}, config), {}, {
        fixed: fixed
      })));

      setColumnsMap(columnKeyMap);
    }
  }, children));
};

var CheckboxListItem = function CheckboxListItem(_ref2) {
  var columnKey = _ref2.columnKey,
      title = _ref2.title,
      className = _ref2.className,
      fixed = _ref2.fixed;
  var intl = (0, _proProvider.useIntl)();
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(className, "-list-item"),
    key: columnKey
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-list-item-title")
  }, title), /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(className, "-list-item-option")
  }, /*#__PURE__*/_react.default.createElement(ToolTipIcon, {
    columnKey: columnKey,
    fixed: "left",
    title: intl.getMessage('tableToolBar.leftPin', '固定在列首'),
    show: fixed !== 'left'
  }, /*#__PURE__*/_react.default.createElement(_icons.VerticalAlignTopOutlined, null)), /*#__PURE__*/_react.default.createElement(ToolTipIcon, {
    columnKey: columnKey,
    fixed: undefined,
    title: intl.getMessage('tableToolBar.noPin', '不固定'),
    show: !!fixed
  }, /*#__PURE__*/_react.default.createElement(_icons.VerticalAlignMiddleOutlined, null)), /*#__PURE__*/_react.default.createElement(ToolTipIcon, {
    columnKey: columnKey,
    fixed: "right",
    title: intl.getMessage('tableToolBar.rightPin', '固定在列尾'),
    show: fixed !== 'right'
  }, /*#__PURE__*/_react.default.createElement(_icons.VerticalAlignBottomOutlined, null))));
};

var CheckboxList = function CheckboxList(_ref3) {
  var list = _ref3.list,
      draggable = _ref3.draggable,
      checkable = _ref3.checkable,
      className = _ref3.className,
      _ref3$showTitle = _ref3.showTitle,
      showTitle = _ref3$showTitle === void 0 ? true : _ref3$showTitle,
      listTitle = _ref3.title;

  var _Container$useContain2 = _container.default.useContainer(),
      columnsMap = _Container$useContain2.columnsMap,
      setColumnsMap = _Container$useContain2.setColumnsMap,
      sortKeyColumns = _Container$useContain2.sortKeyColumns,
      setSortKeyColumns = _Container$useContain2.setSortKeyColumns;

  var show = list && list.length > 0;

  if (!show) {
    return null;
  }

  var move = function move(id, targetId, dropPosition) {
    var newMap = _objectSpread({}, columnsMap);

    var newColumns = _toConsumableArray(sortKeyColumns.current);

    var findIndex = newColumns.findIndex(function (columnKey) {
      return columnKey === id;
    });
    var targetIndex = newColumns.findIndex(function (columnKey) {
      return columnKey === targetId;
    });
    var isDownWord = dropPosition > findIndex;

    if (findIndex < 0) {
      return;
    }

    var targetItem = newColumns[findIndex];
    newColumns.splice(findIndex, 1);

    if (dropPosition === 0) {
      newColumns.unshift(targetItem);
    } else {
      newColumns.splice(isDownWord ? targetIndex : targetIndex + 1, 0, targetItem);
    } // 重新生成排序数组


    newColumns.forEach(function (key, order) {
      newMap[key] = _objectSpread(_objectSpread({}, newMap[key] || {}), {}, {
        order: order
      });
    }); // 更新数组

    setColumnsMap(newMap);
    setSortKeyColumns(newColumns);
  };

  var checkedKeys = [];
  var treeData = list.map(function (_ref4) {
    var key = _ref4.key,
        dataIndex = _ref4.dataIndex,
        rest = _objectWithoutProperties(_ref4, ["key", "dataIndex"]);

    var columnKey = (0, _utils.genColumnKey)(key, rest.index);
    var config = columnsMap[columnKey || 'null'] || {
      show: true
    };

    if (config.show !== false) {
      checkedKeys.push(columnKey);
    }

    return _objectSpread(_objectSpread({
      key: columnKey
    }, rest), {}, {
      selectable: false,
      switcherIcon: /*#__PURE__*/_react.default.createElement(_DragIcon.default, null)
    });
  });

  var listDom = /*#__PURE__*/_react.default.createElement(_tree.default, {
    itemHeight: 24,
    draggable: draggable,
    checkable: checkable,
    onDrop: function onDrop(info) {
      var dropKey = info.node.key;
      var dragKey = info.dragNode.key;
      var dropPosition = info.dropPosition,
          dropToGap = info.dropToGap;
      var position = dropPosition === -1 || !dropToGap ? dropPosition + 1 : dropPosition;
      move(dragKey, dropKey, position);
    },
    blockNode: true,
    onCheck: function onCheck(_, e) {
      var columnKey = e.node.key;
      var tempConfig = columnsMap[columnKey] || {};

      var newSetting = _objectSpread({}, tempConfig);

      if (e.checked) {
        delete newSetting.show;
      } else {
        newSetting.show = false;
      }

      var columnKeyMap = _objectSpread(_objectSpread({}, columnsMap), {}, _defineProperty({}, columnKey, newSetting)); // 如果没有值了，直接干掉他


      if (Object.keys(newSetting).length === 0) {
        delete columnKeyMap[columnKey];
      }

      setColumnsMap(columnKeyMap);
    },
    checkedKeys: checkedKeys,
    showLine: false,
    titleRender: function titleRender(node) {
      return /*#__PURE__*/_react.default.createElement(CheckboxListItem, _extends({
        className: className
      }, node, {
        columnKey: node.key
      }));
    },
    height: 280,
    treeData: treeData
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showTitle && /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(className, "-list-title")
  }, listTitle), listDom);
};

var GroupCheckboxList = function GroupCheckboxList(_ref5) {
  var localColumns = _ref5.localColumns,
      className = _ref5.className,
      draggable = _ref5.draggable,
      checkable = _ref5.checkable;
  var rightList = [];
  var leftList = [];
  var list = [];
  var intl = (0, _proProvider.useIntl)();
  localColumns.forEach(function (item) {
    var fixed = item.fixed;

    if (fixed === 'left') {
      leftList.push(item);
      return;
    }

    if (fixed === 'right') {
      rightList.push(item);
      return;
    }
    /** 不在 setting 中展示的 */


    if (item.hideInSetting) {
      return;
    }

    list.push(item);
  });
  var showRight = rightList && rightList.length > 0;
  var showLeft = leftList && leftList.length > 0;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(className, "-list"), _defineProperty({}, "".concat(className, "-list-group"), showRight || showLeft))
  }, /*#__PURE__*/_react.default.createElement(CheckboxList, {
    title: intl.getMessage('tableToolBar.leftFixedTitle', '固定在左侧'),
    list: leftList,
    draggable: draggable,
    checkable: checkable,
    className: className
  }), /*#__PURE__*/_react.default.createElement(CheckboxList, {
    list: list,
    draggable: draggable,
    checkable: checkable,
    title: intl.getMessage('tableToolBar.noFixedTitle', '不固定'),
    showTitle: showLeft || showRight,
    className: className
  }), /*#__PURE__*/_react.default.createElement(CheckboxList, {
    title: intl.getMessage('tableToolBar.rightFixedTitle', '固定在右侧'),
    list: rightList,
    draggable: draggable,
    checkable: checkable,
    className: className
  }));
};

function ColumnSetting(props) {
  var _props$checkable, _props$draggable;

  var columnRef = (0, _react.useRef)({});

  var counter = _container.default.useContainer();

  var localColumns = props.columns;
  var columnsMap = counter.columnsMap,
      setColumnsMap = counter.setColumnsMap;
  (0, _react.useEffect)(function () {
    if (columnsMap) {
      columnRef.current = JSON.parse(JSON.stringify(columnsMap));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  /**
   * 设置全部选中，或全部未选中
   *
   * @param show
   */

  var setAllSelectAction = function setAllSelectAction() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var columnKeyMap = {};
    localColumns.forEach(function (_ref6) {
      var key = _ref6.key,
          fixed = _ref6.fixed,
          index = _ref6.index;
      var columnKey = (0, _utils.genColumnKey)(key, index);

      if (columnKey) {
        columnKeyMap[columnKey] = {
          show: show,
          fixed: fixed
        };
      }
    });
    setColumnsMap(columnKeyMap);
  }; // 选中的 key 列表


  var selectedKeys = Object.values(columnsMap).filter(function (value) {
    return !value || value.show === false;
  }); // 是否已经选中

  var indeterminate = selectedKeys.length > 0 && selectedKeys.length !== localColumns.length;
  var intl = (0, _proProvider.useIntl)();

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-column-setting');
  return /*#__PURE__*/_react.default.createElement(_popover.default, {
    arrowPointAtCenter: true,
    title: /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-title")
    }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
      indeterminate: indeterminate,
      checked: selectedKeys.length === 0 && selectedKeys.length !== localColumns.length,
      onChange: function onChange(e) {
        if (e.target.checked) {
          setAllSelectAction();
        } else {
          setAllSelectAction(false);
        }
      }
    }, intl.getMessage('tableToolBar.columnDisplay', '列展示')), /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        setColumnsMap(columnRef.current);
      }
    }, intl.getMessage('tableToolBar.reset', '重置'))),
    overlayClassName: "".concat(className, "-overlay"),
    trigger: "click",
    placement: "bottomRight",
    content: /*#__PURE__*/_react.default.createElement(GroupCheckboxList, {
      checkable: (_props$checkable = props.checkable) !== null && _props$checkable !== void 0 ? _props$checkable : true,
      draggable: (_props$draggable = props.draggable) !== null && _props$draggable !== void 0 ? _props$draggable : true,
      className: className,
      localColumns: localColumns
    })
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: intl.getMessage('tableToolBar.columnSetting', '列设置')
  }, /*#__PURE__*/_react.default.createElement(_icons.SettingOutlined, null)));
}

var _default = ColumnSetting;
exports.default = _default;