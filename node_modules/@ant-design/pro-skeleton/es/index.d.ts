import React from 'react';
import type { ListPageSkeletonProps } from './component/List';
import ListPageSkeleton, { PageHeaderSkeleton, ListToolbarSkeleton, ListSkeleton, ListSkeletonItem } from './component/List';
import type { DescriptionsPageSkeletonProps } from './component/Descriptions';
import { TableItemSkeleton, DescriptionsSkeleton, TableSkeleton } from './component/Descriptions';
declare const PageSkeleton: React.FC<ListPageSkeletonProps & DescriptionsPageSkeletonProps & {
    type?: 'list' | 'result' | 'descriptions';
    active?: boolean;
}>;
export { ListPageSkeleton, ListSkeleton, ListSkeletonItem, PageHeaderSkeleton, ListToolbarSkeleton, DescriptionsSkeleton, TableSkeleton, TableItemSkeleton, };
export default PageSkeleton;
