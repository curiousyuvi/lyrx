import { BsMusicNote } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useState, useRef } from "react";
import ReactTooltip from "react-tooltip";
import Link from "next/link";
import {
  FirestoreContext,
  useFirestoreContext,
} from "../providers/firestoreProvider";
import { AuthContext, useAuthContext } from "../providers/authProvider";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function HistoryLyricCard({ artist, title, id }) {
  {
    const likeRef = useRef();
    const deleteRef = useRef();
    const firestoreContext: FirestoreContext = useFirestoreContext();
    const authContext: AuthContext = useAuthContext();

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

    const handleDelete = () => {
      firestoreContext.deleteHistory(id);
    };

    return (
      <div className="bg-white h-40 rounded-md shadow-lg hover:shadow-xl flex flex-col justify-center relative overflow-hidden mx-2 my-4">
        <div className="p-2 pb-8">
          <div className="flex items-center justify-start my-1">
            <FaMicrophoneAlt className="my-[7px] mr-2 text-indigo-400" />
            <p className="max-h-10 w-11/12 text-sm font-medium text-gray-600 overflow-hidden">
              {artist}
            </p>
          </div>
          <div className="flex items-center justify-start my-1">
            <BsMusicNote className="my-[7px] mr-2 text-indigo-400" />
            <p className="max-h-10 w-11/12 text-sm font-medium text-gray-600 overflow-hidden">
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
          className="absolute top-1 right-10 p-1 text-2xl text-pink-400 rounded-full hover:bg-pink-50"
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
        <button
          ref={deleteRef}
          className="absolute top-1 right-1 p-1 text-2xl text-red-200 rounded-full hover:text-red-500 hover:bg-red-50"
          onClick={handleDelete}
          data-tip="Remove from history"
          onMouseEnter={() => {
            ReactTooltip.show(deleteRef.current);
          }}
          onMouseLeave={() => {
            ReactTooltip.hide(deleteRef.current);
          }}
        >
          <MdDelete />
        </button>
      </div>
    );
  }
}
