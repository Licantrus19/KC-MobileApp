import React from "react";
import {  } from "react-native";
import {  } from "../components";
import { Login } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const PublicStack = () => {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}