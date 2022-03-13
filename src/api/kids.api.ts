import { APIMiddleware } from "../common/utils";
import { apiUrls } from "../common/constants";

const { KID_URL } = apiUrls;

export function kidsFromUser() {
    const url = `${KID_URL}/users`;
    return APIMiddleware.get<any>(url);
}

export function addKid(kidDTO: any) {
    const url = `${KID_URL}/`;
    return APIMiddleware.post<any>(url, { data: kidDTO });
}