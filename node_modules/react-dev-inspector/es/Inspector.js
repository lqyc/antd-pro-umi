import React, { useState, useEffect, useRef } from 'react';
import hotkeys from 'hotkeys-js';
import { setupHighlighter } from './utils/hightlight';
import { getElementCodeInfo, gotoEditor, getElementInspect, } from './utils/inspect';
import Overlay from './Overlay';
export const defaultHotKeys = ['control', 'shift', 'command', 'c'];
export const Inspector = (props) => {
    const { keys, onHoverElement, onClickElement, disableLaunchEditor, children, } = props;
    const hotkey = (keys !== null && keys !== void 0 ? keys : defaultHotKeys).join('+');
    const [isInspect, setIsInspect] = useState(false);
    const overlayRef = useRef();
    const handleHoverElement = (element) => {
        var _a;
        const overlay = overlayRef.current;
        const codeInfo = getElementCodeInfo(element);
        const relativePath = codeInfo === null || codeInfo === void 0 ? void 0 : codeInfo.relativePath;
        const { fiber, name, title } = getElementInspect(element, relativePath);
        (_a = overlay === null || overlay === void 0 ? void 0 : overlay.inspect) === null || _a === void 0 ? void 0 : _a.call(overlay, [element], title, relativePath);
        onHoverElement === null || onHoverElement === void 0 ? void 0 : onHoverElement({
            element,
            fiber,
            codeInfo,
            name,
        });
    };
    const handleClickElement = (element) => {
        var _a;
        const overlay = overlayRef.current;
        (_a = overlay === null || overlay === void 0 ? void 0 : overlay.remove) === null || _a === void 0 ? void 0 : _a.call(overlay);
        overlayRef.current = undefined;
        setIsInspect(false);
        const codeInfo = getElementCodeInfo(element);
        const relativePath = codeInfo === null || codeInfo === void 0 ? void 0 : codeInfo.relativePath;
        const { fiber, name } = getElementInspect(element, relativePath);
        if (!disableLaunchEditor)
            gotoEditor(codeInfo);
        onClickElement === null || onClickElement === void 0 ? void 0 : onClickElement({
            element,
            fiber,
            codeInfo,
            name,
        });
    };
    const startInspect = () => {
        const overlay = new Overlay();
        const stopCallback = setupHighlighter({
            onPointerOver: handleHoverElement,
            onClick: handleClickElement,
        });
        overlay.setRemoveCallback(stopCallback);
        overlayRef.current = overlay;
        setIsInspect(true);
    };
    const stopInspect = () => {
        var _a;
        (_a = overlayRef.current) === null || _a === void 0 ? void 0 : _a.remove();
        setIsInspect(false);
    };
    const handleInspectKey = () => (isInspect
        ? stopInspect()
        : startInspect());
    useEffect(() => {
        const handleHotKeys = (event, handler) => {
            if (handler.key === hotkey) {
                handleInspectKey();
            }
        };
        hotkeys(hotkey, handleHotKeys);
        window.__REACT_DEV_INSPECTOR_TOGGLE__ = handleInspectKey;
        return () => {
            hotkeys.unbind(hotkey, handleHotKeys);
            delete window.__REACT_DEV_INSPECTOR_TOGGLE__;
        };
    }, [hotkey, handleInspectKey]);
    return (React.createElement(React.Fragment, null, children));
};
