import React, { useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default function MapsScreen() {

    return (
        <View>
            <Text>
                <MapView style={styles.map}
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
                    />
                </MapView>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
});
