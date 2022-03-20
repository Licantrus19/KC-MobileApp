import React, { FC, useEffect } from "react";
import { AppNavigation } from '../navigation';
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { ISessionStore } from "../stores/interfaces";
import { Loading } from "../components";

interface ISetupProps {
    sessionStore: ISessionStore
}

const Setup: FC<ISetupProps> = ({ sessionStore }) => {

    useEffect(() => {
        sessionStore.checkSession();
    }, [])

    if (sessionStore?.token) {
        return (
            <>
                <AppNavigation authenticated={true} />
            </>
        )
    }

    if (sessionStore?.chekingSession) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <AppNavigation authenticated={false} />
        </>
    )
}

export default inject('sessionStore')(observer(Setup));