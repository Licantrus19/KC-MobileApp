import React, { useState, FC } from "react";
import { useWindowDimensions, StyleSheet, View, Text } from "react-native";

interface IScreenProps {
    item: any
}

const TipItem: FC<IScreenProps> = ({ item }) => {

    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Text style={[styles.text]}>{item.textTip}</Text>
        </View>
    )
};

export default TipItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 50,
        paddingEnd: 50,
    },
    text: {
        textAlign: 'justify',
        fontSize: 18,
    },
});
