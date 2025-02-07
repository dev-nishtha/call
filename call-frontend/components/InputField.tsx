import { TextInput, View, Text, KeyboardTypeOptions } from 'react-native';
import React from 'react';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#D1D5DB',
          borderRadius: 8,
          padding: 12,
          fontSize: 16,
          color: '#333',
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};
