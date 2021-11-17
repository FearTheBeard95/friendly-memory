import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUser from './authUser';
import questions from './questions';
import users from './users';
import 'semantic-ui-css/semantic.min.css';

export default combineReducers({
  questions,
  users,
  authUser,
  loadingBar: loadingBarReducer,
});
