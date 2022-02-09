import React, { FC, useEffect, useState } from "react";
import { Container, Label } from "../../components";

interface IScreenProps {

}

const OutcomesScreen: FC<IScreenProps> = ({  }) => {

    //Call API
    useEffect(() => {

    }, []);

    //Handle Error
    useEffect(() => {
        
    }, []);

    return (
        <>
            <Container>
                <Label font={'bold'}>Result Screen is Working!</Label>
            </Container>
        </>
    )
}

/* export default inject('sessionStore')(observer(OutcomesScreen)); */
export default OutcomesScreen;