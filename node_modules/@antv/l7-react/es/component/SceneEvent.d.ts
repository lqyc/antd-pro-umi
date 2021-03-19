import * as React from 'react';
interface ILayerProps {
    type: string;
    handler: (...args: any[]) => void;
}
declare const SceneEvent: React.MemoExoticComponent<(props: ILayerProps) => null>;
export default SceneEvent;
