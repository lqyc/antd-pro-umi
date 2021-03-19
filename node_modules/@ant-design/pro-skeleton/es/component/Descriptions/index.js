import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/skeleton/style";
import _Skeleton from "antd/es/skeleton";
import React from 'react';
import useMediaQuery from 'use-media-antd-query';
import { PageHeaderSkeleton, Line } from '../List';
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    size: "small",
    style: {
      width: 100,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      justifyContent: 'space-between',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginRight: 24,
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(_Skeleton, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 0
      }
    }
  }), /*#__PURE__*/React.createElement(_Skeleton, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 8
      }
    }
  }), /*#__PURE__*/React.createElement(_Skeleton, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 8
      }
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300,
      margin: 'auto'
    }
  }, /*#__PURE__*/React.createElement(_Skeleton, {
    active: active,
    paragraph: false,
    title: {
      style: {
        marginTop: 0
      }
    }
  }), /*#__PURE__*/React.createElement(_Skeleton, {
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
  var colSize = useMediaQuery();
  var arraySize = size === undefined ? MediaQueryKeyEnum[colSize] || 3 : size;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      justifyContent: 'space-between',
      display: 'flex'
    }
  }, new Array(arraySize).fill(null).map(function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index,
      style: {
        flex: 1,
        paddingLeft: index === 0 ? 0 : 24,
        paddingRight: index === arraySize - 1 ? 0 : 24
      }
    }, /*#__PURE__*/React.createElement(_Skeleton, {
      active: active,
      paragraph: false,
      title: {
        style: {
          marginTop: 0
        }
      }
    }), /*#__PURE__*/React.createElement(_Skeleton, {
      active: active,
      paragraph: false,
      title: {
        style: {
          marginTop: 8
        }
      }
    }), /*#__PURE__*/React.createElement(_Skeleton, {
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


export var TableItemSkeleton = function TableItemSkeleton(_ref3) {
  var active = _ref3.active,
      _ref3$header = _ref3.header,
      header = _ref3$header === void 0 ? false : _ref3$header;
  var colSize = useMediaQuery();
  var arraySize = MediaQueryKeyEnum[colSize] || 3;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: header ? 'rgba(0,0,0,0.02)' : 'none',
      padding: '24px 8px'
    }
  }, new Array(arraySize).fill(null).map(function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index,
      style: {
        flex: 1,
        paddingLeft: header && index === 0 ? 0 : 20,
        paddingRight: 32
      }
    }, /*#__PURE__*/React.createElement(_Skeleton, {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 3,
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement(_Skeleton, {
    active: active,
    paragraph: false,
    title: {
      style: {
        margin: 0,
        height: 24,
        width: header ? '75px' : '100%'
      }
    }
  }))), /*#__PURE__*/React.createElement(Line, {
    padding: "0px 0px"
  }));
};
/**
 * Table 骨架屏
 *
 * @param param0
 */

export var TableSkeleton = function TableSkeleton(_ref4) {
  var active = _ref4.active,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 4 : _ref4$size;
  return /*#__PURE__*/React.createElement(_Card, {
    bordered: false
  }, /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    size: "small",
    style: {
      width: 100,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(TableItemSkeleton, {
    header: true,
    active: active
  }), new Array(size).fill(null).map(function (_, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(TableItemSkeleton, {
        key: index,
        active: active
      })
    );
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(_Skeleton, {
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
export var DescriptionsSkeleton = function DescriptionsSkeleton(_ref5) {
  var active = _ref5.active;
  return /*#__PURE__*/React.createElement(_Card, {
    bordered: false,
    style: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0
    }
  }, /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    size: "small",
    style: {
      width: 100,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(DescriptionsItemSkeleton, {
    active: active
  }), /*#__PURE__*/React.createElement(DescriptionsLargeItemSkeleton, {
    active: active
  }));
};

var DescriptionsPageSkeleton = function DescriptionsPageSkeleton(_ref6) {
  var _ref6$active = _ref6.active,
      active = _ref6$active === void 0 ? true : _ref6$active,
      pageHeader = _ref6.pageHeader,
      list = _ref6.list;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, pageHeader !== false && /*#__PURE__*/React.createElement(PageHeaderSkeleton, {
    active: active
  }), /*#__PURE__*/React.createElement(DescriptionsSkeleton, {
    active: active
  }), list !== false && /*#__PURE__*/React.createElement(Line, null), list !== false && /*#__PURE__*/React.createElement(TableSkeleton, {
    active: active,
    size: list
  }));
};

export default DescriptionsPageSkeleton;