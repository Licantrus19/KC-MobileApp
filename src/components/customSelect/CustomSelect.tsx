import React, { FC } from 'react';

import { Picker, PickerItemProps } from '@react-native-picker/picker';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle, Text } from 'react-native';


interface ICustomSelect extends Partial<PickerItemProps> {
  control: Control<any>;
  errorMessage?: string;
  label?: string;
  name: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  options: {
    label: string;
    value: string | null;
  }[];
}

const CustomSelect: FC<ICustomSelect> = ({
  control,
  errorMessage,
  label,
  name,
  containerStyle,
  labelStyle,
  options,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.picker}>
            <Picker
              onBlur={onBlur}
              selectedValue={value}
              onValueChange={onChange}
              mode="dropdown" // Android only
              {...props}>
              {options.map((option) => (
                <Picker.Item
                  key={option.label}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
        )}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  picker: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    height: 40,
    justifyContent: 'center',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginStart: 6,
    marginTop: 4,
  },
});
