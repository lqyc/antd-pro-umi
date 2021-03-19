import React from 'react';
import type { ParamsType } from '@ant-design/pro-provider';
import type { ButtonProps } from 'antd';
import type { ProTableProps } from '../../typing';
export declare type RecordCreatorProps<T> = {
    record: T | ((index: number) => T);
    position?: 'top' | 'bottom';
    /**
     * 新增一行的类型
     *
     * @augments dataSource 将会新增一行数据到 dataSource 中，不支持取消，只能删除
     * @augments cache 将会把数据放到缓存中，取消后消失
     */
    newRecordType?: 'dataSource' | 'cache';
};
export declare type EditableProTableProps<T, U extends ParamsType> = Omit<ProTableProps<T, U>, 'onChange'> & {
    value?: T[];
    onChange?: (value: T[]) => void;
    /** @name 原先的 table OnChange */
    onTableChange?: ProTableProps<T, U>['onChange'];
    /** @name 新建按钮的设置 */
    recordCreatorProps?: (RecordCreatorProps<T> & ButtonProps & {
        creatorButtonText?: React.ReactNode;
    }) | false;
    /** 最大行数 */
    maxLength?: number;
    /** Table 的值发生改变，为了适应 Form 调整了顺序 */
    onValuesChange?: (values: T[], record: T) => void;
};
/**
 * 可以直接放到 Form 中的可编辑表格
 *
 * @param props
 */
declare function EditableTable<T extends Record<string, any>, U extends ParamsType = ParamsType>(props: EditableProTableProps<T, U>): JSX.Element;
declare namespace EditableTable {
    var RecordCreator: <T = {}>(props: RecordCreatorProps<T> & {
        children: JSX.Element;
    }) => React.FunctionComponentElement<any>;
}
export default EditableTable;
