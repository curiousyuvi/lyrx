import { BsMusicNote } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState, useRef } from "react";
import ReactTooltip from "react-tooltip";
import Link from "next/link";
import {
  FirestoreContext,
  useFirestoreContext,
} from "../providers/firestoreProvider";
import { AuthContext, useAuthContext } from "../providers/authProvider";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function LyricCard({ artist, title, id }) {
  {
    const likeRef = useRef();
    const firestoreContext: FirestoreContext = useFirestoreContext();
    const authContext: AuthContext = useAuthContext();
    const themeContext: ThemeContext = useThemeContext();

    const liked = () => {
      return firestoreContext.favouritesLyricCardItems.some((e) => e.id === id);
    };

    const handleLike = () => {
      if (authContext.user === null) {
        authContext.setAuthModalOpen(true);
        return;
      }
      if (liked()) {
        firestoreContext.deleteFavourite(id);
      } else {
        firestoreContext.addFavourite({ artist, title, id });
      }
    };

    return (
      <div
        className={"h-40 rounded-md shadow-lg hover:shadow-xl flex flex-col justify-center relative overflow-hidden mx-2 my-4".concat(
          themeContext.isLightTheme ? " bg-white" : " bg-gray-700"
        )}
      >
        <div className="p-2 pb-8">
          <div className="flex items-center justify-start my-1">
            <FaMicrophoneAlt className="my-[7px] mr-2 text-indigo-400" />
            <p
              className={"max-h-10 w-11/12 text-sm font-medium overflow-hidden".concat(
                themeContext.isLightTheme ? " text-gray-600" : " text-gray-100"
              )}
            >
              {artist}
            </p>
          </div>
          <div className="flex items-center justify-start my-1">
            <BsMusicNote className="my-[7px] mr-2 text-indigo-400" />
            <p
              className={"max-h-10 w-11/12 text-sm font-medium overflow-hidden".concat(
                themeContext.isLightTheme ? " text-gray-600" : " text-gray-100"
              )}
            >
              {title}
            </p>
          </div>
        </div>
        <Link
          href={`/lyrics/${encodeURIComponent(artist)}/${encodeURIComponent(
            title
          )}/${encodeURIComponent(id)}`}
          passHref
        >
          <button>
            <div className="bg-indigo-500 w-full absolute bottom-0 left-0 px-2 py-2 text-white/80 hover:text-white text-sm font-semibold flex justify-center items-center">
              <span>Go to lyrics</span>
              <FiArrowRight className="ml-4 text-xl" />
            </div>
          </button>
        </Link>
        <button
          ref={likeRef}
          className={"absolute top-1 right-1 p-1 text-2xl rounded-full".concat(
            themeContext.isLightTheme
              ? " text-pink-400 hover:bg-pink-50"
              : " text-pink-400 hover:text-gray-100 hover:bg-pink-500/80"
          )}
          onClick={handleLike}
          data-tip={liked() ? "Remove from favourites" : "Add to favourites"}
          onMouseEnter={() => {
            ReactTooltip.show(likeRef.current);
          }}
          onMouseLeave={() => {
            ReactTooltip.hide(likeRef.current);
          }}
        >
          {liked() ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
    );
  }
}
