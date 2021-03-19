import React from 'react';
import type { FormInstance, ButtonProps } from 'antd';
/** @name 用于配置操作栏 */
export declare type SearchConfig = {
    /** @name 重置按钮的文本 */
    resetText?: React.ReactNode;
    /** @name 提交按钮的文本 */
    submitText?: React.ReactNode;
};
export declare type SubmitterProps<T = {}> = {
    /** @name 提交方法 */
    onSubmit?: (value?: T) => void;
    /** @name 重置方法 */
    onReset?: (value?: T) => void;
    /** @name 搜索的配置，一般用来配置文本 */
    searchConfig?: SearchConfig;
    /** @name 提交按钮的 props */
    submitButtonProps?: ButtonProps & {
        preventDefault?: boolean;
    };
    /** @name 重置按钮的 props */
    resetButtonProps?: ButtonProps & {
        preventDefault?: boolean;
    };
    /** @name 自定义操作的渲染 */
    render?: ((props: SubmitterProps & T & {
        submit: () => void;
        reset: () => void;
    }, dom: JSX.Element[]) => React.ReactNode[] | React.ReactNode | false) | false;
};
/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */
declare const Submitter: React.FC<SubmitterProps & {
    form: FormInstance;
}>;
export default Submitter;
