import React from 'react';
import type { FormProps, FormItemProps, FormInstance } from 'antd';
import type { SubmitterProps } from '../components/Submitter';
import type { GroupProps, FieldProps } from '../interface';
export declare type CommonFormProps<T extends Record<string, any> = Record<string, any>> = {
    submitter?: SubmitterProps<{
        form?: FormInstance<any>;
    }> | false;
    /**
     * 支持异步操作，更加方便
     *
     * @name 表单结束后调用
     */
    onFinish?: (formData: T) => Promise<boolean | void>;
    /** @name 获取真正的可以获得值的 from */
    formRef?: React.MutableRefObject<FormInstance | undefined>;
    /** @name 同步结果到 url 中 */
    syncToUrl?: true | ((values: T, type: 'get' | 'set') => T);
    /**
     * 如果为 false,会原样保存。
     *
     * @default true
     * @param 要不要值中的 Null 和 undefined
     */
    omitNil?: boolean;
};
export declare type BaseFormProps<T = Record<string, any>> = {
    contentRender?: (items: React.ReactNode[], submitter: React.ReactElement<SubmitterProps> | undefined, form: FormInstance<any>) => React.ReactNode;
    fieldProps?: FieldProps;
    onInit?: (values: T) => void;
    dateFormatter?: 'number' | 'string' | false;
    formItemProps?: FormItemProps;
    groupProps?: GroupProps;
} & Omit<FormProps, 'onFinish'> & CommonFormProps<T>;
declare function BaseForm<T = Record<string, any>>(props: BaseFormProps<T>): JSX.Element;
export type { FormProps, FormItemProps, FormInstance };
export default BaseForm;
