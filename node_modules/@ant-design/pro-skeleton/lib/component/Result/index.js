"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/card/style");

var _card = _interopRequireDefault(require("antd/es/card"));

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

require("antd/es/skeleton/style");

var _skeleton = _interopRequireDefault(require("antd/es/skeleton"));

var _react = _interopRequireDefault(require("react"));

var _List = require("../List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultPageSkeleton = function ResultPageSkeleton(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active,
      pageHeader = _ref.pageHeader;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, pageHeader !== false && /*#__PURE__*/_react.default.createElement(_List.PageHeaderSkeleton, {
    active: active
  }), /*#__PURE__*/_react.default.createElement(_card.default, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 128
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default.Avatar, {
    size: 64,
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/_react.default.createElement(_skeleton.default.Button, {
    active: active,
    style: {
      width: 214,
      marginBottom: 8
    }
  }), /*#__PURE__*/_react.default.createElement(_skeleton.default.Button, {
    active: active,
    style: {
      width: 328
    },
    size: "small"
  }), /*#__PURE__*/_react.default.createElement(_space.default, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default.Button, {
    active: active,
    style: {
      width: 116
    }
  }), /*#__PURE__*/_react.default.createElement(_skeleton.default.Button, {
    active: active,
    style: {
      width: 116
    }
  })))));
};

var _default = ResultPageSkeleton;
exports.default = _default;