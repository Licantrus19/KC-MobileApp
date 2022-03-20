import { APIMiddleware } from "../common/utils/";
import { apiUrls } from "../common/constants";

const { USER_URL } = apiUrls;

export function registerUser(userDTO: any) {
    const url = `${USER_URL}/register`;
    return APIMiddleware.post<any>(url, { data: userDTO, noAuthToken: true });
}

export function getUserInformation() {
    const url = `${USER_URL}`;
    return APIMiddleware.get<any>(url);
}

export async function getUserInformationAsync() {
    const url = `${USER_URL}`;
    return await APIMiddleware.get<any>(url);
}