import { SET_CS_BOOLEAN_QUESTIONS, SET_CS_MULTIPLE_CHOICES_QUESTIONS } from "../../types/computerScienceQuizTypes/computerScienceQuizTypes";

const initialState = {
    booleanQuestions: [],
    multipleChoicesQuestions: []
};

const computerScienceQuizReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CS_BOOLEAN_QUESTIONS:
          return {
            ...state,
            booleanQuestions: payload
          };
        case SET_CS_MULTIPLE_CHOICES_QUESTIONS:
            return {
            ...state,
            multipleChoicesQuestions: payload
        };
        default: 
          return state;
    }
};

export { computerScienceQuizReducer }
