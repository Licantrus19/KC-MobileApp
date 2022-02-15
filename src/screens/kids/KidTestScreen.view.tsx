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
        backgroundColor: '#f37c0e',
        caution: 'Una vez comenzada la prueba ya no podrá detenerla. Asegurese de tener un tiempo moderado',
        data: require('../../data/age-24/JSON-Communication_24_months.json')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        text: 'Motora Gruesa',
        imageUri: require('../../assets/test/gross_motor.png'),
        backgroundColor: '#1179a6',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: require('../../data/age-24/JSON-Fine-Motor_24_months.json')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        text: 'Motora Fina',
        imageUri: require('../../assets/test/fine_motor.png'),
        backgroundColor: '#fb2626',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: require('../../data/age-24/JSON-Gross-Motor_24_months.json')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        text: 'Resolución de Problemas',
        imageUri: require('../../assets/test/problem_solving.png'),
        backgroundColor: '#87029c',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: require('../../data/age-24/JSON-Problem-Solving_24_months.json')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        text: 'Socio-Individual',
        imageUri: require('../../assets/test/individual_social.png'),
        backgroundColor: '#0e972c',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: require('../../data/age-24/JSON-Socio-Individual_24_months.json')
    },
];

interface IScreenProps {
    navigation: any,
    route: any
}

const KidTestScreen: FC<IScreenProps> = ({ navigation, route }) => {

    const kidData = route.params ? route.params.kidData : {};

    const renderItem = ({ item }: { item: any }) => {
        return (
            <TestButton
                item={item}
                onPress={() => { navigation.navigate("TestInformation", { test: item }) }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerUser}>
                <View style={{ position: 'absolute', left: 15, alignItems: 'center' }}>
                    <Image
                        resizeMode='contain'
                        source={require("../../assets/avatars/avatar_1.png")}
                        style={styles.avatarImage}
                    />
                </View>
                <View style={styles.nameUser}>
                    <Label center size={22} color='white'>
                        {kidData ? kidData.firstname + ' ' + kidData.lastname : ''}
                    </Label>
                </View>
            </View>
            <View style={styles.headerTest}>
                <View style={styles.labelTest}>
                    <Label>
                        Test Psicomotor
                    </Label>
                </View>
                <View style={styles.labelAge}>
                    <Label color='primary'>
                        48 meses
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
    avatarImage: {
        width: 70,
        height: 70
    },
    headerUser: {
        width: '100%',
        flexDirection: 'row',
        height: 80,
        backgroundColor: colors["primary"],
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameUser: {
        width: '100%'
    },
    headerTest: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 20
    },
    labelTest: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    labelAge: {
        flex: 1,
        alignItems: 'flex-end'
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
