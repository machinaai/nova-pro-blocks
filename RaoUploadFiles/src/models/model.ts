import { Effect, Reducer } from '@@/core/umiExports';
import { ineFromDataService, ineBackDataService, pdfDataService } from './../service';

export interface ModelType {
  namespace: string;
  state: any;
  effects: {
    // getData: Effect;
    ineFrontData: Effect;
    ineBackData: Effect;
    pdfData: Effect;
    prueba: Effect;
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
    *prueba({ payload }: any, { call, put }: any) {
      const responseFront = yield call(ineFromDataService, payload.objectIneFront);
      const responseBack = yield call(ineBackDataService, payload.objectIneBack);

      const { status: statusFront } = responseFront;
      const { status: statusBack } = responseBack;


      if (statusFront || statusBack) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setStatus', payload: 200 });
        yield put({ type: 'setFlowStatus', payload: false });
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
        yield put({ type: 'setFlowStatus', payload: false });
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


