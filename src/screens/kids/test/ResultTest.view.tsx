import React, { FC, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../../common/constants";
import { Container, Label, MaterialButton } from "../../../components";

interface IScreenProps {
    route: any,
    navigation: any
}

const ResultTest: FC<IScreenProps> = ({ route, navigation }) => {

    const test = route.params ? route.params.test : null;
    const result = route.params ? route.params.result : 0;
    const rating = route.params ? route.params.rating : 1;
    const MAX_STARTS = 3;
    //Call API
    useEffect(() => {

    }, []);

    //Handle Error
    useEffect(() => {

    }, []);

    return (
        <>
            <Container>
                <View style={[styles.headerTest, { backgroundColor: test.backgroundColor }]}>
                    <View style={styles.testName}>
                        <Label center size={27} color='white'>
                            {test ? test.text : 'Comunicación'}
                        </Label>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: test.backgroundColor, marginVertical: 10, marginHorizontal: 30, borderRadius: 20 }}>
                    <View style={{ marginTop: 10 }}>
                        <Label center size={25} color='white' textStyle={{ fontWeight: 'bold' }}>
                            Resultados
                        </Label>
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 40, marginTop: 45 }}>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Label center size={25} color='white' textStyle={{ fontWeight: 'bold' }}>
                                Puntaje:
                            </Label>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Label center size={25} textStyle={{ color: "yellow", fontWeight: 'bold' }}>
                                {result ? result : '0'}
                            </Label>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 40, marginTop: 45, justifyContent: 'center' }}>
                        {Array(rating).fill(true).map((t, index) => {
                            return (
                                <View key={index} style={{ marginHorizontal: 10 }}>
                                    <Image
                                        source={require('../../../assets/icons/yellow_star.png')}
                                        style={{ width: 80, height: 80 }}
                                    />
                                </View>
                            )
                        })}
                        {Array(MAX_STARTS - rating).fill(true).map((t, index) => {
                            return (
                                <View key={index+3} style={{ marginHorizontal: 10 }}>
                                    <Image
                                        source={require('../../../assets/icons/white_star.png')}
                                        style={{ width: 80, height: 80 }}
                                    />
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                        <MaterialButton
                            onPress={() => { navigation.navigate("Kids") }}
                            title="Salir"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                    </View>
                </View>
            </Container>
        </>
    )
}

/* export default inject('sessionStore')(observer(OutcomesScreen)); */
export default ResultTest;

const styles = StyleSheet.create({
    headerTest: {
        width: '100%',
        height: 80,
        backgroundColor: colors["primary"],
        alignItems: 'center',
        justifyContent: 'center'
    },
    testName: {
        width: '100%'
    }
});