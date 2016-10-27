import * as types from '../constants/actionTypes';
import { initKeyboard } from '../constants/initialState';
import Keyboard from '../containers/KeyboardContainer';
import { scales } from '../constants/scales';
// import { updateOctave } from '../utils/index';

let newState = initKeyboard;
newState.keys = Keyboard.getKeys(initKeyboard);
newState.compKeys = Keyboard.getCompKeys(initKeyboard);
newState.length = scales[newState.scale].length;

export default function keyboardReducer(state = newState, action) {

  let newState;// , keys, keyIndex;

  switch (action.type) {

    case types.KEYBOARD_CHANGED: {
      newState = Object.assign({}, state);

      newState[action.param] = action.value;

      if (action.param == 'scale' && action.value == 'chromatic') {
        newState.root = 0;
      }
      newState.keys = Keyboard.getKeys(newState);
      newState.compKeys = Keyboard.getCompKeys(newState);
      newState.length = scales[newState.scale].length;

      return newState;
    }

    // case types.NOTE_ON:
    //   keyIndex = action.note;
    //   keys = Object.assign({}, state.keys);
    //   keys[`playing${keyIndex}`] = true;
    //   return  Object.assign({}, state, {keys});

    // case types.NOTE_OFF:
    //   keyIndex = action.note;
    //   keys = Object.assign({}, state.keys);
    //   keys[`playing${keyIndex}`] = false;
    //   return  Object.assign({}, state, {keys});

    case types.OCTAVE_PREV:
      if (state.octave == 0) {return state;}
      newState = Object.assign({}, state);
      newState.octave = newState.octave - 1;
      newState.keys = Keyboard.getKeys(newState);
      return newState;

    case types.OCTAVE_NEXT:
      if (state.octave == 9) {return state;}
      newState = Object.assign({}, state);
      newState.octave = newState.octave + 1;
      newState.keys = Keyboard.getKeys(newState);
      return newState;

    default:
      return state;
  }
}
