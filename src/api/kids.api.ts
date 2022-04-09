import { APIMiddleware } from "../common/utils";
import { apiUrls } from "../common/constants";

const { KID_URL } = apiUrls;

export function kidsFromUser() {
    const url = `${KID_URL}/users`;
    return APIMiddleware.get<any>(url);
}

export function kidsWithQuestionnairesCompletedFromUser() {
    const url = `${KID_URL}/questionnaires-completed`;
    return APIMiddleware.get<any>(url);
}

export function questionnaireFromKid(kidId: string) {
    const url = `${KID_URL}/questionnaire/${kidId}`;
    return APIMiddleware.get<any>(url);
}

export function completeQuestionnaire(kidId: string, body: any) {
    const url = `${KID_URL}/evaluation/${kidId}`;
    return APIMiddleware.post<any>(url, { data: body });
}

export function addKid(kidDTO: any) {
    const url = `${KID_URL}/`;
    return APIMiddleware.post<any>(url, { data: kidDTO });
}