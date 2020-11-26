import React from 'react';
import { Form, Alert, Button, Descriptions, Divider, Statistic, Input } from 'antd';
import { connect, Dispatch } from 'umi';
import { StateType } from '../../model';
import styles from './index.less';

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
interface Step2Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
  submitting?: boolean;
}

const Step2: React.FC<Step2Props> = (props) => {
  const [form] = Form.useForm();
  const { data, dispatch, submitting } = props;
  if (!data) {
    return null;
  }
  const { validateFields, getFieldsValue } = form;
  const onPrev = () => {
    if (dispatch) {
      const values = getFieldsValue();
      dispatch({
        type: 'formAndstepForm/saveStepFormData',
        payload: {
          ...data,
          ...values,
        },
      });
      dispatch({
        type: 'formAndstepForm/saveCurrentStep',
        payload: 'info',
      });
    }
  };
  const onValidateForm = async () => {
    const values = await validateFields();
    if (dispatch) {
      dispatch({
        type: 'formAndstepForm/submitStepForm',
        payload: {
          ...data,
          ...values,
        },
      });
    }
  };

  const { payAccount, receiverAccount, receiverName, amount } = data;
  return (
    <Form
      {...formItemLayout}
      form={form}
      layout="horizontal"
      className={styles.stepForm}
      initialValues={{ password: '123456' }}
    >
      <Alert
        closable
        showIcon
        message="Confirmation After the transfer, the funds will be directly credited to the other party's account and cannot be returned."
        style={{ marginBottom: 24 }}
      />
      <Descriptions column={1}>
        <Descriptions.Item label="Payment Account"> {payAccount}</Descriptions.Item>
        <Descriptions.Item label="Receiver Account"> {receiverAccount}</Descriptions.Item>
        <Descriptions.Item label="Receiver Name"> {receiverName}</Descriptions.Item>
        <Descriptions.Item label="Transfer Amount">
          <Statistic value={amount} suffix="Yuan" />
        </Descriptions.Item>
      </Descriptions>
      <Divider style={{ margin: '24px 0' }} />
      <Form.Item
        label="Payment Password"
        name="password"
        required={false}
        rules={[{ required: true, message: 'Require payment password to make payment' }]}
      >
        <Input type="password" autoComplete="off" style={{ width: '80%' }} />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 8 }}
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: {
            span: formItemLayout.wrapperCol.span,
            offset: formItemLayout.labelCol.span,
          },
        }}
      >
        <Button type="primary" onClick={onValidateForm} loading={submitting}>
          Submission
        </Button>
        <Button onClick={onPrev} style={{ marginLeft: 8 }}>
          Previous
        </Button>
      </Form.Item>
    </Form>
  );
};
export default connect(
  ({
    formAndstepForm,
    loading,
  }: {
    formAndstepForm: StateType;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    submitting: loading.effects['formAndstepForm/submitStepForm'],
    data: formAndstepForm.step,
  }),
)(Step2);
