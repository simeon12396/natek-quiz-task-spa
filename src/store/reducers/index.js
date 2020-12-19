import { combineReducers } from "redux";
import { computerScienceQuizReducer } from "./computerScienceQuizReducer/computerScienceQuizReducer";
import { musicQuizReducer } from "./musicQuizReducer/musicQuizReducer";

const rootReducer = combineReducers({
    computerScienceQuizQuestions: computerScienceQuizReducer,
    musicQuizQuestions: musicQuizReducer
});

export { rootReducer }