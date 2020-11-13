import { Reducer } from 'umi';

export interface StateModel {
  address?:string;
  option?: string;
  flowComplete?: boolean;
}

interface Model {
  namespace: string;
  state: StateModel;
  reducers: {
    setAddress:Reducer<StateModel>;
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
    setAddress(state: any, { payload }: any) {
      return {
        ...state,
        address: payload,
      };
    },
    setOption(state: any, { payload }: any) {
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
