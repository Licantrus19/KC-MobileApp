import React, { FC, useCallback, useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { kidsFromUser } from "../../api/kids.api";
import { KidItem, Container, Label } from "../../components";
import { useIsFocused } from "@react-navigation/native";
import { Util } from "../../common/utils";

interface IScreenProps {
    navigation: any
}

const KidsScreen: FC<IScreenProps> = ({ navigation }) => {

    const [kids, setKids] = useState<any>();

    const isFocused = useIsFocused();

    const kidsFromUserArray = useCallback(async () => {
        let kidsArray: any[] = [];
        kidsFromUser().then((result) => {
            result.data.map((item: any) => {
                const kid = {
                    id: item.id,
                    type: 1,
                    data: {
                        firstName: item.firstName,
                        lastName: item.lastName,
                        avatarImage: item.avatarImage,
                        months: item.months
                    }
                };
                kidsArray.push(kid);
            });
        }).finally(() => {
            let kidsAddElement = {
                id: '000',
                type: 2,
                data: {
                    firstName: '',
                    lastName: '',
                    avatarImage: '',
                    months: 0
                }
            }
            kidsArray.push(kidsAddElement);
            setKids(kidsArray);
        });
    }, [navigation, isFocused]);

    useEffect(() => {
        kidsFromUserArray();
    }, [kidsFromUserArray]);

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