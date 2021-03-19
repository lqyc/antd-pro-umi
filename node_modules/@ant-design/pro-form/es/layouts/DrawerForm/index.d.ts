import type { DrawerProps, FormProps } from 'antd';
import type { CommonFormProps } from '../../BaseForm';
export declare type DrawerFormProps<T = Record<string, any>> = Omit<FormProps, 'onFinish' | 'title'> & CommonFormProps<T> & {
    /**
     * 接受返回一个boolean，返回 true 会关掉这个抽屉
     *
     * @name 表单结束后调用
     */
    onFinish?: (formData: T) => Promise<boolean | void>;
    /** @name 用于触发抽屉打开的 dom */
    trigger?: JSX.Element;
    /** @name 受控的打开关闭 */
    visible?: DrawerProps['visible'];
    /** @name 打开关闭的事件 */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 不支持 'visible'，请使用全局的 visible
     *
     * @name 抽屉的属性
     */
    drawerProps?: Omit<DrawerProps, 'visible'>;
    /** @name 抽屉的标题 */
    title?: DrawerProps['title'];
    /** @name 抽屉的宽度 */
    width?: DrawerProps['width'];
};
declare function DrawerForm<T = Record<string, any>>({ children, trigger, onVisibleChange, drawerProps, onFinish, title, width, ...rest }: DrawerFormProps<T>): JSX.Element;
export default DrawerForm;
