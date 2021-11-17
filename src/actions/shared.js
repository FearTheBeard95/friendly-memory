import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { setAuthUser } from './authUser';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      //dispatch(setAuthUser('carlos'));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
