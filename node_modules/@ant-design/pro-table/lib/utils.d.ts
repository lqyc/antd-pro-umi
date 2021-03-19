import React from 'react';
import type { TablePaginationConfig, TableColumnType } from 'antd';
import type { ProSchemaComponentTypes, UseEditableUtilType } from '@ant-design/pro-utils';
import type { ProFieldEmptyText } from '@ant-design/pro-field';
import type { IntlType } from '@ant-design/pro-provider';
import type { ActionType, ProColumns, UseFetchDataAction } from './typing';
import type { ColumnsState, useContainer } from './container';
/**
 * 检查值是否存在 为了 避开 0 和 false
 *
 * @param value
 */
export declare const checkUndefinedOrNull: (value: any) => boolean;
/**
 * 根据 key 和 dataIndex 生成唯一 id
 *
 * @param key 用户设置的 key
 * @param dataIndex 在对象中的数据
 * @param index 序列号，理论上唯一
 */
export declare const genColumnKey: (key?: React.ReactText | undefined, index?: number | undefined) => string;
/**
 * 生成 Copyable 或 Ellipsis 的 dom
 *
 * @param dom
 * @param item
 * @param text
 */
export declare const genCopyable: (dom: React.ReactNode, item: ProColumns<any>, text: string) => {} | null | undefined;
/**
 * 合并用户 props 和 预设的 props
 *
 * @param pagination
 * @param action
 * @param intl
 */
export declare function mergePagination<T>(pagination: boolean | TablePaginationConfig | undefined, pageInfo: UseFetchDataAction<T>['pageInfo'] & {
    setPageInfo: any;
}, intl: IntlType): TablePaginationConfig | false | undefined;
/**
 * 获取用户的 action 信息
 *
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */
export declare function useActionType<T>(ref: React.MutableRefObject<ActionType | undefined>, action: UseFetchDataAction<T>, props: {
    fullScreen: () => void;
    onCleanSelected: () => void;
    resetAll: () => void;
    editableUtils: UseEditableUtilType;
}): void;
declare type PostDataType<T> = (data: T) => T;
/**
 * 一个转化的 pipeline 列表
 *
 * @param data
 * @param pipeline
 */
export declare function postDataPipeline<T>(data: T, pipeline: PostDataType<T>[]): T;
export declare const tableColumnSort: (columnsMap: Record<string, ColumnsState>) => (a: any, b: any) => number;
/**
 * 增加了 icon 的功能 render title
 *
 * @param item
 */
export declare const renderColumnsTitle: (item: ProColumns<any>) => any;
export declare const defaultOnFilter: (value: string, record: any, dataIndex: string | string[]) => boolean;
/** 转化列的定义 */
declare type ColumnRenderInterface<T> = {
    columnProps: ProColumns<T>;
    text: any;
    rowData: T;
    index: number;
    columnEmptyText?: ProFieldEmptyText;
    type: ProSchemaComponentTypes;
    counter: ReturnType<typeof useContainer>;
    editableUtils: UseEditableUtilType;
};
/**
 * 这个组件负责单元格的具体渲染
 *
 * @param param0
 */
export declare function columnRender<T>({ columnProps, text, rowData, index, columnEmptyText, counter, type, editableUtils, }: ColumnRenderInterface<T>): any;
/**
 * 转化 columns 到 pro 的格式 主要是 render 方法的自行实现
 *
 * @param columns
 * @param map
 * @param columnEmptyText
 */
export declare function genColumnList<T>(props: {
    columns: ProColumns<T, any>[];
    map: Record<string, ColumnsState>;
    counter: ReturnType<typeof useContainer>;
    columnEmptyText: ProFieldEmptyText;
    type: ProSchemaComponentTypes;
    editableUtils: UseEditableUtilType;
}): (TableColumnType<T> & {
    index?: number;
})[];
export {};
