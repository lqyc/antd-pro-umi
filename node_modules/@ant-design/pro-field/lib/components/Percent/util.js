"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSymbolByRealValue = getSymbolByRealValue;
exports.getColorByRealValue = getColorByRealValue;
exports.getRealTextWithPrecision = getRealTextWithPrecision;

/** 获取展示符号 */
function getSymbolByRealValue(realValue) {
  if (realValue === 0) {
    return null;
  }

  return realValue > 0 ? '+' : '-';
}
/** 获取颜色 */


function getColorByRealValue(realValue
/** ,color: string */
) {
  if (realValue === 0) {
    return '#595959';
  }

  return realValue > 0 ? '#ff4d4f' : '#52c41a';
}
/** 获取到最后展示的数字 */


function getRealTextWithPrecision(realValue) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return precision && precision > 0 ? realValue.toFixed(precision) : realValue;
}