import { RequestProp } from '../interfaces/ProblockProps.interface';
import { UsedDevicesService } from '../services/used-devices-req';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

export interface StateModel {
  usedDevices?: RequestProp;
  dateRequest?:ComponentsDefinition;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getUsedDevices: Effect;
  };
  reducers: {
    setUsedDevices: Reducer<StateModel>;
    setDateRequest: Reducer<StateModel>;
    setError: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {},
  effects: {
    *getUsedDevices({ payload }:any, { call, put }:any) {
      const res = yield call(UsedDevicesService, payload);
      yield put({
        type: res.status ? 'setError' : 'setUsedDevices',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setUsedDevices(state : any, { payload } :any) {
      return {
        ...state,
        usedDevices: payload,
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
