/**
 * mirror from https://github.com/facebook/react/blob/v16.13.1/packages/react-devtools-shared/src/backend/views/utils.js
 */
import { Rect } from './utils/overlay';
interface Box {
    top: number;
    left: number;
    width: number;
    height: number;
}
declare class OverlayRect {
    node: HTMLElement;
    border: HTMLElement;
    padding: HTMLElement;
    content: HTMLElement;
    constructor(doc: Document, container: HTMLElement);
    remove(): void;
    update(box: Rect, dims: any): void;
}
declare class OverlayTip {
    tip: HTMLElement;
    nameSpan: HTMLElement;
    titleDiv: HTMLElement;
    infoDiv: HTMLElement;
    dimSpan: HTMLElement;
    constructor(doc: Document, container: HTMLElement);
    remove(): void;
    updateText(name: string, info: string | undefined, width: number, height: number): void;
    updatePosition(dims: Box, bounds: Box): void;
}
export default class Overlay {
    window: Window;
    tipBoundsWindow: Window;
    container: HTMLElement;
    tip: OverlayTip;
    rects: Array<OverlayRect>;
    removeCallback: (this: Overlay) => void;
    constructor();
    remove(): void;
    setRemoveCallback(callback: Function): void;
    inspect(nodes: Array<HTMLElement>, name?: string, info?: string): void;
}
export {};
