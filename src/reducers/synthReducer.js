import * as types from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from '../constants/initialState';

export default function synthReducer(state = initialState.synth, action) {
  let notes = state.notes.slice();
  let isPlaying = action.isPlaying;
  let { octave } = state;

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

    case types.STOP_PLAYING:
      return Object.assign({}, state, {isPlaying: false, notes: []});


    case types.OCTAVE_CHANGED:
      return Object.assign({}, state, {octave: action.octave, isPlaying: false});

    case types.OCTAVE_PREV:
      if (octave == 0) {return state;}
      return Object.assign({}, state, {octave: octave - 1});

    case types.OCTAVE_NEXT:
      if (octave == 10) {return state;}
      return Object.assign({}, state, {octave: octave + 1});

    case types.AMPLITUDE_CHANGE:
      return Object.assign({}, state, {amplitude: action.amplitude});

    default:
      return state;
  }
}
