import * as types from '../constants/actionTypes';
import { initKeyboard } from '../constants/initialState';
import Keyboard from '../components/Keyboard';
// import { updateOctave } from '../utils/index';

let newState = initKeyboard;
newState.keys = Keyboard.getKeys();
console.log('state', newState);


export default function keyboardReducer(state = newState, action) {

  let newState;

  // let { octave } = state;

  switch (action.type) {

    case types.KEYBOARD_CHANGED: {
      let type = action.panelType;
      newState = Object.assign({}, state);

      newState[action.param] = action.value;

      if (type == 'scale' && action.value == 'chromatic') {
        newState.root = 0;
      }
      if (type == 'octaves' && action.value > state.octaves && state.octave + 0) {
        // newState.octave = action.value - state.octaves;
        // newState.octave--;
      }

      return newState;
    }

    case types.OCTAVE_PREV:
      console.log('OCTAVE_PREV');
      return state;

    //   if (octave == 0) {return state;}
    //   notes = updateOctave(notes,octave-1);
    //   return Object.assign({}, state, {octave: octave - 1, notes});

    // case types.OCTAVE_NEXT:
    //   if (octave == 9) {return state;}
    //   notes = updateOctave(notes,octave+1);
    //   return Object.assign({}, state, {octave: octave + 1, notes});
    //   // return Object.assign({}, state, {octave: octave + 1, isPlaying: false, notes: []});

    default:
      return state;
  }
}
