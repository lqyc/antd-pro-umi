import React from 'react';
import type { Fiber } from 'react-reconciler';
import { CodeInfo } from './utils/inspect';
export interface InspectParams {
    /** hover / click event target dom element */
    element: HTMLElement;
    /** nearest named react component fiber for dom element */
    fiber?: Fiber;
    /** source file line / column / path info for react component */
    codeInfo?: CodeInfo;
    /** react component name for dom element */
    name?: string;
}
export declare type ElementHandler = (params: InspectParams) => void;
export declare const defaultHotKeys: string[];
export interface InspectorProps {
    /**
     * inspector toggle hotkeys
     *
     * supported keys see: https://github.com/jaywcjlove/hotkeys#supported-keys
     */
    keys?: string[];
    onHoverElement?: ElementHandler;
    onClickElement?: ElementHandler;
    /**
     * whether disable click react component to open IDE for view component code
     */
    disableLaunchEditor?: boolean;
}
export declare const Inspector: React.FC<InspectorProps>;
