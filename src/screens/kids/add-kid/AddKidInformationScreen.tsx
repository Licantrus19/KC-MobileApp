import React, { useState, FC } from 'react';
import { Button, StyleSheet, View, Image, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInputText, CustomSelect } from '../../../components';
interface IScreenProps {
    navigation: any
}

interface KidData {
    firstName: string;
    lastName: string;
    dni: string;
    birthDate: string;
    gender: 'Niño' | 'Niña' | '';
    relationship: string;
}

const schema = yup
    .object({
        firstName: yup
            .string()
            .min(3, 'Mínimo 3 caracteres')
            .max(30, 'Máximo 30 caracteres')
            .required('Nombres son requeridos'),
        lastName: yup
            .string()
            .min(3, 'Mínimo 3 caracteres')
            .max(30, 'Máximo 30 caracteres')
            .required('Apellidos son requeridos'),
        dni: yup
            .string()
            .max(8, 'Se requiere 8 caracteres')
            .min(8, 'Se requiere 8 caracteres')
            .required('DNI es requerido'),
        birthDate: yup.string().required('Fecha de nacimiento es requerida'),
        gender: yup.string().required('Género es requerido'),
        relationship: yup.string().required('Parentesco es requerido'),
    })
    .required();

const AddKidInformationScreen: FC<IScreenProps> = ({ navigation }) => {

    //form variables
    const { control, handleSubmit, setValue, formState: { errors }, clearErrors } = useForm<KidData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            dni: '',
            birthDate: '',
            gender: '',
            relationship: '',
        },
        resolver: yupResolver(schema)
    })

    const childMaxDate = () => {
        let maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() - 2);
        return maxDate;
    };

    const childMinDate = () => {
        let minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 5);
        return minDate;
    };

    // screen events
    const [date, setDate] = useState(childMaxDate());
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const birthDateSelected = selectedDate;

        setShow(false);
        if(!birthDateSelected) return;
        let tempDate = new Date(birthDateSelected);
        let birthDateText = ('0' + tempDate.getDate()).slice(-2) + '/' + ('0' + (tempDate.getMonth() + 1)).slice(-2) + '/' + tempDate.getFullYear();
        setValue('birthDate', birthDateText);
        setDate(birthDateSelected);
        clearErrors('birthDate');
    }

    // flow events
    const nextStep = ({
        firstName,
        lastName,
        dni,
        birthDate,
        gender,
        relationship,
    }: KidData) => {
        const kidData = {
            firstName,
            lastName,
            identificationNumber: dni,
            birthDate,
            gender,
            relationship,
            avatarImage: 1,
        };
        navigation.push("AddKidAvatar", kidData);
    }

    const cancel = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    display="default"
                    mode="date"
                    onChange={onChange}
                    maximumDate={childMaxDate()}
                    minimumDate={childMinDate()}
                />
            )}

            <ScrollView
                style={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.firstName}>
                    <CustomInputText
                        label="Nombres"
                        placeholder="Ingrese nombres completo"
                        control={control}
                        name="firstName"
                        errorMessage={errors.firstName?.message}
                    />
                </View>
                <View style={styles.lastName}>
                    <CustomInputText
                        label="Apellidos"
                        placeholder="Ingrese apellido completo"
                        control={control}
                        name="lastName"
                        errorMessage={errors.lastName?.message}
                    />
                </View>
                <View style={styles.identificationNumber}>
                    <View style={styles.identificationNumberContainer}>
                        <CustomInputText
                            label="DNI"
                            placeholder="Ingrese DNI"
                            control={control}
                            name="dni"
                            errorMessage={errors.dni?.message}
                            keyboardType="number-pad"
                            containerStyle={{ marginEnd: 30, flex: 3 }}
                            maxLength={8}
                        />
                        <Image
                            resizeMode='contain'
                            style={styles.identificationNumberIcon}
                            source={require('../../../assets/add_kid/identification_number_kid_icon.png')}
                        />
                    </View>
                </View>
                <View style={styles.birthDate}>
                    <View style={styles.birthDateContainer}>
                        <TouchableOpacity
                            onPress={setShow.bind(this, true)}
                            containerStyle={{ flex: 1 }}
                            activeOpacity={1}
                        >
                            <View
                                pointerEvents="none"
                            >
                                <CustomInputText
                                    control={control}
                                    label="Fecha de nacimiento"
                                    placeholder="dd/mm/aaaa"
                                    name="birthDate"
                                    errorMessage={errors.birthDate?.message}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.datePickerIcon}>
                            <TouchableOpacity
                                onPress={setShow.bind(this, true)}
                            >
                                <Image
                                    source={require('../../../assets/icons/calendar_icon.png')}
                                    style={styles.calendarIcon}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.gender}>
                    <CustomSelect
                        label="Género"
                        control={control}
                        options={[
                            { label: 'Seleccione sexo del menor', value: '' },
                            { label: 'Niña', value: 'Niña' },
                            { label: 'Niño', value: 'Niño' },
                        ]}
                        name="gender"
                        errorMessage={errors.gender?.message}
                    />
                </View>
                <View style={styles.relationship}>
                    <CustomInputText
                        label="Parentesco"
                        placeholder="Parentesco con el menor"
                        control={control}
                        name="relationship"
                        errorMessage={errors.relationship?.message}
                    />
                </View>
                <View style={styles.bottomButtons}>
                    <View style={styles.nextButton}>
                        <Button
                            onPress={handleSubmit(nextStep)}
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
            </ScrollView>

        </View>
    );
}

export default AddKidInformationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1,
        marginBottom: 10,
        paddingHorizontal: 50,
    },
    firstName: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18
    },
    lastName: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    identificationNumber: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    identificationNumberContainer: {
        flexDirection: 'row',
    },
    inputDNIText: {
        marginTop: 10,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        flex: 3,
    },
    identificationNumberIcon: {
        flex: 1,
        alignItems: 'flex-end',
        width: 80,
        height: 40,
        marginTop: 28,

    },
    birthDate: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    birthDateContainer: {
        flexDirection: 'row',
    },
    inputBirthDateText: {
        marginTop: 10,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        flex: 3,
        color: 'black'
    },
    datePickerIcon: {
        width: 80,
        alignItems: 'flex-end',
    },
    calendarIcon: {
        alignItems: 'flex-end',
        width: 40,
        height: 40,
        marginTop: 28,
    },
    gender: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    relationship: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    picker: {
        marginTop: 10,
        marginEnd: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
    },
    bottomButtons: {
        marginTop: 10
    },
    forgotPasswordText: {
        color: '#727377',
        textAlign: 'center',
    },
    nextButton: {
        marginBottom: 10
    },
    cancelButton: {
        marginBottom: 10
    }
});
