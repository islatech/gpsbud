import { Effect, Reducer } from 'umi';

import { CardListItemDataType } from '../../mock/data';
import { queryFakeList } from '@/services/listAndcardList';

export interface StateType {
  list: CardListItemDataType[];
}

export interface CardListModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
  };
  reducers: {
    queryList: Reducer<StateType>;
  };
}

const CardListModel: CardListModelType = {
  namespace: 'listAndcardList',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};

export default CardListModel;
