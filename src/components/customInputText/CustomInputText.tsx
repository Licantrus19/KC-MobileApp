import React, {FC, useState} from 'react';

import {Control, Controller} from 'react-hook-form';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ICustomInputText extends Partial<TextInputProps> {
  control: Control<any>;
  errorMessage?: string;
  label?: string;
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomInputText: FC<ICustomInputText> = ({
  control,
  errorMessage,
  label,
  name,
  placeholder,
  secureTextEntry,
  containerStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(
    secureTextEntry || true,
  );

  return (
    <View style={containerStyle}>
      {label && <Text>{label}</Text>}
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={showPassword}
              style={{...styles.inputText}}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              {...props}
            />
            {secureTextEntry && (
              <TouchableOpacity
                style={styles.iconContainer}
                activeOpacity={1}
                onPress={setShowPassword.bind(this, !showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInputText;

const styles = StyleSheet.create({
  inputText: {
    marginTop: 10,
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginStart: 6,
    marginTop: 4,
  },
  inputContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
});
