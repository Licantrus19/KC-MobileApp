import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <Text>Hola</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
