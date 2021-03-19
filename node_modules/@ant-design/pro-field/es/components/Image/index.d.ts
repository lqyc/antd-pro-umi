import type { ProFieldFC } from '../../index';
export declare type FieldImageProps = {
    text: string;
    width?: number;
    placeholder?: string | string[] | undefined;
};
/**
 * 数字组件
 *
 * @param FieldImageProps {
 *     text: number;
 *     moneySymbol?: string; }
 */
declare const FieldImage: ProFieldFC<FieldImageProps>;
export default FieldImage;
