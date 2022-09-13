import React, { createContext, useState } from 'react';

import { AuthResponse } from '../services/mirage/routes/user';
import http from '../services/api';

import {
  IAuthContextData,
  AuthContextUser,
} from '../interfaces/authContextData.interface';
import { IAuthContextProvider } from '../interfaces/authContextProvider.interface';

const AuthContext = createContext({} as IAuthContextData);

/**
 * @export
 * @component
 * @name AuthContextProvider
 *
 * @description
 * Auth Context Provider
 */
function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<AuthContextUser>(() => {
    return JSON.parse(sessionStorage.getItem('userNocturnal') || 'null');
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('tokenNocturnal') !== null;
  });

  const authenticate = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const response: AuthResponse = await http.post('/auth/login', {
      username,
      password,
    });

    if (response) {
      const authenticatedUser = {
        id: (response as AuthResponse).user.id,
        username: (response as AuthResponse).user.username,
        journalIds: (response as AuthResponse).user.journalIds,
      };

      setUser(authenticatedUser);

      sessionStorage.setItem(
        'userNocturnal',
        JSON.stringify(authenticatedUser)
      );
      sessionStorage.setItem(
        'tokenNocturnal',
        (response as AuthResponse).token
      );

      setIsAuthenticated(true);

      return true;
    }

    return false;
  };

  const newAccount = async (
    username: string,
    password: string,
    email?: string
  ) => {
    const response: AuthResponse = await http.post('/auth/signup', {
      username,
      password,
      email,
    });

    if (response) {
      return true;
    }

    return false;
  };

  const signOut = () => {
    sessionStorage.removeItem('tokenNocturnal');
    sessionStorage.removeItem('userNocturnal');
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        user,
        newAccount,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
