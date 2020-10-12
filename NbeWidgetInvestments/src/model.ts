import { Effect, Reducer } from 'umi';
import { StatusResponseEnum } from './enums/status.enum';
import { ArrayInvestment } from './interfaces/index';
import { invesmentRequest } from './service';

export interface StateModel {
  data?: ArrayInvestment;
  status?: StatusResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getInvestments: Effect;
  };
  reducers: {
    setDataInvestments: Reducer<StateModel>;
    setStatus: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'nbeInvestmentWidget',
  state: {},
  effects: {
    *getInvestments({ payload }, { call, put }) {
      const response = yield call(invesmentRequest, payload);
      const { status } = response;

      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setDataInvestments', payload: response });
        yield put({ type: 'setStatus', payload: 200 });
      }
    },
  },
  reducers: {
    setDataInvestments(state, { payload }) {
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
  },
};

export default Model;
