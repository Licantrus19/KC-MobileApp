import { Picker } from '@react-native-picker/picker';
import React, { useState, FC } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IScreenProps {
    navigation: any
}

const AddKidInformationScreen: FC<IScreenProps> = ({ navigation }) => {

    //form variables

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [relationship, setRelationship] = useState('');

    // screen events

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const birthDateSelected = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(birthDateSelected);

        let tempDate = new Date(birthDateSelected);
        let birthDateText = ('0' + tempDate.getDate()).slice(-2) + '/' + ('0' + (tempDate.getMonth() + 1)).slice(-2) + '/' + tempDate.getFullYear();

        setBirthDate(birthDateText);
        setShow(false);
    }

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    }

    // flow events

    const nextStep = () => {
        console.log();
        navigation.navigate('AddKidAvatar');
    }

    const cancel = () => {
        console.log();
    }

    return (
        <View style={styles.container}>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    display="default"
                    onChange={onChange}
                />
            )}

            <View style={styles.contentContainer}>
                <View style={styles.firstName}>
                    <Text>Nombres</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Ingrese nombre completo"
                        onChangeText={firstName => setFirstName(firstName)}
                        defaultValue={firstName}
                    />
                </View>
                <View style={styles.lastName}>
                    <Text>Apellidos</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Ingrese apellido completo"
                        onChangeText={lastName => setLastName(lastName)}
                        defaultValue={lastName}
                    />
                </View>
                <View style={styles.identificationNumber}>
                    <Text>DNI</Text>
                    <View style={styles.identificationNumberContainer}>
                        <TextInput
                            style={styles.inputDNIText}
                            placeholder="Ingrese DNI"
                            onChangeText={identificationNumber => setIdentificationNumber(identificationNumber)}
                            defaultValue={identificationNumber}
                        />
                        <Image
                            resizeMode='contain'
                            style={styles.identificationNumberIcon}
                            source={require('../../../assets/add_kid/identification_number_icon.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.birthDate}>
                    <Text>Fecha de nacimiento</Text>
                    <View style={styles.birthDateContainer}>
                        <TextInput
                            style={styles.inputBirthDateText}
                            editable={false}
                            selectTextOnFocus={false}
                            defaultValue={birthDate} />
                        <View style={styles.datePickerIcon}>
                            <TouchableOpacity
                                onPress={() => showMode('date')} >
                                <Icon
                                    style={styles.calendarIcon}
                                    name="calendar"
                                ></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.gender}>
                    <Text>Género</Text>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(gender, index) => setGender(gender)}
                        mode="dropdown" // Android only
                        style={styles.picker}
                    >
                        <Picker.Item label="Seleccione sexo del menor" value="Unknown" />
                        <Picker.Item label="Niña" value="female" />
                        <Picker.Item label="Niño" value="male" />
                    </Picker>
                </View>
                <View style={styles.relationship}>
                    <Text>Parentesco</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Parentesco con el menor"
                        onChangeText={relationship => setRelationship(relationship)}
                        defaultValue={relationship}
                    />
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.nextButton}>
                    <Button
                        onPress={nextStep}
                        title="Siguiente"
                        color="#5680E9"></Button>
                </View>
                <View style={styles.cancelButton}>
                    <Button
                        onPress={cancel}
                        title="Cancelar"
                        color="#E95656"></Button>
                </View>
            </View>
        </View>
    );
}

export default AddKidInformationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1
    },
    firstName: {
        marginTop: 20,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    lastName: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    identificationNumber: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18,
    },
    identificationNumberContainer: {
        flexDirection: 'row',
    },
    inputDNIText: {
        marginTop: 10,
        marginEnd: 20,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        flex: 3,
    },
    identificationNumberIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginEnd: 50
    },
    birthDate: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    birthDateContainer: {
        flexDirection: 'row',
    },
    inputBirthDateText: {
        marginTop: 10,
        marginEnd: 20,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        flex: 3,
    },
    datePickerIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginEnd: 50,
    },
    calendarIcon: {

    },
    gender: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 50,
        fontSize: 18
    },
    relationship: {
        marginTop: 10,
        marginBottom: 10,
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
    picker: {
        marginTop: 10,
        marginEnd: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000"
    },
    bottomButtons: {
        marginBottom: 30
    },
    forgotPasswordText: {
        color: '#727377',
        textAlign: 'center',
    },
    nextButton: {
        marginStart: 50,
        marginEnd: 50,
        marginBottom: 10
    },
    cancelButton: {
        marginStart: 50,
        marginEnd: 50,
        marginBottom: 10
    }
});
