import { createStore, combineReducers } from 'redux';
import { inReducer } from './modules/entradas/reducer';

const combinedReducers = combineReducers({
  in: inReducer,
});

export const store = createStore(combinedReducers);
