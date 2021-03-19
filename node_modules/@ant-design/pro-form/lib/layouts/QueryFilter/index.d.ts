import React from 'react';
import type { FormProps } from 'antd/lib/form/Form';
import type { CommonFormProps } from '../../BaseForm';
import type { ActionsProps } from './Actions';
export declare type SpanConfig = number | {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export declare type BaseQueryFilterProps = Omit<ActionsProps, 'submitter' | 'setCollapsed' | 'isForm'> & {
    defaultCollapsed?: boolean;
    layout?: FormProps['layout'];
    defaultColsNumber?: number;
    labelWidth?: number | 'auto';
    split?: boolean;
    /** 配置列数 */
    span?: SpanConfig;
    /** 查询按钮的文本 */
    searchText?: string;
    /** 重置按钮的文本 */
    resetText?: string;
    form?: FormProps['form'];
    /**
     * @param searchConfig 基础的配置
     * @param props 更加详细的配置 {
     *     type?: 'form' | 'list' | 'table' | 'cardList' | undefined;
     *     form: FormInstance;
     *     submit: () => void;
     *     collapse: boolean;
     *     setCollapse: (collapse: boolean) => void;
     *     showCollapseButton: boolean; }
     * @name 底部操作栏的 render
     */
    optionRender?: ((searchConfig: Omit<BaseQueryFilterProps, 'submitter' | 'isForm'>, props: Omit<BaseQueryFilterProps, 'searchConfig'>, dom: React.ReactNode[]) => React.ReactNode[]) | false;
    /** 忽略 Form.Item 规则 */
    ignoreRules?: boolean;
};
export declare type QueryFilterProps<T = Record<string, any>> = Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T> & BaseQueryFilterProps & {
    onReset?: (values: T) => void;
};
declare function QueryFilter<T = Record<string, any>>(props: QueryFilterProps<T>): JSX.Element;
export default QueryFilter;
