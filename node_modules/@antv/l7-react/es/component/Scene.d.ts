import { IMapWrapper } from '@antv/l7';
import React from 'react';
interface IMapSceneConig {
    style?: Partial<React.CSSProperties>;
    className?: string;
    map: IMapWrapper;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: IMapSceneConig) => JSX.Element>;
export default _default;
