import { SafeAreaView, Text, View } from 'react-native';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';

import useAuthStore from '../../store/authStore';
import { InputField } from '@/components/InputField';
import { AuthButton } from '@/components/ui/AuthButton';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signup, isLoading, error } = useAuthStore();

  const handleSignup = () => {
    signup(email, password, name).then(() => {
      router.replace('/'); // Redirect to home after signup
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <View style={{ padding: 20 }}>
        <InputField
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <InputField
          placeholder="Username/Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
      </View>
      <AuthButton title="Sign Up" onPress={handleSignup} disabled={isLoading} />
      <Link href="/(auth)/LoginScreen" asChild>
        <AuthButton title="Back to Login" onPress={() => {}} />
      </Link>
    </SafeAreaView>
  );
}
