import { combineReducers } from "redux";
import ArticleReducer from "./articleReducer";

const reducers = combineReducers({
    article : ArticleReducer,
});

export default reducers;

export type RootStates = ReturnType<typeof reducers>