// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { ListItemDataType } from './data.d';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
// const desc = [
//   'It is an innter thing that they cannot reach, they cannot reach',
//   'Hope is a good thing, maybe the best, good things will not die out',
//   'Life is like a box of chocolate, and the results are often unexpected',
//   'There were so many taverns in town, and she walked into my taverns.',
//   'At that time, I just thought about what I wanted, never wanted what I had.',
// ];

const user = [
  'Pay a little',
  'Qu Lili',
  'Lin Dongdong',
  'Zhou Xing',
  'Wu Jia',
  'Zhu ',
  'Fish Sauce',
  'Brother Lok',
  'Tam SIU-Yee',
  'Zhongni',
];

function fakeList(count: number): ListItemDataType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3] as
        | 'normal'
        | 'exception'
        | 'active'
        | 'success',
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      subDescription: desc[i % 5],
      description:
        'In the R & D process of Zhongtai products, there will be different design specifications and implementation, but there are often a lot of similar pages and components, these similar components will be pulled out into a set of standard specifications.',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        'Paragraph schematic: Ant gold suit design platform ant.design, with minimal workload, seamless access to Ant gold suit ecosystem, providing experience solutions across design and development.Ant gold suit design platform ant.design, with minimal workload, seamless access to Ant gold suit ecosystem, providing experience solutions across design and development.',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'Qu Lili',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'Wang Zhaojun',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: 'Dong Nana',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

function getFakeList(req: Request, res: Response) {
  const params = (req.query as any) as {
    count: number;
  };

  const count = params.count * 1 || 5;

  const result = fakeList(count);
  return res.json(result);
}

export default {
  'GET  /api/fake_list': getFakeList,
  // 支持值为 Object 和 Array
  'GET  /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
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
    notice: [
      {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description: 'It is an innter thing that they cannot reach, they cannot reach',
        updatedAt: new Date(),
        member: 'Science mvoing brick group',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: titles[1],
        logo: avatars[1],
        description: 'Hope is a good thing, maybe the best, good things will not die out',
        updatedAt: new Date('2017-07-24'),
        member: 'The whole team is Wu yanzu',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx3',
        title: titles[2],
        logo: avatars[2],
        description: 'There were so many taverns in town, and she walked into my taverns.',
        updatedAt: new Date(),
        member: 'Secondary 2 girls group',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description: 'At that time, I just thought about what I wanted, never wanted what I had.',
        updatedAt: new Date('2017-07-23'),
        member: 'Programmer daily',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: titles[4],
        logo: avatars[4],
        description: 'Winter is coming',
        updatedAt: new Date('2017-07-23'),
        member: 'High force grid design day group',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx6',
        title: titles[5],
        logo: avatars[5],
        description: 'Life is like a box of chocolate, and the results are often unexpected',
        updatedAt: new Date('2017-07-23'),
        member: 'I lied to you to learn computers',
        href: '',
        memberLink: '',
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
};
