import "antd/es/spin/style";
import _Spin from "antd/es/spin";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/space/style";
import _Space from "antd/es/space";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useState, useImperativeHandle, useRef, useContext, useCallback, useEffect } from 'react';
import { useDebounceFn } from '@ant-design/pro-utils';
import { useDeepCompareEffect } from '@ant-design/pro-utils';
import useSWR from 'swr';
import useMergedState from "rc-util/es/hooks/useMergedState";
import { useIntl } from '@ant-design/pro-provider';
import LightSelect from './LightSelect';
import SearchSelect from './SearchSelect';
import TableStatus, { ProFieldBadgeColor } from '../Status';
var testId = 0;
export var ObjToMap = function ObjToMap(value) {
  if (getType(value) === 'map') {
    return value;
  }

  return new Map(Object.entries(value || {}));
};
/**
 * 转化 text 和 valueEnum 通过 type 来添加 Status
 *
 * @param text
 * @param valueEnum
 * @param pure 纯净模式，不增加 status
 */

export var proFieldParsingText = function proFieldParsingText(text, valueEnumParams) {
  if (Array.isArray(text)) {
    return /*#__PURE__*/React.createElement(_Space, null, text.map(function (value) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        React.createElement(React.Fragment, {
          key: (value === null || value === void 0 ? void 0 : value.value) || value
        }, proFieldParsingText(value, valueEnumParams))
      );
    }));
  }

  var valueEnum = ObjToMap(valueEnumParams);

  if (!valueEnum.has(text) && !valueEnum.has("".concat(text))) {
    // @ts-ignore
    return (text === null || text === void 0 ? void 0 : text.label) || text;
  }

  var domText = valueEnum.get(text) || valueEnum.get("".concat(text));

  if (!domText) {
    // @ts-ignore
    return (text === null || text === void 0 ? void 0 : text.label) || text;
  }

  var status = domText.status,
      color = domText.color;
  var Status = TableStatus[status || 'Init']; // 如果类型存在优先使用类型

  if (Status) {
    return /*#__PURE__*/React.createElement(Status, null, domText.text);
  } // 如果不存在使用颜色


  if (color) {
    return /*#__PURE__*/React.createElement(ProFieldBadgeColor, {
      color: color
    }, domText.text);
  } // 什么都没有使用 text


  return domText.text || domText;
};

var Highlight = function Highlight(_ref) {
  var label = _ref.label,
      words = _ref.words;
  var reg = new RegExp(words.join('|'), 'g');
  var token = label.replace(reg, '#@$&#');
  var elements = token.split('#').map(function (x) {
    return x[0] === '@' ? /*#__PURE__*/React.createElement('span', {
      style: {
        color: '#1890ff'
      }
    }, x.slice(1)) : x;
  });
  return /*#__PURE__*/React.createElement.apply(React, ['div', null].concat(_toConsumableArray(elements)));
};
/**
 * 获取类型的 type
 *
 * @param obj
 */


function getType(obj) {
  // @ts-ignore
  var type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1].toLowerCase();
  if (type === 'string' && _typeof(obj) === 'object') return 'object'; // Let "new String('')" return 'object'

  if (obj === null) return 'null'; // PhantomJS has type "DOMWindow" for null

  if (obj === undefined) return 'undefined'; // PhantomJS has type "DOMWindow" for undefined

  return type;
}
/**
 * 把 value 的枚举转化为数组
 *
 * @param valueEnum
 */


