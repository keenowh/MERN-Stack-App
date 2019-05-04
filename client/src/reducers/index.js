import { combineReducers } from 'redux';
import itemReducer from './ItemReducer';
import errorReducer from './errorReducers';
import authReducer from './authReducer'


export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer
})