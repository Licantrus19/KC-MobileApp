import React, { FC } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface IScreenProps {
    onPress: () => void;
    item: any
}

const TestButton: FC<IScreenProps> = ({ onPress, item }) => {

    const bgColor = item.backgroundColor;
    const imagePath = item.imageUri;

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styleContainer(bgColor).container]}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={imagePath} />
            <Text style={[styles.text]}>{item.text}</Text>
        </TouchableOpacity>
    )
};

export default TestButton

const styleContainer = (bgColor: any) => StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 25,
        marginEnd: 25,
        marginBottom: 10,
        height: 60,
        backgroundColor: bgColor,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 50,
        marginStart: 20
    },
    text: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        marginRight: 30,
        fontSize: 21,
    },
});
