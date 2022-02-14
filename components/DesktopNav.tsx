import Link from "next/link";
import router from "next/router";
import { useRef, useState } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import DesktopNavLink from "./DesktopNavLink";

export default function DesktopNav() {
  const loginButtonRef = useRef();
  const [q, setQ] = useState("");
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-xl">
        <div className="flex items-center relative">
          <FaSearch className="inline-block absolute object-center left-3 text-md text-indigo-400 " />
          <input
            className="p-2 m-0 pl-10 text-gray-600 outline outline-1 outline-gray-300 rounded-md focus-visible:outline-indigo-500 focus-visible:outline-2 shadow focus:shadow-xl focus:shadow-indigo-500/10"
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
        <DesktopNavLink path="/favorites" title="Favorites" />
        <DesktopNavLink path="/history" title="History" />
        <Link href="/login" passHref>
          <button
            ref={loginButtonRef}
            data-tip="Log in"
            className="hover:bg-indigo-500 border border-indigo-400 px-4 py-2 mx-1 font-semibold text-indigo-400 hover:text-white rounded shadow hover:shadow-xl hover:shadow-indigo-500/10"
            onMouseEnter={() => {
              ReactTooltip.show(loginButtonRef.current);
            }}
          >
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
}
