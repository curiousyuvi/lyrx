import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContextType, useAuthContext } from "../providers/authProvider";
import CreateAccountForm from "./createAccountForm";
import LoginForm from "./loginForm";

export default function AuthModal() {
  const authContext: AuthContextType = useAuthContext();
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return authContext.authModalOpen ? (
    newUser ? (
      <CreateAccountForm setNewUser={setNewUser} />
    ) : (
      <LoginForm setNewUser={setNewUser} />
    )
  ) : null;
}
