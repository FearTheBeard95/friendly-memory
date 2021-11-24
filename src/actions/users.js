import { saveUser, saveAnswer } from '../utils/api';
import { setAuthUser } from './authUser';
import { saveQuestionAnswer } from './questions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CREATE_USER = 'CREATE_USER';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function createUser(users) {
  return {
    type: CREATE_USER,
    users,
  };
}

export function saveUserQuestion({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
}

function saveUserAnswer(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer(authUser, qid, answer) {
  return (dispatch) => {
    dispatch(saveUserAnswer(authUser, qid, answer));
    dispatch(saveQuestionAnswer(authUser, qid, answer));
    return saveAnswer({
      authedUser: authUser,
      qid,
      answer,
    }).then(() => {});
  };
}

export function handleCreateUser(data) {
  return (dispatch) => {
    return saveUser(data)
      .then((users) => {
        dispatch(createUser(users));
        dispatch(setAuthUser(data.id));
      })
      .catch((e) => {
        console.warn('Error in handleCreateUser', e);
      });
  };
}
