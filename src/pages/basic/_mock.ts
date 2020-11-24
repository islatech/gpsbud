const basicGoods = [
  {
    id: '1234561',
    name: 'Mineral water 550ml',
    barcode: '12421432143214321',
    price: '2.00',
    num: '1',
    amount: '2.00',
  },
  {
    id: '1234562',
    name: 'Herbal tea 300ml',
    barcode: '12421432143214322',
    price: '3.00',
    num: '2',
    amount: '6.00',
  },
  {
    id: '1234563',
    name: 'Delicious potatoe chips',
    barcode: '12421432143214323',
    price: '7.00',
    num: '4',
    amount: '28.00',
  },
  {
    id: '1234564',
    name: 'Especially delicious omelet',
    barcode: '12421432143214324',
    price: '8.50',
    num: '3',
    amount: '25.50',
  },
];

const basicProgress = [
  {
    key: '1',
    time: '2017-10-01 14:10',
    rate: 'Contact customers',
    status: 'processing',
    operator: 'Pick-up staff: ID1234',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2017-10-01 14:05',
    rate: 'Pick-up, lets go',
    status: 'success',
    operator: 'Pick-up staff: ID1234',
    cost: '1h',
  },
  {
    key: '3',
    time: '2017-10-01 13:05',
    rate: 'Pick-up officer takes oders',
    status: 'success',
    operator: 'Pick-up staff: ID1234',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2017-10-01 13:00',
    rate: 'Application approved',
    status: 'success',
    operator: 'System',
    cost: '1h',
  },
  {
    key: '5',
    time: '2017-10-01 12:00',
    rate: 'Initiate a return request',
    status: 'success',
    operator: 'Users',
    cost: '5mins',
  },
];

const getProfileBasicData = {
  basicGoods,
  basicProgress,
};

export default {
  'GET  /api/profile/basic': getProfileBasicData,
};
