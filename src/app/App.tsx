import React from "react";
import Setup from "./Setup.view";
import { Provider } from "mobx-react";
import stores from '../stores';
import { observer } from "mobx-react-lite";
import { DefaultTheme ,Provider as RNPaperProvider } from "react-native-paper";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };

const App = () => {
    return (
        <>
            <Provider
                /* sessionStore={stores.session} */
            >
                <RNPaperProvider theme={theme}>
                    <Setup />
                </RNPaperProvider>
            </Provider>
        </>
    )
}

export default observer(App);