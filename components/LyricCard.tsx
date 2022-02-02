import { BsMusicNote } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

export default function LyricCard({ artist, title }) {
  {
    const [liked, setLiked] = useState(false);
    return (
      <div className="bg-white h-40 rounded-md shadow-lg hover:shadow-xl flex flex-col justify-center relative overflow-hidden mx-2 my-4">
        <div className="p-2 pb-8">
          <div className="flex items-start justify-start my-1">
            <FaMicrophoneAlt className="my-[7px] mr-2 text-indigo-400" />
            <p className="max-h-10 w-11/12 text-sm font-medium text-gray-600 overflow-hidden">
              {artist}
            </p>
          </div>
          <div className="flex items-start justify-start my-1">
            <BsMusicNote className="my-[7px] mr-2 text-indigo-400" />
            <p className="max-h-10 w-11/12 text-sm font-medium text-gray-600 overflow-hidden">
              {title}
            </p>
          </div>
        </div>
        <button>
          <div className="bg-indigo-500 w-full absolute bottom-0 left-0 px-2 py-2 text-white/80 hover:text-white text-sm font-semibold flex justify-center items-center">
            <span>Go to lyrics</span>
            <FiArrowRight className="ml-4 text-xl" />
          </div>
        </button>
        <button
          onClick={() => {
            setLiked(!liked);
          }}
        >
          {liked ? (
            <AiFillHeart className="absolute top-2 right-2 p-1 text-3xl text-pink-400 rounded-full hover:bg-pink-50" />
          ) : (
            <AiOutlineHeart className="absolute top-2 right-2 p-1 text-3xl text-pink-400 rounded-full hover:bg-pink-50" />
          )}
        </button>
      </div>
    );
  }
}

LyricCard.defaultProps = {
  song_artist: "Justin Bieber",
  song_title: "Let me love you",
};
