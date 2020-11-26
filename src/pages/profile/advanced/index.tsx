import {
  DingdingOutlined,
  DownOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Button,
  Card,
  // Statistic,
  Descriptions,
  Divider,
  Dropdown,
  Menu,
  Popover,
  Steps,
  Table,
  Tooltip,
} from 'antd';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';

import classNames from 'classnames';
import { connect, Dispatch } from 'umi';
import { AdvancedProfileData } from './data.d';
import styles from './style.less';

const { Step } = Steps;
const ButtonGroup = Button.Group;

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

const mobileMenu = (
  <Menu>
    <Menu.Item key="1">Operation 1</Menu.Item>
    <Menu.Item key="2">Operation 2</Menu.Item>
    <Menu.Item key="3">Option 1</Menu.Item>
    <Menu.Item key="4">Option 2</Menu.Item>
    <Menu.Item key="">Option 3</Menu.Item>
  </Menu>
);

const action = (
  <RouteContext.Consumer>
    {({ isMobile }) => {
      if (isMobile) {
        return (
          <Dropdown.Button
            type="primary"
            icon={<DownOutlined />}
            overlay={mobileMenu}
            placement="bottomRight"
          >
            Main operation
          </Dropdown.Button>
        );
      }
      return (
        <Fragment>
          <ButtonGroup>
            <Button>Operation 1</Button>
            <Button>Operation 2</Button>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </ButtonGroup>
          <Button type="primary">Main operation</Button>
        </Fragment>
      );
    }}
  </RouteContext.Consumer>
);

/*
const extra = (
  <div className={styles.moreInfo}>
    <Statistic title="Status" value="Pending approval" />
    <Statistic title="Order amount" value={568.08} prefix="$" />
  </div>
);
*/

/*
const description = (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
        <Descriptions.Item label="Creator">Qu Lili</Descriptions.Item>
        <Descriptions.Item label="Order Products">XX Services</Descriptions.Item>
        <Descriptions.Item label="Creation time">2017-07-07</Descriptions.Item>
        <Descriptions.Item label="Associated documents">
          <a href="">12421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Effective date">2017-07-07 ~ 2017-08-08</Descriptions.Item>
        <Descriptions.Item label="Remarks">Please confirm within two business days</Descriptions.Item>
      </Descriptions>
    )}
  </RouteContext.Consumer>
);
*/

const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    <Fragment>
      Qu Lili
      <DingdingOutlined style={{ marginLeft: 8 }} />
    </Fragment>
    <div>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div className={styles.stepDescription}>
    <Fragment>
      Chow Mau Mau
      <DingdingOutlined style={{ color: '#00A0E9', marginLeft: 8 }} />
    </Fragment>
    <div>
      <a href="">Hurry up</a>
    </div>
  </div>
);

const popoverContent = (
  <div style={{ width: 160 }}>
    Wu plus
    <span className={styles.textSecondary} style={{ float: 'right' }}>
      <Badge
        status="default"
        text={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Not responding</span>}
      />
    </span>
    <div className={styles.textSecondary} style={{ marginTop: 4 }}>
      Time: 2 hours and 25 minutes
    </div>
  </div>
);

const customDot = (
  dot: React.ReactNode,
  {
    status,
  }: {
    status: string;
  },
) => {
  if (status === 'process') {
    return (
      <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
        {dot}
      </Popover>
    );
  }
  return dot;
};

const operationTabList = [
  {
    key: 'tab1',
    tab: 'Operation Log 1',
  },
  {
    key: 'tab2',
    tab: 'Operation Log 2',
  },
  {
    key: 'tab3',
    tab: 'Operation Log 3',
  },
];

const columns = [
  {
    title: 'Type of Operation',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Operator',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Execution Results',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => {
      if (text === 'agree') {
        return <Badge status="success" text="Success" />;
      }
      return <Badge status="error" text="Overruled" />;
    },
  },
  {
    title: 'Operating Time',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: 'Remarks',
    dataIndex: 'memo',
    key: 'memo',
  },
];

interface AdvancedState {
  operationKey: string;
  tabActiveKey: string;
}

class Advanced extends Component<
  { loading: boolean; profileAndadvanced: AdvancedProfileData; dispatch: Dispatch },
  AdvancedState
