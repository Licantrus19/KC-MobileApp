import React, { FC, useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Label } from "../../components";
import mapsCET from "./MapCET.json";

interface IScreenProps {

}

const stimulationCenters = mapsCET;

const stimulationCentersView = stimulationCenters.map((stimulationCenter) => {
    return (
        <View
            key={stimulationCenter.id}>
            <Marker
                coordinate={{
                    latitude: stimulationCenter.latitude,
                    longitude: stimulationCenter.longitude
                }}
                pinColor="black"
            >
                <Callout>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{stimulationCenter.name}</Text>
                        <Text>Dirección: {stimulationCenter.address}</Text>
                        <Text>Horario: {stimulationCenter.officeHours}</Text>
                        <Text>Teléfono: {stimulationCenter.phone}</Text>
                    </View>
                </Callout>
            </Marker>
            <Circle
                center={{
                    latitude: stimulationCenter.latitude,
                    longitude: stimulationCenter.longitude
                }}
                radius={500}
            />
        </View>
    )
});

const MapScreen: FC<IScreenProps> = ({ }) => {

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: -12.0684717,
                    longitude: -77.0375371,
                    latitudeDelta: 0.1922,
                    longitudeDelta: 0.1421,
                }}
            >
                {stimulationCentersView}
            </MapView>
        </View>
    );
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: 100,
        height: 100
    }
});
