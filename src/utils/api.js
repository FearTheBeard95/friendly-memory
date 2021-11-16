import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser,
} from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(data) {
  return _saveQuestion(data);
}

export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data);
}

export function saveUser(data) {
  return _saveUser(data);
}
