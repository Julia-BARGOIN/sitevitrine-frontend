import actionTypes from "./action-types";

/**
 * Loged
 */
export const loged = token => ({
  type: actionTypes.LOGED,
  token
});

/**
 * Logout
 */
export const logout = () => ({
  type: actionTypes.LOGOUT
});
