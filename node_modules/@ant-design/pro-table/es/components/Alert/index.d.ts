import React from 'react';
import './index.less';
import type { IntlType } from '@ant-design/pro-provider';
export declare type AlertRenderType<T> = ((props: {
    intl: IntlType;
    selectedRowKeys: (number | string)[];
    selectedRows: T[];
    onCleanSelected: () => void;
}) => React.ReactNode) | false;
export declare type TableAlertProps<T> = {
    selectedRowKeys: (number | string)[];
    selectedRows: T[];
    alertInfoRender?: AlertRenderType<T>;
    onCleanSelected: () => void;
    alertOptionRender?: AlertRenderType<T>;
};
declare function TableAlert<T>({ selectedRowKeys, onCleanSelected, selectedRows, alertInfoRender, alertOptionRender, }: TableAlertProps<T>): JSX.Element | null;
export default TableAlert;
