import * as types from '../constants/actionTypes';

export const noteOn = (note, octave) => {
  return {
    type: types.NOTE_ON,
    note: note,
    octave: octave
  };
};

export const noteOff = (note, octave) => {
  return {
    type: types.NOTE_OFF,
    note: note,
    octave: octave
  };
};

export const panelChanged = (panelType, value) => {
  return {
    type: types.PANEL_CHANGED,
    panelType,
    value
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
