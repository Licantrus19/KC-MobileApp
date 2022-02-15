import React, { FC, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Container, Label } from "../../components";

interface IScreenProps {
    navigation: any
}

const ProfileScreen: FC<IScreenProps> = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');

    const saveChanges = () => {
        console.log();
    }

    const cancelChanges = () => {
        navigation.goBack();
    }

    const logout = () => {
        console.log();
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.firstName}>
                    <Text style={styles.boldText}>Nombres</Text>
                    <TextInput
                    style={styles.inputText}
                    onChangeText={firstName => setFirstName(firstName)}
                    defaultValue={'Marcelo'}
                    />
                </View>
                <View style={styles.lastName}>
                    <Text style={styles.boldText}>Apellidos</Text>
                    <TextInput
                    style={styles.inputText}
                    onChangeText={lastName => setLastName(lastName)}
                    defaultValue={'Rios'}
                    />
                </View>
                <View style={styles.identificationNumber}>
                    <Text style={styles.boldText}>DNI</Text>
                    <TextInput
                    style={styles.inputText}
                    onChangeText={identificationNumber => setIdentificationNumber(identificationNumber)}
                    defaultValue={'00000000'}
                    />
                </View>
                {/* <View style={styles.avatar}>
                    <Text style={styles.boldText}>Avatar</Text>
                </View> */}
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.nextButton}>
                    <Button
                    onPress={saveChanges}
                    title="Siguiente"
                    color="#5680E9"></Button>
                </View>
                <View style={styles.cancelButton}>
                    <Button
                    onPress={cancelChanges}
                    title="Cancelar"
                    color="#E95656"></Button>
                </View>
                <View style={styles.logoutButton}>
                    <Button
                    onPress={logout}
                    title="Cerrar Sesión"
                    color="#E95656"></Button>
                </View>
            </View>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1
    },
    firstName: {
        marginTop: 20,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    boldText: {
        fontWeight: 'bold'
    },
    lastName: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    identificationNumber: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
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
        marginBottom: 10
    },
    logoutButton: {
        marginStart: 50,
        marginEnd: 50,
        marginBottom: 40
    }
});