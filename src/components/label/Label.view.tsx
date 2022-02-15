import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { colors, fonts } from '../../common/constants';

interface IComponentProps {
    size?: number,
    font?: 'regular' | 'medium' | 'bold' | 'semibold',
    color?: 'primary' | 'black' | 'red' | 'secondary' | 'gray' | 'white',
    center?: boolean,
    textStyle?: TextStyle
}

const Label: FC<IComponentProps> = ({ size = 20, color = 'black', font = 'regular', center = false, textStyle, ...props }) => {

    const LabelStyle = {
        fontSize: size,
        color: colors[color],
        fontFamily: fonts[font]
    }

    return (
        <>
            {
                <Text style={[LabelStyle, { textAlign: center ? 'center' : 'left' }, textStyle]}>{props.children}</Text>
            }
        </>
    )
}

export default Label;