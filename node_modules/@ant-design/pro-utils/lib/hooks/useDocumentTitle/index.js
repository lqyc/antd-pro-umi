"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _isBrowser = _interopRequireDefault(require("../../isBrowser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  (0, _react.useEffect)(function () {
    if ((0, _isBrowser.default)() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title]);
}

var _default = useDocumentTitle;
exports.default = _default;