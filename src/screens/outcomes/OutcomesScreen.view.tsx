import { useIsFocused } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { kidsWithQuestionnairesCompletedFromUser } from "../../api/kids.api";
import { Util } from "../../common/utils";
import { Container, Label } from "../../components";

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

const QuestionnairesCompleted: FC<IQuestionnaireProps> = ({ index, data }) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    return (
        <View>
            <TouchableOpacity onPress={toggleExpanded}>
                <View style={styles.headerQuestionnaire}>
                    <Text style={styles.headerTextQuestionnaire}>{'PS-0' + (index + 1) + ' ' + Util.getFormatedDate(data.updatedDate)}</Text>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed} align="center">
                <View style={styles.collapsedContent}>
                    <Text style={{ textAlign: 'center' }}>
                        This is a dummy text of Single Collapsible View
                    </Text>
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
            setKidSelected(kidsArray[0]);
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
            {kidSelected != '' && <Text style={styles.kidFullName}>{kidSelected.firstName + " " + kidSelected.lastName}</Text>}
            {kidSelected != '' && (kidSelected.questionnaires.length == 0 ?
                <Text>No se ha completado ningún cuestionario</Text> :

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

    },
    headerTextQuestionnaire: {

    },
    collapsedContent: {

    }
});