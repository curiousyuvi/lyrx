import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import auth, {
  logIn,
  logOut,
  createAccount,
  authWithGoogle,
} from "../services/authService";

const authContext = createContext(null);

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
    <authContext.Provider
      value={{
        authModalOpen,
        setAuthModalOpen,
        logIn,
        createAccount,
        logOut,
        user,
        displayName,
        UID,
        authWithGoogle,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

const useAuthContext = () => {
  return useContext(authContext);
};

interface AuthContext {
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
  authWithGoogle: () => void;
}

export { useAuthContext };
export type { AuthContext as AuthContext };
