import { SET_MUSIC_BOOLEAN_QUESTIONS, SET_MUSIC_MULTIPLE_CHOICES_QUESTIONS, SET_MUSIC_RESULT, SET_RESTART_MUSIC_QUIZ } from "../../types/musicQuizTypes/musicQuizTypes";

const initialState = {
  booleanQuestions: [],
  multipleChoicesQuestions: [],
  result: [],
};

const musicQuizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MUSIC_BOOLEAN_QUESTIONS:
      return {
        ...state,
        booleanQuestions: payload,
      };
    case SET_MUSIC_MULTIPLE_CHOICES_QUESTIONS:
      return {
        ...state,
        multipleChoicesQuestions: payload,
      };
    case SET_MUSIC_RESULT:
      return {
        ...state,
        result: payload,
      };
    case SET_RESTART_MUSIC_QUIZ:
      return {
        ...state,
        result: [],
      };
    default:
      return state;
  }
};

export { musicQuizReducer };
