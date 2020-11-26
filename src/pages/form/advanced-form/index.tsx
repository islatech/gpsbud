import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Popover, Row } from 'antd';
import React, { FC, useState } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import TableForm from './components/TableForm';
import styles from './style.less';

type InternalNamePath = (string | number)[];

// const { Option } = Select;
// const { RangePicker } = DatePicker;

const fieldLabels = {
  // name: 'Warehouse Name',
  // url: 'Warehouse domain name',
  // owner: 'Warehouse manager',
  // approver: 'Approver',
  // dateRange: 'Effective Date',
  // type: 'Warehouse Type',
  name2: 'Name/Strain',
  url2: 'Type',
  owner2: 'Attributes',
  approver2: 'Effects',
  // dateRange2: 'Short Description',
  type2: 'Short Description',
};

const tableData = [
  {
    key: '1',
    workId: '0.7grams',
    name: 'Lemon Haze',
    attribute: 'Hybrid',
    type: 'Suppository',
    symptons: 'Minty,Happy',
  },
  {
    key: '2',
    workId: '2 grams',
    name: 'Golden Goat',
    attribute: 'Sativa',
    type: 'Wax',
    symptons: 'Energetic, Hungry',
  },
  {
    key: '3',
    workId: '1.5 grams',
    name: 'White Widow',
    attribute: 'Indica',
    type: 'Flower',
    symptons: 'Hungry, Sleepy',
  },
  {
    key: '4',
    workId: '0.3 grams',
    name: 'Blue Dream',
    attribute: 'Sativa',
    type: 'Seeds',
    symptons: 'Focus, Energetic',
  },
];

interface AdvancedFormProps {
  dispatch: Dispatch;
  submitting: boolean;
}

interface ErrorField {
  name: InternalNamePath;
  errors: string[];
}

const AdvancedForm: FC<AdvancedFormProps> = ({ submitting, dispatch }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState<ErrorField[]>([]);
  const getErrorInfo = (errors: ErrorField[]) => {
    const errorCount = errors.filter((item) => item.errors.length > 0).length;
    if (!errors || errorCount === 0) {
      return null;
    }
    const scrollToField = (fieldKey: string) => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };
    const errorList = errors.map((err) => {
      if (!err || err.errors.length === 0) {
        return null;
      }
      const key = err.name[0] as string;
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <CloseCircleOutlined className={styles.errorIcon} />
          <div className={styles.errorMessage}>{err.errors[0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="Form validation Information"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={(trigger: HTMLElement) => {
            if (trigger && trigger.parentNode) {
              return trigger.parentNode as HTMLElement;
            }
            return trigger;
          }}
        >
          <CloseCircleOutlined />
        </Popover>
        {errorCount}
      </span>
    );
  };

  const onFinish = (values: { [key: string]: any }) => {
    setError([]);
    dispatch({
      type: 'formAndadvancedForm/submitAdvancedForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    setError(errorInfo.errorFields);
  };
  /*
  function getBase64({ img, callback }: { img: Blob; callback: { (imageUrl: any): void; (arg0: string | ArrayBuffer | null): any; }; }) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
I */
  /*
    function beforeUpload(file: { type: string; size: number; }) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    }
    */
  /*
    class Avatar extends React.Component {
      state = {
        loading: false,
      };

      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64({
              img: info.file.originFileObj, callback: imageUrl => this.setState({
                imageUrl,
                loading: false,
              })
            },
          );
        }
      };


      render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        );
        return (

          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        );
      }
    }
    */
  return (
    <Form
      form={form}
      layout="vertical"
      hideRequiredMark
      initialValues={{ members: tableData }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <PageContainer content="Upload all of your store products and keep track of them.">
        <Card title="Product Image" className={styles.card} bordered={false}>
          <Row gutter={16}>
            {/* <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        icon={<PlusOutlined/>}
      >
        {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}

            {/* <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        icon={<PlusOutlined/>}
      >
        {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}

            {/* <Col lg={6} md={12} sm={24}>
              <Form.Item
                label={fieldLabels.name}
                name="name"
                rules={[{ required: true, message: 'Please enter Warehouse Name and surname' }]}
              >
                <Input placeholder="Please enter Warehouse Name and surname" />
              </Form.Item>
            </Col> */}
            {/* <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item
                label={fieldLabels.url}
                name="url"
                rules={[{ required: true, message: 'Please select' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter"
                />
              </Form.Item>
            </Col> */}
            {/* <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item
                label={fieldLabels.owner}
                name="owner"
                rules={[{ required: true, message: 'Please select administration' }]}
              >
                <Select placeholder="Please select administration">
                  <Option value="xiao">Fu Xiaoxiao</Option>
                  <Option value="mao">Chow Mau Mau</Option>
                </Select>
              </Form.Item>
            </Col> */}
          </Row>
        </Card>
        <Card title="Basic Info" className={styles.card} bordered={false}>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item
                label={fieldLabels.name2}
                name="name2"
                rules={[{ required: true, message: 'Please enter' }]}
              >
                <Input placeholder="Name of Product" />
              </Form.Item>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item
                label={fieldLabels.url2}
                name="url2"
                rules={[{ required: true, message: 'Please enter a type' }]}
              >
                <Input placeholder="Hybrid, Sativa..." />
              </Form.Item>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item
                label={fieldLabels.owner2}
                name="owner2"
                rules={[{ required: true, message: 'Please list attributes' }]}
              >
                <Input type="text" placeholder="Please list attributes">
                  {/* <Option value="xiao">Fu Xiaoxiao</Option>
                  <Option value="mao">Chow Mau Mau</Option> */}
                </Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item
                label={fieldLabels.approver2}
                name="approver2"
                rules={[{ required: true, message: 'Please list effects' }]}
              >
                <Input type="text" placeholder="Happy, Uplifiting, Hunger...">
                  {/* <Option value="xiao">Fu Xiaoxiao</Option>
                  <Option value="mao">Chow Mau Mau</Option> */}
                </Input>
              </Form.Item>
            </Col>
            {/* <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item
                label={fieldLabels.dateRange2}
                name="dateRange2"
                rules={[{ required: true, message: 'Please enter' }]}
              >
                <TimePicker
                  placeholder="Reminder Time"
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => {
                    if (trigger && trigger.parentNode) {
                      return trigger.parentNode as HTMLElement;
                    }
                    return trigger;
                  }}
                />
              </Form.Item>
            </Col> */}
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item
                label={fieldLabels.type2}
                name="type2"
                // rules={[{ required: true, message: 'Please select Warehouse Type' }]}
              >
                <Input placeholder="Write brief info about product">
                  {/* <Option value="private">Private</Option>
                  <Option value="public">Public</Option> */}
                </Input>
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title="Products Added" bordered={false}>
          <Form.Item name="members">
            <TableForm />
          </Form.Item>
        </Card>
      </PageContainer>
      <FooterToolbar>
        {getErrorInfo(error)}
        <Button type="primary" onClick={() => form?.submit()} loading={submitting}>
          Submission
        </Button>
      </FooterToolbar>
    </Form>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['formAndadvancedForm/submitAdvancedForm'],
}))(AdvancedForm);
