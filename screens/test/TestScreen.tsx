import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TestButton from './TestButton';

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


export default function TestScreen({navigation}: {navigation: any}) {

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

    const renderItem = ({item}: {item: any}) => {
        return (
            <TestButton
                item={item}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>Test Psicomotor</Text>
                <Text>48 meses</Text>
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
