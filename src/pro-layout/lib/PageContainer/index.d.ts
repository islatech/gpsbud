import React, { ReactNode } from 'react';
import { TabsProps, TabPaneProps } from 'antd/lib/tabs';
import { PageHeaderProps } from 'antd/lib/page-header';
import { AffixProps } from 'antd/lib/affix';
import './index.less';
import { WithFalse } from '../typings';
export interface PageHeaderTabConfig {
    /**
     * @name tabs 的列表
     */
    tabList?: (TabPaneProps & {
        key?: React.ReactText;
    })[];
    /**
     * @name 当前选中 tab 的 key
     */
    tabActiveKey?: TabsProps['activeKey'];
    /**
     * @name tab 修改时触发
     */
    onTabChange?: TabsProps['onChange'];
    /**
     * @name tab 上多余的区域
     */
    tabBarExtraContent?: TabsProps['tabBarExtraContent'];
    /**
     * @name tabs 的其他配置
     */
    tabProps?: TabsProps;
    /**
     * @name 固定 PageHeader 到页面顶部
     * @deprecated 请使用 fixedHeader
     */
    fixHeader?: boolean;
    /**
     * @name 固定 PageHeader 到页面顶部
     */
    fixedHeader?: boolean;
}
export interface PageContainerProps extends PageHeaderTabConfig, Omit<PageHeaderProps, 'title'> {
    title?: React.ReactNode | false;
    content?: React.ReactNode;
    extraContent?: React.ReactNode;
    prefixCls?: string;
    footer?: ReactNode[];
    /**
     * @name 是否显示背景色
     */
    ghost?: boolean;
    /**
     * @name PageHeader 的配置
     * @description 与 antd 完全相同
     */
    header?: PageHeaderProps & {
        children?: React.ReactNode;
    };
    /**
     * @name 自定义 pageHeader
     */
    pageHeaderRender?: WithFalse<(props: PageContainerProps) => React.ReactNode>;
    /**
     * @name 固钉的配置
     * @description 与 antd 完全相同
     */
    affixProps?: AffixProps;
    /**
     * @name 是否加载
     * @description 只加载内容区域
     */
    loading?: boolean;
}
declare const PageContainer: React.FC<PageContainerProps>;
export default PageContainer;
