import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from './enums/error.enum';
import { AccountsResponseQueryInterface, AccountResponseInterface } from './interfaces/index.interface';
import { getOriginAccounts, getOriginQuery } from './service';

export interface StateModel {
  accounts?:  AccountResponseInterface | AccountsResponseQueryInterface,
  error?: ErrorResponseEnum
}

interface Model {
  namespace: string,
  state: StateModel,
  effects: {
    getAccounts: Effect,
    getAccountsQuery: Effect,
  },
  reducers: {
    setAccount: Reducer<StateModel>,
    setError: Reducer<StateModel>
  }
}

const Model: Model = {
  namespace: 'nbeComboAccounts',
  state: {},
  effects: {
    *getAccounts({payload}, {call, put}) {
      const res = yield call(getOriginAccounts, payload);
      yield put({type: res.status? 'setError':'setAccount', payload: res.status? res.status : {...res}});
    },
    *getAccountsQuery({payload}, {call, put}) {
      const res = yield call(getOriginQuery, payload);
      yield put({type: res.status? 'setError':'setAccount', payload: res.status? res.status : {...res}});
    }
  },
  reducers: {
    setAccount(state, {payload}) {
      return {
        ...state,
        accounts: payload
      }
    },
    setError(state, {payload}) {
      return{
        ...state,
        error: payload
      }
    }
  }
}

export default Model;