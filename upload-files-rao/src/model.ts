import { Effect } from '@@/core/umiExports';
import { sendData } from './service';

export interface StateType {}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    getData: Effect;
  };
}

export const Model: ModelType = {
  namespace: 'requestModel',
  state: {
    data: {},
  },
  effects: {
    *getData({ payload }, { call, put }) {
      const response = yield call(sendData, payload);
      console.log('response: ', response);
    },
  },
};
export default Model;
