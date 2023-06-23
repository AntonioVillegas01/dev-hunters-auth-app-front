import {TProfile} from "../../interfaces/auth.interface";


const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

const setUser = (user: TProfile) => {
    localStorage.setItem("user", JSON.stringify(user));
};

const setToken = (accessToken: string) => {
    localStorage.setItem("access_token", JSON.stringify(accessToken));
};

const getToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        return JSON.parse(accessToken);
    }
    return null;
};

const clearLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
};

const setRefreshToken = (RefreshToken: string) => {
    localStorage.setItem("refresh_token", JSON.stringify(RefreshToken));
};

const getRefreshToken = () => {
    const refreshToken =  localStorage.getItem("refresh_token");
    if (refreshToken) {
        return JSON.parse(refreshToken);
    }
    return null;
};

const getAllAccess = () => {
    const accessToken = getToken();
    const refreshToken = getRefreshToken();
    if (accessToken || refreshToken) {
        return {
            accessToken,
            refreshToken,
        };
    }
    return null;
};

export {
    getUser,
    getToken,
    setUser,
    setToken,
    setRefreshToken,
    getRefreshToken,
    clearLogout,
    getAllAccess,
};
