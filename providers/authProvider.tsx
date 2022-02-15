import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth, { logIn, logOut, signUp } from "../services/auth";

const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ authModalOpen, setAuthModalOpen, logIn, signUp, logOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext };
