// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import city from './geographic/city.json';
import province from './geographic/province.json';

function getProvince(_: Request, res: Response) {
  return res.json(province);
}

function getCity(req: Request, res: Response) {
  return res.json(city[req.params.province]);
}
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET  /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: 'All rivers run into sea, tolerance is great',
    title: 'Interaction expert',
    group: 'Ant gold suit-so-and-so business group－so-and-so platform Department－so-and-so Technology Department－UED',
    tags: [
      {
        key: '0',
        label: 'Very thoughtful',
      },
      {
        key: '1',
        label: 'Focus on. design',
      },
      {
        key: '2',
        label: 'Spicy~',
      },
      {
        key: '3',
        label: 'Big, long legs',
      },
      {
        key: '4',
        label: 'Chuan girl',
      },
      {
        key: '5',
        label: 'All rivers run into sea',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: 'Zhejiang province',
        key: '330000',
      },
      city: {
        label: 'Hagzhou city',
        key: '330100',
      },
    },
    address: 'No. 77 gongzhuan Road, West Lake District, Xihu district, Xihu district, China',
    phone: '0752-268888888',
  },
  'GET  /api/geographic/province': getProvince,
  'GET  /api/geographic/city/:province': getCity,
};
