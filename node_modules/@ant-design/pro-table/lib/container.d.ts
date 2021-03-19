/// <reference types="react" />
import type { ProTableProps } from './index';
import type { DensitySize } from './components/ToolBar/DensityIcon';
import type { ActionType } from './typing';
export declare type ColumnsState = {
    show?: boolean;
    fixed?: 'right' | 'left' | undefined;
    order?: number;
};
export declare type UseContainerProps = {
    columnsStateMap?: Record<string, ColumnsState>;
    onColumnsStateChange?: (map: Record<string, ColumnsState>) => void;
    size?: DensitySize;
    onSizeChange?: (size: DensitySize) => void;
};
declare function useContainer(props?: UseContainerProps): {
    action: import("react").MutableRefObject<ActionType | undefined>;
    setAction: (newAction?: ActionType | undefined) => void;
    sortKeyColumns: import("react").MutableRefObject<string[]>;
    setSortKeyColumns: (keys: string[]) => void;
    propsRef: import("react").MutableRefObject<ProTableProps<any, any, any> | undefined>;
    columnsMap: Record<string, ColumnsState>;
    keyWords: string | undefined;
    setKeyWords: (k: string | undefined) => void;
    setTableSize: (value: import("antd/lib/button").ButtonSize) => void;
    tableSize: import("antd/lib/button").ButtonSize;
    setColumnsMap: (value: Record<string, ColumnsState>) => void;
};
declare const Container: import("unstated-next").Container<{
    action: import("react").MutableRefObject<ActionType | undefined>;
    setAction: (newAction?: ActionType | undefined) => void;
    sortKeyColumns: import("react").MutableRefObject<string[]>;
    setSortKeyColumns: (keys: string[]) => void;
    propsRef: import("react").MutableRefObject<ProTableProps<any, any, any> | undefined>;
    columnsMap: Record<string, ColumnsState>;
    keyWords: string | undefined;
    setKeyWords: (k: string | undefined) => void;
    setTableSize: (value: import("antd/lib/button").ButtonSize) => void;
    tableSize: import("antd/lib/button").ButtonSize;
    setColumnsMap: (value: Record<string, ColumnsState>) => void;
}, UseContainerProps>;
export declare type ContainerType = typeof useContainer;
export { useContainer };
export default Container;
