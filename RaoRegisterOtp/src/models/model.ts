import { Effect, Reducer } from 'umi';

import {StatusResponseEnum, StepEnum } from '../enums'

import { stepGetOtpPhone, stepValidateOtpPhone } from '../service';

export interface StateModel {
  step?: StepEnum;
  status?: StatusResponseEnum;
  flowComplete?: boolean
}

interface Model {
  namespace: string,
  state: StateModel,
  effects: {
    submitPhoneNumber: Effect;
    validateOtp: Effect
  },
  reducers: {
    setStatus: Reducer<StateModel>;
    setStep: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
  }
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    step: StepEnum.getOtp,
    flowComplete: false
  },
  effects: {
   
    *submitPhoneNumber({ payload }, { call, put }) {
      const response = yield call(stepGetOtpPhone, payload);
      const { status } = response;

      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setStep', payload:  StepEnum.validateOtp});
        yield put({ type: 'setStatus', payload: 200 });
      }
    },

    *validateOtp({ payload }, { call, put }) {
      const response = yield call(stepValidateOtpPhone, payload);
      const { status } = response;

      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setFlowStatus', payload:  true});
        yield put({ type: 'setStatus', payload: 200 });
      }
    },
  },
  reducers: {
    setStep(state, { payload }) {
      return {
        ...state,
        step: payload
      }
    },
    setStatus(state, { payload }) {
      return {
        ...state,
        status: payload
      }
    },
    setFlowStatus(state, { payload }) {
      return {
        ...state,
        flowComplete: payload
      }
    }
  }
}

export default Model;