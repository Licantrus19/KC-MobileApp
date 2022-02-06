import React, { useState } from "react";
import { useWindowDimensions, StyleSheet, View, Text } from "react-native";

export default function TipItem({item}: {item: any}) {

    const {width} = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <Text style={[styles.text]}>{item.text}</Text>
        </View>
    )
};

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
