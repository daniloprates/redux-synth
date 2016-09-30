import * as types from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from '../constants/initialState';

export default function synthReducer(state = initialState.synth, action) {
  // let newState;

  switch (action.type) {
    case types.NOTE_CHANGED:
      return Object.assign({}, state, {note: action.note});
    default:
      return state;
  }
}
