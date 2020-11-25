import { Card, Col, Form, Input, List, Row, Select, Typography } from 'antd';
import React, { FC, useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import moment from 'moment';
import AvatarList from './components/AvatarList';
import { StateType } from './model';
import { ListItemDataType } from './data.d';
import StandardFormRow from './components/StandardFormRow';
import styles from './style.less';
// import _mock from './_mock';


const { Option } = Select;
const FormItem = Form.Item;
const { Paragraph } = Typography;

interface ProjectsProps {
  dispatch: Dispatch;
  listAndsearchAndprojects: StateType;
  loading: boolean;
}

const getKey = (id: string, index: number) => `${id}-${index}`;

const Projects: FC<ProjectsProps> = ({
  dispatch,
  listAndsearchAndprojects: { list = [] },
  loading,
}) => {
  useEffect(() => {
    dispatch({
      type: 'listAndsearchAndprojects/fetch',
      payload: {
        count: 8,
      },
    });
  }, []);
  const cardList = list && (
    <List<ListItemDataType>
      rowKey="id"
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.cover} />}>
            <Card.Meta
              title={<a>{item.title}</a>}
              description={
                <Paragraph className={styles.item} ellipsis={{ rows: 2 }}>
                  {item.subDescription}
                </Paragraph>
              }
            />
            <div className={styles.cardItemContent}>
              <span>{moment(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size="small">
                  {item.members.map((member, i) => (
                    <AvatarList.Item
                      key={getKey(item.id, i)}
                      src={member.avatar}
                      tips={member.name}
                    />
                  ))}
                </AvatarList>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

 
  
  return (
    <div className={styles.coverCardList}>
      <Card bordered={false}>
        <Form
          layout="inline"
          onValuesChange={() => {
            // Request data when a form item changes
            // Simulate query form to take effect
            dispatch({
              type: 'listAndsearchAndprojects/fetch',
              payload: {
                count: 8,
              },
            });
          }}
        >
          <StandardFormRow title="Strain Library">
            {/* <FormItem name="category">
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
            </FormItem> */}
          </StandardFormRow>
          <StandardFormRow>
            <Row gutter={16}>
              <Col lg={20} md={20} sm={20} xs={24}>
              <Form.Item id="searchBar">
                <Input type="text" placeholder="Search for strains, effects, flavors…" />
              </Form.Item>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <div className={styles.cardList}>{cardList}</div>
    </div>
  );
};

export default connect(
  ({
    listAndsearchAndprojects,
    loading,
  }: {
    listAndsearchAndprojects: StateType;
    loading: { models: { [key: string]: boolean } };
  }) => ({
    listAndsearchAndprojects,
    loading: loading.models.listAndsearchAndprojects,
  }),
)(Projects);
