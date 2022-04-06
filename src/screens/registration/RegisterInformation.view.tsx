import CheckBox from "@react-native-community/checkbox";
import React, { FC, useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {CustomInputText} from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
interface IScreenProps {
    navigation: any
}

interface RegisterData {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    firstName: yup.string().required('Nombres son requeridos'),
    lastName: yup.string().required('Apellidos son requeridos'),
    dni: yup
      .string()
      .max(8, 'Se requiere 8 caracteres')
      .min(8, 'Se requiere 8 caracteres')
      .required('DNI es requerido'),
    email: yup
      .string()
      .email('Ingrese un correo válido')
      .required('Correo es requerido'),
    password: yup.string().required('Contraseña es requerida'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
  })
  .required();

const RegisterScreen: FC<IScreenProps> = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterData>({
        defaultValues: {
            confirmPassword: '',
            dni: '',
            email: '',
            lastName: '',
            firstName: '',
            password: '',
        }, resolver: yupResolver(schema)
    })

    const [termsAccepted, setTermsAccepted] = useState(false);

    const isNextButtonDisabled = !termsAccepted;

    const saveChanges = ({
        firstName,
        lastName,
        dni,
        email,
        password,
    }: RegisterData) => {
        const profileData = {
          firstName,
          lastName,
          identificationNumber: dni,
          emailAddress: email,
          password,
          avatarImage: 1,
        };
        navigation.push('RegisterAvatar', profileData);
    };

    const cancelChanges = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.firstName}>
                    <CustomInputText 
                        placeholder='Ingrese nombres completo'
                        control={control}
                        name="firstName"
                        errorMessage={errors.firstName?.message}
                    />
                </View>
                <View style={styles.lastName}>
                    <CustomInputText 
                        placeholder='Ingrese apellidos completo'
                        control={control}
                        name="lastName"
                        errorMessage={errors.lastName?.message}
                    />
                </View>
                <View style={styles.identificationNumber}>
                    <CustomInputText 
                        placeholder='Ingrese DNI'
                        control={control}
                        name="dni"
                        errorMessage={errors.dni?.message}
                        keyboardType="number-pad"
                        containerStyle={{ marginEnd: 30, flex: 3 }}
                        maxLength={8}
                    />
                    <Image
                        resizeMode='contain'
                        style={styles.identificationNumberIcon}
                        source={require('../../assets/add_kid/identification_number_icon.png')}
                    />
                </View>
                <View style={styles.emailAddress}>
                    <CustomInputText 
                        placeholder='Ingrese correo electrónico'
                        control={control}
                        name="email"
                        errorMessage={errors.email?.message}
                    />
                </View>
                <View style={styles.password}>
                    <CustomInputText 
                        placeholder='Ingrese contraseña'
                        control={control}
                        name="password"
                        errorMessage={errors.password?.message}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.confirmPassword}>
                    <CustomInputText 
                        placeholder='Confirmar contraseña'
                        control={control}
                        name="confirmPassword"
                        errorMessage={errors.confirmPassword?.message}
                        secureTextEntry={true}
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
                        onPress={handleSubmit(saveChanges)}
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
        flex: 1,
        paddingHorizontal: 25
    },
    firstName: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18
    },
    boldText: {
        fontWeight: 'bold'
    },
    lastName: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    identificationNumber: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        flexDirection: 'row',
    },
    identificationNumberIcon: {
        flex: 1,
        alignItems: 'flex-end',
        alignSelf: 'flex-start',
        marginEnd: 50,
        width: 80,
        height: 40,
        marginTop: 10
    },
    checkboxContainer: {
        marginTop: 10,
        flexDirection: "row",
    },
    checkbox: {
        alignItems: 'center'
    },
    confirmTermsText: {
        marginTop: 5,
        fontSize: 15,
    },
    emailAddress: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    password: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    confirmPassword: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
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