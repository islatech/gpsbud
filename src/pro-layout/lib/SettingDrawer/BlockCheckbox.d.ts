import React from 'react';
export interface BlockCheckboxProps {
    value: string;
    onChange: (key: string) => void;
    list?: {
        title: string;
        key: string;
    }[];
    configType: string;
    prefixCls: string;
}
declare const BlockCheckbox: React.FC<BlockCheckboxProps>;
export default BlockCheckbox;
