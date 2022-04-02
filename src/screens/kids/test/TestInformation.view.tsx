import React, { FC, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../../common/constants";
import { Container, Label, MaterialButton } from "../../../components";

interface IScreenProps {
    route: any,
    navigation: any
}

const TestInformation: FC<IScreenProps> = ({ route, navigation }) => {

    const test = route.params ? route.params.test : null;
    const kid = route.params ? route.params.kid : null;

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
                <View style={{ marginHorizontal: 40, height: '33%' }}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        resizeMode={"contain"}
                        source={test.imageUri}
                    />
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 40, marginTop: 5 }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Label center size={15} color='black'>
                            Cantidad de Preguntas:
                        </Label>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Label center size={15} textStyle={{ color: test.backgroundColor, fontWeight: 'bold' }}>
                            {test ? test.data.questions.length : '1'}
                        </Label>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 40, marginTop: 5 }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Label center size={15} color='black'>
                            Tiempo estimado:
                        </Label>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', }}>
                        <Label center size={15} textStyle={{ color: test.backgroundColor, fontWeight: 'bold' }}>
                            15 min
                        </Label>
                    </View>
                </View>

                <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '80%', marginVertical: 15 }}>
                        <Label center size={13} color={'black'}>
                            {test ? test.caution : 'Test'}
                        </Label>
                    </View>
                    <MaterialButton
                        onPress={() => { navigation.navigate("TestQuestion", { index: 1, test: test, max: test.data.questions.length * 10, kid }) }}
                        title="Empezar"
                        buttonColor="secondary"
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: test.backgroundColor, borderColor: test.backgroundColor }} />
                    <MaterialButton
                        onPress={() => { navigation.navigate("KidProfileTest") }}
                        title="Cancelar"
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: test.backgroundColor, borderColor: test.backgroundColor }} />
                </View>
            </Container>
        </>
    )
}

/* export default inject('sessionStore')(observer(OutcomesScreen)); */
export default TestInformation;

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