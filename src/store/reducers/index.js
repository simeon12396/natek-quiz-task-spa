import { combineReducers } from "redux";
import { computerScienceQuizReducer } from "./computerScienceQuizReducer/computerScienceQuizReducer";
import { musicQuizReducer } from "./musicQuizReducer/musicQuizReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["computerScienceQuizQuestions", "musicQuizQuestions"],
};

const rootReducer = combineReducers({
  computerScienceQuizQuestions: computerScienceQuizReducer,
  musicQuizQuestions: musicQuizReducer,
});

export default persistReducer(persistConfig, rootReducer);
