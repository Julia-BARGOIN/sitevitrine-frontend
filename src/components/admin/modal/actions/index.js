import actionTypes from './action-types'

/**
 * Open modal
 * @param {Object} open
 */
export const openModal = open => ({
  type: actionTypes.OPEN_MODAL,
  open
});
