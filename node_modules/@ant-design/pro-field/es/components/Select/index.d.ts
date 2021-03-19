import type { ReactNode } from 'react';
import React from 'react';
import type { SelectProps } from 'antd';
import type { ProFieldRequestData, ProFieldValueEnumType, ProSchemaValueEnumMap } from '@ant-design/pro-utils';
export declare type FieldSelectProps = {
    text: string;
    /** 值的枚举，如果存在枚举，Search 中会生成 select */
    valueEnum?: ProFieldValueEnumType;
    /** 从服务器读取选项 */
    request?: ProFieldRequestData;
    /** 重新触发的时机 */
    params?: any;
    /** 组件的全局设置 */
    fieldProps?: any;
};
export declare const ObjToMap: (value: ProFieldValueEnumType | undefined) => ProSchemaValueEnumMap;
/**
 * 转化 text 和 valueEnum 通过 type 来添加 Status
 *
 * @param text
 * @param valueEnum
 * @param pure 纯净模式，不增加 status
 */
export declare const proFieldParsingText: (text: string | number | (string | number)[], valueEnumParams: ProFieldValueEnumType) => React.ReactNode;
/**
 * 把 value 的枚举转化为数组
 *
 * @param valueEnum
 */
export declare const proFieldParsingValueEnumToArray: (valueEnumParams?: ProFieldValueEnumType | undefined) => {
    value: string | number;
    text: string;
}[];
export declare const useFieldFetchData: (props: FieldSelectProps & {
    proFieldKey?: React.Key;
}) => [boolean, import("rc-select/lib/interface").OptionsType | undefined, (keyWord?: string | undefined) => void, () => void];
declare const _default: React.ForwardRefExoticComponent<import("@ant-design/pro-provider").BaseProFieldFC & import("@ant-design/pro-provider").ProRenderFieldPropsType & FieldSelectProps & React.RefAttributes<any>>;
export default _default;
