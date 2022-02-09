import React, { FC, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Container, Label, MaterialButton } from "../../components";

interface IScreenProps {
    navigation: any
}

const LoginScreen: FC<IScreenProps> = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.log('logiiin!');
    }

    const cancel = () => {
        console.log('canceeel');
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.loginText}>Iniciar Sesión</Text>
                <View style={styles.username}>
                    <Text>Usuario</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="email@example.com"
                        onChangeText={user => setUser(user)}
                        defaultValue={user}
                    />
                </View>
                <View style={styles.password}>
                    <Text>Contraseña</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="**********"
                        onChangeText={password => setPassword(password)}
                        defaultValue={password}
                    />
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.loginButton}>
                    <MaterialButton
                        onPress={login}
                        title="Iniciar Sesión" />
                </View>
                <View style={styles.cancelButton}>
                    <MaterialButton
                        onPress={cancel}
                        title="Cancelar"
                        buttonColor="secondary" />
                </View>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1
    },
    loginText: {
        marginTop: 40,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    username: {
        marginTop: 40,
        marginBottom: 20,
        marginStart: 50,
        fontSize: 18
    },
    password: {
        marginTop: 20,
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
    bottomButtons: {
        marginBottom: 30
    },
    forgotPasswordText: {
        color: '#727377',
        textAlign: 'center',
    },
    loginButton: {
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
