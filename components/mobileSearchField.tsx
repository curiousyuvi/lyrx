import router from "next/router";
import { FaSearch } from "react-icons/fa";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function MobileSearchField({ q, setQ, lyricWord, desc }) {
  const themeContext: ThemeContext = useThemeContext();

  return (
    <div className="flex items-center w-full">
      <input
        className={"p-2 h-10 w-full text-mg sm:text-xl outline outline-1 outline-gray-300 rounded-md rounded-r-none focus-visible:outline-indigo-500 shadow focus:shadow-xl focus:shadow-indigo-500/10".concat(
          themeContext.isLightTheme
            ? " bg-white text-gray-600"
            : " bg-gray-700 text-gray-100"
        )}
        name="search-field"
        placeholder="search by song title or artist name..."
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
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
      <button
        className="px-3 outline outline-1 outline-indigo-500 h-10 bg-indigo-500 rounded-r-md"
        onClick={() => {
          if (q != "") {
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
      >
        <FaSearch className=" object-center left-4 text-md text-white " />
      </button>
    </div>
  );
}
