import { ResponseInterface } from '../interfaces/componentsDefinition.interface';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { DataTablesRequest } from '../services/request-data-tables';

export interface StateModel {
  dataTable?:ResponseInterface[];
  idRequest?:any;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getDataTables: Effect;
  };
  reducers: {
    setDataTables: Reducer<StateModel>;
    setIdRequestClient: Reducer<StateModel>;
    setError: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {},
  effects: {
    *getDataTables({ payload }:any, { call, put }:any) {
      const res = yield call(DataTablesRequest, payload);
      yield put({
        type: res.status ? 'setError' : 'setDataTables',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setDataTables(state:any, { payload }:any) {
      return {
        ...state,
        dataTable: payload,
      };
    },
    setIdRequestClient(state:any, { payload }:any) {
      return {
        ...state,
        idRequest: payload,
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
