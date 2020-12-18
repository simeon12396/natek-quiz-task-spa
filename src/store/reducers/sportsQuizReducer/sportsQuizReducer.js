import { SET_RESTART_SPORTS_QUIZ, SET_SPORTS_BOOLEAN_QUESTIONS, SET_SPORTS_MULTIPLE_CHOICES_QUESTIONS, SET_SPORTS_RESULT } from "../../types/sportsQuizTypes/sportsQuizTypes";

const initialState = {
    booleanQuestions: [],
    multipleChoicesQuestions: [],
    result: []
};

const sportsQuizReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_SPORTS_BOOLEAN_QUESTIONS:
          return {
            ...state,
            booleanQuestions: payload
          };
        case SET_SPORTS_MULTIPLE_CHOICES_QUESTIONS:
            return {
            ...state,
            multipleChoicesQuestions: payload
        };
        case SET_SPORTS_RESULT: 
          return {
            ...state,
            result: payload
        };
        case SET_RESTART_SPORTS_QUIZ: 
          return {
            ...state,
            result: []
        };
        default: 
          return state;
    };
};

export { sportsQuizReducer }
