// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import platform from './platform';

const rootReducer = combineReducers({
  counter,
  router,
});

export default rootReducer;
