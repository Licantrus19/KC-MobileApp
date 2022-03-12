import { APIMiddleware } from "../common/utils";
import { apiUrls } from "../common/constants";

const { KID_URL } = apiUrls;

export function kidsFromUser() {
    const url = `${KID_URL}/users`;
    return APIMiddleware.get<any>(url);
}