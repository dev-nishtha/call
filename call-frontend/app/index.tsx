import useAuthStore from '@/store/authStore';
import { Link, Redirect, Slot } from 'expo-router';
import { useEffect } from 'react';

export default function HomeScreen() {
  const { token, initializeAuth } = useAuthStore();
  
  useEffect(() => {
    async function prepare() {
      try {
        await initializeAuth();
      } catch(e) {
        console.log(e)
      }
    }

    prepare();
  }, []);

  if (token) {
    return <Redirect href="/HomeScreen" />;
  }
  return <Redirect href="/(auth)/LoginScreen"/>;
}



