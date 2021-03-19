function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useRef, useEffect } from 'react';
import { usePrevious, useDebounceFn, useDeepCompareEffect, useMountMergeState, runFunction } from '@ant-design/pro-utils';
import { unstable_batchedUpdates } from 'react-dom';
import { postDataPipeline } from './utils';
/**
 * 组合用户的配置和默认值
 *
 * @param param0
 */

var mergeOptionAndPageInfo = function mergeOptionAndPageInfo(_ref) {
  var pageInfo = _ref.pageInfo;

  if (pageInfo) {
    var current = pageInfo.current,
        defaultCurrent = pageInfo.defaultCurrent,
        pageSize = pageInfo.pageSize,
        defaultPageSize = pageInfo.defaultPageSize;
    return {
      current: current || defaultCurrent || 1,
      total: 0,
      pageSize: pageSize || defaultPageSize || 20
    };
  }

  return {
    current: 1,
    total: 0,
    pageSize: 20
  };
};

var useFetchData = function useFetchData(getData, defaultData, options) {
  var _ref2 = options || {},
      onLoad = _ref2.onLoad,
      manual = _ref2.manual,
      polling = _ref2.polling,
      onRequestError = _ref2.onRequestError,
      _ref2$debounceTime = _ref2.debounceTime,
      debounceTime = _ref2$debounceTime === void 0 ? 20 : _ref2$debounceTime;
  /** 是否首次加载的指示器 */


  var manualRequestRef = useRef(manual);
  /** 轮询的setTime ID 存储 */

  var pollingSetTimeRef = useRef();

  var _useMountMergeState = useMountMergeState(defaultData, {
    value: options === null || options === void 0 ? void 0 : options.dataSource,
    onChange: options === null || options === void 0 ? void 0 : options.onDataSourceChange
  }),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      list = _useMountMergeState2[0],
      setList = _useMountMergeState2[1];

  var _useMountMergeState3 = useMountMergeState(false, {
    value: options === null || options === void 0 ? void 0 : options.loading,
    onChange: options === null || options === void 0 ? void 0 : options.onLoadingChange
  }),
      _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
      loading = _useMountMergeState4[0],
      setLoading = _useMountMergeState4[1];

  var requesting = useRef(false);

  var _useMountMergeState5 = useMountMergeState(function () {
    return mergeOptionAndPageInfo(options);
  }),
      _useMountMergeState6 = _slicedToArray(_useMountMergeState5, 2),
      pageInfo = _useMountMergeState6[0],
      _setPageInfo = _useMountMergeState6[1];

  var _useMountMergeState7 = useMountMergeState(false),
      _useMountMergeState8 = _slicedToArray(_useMountMergeState7, 2),
      pollingLoading = _useMountMergeState8[0],
      setPollingLoading = _useMountMergeState8[1]; // Batching update  https://github.com/facebook/react/issues/14259


  var setDataAndLoading = function setDataAndLoading(newData, dataTotal) {
    unstable_batchedUpdates(function () {
      setList(newData);

      if (pageInfo.total !== dataTotal) {
        _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), {}, {
          total: dataTotal || newData.length
        }));
      }
    });
  }; // pre state


  var prePage = usePrevious(pageInfo.current);
  var prePageSize = usePrevious(pageInfo.pageSize);
  var prePolling = usePrevious(polling);

  var _ref3 = options || {},
      _ref3$effects = _ref3.effects,
      effects = _ref3$effects === void 0 ? [] : _ref3$effects;
  /** 请求数据 */


  var fetchList = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isPolling) {
      var pageSize, current, pageParams, _ref5, _ref5$data, data, success, _ref5$total, total, rest, responseData;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(loading || requesting.current || !getData)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", []);

            case 2:
              if (!manualRequestRef.current) {
                _context.next = 5;
                break;
              }

              manualRequestRef.current = false;
              return _context.abrupt("return", []);

            case 5:
              if (!isPolling) {
                setLoading(true);
              } else {
                setPollingLoading(true);
              }

              requesting.current = true;
              pageSize = pageInfo.pageSize, current = pageInfo.current;
              _context.prev = 8;
              pageParams = (options === null || options === void 0 ? void 0 : options.pageInfo) !== false ? {
                current: current,
                pageSize: pageSize
              } : undefined;
              _context.next = 12;
              return getData(pageParams);

            case 12:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 15;
                break;
              }

              _context.t0 = {};

            case 15:
              _ref5 = _context.t0;
              _ref5$data = _ref5.data;
              data = _ref5$data === void 0 ? [] : _ref5$data;
              success = _ref5.success;
              _ref5$total = _ref5.total;
              total = _ref5$total === void 0 ? 0 : _ref5$total;
              rest = _objectWithoutProperties(_ref5, ["data", "success", "total"]);
              requesting.current = false; // 如果失败了，直接返回，不走剩下的逻辑了

              if (!(success === false)) {
                _context.next = 25;
                break;
              }

              return _context.abrupt("return", []);

            case 25:
              responseData = postDataPipeline(data, [options.postData].filter(function (item) {
                return item;
              }));
              setDataAndLoading(responseData, total);
              onLoad === null || onLoad === void 0 ? void 0 : onLoad(responseData, rest);
              return _context.abrupt("return", responseData);

            case 31:
              _context.prev = 31;
              _context.t1 = _context["catch"](8);
              requesting.current = false; // 如果没有传递这个方法的话，需要把错误抛出去，以免吞掉错误

              if (!(onRequestError === undefined)) {
                _context.next = 36;
                break;
              }

              throw new Error(_context.t1);

            case 36:
              if (list === undefined) setList([]);
              onRequestError(_context.t1);

            case 38:
              _context.prev = 38;
              requestAnimationFrame(function () {
                setLoading(false);
                setPollingLoading(false);
              });
              return _context.finish(38);

            case 41:
              return _context.abrupt("return", []);

            case 42:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 31, 38, 41]]);
    }));

    return function fetchList(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var fetchListDebounce = useDebounceFn( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(isPolling) {
      var msg, needPolling;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (pollingSetTimeRef.current) {
                clearTimeout(pollingSetTimeRef.current);
              }

              _context2.next = 3;
              return fetchList(isPolling);

            case 3:
              msg = _context2.sent;
              // 把判断要不要轮询的逻辑放到后面来这样可以保证数据是根据当前来
              // 放到请求前面会导致数据是上一次的
              needPolling = runFunction(polling, msg); // 如果需要轮询，搞个一段时间后执行

              if (needPolling) {
                pollingSetTimeRef.current = setTimeout(function () {
                  fetchListDebounce.run(needPolling); // 这里判断最小要2000ms，不然一直loading
                }, Math.max(needPolling, 2000));
              }

              return _context2.abrupt("return", msg);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }(), [], debounceTime); // 如果轮询结束了，直接销毁定时器

  useEffect(function () {
    if (!polling) {
      clearTimeout(pollingSetTimeRef.current);
    }

    if (!prePolling && polling) {
      fetchListDebounce.run(true);
    }

    return function () {
      clearTimeout(pollingSetTimeRef.current);
    };
  }, [polling]);
  /** PageIndex 改变的时候自动刷新 */

  useEffect(function () {
    var current = pageInfo.current,
        pageSize = pageInfo.pageSize; // 如果上次的页码为空或者两次页码等于是没必要查询的
    // 如果 pageSize 发生变化是需要查询的，所以又加了 prePageSize

    if ((!prePage || prePage === current) && (!prePageSize || prePageSize === pageSize)) {
      return;
    } // 如果 list 的长度大于 pageSize 的长度
    // 说明是一个假分页
    // (pageIndex - 1 || 1) 至少要第一页
    // 在第一页大于 10
    // 第二页也应该是大于 10


    if (current !== undefined && list && list.length <= pageSize) {
      fetchListDebounce.run(false);
    }
  }, [pageInfo.current]); // pageSize 修改后返回第一页

  useEffect(function () {
    if (!prePageSize) {
      return;
    }

    fetchListDebounce.run(false);
  }, [pageInfo.pageSize]);
  useDeepCompareEffect(function () {
    fetchListDebounce.run(false);
    return function () {
      fetchListDebounce.cancel();
    };
  }, [].concat(_toConsumableArray(effects), [manual]));
  return {
    dataSource: list,
    setDataSource: setList,
    loading: loading,
    reload: function () {
      var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetchListDebounce.run(false);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function reload() {
        return _reload.apply(this, arguments);
      }

      return reload;
    }(),
    pageInfo: pageInfo,
    pollingLoading: pollingLoading,
    reset: function () {
      var _reset = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref7, optionPageInfo, _ref8, _ref8$defaultCurrent, defaultCurrent, _ref8$defaultPageSize, defaultPageSize, initialPageInfo;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref7 = options || {}, optionPageInfo = _ref7.pageInfo;
                _ref8 = optionPageInfo || {}, _ref8$defaultCurrent = _ref8.defaultCurrent, defaultCurrent = _ref8$defaultCurrent === void 0 ? 1 : _ref8$defaultCurrent, _ref8$defaultPageSize = _ref8.defaultPageSize, defaultPageSize = _ref8$defaultPageSize === void 0 ? 20 : _ref8$defaultPageSize;
                initialPageInfo = {
                  current: defaultCurrent,
                  total: 0,
                  pageSize: defaultPageSize
                };

                _setPageInfo(initialPageInfo);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function reset() {
        return _reset.apply(this, arguments);
      }

      return reset;
    }(),
    setPageInfo: function () {
      var _setPageInfo2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(info) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), info));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function setPageInfo(_x3) {
        return _setPageInfo2.apply(this, arguments);
      }

      return setPageInfo;
    }()
  };
};

export default useFetchData;