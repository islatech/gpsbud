import React, { FC, useEffect } from 'react';
import { Button, Card, Col, Form, List, Row, Select, Tag } from 'antd';
import { LoadingOutlined, StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { connect, Dispatch } from 'umi';
import ArticleListContent from './components/ArticleListContent';
import { StateType } from './model';
import { ListItemDataType } from './data.d';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './style.less';

const { Option } = Select;
const FormItem = Form.Item;

const pageSize = 5;

interface ArticlesProps {
  dispatch: Dispatch;
  listAndsearchAndarticles: StateType;
  loading: boolean;
}
const Articles: FC<ArticlesProps> = ({ dispatch, listAndsearchAndarticles: { list }, loading }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    dispatch({
      type: 'listAndsearchAndarticles/fetch',
      payload: {
        count: 5,
      },
    });
  }, []);
  const setOwner = () => {
    form.setFieldsValue({
      owner: ['wzj'],
    });
  };

  const fetchMore = () => {
    dispatch({
      type: 'listAndsearchAndarticles/appendFetch',
      payload: {
        count: pageSize,
      },
    });
  };

  const owners = [
    {
      id: 'wzj',
      name: 'Myself',
    },
    {
      id: 'wjh',
      name: 'Wu Ka-ho',
    },
    {
      id: 'zxx',
      name: 'Zhou Xing',
    },
    {
      id: 'zly',
      name: 'Zhao Liying',
    },
    {
      id: 'ym',
      name: 'Yao Ming',
    },
  ];

  const IconText: React.FC<{
    type: string;
    text: React.ReactNode;
  }> = ({ type, text }) => {
    switch (type) {
      case 'star-o':
        return (
          <span>
            <StarOutlined style={{ marginRight: 8 }} />
            {text}
          </span>
        );
      case 'like-o':
        return (
          <span>
            <LikeOutlined style={{ marginRight: 8 }} />
            {text}
          </span>
        );
      case 'message':
        return (
          <span>
            <MessageOutlined style={{ marginRight: 8 }} />
            {text}
          </span>
        );
      default:
        return null;
    }
  };

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
    },
  };

  const loadMore = list.length > 0 && (
    <div style={{ textAlign: 'center', marginTop: 16 }}>
      <Button onClick={fetchMore} style={{ paddingLeft: 48, paddingRight: 48 }}>
        {loading ? (
          <span>
            <LoadingOutlined /> Loading...
          </span>
        ) : (
          'Load more'
        )}
      </Button>
    </div>
  );

  return (
    <>
      <Card bordered={false}>
        <Form
          layout="inline"
          form={form}
          initialValues={{
            owner: ['wjh', 'zxx'],
          }}
          onValuesChange={() => {
            dispatch({
              type: 'listAndsearchAndarticles/fetch',
              payload: {
                count: 8,
              },
            });
          }}
        >
          <StandardFormRow title="Category" block style={{ paddingBottom: 11 }}>
            <FormItem name="category">
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
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="owner" grid>
            <FormItem name="owner" noStyle>
              <Select mode="multiple" placeholder="选择 owner">
                {owners.map((owner) => (
                  <Option key={owner.id} value={owner.id}>
                    {owner.name}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <a className={styles.selfTrigger} onClick={setOwner}>
              Just look at yourself
            </a>
          </StandardFormRow>
          <StandardFormRow title="Other options" grid last>
            <Row gutter={16}>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="Active Users" name="user">
                  <Select placeholder="Unlimited" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">Li San</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="Praise" name="rate">
                  <Select placeholder="Unlimited" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">Excellent</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <Card
        style={{ marginTop: 24 }}
        bordered={false}
        bodyStyle={{ padding: '8px 32px 32px 32px' }}
      >
        <List<ListItemDataType>
          size="large"
          loading={list.length === 0 ? loading : false}
          rowKey="id"
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <IconText key="star" type="star-o" text={item.star} />,
                <IconText key="like" type="like-o" text={item.like} />,
                <IconText key="message" type="message" text={item.message} />,
              ]}
              extra={<div className={styles.listItemExtra} />}
            >
              <List.Item.Meta
                title={
                  <a className={styles.listItemMetaTitle} href={item.href}>
                    {item.title}
                  </a>
                }
                description={
                  <span>
                    <Tag>Ant Design</Tag>
                    <Tag>Design Language</Tag>
                    <Tag>Ant gold suit</Tag>
                  </span>
                }
              />
              <ArticleListContent data={item} />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default connect(
  ({
    listAndsearchAndarticles,
    loading,
  }: {
    listAndsearchAndarticles: StateType;
    loading: { models: { [key: string]: boolean } };
  }) => ({
    listAndsearchAndarticles,
    loading: loading.models.listAndsearchAndarticles,
  }),
)(Articles);
