import { notes } from '../constants/notes';

export const getNote = (e, state) => {
  let noteIndex = e.target.getAttribute('data-note');
  return notes[state.octave][noteIndex];
};
