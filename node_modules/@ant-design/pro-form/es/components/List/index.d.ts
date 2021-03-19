import type { ReactNode } from 'react';
import React from 'react';
import type { ButtonProps } from 'antd';
import type { FormListFieldData, FormListOperation, FormListProps } from 'antd/lib/form/FormList';
import type { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import type { NamePath } from 'antd/lib/form/interface';
import './index.less';
declare const FormListContext: React.Context<(FormListFieldData & {
    listName: NamePath;
}) | Record<string, any>>;
declare type ChildrenFunction = (fields: FormListFieldData[], operation: FormListOperation, meta: {
    errors: React.ReactNode[];
}) => React.ReactNode;
export declare type ProFormListProps = Omit<FormListProps, 'children'> & {
    creatorButtonProps?: false | (ButtonProps & {
        creatorButtonText?: ReactNode;
        position?: 'top' | 'bottom';
    });
    creatorRecord?: Record<string, any>;
    label?: ReactNode;
    tooltip?: LabelTooltipType;
    actionRender?: (field: FormListFieldData, action: FormListOperation, defaultActionDom: ReactNode[]) => ReactNode[];
    children: ReactNode | ChildrenFunction;
    /** 自定义Item，可以用来将 action 放到别的地方 */
    itemRender?: (doms: {
        listDom: ReactNode;
        action: ReactNode;
    }, listMeta: {
        field: FormListFieldData;
        fields: FormListFieldData[];
        operation: FormListOperation;
        record: Record<string, any>;
        meta: {
            errors: React.ReactNode[];
        };
    }) => ReactNode;
};
declare const ProFormList: React.FC<ProFormListProps>;
export { FormListContext };
export default ProFormList;
