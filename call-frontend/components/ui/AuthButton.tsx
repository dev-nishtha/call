import { Button } from 'react-native';
import React from 'react';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ title, onPress, disabled }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      disabled={disabled}
      color="#4CAF50" 
    />
  );
};
