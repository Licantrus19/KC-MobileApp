import React, { FC } from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts } from '../../common/constants';
import { Button as ButtonPaper } from 'react-native-paper';

interface IComponentProps {
    titleSize?: number,
    font?: 'regular' | 'medium' | 'bold' | 'semibold',
    buttonColor?: 'primary' | 'black' | 'red' | 'secondary' | 'gray' | 'white',
    titleColor?: 'primary' | 'black' | 'red' | 'secondary' | 'gray' | 'white',
    type?: 'contained' | 'outlined',
    center?: boolean,
    outlined?: boolean,
    title?: string,
    onPress: () => void,
    titleStyle?: TextStyle,
    buttonStyle?: ViewStyle,
    width?: any,
    height?: any
}

const MaterialButton: FC<IComponentProps> =
    ({
        titleSize = 15,
        titleColor = 'white',
        buttonColor = 'primary',
        font = 'regular',
        center = false,
        title = '',
        outlined = false,
        onPress,
        titleStyle,
        buttonStyle,
        width = '100%',
        ...props
    }) => {

        const ButtonStyle: ViewStyle = {
            backgroundColor: !outlined ? colors[buttonColor] : colors[titleColor],
            borderColor: colors[buttonColor],
            borderWidth: 0.8,
            width
        }

        const TitleStyle: TextStyle = {
            fontSize: titleSize,
            color: !outlined ? colors[titleColor] : colors[buttonColor],
            fontFamily: fonts[font]
        }

        return (
            <>
                {
                    <ButtonPaper
                        style={[ButtonStyle, buttonStyle]}
                        labelStyle={[TitleStyle, titleStyle]}
                        onPress={onPress}>
                        {title}
                    </ButtonPaper>
                }
            </>
        )
    }

export default MaterialButton;