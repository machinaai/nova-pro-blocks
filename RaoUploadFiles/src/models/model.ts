import { Effect } from '@@/core/umiExports';
import { sendData, ineFromDataService, ineBackDataService, pdfDataService } from './../service';

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    // getData: Effect;
    ineFrontData: Effect;
    ineBackData: Effect;
    pdfData: Effect
  };
}
export const Model: ModelType = {
  namespace: 'requestModel',
  state: {
    data: {},
  },
  effects: {
    // *getData({ payload }, { call, put }) {
    //   const response = yield call(sendData, payload);
    //   console.log('response: ', response);
    // },
    *ineFrontData({ payload }, { call }) {
      const response = yield call(ineFromDataService, payload)
      console.log('responde ine front', response)
    },
    *ineBackData({ payload }, { call }) {
      const response = yield call(ineBackDataService, payload)
      console.log('responde ine back', response)
    },
    *pdfData({ payload }, { call }) {
      const response = yield call(pdfDataService, payload)
      console.log('responde pdf', response)
    },
  },
};
export default Model;


