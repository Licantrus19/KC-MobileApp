import React, { FC } from "react";
import { Image, View } from "react-native";
import { Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ITabIconProps {
    focused?: boolean;
    color?: string;
    size?: number;
    icon: 'home' | 'maps' | 'outcomes' | 'tips',
    iconFocused: 'game-controller' | 'star'
}

export const TabIcon: FC<ITabIconProps> = ({ focused = false, color = "gray", size = 22, icon = 'home', iconFocused }) => {

    const iconPath = 'home' + '.png';
    const getIcon = () => {
        switch (icon) {
            case 'home':
                return require('../../assets/home.png');
            case 'maps':
                return require('../../assets/maps.png');
            case 'outcomes':
                return require('../../assets/outcomes.png');
            case 'tips':
                return require('../../assets/tips.png');
        }
    }
    const getIconFocused = () => {
        switch (icon) {
            case 'home':
                return require('../../assets/home_focused.png');
            case 'maps':
                return require('../../assets/maps_focused.png');
            case 'outcomes':
                return require('../../assets/outcomes_focused.png');
            case 'tips':
                return require('../../assets/tips_focused.png');
        }
    }
    return (
        <>
            {/* {focused && (
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'black',
                    width: '100%',
                    height: 3
                }}>
                </View>
            )} */}
            <Image
                source={focused ? getIconFocused() : getIcon()}
                style={{ width: size, height: size }}
            />
        </>
    )
}