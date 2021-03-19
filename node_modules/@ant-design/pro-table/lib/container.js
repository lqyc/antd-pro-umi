"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContainer = useContainer;
exports.default = void 0;

var _unstatedNext = require("unstated-next");

var _react = require("react");

var _useMergedState5 = _interopRequireDefault(require("rc-util/es/hooks/useMergedState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useContainer() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actionRef = (0, _react.useRef)();
  var propsRef = (0, _react.useRef)(); // 共享状态比较难，就放到这里了

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      keyWords = _useState2[0],
      _setKeyWords = _useState2[1]; // 用于排序的数组


  var sortKeyColumns = (0, _react.useRef)([]);

  var _useMergedState = (0, _useMergedState5.default)(props.size || 'middle', {
    value: props.size,
    onChange: props.onSizeChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      tableSize = _useMergedState2[0],
      setTableSize = _useMergedState2[1];

  var _useMergedState3 = (0, _useMergedState5.default)(props.columnsStateMap || {}, {
    value: props.columnsStateMap,
    onChange: props.onColumnsStateChange
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      columnsMap = _useMergedState4[0],
      setColumnsMap = _useMergedState4[1];

  return {
    action: actionRef,
    setAction: function setAction(newAction) {
      actionRef.current = newAction;
    },
    sortKeyColumns: sortKeyColumns,
    setSortKeyColumns: function setSortKeyColumns(keys) {
      sortKeyColumns.current = keys;
    },
    propsRef: propsRef,
    columnsMap: columnsMap,
    keyWords: keyWords,
    setKeyWords: function setKeyWords(k) {
      return _setKeyWords(k);
    },
    setTableSize: setTableSize,
    tableSize: tableSize,
    setColumnsMap: setColumnsMap
  };
}

var Container = (0, _unstatedNext.createContainer)(useContainer);
var _default = Container;
exports.default = _default;