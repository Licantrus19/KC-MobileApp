import { APIMiddleware } from "../common/utils/";
import { apiUrls } from "../common/constants";

const { USER_URL } = apiUrls;

export function registerUser(userDTO: any) {
    const url = `${USER_URL}/register`;
    return APIMiddleware.post<any>(url, { data: userDTO, noAuthToken: true });
}