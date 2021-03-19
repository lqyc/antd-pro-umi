import type { FormProps } from 'antd';
import type { CommonFormProps } from '../../BaseForm';
export declare type StepFormProps<T = Record<string, any>> = {
    step?: number;
} & Omit<FormProps<T>, 'onFinish'> & Omit<CommonFormProps<T>, 'submitter'>;
declare function StepForm<T = Record<string, any>>({ onFinish, step, formRef: propFormRef, ...restProps }: StepFormProps<T>): JSX.Element;
export default StepForm;
