import type { ModalProps, FormProps } from 'antd';
import type { CommonFormProps } from '../../BaseForm';
export declare type ModalFormProps<T = Record<string, any>> = Omit<FormProps<T>, 'onFinish' | 'title'> & CommonFormProps<T> & {
    /**
     * 接受返回一个boolean，返回 true 会关掉这个弹窗
     *
     * @name 表单结束后调用
     */
    onFinish?: (formData: T) => Promise<boolean | void>;
    /** @name 用于触发抽屉打开的 dom */
    trigger?: JSX.Element;
    /** @name 受控的打开关闭 */
    visible?: ModalProps['visible'];
    /** @name 打开关闭的事件 */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 不支持 'visible'，请使用全局的 visible
     *
     * @name 弹框的属性
     */
    modalProps?: Omit<ModalProps, 'visible'>;
    /** @name 弹框的标题 */
    title?: ModalProps['title'];
    /** @name 弹框的宽度 */
    width?: ModalProps['width'];
};
declare function ModalForm<T = Record<string, any>>({ children, trigger, onVisibleChange, modalProps, onFinish, title, width, ...rest }: ModalFormProps<T>): JSX.Element;
export default ModalForm;
