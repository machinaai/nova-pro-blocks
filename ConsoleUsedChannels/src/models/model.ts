import { ComponentsDefinition, DataDevice } from '../interfaces/componentsDefinition.interface';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { RequestChannelsService } from '../services/request-channels';

export interface StateModel {
  dataDevice?:DataDevice;
  dateRequest?:ComponentsDefinition;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getDataDevices: Effect;
  };
  reducers: {
    setDataDevices: Reducer<StateModel>;
    setDateRequest: Reducer<StateModel>;
    setError: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {},
  effects: {
    *getDataDevices({ payload }:any, { call, put }:any) {
      const res = yield call(RequestChannelsService, payload);
      yield put({
        type: res.status ? 'setError' : 'setDataDevices',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setDataDevices(state:any, { payload }:any) {
      return {
        ...state,
        dataDevice: payload,
      };
    },
    setDateRequest(state : any, { payload } :any) {
      return {
        ...state,
        dateRequest: payload,
      };
    },
    setError(state:any, { payload }:any) {
      return {
        ...state,
        error: payload,
      };
    },
  },
};

export default Model;
