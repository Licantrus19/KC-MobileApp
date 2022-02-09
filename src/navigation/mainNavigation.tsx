import React, { FC } from "react";
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
    KidTestScreen
} from "../screens";
import { } from "../stores/interfaces";
import { Label, SettingsApp } from "../components";
import { Text } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mainScreenOptions: StackNavigationOptions = {
    /* headerRight: () => { return <View style={{ marginRight: 15 }}><SettingsApp /></View> }, */
}

export const KidsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Kids" screenOptions={mainScreenOptions}>
            <Stack.Screen name="Kids" component={Kids} />
            <Stack.Screen name="AddKidAvatar" component={AddKidAvatar} />
            <Stack.Screen name="AddKidInformation" component={AddKidInformation} />
            <Stack.Screen name="KidProfileTest" component={KidTestScreen} />
        </Stack.Navigator>
    )
}

export const MapStack = () => {
    return (
        <Stack.Navigator initialRouteName="Map" screenOptions={mainScreenOptions}>
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    )
}

export const OutcomesStack = () => {
    return (
        <Stack.Navigator initialRouteName="Outcomes" screenOptions={mainScreenOptions}>
            <Stack.Screen name="Outcomes" component={Outcomes} />
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

        </Tab.Navigator>
    )
}

export default MainTabNavigation;