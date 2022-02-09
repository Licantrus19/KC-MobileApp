import React, { FC, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { KidItem, Container, Label } from "../../components";

interface IScreenProps {
    navigation: any
}

const KIDS_DATA = [
    {
        id: 'a',
        type: 1,
        data: {
            firstname: 'Pedro',
            lastname: 'Pachas Perez',
            age: '48 meses'
        }
    }
]

const mainKidItem = {
    id: 'abc',
    type: 2,
    data: {}
}

const KidsScreen: FC<IScreenProps> = ({ navigation }) => {

    const [kids, setKids] = useState([...KIDS_DATA, mainKidItem]);

    const addKid = () => {
        navigation.navigate('AddKidInformation');
    }

    const goToKidTest = (data: any) => {
        navigation.navigate('KidProfileTest', { kidData: data });
    }

    const renderKid = (item: any, index: number) => {
        return (
            <KidItem
                key={item.id}
                position={index}
                onPress={() => { item.type == 1 ? goToKidTest(item.data) : addKid() }}
                type={item.type}
                data={item.data}
            />
        )
    }

    return (
        <Container>
            <FlatList
                data={kids}
                renderItem={({ item, index }) => { return renderKid(item, index) }}
                keyExtractor={item => item.id}
                numColumns={2}

            />
        </Container>
    );
}

/* export default inject('sessionStore')(observer(KidsScreen)); */
export default KidsScreen;