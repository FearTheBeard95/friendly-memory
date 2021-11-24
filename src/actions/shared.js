import { getInitialData, saveQuestion } from '../utils/api';
import {
  receiveQuestions,
  saveQuestionAnswer,
  saveQuestionData,
} from './questions';
import { receiveUsers, saveUserAnswer, saveUserQuestion } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveAnswer } from '../utils/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveAnswer(data) {
  return (dispatch) => {
    return saveAnswer(data).then(({ users, questions }) => {
      dispatch(saveQuestionAnswer(questions));
      dispatch(saveUserAnswer(users));
    });
  };
}

export function handleSaveQuestion(data) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(data).then(({ users, questions }) => {
      dispatch(saveUserQuestion(users));
      dispatch(saveQuestionData(questions));
      dispatch(hideLoading());
    });
  };
}
