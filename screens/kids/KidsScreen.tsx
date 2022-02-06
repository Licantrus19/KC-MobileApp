import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function KidsScreen({navigation}: {navigation: any}) {

    const addKid = () => {
        navigation.navigate('AddKidsInformation');
    }

    return (
        <View>
            <Text>
                KidsScreen!
            </Text>
            <Button
                onPress={addKid}
                title="+"
                color="#5680E9">
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
