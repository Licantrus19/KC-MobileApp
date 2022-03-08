import { observable, action, decorate } from "mobx";
import { ISessionStore } from "./interfaces";
import { User } from "../common/types";
import users from "./data/users.json";
import { cleanTokenData, getTokenData, setTokenData } from "../common/storage";

class SessionStore implements ISessionStore {
    token: any;
    user: User | any;
    loading: boolean = false;
    chekingSession: boolean = true;
    error: any = null;

    login = async (email: string, password: string) => {
        this.loading = true;
        setTimeout(async() => {
            const result = users.filter((u) => { return u.email === email && u.passsword === password })
            if (result.length > 0) {
                this.token = result[0];
                await setTokenData(JSON.stringify(result[0]));
            } else {
                this.error = {
                    message: "Usuario o contraseña incorrecta"
                }
            }
            this.loading = false;
        }, 1000)
    }

    checkSession = async () => {
        this.chekingSession = true;
        setTimeout(async() => {
            const token = await getTokenData();
            if (token) {
                this.token = token;
            }
            this.chekingSession = false;
        }, 1000)
    }

    logout = async () => {
        this.loading = true;
        setTimeout(async() => {
            await cleanTokenData();
            this.loading = false;
        }, 1000)
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