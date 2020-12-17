import { makeHttpService } from "../../../services/httpServices";
import { SET_CS_BOOLEAN_QUESTIONS, SET_CS_MULTIPLE_CHOICES_QUESTIONS } from "../../types/computerScienceQuizTypes/computerScienceQuizTypes";

// SYNC ACTIONS

const setCSBooleanQuestions = payload => ({
    type: SET_CS_BOOLEAN_QUESTIONS,
    payload,
});

const setCSMultipleChoicesQuestions = payload => ({
    type: SET_CS_MULTIPLE_CHOICES_QUESTIONS,
    payload,
});

//  ASYNC ACTIONS 

const fetchCSBooleanQuestions = () => {
    return async dispatch => {
        const computerScienceBooleanQuestions = await makeHttpService("get", "amount=10&category=18&difficulty=medium&type=boolean");
        dispatch(setCSBooleanQuestions(computerScienceBooleanQuestions))
    };
};

const fetchCSMultipleChoicesQuestions = () => {
    return async dispatch => {
        const computerScienceMultipleChoicesQuestions = await makeHttpService("get", "amount=10&category=18&difficulty=medium&type=multiple");
        dispatch(setCSMultipleChoicesQuestions(computerScienceMultipleChoicesQuestions))
    };
};

export { setCSMultipleChoicesQuestions, setCSBooleanQuestions, fetchCSBooleanQuestions, fetchCSMultipleChoicesQuestions }