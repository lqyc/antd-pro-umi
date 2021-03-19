import React from 'react';
import './index.less';
export declare type DropdownProps = {
    className?: string;
    style?: React.CSSProperties;
    menus?: {
        name: React.ReactNode;
        key: string;
    }[];
    onSelect?: (key: string) => void;
};
/**
 * 一个简单的下拉菜单
 *
 * @param param0
 */
declare const DropdownButton: React.FC<DropdownProps>;
declare const TableDropdown: React.FC<DropdownProps> & {
    Button: typeof DropdownButton;
};
export default TableDropdown;
