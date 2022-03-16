import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { inReducer } from './modules/entradas/reducer';
import { outReducer } from './modules/saidas/reducer';
import { beerReducer } from './modules/beer/reducer';

const combinedReducers = combineReducers({
  in: inReducer,
  out: outReducer,
  beer: beerReducer,
});

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
