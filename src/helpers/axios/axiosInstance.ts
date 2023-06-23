import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {getToken} from "../localStorage/authStorage";
import {fetchRefresh} from "../fetchs/auth";


const getAuthHeaders = () => {
    console.log(import.meta.env.VITE_API_BASE_URL);
    return {
        Authorization: `${getToken()}`
    };
};

export const axiosInstance = axios.create({
    baseURL:    import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    httpsAgent: {
        rejectUnauthorized: false
    }
});

type NullableAxiosHeaderValue = string | null;

type AxiosHeaders = Partial<Record<string, NullableAxiosHeaderValue>>;

export const get = async <T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D> & { headers?: AxiosHeaders }
): Promise<AxiosResponse<T, any>> => {
    try {
        const conf: AxiosRequestConfig<D> = config ?? {};

        conf.headers = { ...(conf.headers ?? {}), ...getAuthHeaders() };
        const res = await axiosInstance.get<T>(url, conf);
        return res;
    } catch (err: any) {
        if (err.response?.status === 401) {
            await fetchRefresh();
            return get<T>(url, config);
        }
        throw err;
    }
};

export const post = async <T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<AxiosResponse<T, any>> =>{
    try{
        const conf = config??{};
        conf.headers = { ...conf.headers, ...getAuthHeaders() };
        const res =await axiosInstance.post<T>(url,data,conf);
        return res;
    } catch (err: any) {
        if (err.response.status === 401) {
            await fetchRefresh();
            return post<T>(url, data, config);
        }
        throw err;
    }
};
