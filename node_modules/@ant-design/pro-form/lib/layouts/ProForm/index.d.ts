import React from 'react';
import type { FormProps } from 'antd';
import type { CommonFormProps } from '../../BaseForm';
export declare type ProFormProps<T = Record<string, any>> = Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T>;
declare function ProForm<T = Record<string, any>>(props: ProFormProps<T>): JSX.Element;
declare namespace ProForm {
    var Group: React.FC<import("../../interface").GroupProps>;
    var useForm: typeof import("antd/lib/form/Form").useForm;
    var Item: typeof import("antd/lib/form/FormItem").default;
}
export default ProForm;
