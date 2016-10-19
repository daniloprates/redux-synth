import * as types from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from '../constants/initialState';
import { updateOctave } from '../utils/index';

export default function synthReducer(state = initialState.synth, action) {

  let notes = Object.assign({}, state.notes);
  // let note = parseFloat((action.octave || state.octave)+''+action.note);
  let newState;newState;

  let { isPlaying } = action;
  let { octave } = state;

  switch (action.type) {

    case types.NOTE_ON:
      notes[action.note] = {
        index: Object.keys(notes).length,
        velocity: action.velocity || initialState.synth.velocity,
        channel: action.channel || initialState.synth.channel
      };

      return Object.assign({}, state, {notes, isPlaying: true });

    case types.NOTE_OFF:
      delete notes[action.note];
      isPlaying = !!Object.keys(notes).length;
      return Object.assign({}, state, {notes, isPlaying } );

    case types.STOP_PLAYING:
      return Object.assign({}, state, {isPlaying: false, notes: initialState.synth.notes});

    case types.PANEL_CHANGED:{
      let type = action.panelType;
      let newState = Object.assign({}, state);

      newState[type] = action.value;

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
      if (octave == 0) {return state;}
      notes = updateOctave(notes,octave-1);
      return Object.assign({}, state, {octave: octave - 1, notes});

    case types.OCTAVE_NEXT:
      if (octave == 9) {return state;}
      notes = updateOctave(notes,octave+1);
      return Object.assign({}, state, {octave: octave + 1, notes});
      // return Object.assign({}, state, {octave: octave + 1, isPlaying: false, notes: []});

    case types.AMPLITUDE_CHANGE:
      return Object.assign({}, state, {amplitude: action.amplitude});

    default:
      return state;
  }
}
