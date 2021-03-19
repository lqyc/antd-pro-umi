import React from 'react';
import type { InputProps } from 'antd';
import type { PasswordProps } from 'antd/lib/input';
/**
 * 文本组件
 *
 * @param
 */
declare const ProFormText: React.ComponentType<Pick<{
    fieldProps?: (import("../../interface").FieldProps & InputProps) | undefined;
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
} & import("antd").FormItemProps<any> & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "required" | "width" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status">>;
declare const Password: React.ComponentType<Pick<{
    fieldProps?: (import("../../interface").FieldProps & PasswordProps) | undefined;
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
} & import("antd").FormItemProps<any> & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "required" | "width" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status">>;
declare const WrappedProFormText: typeof ProFormText & {
    Password: typeof Password;
};
export default WrappedProFormText;
