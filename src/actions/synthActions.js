import * as types from '../constants/actionTypes';
import { notes } from '../constants/notes';
// import { getNote } from '../utils/keyboardHelper';


export const noteOn = (e) => {
  e.preventDefault ? e.preventDefault() : e.returnValue = false;
  return {
    type: types.NOTE_ON
  };
};

export const noteOff = () => {
  return {
    type: types.NOTE_OFF
  };
};

export const noteChanged = (note, octave) => {
  return {
    type: types.NOTE_CHANGED,
    note,
    octave,
    noteObj: notes[octave][note]
  };
};



export const octaveChanged = () => {
  return {
    type: types.OCTAVE_CHANGED
  };
};
