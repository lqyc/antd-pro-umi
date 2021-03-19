import { PositionName } from '@antv/l7';
import React from 'react';
interface IControlProps {
    type: 'scale' | 'zoom' | 'logo';
    position: PositionName;
    [key: string]: any;
}
declare const _default: React.NamedExoticComponent<IControlProps>;
export default _default;
