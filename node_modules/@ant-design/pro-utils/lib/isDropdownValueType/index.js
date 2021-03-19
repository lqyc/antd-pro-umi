"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var isDropdownValueType = function isDropdownValueType(valueType) {
  var isDropdown = false;

  if (/^date/.test(valueType) || valueType === 'select') {
    isDropdown = true;
  }

  return isDropdown;
};

var _default = isDropdownValueType;
exports.default = _default;