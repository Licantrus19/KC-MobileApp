import React from "react";
import { Image } from "react-native";
import { } from "../components";
import { Login, Register } from "../screens";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

const Stack = createStackNavigator();

const registerScreenOptions: StackNavigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        height: 70
    },
    headerTitleAlign: "center",
    headerLeft: () => { return <Image style={{ marginHorizontal: 15, width: 40, height: 40 }} source={require("../assets/logo/logo_komodocare_blue.png")} /> },
}

export const PublicStack = () => {
    return (
        <Stack.Navigator screenOptions={registerScreenOptions} initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: true, headerTitle: "Registrar Usuario" }} />
        </Stack.Navigator>
    )
}