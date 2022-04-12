import { StackActions, useIsFocused } from "@react-navigation/native";
import { inject, observer } from "mobx-react";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { string } from "yup";
import { getUserInformation, updateUser } from "../../api/user.api";
import { colors } from "../../common/constants";
import { AvatarItem, Container, Label, Loading } from "../../components";
import { navigate } from "../../navigation/rootNavigation";

import * as yup from 'yup';
import { CustomInputText } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";

import { ISessionStore } from "../../stores/interfaces";
import SessionStore from "../../stores/SessionStore";

interface IScreenProps {
    navigation: any,
    sessionStore: ISessionStore
}

const AVATAR_IMAGES_DATA: any = [
    {
        id: 1,
        imageUri: require('../../assets/avatars/profile/avatar_profile_1.png')
    },
    {
        id: 2,
        imageUri: require('../../assets/avatars/profile/avatar_profile_2.png')
    },
    {
        id: 3,
        imageUri: require('../../assets/avatars/profile/avatar_profile_3.png')
    },
    {
        id: 4,
        imageUri: require('../../assets/avatars/profile/avatar_profile_4.png')
    },
    {
        id: 5,
        imageUri: require('../../assets/avatars/profile/avatar_profile_5.png')
    },
    {
        id: 6,
        imageUri: require('../../assets/avatars/profile/avatar_profile_6.png')
    }
];

interface ProfileData {
    firstName: string;
    lastName: string;
    dni: string;
}

const schema = yup
    .object({
        firstName: yup
            .string()
            .min(3, 'Mínimo 3 caracteres')
            .max(30, 'Máximo 30 caracteres')
            .required('Nombres son requeridos'),
        lastName: yup
            .string()
            .min(3, 'Mínimo 3 caracteres')
            .max(30, 'Máximo 30 caracteres')
            .required('Apellidos son requeridos'),
        dni: yup
            .string()
            .max(8, 'Se requiere 8 caracteres')
            .min(8, 'Se requiere 8 caracteres')
            .required('DNI es requerido'),
    })
    .required();

const ProfileScreen: FC<IScreenProps> = ({ navigation, sessionStore }) => {

    const { control, handleSubmit, setValue: setProfileValue, formState: { errors } } = useForm<ProfileData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            dni: '',
        },
        resolver: yupResolver(schema),
    })

    const [avatarImage, setAvatarImage] = useState(-1);

    const isFocused = useIsFocused();

    const saveChanges = ({ firstName, lastName, dni }: ProfileData) => {
        const userDTO = {
            firstName,
            lastName,
            identificationNumber: dni,
            avatarImage: "avatar_profile_" + avatarImage + ".png",
        };

        updateUser(userDTO).then((result) => {
            if (result.data.username != null) {
                // update profile image
                SessionStore.setProfileImage("avatar_profile_" + avatarImage + ".png");

                // notify user
                ToastAndroid.show('Información actualizada', ToastAndroid.SHORT);
            } else {
                ToastAndroid.show('Server error', ToastAndroid.SHORT);
            }
        }).catch((error: any) => {
            console.log('error: ', error);
            ToastAndroid.show('Server error', ToastAndroid.SHORT);
        });
    }

    const cancelChanges = () => {
        navigation.goBack();
    }

    const logoutSession = () => {
        sessionStore.logout();
    }

    const loadUserInfo = useCallback(async () => {
        getUserInformation().then((result) => {
            const userInfo = result.data;
            setProfileValue('firstName', userInfo.firstName);
            setProfileValue('lastName', userInfo.lastName);
            setProfileValue('dni', userInfo.identificationNumber);

            setAvatarImage(userInfo.avatarImage.charAt(15));
        })
    }, [navigation, isFocused]);

    useEffect(() => {
        loadUserInfo();
    }, [loadUserInfo]);

    const selectAvatarImage = (val: any) => {
        setAvatarImage(val);
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.firstName}>
                    <View>
                        <CustomInputText
                            labelStyle={styles.boldText}
                            label="Nombres:"
                            placeholder='Ingrese nombres completo'
                            control={control}
                            name="firstName"
                            errorMessage={errors.firstName?.message}
                        />
                    </View>
                </View>
                <View style={styles.lastName}>
                    <View>
                        <CustomInputText
                            labelStyle={styles.boldText}
                            label="Apellidos:"
                            placeholder='Ingrese apellidos completo'
                            control={control}
                            name="lastName"
                            errorMessage={errors.lastName?.message}
                        />
                    </View>
                </View>
                <View style={styles.identificationNumber}>
                    <View>
                        <CustomInputText
                            labelStyle={styles.boldText}
                            label="DNI:"
                            placeholder='Ingrese DNI'
                            control={control}
                            name="dni"
                            errorMessage={errors.dni?.message}
                            keyboardType="number-pad"
                            maxLength={8}
                        />
                    </View>
                </View>
                <View style={styles.avatar}>
                    <Text style={styles.boldText}>Avatar:</Text>
                    {avatarImage != -1 && <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <AvatarItem
                            data={AVATAR_IMAGES_DATA}
                            selectedItem={avatarImage}
                            onPress={selectAvatarImage}
                        />
                    </ScrollView>}
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.nextButton}>
                    <Button
                        onPress={handleSubmit(saveChanges)}
                        title="Guardar"
                        color="#5680E9"></Button>
                </View>
                <View style={styles.cancelButton}>
                    <Button
                        onPress={cancelChanges}
                        title="Cancelar"
                        color="#E95656"></Button>
                </View>
                <View style={styles.logoutButton}>
                    {/* <Button
                        onPress={logoutSession}
                        title="Cerrar Sesión"
                        color="#E95656"></Button> */}
                    <TouchableOpacity disabled={sessionStore.loading} activeOpacity={0.7} onPress={logoutSession} style={styles.logoutButtonAction}>
                        {!sessionStore.loading && (
                            <Text style={{ color: 'white' }}>CERRAR SESIÓN</Text>
                        )}
                        {sessionStore.loading && (
                            <Loading color={colors.white} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default inject('sessionStore')(observer(ProfileScreen));

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
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    lastName: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    identificationNumber: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
        // marginStart: 25,
        fontSize: 18
    },
    userPropertyText: {
        marginTop: 10,
        marginEnd: 25,
        fontSize: 18,
        flex: 1
    },
    editPropertyButton: {
        flex: 1
    },
    bottomButtons: {
        marginBottom: 30
    },
    nextButton: {
        marginStart: 25,
        marginEnd: 25,
        marginBottom: 10
    },
    cancelButton: {
        marginStart: 25,
        marginEnd: 25,
        marginBottom: 10
    },
    logoutButton: {
        marginStart: 25,
        marginEnd: 25,
        marginBottom: 40
    },
    logoutButtonAction: {
        backgroundColor: colors.red,
        color: colors.white,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
});