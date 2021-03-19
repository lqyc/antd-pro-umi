"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isDeepEqual = void 0;

var _react = require("react");

var _react2 = _interopRequireDefault(require("fast-deep-equal/es6/react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDeepEqual = _react2.default;
exports.isDeepEqual = isDeepEqual;

function useDeepCompareMemoize(value) {
  var ref = (0, _react.useRef)(); // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!isDeepEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(effect) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  (0, _react.useEffect)(effect, useDeepCompareMemoize(dependencies));
}

var _default = useDeepCompareEffect;
exports.default = _default;