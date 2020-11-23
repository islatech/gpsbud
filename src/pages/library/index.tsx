import { Badge, Card, Descriptions, Divider, Table } from 'antd';
import React, { Component } from 'react';

import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { BasicProfileDataType } from './data.d';
import styles from './style.less';

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