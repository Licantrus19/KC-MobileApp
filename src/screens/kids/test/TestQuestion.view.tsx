import React, { FC, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors } from "../../../common/constants";
import { Container, Label, MaterialButton } from "../../../components";

interface IScreenProps {
    route: any,
    navigation: any
}

const TestQuestion: FC<IScreenProps> = ({ route, navigation }) => {

    const test = route.params ? route.params.test : null;
    const index = route.params ? route.params.index : null;

    const [MAIN_STAGE, EXPLANATION_STAGE, CONTENT_STAGE] = [1, 2, 3];

    const [stage, setStage] = useState(MAIN_STAGE);

    //Call API
    useEffect(() => {

    }, []);

    //Handle Error
    useEffect(() => {

    }, []);

    const renderMainStage = () => {
        return <>
            <View style={[styles.card, { backgroundColor: test.backgroundColor }]}>
                <View style={{ marginTop: 10 }}>
                    <Label center size={22} color='white'>
                        Pregunta {index}
                    </Label>
                </View>
                {test.data.questions[index - 1].type === "select" && (
                    <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                        <Label center size={18} color='white' textStyle={{ textAlign: 'justify' }}>
                            {test.data.questions[index - 1].generalQuestion}
                        </Label>
                    </View>
                )}
                {test.data.questions[index - 1].type === "checklist" && (
                    <ScrollView style={{ marginTop: 15, marginHorizontal: 20, maxHeight: '55%' }}>
                        <Label center size={18} color='white' textStyle={{ textAlign: 'justify' }}>
                            {test.data.questions[index - 1].generalQuestion}
                        </Label>
                        <Label center size={18} color='white' textStyle={{ textAlign: 'justify' }}>
                            {test.data.questions[index - 1].generalQuestion}
                        </Label>
                        <Label center size={18} color='white' textStyle={{ textAlign: 'justify' }}>
                            {test.data.questions[index - 1].generalQuestion}
                        </Label>
                    </ScrollView>
                )}
                <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                    <MaterialButton
                        onPress={() => { }}
                        title="Ver Imagenes"
                        buttonColor="secondary"
                        titleStyle={{ color: test.backgroundColor }}
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                    {test.data.questions[index - 1].hasExplication && (
                        <MaterialButton
                            onPress={() => { setStage(EXPLANATION_STAGE) }}
                            title="Ver explicación"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                    )}
                    <MaterialButton
                        onPress={() => { index == test.data.questions.length ? navigation.navigate("ResultTest", { test: test }) : navigation.navigate("TestQuestion", { test: test, index: index + 1 }) }}
                        title="Siguiente Pregunta"
                        titleStyle={{ color: test.backgroundColor }}
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                </View>
            </View>
        </>
    }

    const renderExplanationStage = () => {
        return <>
            <View style={[styles.card, { backgroundColor: colors.backgroundGray }]}>
                <View style={{ marginTop: 10 }}>
                    <Label center size={22} color='white'>
                        Pregunta {index}
                    </Label>
                    <Label center size={18} color='white'>
                        (Explicación)
                    </Label>
                </View>
                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                    <Label center size={18} color='white' textStyle={{ textAlign: 'justify' }}>
                        {test.data.questions[index - 1].explication}
                    </Label>
                </View>
                <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                    <MaterialButton
                        onPress={() => { }}
                        title="Ver Imagenes"
                        buttonColor="secondary"
                        titleStyle={{ color: test.backgroundColor }}
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: "transparent" }} />
                    <MaterialButton
                        onPress={() => { setStage(MAIN_STAGE) }}
                        title="Ver pregunta"
                        buttonColor="secondary"
                        titleStyle={{ color: test.backgroundColor }}
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: "transparent" }} />
                    <MaterialButton
                        onPress={() => { index == test.data.questions.length ? navigation.navigate("ResultTest", { test: test }) : navigation.navigate("TestQuestion", { test: test, index: index + 1 }) }}
                        title="Siguiente Pregunta"
                        titleStyle={{ color: test.backgroundColor }}
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: "transparent" }} />
                </View>
            </View>
        </>
    }

    const renderContentStage = () => {

    }

    const renderStage = () => {
        switch (stage) {
            case MAIN_STAGE:
                return renderMainStage();
            case EXPLANATION_STAGE:
                return renderExplanationStage();
            case CONTENT_STAGE:
                return renderContentStage();
        }
    }

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
                {renderStage()}
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
    },
    card: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 30,
        borderRadius: 20
    }
});