import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
});

export const AuthProvider = AuthContext.Provider;
