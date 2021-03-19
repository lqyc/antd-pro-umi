/// <reference types="react" />
import type { NamePath } from 'antd/lib/form/interface';
import type { FormInstance, FormItemProps } from 'antd';
declare type RenderChildren<Values = any> = (values: Record<string, any>, form: FormInstance<Values>) => React.ReactNode;
export declare type ProFormDependencyProps = Omit<FormItemProps<any>, 'name' | 'noStyle' | 'children' | 'label'> & {
    name: NamePath[];
    ignoreFormListField?: boolean;
    children: RenderChildren;
};
declare const ProFormDependency: React.FC<ProFormDependencyProps>;
export default ProFormDependency;
