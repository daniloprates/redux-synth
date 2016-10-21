import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import global from './globalReducer';
import synth from './synthReducer';
import keyboard from './keyboardReducer';
import midi from './midiReducer';

const rootReducer = combineReducers({
  global,
  synth,
  keyboard,
  midi,
  routing: routerReducer
});

export default rootReducer;
