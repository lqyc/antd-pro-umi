import React from 'react';
import type { SelectProps } from 'antd';
import type { ProSchema } from '@ant-design/pro-utils';
import type { ProFormItemProps } from '../../interface';
export declare type ProFormSelectProps = ProFormItemProps<SelectProps<any> & {
    /**
     * 是否在输入框聚焦时触发搜索
     *
     * @default false
     */
    searchOnFocus?: boolean;
    /**
     * 选择完一个之后是否清空搜索项重新搜索
     *
     * @default false
     */
    resetAfterSelect?: boolean;
}> & {
    valueEnum?: ProSchema['valueEnum'];
    params?: ProSchema['params'];
    request?: ProSchema['request'];
    options?: SelectProps<any>['options'];
    mode?: SelectProps<any>['mode'];
    showSearch?: SelectProps<any>['showSearch'];
    readonly?: boolean;
};
declare const ProFormSelect: React.FunctionComponent<ProFormSelectProps> & {
    SearchSelect: React.FunctionComponent<ProFormSelectProps>;
};
export default ProFormSelect;
