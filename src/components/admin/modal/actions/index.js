import actionTypes from "./action-types";

/**
 * Open modal
 * @param {Object} open
 */
export const openModal = (open, form, id) => ({
  type: actionTypes.OPEN_MODAL,
  open,
  form: form || "login",
  id
});