> {
  public state: AdvancedState = {
    operationKey: 'tab1',
    //
    tabActiveKey: 'detail',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndadvanced/fetchAdvanced',
    });
  }

  onOperationTabChange = (key: string) => {
    this.setState({ operationKey: key });
  };

  onTabChange = (tabActiveKey: string) => {
    this.setState({ tabActiveKey });
  };

  render() {
    const { operationKey, tabActiveKey } = this.state;
    const { profileAndadvanced, loading } = this.props;
    const { advancedOperation1, advancedOperation2, advancedOperation3 } = profileAndadvanced;
    const contentList = {
      tab1: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation1}
          columns={columns}
        />
      ),
      tab2: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation2}
          columns={columns}
        />
      ),
      tab3: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation3}
          columns={columns}
        />
      ),
    };
    return (
      <PageContainer
        title="Single Number：234231029431"
        extra={action}
        className={styles.pageHeader}
        // content={description}
        // extraContent={extra}
        tabActiveKey={tabActiveKey}
        // onTabChange={this.onTabChange}
        // tabList={[
        //   {
        //     key: 'detail',
        //     tab: 'Details',
        //   },
        //   {
        //     key: 'rule',
        //     tab: 'Rules',
        //   },
        // ]}
      >
        <div className={styles.main}>
          <GridContent>
            <Card title="Process Progress" style={{ marginBottom: 24 }}>
              <RouteContext.Consumer>
                {({ isMobile }) => (
                  <Steps
                    direction={isMobile ? 'vertical' : 'horizontal'}
                    progressDot={customDot}
                    current={1}
                  >
                    <Step title="Creating a project" description={desc1} />
                    <Step title="Department first trial" description={desc2} />
                    <Step title="Financial Review" />
                    <Step title="Done" />
                  </Steps>
                )}
              </RouteContext.Consumer>
            </Card>
            <Card title="User information" style={{ marginBottom: 24 }} bordered={false}>
              <Descriptions style={{ marginBottom: 24 }}>
                <Descriptions.Item label="User name">Pay a little</Descriptions.Item>
                <Descriptions.Item label="Membership card number">
                  32943898021309809423
                </Descriptions.Item>
                <Descriptions.Item label="ID">3321944288191034921</Descriptions.Item>
                <Descriptions.Item label="Contact information">18112345678</Descriptions.Item>
                <Descriptions.Item label="Contact address">
                  Qu Lili 18100000000 intersection of gongzhan road, huanggushan road, Xihu
                  district, Hangzhou City, Zhejiang province
                </Descriptions.Item>
              </Descriptions>
              <Descriptions style={{ marginBottom: 24 }} title="Information Group">
                <Descriptions.Item label="So-and-so data">725</Descriptions.Item>
                <Descriptions.Item label="The data update time">2017-08-08</Descriptions.Item>
                <Descriptions.Item
                  label={
                    <span>
                      So-and-so data
                      <Tooltip title="Data Description">
                        <InfoCircleOutlined
                          style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }}
                        />
                      </Tooltip>
                    </span>
                  }
                >
                  725
                </Descriptions.Item>
                <Descriptions.Item label="Data update time">2017-08-08</Descriptions.Item>
              </Descriptions>
              <h4 style={{ marginBottom: 16 }}>Information Group</h4>
              <Card type="inner" title="Multi level information groups">
                <Descriptions style={{ marginBottom: 16 }} title="Group name">
                  <Descriptions.Item label="Responsible person">Lin Dongdong</Descriptions.Item>
                  <Descriptions.Item label="Character code">1234567</Descriptions.Item>
                  <Descriptions.Item label="Department">
                    XX Company - XX Department
                  </Descriptions.Item>
                  <Descriptions.Item label="Expiration Time">2017-08-08</Descriptions.Item>
                  <Descriptions.Item label="Description">
                    This description is very long very long very long very long very long very long
                    very long very long very long very long very long very long very long very
                    long...
                  </Descriptions.Item>
                </Descriptions>
                <Divider style={{ margin: '16px 0' }} />
                <Descriptions style={{ marginBottom: 16 }} title="Group name" column={1}>
                  <Descriptions.Item label="Scientific Name">
                    Citrullus lanatus (Thunb.) Matsum. et Nakai annual vine; stems,branches stout,
                    with obvious edges.Tendrils are thicker..
                  </Descriptions.Item>
                </Descriptions>
                <Divider style={{ margin: '16px 0' }} />
                <Descriptions title="Group name">
                  <Descriptions.Item label="Responsible person">Pay a little</Descriptions.Item>
                  <Descriptions.Item label="Character code">1234568</Descriptions.Item>
                </Descriptions>
              </Card>
            </Card>
            {/* <Card title="User call records for nearly half a year" style={{ marginBottom: 24 }} bordered={false}>
              <Empty />
            </Card> */}
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              onTabChange={this.onOperationTabChange}
            >
              {contentList[operationKey]}
            </Card>
          </GridContent>
        </div>
      </PageContainer>
    );
  }
}

export default connect(
  ({
    profileAndadvanced,
    loading,
  }: {
    profileAndadvanced: AdvancedProfileData;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    profileAndadvanced,
    loading: loading.effects['profileAndadvanced/fetchAdvanced'],
  }),
)(Advanced);
