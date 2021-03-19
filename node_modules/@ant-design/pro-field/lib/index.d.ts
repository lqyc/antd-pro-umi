import React from 'react';
import type { ProFieldValueType, ProFieldValueObjectType, BaseProFieldFC, ProRenderFieldPropsType, ProFieldFCRenderProps, ProFieldTextType } from '@ant-design/pro-utils';
import FieldPercent from './components/Percent';
import FieldIndexColumn from './components/IndexColumn';
import FieldProgress from './components/Progress';
import FieldMoney from './components/Money';
import FieldDatePicker from './components/DatePicker';
import FieldRangePicker from './components/RangePicker';
import FieldCode from './components/Code';
import FieldTimePicker from './components/TimePicker';
import FieldText from './components/Text';
import FieldStatus from './components/Status';
import FieldSelect, { proFieldParsingText, proFieldParsingValueEnumToArray } from './components/Select';
export declare type ProFieldEmptyText = string | false;
/** 默认的 Field 需要实现的功能 */
export declare type ProFieldFC<T> = React.ForwardRefRenderFunction<any, BaseProFieldFC & ProRenderFieldPropsType & T>;
/** Value type by function */
export declare type ProFieldValueTypeFunction<T> = (item: T) => ProFieldValueType | ProFieldValueObjectType;
declare type RenderProps = Omit<ProFieldFCRenderProps, 'text'> & ProRenderFieldPropsType & {
    emptyText?: React.ReactNode;
    visible?: boolean;
    onVisible?: (visible: boolean) => void;
    [key: string]: any;
};
/**
 * 根据不同的类型来转化数值
 *
 * @param text
 * @param valueType
 */
declare const defaultRenderText: (text: ProFieldTextType, valueType: ProFieldValueType | ProFieldValueObjectType, props: RenderProps, valueTypeMap: Record<string, ProRenderFieldPropsType>) => React.ReactNode;
export { defaultRenderText };
/** ProField 的类型 */
export declare type ProFieldPropsType = {
    text?: ProFieldTextType;
    valueType?: ProFieldValueType | ProFieldValueObjectType;
} & RenderProps;
export { FieldPercent, FieldIndexColumn, FieldProgress, FieldMoney, FieldDatePicker, FieldRangePicker, FieldCode, FieldTimePicker, FieldText, FieldStatus, FieldSelect, proFieldParsingText, proFieldParsingValueEnumToArray, };
export type { ProFieldValueType };
declare const _default: React.ForwardRefRenderFunction<any, ProFieldPropsType>;
export default _default;
