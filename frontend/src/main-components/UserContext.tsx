 import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserData {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

interface UserContextType {
  user: UserData;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const { userId } = useAuth();
  const [user, setUser] = useState<UserData>();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    console.log('Not logged in');
    navigate("/login");
  }

  const fetchUser = async() => {
    if (!userId) return;
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getuser/${userId}`);
      setUser(response.data);
      console.log("user is: ", user);
    } catch(error) {
      console.log("Failed to fetch user: ", error);
    }
  }

  useEffect(() => {
    if (userId) {
      fetchUser();
    } else {
      console.log("userId not ready yet");
    }
  }, [userId]);

  if (!user) return null;

  return(
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};