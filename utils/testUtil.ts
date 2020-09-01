import { createStore } from 'redux';
import rootReducer from './reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState: any) => {
  return createStore(rootReducer, initialState);
};
