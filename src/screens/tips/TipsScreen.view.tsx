import React, { FC, useEffect, useState, useRef } from "react";
import { Text, StyleSheet, Image, View, FlatList, Animated } from 'react-native';
import { Container, Label, TipItem } from "../../components";

const TIPS_DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      text: '1. Para practicar la escritura con su niña(o), escriba los nombres de amigos, juguetes, o parientes en una hoja. Puede ser que al principio su niña necesite trazar las letras de los nombres por encima. Asegúrese de escribir usando letra de molde grande',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      text: '2. Para practicar la escritura con su niña(o), escriba los nombres de amigos, juguetes, o parientes en una hoja. Puede ser que al principio su niña necesite trazar las letras de los nombres por encima. Asegúrese de escribir usando letra de molde grande',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      text: '3. Para practicar la escritura con su niña(o), escriba los nombres de amigos, juguetes, o parientes en una hoja. Puede ser que al principio su niña necesite trazar las letras de los nombres por encima. Asegúrese de escribir usando letra de molde grande',
    },
  ];
  

interface IScreenProps {

}

const ResultsScreen: FC<IScreenProps> = ({  }) => {

    const renderItem = ({item}: {item: any}) => {
        return (
            <TipItem
                item={item}
            />
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({viewableItems}: {viewableItems: any}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    return (
        <View style={styles.container}>
            <Image style={styles.tipIcon} source={require('../../assets/tips/tips_icon.png')}/>
            <Text style={styles.dayTip}>Tip del día</Text>
            <Text style={styles.ageTip}>Edad: 48 meses</Text>
            <View style={styles.flatListView}>
                <FlatList
                data={TIPS_DATA}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={item => item.id}
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
    },
    tipIcon: {
        width: 172,
        height: 200,
        marginTop: 30,
        alignItems: 'center',
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
        fontSize: 20
    },
    flatListView: {
        marginTop: 40,
        flex: 3
    }
});