import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userFN, setUserFN] = useState(null);
  const [userLN, setUserLN] = useState(null);

  const login = useCallback((jwtToken, id, FN, LN) => {
    setUserFN(FN);
    setToken(jwtToken);
    setUserId(id);
    setUserLN(LN);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
        userFN: FN,
        userLN: LN,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setUserFN(null);
    setUserLN(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    console.log(data);
    if (data && data.token) {
      login(data.token, data.userId, data.userFN, data.userLN);
    }
  }, [login]);

  return { login, logout, token, userId, userFN, userLN };
};
