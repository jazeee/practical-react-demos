import {combineReducers} from "redux";
import {userState} from "./github/state/user";

export const reducers = combineReducers({
	userState,
});
