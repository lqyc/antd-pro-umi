import React from 'react';
import type { TableColumnType } from 'antd';
import type { SearchProps } from 'antd/lib/input';
import type { ListToolBarProps } from '../ListToolBar';
import './index.less';
import type { ActionType } from '../../typing';
export declare type OptionConfig = {
    density?: boolean;
    fullScreen?: OptionsType;
    reload?: OptionsType;
    setting?: boolean | {
        draggable?: boolean;
        checkable?: boolean;
    };
    search?: (SearchProps & {
        name?: string;
    }) | boolean;
};
export declare type OptionsType = ((e: React.MouseEvent<HTMLSpanElement>, action?: ActionType) => void) | boolean;
export declare type ToolBarProps<T = unknown> = {
    headerTitle?: React.ReactNode;
    tooltip?: string;
    /** @deprecated 你可以使用 tooltip，这个更改是为了与 antd 统一 */
    tip?: string;
    toolbar?: ListToolBarProps;
    toolBarRender?: (action: ActionType | undefined, rows: {
        selectedRowKeys?: (string | number)[];
        selectedRows?: T[];
    }) => React.ReactNode[];
    action?: React.MutableRefObject<ActionType | undefined>;
    options?: OptionConfig | false;
    selectedRowKeys?: (string | number)[];
    selectedRows?: T[];
    className?: string;
    onSearch?: (keyWords: string) => void;
    columns: TableColumnType<T>[];
};
declare function ToolBar<T>({ headerTitle, tooltip, toolBarRender, action, options: propsOptions, selectedRowKeys, selectedRows, toolbar, onSearch, columns, ...rest }: ToolBarProps<T>): JSX.Element;
export default ToolBar;
