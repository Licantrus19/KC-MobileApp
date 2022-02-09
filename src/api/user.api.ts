import { APIMiddleware } from "../common/utils/";
import { apiUrls } from "../common/constants";
import { Game } from "../common/types";

const { USER_URL } = apiUrls;

export function getMyFavouriteGames() {
    const url = `${USER_URL}/favourites/games`;
    return APIMiddleware.get<Game[]>(url);
}

export function addToMyFavourites(gameId: string) {
    const url = `${USER_URL}/favourites/games/add`;
    return APIMiddleware.put(url, { data: { gameId } });
}

export function removeFromMyFavourites(gameId: string) {
    const url = `${USER_URL}/favourites/games/remove`;
    return APIMiddleware.put(url, { data: { gameId } });
}