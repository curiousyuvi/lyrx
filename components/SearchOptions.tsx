import router from "next/router";
import { useRef } from "react";
import ReactTooltip from "react-tooltip";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function SearchOptions({
  lyricWord,
  setLyricWord,
  desc,
  setDesc,
  q,
}) {
  const searchButtonRef = useRef();
  const themeContext: ThemeContext = useThemeContext();

  return (
    <div
      className={"p-4 pt-6 my-4 w-full flex flex-col rounded-lg text-sm sm:text-lg shadow".concat(
        themeContext.isLightTheme
          ? " bg-indigo-200 text-gray-600"
          : " bg-indigo-800 text-gray-200"
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        <label className="font-medium">Filter by a word in lyric :</label>
        <input
          className="p-1 px-2 text-gray-700 outline outline-1 outline-gray-300 rounded-md focus-visible:outline-indigo-500 shadow "
          name="lyrx-filter-field"
          placeholder="enter a word in lyric"
          value={lyricWord}
          onChange={(e) => {
            setLyricWord(e.target.value);
          }}
        />

        <label className="font-medium">Sort by Popularity :</label>
        <div>
          <span className="font-semibold">
            <input
              type="radio"
              className="mx-2"
              checked={desc === "asc"}
              value="asc"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></input>
            <label>Ascending</label>
          </span>
          <span className="font-semibold">
            <input
              type="radio"
              className="mx-2"
              checked={desc === "desc"}
              value="desc"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></input>
            <label>Descending</label>
          </span>
        </div>
      </div>
      <button
        ref={searchButtonRef}
        className="m-0 mt-6 p-2 bg-indigo-500 text-white font-medium rounded-md w-24 place-self-center shadow hover:shadow-xl hover:shadow-indigo-500/10"
        data-tip="Search with above filters"
        onMouseEnter={() => {
          ReactTooltip.show(searchButtonRef.current);
        }}
        onMouseLeave={() => {
          ReactTooltip.hide(searchButtonRef.current);
        }}
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
        Search
      </button>
    </div>
  );
}
