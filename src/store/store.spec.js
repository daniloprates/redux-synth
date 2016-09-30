import { expect } from 'chai';
import { createStore } from 'redux';

import * as ActionTypes from '../constants/actionTypes';
import rootReducer from '../reducers';

import initialState from '../constants/initialState';
const { note } = initialState.synth;

describe('Store', () => {

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.NOTE_ON, note },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = initialState.synth;

    expect(actual.synth).to.deep.equal(expected);
  });

});
