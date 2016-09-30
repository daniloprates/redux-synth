import * as types from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from '../constants/initialState';

export default function synthReducer(state = initialState.synth, action) {
  let notes = state.notes.slice();
  let isPlaying = action.isPlaying;

  switch (action.type) {
    case types.NOTE_CHANGED:
      return Object.assign({}, state, {note: action.note});

    case types.NOTE_ON:
      if (notes.indexOf(action.note) < 0) {
        notes.push(action.note);
      }
      return Object.assign({}, state,
        {
          notes,
          isPlaying: true
        }
      );

    case types.NOTE_OFF:
      if (notes.indexOf(action.note) > -1) {
        notes.splice(notes.indexOf(action.note),1);
      }
      isPlaying = !!notes.length;
      return Object.assign({}, state,
        {
          notes,
          isPlaying
        }
      );

    case types.OCTAVE_CHANGED:
      return Object.assign({}, state, {octave: action.octave, isPlaying: false});

    case types.AMPLITUDE_CHANGE:
      return Object.assign({}, state, {amplitude: action.amplitude});

    default:
      return state;
  }
}
