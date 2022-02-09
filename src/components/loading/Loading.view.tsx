import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "..";

interface IComponentProps {
    size?: number | 'small' | 'large',
    color?: string,
}

const Loading: FC<IComponentProps> = ({ size = 'large', color = 'black' }) => {
    return (
        <Container containerStyle={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={size} color={color} />
        </Container>
    )
}

export default Loading;