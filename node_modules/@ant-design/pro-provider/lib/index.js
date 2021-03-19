"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntl = useIntl;
exports.default = exports.createIntl = exports.ConfigProviderWrap = exports.ConfigProvider = exports.ConfigConsumer = exports.intlMapKeys = exports.intlMap = exports.trTRIntl = exports.faIRIntl = exports.deDEIntl = exports.idIDIntl = exports.koKRIntl = exports.ptBRIntl = exports.frFRIntl = exports.zhTWIntl = exports.msMYIntl = exports.ruRUIntl = exports.esESIntl = exports.jaJPIntl = exports.itITIntl = exports.viVNIntl = exports.zhCNIntl = exports.enUSIntl = exports.arEGIntl = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _zh_CN = _interopRequireDefault(require("antd/es/locale/zh_CN"));

var _ar_EG = _interopRequireDefault(require("./locale/ar_EG"));

var _zh_CN2 = _interopRequireDefault(require("./locale/zh_CN"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _vi_VN = _interopRequireDefault(require("./locale/vi_VN"));

var _it_IT = _interopRequireDefault(require("./locale/it_IT"));

var _es_ES = _interopRequireDefault(require("./locale/es_ES"));

var _ja_JP = _interopRequireDefault(require("./locale/ja_JP"));

var _ru_RU = _interopRequireDefault(require("./locale/ru_RU"));

var _ms_MY = _interopRequireDefault(require("./locale/ms_MY"));

var _zh_TW = _interopRequireDefault(require("./locale/zh_TW"));

var _fr_FR = _interopRequireDefault(require("./locale/fr_FR"));

var _pt_BR = _interopRequireDefault(require("./locale/pt_BR"));

var _ko_KR = _interopRequireDefault(require("./locale/ko_KR"));

var _id_ID = _interopRequireDefault(require("./locale/id_ID"));

var _de_DE = _interopRequireDefault(require("./locale/de_DE"));

var _fa_IR = _interopRequireDefault(require("./locale/fa_IR"));

var _tr_TR = _interopRequireDefault(require("./locale/tr_TR"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function get(source, path, defaultValue) {
  // a[3].b -> a.3.b
  var paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  var result = source;
  var message = defaultValue; // eslint-disable-next-line no-restricted-syntax

  var _iterator = _createForOfIteratorHelper(paths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      message = Object(result)[p];
      result = Object(result)[p];

      if (message === undefined) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return message;
}
/**
 * 创建一个操作函数
 *
 * @param locale
 * @param localeMap
 */


var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale: locale
  };
};

exports.createIntl = createIntl;
var arEGIntl = createIntl('ar_EG', _ar_EG.default);
exports.arEGIntl = arEGIntl;
var zhCNIntl = createIntl('zh_CN', _zh_CN2.default);
exports.zhCNIntl = zhCNIntl;
var enUSIntl = createIntl('en_US', _en_US.default);
exports.enUSIntl = enUSIntl;
var viVNIntl = createIntl('vi_VN', _vi_VN.default);
exports.viVNIntl = viVNIntl;
var itITIntl = createIntl('it_IT', _it_IT.default);
exports.itITIntl = itITIntl;
var jaJPIntl = createIntl('ja_JP', _ja_JP.default);
exports.jaJPIntl = jaJPIntl;
var esESIntl = createIntl('es_ES', _es_ES.default);
exports.esESIntl = esESIntl;
var ruRUIntl = createIntl('ru_RU', _ru_RU.default);
exports.ruRUIntl = ruRUIntl;
var msMYIntl = createIntl('ms_MY', _ms_MY.default);
exports.msMYIntl = msMYIntl;
var zhTWIntl = createIntl('zh_TW', _zh_TW.default);
exports.zhTWIntl = zhTWIntl;
var frFRIntl = createIntl('fr_FR', _fr_FR.default);
exports.frFRIntl = frFRIntl;
var ptBRIntl = createIntl('pt_BR', _pt_BR.default);
exports.ptBRIntl = ptBRIntl;
var koKRIntl = createIntl('ko_KR', _ko_KR.default);
exports.koKRIntl = koKRIntl;
var idIDIntl = createIntl('id_ID', _id_ID.default);
exports.idIDIntl = idIDIntl;
var deDEIntl = createIntl('de_DE', _de_DE.default);
exports.deDEIntl = deDEIntl;
var faIRIntl = createIntl('fa_IR', _fa_IR.default);
exports.faIRIntl = faIRIntl;
var trTRIntl = createIntl('tr_TR', _tr_TR.default);
exports.trTRIntl = trTRIntl;
var intlMap = {
  'ar-EG': arEGIntl,
  'zh-CN': zhCNIntl,
  'en-US': enUSIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'ja-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ru-RU': ruRUIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'ko-KR': koKRIntl,
  'id-ID': idIDIntl,
  'de-DE': deDEIntl,
  'fa-IR': faIRIntl,
  'tr-TR': trTRIntl
};
exports.intlMap = intlMap;
var intlMapKeys = Object.keys(intlMap);
exports.intlMapKeys = intlMapKeys;

var ConfigContext = /*#__PURE__*/_react.default.createContext({
  intl: _objectSpread(_objectSpread({}, zhCNIntl), {}, {
    locale: 'default'
  }),
  valueTypeMap: {}
});

var ConfigConsumer = ConfigContext.Consumer,
    ConfigProvider = ConfigContext.Provider;
/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 *
 * @param localeKey
 */

exports.ConfigProvider = ConfigProvider;
exports.ConfigConsumer = ConfigConsumer;

var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  if (!localeKey) {
    return 'zh-CN';
  }

  var localeName = localeKey.toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};
/**
 * 如果没有配置 locale，这里组件会根据 antd 的 key 来自动选择
 *
 * @param param0
 */


var ConfigProviderWrap = function ConfigProviderWrap(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      locale = _useContext.locale; // 如果 locale 不存在自动注入的 AntdConfigProvider


  var Provider = locale === undefined ? _configProvider.default : _react.default.Fragment;
  return /*#__PURE__*/_react.default.createElement(ConfigConsumer, null, function (value) {
    var _value$intl;

    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName); // antd 的 key 存在的时候以 antd 的为主

    var intl = localeName && ((_value$intl = value.intl) === null || _value$intl === void 0 ? void 0 : _value$intl.locale) === 'default' ? intlMap[key] : value.intl || intlMap[key]; // 自动注入 antd 的配置

    var configProvider = locale === undefined ? {
      locale: _zh_CN.default
    } : {};
    return /*#__PURE__*/_react.default.createElement(Provider, configProvider, /*#__PURE__*/_react.default.createElement(ConfigProvider, {
      value: _objectSpread(_objectSpread({}, value), {}, {
        intl: intl || zhCNIntl
      })
    }, children));
  });
};

exports.ConfigProviderWrap = ConfigProviderWrap;

function useIntl() {
  var context = (0, _react.useContext)(ConfigContext);
  return context.intl || zhCNIntl;
}

var _default = ConfigContext;
exports.default = _default;