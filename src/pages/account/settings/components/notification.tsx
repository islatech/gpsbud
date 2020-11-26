import { List, Switch } from 'antd';
import React, { Component, Fragment } from 'react';

import { FormattedMessage /* formatMessage */ } from 'umi';

type Unpacked<T> = T extends (infer U)[] ? U : T;

class NotificationView extends Component {
  getData = () => {
    const Action = (
      <Switch
        checkedChildren={
          <FormattedMessage id="accountandsettings.settings.open" defaultMessage="Qu Lili" />
        }
        unCheckedChildren={
          <FormattedMessage id="accountandsettings.settings.close" defaultMessage="Qu Lili" />
        }
        defaultChecked
      />
    );
    return [
      {
        title: [
          <FormattedMessage
            id="accountandsettings.notification.password"
            defaultMessage="Qu Lili"
          />,
        ],
        description: [
          <FormattedMessage
            id="accountandsettings.notification.password-description"
            defaultMessage="Qu Lili"
          />,
        ],
        actions: [Action],
      },
      {
        title: [
          <FormattedMessage
            id="accountandsettings.notification.messages"
            defaultMessage="Qu Lili"
          />,
        ],
        description: [
          <FormattedMessage
            id="accountandsettings.notification.messages-description"
            defaultMessage="Qu Lili"
          />,
        ],
        actions: [Action],
      },
      {
        title: [
          <FormattedMessage id="accountandsettings.notification.todo" defaultMessage="Qu Lili" />,
        ],
        description: [
          <FormattedMessage
            id="accountandsettings.notification.todo-description"
            defaultMessage="Qu Lili"
          />,
        ],
        actions: [Action],
      },
    ];
  };

  render() {
    const data = this.getData();
    return (
      <Fragment>
        <List<Unpacked<typeof data>>
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item: { actions: any; title: any; description: any }) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default NotificationView;
