import { useIsFocused } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { kidsWithQuestionnairesCompletedFromUser } from "../../api/kids.api";
import { Util } from "../../common/utils";
import { Container, Label, MaterialButton } from "../../components";

interface IScreenProps {
    navigation: any
}

interface IKidAvatarItemProps {
    data?: any;
    selectedItem?: any;
    onPress: (val: any) => void,
}

interface IQuestionnaireProps {
    data?: any;
    index: number;
}

interface IEvaluationItemProps {
    data?: any;
}

const EvaluationItem: FC<IEvaluationItemProps> = ({ data }) => {

    let evaluationType = '';
    let evaluationDiagnosis = '';
    let evaluationDiagnosisColor = '';

    switch (data.type) {
        case 'communication': evaluationType = 'Comunicación'; break;
        case 'fine_motor': evaluationType = 'Motora-Gruesa'; break;
        case 'gross_motor': evaluationType = 'Motora-Fina'; break;
        case 'problem_solving': evaluationType = 'Resolución de Problemas'; break;
        case 'individual_social': evaluationType = 'Socio Individual'; break;
        default: break;
    }

    switch (data.rating) {
        case 1: evaluationDiagnosis = 'Se presenta riesgo'; evaluationDiagnosisColor = '#FF0000'; break;
        case 2: evaluationDiagnosis = 'Se presenta posible riesgo'; evaluationDiagnosisColor = '#C6A522'; break;
        case 3: evaluationDiagnosis = 'No se presenta posible riesgo'; evaluationDiagnosisColor = '#188422'; break;
        default: evaluationDiagnosis = 'Se presenta riesgo'; evaluationDiagnosisColor = '#FF0000'; break;
    }

    return (
        <View style={styles.evaluationContent}>
            <View style={styles.blueCircle}></View>
            <View style={styles.evaluationTypeContainer}>
                <Text style={styles.evaluationType}>{evaluationType}:</Text>
            </View>
            <View style={styles.evaluationDiagnosisContainer}>
                <Text style={[styleContainer(evaluationDiagnosisColor).evaluationType]}>
                    {evaluationDiagnosis}
                </Text>
            </View>
        </View>
    )
}

const QuestionnairesCompleted: FC<IQuestionnaireProps> = ({ index, data }) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const viewDetail = () => {
        console.log('view detail');
    }

    return (
        <View style={styles.headerQuestionnaire}>
            <TouchableOpacity onPress={toggleExpanded}>
                <View>
                    <Text style={styles.headerTextQuestionnaire}>{'PS-0' + (index + 1) + ' ' + Util.getFormatedDate(data.updatedDate)}</Text>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed} align="center">
                <View style={styles.collapsedContent}>
                    {data.evaluations.map((evaluation: any) => {
                        return (
                            <View
                                key={evaluation.id}>
                                <EvaluationItem
                                    data={evaluation} />
                            </View>
                        )
                    })}
                </View>
                <View style={styles.bottomButtons}>
                    <MaterialButton
                        onPress={viewDetail}
                        title="Detalle"
                        titleStyle={{ color: 'white', fontSize: 15 }}
                        buttonStyle={{ margin: 5, flex: 1, backgroundColor: "#5680E9", borderColor: "#5680E9" }} />
                    <MaterialButton
                        onPress={toggleExpanded}
                        title="Cerrar"
                        titleStyle={{ color: 'white', fontSize: 15 }}
                        buttonStyle={{ margin: 5, flex: 1, backgroundColor: "#FF0000", borderColor: "#FF0000" }} />
                </View>
            </Collapsible>
        </View>
    );
}

const KidAvatarItem: FC<IKidAvatarItemProps> = ({ data, selectedItem, onPress }) => {

    const [selectedAvatar, setSelectedAvatar] = useState(selectedItem);

    const handleChooseAvatarImage = (kid: any) => {
        setSelectedAvatar(kid.id)
        onPress(kid.id);
    }

    return data.map((kid: any) => {
        return (
            <View
                key={kid.id}
                style={kid.id != selectedAvatar ? styles.avatarNotSelected : styles.avatarSelected}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleChooseAvatarImage(kid)}>
                    <Image
                        resizeMode='contain'
                        style={styles.avatarImage}
                        source={Util.avatarImage(kid.avatarImage)}
                    ></Image>
                </TouchableOpacity>
            </View>
        );
    });
}

