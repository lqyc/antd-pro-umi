import React from 'react';
import type { FormItemProps } from 'antd';
import type { NamePath } from 'antd/lib/form/interface';
import type { ProFieldValueType, SearchTransformKeyFn } from '@ant-design/pro-utils';
import type { GroupProps, FieldProps } from './interface';
export declare type FiledContextProps = {
    fieldProps?: FieldProps;
    formItemProps?: FormItemProps;
    groupProps?: GroupProps;
    setFieldValueType?: (name: NamePath, obj: {
        valueType?: ProFieldValueType;
        /** 数据转化的地方 */
        transform?: SearchTransformKeyFn;
    }) => void;
};
declare const FieldContext: React.Context<FiledContextProps>;
export default FieldContext;
