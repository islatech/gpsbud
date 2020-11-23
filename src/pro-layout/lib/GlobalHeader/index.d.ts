import './index.less';
import React from 'react';
import { HeaderViewProps } from '../Header';
import { SiderMenuProps, PrivateSiderMenuProps } from '../SiderMenu/SiderMenu';
import { PureSettings } from '../defaultSettings';
import { MenuDataItem } from '../index';
import { WithFalse } from '../typings';
export interface GlobalHeaderProps extends Partial<PureSettings> {
    collapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
    isMobile?: boolean;
    logo?: React.ReactNode;
    menuRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    rightContentRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode>;
    className?: string;
    prefixCls?: string;
    menuData?: MenuDataItem[];
    onMenuHeaderClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
    menuHeaderRender?: SiderMenuProps['menuHeaderRender'];
    collapsedButtonRender?: SiderMenuProps['collapsedButtonRender'];
    splitMenus?: boolean;
}
declare const GlobalHeader: React.FC<GlobalHeaderProps & PrivateSiderMenuProps>;
export default GlobalHeader;
