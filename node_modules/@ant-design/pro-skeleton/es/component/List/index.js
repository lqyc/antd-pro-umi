import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/skeleton/style";
import _Skeleton from "antd/es/skeleton";
import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import React from 'react';
import useMediaQuery from 'use-media-antd-query';

/** 一条分割线 */
export var Line = function Line(_ref) {
  var padding = _ref.padding;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding || '0 24px'
    }
  }, /*#__PURE__*/React.createElement(_Divider, {
    style: {
      margin: 0
    }
  }));
};
export var MediaQueryKeyEnum = {
  xs: 2,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 6
};

var StatisticSkeleton = function StatisticSkeleton(_ref2) {
  var size = _ref2.size,
      active = _ref2.active;
  var colSize = useMediaQuery();
  var arraySize = size === undefined ? MediaQueryKeyEnum[colSize] || 6 : size;

  var firstWidth = function firstWidth(index) {
    if (arraySize > 2 && index !== 0) {
      return 42;
    }

    if (index === 0) {
      return 0;
    }

    return 16;
  };

  return /*#__PURE__*/React.createElement(_Card, {
    bordered: false,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
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
        borderLeft: arraySize > 2 && index === 1 ? '1px solid rgba(0,0,0,0.06)' : undefined,
        paddingLeft: firstWidth(index),
        flex: 1,
        marginRight: index === 0 ? 16 : 0
      }
    }, /*#__PURE__*/React.createElement(_Skeleton, {
      active: active,
      paragraph: false,
      title: {
        width: 100,
        style: {
          marginTop: 0
        }
      }
    }), /*#__PURE__*/React.createElement(_Skeleton.Button, {
      active: active,
      style: {
        height: 48
      }
    }));
  })));
};
/** 列表子项目骨架屏 */


export var ListSkeletonItem = function ListSkeletonItem(_ref3) {
  var active = _ref3.active;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Card, {
    bordered: false // eslint-disable-next-line react/no-array-index-key
    ,
    style: {
      borderRadius: 0
    },
    bodyStyle: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '100%',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(_Skeleton, {
    active: active,
    title: {
      width: 100,
      style: {
        marginTop: 0
      }
    },
    paragraph: {
      rows: 1,
      style: {
        margin: 0
      }
    }
  })), /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    size: "small",
    style: {
      width: 165,
      marginTop: 12
    }
  }))), /*#__PURE__*/React.createElement(Line, null));
};
/** 列表骨架屏 */

export var ListSkeleton = function ListSkeleton(_ref4) {
  var size = _ref4.size,
      _ref4$active = _ref4.active,
      active = _ref4$active === void 0 ? true : _ref4$active,
      actionButton = _ref4.actionButton;
  return /*#__PURE__*/React.createElement(_Card, {
    bordered: false,
    bodyStyle: {
      padding: 0
    }
  }, new Array(size).fill(null).map(function (_, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(ListSkeletonItem, {
        key: index,
        active: !!active
      })
    );
  }), actionButton !== false && /*#__PURE__*/React.createElement(_Card, {
    bordered: false,
    style: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0
    },
    bodyStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(_Skeleton.Button, {
    style: {
      width: 102
    },
    active: active,
    size: "small"
  })));
};
/**
 * 面包屑的 骨架屏
 *
 * @param param0
 */

export var PageHeaderSkeleton = function PageHeaderSkeleton(_ref5) {
  var active = _ref5.active;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(_Skeleton, {
    paragraph: false,
    title: {
      width: 185
    }
  }), /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    size: "small"
  }));
};
/**
 * 列表操作栏的骨架屏
 *
 * @param param0
 */

export var ListToolbarSkeleton = function ListToolbarSkeleton(_ref6) {
  var active = _ref6.active;
  return /*#__PURE__*/React.createElement(_Card, {
    bordered: false,
    style: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    },
    bodyStyle: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(_Space, {
    style: {
      width: '100%',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    style: {
      width: 200
    },
    size: "small"
  }), /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    size: "small",
    style: {
      width: 120
    }
  }), /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    size: "small",
    style: {
      width: 80
    }
  }))));
};

var ListPageSkeleton = function ListPageSkeleton(_ref7) {
  var _ref7$active = _ref7.active,
      active = _ref7$active === void 0 ? true : _ref7$active,
      statistic = _ref7.statistic,
      actionButton = _ref7.actionButton,
      toolbar = _ref7.toolbar,
      pageHeader = _ref7.pageHeader,
      _ref7$list = _ref7.list,
      list = _ref7$list === void 0 ? 5 : _ref7$list;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, pageHeader !== false && /*#__PURE__*/React.createElement(PageHeaderSkeleton, {
    active: active
  }), statistic !== false && /*#__PURE__*/React.createElement(StatisticSkeleton, {
    size: statistic,
    active: active
  }), (toolbar !== false || list !== false) && /*#__PURE__*/React.createElement(_Card, {
    bordered: false,
    bodyStyle: {
      padding: 0
    }
  }, toolbar !== false && /*#__PURE__*/React.createElement(ListToolbarSkeleton, {
    active: active
  }), list !== false && /*#__PURE__*/React.createElement(ListSkeleton, {
    size: list,
    active: active,
    actionButton: actionButton
  })));
};

export default ListPageSkeleton;