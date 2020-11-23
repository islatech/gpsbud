import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Dropdown, List, Menu, Row, Select, Tooltip, Form } from 'antd';
import React, { FC, useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import numeral from 'numeral';
import { ListItemDataType } from './data.d';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './style.less';
import { StateType } from './model';

const { Option } = Select;

export function formatWan(val: number) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';

  let result: React.ReactNode = val;
  if (val > 10000) {
    result = (
      <span>
        {Math.floor(val / 10000)}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          Million
        </span>
      </span>
    );
  }
  return result;
}

interface ApplicationsProps {
  dispatch: Dispatch;
  listAndsearchAndapplications: StateType;
  loading: boolean;
}

const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const CardInfo: React.FC<{
  activeUser: React.ReactNode;
  newUser: React.ReactNode;
}> = ({ activeUser, newUser }) => (
  <div className={styles.cardInfo}>
    <div>
      <p>Active Users</p>
      <p>{activeUser}</p>
    </div>
    <div>
      <p>Add a user</p>
      <p>{newUser}</p>
    </div>
  </div>
);

export const Applications: FC<ApplicationsProps> = (props) => {
  const {
    dispatch,
    loading,
    listAndsearchAndapplications: { list },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'listAndsearchAndapplications/fetch',
      payload: {
        count: 8,
      },
    });
  }, [1]);

  const handleValuesChange = () => {
    dispatch({
      type: 'listAndsearchAndapplications/fetch',
      payload: {
        count: 8,
      },
    });
  };

  const itemMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.tmall.com/">
          3d menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.filterCardList}>
      <Card bordered={false}>
        <Form onValuesChange={handleValuesChange}>
          <StandardFormRow title="Category" block style={{ paddingBottom: 11 }}>
            <Form.Item name="category">
              <TagSelect expandable>
                <TagSelect.Option value="cat1">Category 1</TagSelect.Option>
                <TagSelect.Option value="cat2">Category 2</TagSelect.Option>
                <TagSelect.Option value="cat3">Category 3</TagSelect.Option>
                <TagSelect.Option value="cat4">Category 4</TagSelect.Option>
                <TagSelect.Option value="cat5">Category 5</TagSelect.Option>
                <TagSelect.Option value="cat6">Category 6</TagSelect.Option>
                <TagSelect.Option value="cat7">Category 7</TagSelect.Option>
                <TagSelect.Option value="cat8">Category 8</TagSelect.Option>
                <TagSelect.Option value="cat9">Category 9</TagSelect.Option>
                <TagSelect.Option value="cat10">Category 10</TagSelect.Option>
                <TagSelect.Option value="cat11">Category 11</TagSelect.Option>
                <TagSelect.Option value="cat12">Category 12</TagSelect.Option>
              </TagSelect>
            </Form.Item>
          </StandardFormRow>
          <StandardFormRow title="Other options" grid last>
            <Row gutter={16}>
              <Col lg={8} md={10} sm={10} xs={24}>
                <Form.Item {...formItemLayout} name="author" label="作者">
                  <Select placeholder="Unlimited" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">Wang Zhaojun</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={8} md={10} sm={10} xs={24}>
                <Form.Item {...formItemLayout} name="rate" label="Praise">
                  <Select placeholder="Unlimited" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">Excellent</Option>
                    <Option value="normal">Ordinary</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <br />
      <List<ListItemDataType>
        rowKey="id"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        loading={loading}
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              hoverable
              bodyStyle={{ paddingBottom: 20 }}
              actions={[
                <Tooltip key="download" title="下载">
                  <DownloadOutlined />
                </Tooltip>,
                <Tooltip key="edit" title="Edit">
                  <EditOutlined />
                </Tooltip>,
                <Tooltip title="分享" key="share">
                  <ShareAltOutlined />
                </Tooltip>,
                <Dropdown key="ellipsis" overlay={itemMenu}>
                  <EllipsisOutlined />
                </Dropdown>,
              ]}
            >
              <Card.Meta avatar={<Avatar size="small" src={item.avatar} />} title={item.title} />
              <div className={styles.cardItemContent}>
                <CardInfo
                  activeUser={formatWan(item.activeUser)}
                  newUser={numeral(item.newUser).format('0,0')}
                />
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default connect(
  ({
    listAndsearchAndapplications,
    loading,
  }: {
    listAndsearchAndapplications: StateType;
    loading: { models: { [key: string]: boolean } };
  }) => ({
    listAndsearchAndapplications,
    loading: loading.models.listAndsearchAndapplications,
  }),
)(Applications);
