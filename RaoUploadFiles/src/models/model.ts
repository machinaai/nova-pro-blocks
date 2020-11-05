import { Effect, Reducer } from '@@/core/umiExports';
import { ineFromDataService, ineBackDataService, pdfDataService } from './../service';

export interface ModelType {
  namespace: string;
  state: any;
  effects: {
    // getData: Effect;
    ineFrontData: Effect;
    ineBackData: Effect;
    pdfData: Effect
  };
  flowComplete?: boolean;
  reducers: {
    setStatus: Reducer<ModelType>;
    setStep: Reducer<ModelType>;
    setFlowStatus: Reducer<ModelType>;
  }
}
export const Model: ModelType = {
  namespace: 'requestModel',
  state: {
    data: {},
  },
  effects: {
    *ineFrontData({ payload }: any, { call, put }: any) {
      const response = yield call(ineFromDataService, payload);
      const { status } = response;
      console.log('responde ine front', response)
      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setStatus', payload: 200 });
      }
    },
    *ineBackData({ payload }: any, { call, put }: any) {
      const response = yield call(ineBackDataService, payload)
      console.log('responde ine back', response)
      const { status } = response;
      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setStatus', payload: 200 });
      }
    },
    *pdfData({ payload }: any, { call, put }: any) {
      const response = yield call(pdfDataService, payload)
      console.log('responde pdf', response);
      const { status } = response;
      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setStatus', payload: 200 });
      }
    },
  },
  reducers: {
    setStep(state: any, { payload }: any) {
      return {
        ...state,
        step: payload
      }
    },
    setStatus(state: any, { payload }: any) {
      return {
        ...state,
        status: payload
      }
    },
    setFlowStatus(state: any, { payload }: any) {
      return {
        ...state,
        flowComplete: payload
      }
    }
  }
};
export default Model;


