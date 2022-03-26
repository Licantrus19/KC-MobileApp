import { inject, observer } from 'mobx-react';
import React, { useState, FC } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { registerUser } from '../../api/user.api';
import { AvatarItem } from '../../components';
import { ISessionStore } from '../../stores/interfaces';

interface IScreenProps {
    navigation: any,
    route: any,
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
]

const RegisterAvatar: FC<IScreenProps> = ({ navigation, route, sessionStore }) => {

    const user = route.params;

    const [avatarImage, setAvatarImage] = useState(1);

    const buildUserDTO = (user: any) => {
        const userDTO = {
            username: user.emailAddress,
            password: user.password,
            email: user.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            identificationNumber: user.identificationNumber,
            avatarImage: "avatar_profile_" + avatarImage + ".png"
        };
        return userDTO;
    }

    const register = () => {
        // create user
        const userDTO = buildUserDTO(user);
        console.log(userDTO);
        registerUser(userDTO).then((result) => {
            if (result.data.id != null) {
                // login user
                sessionStore.loginUser(userDTO.username, userDTO.password);
            } else {
                // show error message
                console.log('error');
                ToastAndroid.show('Server error', ToastAndroid.SHORT);
            }
        }).catch((error) => {
            console.log('error2');
            ToastAndroid.show('Server error', ToastAndroid.SHORT);
        });
    }

    const goBack = () => {
        navigation.goBack();
    }

    const selectAvatarImage = (val: any) => {
        setAvatarImage(val);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.boldText}>Avatar del usuario:</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <AvatarItem
                            data={AVATAR_IMAGES_DATA}
                            selectedItem={user.avatarImage}
                            onPress={selectAvatarImage}
                        />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.nextButton}>
                    <Button
                        onPress={register}
                        title="Registrar"
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

export default inject('sessionStore')(observer(RegisterAvatar));

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 25,
        fontSize: 18
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
