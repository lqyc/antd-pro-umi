"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _isNil = _interopRequireDefault(require("../isNil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseValueToMoment = function parseValueToMoment(value, formatter) {
  if ((0, _isNil.default)(value) || _moment.default.isMoment(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(function (v) {
      return parseValueToMoment(v, formatter);
    });
  }

  return (0, _moment.default)(value, formatter);
};

var _default = parseValueToMoment;
exports.default = _default;