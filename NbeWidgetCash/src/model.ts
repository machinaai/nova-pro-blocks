import { ErrorResponseEnum } from '@/pages/NbeComboAccounts/enums/error.enum';
import { Effect, Reducer } from 'umi';
import { AccountResponse } from '../interfaces/accountResponse';
import { cashRequest } from '../services/show-cash-request';

export interface StateModel {
  details?: AccountResponse;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getCashDetail: Effect;
  };
  reducers: {
    setCashDetail: Reducer<StateModel>;
    setError: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'nbeWidgetCash',
  state: {},
  effects: {
    *getCashDetail({ payload }, { call, put }) {
      const res = yield call(cashRequest, payload);
      yield put({
        type: res.status ? 'setError' : 'setCashDetail',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setCashDetail(state, { payload }) {
      return {
        ...state,
        details: payload,
      };
    },
    setError(state, { payload }) {
      return {
        ...state,
        error: payload,
      };
    },
  },
};

export default Model;
