import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/login/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddKidsInformationScreen from './screens/kids/add-kid/AddKidsInformationScreen';
import AddKidsAvatarScreen from './screens/kids/add-kid/AddKidsAvatarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddKidsInformation" component={AddKidsInformationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddKidsAvatar" component={AddKidsAvatarScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
