import { observable, action, decorate } from "mobx";
import { ISessionStore } from "./interfaces";
import { User } from "../common/types";

class SessionStore implements ISessionStore {
    token: any;
    user: User | any;
    loading: boolean = false;
    chekingSession: boolean = true;
    error: any = null;

    login = async (username: string, password: string) => {
        
    }

    checkSession = async () => {
        
    }

    logout = async () => {
        
    }

    setToken = (token: string) => { this.token = token; }
    setUser = (user: any) => { this.user = user; }
    setError = (error: any) => { this.error = error; }
    cleanError = () => { this.error = null; }
}

decorate(SessionStore, {
    token: observable,
    user: observable,
    error: observable,
    loading: observable,
    chekingSession: observable,
    setToken: action,
    setUser: action,
    cleanError: action,
    login: action,
    setError: action,
    logout: action,
    checkSession: action
})

export default new SessionStore()