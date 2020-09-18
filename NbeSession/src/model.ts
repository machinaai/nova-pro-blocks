import { stringify } from 'querystring';
import { history, Reducer, Effect } from 'umi';

import ModalTrigger from './components/modals/ModalLogout/index';
import { logoutRequest } from './services/logout-request';
import { refreshSession } from './services/refreshSession';

export interface StateType {
  timeLogout?: boolean;
  limit?: number;
  isError?: boolean;
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    logout: Effect;
    refresh: Effect;
  };
  reducers: {
    changeTimeLogout: Reducer<StateType>;
    changeLimit: Reducer<StateType>;
    showError: Reducer<StateType>;
  };
}

const Model: LoginModelType = {
  namespace: 'bneSession',

  state: {
    timeLogout: false,
    limit: 0,
  },

  effects: {
    *logout(_, { call }) {
      const token = getToken;
      if (token) {
        yield call(logoutRequest, token);
        // Note: There may be security issues, please note
        if (window.location.pathname !== '/user/login') {
          history.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          });
        }
        if (window.location.pathname === '/user/login') {
          ModalTrigger(token);
          localStorage.clear();
          sessionStorage.clear();
        }
      }
    },

    *refresh({ payload }, { call, put }) {
      const token = getToken;
      if (token) {
        const response = yield call(refreshSession, payload, token);
        // Note: There may be security issues, please note
        const { status } = response;
        if (status) {
          yield put({
            type: 'showError',
            payload: true,
          });
        } else {
          yield put({
            type: 'changeTimeLogout',
            payload: true,
          });
          yield put({
            type: 'changeLimit',
            payload: 1,
          });
          localStorage.clear();
        }
      }
    },
  },

  reducers: {
    changeTimeLogout(state, { payload }) {
      return {
        ...state,
        timeLogout: payload,
        isError: false,
      };
    },
    changeLimit(state, { payload }) {
      return {
        ...state,
        limit: state?.limit + payload,
        isError: false,
      };
    },
    showError(state, { payload }) {
      return {
        ...state,
        isError: payload,
      };
    },
  },
};

export default Model;
