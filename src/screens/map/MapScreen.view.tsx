import React, { FC, useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Label } from "../../components";

interface IScreenProps {

}

const MapScreen: FC<IScreenProps> = ({ }) => {

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: -12.0684717,
                    longitude: -77.0375371,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -12.0684717,
                        longitude: -77.0375371
                    }}
                    pinColor="black"
                >
                    <Callout>
                        <View>
                            <Text>CET ABC Kid's</Text>
                            <Text>Dirección: </Text>
                            <Text>Horario: </Text>
                        </View>
                    </Callout>
                </Marker>
                <Circle
                    center={{
                        latitude: -12.0684717,
                        longitude: -77.0375371
                    }}
                    radius={1000}
                />
            </MapView>
        </View>
    );
}

/* export default inject('sessionStore')(observer(MapScreen)); */
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
