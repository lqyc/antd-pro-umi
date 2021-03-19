import React from 'react';
import type { FormItemProps } from 'antd';
import type { ProFieldValueType, SearchTransformKeyFn } from '@ant-design/pro-utils';
import type { ProFormItemProps } from '../interface';
export declare type ProFormItemCreateConfig = {
    /** 自定义类型 */
    valueType?: ProFieldValueType;
    /** 自定义 lightMode */
    customLightMode?: boolean;
    /** Light mode 自定义的 label 模式 */
    lightFilterLabelFormatter?: (value: any) => string;
} & FormItemProps;
declare type ProFormComponent<P, Extends> = React.ComponentType<Omit<P & Extends, 'proFieldProps'>>;
export declare type ExtendsProps = {
    secondary?: boolean;
    allowClear?: boolean;
    bordered?: boolean;
    colSize?: number;
    /**
     * 需要与 request 配合使用
     *
     * @name 网络请求用的输出，会触发reload
     */
    params?: any;
    /** @name 需要放在formItem 时使用 */
    ignoreFormItem?: boolean;
    /**
     * 实验性质，可能 api 会有改动，谨慎使用
     *
     * @name 只读模式
     */
    readonly?: boolean;
    /** @name 提交时转化值，一般用于数组类型 */
    transform?: SearchTransformKeyFn;
    /**
     * 给 protable 开的口子
     *
     * @name 自定义的 formItemProps
     */
    formItemProps?: FormItemProps;
};
/**
 * 这个方法的主要作用的帮助 Field 增加 FormItem 同时也会处理 lightFilter
 *
 * @param Field
 * @param config
 */
declare function createField<P extends ProFormItemProps = any>(Field: React.ComponentType<P> | React.ForwardRefExoticComponent<P>, config?: ProFormItemCreateConfig): ProFormComponent<P, ExtendsProps>;
export default createField;
