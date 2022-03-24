import React, { FC } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Label } from '..';
import { colors, fonts } from '../../common/constants';
import { Util } from '../../common/utils';

interface IComponentProps {
    width?: number | string,
    position?: number,
    onPress: () => void,
    type?: number,
    data?: any
}

const KidItem: FC<IComponentProps> = ({ width = '50%', position = 1, onPress, type = 1, data }) => {

    const renderNewKid = () => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.buttonContainer}>
                <View>
                    <Image
                        source={require('../../assets/icons/add_icon.png')}
                        style={styles.image}
                    />
                    <Label center color='white' size={16}>
                        Añadir
                    </Label>
                </View>
            </TouchableOpacity>
        )
    }

    const renderKidAvatar = (data: any) => {
        return (
            <View style={{ width: '50%', height: 270 }}>
                <View style={[styles.itemAvatarContainer, { alignItems: !(position % 2) ? 'flex-start' : 'flex-end' }]}>
                    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.avatarContainer}>
                        <View style={{ width: '80%', height: '85%' }}>
                            <Image
                                resizeMode='stretch'
                                source={Util.avatarImage(data.avatarImage)}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 40 }}>
                    <Label size={13}>
                        Nombres: {data.firstName}
                    </Label>
                    <Label size={13}>
                        Apellidos: {data.lastName}
                    </Label>
                    <Label size={13}>
                        Edad: {data.months} meses
                    </Label>
                </View>
            </View>
        )
    }

    return (
        <>
            {type == 1 && renderKidAvatar(data)}
            {
                type == 2 && (
                    <View style={[styles.itemContainer, { alignItems: !(position % 2) ? 'flex-start' : 'flex-end' }]}>
                        {type == 2 && renderNewKid()}
                    </View>
                )
            }
        </>
    )
}

export default KidItem;

const styles = StyleSheet.create({
    itemAvatarContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center'
    },
    itemContainer: {
        width: '50%',
        height: 200,
        justifyContent: 'center'
    },
    avatarContainer: {
        marginHorizontal: 20,
        width: '75%',
        height: '85%',
        backgroundColor: colors["white"],
        borderColor: colors["primary"],
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    buttonContainer: {
        marginHorizontal: 20,
        width: '75%',
        height: '85%',
        backgroundColor: colors["primary"],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    image: {
        width: 80,
        height: 80,
        margin: 10
    }
});
