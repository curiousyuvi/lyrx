import Link from "next/link";
import router from "next/router";
import { useContext, useRef, useState } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import { AuthContext, useAuthContext } from "../providers/authProvider";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";
import DesktopNavLink from "./DesktopNavLink";
import ThemeToggleButton from "./themeToggleButton";

export default function DesktopNav() {
  const authContext: AuthContext = useAuthContext();
  const themeContext: ThemeContext = useThemeContext();
  const loginButtonRef = useRef();
  const logoutButtonRef = useRef();
  const [q, setQ] = useState("");
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-xl">
        <div className="flex items-center relative mx-2">
          <FaSearch className="inline-block absolute object-center left-3 text-md text-indigo-400 " />
          <input
            className={"p-2 m-0 pl-10 transition-[width] w-24 focus-visible:w-80  outline outline-1  rounded-md  focus-visible:outline-2 shadow focus:shadow-xl ".concat(
              themeContext.isLightTheme
                ? " bg-white text-gray-600 outline-gray-300 focus-visible:outline-indigo-500 focus:shadow-indigo-500/10"
                : " bg-gray-700 text-gray-100 outline-gray-700 focus-visible:outline-indigo-500 focus:shadow-indigo-500/20"
            )}
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
        <DesktopNavLink path="/" title="HOME" />
        <DesktopNavLink path="/favourites" title="FAVOURITES" />
        <DesktopNavLink path="/history" title="HISTORY" />
        <ThemeToggleButton />
        {authContext.user === null ? (
          <button
            ref={loginButtonRef}
            data-tip="Log in"
            className="hover:bg-indigo-500 border border-indigo-400 px-4 py-2 mx-2 font-roboto-condensed font-bold text-indigo-400 hover:text-white rounded shadow hover:shadow-xl hover:shadow-indigo-500/10"
            onMouseEnter={() => {
              ReactTooltip.show(loginButtonRef.current);
            }}
            onClick={() => {
              authContext.setAuthModalOpen(true);
            }}
          >
            LOG IN
          </button>
        ) : (
          <button
            ref={logoutButtonRef}
            data-tip="Log out"
            className="hover:bg-red-500 border border-red-400 px-4 py-2 mx-2 font-roboto-condensed font-bold text-red-400 hover:text-white rounded shadow hover:shadow-xl hover:shadow-red-500/10"
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
