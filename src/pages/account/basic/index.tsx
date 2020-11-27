import { /* Badge, */ Avatar, Card, Col, Descriptions, Divider, Form, Row, Table } from 'antd';
import React, { Component } from 'react';

import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { BasicProfileDataType } from './data.d';
import styles from './style.less';
import { AntDesignOutlined, DollarOutlined } from '@ant-design/icons';

 /*
const progressColumns = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Current progress',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => {
      if (text === 'success') {
        return <Badge status="success" text="Success" />;
      }
      return <Badge status="processing" text="In progress" />;
    },
  },

  {
    title: 'Operator ID',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: 'Time-consuming',
    dataIndex: 'cost',
    key: 'cost',
  },
];
*/

interface BasicProps {
  loading: boolean;
  dispatch: Dispatch;
  profileAndbasic: BasicProfileDataType;
}
interface BasicState {
  visible: boolean;
}

class Basic extends Component<BasicProps, BasicState> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndbasic/fetchBasic',
    });
  }

  render() {
    const { profileAndbasic, loading } = this.props;
    const { basicGoods /* basicProgress */ } = profileAndbasic;
    let goodsData: typeof basicGoods = [];
    if (basicGoods.length) {
      let num = 0;
      let amount = 0;
      basicGoods.forEach((item) => {
        num += Number(item.num);
        amount += Number(item.amount);
      });
      goodsData = basicGoods.concat({
        id: 'Total',
        num,
        amount,
      });
    }
    // const renderContent = (value: any, row: any, index: any) => {
    //   const obj: {
    //     children: any;
    //     props: { colSpan?: number };
    //   } = {
    //     children: value,
    //     props: {},
    //   };
    //   if (index === basicGoods.length) {
    //     obj.props.colSpan = 0;
    //   }
    //   return obj;
    // };

    // const goodsColumns = [
    //   {
    //     title: 'Order Number',
    //     dataIndex: 'id',
    //     key: 'id',
    //     render: (text: React.ReactNode, row: any, index: number) => {
    //       if (index < basicGoods.length) {
    //         return <a href="">{text}</a>;
    //       }
    //       return {
    //         children: <span style={{ fontWeight: 600 }}>Total</span>,
    //         props: {
    //           colSpan: 4,
    //         },
    //       };
    //     },
    //   },
    //   {
    //     title: 'Type',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: renderContent,
    //   },
    //   {
    //     title: 'Name/Strain',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: renderContent,
    //   },
    //   {
    //     title: 'Attribute',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: renderContent,
    //   },
    //   {
    //     title: 'Effects',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: renderContent,
    //   },
    //   {
    //     title: 'Product Barcode',
    //     dataIndex: 'barcode',
    //     key: 'barcode',
    //     render: renderContent,
    //   },
    //   {
    //     title: 'Unit Price',
    //     dataIndex: 'price',
    //     key: 'price',
    //     align: 'right' as 'left' | 'right' | 'center',
    //     render: renderContent,
    //   },
    //   {
    //     title: 'Quantity',
    //     dataIndex: 'num',
    //     key: 'num',
    //     align: 'right' as 'left' | 'right' | 'center',
    //     render: (text: React.ReactNode, row: any, index: number) => {
    //       if (index < basicGoods.length) {
    //         return text;
    //       }
    //       return <span style={{ fontWeight: 600 }}>{text}</span>;
    //     },
    //   },
    //   {
    //     title: 'Amount',
    //     dataIndex: 'amount',
    //     key: 'amount',
    //     align: 'right' as 'left' | 'right' | 'center',
    //     render: (text: React.ReactNode, row: any, index: number) => {
    //       if (index < basicGoods.length) {
    //         return text;
    //       }
    //       return <span style={{ fontWeight: 600 }}>{text}</span>;
    //     },
    //   },
    // ];
  //   <Col lg={6} md={12} sm={24}>
  //   <Form.Item
  //     label='Name/Strain'
  //     name='Lemon Haze'
  //   >
  //   </Form.Item>
  // </Col>
  // <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
  //   <Form.Item
  //     label={fieldLabels.url2}
  //     name="url2"
  //     rules={[{ required: true, message: 'Please enter a type' }]}
  //   >
  //     <Input placeholder="Hybrid, Sativa..." />
  //   </Form.Item>
  // </Col>
    return (
      
      <Card  className={styles.card} bordered={false}>
        {/* <Row > */}
          <Descriptions title="Product"  layout="vertical" style={{ marginBottom: 15 }}>
            
              {/* <Descriptions.Item><Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<FileImageOutlined />}
            /></Descriptions.Item> */}
            <Descriptions.Item label="Order Number">23BRG67</Descriptions.Item>
            <Descriptions.Item label="Attributes">Hybrid</Descriptions.Item>
            <Descriptions.Item label="Type">Seed</Descriptions.Item> 
            <Descriptions.Item label="Quantity">0.7Grams</Descriptions.Item>
          </Descriptions>

          <Divider style={{ marginBottom: 30 }} />
          <Descriptions title="Donation Information" layout="vertical" style={{ marginBottom: 15 }}>
            
            <Descriptions.Item label="Donation completed with"> <DollarOutlined />GPSBud Account</Descriptions.Item>
            <Descriptions.Item label="Minimum donation">0.659 ETH</Descriptions.Item>
            <Descriptions.Item label="Pick-up address">No. 18, wantang road, Xihu district, Hangzhou City, Zhejiang province, China</Descriptions.Item>
            
          </Descriptions>
          <Divider style={{ marginBottom: 32 }} />

          <Descriptions title="Confirmation Code" layout="horizontal" style={{ marginBottom: 15 }}>
            <Descriptions.Item label="Code">*************</Descriptions.Item>
            
          </Descriptions>
         {/* </Row>  */}
        </Card>
    );
  }
}

export default connect(
  ({
    profileAndbasic,
    loading,
  }: {
    profileAndbasic: BasicProfileDataType;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    profileAndbasic,
    loading: loading.effects['profileAndbasic/fetchBasic'],
  }),
)(Basic);
