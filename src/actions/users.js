import { saveUser } from '../utils/api';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CREATE_USER = 'CREATE_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function createUser(username, fullName) {
  return {
    type: CREATE_USER,
    username,
    fullName,
  };
}

export function handleCreateUser(username, fullName) {
  return (dispatch) => {
    dispatch(createUser(username, fullName));
    return saveUser(username, fullName).catch((e) => {
      console.warn('Error in handleCreateUser', e);
    });
  };
}
