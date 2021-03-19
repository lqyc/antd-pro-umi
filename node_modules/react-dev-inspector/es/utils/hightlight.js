/**
 * mirror from https://github.com/facebook/react/blob/v16.13.1/packages/react-devtools-shared/src/backend/views/Highlighter/index.js
 */
// This plug-in provides in-page highlighting of the selected element.
// It is used by the browser extension nad the standalone DevTools shell
// (when connected to a browser).
// It is not currently the mechanism used to highlight React Native views.
// That is done by the React Native Inspector component.
let iframesListeningTo = new Set();
export function setupHighlighter(handlers) {
    function startInspectingNative() {
        registerListenersOnWindow(window);
    }
    function registerListenersOnWindow(window) {
        // This plug-in may run in non-DOM environments (e.g. React Native).
        if (window && typeof window.addEventListener === 'function') {
            window.addEventListener('click', onClick, true);
            window.addEventListener('mousedown', onMouseEvent, true);
            window.addEventListener('mouseover', onMouseEvent, true);
            window.addEventListener('mouseup', onMouseEvent, true);
            window.addEventListener('pointerdown', onPointerDown, true);
            window.addEventListener('pointerover', onPointerOver, true);
            window.addEventListener('pointerup', onPointerUp, true);
        }
    }
    function stopInspectingNative() {
        removeListenersOnWindow(window);
        iframesListeningTo.forEach(function (frame) {
            try {
                removeListenersOnWindow(frame.contentWindow);
            }
            catch (error) {
                // This can error when the iframe is on a cross-origin.
            }
        });
        iframesListeningTo = new Set();
    }
    function removeListenersOnWindow(window) {
        // This plug-in may run in non-DOM environments (e.g. React Native).
        if (window && typeof window.removeEventListener === 'function') {
            window.removeEventListener('click', onClick, true);
            window.removeEventListener('mousedown', onMouseEvent, true);
            window.removeEventListener('mouseover', onMouseEvent, true);
            window.removeEventListener('mouseup', onMouseEvent, true);
            window.removeEventListener('pointerdown', onPointerDown, true);
            window.removeEventListener('pointerover', onPointerOver, true);
            window.removeEventListener('pointerup', onPointerUp, true);
        }
    }
    function onClick(event) {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        stopInspectingNative();
        (_a = handlers.onClick) === null || _a === void 0 ? void 0 : _a.call(handlers, event.target);
    }
    function onMouseEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function onPointerDown(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function onPointerOver(event) {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        const target = event.target;
        if (target.tagName === 'IFRAME') {
            const iframe = target;
            try {
                if (!iframesListeningTo.has(iframe)) {
                    const window = iframe.contentWindow;
                    registerListenersOnWindow(window);
                    iframesListeningTo.add(iframe);
                }
            }
            catch (error) {
                // This can error when the iframe is on a cross-origin.
            }
        }
        (_a = handlers.onPointerOver) === null || _a === void 0 ? void 0 : _a.call(handlers, event.target);
    }
    function onPointerUp(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    startInspectingNative();
    return stopInspectingNative;
}
