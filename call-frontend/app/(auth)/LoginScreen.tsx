import { SafeAreaView, Text, View } from 'react-native';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
  import useAuthStore from '../../store/authStore';
import { InputField } from '@/components/InputField';
import { AuthButton } from '@/components/ui/AuthButton';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuthStore();

  const handleLogin = () => {
    login(email, password).then(() => {
      router.replace('/'); // Redirect to home after login
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <View style={{ padding: 20 }}>
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
      <AuthButton title="Login" onPress={handleLogin} disabled={isLoading} />
      <Link href="/(auth)/SignupScreen" asChild>
        <AuthButton title="Create Account" onPress={() => {}} />
      </Link>
    </SafeAreaView>
  );
}
