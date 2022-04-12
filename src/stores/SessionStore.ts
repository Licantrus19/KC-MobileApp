import { observable, action, decorate } from "mobx";
import { ISessionStore } from "./interfaces";
import { User } from "../common/types";
import { cleanProfileImageData, cleanTokenData, getTokenData, setProfileImageData, setTokenData } from "../common/storage";
import { login } from "../api/auth.api";
import { getUserInformation } from "../api/user.api";

class SessionStore implements ISessionStore {
    token: any;
    user: User | any;
    loading: boolean = false;
    chekingSession: boolean = true;
    error: any = null;
    profileImage: string = '';

    loginUser = async (email: string, password: string) => {
        this.loading = true;
        setTimeout(async () => {
            login(email, password)
                .then(async (result: any) => {
                    if (result.data.token != null) {
                        this.setToken(result.data.token);
                        this.setProfileImage(result.data.profileImage);
                        setTokenData(result.data.token);
                        setProfileImageData(result.data.profileImage);
                    } else {
                        this.error = {
                            message: 'Usuario o contraseña incorrectos'
                        }
                    }
                    this.loading = false;
                }).catch(() => {
                    this.error = {
                        message: 'Usuario o contraseña incorrectos'
                    }
                    this.loading = false;
                })
        }, 3000)

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
            this.setToken('');
            cleanTokenData();
            cleanProfileImageData();
            this.token = null;
            this.loading = false;
            console.log('login out');
        }, 2000)
    }

    setToken = (token: string) => { this.token = token; }
    setProfileImage = (profileImage: string) => { this.profileImage = profileImage; }
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