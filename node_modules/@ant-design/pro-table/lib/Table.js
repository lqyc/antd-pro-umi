"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/card/style");

var _card = _interopRequireDefault(require("antd/es/card"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

var _react = _interopRequireWildcard(require("react"));

var _proProvider = require("@ant-design/pro-provider");

var _classnames = _interopRequireDefault(require("classnames"));

var _useJsonComparison = require("use-json-comparison");

var _proUtils = require("@ant-design/pro-utils");

var _omit = _interopRequireDefault(require("omit.js"));

var _useFetchData = _interopRequireDefault(require("./useFetchData"));

var _container = _interopRequireDefault(require("./container"));

var _ToolBar = _interopRequireDefault(require("./components/ToolBar"));

var _Alert = _interopRequireDefault(require("./components/Alert"));

var _Form2 = _interopRequireDefault(require("./components/Form"));

var _utils = require("./utils");

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var isBordered = function isBordered(borderType, border) {
  if (border === undefined) {
    return false;
  } // debugger


  if (typeof border === 'boolean') {
    return border;
  }

  return border[borderType];
};
/**
 * 🏆 Use Ant Design Table like a Pro! 更快 更好 更方便
 *
 * @param props
 */


var ProTable = function ProTable(props) {
  var _props$expandable, _props$columns2, _props$editable2;

  var cardBordered = props.cardBordered,
      request = props.request,
      propsClassName = props.className,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      defaultData = props.defaultData,
      headerTitle = props.headerTitle,
      postData = props.postData,
      propsPagination = props.pagination,
      propsActionRef = props.actionRef,
      _props$columns = props.columns,
      propsColumns = _props$columns === void 0 ? [] : _props$columns,
      toolBarRender = props.toolBarRender,
      onLoad = props.onLoad,
      onRequestError = props.onRequestError,
      style = props.style,
      cardProps = props.cardProps,
      tableStyle = props.tableStyle,
      tableClassName = props.tableClassName,
      columnsStateMap = props.columnsStateMap,
      onColumnsStateChange = props.onColumnsStateChange,
      options = props.options,
      search = props.search,
      onLoadingChange = props.onLoadingChange,
      _props$rowSelection = props.rowSelection,
      propsRowSelection = _props$rowSelection === void 0 ? false : _props$rowSelection,
      _props$beforeSearchSu = props.beforeSearchSubmit,
      beforeSearchSubmit = _props$beforeSearchSu === void 0 ? function (searchParams) {
    return searchParams;
  } : _props$beforeSearchSu,
      tableAlertRender = props.tableAlertRender,
      defaultClassName = props.defaultClassName,
      propRef = props.formRef,
      _props$type = props.type,
      type = _props$type === void 0 ? 'table' : _props$type,
      _props$columnEmptyTex = props.columnEmptyText,
      columnEmptyText = _props$columnEmptyTex === void 0 ? '-' : _props$columnEmptyTex,
      toolbar = props.toolbar,
      rowKey = props.rowKey,
      manualRequest = props.manualRequest,
      polling = props.polling,
      rest = _objectWithoutProperties(props, ["cardBordered", "request", "className", "params", "defaultData", "headerTitle", "postData", "pagination", "actionRef", "columns", "toolBarRender", "onLoad", "onRequestError", "style", "cardProps", "tableStyle", "tableClassName", "columnsStateMap", "onColumnsStateChange", "options", "search", "onLoadingChange", "rowSelection", "beforeSearchSubmit", "tableAlertRender", "defaultClassName", "formRef", "type", "columnEmptyText", "toolbar", "rowKey", "manualRequest", "polling"]);

  var actionRef = (0, _react.useRef)();
  var defaultFormRef = (0, _react.useRef)();
  var formRef = propRef || defaultFormRef;
  (0, _react.useEffect)(function () {
    if (typeof propsActionRef === 'function' && actionRef.current) {
      propsActionRef(actionRef.current);
    }
  }, [propsActionRef]);

  var _useMountMergeState = (0, _proUtils.useMountMergeState)([], {
    value: propsRowSelection ? propsRowSelection.selectedRowKeys : undefined
  }),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      selectedRowKeys = _useMountMergeState2[0],
      setSelectedRowKeys = _useMountMergeState2[1];

  var _useMountMergeState3 = (0, _proUtils.useMountMergeState)([]),
      _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
      selectedRows = _useMountMergeState4[0],
      setSelectedRows = _useMountMergeState4[1];

  var setSelectedRowsAndKey = (0, _react.useCallback)(function (keys, rows) {
    setSelectedRowKeys(keys);
    setSelectedRows(rows);
  }, [setSelectedRowKeys, setSelectedRows]);

  var _useMountMergeState5 = (0, _proUtils.useMountMergeState)(function () {
    // 如果手动模式，或者 search 不存在的时候设置为 undefined
    // undefined 就不会触发首次加载
    if (manualRequest || search !== false) {
      return undefined;
    }

    return {};
  }),
      _useMountMergeState6 = _slicedToArray(_useMountMergeState5, 2),
      formSearch = _useMountMergeState6[0],
      setFormSearch = _useMountMergeState6[1];

  var manual = (0, _react.useMemo)(function () {
    //  formSearch = undefined  满足条件就不触发加载
    if (formSearch === undefined) {
      return true;
    }

    return false;
  }, [formSearch === undefined, search]);

  var _useMountMergeState7 = (0, _proUtils.useMountMergeState)({}),
      _useMountMergeState8 = _slicedToArray(_useMountMergeState7, 2),
      proFilter = _useMountMergeState8[0],
      setProFilter = _useMountMergeState8[1];

  var _useMountMergeState9 = (0, _proUtils.useMountMergeState)({}),
      _useMountMergeState10 = _slicedToArray(_useMountMergeState9, 2),
      proSort = _useMountMergeState10[0],
      setProSort = _useMountMergeState10[1];
  /** 获取 table 的 dom ref */


  var rootRef = (0, _react.useRef)(null);
  var intl = (0, _proProvider.useIntl)();
  /** 需要初始化 不然默认可能报错 这里取了 defaultCurrent 和 current 为了保证不会重复刷新 */

  var fetchPagination = _typeof(propsPagination) === 'object' ? propsPagination : {
    defaultCurrent: 1,
    defaultPageSize: 20,
    pageSize: 20,
    current: 1
  }; // ============================ useFetchData ============================

  var action = (0, _useFetchData.default)(request ? /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageParams) {
      var actionParams, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              actionParams = _objectSpread(_objectSpread(_objectSpread({}, pageParams || {}), formSearch), params); // eslint-disable-next-line no-underscore-dangle

              delete actionParams._timestamp;
              _context.next = 4;
              return request(actionParams, proSort, proFilter);

            case 4:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }() : undefined, defaultData, {
    pageInfo: propsPagination === false ? false : fetchPagination,
    loading: props.loading,
    dataSource: props.dataSource,
    onDataSourceChange: props.onDataSourceChange,
    onLoad: onLoad,
    onLoadingChange: onLoadingChange,
    onRequestError: onRequestError,
    postData: postData,
    manual: manual,
    polling: polling,
    effects: [(0, _useJsonComparison.stringify)(params), (0, _useJsonComparison.stringify)(formSearch), (0, _useJsonComparison.stringify)(proFilter), (0, _useJsonComparison.stringify)(proSort)],
    debounceTime: props.debounceTime
  }); // ============================ END ============================

  /** 页面编辑的计算 */

  var pagination = (0, _react.useMemo)(function () {
    return (0, _utils.mergePagination)(propsPagination, _objectSpread(_objectSpread({}, action.pageInfo), {}, {
      setPageInfo: function setPageInfo(_ref2) {
        var pageSize = _ref2.pageSize,
            current = _ref2.current;

        // pageSize 发生改变，并且你不是在第一页，切回到第一页
        // 这样可以防止出现 跳转到一个空的数据页的问题
        if (pageSize !== action.pageInfo.pageSize && // 当前页码
        action.pageInfo.current !== 1) {
          action.setDataSource([]);
          requestAnimationFrame(function () {
            action.setPageInfo({
              pageSize: pageSize,
              current: 1
            });
          });
        }

        action.setPageInfo({
          pageSize: pageSize,
          current: current
        });
      }
    }), intl);
  }, [propsPagination, action, intl]);

  var counter = _container.default.useContainer();
  /** 清空所有的选中项 */


  var _onCleanSelected = (0, _react.useCallback)(function () {
    if (propsRowSelection && propsRowSelection.onChange) {
      propsRowSelection.onChange([], []);
    }

    setSelectedRowsAndKey([], []);
  }, [propsRowSelection, setSelectedRowsAndKey]);

  counter.setAction(actionRef.current);
  counter.propsRef.current = props; // ============================ RowKey ============================

  var getRowKey = _react.default.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return function (record, index) {
      var _record$rowKey;

      return (_record$rowKey = record === null || record === void 0 ? void 0 : record[rowKey]) !== null && _record$rowKey !== void 0 ? _record$rowKey : index;
    };
  }, [rowKey]);
  /** 可编辑行的相关配置 */


  var editableUtils = (0, _proUtils.useEditableArray)(_objectSpread(_objectSpread({}, props.editable), {}, {
    getRowKey: getRowKey,
    childrenColumnName: (_props$expandable = props.expandable) === null || _props$expandable === void 0 ? void 0 : _props$expandable.childrenColumnName,
    dataSource: action.dataSource || [],
    setDataSource: function setDataSource(data) {
      var _props$editable, _props$editable$onVal;

      (_props$editable = props.editable) === null || _props$editable === void 0 ? void 0 : (_props$editable$onVal = _props$editable.onValuesChange) === null || _props$editable$onVal === void 0 ? void 0 : _props$editable$onVal.call(_props$editable, undefined, data);
      action.setDataSource(data);
    }
  }));
  /** 绑定 action */

  (0, _utils.useActionType)(actionRef, action, {
    fullScreen: function fullScreen() {
      if (!rootRef.current || !document.fullscreenEnabled) {
        return;
      }

      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        rootRef.current.requestFullscreen();
      }
    },
    onCleanSelected: function onCleanSelected() {
      // 清空选中行
      _onCleanSelected();
    },
    resetAll: function resetAll() {
      var _formRef$current;

      // 清空选中行
      _onCleanSelected(); // 清空筛选


      setProFilter({}); // 清空排序

      setProSort({}); // 清空 toolbar 搜索

      counter.setKeyWords(undefined); // 重置页码

      action.setPageInfo({
        current: 1
      }); // 重置表单

      formRef === null || formRef === void 0 ? void 0 : (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.resetFields();
      setFormSearch({});
    },
    editableUtils: editableUtils
  });

  if (propsActionRef) {
    // @ts-ignore
    propsActionRef.current = actionRef.current;
  }
  /** 绑定 action ref */


  (0, _react.useImperativeHandle)(propsActionRef, function () {
    return actionRef.current;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [editableUtils.editableKeys.join(',')]); // ---------- 列计算相关 start  -----------------

  var tableColumn = (0, _react.useMemo)(function () {
    return (0, _utils.genColumnList)({
      columns: propsColumns,
      map: counter.columnsMap,
      counter: counter,
      columnEmptyText: columnEmptyText,
      type: type,
      editableUtils: editableUtils
    }).sort((0, _utils.tableColumnSort)(counter.columnsMap)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsColumns, counter, columnEmptyText, type, editableUtils.editableKeys.join(',')]);
  /** Table Column 变化的时候更新一下，这个参数将会用于渲染 */

  (0, _proUtils.useDeepCompareEffect)(function () {
    if (tableColumn && tableColumn.length > 0) {
      // 重新生成key的字符串用于排序
      var columnKeys = tableColumn.map(function (item) {
        return (0, _utils.genColumnKey)(item.key, item.index);
      });
      counter.setSortKeyColumns(columnKeys);
    }
  }, [tableColumn]);
  var columns = (0, _react.useMemo)(function () {
    return tableColumn.filter(function (item) {
      // 删掉不应该显示的
      var columnKey = (0, _utils.genColumnKey)(item.key, item.index);
      var config = counter.columnsMap[columnKey];

      if (config && config.show === false) {
        return false;
      }

      return true;
    });
  }, [counter.columnsMap, tableColumn]); // ---------- 列计算相关 end-----------------

  /** 同步 Pagination，支持受控的 页码 和 pageSize */

  (0, _proUtils.useDeepCompareEffect)(function () {
    var pageInfo = action.pageInfo;

    var _ref3 = propsPagination || {},
        _ref3$current = _ref3.current,
        current = _ref3$current === void 0 ? pageInfo.current : _ref3$current,
        _ref3$pageSize = _ref3.pageSize,
        pageSize = _ref3$pageSize === void 0 ? pageInfo.pageSize : _ref3$pageSize;

    if (propsPagination && (current || pageSize) && (pageSize !== pageInfo.pageSize || current !== pageInfo.current)) {
      action.setPageInfo({
        pageSize: pageSize || pageInfo.pageSize,
        current: current || pageInfo.current
      });
    }
  }, [propsPagination && propsPagination.pageSize, propsPagination && propsPagination.current]);
  /** 行选择相关的问题 */

  var rowSelection = _objectSpread(_objectSpread({
    selectedRowKeys: selectedRowKeys
  }, propsRowSelection), {}, {
    onChange: function onChange(keys, rows) {
      if (propsRowSelection && propsRowSelection.onChange) {
        propsRowSelection.onChange(keys, rows);
      }

      setSelectedRowsAndKey(keys, rows);
    }
  });
  /** 查询表单相关的配置 */


  var searchNode = (0, _react.useMemo)(function () {
    if (search === false && type !== 'form') {
      return null;
    }

    var onSubmit = function onSubmit(value, firstLoad) {
      if (type !== 'form') {
        // 只传入 pagination 中的 current 和 pageSize 参数
        var pageInfo = pagination ? (0, _proUtils.omitUndefined)({
          current: pagination.current,
          pageSize: pagination.pageSize
        }) : {};

        var submitParams = _objectSpread(_objectSpread({}, value), {}, {
          _timestamp: Date.now()
        }, pageInfo);

        var omitParams = (0, _omit.default)(beforeSearchSubmit(submitParams), Object.keys(pageInfo));
        setFormSearch(omitParams);

        if (!firstLoad) {
          // back first page
          action.setPageInfo({
            current: 1
          });
        }
      } // 不是第一次提交就不触发，第一次提交是 js 触发的
      // 为了解决 https://github.com/ant-design/pro-components/issues/579


      if (props.onSubmit && !firstLoad) {
        props.onSubmit(value);
      }
    };

    var onReset = function onReset(value) {
      var _props$onReset;

      var pageInfo = pagination ? (0, _proUtils.omitUndefined)({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      var omitParams = (0, _omit.default)(beforeSearchSubmit(_objectSpread(_objectSpread({}, value), pageInfo)), Object.keys(pageInfo));
      setFormSearch(omitParams); // back first page

      action.setPageInfo({
        current: 1
      });
      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props);
    };

    return /*#__PURE__*/_react.default.createElement(_Form2.default, {
      submitButtonLoading: !!action.loading,
      columns: propsColumns,
      type: type,
      formRef: formRef,
      onSubmit: onSubmit,
      manualRequest: manualRequest,
      onReset: onReset,
      dateFormatter: rest.dateFormatter,
      search: search,
      form: rest.form,
      bordered: isBordered('search', cardBordered)
    });
  }, [action, beforeSearchSubmit, cardBordered, formRef, manualRequest, pagination, props, propsColumns, rest.dateFormatter, rest.form, search, setFormSearch, type]);
  /** 是不是 LightFilter, LightFilter 有一些特殊的处理 */

  var isLightFilter = search !== false && (search === null || search === void 0 ? void 0 : search.filterType) === 'light'; // eslint-disable-next-line react-hooks/exhaustive-deps

  var lightForm = (0, _react.useMemo)(function () {
    return isLightFilter ? searchNode : null;
  }, [isLightFilter, // eslint-disable-next-line react-hooks/exhaustive-deps
  isLightFilter && searchNode]);
  var className = (0, _classnames.default)(defaultClassName, propsClassName);
  var toolbarDom = (0, _react.useMemo)(function () {
    // 不展示 toolbar
    if (toolBarRender === false) {
      return null;
    }

    if (options === false && !headerTitle && !toolBarRender && !toolbar && !isLightFilter) {
      return null;
    }
    /** 根据表单类型的不同决定是否生成 toolbarProps */


    var toolbarProps = isLightFilter ? _objectSpread({
      filter: lightForm
    }, toolbar) : toolbar;

    var onSearch = function onSearch(keyword) {
      if (!options || !options.search) {
        return;
      }

      var _ref4 = options.search === true ? {} : options.search,
          _ref4$name = _ref4.name,
          name = _ref4$name === void 0 ? 'keyword' : _ref4$name; // 查询的时候的回到第一页


      action.setPageInfo({
        current: 1
      });
      setFormSearch((0, _proUtils.omitUndefined)(_objectSpread(_objectSpread({}, formSearch), {}, _defineProperty({
        _timestamp: Date.now()
      }, name, keyword))));
    };

    return /*#__PURE__*/_react.default.createElement(_ToolBar.default, {
      columns: tableColumn,
      options: options,
      headerTitle: headerTitle,
      action: actionRef,
      onSearch: onSearch,
      selectedRows: selectedRows,
      selectedRowKeys: selectedRowKeys,
      toolBarRender: toolBarRender,
      toolbar: toolbarProps
    });
  }, [action, formSearch, headerTitle, isLightFilter, lightForm, options, selectedRowKeys, selectedRows, setFormSearch, tableColumn, toolBarRender, toolbar]);
  /** 内置的多选操作栏 */

  var alertDom = propsRowSelection !== false && /*#__PURE__*/_react.default.createElement(_Alert.default, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: _onCleanSelected,
    alertOptionRender: rest.tableAlertOptionRender,
    alertInfoRender: tableAlertRender
  });
  /** 如果所有列中的 filters=true| undefined 说明是用的是本地筛选 任何一列配置 filters=false，就能绕过这个判断 */


  var useLocaleFilter = propsColumns.every(function (column) {
    return column.filters === true && column.onFilter === true || column.filters === undefined && column.onFilter === undefined;
  });

  var editableDataSource = function editableDataSource() {
    var _ref5 = editableUtils.newLineRecord || {},
        newLineOptions = _ref5.options,
        row = _ref5.defaultValue;

    if ((newLineOptions === null || newLineOptions === void 0 ? void 0 : newLineOptions.position) === 'top') {
      return [row].concat(_toConsumableArray(action.dataSource));
    } // 如果有分页的功能，我们加到这一页的末尾


    if (pagination && (pagination === null || pagination === void 0 ? void 0 : pagination.current) && (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize)) {
      return _toConsumableArray(action.dataSource).splice((pagination === null || pagination === void 0 ? void 0 : pagination.current) * (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) - 1, 0, row);
    }

    return [].concat(_toConsumableArray(action.dataSource), [row]);
  };

  var getTableProps = function getTableProps() {
    return _objectSpread(_objectSpread({}, rest), {}, {
      size: counter.tableSize,
      rowSelection: propsRowSelection === false ? undefined : rowSelection,
      className: tableClassName,
      style: tableStyle,
      columns: columns,
      loading: action.loading,
      dataSource: editableUtils.newLineRecord ? editableDataSource() : action.dataSource,
      pagination: pagination,
      onChange: function onChange(changePagination, filters, sorter, extra) {
        if (rest.onChange) {
          rest.onChange(changePagination, filters, sorter, extra);
        }

        if (!useLocaleFilter) {
          setProFilter((0, _proUtils.omitUndefined)(filters));
        } // 制造筛选的数据
        // 制造一个排序的数据


        if (Array.isArray(sorter)) {
          var data = sorter.reduce(function (pre, value) {
            return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, "".concat(value.field), value.order));
          }, {});
          setProSort((0, _proUtils.omitUndefined)(data));
        } else {
          setProSort((0, _proUtils.omitUndefined)(_defineProperty({}, "".concat(sorter.field), sorter.order)));
        }
      }
    });
  };
  /** 如果有 ellipsis ，设置 tableLayout 为 fixed */


  var tableLayout = ((_props$columns2 = props.columns) === null || _props$columns2 === void 0 ? void 0 : _props$columns2.some(function (item) {
    return item.ellipsis;
  })) ? 'fixed' : 'auto';
  /** 默认的 table dom，如果是编辑模式，外面还要包个 form */

  var baseTableDom = action.dataSource !== undefined || manualRequest ? /*#__PURE__*/_react.default.createElement(_form.default, {
    component: false,
    form: (_props$editable2 = props.editable) === null || _props$editable2 === void 0 ? void 0 : _props$editable2.form,
    onValuesChange: editableUtils.onValuesChange,
    key: "table"
  }, /*#__PURE__*/_react.default.createElement(_table.default, _extends({}, getTableProps(), {
    rowKey: rowKey,
    tableLayout: tableLayout
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50
    }
  }, /*#__PURE__*/_react.default.createElement(_spin.default, {
    size: "large"
  }));
  /** 自定义的 render */

  var tableDom = props.tableViewRender ? props.tableViewRender(_objectSpread(_objectSpread({}, getTableProps()), {}, {
    rowSelection: rowSelection
  }), baseTableDom) : baseTableDom;
  /** Table 区域的 dom，为了方便 render */

  var tableAreaDom = /*#__PURE__*/_react.default.createElement(_card.default, _extends({
    bordered: isBordered('table', cardBordered),
    style: {
      height: '100%'
    },
    bodyStyle: toolbarDom ? {
      paddingTop: 0,
      paddingBottom: 0
    } : {
      padding: 0
    }
  }, cardProps), toolbarDom, alertDom, tableDom);

  var renderTable = function renderTable() {
    if (props.tableRender) {
      return props.tableRender(props, tableAreaDom, {
        toolbar: toolbarDom || undefined,
        alert: alertDom || undefined,
        table: tableDom || undefined
      });
    }

    return tableAreaDom;
  };

  var proTableDom = /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, _defineProperty({}, "".concat(className, "-polling"), action.pollingLoading)),
    style: style,
    ref: rootRef
  }, isLightFilter ? null : searchNode, type !== 'form' && props.tableExtraRender && action.dataSource && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-extra")
  }, props.tableExtraRender(props, action.dataSource)), type !== 'form' && renderTable()); // 如果不需要的全屏，ConfigProvider 没有意义


  if (!options || !(options === null || options === void 0 ? void 0 : options.fullScreen)) {
    return proTableDom;
  }

  return /*#__PURE__*/_react.default.createElement(_configProvider.default, {
    getPopupContainer: function getPopupContainer() {
      return rootRef.current || document.body;
    }
  }, proTableDom);
};
/**
 * 🏆 Use Ant Design Table like a Pro! 更快 更好 更方便
 *
 * @param props
 */


var ProviderWarp = function ProviderWarp(props) {
  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  return /*#__PURE__*/_react.default.createElement(_container.default.Provider, {
    initialState: props
  }, /*#__PURE__*/_react.default.createElement(_proProvider.ConfigProviderWrap, null, /*#__PURE__*/_react.default.createElement(_proUtils.ErrorBoundary, null, /*#__PURE__*/_react.default.createElement(ProTable, _extends({
    defaultClassName: getPrefixCls('pro-table')
  }, props)))));
};

ProviderWarp.Summary = _table.default.Summary;
var _default = ProviderWarp;
exports.default = _default;