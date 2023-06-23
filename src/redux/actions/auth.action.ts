import {clearLogout, setRefreshToken, setToken} from "../../helpers/localStorage/authStorage";
import { Dispatch } from "redux";
import {types} from "../types";

export const login = (accessToken: any, refreshToken:any) => (dispatch: Dispatch) => {
    setToken(accessToken);
    setRefreshToken(refreshToken);

    dispatch({
        type: types.login,
        payload: {
            accessToken,
            refreshToken
        },
    });
};

export const logout = () => (dispatch: Dispatch) => {
    clearLogout();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    dispatch({
        type: types.logout,
    });
};
