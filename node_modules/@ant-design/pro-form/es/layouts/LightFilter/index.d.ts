import React from 'react';
import type { FormProps } from 'antd';
import type { CommonFormProps } from '../../BaseForm';
import './index.less';
export declare type LightFilterProps<T> = {
    collapse?: boolean;
    collapseLabel?: React.ReactNode;
    bordered?: boolean;
    ignoreRules?: boolean;
} & Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T>;
declare function LightFilter<T = Record<string, any>>(props: LightFilterProps<T>): JSX.Element;
export default LightFilter;
