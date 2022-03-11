import { APIMiddleware } from "../common/utils/";
import { apiUrls } from "../common/constants";

const { AUTH_URL, USER_URL } = apiUrls;

export function login(username: string, password: string) {
    const url = `${AUTH_URL}/login`;
    return APIMiddleware.post(url, { data: { username, password }, noAuthToken: false, authLogin: true })
}