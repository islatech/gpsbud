import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}
// The code is compatible with local service mock and static data for the deployment site
export default {
  // Support values for Object and Array
  'GET /api/currentUser': {
    name: 'maced',
    avatar: 'https://s3.amazonaws.com/profile_photos/1195271994730893.EyG5TTIoO6NJebL0iY9n_128x128.png',
    userid: '00000004',
    email: 'maced@islandtech.xyz',
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
    country: 'United States',
    geographic: {
      province: {
        label: 'Puerto Rico',
        key: '330000',
      },
      city: {
        label: 'San Juan',
        key: '330100',
      },
    },
    address: '123 Street Address, San Juan, Puerto Rico 00926',
    phone: '555-555-5555',
  },
  // GET POST can be omitted
  'GET /api/users': [
    {
      key: '1',
      name: 'xcesiv',
      age: 30,
    address: '123 Street Address, San Juan, Puerto Rico 00926',
    },
    {
      key: '2',
      name: 'coqui',
      age: 30,
    address: '123 Street Address, San Juan, Puerto Rico 00926',
    },
    {
      key: '3',
      name: 'twizzle',
      age: 30,
    address: '123 Street Address, San Juan, Puerto Rico 00926',
    },
  ],
  'POST /api/login/account': (req: Request, res: Response) => {
    const { password, userName, type } = req.body;
    if (password === 'islatech' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    if (password === 'islatech' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }
    if (password === 'islatech' && userName === 'patient') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'patient',
      });
      return;
    }
    if (password === 'islatech' && userName === 'caregiver') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'caregiver',
      });
      return;
    }
    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },

  'GET  /api/login/captcha': getFakeCaptcha,
};
