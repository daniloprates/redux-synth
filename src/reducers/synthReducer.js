import * as types from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from '../constants/initialState';
import { updateOctave } from '../utils/index';

export default function synthReducer(state = initialState.synth, action) {
  let notes = state.notes.slice();
  let note = parseFloat((action.octave || state.octave)+''+action.note);
  let newState;newState;
  // console.log('action.octave', action.octave);

  let { isPlaying } = action;
  let { octave } = state;

  switch (action.type) {
    case types.NOTE_ON:
      // notes = state.notes.slice();
      if (notes.indexOf(note) < 0) {
        notes.push(note);
      }
      return Object.assign({}, state, {notes, isPlaying: true });

    case types.NOTE_OFF:
      if (notes.indexOf(note) > -1) {
        notes.splice(notes.indexOf(note),1);
      }
      isPlaying = !!notes.length;
      return Object.assign({}, state, {notes, isPlaying } );

    case types.STOP_PLAYING:
      return Object.assign({}, state, {isPlaying: false, notes: []});


    case types.PANEL_CHANGED:{
      let type = action.panelType;
      let newState = Object.assign({}, state);
      newState[type] = action.value;
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
