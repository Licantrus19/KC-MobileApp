import CheckBox from "@react-native-community/checkbox";
import React, { FC, useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

interface IScreenProps {
    navigation: any
}

const RegisterScreen: FC<IScreenProps> = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [termsAccepted, setTermsAccepted] = useState(false);

    const isNextButtonDisabled = !termsAccepted;

    const saveChanges = () => {
        const profileData = {
            firstName: firstName,
            lastName: lastName,
            identificationNumber: identificationNumber,
            emailAddress: emailAddress,
            password: password,
            avatarImage: 1
        }
        navigation.push("RegisterAvatar", profileData);
    }

    const cancelChanges = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.firstName}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Ingrese nombres completo'}
                        onChangeText={firstName => setFirstName(firstName)}
                    />
                </View>
                <View style={styles.lastName}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Ingrese apellidos completo'}
                        onChangeText={lastName => setLastName(lastName)}
                    />
                </View>
                <View style={styles.identificationNumber}>
                    <TextInput
                        style={styles.inputDNIText}
                        placeholder={'Ingrese DNI'}
                        onChangeText={identificationNumber => setIdentificationNumber(identificationNumber)}
                    />
                    <Image
                        resizeMode='contain'
                        style={styles.identificationNumberIcon}
                        source={require('../../assets/add_kid/identification_number_icon.png')}
                    />
                </View>
                <View style={styles.emailAddress}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Ingrese correo electrónico'}
                        onChangeText={emailAddress => setEmailAddress(emailAddress)}
                    />
                </View>
                <View style={styles.password}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Ingrese contraseña'}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
                <View style={styles.confirmPassword}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Confirmar contraseña'}
                        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={termsAccepted}
                        onValueChange={setTermsAccepted}
                        style={styles.checkbox}
                        tintColors={{ true: '#5680E9', false: 'black' }}
                    />
                    <Text style={styles.confirmTermsText}>Acepta los <Text style={{ color: '#5680E9' }}>términos de tratamiento de datos</Text></Text>
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.nextButton}>
                    <Button
                        onPress={saveChanges}
                        disabled={isNextButtonDisabled}
                        title="Siguiente"
                        color="#5680E9"></Button>
                </View>
                <View style={styles.cancelButton}>
                    <Button
                        onPress={cancelChanges}
                        title="Cancelar"
                        color="#E95656"></Button>
                </View>
            </View>
        </ScrollView>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1
    },
    firstName: {
        marginTop: 20,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18
    },
    boldText: {
        fontWeight: 'bold'
    },
    lastName: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18
    },
    identificationNumber: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18,
        flexDirection: 'row',
    },
    identificationNumberIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginEnd: 50,
        width: 80,
        height: 40,
        marginTop: 10
    },
    checkboxContainer: {
        marginTop: 10,
        marginStart: 25,
        flexDirection: "row",
    },
    checkbox: {
        alignItems: 'center'
    },
    confirmTermsText: {
        marginTop: 5,
        fontSize: 15,
        marginEnd: 25,
    },
    emailAddress: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18
    },
    password: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18
    },
    confirmPassword: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18
    },
    inputText: {
        marginTop: 10,
        marginEnd: 25,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5
    },
    inputDNIText: {
        marginTop: 10,
        marginEnd: 25,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        flex: 3,
    },
    bottomButtons: {
        marginTop: 20
    },
    nextButton: {
        marginStart: 45,
        marginEnd: 45,
        marginBottom: 10
    },
    cancelButton: {
        marginStart: 45,
        marginEnd: 45,
        marginBottom: 10
    }
});