import { combineReducers } from "redux";
import modal from '../../components/admin/modal/reducers/'
import session from '../../components/session/reducers'

export default combineReducers({
  modal,
  session
});
