/// <reference types="react" />
import { BreadcrumbListReturn } from './utils/getBreadcrumbProps';
import { PureSettings } from './defaultSettings';
import { MenuDataItem } from './typings';
export interface RouteContextType extends Partial<PureSettings> {
    breadcrumb?: BreadcrumbListReturn;
    menuData?: MenuDataItem[];
    isMobile?: boolean;
    prefixCls?: string;
    collapsed?: boolean;
    hasSiderMenu?: boolean;
    hasHeader?: boolean;
    siderWidth?: number;
    isChildrenLayout?: boolean;
    hasFooterToolbar?: boolean;
    hasFooter?: boolean;
    setHasFooterToolbar?: React.Dispatch<React.SetStateAction<boolean>>;
    pageTitleInfo?: {
        title: string;
        id: string;
        pageName: string;
    };
    matchMenus?: MenuDataItem[];
    matchMenuKeys?: string[];
    currentMenu?: PureSettings & MenuDataItem;
}
declare const routeContext: React.Context<RouteContextType>;
export default routeContext;
