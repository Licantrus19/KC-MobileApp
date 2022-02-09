import { APIMiddleware } from "../common/utils/";
import { apiUrls } from "../common/constants";
import { Game } from "../common/types";

const { GAMES_URL } = apiUrls;

export function getMyGames() {
    const url = `${GAMES_URL}`;
    return APIMiddleware.get<Game[]>(url);
}

export function createGame(game: any) {
    const url = `${GAMES_URL}/create`;
    return APIMiddleware.post(url,{ data: game });
}

/* export function getProfile() {
    const url = `${USER_URL}/profile/data`;
    return APIMiddleware.get(url);
} */