import { combineReducers } from "redux";
import {todoReducer} from "./reducers/todo"
import { userReducer } from "./reducers/user";

export const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer
});

export type RootStateType = ReturnType<typeof rootReducer>;