export var proFieldParsingValueEnumToArray = function proFieldParsingValueEnumToArray() {
  var valueEnumParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var enumArray = [];
  var valueEnum = ObjToMap(valueEnumParams);
  valueEnum.forEach(function (_, key) {
    var value = valueEnum.get(key) || valueEnum.get("".concat(key));

    if (!value) {
      return;
    }

    if (_typeof(value) === 'object' && (value === null || value === void 0 ? void 0 : value.text)) {
      enumArray.push({
        text: value === null || value === void 0 ? void 0 : value.text,
        value: key,
        disabled: value.disabled
      });
      return;
    }

    enumArray.push({
      text: value,
      value: key
    });
  });
  return enumArray;
};
export var useFieldFetchData = function useFieldFetchData(props) {
  var _props$fieldProps;

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      keyWords = _useState2[0],
      setKeyWords = _useState2[1];
  /** Key 是用来缓存请求的，如果不在是有问题 */


  var _useState3 = useState(function () {
    if (props.proFieldKey) {
      return props.proFieldKey;
    }

    if (props.request) {
      testId += 1;
      return testId;
    }

    return 'no-fetch';
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      cacheKey = _useState4[0];

  var proFieldKeyRef = useRef(cacheKey);
  var getOptionsFormValueEnum = useCallback(function (valueEnum) {
    return proFieldParsingValueEnumToArray(ObjToMap(valueEnum)).map(function (_ref2) {
      var value = _ref2.value,
          text = _ref2.text,
          rest = _objectWithoutProperties(_ref2, ["value", "text"]);

      return _objectSpread({
        label: text,
        value: value,
        key: value
      }, rest);
    });
  }, []);

  var _useMergedState = useMergedState(function () {
    if (props.valueEnum) {
      return getOptionsFormValueEnum(props.valueEnum);
    }

    return [];
  }, {
    value: (_props$fieldProps = props.fieldProps) === null || _props$fieldProps === void 0 ? void 0 : _props$fieldProps.options
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      options = _useMergedState2[0],
      setOptions = _useMergedState2[1];

  useDeepCompareEffect(function () {
    var _props$fieldProps2;

    // 优先使用 fieldProps?.options
    if (!props.valueEnum || ((_props$fieldProps2 = props.fieldProps) === null || _props$fieldProps2 === void 0 ? void 0 : _props$fieldProps2.options)) return;
    setOptions(getOptionsFormValueEnum(props.valueEnum));
  }, [props.valueEnum]);

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var loadData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (props.request) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", []);

            case 2:
              setLoading(true);
              _context.next = 5;
              return props.request(_objectSpread(_objectSpread({}, props.params), {}, {
                keyWords: keyWords
              }), props);

            case 5:
              loadData = _context.sent;
              setLoading(false);
              return _context.abrupt("return", loadData);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref3.apply(this, arguments);
    };
  }();

  var _useSWR = useSWR([proFieldKeyRef.current, JSON.stringify(props.params)], fetchData, {
    revalidateOnFocus: false
  }),
      data = _useSWR.data,
      mutate = _useSWR.mutate;

  var fetchDebounce = useDebounceFn( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mutate(fetchData, false);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [], 200);
  return [loading, props.request ? data : options === null || options === void 0 ? void 0 : options.filter(function (item) {
    var _item$label;

    if (!keyWords) return true;

    if ((item === null || item === void 0 ? void 0 : (_item$label = item.label) === null || _item$label === void 0 ? void 0 : _item$label.toString().includes(keyWords)) || item.value.toString().includes(keyWords)) {
      return true;
    }

    return false;
  }), function (fetchKeyWords) {
    setKeyWords(fetchKeyWords);
    fetchDebounce.run();
  }, function () {
    setKeyWords(undefined);
    mutate( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", []);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })), false);
  }];
};
/**
 * 可以根据 valueEnum 来进行类型的设置
 *
 * @param
 */

var FieldSelect = function FieldSelect(props, ref) {
  var mode = props.mode,
      valueEnum = props.valueEnum,
      render = props.render,
      renderFormItem = props.renderFormItem,
      request = props.request,
      fieldProps = props.fieldProps,
      plain = props.plain,
      children = props.children,
      light = props.light,
      proFieldKey = props.proFieldKey,
      rest = _objectWithoutProperties(props, ["mode", "valueEnum", "render", "renderFormItem", "request", "fieldProps", "plain", "children", "light", "proFieldKey"]);

  var inputRef = useRef();
  var intl = useIntl();
  var keyWordsRef = useRef('');
  useEffect(function () {
    testId += 1;
  }, []);

  var _useFieldFetchData = useFieldFetchData(props),
      _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 4),
      loading = _useFieldFetchData2[0],
      options = _useFieldFetchData2[1],
      _fetchData = _useFieldFetchData2[2],
      resetData = _useFieldFetchData2[3];

  var size = useContext(_ConfigProvider.SizeContext);
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, inputRef.current || {}), {}, {
      fetchData: function fetchData() {
        return _fetchData();
      }
    });
  });

  if (mode === 'read') {
    var _rest$text;

    var optionsValueEnum = (options === null || options === void 0 ? void 0 : options.length) ? options === null || options === void 0 ? void 0 : options.reduce(function (pre, cur) {
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, cur.value, cur.label));
    }, {}) : undefined; // 如果有 label 直接就用 label
    // @ts-ignore

    if ((_rest$text = rest.text) === null || _rest$text === void 0 ? void 0 : _rest$text.label) {
      var _rest$text2;

      // @ts-ignore
      return (_rest$text2 = rest.text) === null || _rest$text2 === void 0 ? void 0 : _rest$text2.label;
    }

    var dom = /*#__PURE__*/React.createElement(React.Fragment, null, proFieldParsingText(rest.text, ObjToMap(valueEnum || optionsValueEnum)));

    if (render) {
      return render(rest.text, _objectSpread({
        mode: mode
      }, fieldProps), dom) || null;
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var renderDom = function renderDom() {
      if (light) {
        return /*#__PURE__*/React.createElement(LightSelect, _extends({
          loading: loading,
          ref: inputRef,
          allowClear: true,
          size: size
        }, rest, {
          options: options
        }, fieldProps));
      }

      return /*#__PURE__*/React.createElement(SearchSelect, _extends({
        key: "SearchSelect",
        style: {
          minWidth: 100
        },
        loading: loading,
        ref: inputRef,
        allowClear: true,
        notFoundContent: loading ? /*#__PURE__*/React.createElement(_Spin, {
          size: "small"
        }) : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.notFoundContent,
        fetchData: function fetchData(keyWord) {
          keyWordsRef.current = keyWord;

          _fetchData(keyWord);
        },
        resetData: resetData,
        optionItemRender: function optionItemRender(item) {
          if (typeof item.label === 'string' && keyWordsRef.current) {
            return /*#__PURE__*/React.createElement(Highlight, {
              label: item.label,
              words: [keyWordsRef.current]
            });
          }

          return item.label;
        }
      }, rest, {
        placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择')
      }, fieldProps, {
        options: options
      }));
    };

    var _dom = renderDom();

    if (renderFormItem) {
      return renderFormItem(rest.text, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        options: options
      }), _dom) || null;
    }

    return _dom;
  }

  return null;
};

export default /*#__PURE__*/React.forwardRef(FieldSelect);