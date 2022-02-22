import { useState } from "react";
import { AuthContext, useAuthContext } from "../providers/authProvider";
import { FcGoogle } from "react-icons/fc";
import { CircularProgress } from "@mui/material";

export default function LoginForm({ setNewUser }) {
  const authContext: AuthContext = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const handleSignup = () => {
    setNewUser(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidated = handleValidation();
    if (isValidated) {
      setLoading(true);
      const user = await authContext.logIn(email, password);
      setLoading(false);
      if (user) {
        setAuthError("");
        authContext.setAuthModalOpen(false);
      } else {
        setAuthError("Email or password is incorrect");
      }
    }
  };

  const handleValidation = () => {
    let result = true;
    if (email.trim().length === 0) {
      setEmailError("Email is required");
      result = false;
    } else {
      setEmailError("");
    }

    if (password.trim().length === 0) {
      setPasswordError("Password is required");
      result = false;
    } else if (password.trim().length < 6) {
      setPasswordError("Password must be at least 6 characters");
      result = false;
    } else if (password.trim().length > 10) {
      setPasswordError("Password must not be more than 10 characters");
      result = false;
    } else {
      setPasswordError("");
    }

    return result;
  };

  const handleGoogleLogin = () => {
    authContext.authWithGoogle();
    authContext.setAuthModalOpen(false);
  };

  return (
    <div
      className={"z-50 h-screen w-full fixed text-gray-600 flex items-center "}
    >
      <div
        className={"h-screen w-full bg-black/20 backdrop-blur-sm fixed z-40 "}
        onClick={() => {
          authContext.setAuthModalOpen(false);
        }}
      ></div>
      <div className="p-4 m-auto w-72 bg-white rounded-md shadow-xl z-50">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-extrabold my-2 text-center">Log in</h2>
          <p className="text-sm text-red-400">{authError}</p>
          <span className="text-sm my-4">
            <label className="text-indigo-400">Email</label>
            <br />
            <input
              type="email"
              className="rounded px-2 py-1 my-1 w-full outline outline-1 outline-indigo-500 focus:outline-2 focus:shadow-xl focus:shadow-indigo-500/20"
              placeholder="johndoe1985@gmail.com"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p className="text-red-400 text-sm">{emailError}</p>
          </span>
          <span className="text-sm my-4">
            <label className="text-indigo-400">Password</label>
            <br />
            <input
              type="password"
              className="rounded px-2 py-1 my-1 w-full outline outline-1 outline-indigo-500 focus:outline-2 focus:outline-indigo-500 focus:shadow-xl focus:shadow-indigo-500/20"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="text-red-400 text-sm">{passwordError}</p>
          </span>
          <button className="my-2 rounded-md bg-indigo-500 text-white px-2 py-2 text-center w-full hover:shadow-xl hover:shadow-indigo-500/20 flex items-center justify-center">
            {loading ? (
              <CircularProgress
                style={{ color: "white" }}
                size="20px"
                thickness={8}
              />
            ) : (
              <input className="font-semibold" type="submit" value="Log in" />
            )}
          </button>
          <span className="flex justify-center text-sm">OR</span>
          <button
            className="my-2 rounded-md text-red-500 outline outline-2 outline-red-500 opacity-60 hover:opacity-100 font-semibold px-2 py-1 text-center w-full hover:shadow-xl hover:shadow-red-500/20 flex items-center justify-center"
            onClick={handleGoogleLogin}
          >
            Log in with
            <span className="mx-1 text-xl">
              <FcGoogle />
            </span>
          </button>
          <span className="flex justify-center">
            <span className="text-sm my-2">
              New user?
              <button
                className="text-blue-500 font-medium hover:underline"
                onClick={handleSignup}
              >
                Sign up
              </button>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
}
