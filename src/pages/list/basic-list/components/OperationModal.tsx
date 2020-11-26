import React, { FC, useEffect } from 'react';
import moment from 'moment';
import { Modal, Result, Button, Form, DatePicker, Input /* , Select */ } from 'antd';
import { BasicListItemDataType } from '../data.d';
import styles from '../style.less';

interface OperationModalProps {
  done: boolean;
  visible: boolean;
  current: Partial<BasicListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: BasicListItemDataType) => void;
  onCancel: () => void;
}

const { TextArea } = Input;
const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const [form] = Form.useForm();
  const { done, visible, current, onDone, onCancel, onSubmit } = props;

  useEffect(() => {
    if (form && !visible) {
      form.resetFields();
    }
  }, [props.visible]);

  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current,
        createdAt: current.createdAt ? moment(current.createdAt) : null,
      });
    }
  }, [props.current]);

  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  const handleFinish = (values: { [key: string]: any }) => {
    if (onSubmit) {
      onSubmit(values as BasicListItemDataType);
    }
  };

  const modalFooter = done
    ? { footer: null, onCancel: onDone }
    : { okText: 'Save', onOk: handleSubmit, onCancel };

  const getModalContent = () => {
    if (done) {
      return (
        <Result
          status="success"
          title="Operation Successful"
          subTitle="A series of information descriptions ,very short can also be punctuated."
          extra={
            <Button type="primary" onClick={onDone}>
              Got It!
            </Button>
          }
          className={styles.formResult}
        />
      );
    }
    return (
      <Form {...formLayout} form={form} onFinish={handleFinish}>
        <Form.Item
          name="title"
          label="Task name"
          rules={[{ required: true, message: 'Please enter Task name' }]}
        >
          <Input placeholder="Please enter" />
        </Form.Item>
        <Form.Item
          name="createdAt"
          label="Start Time"
          rules={[{ required: true, message: 'Please select Start Time' }]}
        >
          <DatePicker
            showTime
            placeholder="Please select"
            format="YYYY-MM-DD HH:mm:ss"
            style={{ width: '100%' }}
          />
        </Form.Item>
        {/* <Form.Item
          name="owner"
          label="Mission"
          rules={[{ required: true, message: 'Please select Task leader' }]}
        >
          <Select placeholder="Please select">
            <Select.Option value="Fu Xiaoxiao">Fu Xiaoxiao</Select.Option>
            <Select.Option value="Chow Mau Mau">Chow Mau Mau</Select.Option>
          </Select>
        </Form.Item> */}
        <Form.Item
          name="subDescription"
          label="Product Description"
          rules={[
            { message: 'Please enter at least a five character Product Description！', min: 5 },
          ]}
        >
          <TextArea rows={4} placeholder="Please enter at least 5 characters" />
        </Form.Item>
      </Form>
    );
  };

  return (
    <Modal
      title={done ? null : `Mission${current ? 'Edit' : 'Add'}`}
      className={styles.standardListForm}
      width={640}
      bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
      destroyOnClose
      visible={visible}
      {...modalFooter}
    >
      {getModalContent()}
    </Modal>
  );
};

export default OperationModal;
