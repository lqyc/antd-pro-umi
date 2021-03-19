import React from 'react';
import type { SelectProps } from 'antd';
import type { LabeledValue } from 'antd/es/select';
export declare type KeyLabel = Partial<LabeledValue>;
/** 用户扩展数据后的值类型 */
export declare type DataValueType<T> = KeyLabel & T;
/** 可能单选，可能多选 */
export declare type DataValuesType<T> = DataValueType<T> | DataValueType<T>[];
export interface SearchSelectProps<T = Record<string, any>> extends SelectProps<KeyLabel | KeyLabel[]> {
    /** 自定义搜索方法, 返回搜索结果的 Promise */
    request?: (params: {
        query: string;
    }) => Promise<DataValueType<T>[]>;
    /** 自定义选项渲染 */
    optionItemRender?: (item: DataValueType<T>) => React.ReactNode;
    /** 指定组件中的值 */
    value?: KeyLabel | KeyLabel[];
    /** 指定默认选中的条目 */
    defaultValue?: KeyLabel | KeyLabel[];
    /**
     * 样式
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * ClassName 类名
     *
     * @ignore
     */
    className?: string;
    /**
     * Placeholder 输入提示
     *
     * @default 请输入关键字搜索
     */
    placeholder?: string;
    /**
     * 是否在输入框聚焦时触发搜索
     *
     * @default false
     */
    searchOnFocus?: boolean;
    /**
     * 选择完一个之后是否清空搜索项重新搜索
     *
     * @default false
     */
    resetAfterSelect?: boolean;
    /**
     * 自定义前缀
     *
     * @ignore
     */
    prefixCls?: string;
    /** 刷新数据 */
    fetchData: (keyWord: string) => void;
    /** 清空数据 */
    resetData: () => void;
}
declare const _default: React.ForwardRefExoticComponent<SearchSelectProps<unknown> & React.RefAttributes<unknown>>;
export default _default;
