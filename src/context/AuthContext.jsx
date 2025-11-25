import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("hospital_user")) || null
  );

  useEffect(() => {
    const saved = sessionStorage.getItem("hospital_user");
    if (!saved) setUser(null);
  }, []);

  const login = (data) => {
    setUser(data);
    sessionStorage.setItem("hospital_user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("hospital_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
