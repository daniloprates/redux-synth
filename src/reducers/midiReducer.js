import * as types from '../constants/actionTypes';
import { initMidi } from '../constants/initialState';

export default function keyboardReducer(state = initMidi, action) {

  let newState;

  switch (action.type) {

    case types.MIDI_CHANGED: {
      newState = Object.assign({}, state);
      newState[action.param] = action.value;
      return newState;
    }

    default:
      return state;
  }
}
