import React from 'react';
import type { InputProps, SelectProps } from 'antd';
import type { ProSchema } from '@ant-design/pro-utils';
import type { ProFormItemProps } from '../../interface';
export declare type ProFormFieldProps = ProSchema<string, ProFormItemProps<InputProps & SelectProps<string>> & {
    mode?: 'edit' | 'read' | 'update';
    isDefaultDom?: boolean;
    ref?: any;
    plain?: boolean;
}>;
declare const _default: React.ComponentType<Pick<{
    key?: string | number | undefined;
    dataIndex?: string | number | React.ReactText[] | undefined;
    valueType?: "password" | "money" | "textarea" | "option" | "date" | "dateWeek" | "dateMonth" | "dateQuarter" | "dateYear" | "dateRange" | "dateTimeRange" | "dateTime" | "time" | "timeRange" | "text" | "select" | "checkbox" | "rate" | "radio" | "radioButton" | "index" | "indexBorder" | "progress" | "percent" | "digit" | "second" | "avatar" | "code" | "switch" | "fromNow" | "image" | "jsonCode" | import("@ant-design/pro-utils").ProFieldValueObjectType | ((entity: string, type: import("@ant-design/pro-utils").ProSchemaComponentTypes) => "password" | "money" | "textarea" | "option" | "date" | "dateWeek" | "dateMonth" | "dateQuarter" | "dateYear" | "dateRange" | "dateTimeRange" | "dateTime" | "time" | "timeRange" | "text" | "select" | "checkbox" | "rate" | "radio" | "radioButton" | "index" | "indexBorder" | "progress" | "percent" | "digit" | "second" | "avatar" | "code" | "switch" | "fromNow" | "image" | "jsonCode" | import("@ant-design/pro-utils").ProFieldValueObjectType) | undefined;
    title?: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((schema: ProSchema<string, {
        fieldProps?: (import("../../interface").FieldProps & InputProps & SelectProps<string>) | undefined;
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
        mode?: "read" | "edit" | "update" | undefined;
        isDefaultDom?: boolean | undefined;
        ref?: any;
        plain?: boolean | undefined;
    }, import("@ant-design/pro-utils").ProSchemaComponentTypes, "text">, type: import("@ant-design/pro-utils").ProSchemaComponentTypes, dom: React.ReactNode) => React.ReactNode) | null | undefined;
    tooltip?: string | undefined;
    tip?: string | undefined;
    render?: ((dom: React.ReactNode, entity: string, index: number, action: import("@ant-design/pro-utils").ProCoreActionType<{}>, schema: any & {
        fieldProps?: (import("../../interface").FieldProps & InputProps & SelectProps<string>) | undefined;
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
        mode?: "read" | "edit" | "update" | undefined;
        isDefaultDom?: boolean | undefined;
        ref?: any;
        plain?: boolean | undefined;
    } & {
        isEditable?: boolean | undefined;
        type: import("@ant-design/pro-utils").ProSchemaComponentTypes;
    }) => React.ReactNode) | undefined;
    renderFormItem?: ((schema: any & {
        fieldProps?: (import("../../interface").FieldProps & InputProps & SelectProps<string>) | undefined;
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
        mode?: "read" | "edit" | "update" | undefined;
        isDefaultDom?: boolean | undefined;
        ref?: any;
        plain?: boolean | undefined;
    } & {
        isEditable?: boolean | undefined;
        index?: number | undefined;
        type: import("@ant-design/pro-utils").ProSchemaComponentTypes;
    }, config: {
        onSelect?: ((value: any) => void) | undefined;
        type: import("@ant-design/pro-utils").ProSchemaComponentTypes;
        recordKey?: string | number | React.ReactText[] | undefined;
        record?: string | undefined;
        isEditable?: boolean | undefined;
        defaultRender: (newItem: ProSchema<string, {
            fieldProps?: (import("../../interface").FieldProps & InputProps & SelectProps<string>) | undefined;
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
            mode?: "read" | "edit" | "update" | undefined;
            isDefaultDom?: boolean | undefined;
            ref?: any;
            plain?: boolean | undefined;
        }, import("@ant-design/pro-utils").ProSchemaComponentTypes, "text">) => JSX.Element | null;
    }, form: import("antd").FormInstance<any>) => React.ReactNode) | undefined;
    renderText?: ((text: any, record: string, index: number, action: import("@ant-design/pro-utils").ProCoreActionType<{}>) => any) | undefined;
    fieldProps?: Object | ((form: import("antd").FormInstance<any>, config: any & {
        fieldProps?: (import("../../interface").FieldProps & InputProps & SelectProps<string>) | undefined;
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
        mode?: "read" | "edit" | "update" | undefined;
        isDefaultDom?: boolean | undefined;
        ref?: any;
        plain?: boolean | undefined;
    } & {
        type: import("@ant-design/pro-utils").ProSchemaComponentTypes;
        isEditable?: boolean | undefined;
        rowKey?: string | undefined;
        rowIndex: number;
    }) => Object) | undefined;
    formItemProps?: import("antd").FormItemProps<any> | ((form: import("antd").FormInstance<any>, config: any & {
        fieldProps?: (import("../../interface").FieldProps & InputProps & SelectProps<string>) | undefined;
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
        mode?: "read" | "edit" | "update" | undefined;
        isDefaultDom?: boolean | undefined;
        ref?: any;
        plain?: boolean | undefined;
    } & {
        type: import("@ant-design/pro-utils").ProSchemaComponentTypes;
        isEditable?: boolean | undefined;
        rowKey?: string | undefined;
        rowIndex: number;
    }) => import("antd").FormItemProps<any>) | undefined;
    editable?: false | import("@ant-design/pro-utils").ProTableEditableFnType<string> | undefined;
    valueEnum?: Record<string, string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | import("@ant-design/pro-utils/lib/typing").ProSchemaValueEnumType | null | undefined> | import("@ant-design/pro-utils").ProSchemaValueEnumMap | ((row: string) => Record<string, string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | import("@ant-design/pro-utils/lib/typing").ProSchemaValueEnumType | null | undefined> | import("@ant-design/pro-utils").ProSchemaValueEnumMap) | undefined;
    request?: import("@ant-design/pro-utils").ProFieldRequestData<any> | undefined;
    params?: Record<string, any> | undefined;
    hideInDescriptions?: boolean | undefined;
} & {
    fieldProps?: (import("../../interface").FieldProps & InputProps & SelectProps<string>) | undefined;
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
    mode?: "read" | "edit" | "update" | undefined;
    isDefaultDom?: boolean | undefined;
    ref?: any;
    plain?: boolean | undefined;
} & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "title" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "ref" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "required" | "width" | "key" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status" | "valueType" | "mode" | "plain" | "valueEnum" | "request" | "isDefaultDom" | "render" | "renderFormItem" | "dataIndex" | "tip" | "renderText" | "editable" | "hideInDescriptions">>;
export default _default;
