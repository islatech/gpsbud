const advancedOperation1 = [
  {
    key: 'op1',
    type: 'The ordering relationship takes effect',
    name: 'Qu Lili',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op2',
    type: 'Financial Review',
    name: 'Pay a little',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Do not pass the reason',
  },
  {
    key: 'op3',
    type: 'Department first trial',
    name: 'Chow Mau Mau',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op4',
    type: 'Submit an order',
    name: 'Lin Dongdong',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'It is great',
  },
  {
    key: 'op5',
    type: 'Create an order',
    name: 'Sweat teeth, teeth, teeth, teeth',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation2 = [
  {
    key: 'op1',
    type: 'The ordering relationship takes effect',
    name: 'Qu Lili',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation3 = [
  {
    key: 'op1',
    type: 'Create an order',
    name: 'Sweat teeth, teeth, teeth, teeth',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const getProfileAdvancedData = {
  advancedOperation1,
  advancedOperation2,
  advancedOperation3,
};

export default {
  'GET  /api/profile/advanced': getProfileAdvancedData,
};
