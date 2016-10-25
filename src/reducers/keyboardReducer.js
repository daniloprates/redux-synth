import * as types from '../constants/actionTypes';
import { initKeyboard } from '../constants/initialState';
import Keyboard from '../containers/KeyboardContainer';
// import { updateOctave } from '../utils/index';

let newState = initKeyboard;
newState.keys = Keyboard.getKeys(initKeyboard);
newState.keysArr = Keyboard.getKeysArr(initKeyboard);

export default function keyboardReducer(state = newState, action) {

  let newState, keys;

  // let { octave } = state;

  switch (action.type) {

    case types.KEYBOARD_CHANGED: {
      let type = action.panelType;
      newState = Object.assign({}, state);

      newState[action.param] = action.value;

      if (type == 'scale' && action.value == 'chromatic') {
        newState.root = 0;
      }
      newState.keys = Keyboard.getKeys(newState);

      return newState;
    }

    case types.OCTAVE_PREV:
      console.log('OCTAVE_PREV');

      return state;

    case types.NOTE_ON:
      keys = Object.assign({}, state.keys);
      console.log('keys', keys);
      keys[action.note].isPlaying = true;
      newState = Object.assign({}, state, {keys});
      // newState = Object.assign({}, state);
      newState.keys[action.note].isPlaying = true;
      return newState;

    // case types.NOTE_OFF:
    //   delete notes[action.note];
    //   isPlaying = !!Object.keys(notes).length;
    //   return Object.assign({}, state, {notes, isPlaying } );

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
