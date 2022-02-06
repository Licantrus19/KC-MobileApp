import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import KidsScreen from '../kids/KidsScreen';
import MapsScreen from '../maps/MapsScreen';
import OutcomesScreen from '../outcomes/OutcomesScreen';
import TipsScreen from '../tips/TipsScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyTabBar from '../tab/TabBar';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {

    return (
        <Tab.Navigator
            initialRouteName="Kids"
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'white' },
            }}>
            <Tab.Screen 
                name="Kids" 
                component={KidsScreen} 
                options={{
                    tabBarLabel: 'Kids',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Maps" 
                component={MapsScreen} 
                options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Outcomes" 
                component={OutcomesScreen} 
                options={{
                    tabBarLabel: 'Outcomes',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Tips" 
                component={TipsScreen} 
                options={{
                    tabBarLabel: 'Tips',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
