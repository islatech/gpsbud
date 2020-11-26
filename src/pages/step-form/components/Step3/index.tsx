import { Button, Result, Descriptions, Statistic } from 'antd';
import React from 'react';
import { connect, Dispatch } from 'umi';
import { StateType } from '../../model';
import styles from './index.less';

interface Step3Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
}

const Step3: React.FC<Step3Props> = (props) => {
  const { data, dispatch } = props;
  if (!data) {
    return null;
  }
  const { payAccount, receiverAccount, receiverName, amount } = data;
  const onFinish = () => {
    if (dispatch) {
      dispatch({
        type: 'formAndstepForm/saveCurrentStep',
        payload: 'info',
      });
    }
  };
  const information = (
    <div className={styles.information}>
      <Descriptions column={1}>
        <Descriptions.Item label="Payment Account"> {payAccount}</Descriptions.Item>
        <Descriptions.Item label="Receiver Account"> {receiverAccount}</Descriptions.Item>
        <Descriptions.Item label="Receiver Name"> {receiverName}</Descriptions.Item>
        <Descriptions.Item label="Transfer Amount">
          <Statistic value={amount} suffix="Yuan" />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
  const extra = (
    <>
      <Button type="primary" onClick={onFinish}>
        Another Stroke
      </Button>
      <Button>View Bill</Button>
    </>
  );
  return (
    <Result
      status="success"
      title="Operation Successful"
      subTitle="Expected to arrive within two hours"
      extra={extra}
      className={styles.result}
    >
      {information}
    </Result>
  );
};

export default connect(({ formAndstepForm }: { formAndstepForm: StateType }) => ({
  data: formAndstepForm.step,
}))(Step3);
