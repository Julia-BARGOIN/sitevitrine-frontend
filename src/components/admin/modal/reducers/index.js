import { fromJS } from 'immutable';
import actionTypes from '../actions/action-types';

const initialState = {
  open: false
};

const openModal = (state, action) => {
  const { open } = action;

  return fromJS(state)
    .setIn (['open'], open)
    .toJS();
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.OPEN_MODAL:
      return openModal(state, action);
    default:
      return state;
  }
}
