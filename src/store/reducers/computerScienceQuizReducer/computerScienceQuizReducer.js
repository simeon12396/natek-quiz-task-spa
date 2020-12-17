import { SET_CS_BOOLEAN_QUESTIONS, SET_CS_MULTIPLE_CHOICES_QUESTIONS } from "../../types/computerScienceQuizTypes/computerScienceQuizTypes";

const initialState = {
    computerScienceBooleanQuestions: [],
    computerScienceMultipleChoicesQuestions: []
};

const computerScienceQuizReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CS_BOOLEAN_QUESTIONS:
          return {
            ...state,
            computerScienceBooleanQuestions: payload
          };
        case SET_CS_MULTIPLE_CHOICES_QUESTIONS:
            return {
            ...state,
            computerScienceMultipleChoicesQuestions: payload
        };
        default: 
          return state;
    }
};

export { computerScienceQuizReducer }
