import React, { FC, useEffect, useState } from "react";
import { Button, StyleSheet, Dimensions, Text, TextInput, View, Image, PanResponder, Platform, GestureResponderEvent, PanResponderGestureState } from 'react-native';
import { Container, Label, Loading, MaterialButton } from "../../components";
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from "../../common/constants";
import { ISessionStore } from "../../stores/interfaces";
import { ToastAndroid } from "react-native";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";

const { width, height } = Dimensions.get('window');

const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate
} = Animated;

function runTiming(clock: any, value: any, dest: any) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
}

interface IScreenProps {
    navigation: any,
    sessionStore: ISessionStore
}

const LoginScreen: FC<IScreenProps> = ({ navigation, sessionStore }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        sessionStore.loginUser(user, password);
    }

    useEffect(() => {
        if (sessionStore.error) {
            ToastAndroid.show(sessionStore.error.message, ToastAndroid.SHORT);
            sessionStore.cleanError();
        }
    }, [sessionStore.error]);

    const register = () => {
        navigation.navigate("RegisterInformation")
    }

    const [buttonOpacity, setButtonOpacity] = useState(new Animated.Value(1))

    const onStateChange = event([
        {
            nativeEvent: ({ state }: { state: any }) =>
                block([
                    cond(
                        eq(state, State.END),
                        set(buttonOpacity, runTiming(new Clock(), 1, 0))
                    )
                ])
        }
    ]);

    const onCloseState = event([
        {
            nativeEvent: ({ state }: { state: any }) =>
                block([
                    cond(
                        eq(state, State.END),
                        set(buttonOpacity, runTiming(new Clock(), 0, 1))
                    )
                ])
        }
    ]);

    const buttonY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: Extrapolate.CLAMP
    });

    const bgY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [- height / 3, 0],
        extrapolate: Extrapolate.CLAMP
    });

    const textInputOpacity = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
    });

    const textInputZIndex = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, -1],
        extrapolate: Extrapolate.CLAMP
    });

    const textInputY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [0, 100],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject
                }}
            >
                <Image
                    source={require('../../assets/login/login_background_image.png')}
                    style={styles.imageBackground}
                />
            </Animated.View>
            <Animated.View>
                <Image
                    source={require('../../assets/logo/logo_komodocare_white.png')}
                    style={styles.imageLogo}
                >

                </Image>
                <Text style={styles.welcomeText}>
                    Bienvenidos {"\n"}A{"\n"}KodomoCare!
                </Text>
            </Animated.View>
            <Animated.View style={{ ...styles.bottomAnimationContent, transform: [{ translateY: bgY }] }}>
                <TapGestureHandler onHandlerStateChange={onStateChange}>
                    <Animated.View
                        style={{
                            ...styles.button,
                            opacity: buttonOpacity,
                            marginTop: 40,
                            transform: [{ translateY: buttonY }]
                        }}
                    >
                        <Text style={styles.textButton}>Iniciar Sesión</Text>
                    </Animated.View>
                </TapGestureHandler>
                <TapGestureHandler onHandlerStateChange={register}>
                    <Animated.View
                        style={{
                            ...styles.button,
                            opacity: buttonOpacity,
                            transform: [{ translateY: buttonY }]
                        }}
                    >
                        <Text style={styles.textButton}>
                            Registrarse
                        </Text>
                    </Animated.View>
                </TapGestureHandler>

                <Animated.View
                    style={{
                        opacity: buttonOpacity,
                        transform: [{ translateY: buttonY }]
                    }}
                >
                    <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </Animated.View>

                <Animated.View
                    style={{
                        ...styles.inputFieldsContent,
                        ...StyleSheet.absoluteFillObject,
                        zIndex: textInputZIndex,
                        opacity: textInputOpacity,
                        transform: [{ translateY: textInputY }]
                    }}
                >
                    <Animated.View style={styles.contentContainer}>
                        <Text style={styles.loginText}>Iniciar Sesión</Text>
                        <Animated.View style={styles.username}>
                            <Text>Usuario</Text>
                            <TextInput
                                style={styles.inputText}
                                placeholder="email@example.com"
                                onChangeText={user => setUser(user)}
                                defaultValue={user}
                            />
                        </Animated.View>
                        <Animated.View style={styles.password}>
                            <Text>Contraseña</Text>
                            <TextInput
                                style={styles.inputText}
                                placeholder="****"
                                onChangeText={password => setPassword(password)}
                                defaultValue={password}
                            />
                        </Animated.View>
                        <Animated.View style={styles.bottomButtons}>
                            <Animated.View style={styles.loginButton}>
                                {/* <MaterialButton
                                    onPress={login}
                                    title="Iniciar Sesión" /> */}
                                <TouchableOpacity disabled={sessionStore.loading} activeOpacity={0.7} onPress={login} style={styles.loginButtonAction}>
                                    {!sessionStore.loading && (
                                        <Text style={{ color: 'white' }}>Iniciar Sesión</Text>
                                    )}
                                    {sessionStore.loading && (
                                        <Loading color={colors.white} />
                                    )}
                                </TouchableOpacity>

                            </Animated.View>
                            <Animated.View>
                                <TapGestureHandler onHandlerStateChange={onCloseState}>
                                    <Animated.View style={styles.cancelButton}>
                                        <Text style={{ color: 'white' }}>Cancelar</Text>
                                    </Animated.View>
                                </TapGestureHandler>
                            </Animated.View>
                            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                        </Animated.View>
                    </Animated.View>

                </Animated.View>

            </Animated.View>
        </View>
    );
}

export default inject('sessionStore')(observer(LoginScreen));

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    imageBackground: {
        height: height,
        width: width
    },
    welcomeText: {
        top: height / 3 + 40,
        fontSize: 45,
        color: 'white',
        position: 'absolute',
        marginStart: 10
    },
    imageLogo: {
        marginTop: 10,
        marginStart: 10,
        width: 40,
        height: 40,
        position: 'absolute'
    },
    bottomAnimationContent: {
        top: 2 * height / 3,
        height: 2 * height / 3,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#5680E9',
        color: 'white',
        borderRadius: 4,
        height: 40,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    inputFieldsContent: {
        height: height / 3,
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 15,
        color: 'white'
    },
    contentContainer: {
        flex: 1
    },
    loginText: {
        marginTop: 40,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    username: {
        marginTop: 30,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    password: {
        marginTop: 10,
        marginBottom: 20,
        marginStart: 50,
        fontSize: 18
    },
    inputText: {
        marginTop: 10,
        marginEnd: 50,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5
    },
    bottomButtons: {
        marginBottom: 30
    },
    forgotPasswordText: {
        color: '#727377',
        textAlign: 'center',
        marginTop: 20
    },
    loginButton: {
        marginStart: 50,
        marginEnd: 50,
        marginBottom: 10
    },
    loginButtonAction: {
        backgroundColor: colors.primary,
        color: colors.white,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    cancelButton: {
        marginStart: 50,
        marginEnd: 50,
        marginBottom: 10,
        backgroundColor: '#E95656',
        color: 'white',
        borderRadius: 4,
        height: 40,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }
});
