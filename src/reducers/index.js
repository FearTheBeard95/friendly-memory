import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUser from './authUser';
import questions from './questions';
import users from './users';

export default combineReducers({
  questions,
  users,
  authUser,
  loadingBar: loadingBarReducer,
});
