import { Effect, Reducer, StateModel } from 'umi';

import { getStepper } from '../service';

export interface StateType {
  current: number;
  stepsDataJson?: any;
  loading?: boolean;
  splashScreen?: boolean;
  typeFlow?: any;
  phoneUser?: any;
  dataUser?: any;
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    getStepperData: Effect;
  };
  reducers: {
    setDataUser: Reducer<StateType>;
    setTypeFlow: Reducer<StateType>;
    setPhoneUser: Reducer<StateType>;
    saveStepperData: Reducer<StateType>;
    changeCurrent: Reducer<StateType>;
    changeCurrentReturn: Reducer<StateType>;
  };
}
export const Model: ModelType = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    current: 0,
    splashScreen: false,
    loading: true,
  },
  effects: {
    *getStepperData({ payload }, { call, put }: any) {
      const response = yield call(getStepper, payload);
      console.log(JSON.parse(response.json));
      
      yield put({
        type: 'saveStepperData',
        payload: JSON.parse(response.json),
      });
    },
  },
  reducers: {
    setDataUser(state,{ payload }) {
      return {
        ...state,
        dataUser: payload
      };
    },
    setPhoneUser(state,{ payload }) {
      return {
        ...state,
       phoneUser: payload
      };
    },
    setTypeFlow(state,{ payload }) {
      return {
        ...state,
       typeFlow: payload
      };
    },
    changeCurrent(state) {
      return {
        ...state,
        current: state?.splashScreen ? 0 : state?.current + 1,
        splashScreen: false,
      };
    },
    changeCurrentReturn(state) {
      return {
        ...state,
        current: state?.current - 1,
        splashScreen: false,
      };
    },
    saveStepperData(state, { payload }) {

      const check = payload.some((element: any) => {
        return element.component === 'SplashScreen';
      });
      
      if (check) {payload.shift();}

      return {
        ...state,
        stepsDataJson: payload,
        splashScreen: check,
        loading: false,
      };
    },
  },
};
export default Model;
