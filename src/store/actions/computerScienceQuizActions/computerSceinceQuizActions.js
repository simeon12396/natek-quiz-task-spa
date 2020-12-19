import { makeHttpService } from "../../../services/httpServices";
import { SET_CS_BOOLEAN_QUESTIONS, SET_CS_MULTIPLE_CHOICES_QUESTIONS, SET_CS_RESULT, SET_RESTART_CS_QUIZ } from "../../types/computerScienceQuizTypes/computerScienceQuizTypes";

// SYNC ACTIONS

const setCSBooleanQuestions = (payload) => ({
  type: SET_CS_BOOLEAN_QUESTIONS,
  payload,
});

const setCSMultipleChoicesQuestions = (payload) => ({
  type: SET_CS_MULTIPLE_CHOICES_QUESTIONS,
  payload,
});

const setCSResult = (payload) => ({
  type: SET_CS_RESULT,
  payload,
});

const setRestartCSQuiz = () => ({
  type: SET_RESTART_CS_QUIZ,
});

//  ASYNC ACTIONS

const fetchCSBooleanQuestions = () => {
  return async (dispatch) => {
    const computerScienceBooleanQuestions = await makeHttpService("get", "data/csQuizBoolean.json");
    dispatch(setCSBooleanQuestions(computerScienceBooleanQuestions));
  };
};

const fetchCSMultipleChoicesQuestions = () => {
  return async (dispatch) => {
    const computerScienceMultipleChoicesQuestions = await makeHttpService("get", "data/csQuizMultiple.json");
    dispatch(setCSMultipleChoicesQuestions(computerScienceMultipleChoicesQuestions));
  };
};

export { setRestartCSQuiz, setCSResult, setCSMultipleChoicesQuestions, setCSBooleanQuestions, fetchCSBooleanQuestions, fetchCSMultipleChoicesQuestions };
