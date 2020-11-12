import { Reducer } from 'umi';

export interface StateModel {
  cardNumber?: string;
  nameUser?: string;
  option?: string;
  flowComplete?: boolean;
}

interface Model {
  namespace: string;
  state: StateModel;
  reducers: {
    setCardNumber: Reducer<StateModel>;
    setNameUser: Reducer<StateModel>;
    setOption: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    flowComplete: false,
  },
  reducers: {
    setCardNumber(state, { payload }) {
      return {
        ...state,
        cardNumber: payload,
      };
    },
    setNameUser(state, { payload }) {
      return {
        ...state,
        nameUser: payload,
      };
    },
    setOption(state, { payload }) {
      return {
        ...state,
        option: payload,
      };
    },
    setFlowStatus(state: any, { payload }: any) {
      return {
        ...state,
        flowComplete: payload,
      };
    },
  },
};

export default Model;
