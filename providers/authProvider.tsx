import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import auth, { logIn, logOut, createAccount } from "../services/authService";

const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  const [displayName, setDisplayName] = useState("");
  const [UID, setUID] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName);
        setUID(currentUser.uid);
      } else {
        setDisplayName("");
        setUID("");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authModalOpen,
        setAuthModalOpen,
        logIn,
        createAccount,
        logOut,
        user,
        displayName,
        UID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  return useContext(AuthContext);
};

interface AuthContextType {
  authModalOpen: boolean;
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
  logIn: (email: string, password: string) => Promise<User>;
  createAccount: (
    email: string,
    password: string,
    name: string
  ) => Promise<User>;
  logOut: () => void;
  user: User;
  displayName: string;
  UID: string;
}

export { useAuthContext };
export type { AuthContextType };
