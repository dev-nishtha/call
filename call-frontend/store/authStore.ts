import {create} from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  initializeAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = { data: { token: 'fake-token', user: { id: '1', name: 'John', email } } };
      await SecureStore.setItemAsync('authToken', response.data.token);
      set({ 
        token: response.data.token,
        user: response.data.user,
        isLoading: false
      });
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Login failed', 
        isLoading: false 
      });
    }
  },

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = { data: { token: 'fake-token', user: { id: '1', name, email } } };
      await SecureStore.setItemAsync('authToken', response.data.token);
      set({ 
        token: response.data.token,
        user: response.data.user,
        isLoading: false
      });
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Signup failed', 
        isLoading: false 
      });
    }
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('authToken');
    set({ token: null, user: null });
  },

  initializeAuth: async () => {
    const token = await SecureStore.getItemAsync('authToken');
    if (token) {
      set({ token });
    }
  },
}));

export default useAuthStore;