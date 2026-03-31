import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = (name) => {
    setAuthUser(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setAuthUser('');
    setIsLoggedIn(false);
  };

  const value = {
    authUser,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}