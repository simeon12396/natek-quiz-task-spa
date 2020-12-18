import { makeHttpService } from "../../../services/httpServices";
import { SET_RESTART_SPORTS_QUIZ, SET_SPORTS_BOOLEAN_QUESTIONS, SET_SPORTS_MULTIPLE_CHOICES_QUESTIONS, SET_SPORTS_RESULT } from "../../types/sportsQuizTypes/sportsQuizTypes";

// SYNC ACTIONS

const setSportsBooleanQuestions = payload => ({
    type: SET_SPORTS_BOOLEAN_QUESTIONS,
    payload,
});

const setSportsMultipleChoicesQuestions = payload => ({
    type: SET_SPORTS_MULTIPLE_CHOICES_QUESTIONS,
    payload,
});

const setSportsResult = payload => ({
    type: SET_SPORTS_RESULT,
    payload,
});

const setRestartSportsQuiz = () => ({
    type: SET_RESTART_SPORTS_QUIZ,
});

//  ASYNC ACTIONS 

const fetchSportsBooleanQuestions = () => {
    return async dispatch => {
        const sportsBooleanQuestions = await makeHttpService("get", "data/musicQuizBoolean.json");
        dispatch(setSportsBooleanQuestions(sportsBooleanQuestions))
    };
};

const fetchSportsMultipleChoicesQuestions = () => {
    return async dispatch => {
        const sportsMultipleChoicesQuestions = await makeHttpService("get", "data/musicQuizMultiple.json");
        dispatch(setSportsMultipleChoicesQuestions(sportsMultipleChoicesQuestions))
    };
};

export { setSportsResult, setSportsBooleanQuestions, setSportsMultipleChoicesQuestions, fetchSportsBooleanQuestions, fetchSportsMultipleChoicesQuestions, setRestartSportsQuiz };