import { RECEIVE_USERS, CREATE_USER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_USER:
      console.log(action.username);
      return {
        ...state,
        [action.username]: {
          id: action.username,
          name: action.fullName,
          avatarURL: null,
          answers: {},
          questions: [],
        },
      };
    default:
      return state;
  }
}
