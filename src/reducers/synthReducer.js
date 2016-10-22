import * as types from '../constants/actionTypes';
import { initSynth } from '../constants/initialState';

export default function synthReducer(state = initSynth, action) {

  let newState;

  switch (action.type) {

    case types.OSC_CHANGED: {

      newState = Object.assign({}, state);

      if (action.param == 'amplitude') {
        newState.osc_amplitude0 = 1-action.value;
        newState.osc_amplitude1 = action.value;
      } else {
        newState[action.param] = action.value;
      }

      return newState;
    }
    case types.FX_CHANGED: {
      let newState = Object.assign({}, state);
      newState[action.param] = action.value;
      return newState;
    }

    default:
      return state;
  }
}
