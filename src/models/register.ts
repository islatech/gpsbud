import { Effect, Reducer } from 'umi';

import { fakeRegister } from '@/services/register';

export interface StateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface RegisterModelType {
  namespace: string;
  state: StateType;
  effects: {
    submit: Effect;
  };
  reducers: {
    registerHandle: Reducer<StateType>;
  };
}

const RegisterModel: RegisterModelType = {
  namespace: 'userAndregister',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },

  reducers: {
    registerHandle(state, { payload }) {
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};

export default RegisterModel;
