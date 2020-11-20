import { RequestProp } from '../interfaces/ProblockProps.interface';
import { CloseRequestService } from '../services/close-request';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

export interface StateModel {
  closeRequest?: RequestProp;
  dateRequest?:ComponentsDefinition;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getCloseRequest: Effect;
  };
  reducers: {
    setCloseRequest: Reducer<StateModel>;
    setDateRequest: Reducer<StateModel>;
    setError: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {},
  effects: {
    *getCloseRequest({ payload }:any, { call, put }:any) {
      const res = yield call(CloseRequestService, payload);
      yield put({
        type: res.status ? 'setError' : 'setCloseRequest',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setCloseRequest(state : any, { payload } :any) {
      return {
        ...state,
        closeRequest: payload,
      };
    },
    setDateRequest(state : any, { payload } :any) {
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
