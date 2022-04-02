import React from "react";
import Setup from "./Setup.view";
import { MobXProviderContext } from "mobx-react";
import stores from '../stores';
import { observer } from "mobx-react-lite";
import { DefaultTheme, Provider as RNPaperProvider } from "react-native-paper";
import shallowequal from 'shallowequal';


function Provider({ children, ...propsValue }) {
    const contextValue = React.useContext(MobXProviderContext)
    const [value] = React.useState(() => ({
      ...contextValue,
      ...propsValue,
    }));
             
        
    if (process.env.NODE_ENV !== "production") {        
        const newValue = { ...value, ...propsValue } // spread in previous value for the context based stores
        if (!areEqualShallow(value, newValue)) {
            throw new Error(
                "MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children"
            )
        }
    }

    return (
        <MobXProviderContext.Provider value={value}>{children}</MobXProviderContext.Provider>
    )
}

function areEqualShallow(a: any, b: any) {
    for (let key in a) {
      if (!(key in b) || a[key] !== b[key]) {
        return false;
      }
    }
    for (let key in b) {
      if (!(key in a)) {
        return false;
      }
    }
    return true;
  }

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
                sessionStore={stores.session}
            >
                <RNPaperProvider theme={theme}>
                    <Setup />
                </RNPaperProvider>
            </Provider>
        </>
    )
}

export default observer(App);
