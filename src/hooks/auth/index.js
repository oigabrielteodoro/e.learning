import React, { createContext, useState, useCallback, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const isSigned = await AsyncStorage.getItem('@E-learning:user');

      if (isSigned) {        
        setData(JSON.parse(isSigned));
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async () => {
    setIsSigned(true);

    await AsyncStorage.setItem('@E-learning:user', JSON.stringify(false));
  }, []);

  const signOut = useCallback(async () => {
    setIsSigned(false);

    await AsyncStorage.setItem('@E-learning:user', JSON.stringify(false));
  }, []);

  return (
    <AuthContext.Provider value={{ isSigned, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext');
  }

  return context;
}

export { AuthProvider, useAuth };