import * as types from '../constants/actionTypes';
import { initGlobal, initKeyboard, initMidi } from '../constants/initialState';
import synth from '../audio/Synth';


export default function keyboardReducer(state = initGlobal, action) {

  let notes = Object.assign({}, state.notes);
  // let note = parseFloat((action.octave || state.octave)+''+action.note);
  let newState;

  let { isPlaying } = action;

  switch (action.type) {

    case types.NOTE_ON:
      if (Object.keys(notes).length === 5) {
        delete notes[Object.keys(notes)[4]];
      }
      notes[action.note] = {
        index: Object.keys(notes).length,
        velocity: action.velocity || initKeyboard.velocity,
        channel: action.channel || initMidi.channel
      };

      return Object.assign({}, state, {notes, isPlaying: true });

    case types.NOTE_OFF:
      delete notes[action.note];
      isPlaying = !!Object.keys(notes).length;
      return Object.assign({}, state, {notes, isPlaying } );

    case types.STOP_PLAYING:
      synth.stopAll();
      return Object.assign({}, state, {isPlaying: false, notes: {}});

    case types.GLOBAL_CHANGED: {
      newState = Object.assign({}, state);
      newState[action.param] = action.value;
      return newState;
    }

    default:
      return state;
  }
}
