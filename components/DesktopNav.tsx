import Link from "next/link";
import { useRef } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import DesktopNavLink from "./DesktopNavLink";

export default function DesktopNav() {
  const micRef = useRef();
  const loginButtonRef = useRef();
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-xl">
        <div className="flex items-center relative">
          <FaSearch className="inline-block absolute object-center left-3 text-md text-indigo-400 " />
          <input
            className="p-2 m-0 pl-10 text-gray-600 outline outline-1 outline-gray-300 rounded-md focus-visible:outline-indigo-500 focus-visible:outline-2 shadow focus:shadow-xl focus:shadow-indigo-500/10"
            name="search-field"
            placeholder="search by song title or artist name..."
          />
        </div>
        <button
          ref={micRef}
          data-tip="Search song by voice"
          onMouseEnter={() => {
            ReactTooltip.show(micRef.current);
          }}
          onMouseLeave={() => {
            ReactTooltip.hide(micRef.current);
          }}
        >
          <FaMicrophone className="text-[2.7rem] p-2 text-indigo-500 ml-2 hover:bg-indigo-500/10 hover:rounded-full" />
        </button>
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
