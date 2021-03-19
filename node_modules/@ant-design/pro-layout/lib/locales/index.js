"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getLanguage = void 0;

var _proUtils = require("@ant-design/pro-utils");

var _zhCN = _interopRequireDefault(require("./zh-CN"));

var _zhTW = _interopRequireDefault(require("./zh-TW"));

var _enUS = _interopRequireDefault(require("./en-US"));

var _itIT = _interopRequireDefault(require("./it-IT"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locales = {
  'zh-CN': _zhCN.default,
  'zh-TW': _zhTW.default,
  'en-US': _enUS.default,
  'it-IT': _itIT.default
};

var getLanguage = function getLanguage() {
  // support ssr
  if (!(0, _proUtils.isBrowser)()) return 'zh-CN';
  var lang = window.localStorage.getItem('umi_locale');
  return lang || window.g_locale || navigator.language;
};

exports.getLanguage = getLanguage;

var _default = function _default() {
  var gLocale = getLanguage();

  if (locales[gLocale]) {
    return locales[gLocale];
  }

  return locales['zh-CN'];
};

exports.default = _default;