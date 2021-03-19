/**
 * mirror from https://github.com/facebook/react/blob/v16.13.1/packages/react-devtools-shared/src/backend/views/Highlighter/Overlay.js
 *
 * remove all process for iframe, because iframe only need to think in chrome extension app,
 * which will deal multiple levels of nesting iframe.
 */
export interface Rect {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
}
export declare function getNestedBoundingClientRect(node: HTMLElement, boundaryWindow: Window | HTMLElement): Rect;
export declare function getElementDimensions(domElement: Element): {
    borderLeft: number;
    borderRight: number;
    borderTop: number;
    borderBottom: number;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
};
