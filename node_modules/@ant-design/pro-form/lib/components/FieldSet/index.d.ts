import React from 'react';
import type { FormItemProps, SpaceProps } from 'antd';
export declare type ProFormFieldSetProps<T = any> = {
    value?: T[];
    onChange?: (value: T[]) => void;
    space?: SpaceProps;
    valuePropName?: string;
};
export declare function defaultGetValueFromEvent(valuePropName: string, ...args: any): any;
declare const _default: React.ComponentType<Pick<FormItemProps<any> & {
    space?: SpaceProps | undefined;
} & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "valuePropName" | "id" | "className" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "required" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status" | "space">>;
export default _default;
