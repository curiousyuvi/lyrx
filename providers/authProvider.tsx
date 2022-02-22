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
import { getFavouritesLyricCardItems } from "../services/firestoreService";

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
      console.log("current user: ", currentUser);
      console.log("current user: ", currentUser);
      console.log("user: ", user);
      console.log("UID: ", `${UID}`);
      if (UID != "") getFavouritesLyricCardItems(currentUser.uid);
      //TODO: remove this
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
}

export { useAuthContext };
export type { AuthContext as AuthContext };
