import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import synthReducer from './synthReducer';

const rootReducer = combineReducers({
  synth: synthReducer,
  routing: routerReducer
});

export default rootReducer;
