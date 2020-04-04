import { fromJS } from "immutable";
import actionTypes from "../actions/action-types";

const initialState = {
  open: false,
  form: "login",
  id: ""
};

const openModal = (state, action) => {
  const { open, form, id } = action;

  return fromJS(state)
    .setIn(["open"], open)
    .setIn(["form"], form)
    .setIn(["id"], id)
    .toJS();
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return openModal(state, action);
    default:
      return state;
  }
};
