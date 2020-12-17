import { combineReducers } from "redux";
import { computerScienceQuizReducer } from "./computerScienceQuizReducer/computerScienceQuizReducer";
import { sportsQuizReducer } from "./sportsQuizReducer/sportsQuizReducer";

const rootReducer = combineReducers({
    computerScienceQuizQuestions: computerScienceQuizReducer,
    sportsQuizQuestions: sportsQuizReducer
});

export { rootReducer }