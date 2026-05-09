import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const [authUser, setAuthUser] = useState(
    localStorage.getItem("userName") || null
  );

  const login = (user, token) => {

    localStorage.setItem("token", token);
    localStorage.setItem("userId", user._id);
    localStorage.setItem("userName", user.name);

    setIsLoggedIn(true);
    setAuthUser(user.name);
  };

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");

    setIsLoggedIn(false);
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        authUser,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);