import type { ReactNode } from 'react';
import React from 'react';
export declare type PercentPropInt = {
    prefix?: ReactNode;
    suffix?: ReactNode;
    text?: number | string;
    precision?: number;
    showColor?: boolean;
    showSymbol?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<import("@ant-design/pro-provider").BaseProFieldFC & import("@ant-design/pro-provider").ProRenderFieldPropsType & PercentPropInt & React.RefAttributes<any>>;
export default _default;
