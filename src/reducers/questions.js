import {
  RECEIVE_QUESTIONS,
  SAVE_ANSWER,
  SAVE_QUESTION,
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_ANSWER:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
