import React, { FC, useEffect, useState, useRef } from "react";
import { Text, StyleSheet, Image, View, FlatList, Animated } from 'react-native';
import { Container, Label, TipItem } from "../../components";

import { tips as TIPS_DATA_24 } from "./tips_24_30_months.json";
import { tips as TIPS_DATA_30 } from "./tips_30_36_months.json";
import { tips as TIPS_DATA_36 } from "./tips_36_48_months.json";
import { tips as TIPS_DATA_48 } from "./tips_24_30_months.json";

interface IScreenProps {
    navigation: any
}

const ResultsScreen: FC<IScreenProps> = ({ navigation }) => {

    const renderItem = ({ item }: { item: any }) => {
        return (
            <TipItem
                item={item}
            />
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    var randomNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    var TIPS_DATA_SELECTED, months;
    switch (randomNumber) {
        case 1: TIPS_DATA_SELECTED = TIPS_DATA_24; months = 24; break;
        case 2: TIPS_DATA_SELECTED = TIPS_DATA_30; months = 30; break;
        case 3: TIPS_DATA_SELECTED = TIPS_DATA_36; months = 36; break;
        case 4: TIPS_DATA_SELECTED = TIPS_DATA_48; months = 48; break;
        default: TIPS_DATA_SELECTED = TIPS_DATA_24; break;
    }

    const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    return (
        <View style={styles.container}>
            <Image style={styles.tipIcon} source={require('../../assets/tips/tips_icon.png')} />
            <Text style={styles.dayTip}>Tip del día</Text>
            <Text style={styles.ageTip}>Edad: {months} meses</Text>
            <View style={styles.flatListView}>
                <FlatList
                    data={TIPS_DATA_SELECTED}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={item => item.id.toString()}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                >
                </FlatList>
            </View>
        </View>
    );
}

export default ResultsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    tipIcon: {
        width: 108,
        height: 125,
        marginTop: 30,
        alignItems: 'center',
        resizeMode: 'contain'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    dayTip: {
        marginTop: 20,
        fontSize: 20
    },
    ageTip: {
        color: '#5680E9',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    flatListView: {
        marginTop: 40,
        flex: 3
    }
});