import { Request, Response } from 'express';
import { ListItemDataType } from './data.d';



const titles = [
  'Lemon Haze',
  'Acapulco Gold',
  'Sour Diesel',
  'Blue Dream',
  'Afghan Kush',
  'White Widow',
  'Fruity Pebbles',
  'Maui Wowie',
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
const desc = [
  'Happy | Uplifted',
  'Happy | Energizing',
  'Energetic | Talkative',
  'Creative | Uplifted',
  'Hungry | Sleepy',
  'Talkative | Euphoric',
  'Giggly | Happy',
  'Energetic | Uplifted',
];

const user = [
  'Pay a little',
  'Qui Lili',
  'Lin Dongdong',
  'Zhou Xing',
  'Wu Jia',
  'Zhu ',
  'Fish Sauce',
  'Brother Lok',
  'Tam SIU-Yee',
  'Zhongni',
];

// function newFunction() {
//   import from = ; './projects';
// }

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
        'Paragraph schematic: Ant Financial design platform ant.design, with minimal workload, seamless access to Ant Financial ecosystem, providing experience solutions across design and development.Ant Financial design platform ant.design, with minimal workload, seamless access to Ant Financial ecosystem, providing experience solutions across design and development.',
      members: [
        // {
        //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        //   name: 'Qu Lili',
        //   id: 'member1',
        // },
        // {
        //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        //   name: 'Wang Zhaojun',
        //   id: 'member2',
        // },
        // {
        //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        //   name: 'Dong Nana',
        //   id: 'member3',
        // },
      ],
    });
  }

  return list;
}

function getFakeList(req: Request, res: Response) {
  const params = (req.query as any) as {
    count: number;
  };

  const count = params.count * 1 || 20;

  const result = fakeList(count);
  return res.json(result);
}

export default {
  'GET  /api/fake_list': getFakeList,
};
