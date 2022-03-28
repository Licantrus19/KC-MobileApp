import { StackActions, useIsFocused } from "@react-navigation/native";
import { inject, observer } from "mobx-react";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { getUserInformation, updateUser } from "../../api/user.api";
import { AvatarItem, Container, Label } from "../../components";

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

const ProfileScreen: FC<IScreenProps> = ({ navigation, sessionStore }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');

    const [editFirstName, setEditFirstName] = useState(false);
    const [editLastName, setEditLastName] = useState(false);
    const [editIdentificationNumber, setEditIdentificationNumber] = useState(false);

    const [avatarImage, setAvatarImage] = useState(-1);

    const isFocused = useIsFocused();

    const buildUserDTO = () => {
        const userDTO = {
            firstName: firstName,
            lastName: lastName,
            identificationNumber: identificationNumber,
            avatarImage: "avatar_profile_" + avatarImage + ".png"
        };
        return userDTO;
    }

    const saveChanges = () => {
        const userDTO = buildUserDTO();
        console.log(userDTO);
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
        sessionStore.logout().then(() => {

        })
    }

    const loadUserInfo = useCallback(async () => {
        getUserInformation().then((result) => {
            const userInfo = result.data;
            setFirstName(userInfo.firstName);
            setLastName(userInfo.lastName);
            setIdentificationNumber(userInfo.identificationNumber);
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
                    <Text style={styles.boldText}>Nombres:</Text>
                    <View style={styles.editPropertyContainer}>
                        {!editFirstName ?
                            <>
                                <Text style={styles.userPropertyText}>{firstName}</Text>
                                <TouchableOpacity onPress={() => setEditFirstName(true)} style={styles.editPropertyButton}>
                                    <Image
                                        source={require('../../assets/profile_icons/edit_button_icon.png')}
                                        style={styles.editIcon}
                                    />
                                </TouchableOpacity>
                            </> :
                            <>
                                <TextInput
                                    style={styles.inputText}
                                    onChangeText={firstName => setFirstName(firstName)}
                                    defaultValue={firstName}
                                />
                                <TouchableOpacity onPress={() => setEditFirstName(false)} style={styles.editPropertyButton}>
                                    <Image
                                        source={require('../../assets/profile_icons/save_button_icon.png')}
                                        style={styles.editIcon}
                                    />
                                </TouchableOpacity>
                            </>
                        }
                    </View>
                </View>
                <View style={styles.lastName}>
                    <Text style={styles.boldText}>Apellidos:</Text>
                    <View style={styles.editPropertyContainer}>
                        {!editLastName ?
                            <>
                                <Text style={styles.userPropertyText}>{lastName}</Text>
                                <TouchableOpacity onPress={() => setEditLastName(true)} style={styles.editPropertyButton}>
                                    <Image
                                        source={require('../../assets/profile_icons/edit_button_icon.png')}
                                        style={styles.editIcon}
                                    />
                                </TouchableOpacity>
                            </> :
                            <>
                                <TextInput
                                    style={styles.inputText}
                                    onChangeText={lastName => setLastName(lastName)}
                                    defaultValue={lastName}
                                />
                                <TouchableOpacity onPress={() => setEditLastName(false)} style={styles.editPropertyButton}>
                                    <Image
                                        source={require('../../assets/profile_icons/save_button_icon.png')}
                                        style={styles.editIcon}
                                    />
                                </TouchableOpacity>
                            </>
                        }
                    </View>
                </View>
                <View style={styles.identificationNumber}>
                    <Text style={styles.boldText}>DNI:</Text>
                    <View style={styles.editPropertyContainer}>
                        {!editIdentificationNumber ?
                            <>
                                <Text style={styles.userPropertyText}>{identificationNumber}</Text>
                                <TouchableOpacity onPress={() => setEditIdentificationNumber(true)} style={styles.editPropertyButton}>
                                    <Image
                                        source={require('../../assets/profile_icons/edit_button_icon.png')}
                                        style={styles.editIcon}
                                    />
                                </TouchableOpacity>
                            </> :
                            <>
                                <TextInput
                                    style={styles.inputText}
                                    onChangeText={identificationNumber => setIdentificationNumber(identificationNumber)}
                                    defaultValue={identificationNumber}
                                />
                                <TouchableOpacity onPress={() => setEditIdentificationNumber(false)} style={styles.editPropertyButton}>
                                    <Image
                                        source={require('../../assets/profile_icons/save_button_icon.png')}
                                        style={styles.editIcon}
                                    />
                                </TouchableOpacity>
                            </>
                        }
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
                        onPress={saveChanges}
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
                    <Button
                        onPress={logoutSession}
                        title="Cerrar Sesión"
                        color="#E95656"></Button>
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
        flex: 1
    },
    firstName: {
        marginTop: 20,
        marginBottom: 10,
        marginStart: 25
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    editPropertyContainer: {
        flexDirection: 'row'
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
        fontSize: 18
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
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
    editIcon: {
        marginTop: 15,
        width: 15,
        height: 15
    },
    inputText: {
        marginTop: 8.5,
        marginBottom: -1.5,
        marginEnd: 25,
        borderWidth: 0,
        fontSize: 18,
        flex: 1,
        padding: 0
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
    }
});