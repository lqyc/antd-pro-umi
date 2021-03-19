"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DescriptionsSkeleton = exports.TableSkeleton = exports.TableItemSkeleton = void 0;

require("antd/es/card/style");

var _card = _interopRequireDefault(require("antd/es/card"));

require("antd/es/skeleton/style");

var _skeleton = _interopRequireDefault(require("antd/es/skeleton"));

var _react = _interopRequireDefault(require("react"));

var _useMediaAntdQuery = _interopRequireDefault(require("use-media-antd-query"));

var _List = require("../List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaQueryKeyEnum = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3,
  xxl: 4
};

var DescriptionsLargeItemSkeleton = function DescriptionsLargeItemSkeleton(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default.Button, {
    active: active,
    size: "small",
    style: {
      width: 100,
      marginBottom: 16
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      justifyContent: 'space-between',
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1,
      marginRight: 24,
      maxWidth: 300
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 0
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 8
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 8
      }
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: 300,
      margin: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 0
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 8
      }
    }
  })))));
};

var DescriptionsItemSkeleton = function DescriptionsItemSkeleton(_ref2) {
  var size = _ref2.size,
      active = _ref2.active;
  var colSize = (0, _useMediaAntdQuery.default)();
  var arraySize = size === undefined ? MediaQueryKeyEnum[colSize] || 3 : size;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      justifyContent: 'space-between',
      display: 'flex'
    }
  }, new Array(arraySize).fill(null).map(function (_, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index,
      style: {
        flex: 1,
        paddingLeft: index === 0 ? 0 : 24,
        paddingRight: index === arraySize - 1 ? 0 : 24
      }
    }, /*#__PURE__*/_react.default.createElement(_skeleton.default, {
      active: active,
      paragraph: false,
      title: {
        style: {
          marginTop: 0
        }
      }
    }), /*#__PURE__*/_react.default.createElement(_skeleton.default, {
      active: active,
      paragraph: false,
      title: {
        style: {
          marginTop: 8
        }
      }
    }), /*#__PURE__*/_react.default.createElement(_skeleton.default, {
      active: active,
      paragraph: false,
      title: {
        style: {
          marginTop: 8
        }
      }
    }));
  }));
};
/**
 * Table 的子项目骨架屏
 *
 * @param param0
 */


var TableItemSkeleton = function TableItemSkeleton(_ref3) {
  var active = _ref3.active,
      _ref3$header = _ref3.header,
      header = _ref3$header === void 0 ? false : _ref3$header;
  var colSize = (0, _useMediaAntdQuery.default)();
  var arraySize = MediaQueryKeyEnum[colSize] || 3;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      background: header ? 'rgba(0,0,0,0.02)' : 'none',
      padding: '24px 8px'
    }
  }, new Array(arraySize).fill(null).map(function (_, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index,
      style: {
        flex: 1,
        paddingLeft: header && index === 0 ? 0 : 20,
        paddingRight: 32
      }
    }, /*#__PURE__*/_react.default.createElement(_skeleton.default, {
      active: active,
      paragraph: false,
      title: {
        style: {
          margin: 0,
          height: 24,
          width: header ? '75px' : '100%'
        }
      }
    }));
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 3,
      paddingLeft: 32
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    active: active,
    paragraph: false,
    title: {
      style: {
        margin: 0,
        height: 24,
        width: header ? '75px' : '100%'
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_List.Line, {
    padding: "0px 0px"
  }));
};
/**
 * Table 骨架屏
 *
 * @param param0
 */


exports.TableItemSkeleton = TableItemSkeleton;

var TableSkeleton = function TableSkeleton(_ref4) {
  var active = _ref4.active,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 4 : _ref4$size;
  return /*#__PURE__*/_react.default.createElement(_card.default, {
    bordered: false
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default.Button, {
    active: active,
    size: "small",
    style: {
      width: 100,
      marginBottom: 16
    }
  }), /*#__PURE__*/_react.default.createElement(TableItemSkeleton, {
    header: true,
    active: active
  }), new Array(size).fill(null).map(function (_, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react.default.createElement(TableItemSkeleton, {
        key: index,
        active: active
      })
    );
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: 16
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    active: active,
    paragraph: false,
    title: {
      style: {
        margin: 0,
        height: 32,
        float: 'right',
        maxWidth: '630px'
      }
    }
  })));
};

exports.TableSkeleton = TableSkeleton;

var DescriptionsSkeleton = function DescriptionsSkeleton(_ref5) {
  var active = _ref5.active;
  return /*#__PURE__*/_react.default.createElement(_card.default, {
    bordered: false,
    style: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default.Button, {
    active: active,
    size: "small",
    style: {
      width: 100,
      marginBottom: 16
    }
  }), /*#__PURE__*/_react.default.createElement(DescriptionsItemSkeleton, {
    active: active
  }), /*#__PURE__*/_react.default.createElement(DescriptionsLargeItemSkeleton, {
    active: active
  }));
};

exports.DescriptionsSkeleton = DescriptionsSkeleton;

var DescriptionsPageSkeleton = function DescriptionsPageSkeleton(_ref6) {
  var _ref6$active = _ref6.active,
      active = _ref6$active === void 0 ? true : _ref6$active,
      pageHeader = _ref6.pageHeader,
      list = _ref6.list;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, pageHeader !== false && /*#__PURE__*/_react.default.createElement(_List.PageHeaderSkeleton, {
    active: active
  }), /*#__PURE__*/_react.default.createElement(DescriptionsSkeleton, {
    active: active
  }), list !== false && /*#__PURE__*/_react.default.createElement(_List.Line, null), list !== false && /*#__PURE__*/_react.default.createElement(TableSkeleton, {
    active: active,
    size: list
  }));
};

var _default = DescriptionsPageSkeleton;
exports.default = _default;