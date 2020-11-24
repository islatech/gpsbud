// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}

export default {
  'POST  /api/login/account': (req: Request, res: Response) => {
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
  'GET  /api/login/captcha': getFakeCaptcha,
};
