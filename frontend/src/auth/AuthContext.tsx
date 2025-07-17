import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  userId: string | null;
  login: (userId: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = getCookie("user_id");
    if (id) setUserId(id);
  }, []);

  const login = (id: string) => {
    document.cookie = `user_id=${id}; path=/; max-age=604800`;
    setUserId(id);
  };

  const logout = () => {
    document.cookie = `user_id=; path=/; max-age=0`;
    setUserId(null);
  };

  const isLoggedIn = () => {
    console.log(getCookie("user_id"));
    return getCookie("user_id") ? true : false;
  }

  return (
    <AuthContext.Provider value={{ userId, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

function getCookie(name: string) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}
