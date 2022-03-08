import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "..";
import { colors } from "../../common/constants";

interface IComponentProps {
    size?: number | 'small' | 'large',
    color?: string,
}

const Loading: FC<IComponentProps> = ({ size = 'large', color = colors.primary }) => {
    return (
        <Container containerStyle={{ justifyContent: "center", alignItems: "center", backgroundColor: 'transparent' }}>
            <ActivityIndicator size={size} color={color} />
        </Container>
    )
}

export default Loading;