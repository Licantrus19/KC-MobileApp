import React, { useState, FC } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { addKid } from '../../../api/kids.api';
import { AvatarItem } from '../../../components';

interface IScreenProps {
    navigation: any,
    route: any
}

const AVATAR_IMAGES_DATA: any = [
    {
        id: 1,
        imageUri: require('../../../assets/avatars/kids/avatar_kid_1.png')
    },
    {
        id: 2,
        imageUri: require('../../../assets/avatars/kids/avatar_kid_2.png')
    },
    {
        id: 3,
        imageUri: require('../../../assets/avatars/kids/avatar_kid_3.png')
    },
    {
        id: 4,
        imageUri: require('../../../assets/avatars/kids/avatar_kid_4.png')
    },
    {
        id: 5,
        imageUri: require('../../../assets/avatars/kids/avatar_kid_5.png')
    },
    {
        id: 6,
        imageUri: require('../../../assets/avatars/kids/avatar_kid_6.png')
    }
]

const AddKidAvatarScreen: FC<IScreenProps> = ({ navigation, route }) => {

    const [avatarImage, setAvatarImage] = useState(1);

    const goBack = () => {
        console.log();
        navigation.navigate('AddKidInformation');
    }

    const kid = route.params;

    const buildKidDTO = (kid: any) => {
        const kidDTO = {
            firstName: kid.firstName,
            lastName: kid.lastName,
            identificationNumber: kid.identificationNumber,
            birthdate: kid.birthDate,
            gender: kid.gender,
            relationship: kid.relationship,
            avatarImage: "avatar_kid_" + avatarImage + ".png"
        };
        return kidDTO;
    }

    const registerKid = () => {
        // create kid
        const kidDTO = buildKidDTO(kid);

        addKid(kidDTO).then((result) => {
            if (result.data != null) {
                // go back to kids page
                navigation.navigate('Kids');
            } else {
                // show error message
            }
        });
    }

    const selectAvatarImage = (val: any) => {
        setAvatarImage(val);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.boldText}>Avatar del menor:</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <AvatarItem
                            data={AVATAR_IMAGES_DATA}
                            selectedItem={kid.avatarImage}
                            onPress={selectAvatarImage}
                        />
                    </ScrollView>
                </View>
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

export default AddKidAvatarScreen;

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
