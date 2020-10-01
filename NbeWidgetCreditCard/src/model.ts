import { Effect, Reducer } from 'umi';
import { ArrayCreditCardsInterface } from './interfaces/array-credit-cards.interface';
import { getCreditCards } from './service';

export interface StateModel {
  creditCards?:  ArrayCreditCardsInterface,
  error?: boolean,
}

interface Model {
  namespace: string,
  state: StateModel,
  effects: {
    getCreditCards: Effect,
  },
  reducers: {
    setCreditCards: Reducer<StateModel>,
    setError: Reducer<StateModel>,
  }
}

const Model: Model = {
  namespace: 'nbeWidgetCreditCard',
  state: {},
  effects: {
    *getCreditCards({payload}, {call, put}) {
      const res = yield call(getCreditCards, payload);
      yield put({type: res.status? 'setError':'setCreditCards', payload: res.status? true : {...res}});
    }
  },
  reducers: {
    setCreditCards(state, {payload}) {
      return {
        ...state,
        creditCards: payload
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