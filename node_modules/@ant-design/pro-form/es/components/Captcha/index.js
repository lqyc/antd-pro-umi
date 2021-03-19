import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/input/style";
import _Input from "antd/es/input";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useCallback, useEffect } from 'react';
import createField from '../../BaseForm/createField';
var ProFormCaptcha = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useState = useState(props.countDown || 60),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      timing = _useState4[0],
      setTiming = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1]; // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil


  var rules = props.rules,
      name = props.name,
      phoneName = props.phoneName,
      fieldProps = props.fieldProps,
      _props$captchaTextRen = props.captchaTextRender,
      captchaTextRender = _props$captchaTextRen === void 0 ? function (paramsTiming, paramsCount) {
    return paramsTiming ? "".concat(paramsCount, " \u79D2\u540E\u91CD\u65B0\u83B7\u53D6") : '获取验证码';
  } : _props$captchaTextRen,
      captchaProps = props.captchaProps,
      value = props.value,
      onChange = props.onChange,
      restProps = _objectWithoutProperties(props, ["rules", "name", "phoneName", "fieldProps", "captchaTextRender", "captchaProps", "value", "onChange"]);

  var onGetCaptcha = useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mobile) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return restProps.onGetCaptcha(mobile);

            case 4:
              setLoading(false);
              setTiming(true);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setLoading(false); // eslint-disable-next-line no-console

              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  useEffect(function () {
    var interval = 0;
    var countDown = props.countDown;

    if (timing) {
      interval = window.setInterval(function () {
        setCount(function (preSecond) {
          if (preSecond <= 1) {
            setTiming(false);
            clearInterval(interval); // 重置秒数

            return countDown || 60;
          }

          return preSecond - 1;
        });
      }, 1000);
    }

    return function () {
      return clearInterval(interval);
    };
  }, [timing]);
  return /*#__PURE__*/React.createElement(_Form.Item, {
    noStyle: true,
    shouldUpdate: true
  }, function (_ref2) {
    var getFieldValue = _ref2.getFieldValue,
        validateFields = _ref2.validateFields;
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style), {}, {
        display: 'flex',
        alignItems: 'center'
      }),
      ref: ref
    }, /*#__PURE__*/React.createElement(_Input, _extends({}, fieldProps, {
      style: {
        flex: 1,
        transition: 'width .3s',
        marginRight: 8
      },
      value: value,
      onChange: onChange
    })), /*#__PURE__*/React.createElement(_Button, _extends({
      style: {
        display: 'block'
      },
      disabled: timing,
      loading: loading
    }, captchaProps, {
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var mobile;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!phoneName) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 4;
                return validateFields([phoneName].flat(1));

              case 4:
                mobile = getFieldValue([phoneName].flat(1));
                _context2.next = 7;
                return onGetCaptcha(mobile);

              case 7:
                _context2.next = 11;
                break;

              case 9:
                _context2.next = 11;
                return onGetCaptcha('');

              case 11:
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                // eslint-disable-next-line no-console
                console.log(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }))
    }), captchaTextRender(timing, count)));
  });
});
export default createField(ProFormCaptcha);