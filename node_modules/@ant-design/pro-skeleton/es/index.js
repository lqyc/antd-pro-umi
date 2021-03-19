function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import ListPageSkeleton, { PageHeaderSkeleton, ListToolbarSkeleton, ListSkeleton, ListSkeletonItem } from './component/List';
import ResultPageSkeleton from './component/Result';
import DescriptionsPageSkeleton, { TableItemSkeleton, DescriptionsSkeleton, TableSkeleton } from './component/Descriptions';

var PageSkeleton = function PageSkeleton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'list' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["type"]);

  if (type === 'result') {
    return /*#__PURE__*/React.createElement(ResultPageSkeleton, rest);
  }

  if (type === 'descriptions') {
    return /*#__PURE__*/React.createElement(DescriptionsPageSkeleton, rest);
  }

  return /*#__PURE__*/React.createElement(ListPageSkeleton, rest);
};

export { ListPageSkeleton, ListSkeleton, ListSkeletonItem, PageHeaderSkeleton, ListToolbarSkeleton, DescriptionsSkeleton, TableSkeleton, TableItemSkeleton };
export default PageSkeleton;