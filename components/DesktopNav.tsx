import Link from "next/link";
import router from "next/router";
import { useContext, useRef, useState } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import { AuthContext, useAuthContext } from "../providers/authProvider";
import DesktopNavLink from "./DesktopNavLink";

export default function DesktopNav() {
  const authContext: AuthContext = useAuthContext();
  const loginButtonRef = useRef();
  const logoutButtonRef = useRef();
  const [q, setQ] = useState("");
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-xl">
        <div className="flex items-center relative">
          <FaSearch className="inline-block absolute object-center left-3 text-md text-indigo-400 " />
          <input
            className="p-2 m-0 pl-10 transition-[width] w-24 focus-visible:w-80 text-gray-600 outline outline-1 outline-gray-300 rounded-md focus-visible:outline-indigo-500 focus-visible:outline-2 shadow focus:shadow-xl focus:shadow-indigo-500/10"
            name="search-field"
            value={q}
            placeholder="search by song title or artist name..."
            onChange={(e) => {
              setQ(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && q != "") {
                router.push({
                  pathname: "/search",
                  query: {
                    q: q,
                  },
                });
                setQ("");
              }
            }}
          />
        </div>
        <DesktopNavLink path="/" title="Home" />
        <DesktopNavLink path="/favourites" title="Favourites" />
        <DesktopNavLink path="/history" title="History" />
        {authContext.user === null ? (
          <button
            ref={loginButtonRef}
            data-tip="Log in"
            className="hover:bg-indigo-500 border border-indigo-400 px-4 py-2 mx-1 font-semibold text-indigo-400 hover:text-white rounded shadow hover:shadow-xl hover:shadow-indigo-500/10"
            onMouseEnter={() => {
              ReactTooltip.show(loginButtonRef.current);
            }}
            onClick={() => {
              authContext.setAuthModalOpen(true);
            }}
          >
            Log in
          </button>
        ) : (
          <button
            ref={logoutButtonRef}
            data-tip="Log out"
            className="hover:bg-red-500 border border-red-400 px-4 py-2 mx-1 font-semibold text-red-400 hover:text-white rounded shadow hover:shadow-xl hover:shadow-red-500/10"
            onMouseEnter={() => {
              ReactTooltip.show(logoutButtonRef.current);
            }}
            onClick={() => {
              authContext.logOut();
            }}
          >
            <FiLogOut />
          </button>
        )}
      </div>
    </div>
  );
}
