import { saveUser } from '../utils/api';
import { setAuthUser } from './authUser';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CREATE_USER = 'CREATE_USER';
export const SAVE_ANSWER = 'SAVE_ANSWER';

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

export function saveUserAnswer(users) {
  return {
    type: SAVE_ANSWER,
    users,
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
