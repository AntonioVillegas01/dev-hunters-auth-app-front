import {Dispatch} from "redux";
import {types} from "../types";

export const setUserAction = (userPayload:any) => ({
    type: types.set_user,
    payload: userPayload

})

export const clearUserAction = () => (dispatch: Dispatch) => {
    dispatch({
        type: types.clear_user,
    });
};
