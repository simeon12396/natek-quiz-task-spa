import { makeHttpService } from "../../../services/httpServices";
import { SET_SPORTS_BOOLEAN_QUESTIONS, SET_SPORTS_MULTIPLE_CHOICES_QUESTIONS } from "../../types/sportsQuizTypes/sportsQuizTypes";

// SYNC ACTIONS

const setSportsBooleanQuestions = payload => ({
    type: SET_SPORTS_BOOLEAN_QUESTIONS,
    payload,
});

const setSportsMultipleChoicesQuestions = payload => ({
    type: SET_SPORTS_MULTIPLE_CHOICES_QUESTIONS,
    payload,
});

//  ASYNC ACTIONS 

const fetchSportsBooleanQuestions = () => {
    return async dispatch => {
        const sportsBooleanQuestions = await makeHttpService("get", "amount=10&category=12&difficulty=medium&type=boolean");
        dispatch(setSportsBooleanQuestions(sportsBooleanQuestions))
    };
};

const fetchSportsMultipleChoicesQuestions = () => {
    return async dispatch => {
        const sportsMultipleChoicesQuestions = await makeHttpService("get", "amount=10&category=21&difficulty=medium&type=multiple");
        dispatch(setSportsMultipleChoicesQuestions(sportsMultipleChoicesQuestions))
    };
};

export { setSportsBooleanQuestions, setSportsMultipleChoicesQuestions, fetchSportsBooleanQuestions, fetchSportsMultipleChoicesQuestions };