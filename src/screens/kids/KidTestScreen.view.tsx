import React, { useState, FC } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../common/constants';
import { Label } from '../../components';
import TestButton from './TestButton.view';

const TEST_DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'Comunicación',
        imageUri: require('../../assets/test/communication.png'),
        backgroundColor: '#f37c0e'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        text: 'Motora Gruesa',
        imageUri: require('../../assets/test/gross_motor.png'),
        backgroundColor: '#1179a6'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        text: 'Motora Fina',
        imageUri: require('../../assets/test/fine_motor.png'),
        backgroundColor: '#fb2626'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        text: 'Resolución de Problemas',
        imageUri: require('../../assets/test/problem_solving.png'),
        backgroundColor: '#87029c'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        text: 'Socio-Individual',
        imageUri: require('../../assets/test/individual_social.png'),
        backgroundColor: '#0e972c'
    },
];

interface IScreenProps {
    navigation: any,
    route: any
}

const KidTestScreen: FC<IScreenProps> = ({ navigation, route }) => {

    const kidData = route.params ? route.params.kidData : {};

    const comunicationTest = () => {
        console.log();
    }

    const grossMotorTest = () => {
        console.log();
    }

    const fineMotorTest = () => {
        console.log();
    }

    const problemSolvingTest = () => {
        console.log();
    }

    const individualSocialTest = () => {
        console.log();
    }

    const renderItem = ({ item }: { item: any }) => {
        return (
            <TestButton
                item={item}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', flexDirection: 'row', height: 80, backgroundColor: colors["primary"], alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ position: 'absolute', left: 15, alignItems: 'center' }}>
                    <Image
                        resizeMode='contain'
                        source={require("../../assets/avatars/avatar_1.png")}
                        style={{ width: 70, height: 70 }}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <Label center size={22} color="white">
                        {kidData ? kidData.firstname + ' ' + kidData.lastname : ''}
                    </Label>
                </View>
            </View>
            <View style={{ width: '90%', flexDirection: 'row', alignSelf: 'center', marginVertical: 20 }}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Label>
                        Test Psicomotor
                    </Label>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Label color='primary'>
                        Edad en meses
                    </Label>
                </View>
            </View>
            <View>
                <View style={styles.flatListView}>
                    <FlatList
                        data={TEST_DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    ></FlatList>
                </View>
            </View>
        </View>
    );
}

export default KidTestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginTop: 40,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18
    },
    flatListView: {

    }
});