const OutcomesScreen: FC<IScreenProps> = ({ navigation }) => {

    const [kids, setKids] = useState<any>();

    const [kidIdSelected, setKidIdSelected] = useState<any>();

    const [kidSelected, setKidSelected] = useState<any>('');

    const isFocused = useIsFocused();

    const kidsFromUserArray = useCallback(async () => {
        let kidsArray: any[] = [];
        kidsWithQuestionnairesCompletedFromUser().then((result) => {
            result.data.map((item: any) => {
                const kid = {
                    id: item.id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    avatarImage: item.avatarImage,
                    months: item.months,
                    questionnaires: item.questionnaires
                };
                kidsArray.push(kid);
            });
        }).finally(() => {
            setKids(kidsArray);
            if (kidsArray.length > 0) setKidSelected(kidsArray[0]);
        });
    }, [navigation, isFocused]);

    useEffect(() => {
        kidsFromUserArray();
    }, [kidsFromUserArray]);

    const selectKid = (val: any) => {
        setKidSelected(kids.find((x: any) => x.id === val));
    }

    return (
        <View style={styles.container}>
            {kidSelected != '' && <ScrollView
                horizontal={true}
                style={styles.scrollViewImages}
                showsHorizontalScrollIndicator={false}>
                <KidAvatarItem
                    data={kids}
                    selectedItem={kidSelected}
                    onPress={selectKid}
                />
            </ScrollView>}
            {kidSelected == '' ? <Text style={styles.errorMessage}>Aún no tiene un menor registrado</Text> : <Text style={styles.kidFullName}>{kidSelected.firstName + " " + kidSelected.lastName}</Text>}
            {kidSelected != '' && (kidSelected.questionnaires.length == 0 ?
                <Text style={styles.errorMessage}>No se ha completado ningún cuestionario</Text> :

                kidSelected.questionnaires.map((questionnaire: any, index: number) => {
                    return (
                        <View
                            key={questionnaire.id}>
                            <QuestionnairesCompleted
                                index={index}
                                data={questionnaire}
                            />
                        </View>
                    )
                })
            )}
        </View>
    )
}

/* export default inject('sessionStore')(observer(OutcomesScreen)); */
export default OutcomesScreen;

const styleContainer = (textColor: any) => StyleSheet.create({
    evaluationType: {
        color: textColor,
        fontSize: 15
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewImages: {
        flexGrow: 0
    },
    kidFullName: {
        paddingStart: 15,
        paddingTop: 10,
        fontSize: 19,
        color: '#5680E9'
    },
    avatarNotSelected: {
        width: 50,
        height: 50,
        paddingStart: 10,
        paddingEnd: 10
    },
    avatarSelected: {
        width: 50,
        height: 50,
        paddingStart: 10,
        paddingEnd: 10
    },
    avatarImage: {
        width: 40,
        height: 40,
    },
    headerQuestionnaire: {
        marginStart: 15,
        marginEnd: 15,
        paddingStart: 10,
        borderColor: '#5680E9',
        borderRadius: 5,
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 5,
    },
    headerTextQuestionnaire: {
        fontSize: 18
    },
    collapsedContent: {
    },
    evaluationContent: {
        flexDirection: 'row',
        marginTop: 10
    },
    blueCircle: {
        marginTop: 6,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#5680E9',
    },
    evaluationTypeContainer: {
        paddingStart: 20,
        flex: 3
    },
    evaluationType: {
        fontSize: 18
    },
    evaluationDiagnosisContainer: {
        paddingStart: 20,
        paddingEnd: 20,
        flex: 2
    },
    bottomButtons: {
        flexDirection: 'row',
        margin: 10
    },
    errorMessage: {
        fontSize: 18,
        padding: 5,
        paddingStart: 20
    }
});