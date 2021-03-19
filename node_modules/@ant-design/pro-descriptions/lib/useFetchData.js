"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useMergedState5 = _interopRequireDefault(require("rc-util/es/hooks/useMergedState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useFetchData = function useFetchData(getData, options) {
  var _ref = options || {},
      onRequestError = _ref.onRequestError,
      effects = _ref.effects,
      manual = _ref.manual,
      dataSource = _ref.dataSource,
      defaultDataSource = _ref.defaultDataSource,
      onDataSourceChange = _ref.onDataSourceChange;

  var _useMergedState = (0, _useMergedState5.default)(defaultDataSource, {
    value: dataSource,
    onChange: onDataSourceChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      entity = _useMergedState2[0],
      setEntity = _useMergedState2[1];

  var _useMergedState3 = (0, _useMergedState5.default)(options === null || options === void 0 ? void 0 : options.loading, {
    value: options === null || options === void 0 ? void 0 : options.loading,
    onChange: options === null || options === void 0 ? void 0 : options.onLoadingChange
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      loading = _useMergedState4[0],
      setLoading = _useMergedState4[1];

  var updateDataAndLoading = function updateDataAndLoading(data) {
    setEntity(data);
    setLoading(false);
  };
  /** 请求数据 */


  var fetchList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref3, data, success;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);
              _context.prev = 3;
              _context.next = 6;
              return getData();

            case 6:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 9;
                break;
              }

              _context.t0 = {};

            case 9:
              _ref3 = _context.t0;
              data = _ref3.data;
              success = _ref3.success;

              if (success !== false) {
                updateDataAndLoading(data);
              }

              _context.next = 23;
              break;

            case 15:
              _context.prev = 15;
              _context.t1 = _context["catch"](3);

              if (!(onRequestError === undefined)) {
                _context.next = 21;
                break;
              }

              throw new Error(_context.t1);

            case 21:
              onRequestError(_context.t1);

            case 22:
              setLoading(false);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 15]]);
    }));

    return function fetchList() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (manual) {
      return;
    }

    fetchList();
  }, [].concat(_toConsumableArray(effects || []), [manual]));
  return {
    dataSource: entity,
    setDataSource: setEntity,
    loading: loading,
    reload: function reload() {
      return fetchList();
    }
  };
};

var _default = useFetchData;
exports.default = _default;