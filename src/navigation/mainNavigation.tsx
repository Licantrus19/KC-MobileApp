import React, { FC, useEffect } from "react";
import { TabIcon } from "./components";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    Map,
    Outcomes,
    Tips,
    Kids,
    AddKidAvatar,
    AddKidInformation,
    KidTestScreen,
    Profile,
    TestInformation,
    TestQuestion,
    ResultTest
} from "../screens";
import { Label, SettingsApp } from "../components";
import { Image, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import * as RootNavigation from './rootNavigation';
import { getUserInformationAsync } from "../api/user.api";
import { Util } from "../common/utils";
import { ISessionStore } from "../stores/interfaces";
import stores from "../stores";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const goToProfile: any = () => {
    RootNavigation.navigate('Profile', {})
}

const mainScreenOptions: StackNavigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        height: 70
    },
    headerTitleAlign: "center",
    headerLeft: () => { return <Image style={{ marginHorizontal: 15, width: 40, height: 40 }} source={require("../assets/logo/logo_komodocare_blue.png")} /> },
    headerRight: () => {
        return <TouchableOpacity activeOpacity={.5} onPress={goToProfile}><Image style={{ marginHorizontal: 15, width: 40, height: 40 }} source={Util.avatarImage(stores.session.profileImage)} /></TouchableOpacity>
    }
}

export const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={mainScreenOptions}>
            <Stack.Screen options={{ headerTitle: "Profile" }} name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export const KidsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Kids" screenOptions={mainScreenOptions}>
            <Stack.Screen options={{ headerTitle: "Kodomo Care" }} name="Kids" component={Kids} />
            <Stack.Screen options={{ headerTitle: "Registro del menor" }} name="AddKidAvatar" component={AddKidAvatar} />
            <Stack.Screen options={{ headerTitle: "Registro del menor" }} name="AddKidInformation" component={AddKidInformation} />
            <Stack.Screen options={{ headerTitle: "Kodomo Care" }} name="KidProfileTest" component={KidTestScreen} />
            <Stack.Screen options={{ headerTitle: "Kodomo Care" }} name="TestInformation" component={TestInformation} />
            <Stack.Screen options={{ headerTitle: "Kodomo Care" }} name="TestQuestion" component={TestQuestion} />
            <Stack.Screen options={{ headerTitle: "Kodomo Care" }} name="ResultTest" component={ResultTest} />
        </Stack.Navigator>
    )
}

export const MapStack = () => {
    return (
        <Stack.Navigator initialRouteName="Map" screenOptions={mainScreenOptions}>
            <Stack.Screen options={{ headerTitle: "Mapas CET" }} name="Map" component={Map} />
        </Stack.Navigator>
    )
}

export const OutcomesStack = () => {
    return (
        <Stack.Navigator initialRouteName="Outcomes" screenOptions={mainScreenOptions}>
            <Stack.Screen options={{ headerTitle: "Resultados" }} name="Outcomes" component={Outcomes} />
        </Stack.Navigator>
    )
}

export const TipsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Tips" screenOptions={mainScreenOptions}>
            <Stack.Screen name="Tips" component={Tips} />
        </Stack.Navigator>
    )
}

interface IMainNavProps {
}

const MainTabNavigation: FC<IMainNavProps> = ({ }) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                keyboardHidesTabBar: true,
                activeTintColor: 'black',
                labelStyle: {
                    fontSize: 12
                },

            }}
            initialRouteName="KidsStack"
        >
            <Tab.Screen
                name="KidsStack"
                component={KidsStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon icon="home" iconFocused="game-controller" focused={focused} />
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <>
                                <Label size={focused ? 14 : 12} color={focused ? "primary" : "gray"}>Inicio</Label>
                            </>
                        )
                    },

                }}
            />

            <Tab.Screen
                name="MapStack"
                component={MapStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon icon="maps" iconFocused="game-controller" focused={focused} />
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <>
                                <Label size={focused ? 14 : 12} color={focused ? "primary" : "gray"}>Mapas</Label>
                            </>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="OutcomesStack"
                component={OutcomesStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon icon="outcomes" iconFocused="game-controller" focused={focused} />
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <>
                                <Label size={focused ? 14 : 12} color={focused ? "primary" : "gray"}>Resultados</Label>
                            </>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="TipsStack"
                component={TipsStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon icon="tips" iconFocused="game-controller" focused={focused} />
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <>
                                <Label size={focused ? 14 : 12} color={focused ? "primary" : "gray"}>Tips</Label>
                            </>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={({ }) => ({
                    tabBarVisible: false,
                    tabBarButton: (props) => null
                })}
            />

        </Tab.Navigator>
    )
}

export default MainTabNavigation;