"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("rc-util/es/utils/get"));

var _set = _interopRequireDefault(require("rc-util/es/utils/set"));

var _isNil = _interopRequireDefault(require("../isNil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transformKeySubmitValue = function transformKeySubmitValue(values, dataFormatMapRaw) {
  // ignore nil transfrom
  var dataFormatMap = Object.keys(dataFormatMapRaw).reduce(function (ret, key) {
    var value = dataFormatMapRaw[key];

    if (!(0, _isNil.default)(value)) {
      // eslint-disable-next-line no-param-reassign
      ret[key] = value; // can't be undefined
    }

    return ret;
  }, {});

  if (Object.keys(dataFormatMap).length < 1) {
    return values;
  }

  var finalValues = {};

  var gen = function gen(tempValues, parentsKey) {
    var result = {};
    Object.keys(tempValues).forEach(function (entryKey) {
      var key = parentsKey ? [parentsKey, entryKey] : [entryKey];
      var itemValue = tempValues[entryKey];

      if (_typeof(itemValue) === 'object' && !Array.isArray(itemValue) && ! /*#__PURE__*/_react.default.isValidElement(itemValue) && // ignore walk throungh React Element
      !(itemValue instanceof Blob) // ignore walk throungh Blob
      ) {
          var genValues = gen(itemValue, entryKey);

          if (Object.keys(genValues).length < 1) {
            return;
          }

          result = (0, _set.default)(result, [entryKey], genValues);
          return;
        }

      var transformFunction = (0, _get.default)(dataFormatMap, key);
      var tempKey = typeof transformFunction === 'function' ? transformFunction === null || transformFunction === void 0 ? void 0 : transformFunction(itemValue, entryKey, tempValues) : entryKey; // { [key:string]:any } 数组也能通过编译

      if (Array.isArray(tempKey)) {
        result = (0, _set.default)(result, tempKey, itemValue);
        return;
      }

      if (_typeof(tempKey) === 'object') {
        finalValues = _objectSpread(_objectSpread({}, finalValues), tempKey);
      } else if (tempKey) {
        result = (0, _set.default)(result, [tempKey], itemValue);
      }
    });
    return result;
  };

  finalValues = _objectSpread(_objectSpread({}, gen(values)), finalValues);
  return finalValues;
};

var _default = transformKeySubmitValue;
exports.default = _default;