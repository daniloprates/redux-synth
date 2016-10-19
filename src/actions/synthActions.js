import * as types from '../constants/actionTypes';

export const noteOn = (note, velocity, channel) => {
  return {
    type: types.NOTE_ON,
    note,
    velocity,
    channel
  };
};

export const noteOff = (note, velocity, channel) => {
  return {
    type: types.NOTE_OFF,
    note,
    velocity,
    channel
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















