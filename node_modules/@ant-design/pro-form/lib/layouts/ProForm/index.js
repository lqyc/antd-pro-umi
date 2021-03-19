"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireDefault(require("react"));

var _Group = _interopRequireDefault(require("../../components/Group"));

var _BaseForm = _interopRequireDefault(require("../../BaseForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ProForm(props) {
  return /*#__PURE__*/_react.default.createElement(_BaseForm.default, _extends({
    layout: "vertical",
    submitter: {
      // 反转按钮，在正常模式下，按钮应该是主按钮在前
      render: function render(_, dom) {
        return dom.reverse();
      }
    },
    contentRender: function contentRender(items, submitter) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, items, submitter);
    }
  }, props));
}

ProForm.Group = _Group.default;
ProForm.useForm = _form.default.useForm;
ProForm.Item = _form.default.Item;
var _default = ProForm;
exports.default = _default;