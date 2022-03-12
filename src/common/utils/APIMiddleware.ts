import axios, { ResponseType } from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { storageKeys } from "../constants";

import { Buffer } from "buffer"

interface IRequestConfig {
    params?: any;
    data?: any;
    responseType?: ResponseType;
    noAuthToken?: boolean;
    authLogin?: boolean;
}

export const APIMiddleware = {

    async get<T = any>(url: string, config: IRequestConfig = {}) {
        const { params, responseType } = config;
        const headers = await getHeaders();
        return axios.get<T>(url, { params, headers, responseType });
    },

    async getNoAuth<T = any>(url: string, config: IRequestConfig = {}) {
        const { params, responseType } = config;
        const headers = await getHeaders();
        delete headers['Authorization'];
        return axios.get<T>(url, { params, headers, responseType });
    },

    async post<T = any>(url: string, config: IRequestConfig = { noAuthToken: false, authLogin: false, responseType: 'json' }) {

        const { params, responseType, data, noAuthToken, authLogin } = config;
        const headers = authLogin ? await getLoginHeaders(data) : await getHeaders()
        if (noAuthToken) delete headers['Authorization'];
        return axios.post<T>(url, data, { params, headers, responseType });
    },

    async put<T = any>(url: string, config: IRequestConfig = {}) {
        const { params, responseType, data } = config;
        const headers = await getHeaders();
        return axios.put<T>(url, data, { params, headers, responseType });
    },

}

async function getHeaders(): Promise<any> {
    const token = await AsyncStorage.getItem(storageKeys.AUTH_TOKEN);
    console.log('token: ', token);
    const headers = {
        Authorization: 'Bearer ' + token,
    }
    return headers;
}

async function getLoginHeaders(data: any): Promise<any> {
    const basicToken = Buffer.from(data.username + ":" + data.password).toString('base64');
    const headers = {
        Authorization: 'Basic ' + basicToken,
    }
    return headers;
}