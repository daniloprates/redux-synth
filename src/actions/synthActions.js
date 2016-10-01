import * as types from '../constants/actionTypes';

export const noteOn = (note) => {
  return {
    type: types.NOTE_ON,
    note: note
  };
};

export const noteOff = (note) => {
  return {
    type: types.NOTE_OFF,
    note: note
  };
};

export const noteChanged = (note) => {
  return {
    type: types.NOTE_CHANGED,
    note
  };
};

export const octaveChanged = (octave) => {
  return {
    type: types.OCTAVE_CHANGED,
    octave
  };
};
export const octavePrev = () => {
  return {
    type: types.OCTAVE_PREV
  };
};
export const octaveNext = () => {
  return {
    type: types.OCTAVE_NEXT
  };
};



export const amplitudeChange = (amplitude) => {
  return {
    type: types.AMPLITUDE_CHANGE,
    amplitude
  };
};


export const stopPlaying = () => {
  return {
    type: types.STOP_PLAYING
  };
};
