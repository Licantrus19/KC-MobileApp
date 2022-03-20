import { useIsFocused } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getUserInformation } from "../../api/user.api";
import { AvatarItem, Container, Label } from "../../components";

interface IScreenProps {
    navigation: any
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

interface UserProfileDTO {
    firstName: any,
    lastName: any,
    identificationNumber: any,
    avatarImage: any,
    selectedAvatar: any
}

const ProfileScreen: FC<IScreenProps> = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');

    const [avatarImage, setAvatarImage] = useState(1);

    const [user, setUser] = useState<UserProfileDTO>({
        firstName: '',
        lastName: '',
        identificationNumber: '',
        avatarImage: '',
        selectedAvatar: ''
    });

    const isFocused = useIsFocused();

    const saveChanges = () => {
        console.log();
    }

    const cancelChanges = () => {
        navigation.goBack();
    }

    const logout = () => {
        console.log();
    }

    const loadUserInfo = useCallback(async () => {
        getUserInformation().then((result) => {
            const userInfo = result.data;
            userInfo.selectedAvatar = userInfo.avatarImage.charAt(15);
            setUser(userInfo);
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
                        <Text style={styles.userPropertyText}>{user!.firstName}</Text>
                        <TouchableOpacity style={styles.editPropertyButton}>
                            <Image
                                source={require('../../assets/profile_icons/edit_button_icon.png')}
                                style={styles.editIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lastName}>
                    <Text style={styles.boldText}>Apellidos:</Text>
                    <View style={styles.editPropertyContainer}>
                        <Text style={styles.userPropertyText}>{user!.lastName}</Text>
                        <TouchableOpacity style={styles.editPropertyButton}>
                            <Image
                                source={require('../../assets/profile_icons/edit_button_icon.png')}
                                style={styles.editIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.identificationNumber}>
                    <Text style={styles.boldText}>DNI:</Text>
                    <View style={styles.editPropertyContainer}>
                        <Text style={styles.userPropertyText}>{user!.identificationNumber}</Text>
                        <TouchableOpacity style={styles.editPropertyButton}>
                            <Image
                                source={require('../../assets/profile_icons/edit_button_icon.png')}
                                style={styles.editIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.avatar}>
                    <Text style={styles.boldText}>Avatar:</Text>
                    {user.selectedAvatar != '' && <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <AvatarItem
                            data={AVATAR_IMAGES_DATA}
                            selectedItem={user!.selectedAvatar}
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
                        onPress={logout}
                        title="Cerrar Sesión"
                        color="#E95656"></Button>
                </View>
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;

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
        marginTop: 10,
        marginEnd: 25,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5
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