import React, { FC, useEffect } from "react";
import { AppNavigation } from '../navigation';
/* import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { ISessionStore, IUserStore } from "../stores/interfaces"; */

interface ISetupProps {

}

const Setup: FC<ISetupProps> = ({ }) => {

    /* useEffect(() => {
        sessionStore?.checkSession();
    }, [])

    if (sessionStore?.token) {
        userStore?.getMyFavourites();
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
    } */

    return (
        <>
            <AppNavigation authenticated={true} />
        </>
    )
}

/* export default inject('sessionStore', 'userStore')(observer(Setup)); */
export default Setup;