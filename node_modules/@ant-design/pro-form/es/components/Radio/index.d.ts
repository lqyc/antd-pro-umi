import React from 'react';
import type { RadioProps, RadioGroupProps } from 'antd';
import { Radio } from 'antd';
import type { ProSchema } from '@ant-design/pro-utils';
import type { ProFormItemProps } from '../../interface';
export declare type ProFormRadioGroupProps = ProFormItemProps<RadioGroupProps> & {
    layout?: 'horizontal' | 'vertical';
    radioType?: 'button' | 'radio';
    options?: RadioGroupProps['options'];
    valueEnum?: ProSchema['valueEnum'];
    request?: ProSchema['request'];
};
declare const Group: React.ComponentType<Pick<{
    fieldProps?: (import("../../interface").FieldProps & RadioGroupProps) | undefined;
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
    layout?: "horizontal" | "vertical" | undefined;
    radioType?: "radio" | "button" | undefined;
    options?: RadioGroupProps['options'];
    valueEnum?: ProSchema['valueEnum'];
    request?: ProSchema['request'];
} & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "required" | "width" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status" | "layout" | "valueEnum" | "options" | "request" | "radioType">>;
declare const WrappedProFormRadio: React.ComponentType<ProFormItemProps<RadioProps>> & {
    Group: typeof Group;
    Button: typeof Radio.Button;
};
export default WrappedProFormRadio;
