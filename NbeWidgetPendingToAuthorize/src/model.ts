import { Effect, Reducer } from 'umi';
import { StatusResponseEnum } from './enums/status.enum';
import { ArrayPendingToAuthorizeInterface } from './interfaces/index';
import { pendinToAuthorizeService } from './service';

export interface StateModel {
  data?: ArrayPendingToAuthorizeInterface;
  status?: StatusResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getPendingsToAuthorize: Effect;
  };
  reducers: {
    setDatagetPendingsToAuthorize: Reducer<StateModel>;
    setStatus: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'nbePendingToAuthorizeWidget',
  state: {},
  effects: {
    *getPendingsToAuthorize({ payload }, { call, put }) {
      const response = yield call(pendinToAuthorizeService, payload);
      const { status } = response;

      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setDatagetPendingsToAuthorize', payload: response });
        yield put({ type: 'setStatus', payload: 200 });
      }
    },
  },
  reducers: {
    setDatagetPendingsToAuthorize(state, { payload }) {
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
