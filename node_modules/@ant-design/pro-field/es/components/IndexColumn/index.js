import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import classnames from 'classnames';
import './index.less';
/**
 * 默认的 index 列容器，提供一个好看的 index
 *
 * @param param0
 */

var IndexColumn = function IndexColumn(_ref, ref) {
  var _classnames;

  var _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      children = _ref.children;

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-field-index-column');
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(className, "-border"), border), _defineProperty(_classnames, 'top-three', children > 3), _classnames))
  }, children);
};

export default /*#__PURE__*/React.forwardRef(IndexColumn);