import { expect } from 'chai';
import { createStore } from 'redux';

import * as ActionTypes from '../constants/actionTypes';
import rootReducer from '../reducers';

import initialState from '../constants/initialState';
import { notes } from '../constants/notes';
const { note, octave} = initialState.synth;

describe('Store', () => {

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.NOTE_CHANGED, note, octave },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      octave,
      note,
      noteObj: notes[4][0]
    };

    expect(actual.synth).to.deep.equal(expected);
  });

});
