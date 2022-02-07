import { GetStaticPaths, GetStaticProps } from "next/types";
import getLyricCardItems from "../services/get_lyric_card_items";

export default function SearchOptions({
  lyricWord,
  setLyricWord,
  desc,
  setDesc,
}) {
  return (
    <div
      className={`p-4 pt-6 my-4 w-full flex flex-col bg-indigo-50 rounded-lg text-gray-600 text-sm sm:text-lg shadow`}
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
          <span className="text-gray-800 font-semibold">
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
          <span className="text-gray-800 font-semibold">
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
      <button className="m-0 mt-6 p-2 bg-indigo-500 text-white font-medium rounded-md w-24 place-self-center shadow hover:shadow-xl hover:shadow-indigo-500/10"onClick={()=>{
        console.log('hello')
      }}>
        Search
      </button>
    </div>
  );
}
