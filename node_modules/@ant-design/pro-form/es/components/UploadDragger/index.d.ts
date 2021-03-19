import React from 'react';
import type { DraggerProps, UploadProps } from 'antd/lib/upload';
import type { ProFormItemProps } from '../../interface';
export declare type ProFormDraggerProps = ProFormItemProps<DraggerProps> & {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    action?: UploadProps['action'];
    accept?: UploadProps['accept'];
    description?: React.ReactNode;
    /** 最大文件个数 */
    max?: number;
    value?: UploadProps['fileList'];
    onChange?: UploadProps['onChange'];
};
declare const _default: React.ComponentType<Pick<{
    fieldProps?: (import("../../interface").FieldProps & UploadProps<any> & {
        height?: number | undefined;
    }) | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    allowClear?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "sm" | "md" | "xl" | "xs" | "lg" | undefined;
    proFieldProps?: {
        light?: boolean | undefined;
        label?: React.ReactNode;
        mode?: "read" | undefined;
    } | undefined;
} & import("antd").FormItemProps<any> & {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    action?: string | ((file: import("antd/lib/upload").RcFile) => string) | ((file: import("antd/lib/upload").RcFile) => PromiseLike<string>) | undefined;
    accept?: string | undefined;
    description?: React.ReactNode;
    /** 最大文件个数 */
    max?: number | undefined;
    value?: import("antd/lib/upload/interface").UploadFile<any>[] | undefined;
    onChange?: ((info: import("antd/lib/upload").UploadChangeParam<import("antd/lib/upload/interface").UploadFile<any>>) => void) | undefined;
} & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "title" | "value" | "onChange" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "icon" | "max" | "required" | "width" | "accept" | "action" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status" | "description">>;
export default _default;
