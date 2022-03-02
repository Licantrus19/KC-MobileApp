import React, { FC, useState } from "react";
import {
    View,
    StatusBar,
    SafeAreaView,
    ViewStyle,
    StatusBarStyle,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Image,
    StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { blue100 } from "react-native-paper/lib/typescript/styles/colors";
import { colors } from "../../common/constants";

interface IAvatarItemProps {
    data?: any;
    selectedItem?: number;
}

const AvatarItem: FC<IAvatarItemProps> = ({ data, selectedItem }) => {

    const [selectedAvatar, setSelectedAvatar] = useState(selectedItem);

    return data.map((avatar: any) => {
        return (
            <View
                key={avatar.id}
                style={avatar.id != selectedAvatar ? styles.avatarBox : styles.avatarSelectedBox}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedAvatar(avatar.id)}>
                    <Image
                        resizeMode='contain'
                        style={styles.avatarImage}
                        source={avatar.imageUri}
                    ></Image>
                </TouchableOpacity>
            </View>
        );
    });
}

export default AvatarItem;

const styles = StyleSheet.create({
    avatarBox: {
        width: 150,
        height: 150,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        borderRadius: 5,
        shadowOpacity: 1,
        margin: 10,
        padding: 10
    },
    avatarSelectedBox: {
        width: 150,
        height: 150,
        elevation: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'blue',
        shadowOpacity: 1,
        margin: 10,
        padding: 10
    },
    avatarImage: {
        width: 130,
        height: 130,
    },
});