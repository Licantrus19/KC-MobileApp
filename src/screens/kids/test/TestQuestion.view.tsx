import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../../common/constants";
import { Container, Label, MaterialButton } from "../../../components";

interface IScreenProps {
    route: any,
    navigation: any
}

const TestQuestion: FC<IScreenProps> = ({ route, navigation }) => {

    const test = route.params ? route.params.test : null;
    const index = route.params ? route.params.index : null;


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
                        <Label center size={22} color='white'>
                            Pregunta {index}
                        </Label>
                    </View>
                    <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                        <Label center size={18} color='white' textStyle={{ textAlign: 'justify' }}>
                            {test.data.questions[index - 1].question}
                        </Label>
                    </View>
                    <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                        <MaterialButton
                            onPress={() => { }}
                            title="Ver Imagenes"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                        <MaterialButton
                            onPress={() => { }}
                            title="Ver explicación"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                        <MaterialButton
                            onPress={() => { index == test.data.questions.length ? navigation.navigate("ResultTest", { test: test }) : navigation.navigate("TestQuestion", { test: test, index: index + 1 }) }}
                            title="Siguiente Pregunta"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                    </View>
                </View>
            </Container>
        </>
    )
}

/* export default inject('sessionStore')(observer(OutcomesScreen)); */
export default TestQuestion;

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