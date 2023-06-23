import {getRefreshToken, getToken} from "../../helpers/localStorage/authStorage";
import {types} from "../types";


const accessToken = getToken();
const refreshToken = getRefreshToken();

const ini =
    accessToken && refreshToken
        ? {
            isLoggedIn: true,
            access: {
                accessToken,
                refreshToken,
            },
        }
        : { isLoggedIn: false, access: null };

// eslint-disable-next-line default-param-last
export const authReducer = (state = ini, action: any) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                isLoggedIn: true,
                access: {
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken,
                },
            };
        case types.logout:
            return {
                isLoggedIn: false,
                access: null,
            };

        default:
            return state;
    }
};
