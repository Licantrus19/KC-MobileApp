import { observable, action, decorate } from "mobx";
import { ISessionStore } from "./interfaces";
import { User } from "../common/types";
import users from "./data/users.json";
import { cleanTokenData, getTokenData, setTokenData } from "../common/storage";
import { login } from "../api/auth.api";

class SessionStore implements ISessionStore {
    token: any;
    user: User | any;
    loading: boolean = false;
    chekingSession: boolean = true;
    error: any = null;

    loginUser = async (email: string, password: string) => {
        this.loading = true;
        login(email, password).then(async (result: any) => {
            if (result.data.token != null) {
                this.token = result.data.token;
                await setTokenData(JSON.stringify(result.data.token));
            } else {
                this.error = {
                    message: "Usuario o contraseña incorrecta"
                }
            }
            this.loading = false;
        });
    }

    checkSession = async () => {
        this.chekingSession = true;
        setTimeout(async () => {
            const token = await getTokenData();
            if (token) {
                this.token = token;
            }
            this.chekingSession = false;
        }, 1000)
    }

    logout = async () => {
        this.loading = true;
        setTimeout(async () => {
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
    loginUser: action,
    setError: action,
    logout: action,
    checkSession: action
})

export default new SessionStore()