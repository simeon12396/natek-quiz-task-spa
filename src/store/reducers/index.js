import { combineReducers } from "redux";
import { computerScienceQuizReducer } from "./computerScienceQuizReducer/computerScienceQuizReducer";

const rootReducer = combineReducers({
    computerScienceQuizQuestions: computerScienceQuizReducer
});

export { rootReducer }