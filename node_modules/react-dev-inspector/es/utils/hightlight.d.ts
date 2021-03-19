/**
 * mirror from https://github.com/facebook/react/blob/v16.13.1/packages/react-devtools-shared/src/backend/views/Highlighter/index.js
 */
export declare type StopFunction = () => void;
export declare function setupHighlighter(handlers: {
    onPointerOver?: (element: HTMLElement) => void;
    onClick?: (element: HTMLElement) => void;
}): StopFunction;
