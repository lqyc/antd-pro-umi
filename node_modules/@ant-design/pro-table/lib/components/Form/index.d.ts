import React from 'react';
import type { FormInstance, FormItemProps } from 'antd';
import type { IntlType } from '@ant-design/pro-provider';
import type { BaseQueryFilterProps, ProFormProps } from '@ant-design/pro-form';
import type { ProSchemaComponentTypes } from '@ant-design/pro-utils';
import type { ProColumns } from '../../index';
import './index.less';
export declare type SearchConfig = BaseQueryFilterProps & {
    filterType?: 'query' | 'light';
};
export declare type TableFormItem<T, U = any> = {
    onSubmit?: (value: T, firstLoad: boolean) => void;
    onReset?: (value: T) => void;
    form?: Omit<ProFormProps, 'form'>;
    type?: ProSchemaComponentTypes;
    dateFormatter?: 'string' | 'number' | false;
    search?: false | SearchConfig;
    columns: ProColumns<U, any>[];
    formRef: React.MutableRefObject<FormInstance | undefined>;
    submitButtonLoading?: boolean;
    manualRequest?: boolean;
    bordered?: boolean;
} & Omit<FormItemProps, 'children' | 'onReset'>;
/**
 * 把配置转化为输入控件
 *
 * @param props
 * @param ref
 */
export declare const formInputRender: React.FC<{
    item: ProColumns<any>;
    value?: any;
    form?: FormInstance<any>;
    type: ProSchemaComponentTypes;
    intl: IntlType;
    onChange?: (value: any) => void;
    onSelect?: (value: any) => void;
    [key: string]: any;
}>;
export declare const proFormItemRender: (props: {
    item: ProColumns<any>;
    isForm: boolean;
    type: ProSchemaComponentTypes;
    intl: IntlType;
    formInstance?: FormInstance;
}) => null | JSX.Element;
declare const _default: <T, U = any>({ onSubmit, formRef, dateFormatter, type, columns, manualRequest, onReset, submitButtonLoading, search: searchConfig, form: formConfig, bordered, }: TableFormItem<T, U>) => JSX.Element;
export default _default;
