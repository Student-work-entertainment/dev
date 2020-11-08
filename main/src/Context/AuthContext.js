import { createContext } from "react";

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  userFN: null,
  userLN: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
});
