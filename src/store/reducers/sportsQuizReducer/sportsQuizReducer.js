import { SET_SPORTS_BOOLEAN_QUESTIONS, SET_SPORTS_MULTIPLE_CHOICES_QUESTIONS } from "../../types/sportsQuizTypes/sportsQuizTypes";

const initialState = {
    booleanQuestions: [],
    multipleChoicesQuestions: []
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
        default: 
          return state;
    }
};

export { sportsQuizReducer }
