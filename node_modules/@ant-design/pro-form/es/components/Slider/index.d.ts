import React from 'react';
import type { SliderSingleProps } from 'antd';
import type { ProFormItemProps } from '../../interface';
export declare type ProFormSliderProps = ProFormItemProps<SliderSingleProps> & {
    range?: boolean;
    min?: SliderSingleProps['min'];
    max?: SliderSingleProps['max'];
    step?: SliderSingleProps['step'];
    marks?: SliderSingleProps['marks'];
    vertical?: SliderSingleProps['vertical'];
};
declare const _default: React.ComponentType<Pick<{
    fieldProps?: (import("../../interface").FieldProps & SliderSingleProps) | undefined;
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
    range?: boolean | undefined;
    min?: number | undefined;
    max?: number | undefined;
    step?: number | null | undefined;
    marks?: import("antd/lib/slider").SliderMarks | undefined;
    vertical?: boolean | undefined;
} & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "step" | "vertical" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "max" | "required" | "width" | "htmlFor" | "min" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status" | "range" | "marks">>;
export default _default;
