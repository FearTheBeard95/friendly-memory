import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthUser } from './authUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthUser('tylermcginnis'));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
