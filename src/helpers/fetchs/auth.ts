import {axiosInstance} from "../axios/axiosInstance";
import {getRefreshToken} from "../localStorage/authStorage";
import {store} from "../../redux/store/store";
import {login, logout} from "../../redux/actions/auth.action";


export interface TUserLogin {
    email: string;
    password: string;
}

export interface TUserRegister {

    name: string;
    email: string;
    password: string;
}

export const fetchLogin = async (user: TUserLogin) => {
    const axios = axiosInstance;
    try {
        const res = await axios.post("/login", user);
        store.dispatch(login(res.data.access_token, res.data.refresh_token) as any);

        return res.data;
    } catch (err: any) {
        throw err.response.data;
    }
};


export const fetchRegister = async (user: TUserRegister) => {
    const axios = axiosInstance;
    try {
        const res = await axios.post("/register", user);
        store.dispatch(login(res.data.access_token, res.data.refresh_token) as any);

        return res.data;
    } catch (err: any) {
        throw err.response.data;
    }
};

export const fetchProfile = async (token:string) => {
    const axios = axiosInstance;
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const res = await axios.get("/profile", config);
        return res.data;
    } catch (err: any) {
        throw err.response.data;
    }
};

export const fetchRefresh = async () => {
    const axios = axiosInstance;
    try {
        const res = await axios.post("/renew", { refresh_token : getRefreshToken()});
        store.dispatch(login(res.data.access_token, res.data.refresh_token) as any);
        return res.data;
    } catch (err: any) {
        store.dispatch(logout() as any);
        throw err.response.data;
    }
};
