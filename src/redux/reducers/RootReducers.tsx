import { combineReducers } from "redux";
import {authReducer} from "./auth.reducer";
import {userReducer} from "./user.reducer";

export const RootReducer = combineReducers({
    authReducer,
    userReducer
});
