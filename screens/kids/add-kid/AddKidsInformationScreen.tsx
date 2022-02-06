import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function AddKidsInformationScreen({navigation}: {navigation: any}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [gender, setGender] = useState('');
    const [relationship, setRelationship] = useState('');

    const nextStep = () => {
        console.log();
        navigation.navigate('AddKidsAvatar');
    }

    const cancel = () => {
        console.log();
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.firstName}>
                    <Text>Nombres</Text>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Ingrese nombre completo"
                    onChangeText={firstName => setFirstName(firstName)}
                    defaultValue={firstName}
                    />
                </View>
                <View style={styles.lastName}>
                    <Text>Apellidos</Text>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Ingrese apellido completo"
                    onChangeText={lastName => setLastName(lastName)}
                    defaultValue={lastName}
                    />
                </View>
                <View style={styles.identificationNumber}>
                    <Text>DNI</Text>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Ingrese DNI"
                    onChangeText={identificationNumber => setIdentificationNumber(identificationNumber)}
                    defaultValue={identificationNumber}
                    />
                </View>
                <View style={styles.gender}>
                    <Text>Género</Text>
                    <Picker
                    selectedValue={gender}
                    onValueChange={(gender, index) => setGender(gender)}
                    mode="dropdown" // Android only
                    style={styles.picker}
                    >
                        <Picker.Item label="Seleccione sexo del menor" value="Unknown" />
                        <Picker.Item label="Niña" value="female" />
                        <Picker.Item label="Niño" value="male" />
                    </Picker>
                </View>
                <View style={styles.relationship}>
                    <Text>Parentesco</Text>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Parentesco con el menor"
                    onChangeText={relationship => setRelationship(relationship)}
                    defaultValue={relationship}
                    />
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.nextButton}>
                    <Button
                    onPress={nextStep}
                    title="Siguiente"
                    color="#5680E9"></Button>
                </View>
                <View style={styles.cancelButton}>
                    <Button
                    onPress={cancel}
                    title="Cancelar"
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
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
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
    gender: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    relationship: {
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
    picker: {
        marginTop: 10,
        marginEnd: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000"
    },
    bottomButtons: {
        marginBottom: 30
    },
    forgotPasswordText: {
        color: '#727377',
        textAlign: 'center',
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
