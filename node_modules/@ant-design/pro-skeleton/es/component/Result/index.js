import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/skeleton/style";
import _Skeleton from "antd/es/skeleton";
import React from 'react';
import { PageHeaderSkeleton } from '../List';

var ResultPageSkeleton = function ResultPageSkeleton(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active,
      pageHeader = _ref.pageHeader;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, pageHeader !== false && /*#__PURE__*/React.createElement(PageHeaderSkeleton, {
    active: active
  }), /*#__PURE__*/React.createElement(_Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 128
    }
  }, /*#__PURE__*/React.createElement(_Skeleton.Avatar, {
    size: 64,
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    style: {
      width: 214,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    style: {
      width: 328
    },
    size: "small"
  }), /*#__PURE__*/React.createElement(_Space, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    style: {
      width: 116
    }
  }), /*#__PURE__*/React.createElement(_Skeleton.Button, {
    active: active,
    style: {
      width: 116
    }
  })))));
};

export default ResultPageSkeleton;