import { fromJS } from "immutable";
import actionTypes from "./action-types";
import Cookies from "universal-cookie";

const initialState = {
  isLoged: false
};

const loged = (state, action) => {
  const cookies = new Cookies();

  cookies.set("isLoged", "true");
  cookies.set("token", action.token);

  return fromJS(state)
    .setIn(["isLoged"], true)
    .toJS();
};

const logout = state => {
  const cookies = new Cookies();

  cookies.set("isLoged", "false");
  cookies.remove("token");

  fromJS(state)
    .setIn(["isLoged"], false)
    .toJS();
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGED:
      return loged(state, action);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};
