import router from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function DesktopSearchField({ q, setQ, lyricWord, desc }) {
  const [empty, setEmpty] = useState(q === "");
  return (
    <div className="flex items-center relative w-full">
      <FaSearch className="absolute object-center left-4 text-md text-indigo-400 " />
      <span
        className={"rounded px-2 py-1 mx-1 bg-indigo-500/30 text-white text-sm absolute right-3 ".concat(
          empty ? "hidden" : ""
        )}
      >
        ↵ Enter
      </span>
      <input
        className="p-2 mx-2 pl-8 w-full text-mg sm:text-xl text-gray-600 outline outline-1 outline-gray-300 rounded-md focus-visible:outline-indigo-500 focus-visible:outline-2 shadow focus:shadow-xl focus:shadow-indigo-500/10"
        name="search-field"
        placeholder="search by song title or artist name..."
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          if (e.target.value === "") setEmpty(true);
          else setEmpty(false);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter" && q != "") {
            router.push({
              pathname: "/search",
              query: {
                q: q,
                lyric_word: lyricWord,
                desc: desc,
              },
            });
          }
        }}
      />
    </div>
  );
}
