import './index.less';
import React from 'react';
import { MenuMode, MenuProps } from 'antd/lib/menu';
import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { PureSettings } from '../defaultSettings';
import { MenuDataItem, MessageDescriptor, Route, RouterTypes, WithFalse } from '../typings';
import { PrivateSiderMenuProps } from './SiderMenu';
export interface BaseMenuProps extends Partial<RouterTypes<Route>>, Omit<MenuProps, 'openKeys' | 'onOpenChange' | 'title'>, Partial<PureSettings> {
    className?: string;
    /**
     *默认的是否展开，会受到 breakpoint 的影响
     */
    defaultCollapsed?: boolean;
    collapsed?: boolean;
    splitMenus?: boolean;
    isMobile?: boolean;
    menuData?: MenuDataItem[];
    mode?: MenuMode;
    onCollapse?: (collapsed: boolean) => void;
    openKeys?: WithFalse<string[]> | undefined;
    handleOpenChange?: (openKeys: string[]) => void;
    /**
     * 要给菜单的props, 参考antd-menu的属性。https://ant.design/components/menu-cn/
     */
    menuProps?: MenuProps;
    style?: React.CSSProperties;
    theme?: MenuTheme;
    formatMessage?: (message: MessageDescriptor) => string;
    subMenuItemRender?: WithFalse<(item: MenuDataItem & {
        isUrl: boolean;
    }, defaultDom: React.ReactNode) => React.ReactNode>;
    menuItemRender?: WithFalse<(item: MenuDataItem & {
        isUrl: boolean;
    }, defaultDom: React.ReactNode) => React.ReactNode>;
    postMenuData?: (menusData?: MenuDataItem[]) => MenuDataItem[];
}
declare const BaseMenu: React.FC<BaseMenuProps & PrivateSiderMenuProps>;
export default BaseMenu;
