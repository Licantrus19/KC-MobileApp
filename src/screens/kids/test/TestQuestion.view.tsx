import React, { FC, useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import { colors } from "../../../common/constants";
import { Container, Label, MaterialButton } from "../../../components";
import Lightbox from 'react-native-lightbox-v2';
import CheckBox from "@react-native-community/checkbox";
import { completeQuestionnaire } from "../../../api/kids.api";
import { Util } from "../../../common/utils";

interface IScreenProps {
    route: any,
    navigation: any
}

const TestQuestion: FC<IScreenProps> = ({ route, navigation }) => {

    const test = route.params ? route.params.test : null;
    const index = route.params ? route.params.index : null;
    const max = route.params ? route.params.max : null;
    const kid = route.params ? route.params.kid : null;
    const answers = route.params ? route.params.answers : null;

    const result = index == 1 ? 0 : route.params.points;

    const [MAIN_STAGE, EXPLANATION_STAGE, CONTENT_STAGE] = [1, 2, 3];

    const [stage, setStage] = useState(MAIN_STAGE);

    const [selectedImage, setSelectedImage] = useState(undefined);
    const [customResize, setCustomResize] = useState<"center" | "stretch" | "cover" | "contain" | "repeat" | undefined>('cover');

    const [selectedImageCheckbox, setSelectedImageCheckbox] = useState(undefined);

    const [selectedList, setSelectedList] = useState(
        test.data.questions[index - 1].type === "checklist" ?
            new Array(test.data.questions[index - 1].options.length).fill(false)
            : new Array(0).fill(false)
    );

    const [MIN_SCORE, MAX_SCORE] = [0, 60];

    //Call API
    useEffect(() => {
        clearStates();
    }, [index]); //cada vez que cambia de pregunta

    const clearStates = () => {
        setStage(MAIN_STAGE);
        setSelectedList(
            test.data.questions[index - 1].type === "checklist" ?
                new Array(test.data.questions[index - 1].options.length).fill(false)
                : new Array(0).fill(false)
        );
    }

    const handleSelection = (pos: any) => {
        const temp = selectedList.map((item, index) => {
            return index === pos ? !item : item;
        });
        setSelectedList(temp);
    }

    const endTest = (result: any) => {
        const limits = Util.getRatingLimits(kid.months, test.type);
        let rating = 0;

        console.log(limits);

        if (result > MIN_SCORE && result < limits.one) { //1 star
            console.log(`${MIN_SCORE} < ${result} < ${limits.one}`);
            rating = 1;
        } else if (result > limits.one && result <= limits.second) { //2 stars
            console.log(`${limits.one} < ${result} < ${limits.second}`);
            rating = 2;
        } else if (result > limits.second && result <= MAX_SCORE) { //3 stars
            console.log(`${limits.second} < ${result} < ${MAX_SCORE}`);
            rating = 3;
        }

        const body = {
            type: test.type,
            score: result,
            answers: JSON.stringify(answers),
            rating
        }

        completeQuestionnaire(kid.id, body).then((result) => {
            if (result) {
                console.log(result.data);
            }
        }).finally(() => {
            ToastAndroid.show('Test Completado con éxito', ToastAndroid.SHORT);
            navigation.navigate("ResultTest", { test: test, result, max, kid, rating })
        })
    }

    const nextQuestion = (points?: any, myAnswer?: any) => {
        let answersNum = 0;
        let otherPoints = 0;
        let tempAnswer = {
            questionText: test.data.questions[index - 1].generalQuestion,
            questionNumber: index,
            questionAnswer: ' '
        }
        if (myAnswer) {
            answers.push(myAnswer);
        } else {
            if (test.data.questions[index - 1].type === "checklist") {
                answersNum = selectedList.filter((i) => { return i }).length;
                if (answersNum == 0) {
                    otherPoints = 0;
                    tempAnswer.questionAnswer = 'No';
                } else if (answersNum < test.data.questions[index - 1].rangeAnswer) {
                    otherPoints = 5;
                    tempAnswer.questionAnswer = 'A veces';
                } else if (answersNum >= test.data.questions[index - 1].rangeAnswer) {
                    otherPoints = 10;
                    tempAnswer.questionAnswer = 'Sí';
                }
            }
            answers.push(tempAnswer);
        }

        index == test.data.questions.length
            ? endTest(points ? points : otherPoints)
            : navigation.navigate("TestQuestion", { test: test, index: index + 1, points: points ? points : otherPoints, max, kid, answers })
    }

    const answerAction = (pos: any, text: string) => {
        const points = test.data.questions[index - 1].answer[pos] ? test.data.questions[index - 1].answer[pos].points : 0;
        let myAnswer = {
            questionText: test.data.questions[index - 1].generalQuestion,
            questionNumber: index,
            questionAnswer: text
        }
        nextQuestion(result + points, myAnswer);
    }

    const renderMainStage = () => {
        return <>
            <View style={[styles.card, { backgroundColor: test.backgroundColor }]}>
                <View style={{ marginTop: 10 }}>
                    <Label center size={22} color='white'>
                        Pregunta {index}
                    </Label>
                </View>
                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                    <Label center size={16} color='white' textStyle={{ textAlign: 'justify' }}>
                        {test.data.questions[index - 1].generalQuestion}
                    </Label>
                </View>
                {test.data.questions[index - 1].type === "checklist" && (
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 5, marginHorizontal: 20, maxHeight: '43%' }}>
                        {test.data.questions[index - 1].options.map((item: any, pos: any) => {
                            return <View key={pos} style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <View>
                                    <CheckBox
                                        value={selectedList[pos]}
                                        onValueChange={() => { handleSelection(pos); }}
                                        tintColors={{ true: 'black', false: 'white' }}
                                        style={{ borderRadius: 50 }}
                                    />
                                </View>
                                <View style={{ flex: 6 }}>
                                    <Label center size={18} color='white' textStyle={{ textAlign: 'justify' }}>
                                        {item.value}
                                    </Label>
                                </View>
                                <Lightbox
                                    onOpen={() => {
                                        setSelectedImageCheckbox(item.id);
                                    }}
                                    willClose={() => {
                                        setCustomResize('cover');
                                        setSelectedImageCheckbox(undefined);
                                    }}
                                    underlayColor="white">
                                    <>
                                        {!selectedImageCheckbox && (
                                            <Image
                                                style={{ height: 20, width: 20, }}
                                                source={require("../../../assets/icons/picture-icon.png")}
                                            />
                                        )}
                                        {selectedImageCheckbox && (
                                            <Image
                                                resizeMode={'center'}
                                                style={{ width: 300, height: 300, alignSelf: 'center' }}
                                                source={test.data.questions[index - 1].imageUrls[selectedImageCheckbox - 1].url} />
                                        )}
                                    </>
                                </Lightbox>
                            </View>
                        })}
                    </ScrollView>
                )}
                <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                    {test.data.questions[index - 1].type !== "checklist" && (
                        <MaterialButton
                            onPress={() => { setStage(CONTENT_STAGE) }}
                            title="Ver Imágenes"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                    )}
                    {test.data.questions[index - 1].hasExplication && test.data.questions[index - 1].type !== "checklist" && (
                        <MaterialButton
                            onPress={() => { setStage(EXPLANATION_STAGE) }}
                            title="Ver explicación"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                    )}
                    <MaterialButton
                        onPress={() => { nextQuestion() }}
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
                        onPress={() => { setStage(CONTENT_STAGE) }}
                        title="Ver Imágenes"
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

    const renderGallery = (images: any) => {
        let maxlength = images.length > 4 ? 4 : images.length
        if (images.length <= 2) {
            return <>
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    {images.map((i: any) => {
                        return (
                            <Lightbox
                                key={i.id}
                                onOpen={() => {
                                    setCustomResize('contain');
                                    setSelectedImage(i);
                                }}
                                willClose={() => {
                                    setCustomResize('cover');
                                    setSelectedImage(undefined);
                                }}
                                underlayColor="white">
                                <>
                                    {!selectedImage && (
                                        <Image
                                            resizeMode={customResize}
                                            style={{ width: 150, height: 90 }}
                                            source={i.url} />
                                    )}
                                    {selectedImage && (
                                        <Image
                                            resizeMode={customResize}
                                            style={{ width: Dimensions.get('window').width, height: Dimensions.get('screen').height * 0.9 }}
                                            source={i.url} />
                                    )}
                                </>
                            </Lightbox>
                        )
                    })}
                </View>
            </>
        } else {
            if (images.length > 2) {
                return <>
                    <View style={{ flexDirection: "row", justifyContent: 'center', marginBottom: 10 }}>
                        {images.slice(0, 2).map((i: any) => {
                            return (
                                <Lightbox
                                    key={i.id}
                                    style={{ marginHorizontal: 5 }}
                                    onOpen={() => {
                                        setCustomResize('contain');
                                        setSelectedImage(i);
                                    }}
                                    willClose={() => {
                                        setCustomResize('cover');
                                        setSelectedImage(undefined);
                                    }}
                                    underlayColor="white">
                                    <>
                                        {!selectedImage && (
                                            <Image
                                                resizeMode={customResize}
                                                style={{ width: 150, height: 90 }}
                                                source={i.url} />
                                        )}
                                        {selectedImage && (
                                            <Image
                                                resizeMode={customResize}
                                                style={{ width: Dimensions.get('window').width, height: Dimensions.get('screen').height * 0.9 }}
                                                source={i.url} />
                                        )}
                                    </>
                                </Lightbox>
                            )
                        })}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                        {images.slice(2, maxlength).map((i: any) => {
                            return (
                                <Lightbox
                                    key={i.id}
                                    style={{ marginHorizontal: 5 }}
                                    onOpen={() => {
                                        setCustomResize('contain');
                                        setSelectedImage(i);
                                    }}
                                    willClose={() => {
                                        setCustomResize('cover');
                                        setSelectedImage(undefined);
                                    }}
                                    underlayColor="white">
                                    <>
                                        {!selectedImage && (
                                            <Image
                                                resizeMode={customResize}
                                                style={{ width: 150, height: 90 }}
                                                source={i.url} />
                                        )}
                                        {selectedImage && (
                                            <Image
                                                resizeMode={customResize}
                                                style={{ width: Dimensions.get('window').width, height: Dimensions.get('screen').height * 0.9 }}
                                                source={i.url} />
                                        )}
                                    </>
                                </Lightbox>
                            )
                        })}
                    </View>
                </>
            }
        }
    }

    const renderContentStage = () => {
        return <>
            <View style={[styles.card, { backgroundColor: test.backgroundColor }]}>
                <View style={{ marginTop: 10 }}>
                    <Label center size={22} color='white'>
                        Pregunta {index}
                    </Label>
                </View>

                <View style={{ marginTop: 15, width: '80%', alignSelf: 'center', maxHeight: '45%' }}>
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        {renderGallery(test.data.questions[index - 1].imageUrls)}
                    </View>
                </View>

                <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '80%' }}>
                        <MaterialButton
                            onPress={() => { answerAction(0, "Sí") }}
                            title="Sí"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, flex: 1, backgroundColor: "white", borderColor: test.backgroundColor }} />
                        <MaterialButton
                            onPress={() => { answerAction(1, "A veces") }}
                            title="A veces"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, flex: 10, marginHorizontal: 10, backgroundColor: "white", borderColor: test.backgroundColor }} />
                        <MaterialButton
                            onPress={() => { answerAction(2, "No") }}
                            title="No"
                            buttonColor="secondary"
                            titleStyle={{ color: test.backgroundColor }}
                            buttonStyle={{ marginVertical: 5, flex: 1, backgroundColor: "white", borderColor: test.backgroundColor }} />
                    </View>
                    <MaterialButton
                        onPress={() => { setStage(MAIN_STAGE) }}
                        title="Ver pregunta"
                        buttonColor="secondary"
                        titleStyle={{ color: test.backgroundColor }}
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                    <MaterialButton
                        onPress={() => { nextQuestion() }}
                        title="Siguiente Pregunta"
                        titleStyle={{ color: test.backgroundColor }}
                        buttonStyle={{ marginVertical: 5, width: '80%', backgroundColor: "white", borderColor: test.backgroundColor }} />
                </View>
            </View>
        </>
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