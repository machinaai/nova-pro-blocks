import { Effect, Reducer } from 'umi';
import { WidgetBalancesResponse } from './interfaces/index';
import { getWidgetBalance } from './service';
import { StatusResponseEnum } from './enum/error.enum';

export interface StateType {
  data?: WidgetBalancesResponse;
  status?: StatusResponseEnum;
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    getDataBalance: Effect;
  };
  reducers: {
    setDataBalance: Reducer<StateType>;
    setStatus: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'bneBalanceSummary',

  state: {

  },

  effects: {
    *getDataBalance({ payload }, { call, put }) {
      const response = yield call(getWidgetBalance, payload);
      const { status } = response;

      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setDataBalance', payload: response });
        yield put({ type: 'setStatus', payload: 200 });
      }
    }
  },

  reducers: {
    setDataBalance(state, { payload }) {
      return {
        ...state,
        data: payload
      };
    },
    setStatus(state, { payload }) {
      return {
        ...state,
        status: payload
      }
    }
  }
};

export default Model;
