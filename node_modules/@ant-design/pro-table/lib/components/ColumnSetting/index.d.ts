import type { TableColumnType } from 'antd';
import './index.less';
declare type ColumnSettingProps<T = any> = {
    columns: TableColumnType<T>[];
    draggable?: boolean;
    checkable?: boolean;
};
declare function ColumnSetting<T>(props: ColumnSettingProps<T>): JSX.Element;
export default ColumnSetting;
