export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionData(questions) {
  return {
    type: SAVE_QUESTION,
    questions,
  };
}

export function saveQuestionAnswer(questions) {
  return {
    type: SAVE_ANSWER,
    questions,
  };
}
