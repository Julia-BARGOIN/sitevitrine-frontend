import { fromJS } from "immutable";
import actionTypes from "./action-types";
import Cookies from "universal-cookie";

const initialState = {
  isLoged: false
};

const loged = state => {
  const cookies = new Cookies();
  cookies.set("isLoged", "true");

  return fromJS(state)
    .setIn(["isLoged"], true)
    .toJS();
};

const logout = state => {
  const cookies = new Cookies();
  cookies.set("isLoged", "true");
  fromJS(state)
    .setIn(["isLoged"], false)
    .toJS();
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGED:
      return loged(state);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};
