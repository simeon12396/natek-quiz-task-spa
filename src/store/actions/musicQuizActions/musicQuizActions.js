import { makeHttpService } from "../../../services/httpServices";
import { SET_MUSIC_BOOLEAN_QUESTIONS, SET_MUSIC_MULTIPLE_CHOICES_QUESTIONS, SET_MUSIC_RESULT, SET_RESTART_MUSIC_QUIZ } from "../../types/musicQuizTypes/musicQuizTypes";

// SYNC ACTIONS

const setMusicBooleanQuestions = payload => ({
    type: SET_MUSIC_BOOLEAN_QUESTIONS,
    payload,
});

const setMusicMultipleChoicesQuestions = payload => ({
    type: SET_MUSIC_MULTIPLE_CHOICES_QUESTIONS,
    payload,
});

const setMusicResult = payload => ({
    type: SET_MUSIC_RESULT,
    payload,
});

const setRestartMusicQuiz = () => ({
    type: SET_RESTART_MUSIC_QUIZ,
});

//  ASYNC ACTIONS 

const fetchMusicBooleanQuestions = () => {
    return async dispatch => {
        const booleanQuestions = await makeHttpService("get", "data/musicQuizBoolean.json");
        dispatch(setMusicBooleanQuestions(booleanQuestions))
    };
};

const fetchMusicMultipleChoicesQuestions = () => {
    return async dispatch => {
        const multipleChoicesQuestions = await makeHttpService("get", "data/musicQuizMultiple.json");
        dispatch(setMusicMultipleChoicesQuestions(multipleChoicesQuestions))
    };
};

export { setMusicBooleanQuestions, setMusicMultipleChoicesQuestions, setMusicResult, setRestartMusicQuiz, fetchMusicBooleanQuestions, fetchMusicMultipleChoicesQuestions };