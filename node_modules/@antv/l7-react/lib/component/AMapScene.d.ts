import { IMapConfig, ISceneConfig, Scene } from '@antv/l7';
import React from 'react';
interface IMapSceneConig {
    style?: React.CSSProperties;
    className?: string;
    map: Partial<IMapConfig>;
    option?: Partial<ISceneConfig>;
    children?: React.ReactNode;
    onSceneLoaded?: (scene: Scene) => void;
}
declare const AMapScene: React.MemoExoticComponent<(props: IMapSceneConig) => JSX.Element>;
export default AMapScene;
