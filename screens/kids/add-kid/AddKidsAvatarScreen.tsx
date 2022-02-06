import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function AddKidsAvatarScreen({navigation}: {navigation: any}) {

    const registerKid = () => {
        console.log();
        navigation.navigate('Home');
    }

    const goBack = () => {
        console.log();
        navigation.navigate('AddKidsInformation');
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text>Hola</Text>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.nextButton}>
                    <Button
                    onPress={registerKid}
                    title="Siguiente"
                    color="#5680E9"></Button>
                </View>
                <View style={styles.cancelButton}>
                    <Button
                    onPress={goBack}
                    title="Atrás"
                    color="#E95656"></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1
    },
    firstName: {
        marginTop: 20,
        marginBottom: 20,
        marginStart: 50,
        fontSize: 18
    },
    lastName: {
        marginTop: 10,
        marginBottom: 20,
        marginStart: 50,
        fontSize: 18
    },
    identificationNumber: {
        marginTop: 10,
        marginBottom: 20,
        marginStart: 50,
        fontSize: 18
    },
    gender: {
        marginTop: 10,
        marginBottom: 20,
        marginStart: 50,
        fontSize: 18
    },
    relationship: {
        marginTop: 10,
        marginBottom: 20,
        marginStart: 50,
        fontSize: 18
    },
    inputText: {
        marginTop: 10,
        marginEnd: 50,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5
    },
    picker: {
        marginTop: 10,
        marginEnd: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000",
    },
    bottomButtons: {
        marginBottom: 30
    },
    nextButton: {
        marginStart: 50,
        marginEnd: 50,
        marginBottom: 10
    },
    cancelButton: {
        marginStart: 50,
        marginEnd: 50,
        marginBottom: 40
    }
});
