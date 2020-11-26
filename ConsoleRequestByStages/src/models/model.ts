import { Effect, Reducer } from 'umi';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';
import { ErrorResponseEnum } from '../enums/error.enum';
import { RequestStepsService } from '../services/request-steps';

export interface StateModel {
  dataSteps?: any;
  dateRequest?: ComponentsDefinition;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getSteps: Effect;
  };
  reducers: {
    setSteps: Reducer<StateModel>;
    setDateRequest: Reducer<StateModel>;
    setError: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {},
  effects: {
    *getSteps({ payload }: any, { call, put }: any) {
      const res = yield call(RequestStepsService, payload);
      yield put({
        type: res.status ? 'setError' : 'setSteps',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setSteps(state: any, { payload }: any) {
      return {
        ...state,
        dataSteps: payload,
      };
    },
    setDateRequest(state: any, { payload }: any) {
      return {
        ...state,
        dateRequest: payload,
      };
    },
    setError(state: any, { payload }: any) {
      return {
        ...state,
        error: payload,
      };
    },
  },
};

export default Model;
