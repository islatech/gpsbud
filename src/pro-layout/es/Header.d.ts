import './Header.less';
import React, { Component } from 'react';
import { GlobalHeaderProps } from './GlobalHeader';
import { WithFalse } from './typings';
import { PrivateSiderMenuProps } from './SiderMenu/SiderMenu';
export declare type HeaderViewProps = GlobalHeaderProps & {
    isMobile?: boolean;
    collapsed?: boolean;
    logo?: React.ReactNode;
    headerRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    headerTitleRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    headerContentRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode>;
    siderWidth?: number;
    hasSiderMenu?: boolean;
};
interface HeaderViewState {
    visible: boolean;
}
declare class HeaderView extends Component<HeaderViewProps & PrivateSiderMenuProps, HeaderViewState> {
    renderContent: () => {} | null | undefined;
    render(): React.ReactNode;
}
export default HeaderView;
