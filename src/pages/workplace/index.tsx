import { Avatar, Card, Col, List, Skeleton, Row /* Statistic */ } from 'antd';
import React, { Component } from 'react';

import { Link, Dispatch, connect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import moment from 'moment';
// import Radar from './components/Radar';
import { ModalState } from './model';
// import EditableLinkGroup from './components/EditableLinkGroup';
import styles from './style.less';
import { ActivitiesType, CurrentUser, NoticeType, RadarDataType } from './data.d';

/*
const links = [
 {
   title: 'Operation 1',
   href: '',
 },
 {
   title: 'Operation 2',
   href: '',
  },
  {
    title: 'Operation三',
    href: '',
  },
  {
    title: 'Operation四',
    href: '',  },
 {
   title: 'Operation五',
   href: '',
  },
  {
    title: 'Operation六',
    href: '',
  },
];
*/

interface WorkplaceProps {
  currentUser?: CurrentUser;
  projectNotice: NoticeType[];
  activities: ActivitiesType[];
  radarData: RadarDataType[];
  dispatch: Dispatch;
  currentUserLoading: boolean;
  projectLoading: boolean;
  activitiesLoading: boolean;
}

const PageHeaderContent: React.FC<{ currentUser: CurrentUser }> = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          Welcome，
          {currentUser.name}
          ，have a wonderful day！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

const ExtraContent: React.FC<{}> = () => (
  <div className={styles.extraContent}>
    {/* <div className={styles.statItem}>
      <Statistic title="Projects Number" value={56} />
    </div>
    <div className={styles.statItem}>
      <Statistic title="Team Rank Within" value={8} suffix="/ 24" />
    </div>
    <div className={styles.statItem}>
      <Statistic title="Projects Access" value={2223} />
    </div> */}
  </div>
);

class Workplace extends Component<WorkplaceProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndworkplace/init',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndworkplace/clear',
    });
  }

  renderActivities = (item: ActivitiesType) => {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      if (item[key]) {
        return (
          <a href={item[key].link} key={item[key].name}>
            {item[key].name}
          </a>
        );
      }
      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className={styles.username}>{item.user.name}</a>
              &nbsp;
              <span className={styles.event}>{events}</span>
            </span>
          }
          description={
            <span className={styles.datetime} title={item.updatedAt}>
              {moment(item.updatedAt).fromNow()}
            </span>
          }
        />
      </List.Item>
    );
  };

  render() {
    const {
      currentUser,
      // activities,
      projectNotice,
      projectLoading,
      activitiesLoading,
      // radarData,
    } = this.props;

    if (!currentUser || !currentUser.userid) {
      return null;
    }
    return (
      <PageContainer
        content={<PageHeaderContent currentUser={currentUser} />}
        extraContent={<ExtraContent />}
      >
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 24 }}
              title="Review Items"
              bordered={false}
              extra={<Link to="/">All Projects</Link>}
              loading={projectLoading}
              bodyStyle={{ padding: 0 }}
            >
              {projectNotice.map((item) => (
                <Card.Grid className={styles.projectGrid} key={item.id}>
                  <Card bodyStyle={{ padding: 0 }} bordered={false}>
                    <Card.Meta
                      title={
                        <div className={styles.cardTitle}>
                          <Avatar size="small" src={item.logo} />
                          <Link to={item.href}>{item.title}</Link>
                        </div>
                      }
                      description={item.description}
                    />
                    <div className={styles.projectItemContent}>
                      <Link to={item.memberLink}>{item.member || ''}</Link>
                      {item.updatedAt && (
                        <span className={styles.datetime} title={item.updatedAt}>
                          {moment(item.updatedAt).fromNow()}
                        </span>
                      )}
                    </div>
                  </Card>
                </Card.Grid>
              ))}
            </Card>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={styles.activeCard}
              title="Donation Method"
              loading={activitiesLoading}
            >
              <br />
              {/* <List<ActivitiesType>
                loading={activitiesLoading}
                renderItem={(item) => this.renderActivities(item)}
                dataSource={activities}
                className={styles.activitiesList}
                size="large"
              /> */}
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              style={{ marginBottom: 24 }}
              title="Donation Summary"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <br />
              {/* <EditableLinkGroup onAdd={() => {}} links={links} linkElement={Link} /> */}
            </Card>
            {/* <Card
              style={{ marginBottom: 24 }}
              bordered={false}
              title="XX Indexß"
              loading={radarData.length === 0}
            >
              {/* <div className={styles.chart}>
                <Radar hasLegend height={343} data={radarData} />
              </div> */}
            {/* </Card> */}
            {/* <Card
              bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
              bordered={false}
              title="Team"
              loading={projectLoading}
            >
              <div className={styles.members}>
                <Row gutter={48}>
                  {projectNotice.map((item) => (
                    <Col span={12} key={`members-item-${item.id}`}>
                      <Link to={item.href}>
                        <Avatar src={item.logo} size="small" />
                        <span className={styles.member}>{item.member}</span>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card> */}
          </Col>
        </Row>
      </PageContainer>
    );
  }
}

export default connect(
  ({
    dashboardAndworkplace: { currentUser, projectNotice, activities, radarData },
    loading,
  }: {
    dashboardAndworkplace: ModalState;
    loading: {
      effects: {
        [key: string]: boolean;
      };
    };
  }) => ({
    currentUser,
    projectNotice,
    activities,
    radarData,
    currentUserLoading: loading.effects['dashboardAndworkplace/fetchUserCurrent'],
    projectLoading: loading.effects['dashboardAndworkplace/fetchProjectNotice'],
    activitiesLoading: loading.effects['dashboardAndworkplace/fetchActivitiesList'],
  }),
)(Workplace);
