import { BsMusicNoteList } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function LyricCard({ artist, track }) {
  {
    return (
      <div className="bg-white h-40 rounded-md shadow-lg hover:shadow-xl flex flex-col items-center justify-center relative overflow-hidden mx-2 my-4">
        <div className="p-2 pb-8">
          <div className="flex items-start justify-start my-1">
            <FaMicrophoneAlt className="my-[7px] mr-2" />
            <span className="max-h-10 w-11/12 text-sm font-medium text-gray-600 overflow-hidden">
              {artist}
            </span>
          </div>
          <div className="flex items-start justify-start my-1">
            <BsMusicNoteList className="my-[7px] mr-2" />
            <span className="max-h-10 w-11/12 text-sm font-medium text-gray-600 overflow-hidden">
              {track}
            </span>
          </div>
        </div>
        <button>
          <div className="bg-indigo-500 w-full absolute bottom-0 left-0 px-2 py-2 text-white text-sm font-semibold flex justify-center items-center">
            <span>Go to lyrics</span>
            <FiArrowRight className="ml-4 text-xl" />
          </div>
        </button>
      </div>
    );
  }
}

LyricCard.defaultProps = {
  artist: "Justin Bieber Baby Baby Baby Baby Baby Baby Baby Baby",
  track: "Baby Baby Baby Baby Baby Baby Baby Baby",
};
