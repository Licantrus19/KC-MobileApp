import { User } from "../../common/types";

export interface ISessionStore {
    token: string,
    user: User,
    error: any,
    loading: boolean,
    chekingSession: boolean,
    setToken: (token: string) => void,
    setUser: (user: any) => void,
    cleanError: () => void,
    loginUser: (username: string, password: string) => Promise<any>,
    setError: (error: any) => void,
    logout: () => Promise<any>,
    checkSession: () => Promise<any>,
}