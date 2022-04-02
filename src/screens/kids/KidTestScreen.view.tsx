import { useIsFocused } from '@react-navigation/native';
import React, { useState, FC, useCallback, useEffect } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { questionnaireFromKid } from '../../api/kids.api';
import { colors } from '../../common/constants';
import { Util } from '../../common/utils';
import { Label } from '../../components';
import TestButton from './TestButton.view';

const asd = require('./test/test_questions/27_months/fine_motor');

const initialEvaluation = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        type: 'communication',
        text: 'Comunicación',
        imageUri: require('../../assets/test/communication.png'),
        backgroundColor: '#f37c0e',
        caution: 'Una vez comenzada la prueba ya no podrá detenerla. Asegurese de tener un tiempo moderado',
        data: {},
        status: 1,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        type: 'gross_motor',
        text: 'Motora Gruesa',
        imageUri: require('../../assets/test/gross_motor.png'),
        backgroundColor: '#1179a6',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: {},
        status: 1,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        type: 'fine_motor',
        text: 'Motora Fina',
        imageUri: require('../../assets/test/fine_motor.png'),
        backgroundColor: '#fb2626',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: {},
        status: 1,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        type: 'problem_solving',
        text: 'Resolución de Problemas',
        imageUri: require('../../assets/test/problem_solving.png'),
        backgroundColor: '#87029c',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: {},
        status: 1,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        type: 'individual_social',
        text: 'Socio-Individual',
        imageUri: require('../../assets/test/individual_social.png'),
        backgroundColor: '#0e972c',
        caution: 'En algunas pruebas se deberá interactuar con el menor y el aplicativo para el desarrollo de la pregunta.',
        data: {},
        status: 1,
    },
];

interface IScreenProps {
    navigation: any,
    route: any
}

const KidTestScreen: FC<IScreenProps> = ({ navigation, route }) => {

    const kidData = route.params ? route.params.kidData : {};

    const [evaluations, setEvaluations] = useState<any>();

    const isFocused = useIsFocused();

    const evaluationsAvailableForKid = useCallback(async () => {
        let evaluationStatus: any[] = [];
        let evaluationsAvailable: any[] = [];
        questionnaireFromKid(kidData.id).then((result) => {
            evaluationStatus = result.data.evaluations;
            evaluationsAvailable = initialEvaluation;
            evaluationStatus.forEach((evaluationStatusItem) => {
                const evaluationType = evaluationStatusItem.type;
                evaluationsAvailable.forEach((evaluationAvailable) => {
                    if (evaluationAvailable.type == evaluationType) {
                        evaluationAvailable.data = Util.fromAgeToQuestionnaire(kidData.months, evaluationType);
                        evaluationAvailable.status = evaluationStatusItem.value;
                    }
                });
            });

        }).finally(() => {
            setEvaluations(evaluationsAvailable);
        });
    }, [navigation, isFocused]);

    useEffect(() => {
        evaluationsAvailableForKid();
    }, [evaluationsAvailableForKid]);

    const renderItem = ({ item }: { item: any }) => {
        return (
            <TestButton
                item={item}
                onPress={() => { navigation.navigate("TestInformation", { test: item, kid: kidData.id }) }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerUser}>
                <View style={{ position: 'absolute', left: 15, alignItems: 'center' }}>
                    <Image
                        resizeMode='contain'
                        source={Util.avatarImage(kidData.avatarImage)}
                        style={styles.avatarImage}
                    />
                </View>
                <View style={styles.nameUser}>
                    <Label center size={22} color='white'>
                        {kidData ? kidData.firstName + ' ' + kidData.lastName : ''}
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
                        {kidData.months} meses
                    </Label>
                </View>
            </View>
            <View>
                <View style={styles.flatListView}>
                    <FlatList
                        data={evaluations}
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
