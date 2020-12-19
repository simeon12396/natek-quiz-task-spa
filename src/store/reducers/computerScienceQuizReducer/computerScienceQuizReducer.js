import { SET_CS_BOOLEAN_QUESTIONS, SET_CS_MULTIPLE_CHOICES_QUESTIONS, SET_CS_RESULT, SET_RESTART_CS_QUIZ } from "../../types/computerScienceQuizTypes/computerScienceQuizTypes";

const initialState = {
  booleanQuestions: [],
  multipleChoicesQuestions: [],
  result: [],
};

const computerScienceQuizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CS_BOOLEAN_QUESTIONS:
      return {
        ...state,
        booleanQuestions: payload,
      };
    case SET_CS_MULTIPLE_CHOICES_QUESTIONS:
      return {
        ...state,
        multipleChoicesQuestions: payload,
      };
    case SET_CS_RESULT:
      return {
        ...state,
        result: payload,
      };
    case SET_RESTART_CS_QUIZ:
      return {
        ...state,
        result: [],
      };
    default:
      return state;
  }
};

export { computerScienceQuizReducer };
