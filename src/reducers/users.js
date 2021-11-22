import { RECEIVE_USERS, CREATE_USER, SAVE_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_USER:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
