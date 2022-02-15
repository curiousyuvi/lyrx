import { useContext, useState } from "react";
import { MyContext } from "../pages/_app";
import { FcGoogle } from "react-icons/fc";

export default function AuthModal() {
  const context = useContext(MyContext);
  const [Signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  console.log("context", context);
  return (
    <div
      className={"z-50 h-screen w-full fixed text-gray-600 flex items-center "}
    >
      <div
        className={"h-screen w-full bg-black/20 fixed z-40 "}
        onClick={() => {
          context.setAuthModalOpen(false);
        }}
      ></div>
      <div
        className="p-4 m-auto w-72 bg-white rounded-md shadow-xl z-50"
        onClick={() => {
          console.log("red");
        }}
      >
        <h2 className="text-xl font-medium my-2 text-center">
          {Signup ? "Sign up" : "Log in"}
        </h2>
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
        </span>
        <span className={"text-sm my-4 ".concat(Signup ? "" : "hidden")}>
          <label className="text-indigo-400">
            What would you like us to call you?
          </label>
          <br />
          <input
            type="text"
            className="rounded px-2 py-1 my-1 w-full outline outline-1 outline-indigo-500 focus:outline-2 focus:outline-indigo-500 focus:shadow-xl focus:shadow-indigo-500/20"
            placeholder="John Doe"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </span>
        <button className="my-2 rounded-md bg-indigo-500 text-white font-semibold px-2 py-2 text-center w-full hover:shadow-xl hover:shadow-indigo-500/20">
          {Signup ? "Sign up" : "Log in"}
        </button>
        <span className="flex justify-center text-sm">OR</span>
        <button className="my-2 rounded-md text-red-500 outline outline-2 outline-red-500 opacity-60 hover:opacity-100 font-semibold px-2 py-1 text-center w-full hover:shadow-xl hover:shadow-red-500/20 flex items-center justify-center">
          {Signup ? "Sign up with" : "Log in with"}
          <span className="mx-1 text-xl">
            <FcGoogle />
          </span>
        </button>
        <span className="flex justify-center">
          <span className="text-sm my-2">
            {Signup ? "Already have an account? " : "New user? "}
            <button
              className="text-blue-500 font-medium hover:underline"
              onClick={() => {
                setSignup(!Signup);
              }}
            >
              {Signup ? "Log in" : "Sign up"}
            </button>
          </span>
        </span>
      </div>
    </div>
  );
}
