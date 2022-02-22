import { GetStaticPaths, GetStaticProps } from "next/types";
import { useEffect, useRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaMicrophoneAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import ReactTooltip from "react-tooltip";
import "react-loading-skeleton/dist/skeleton.css";
import getLyricsItem from "../../../../services/get_lyrics_item";
import {
  FirestoreContext,
  useFirestoreContext,
} from "../../../../providers/firestoreProvider";

export default function Lyrics({
  id,
  artist,
  title,
  lyrics,
  loading,
}: {
  id: string;
  artist: string;
  title: string;
  lyrics: string;
  loading: boolean;
}) {
  const [liked, setLiked] = useState(false);
  const likeButtonRef = useRef();
  const firestoreContext: FirestoreContext = useFirestoreContext();

  useEffect(() => {
    firestoreContext.addHistory({ id, artist, title, timestamp: Date.now() });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-28 flex flex-col text-gray-500">
        <div className="p-4 min-h-screen w-full rounded-lg bg-white relative">
          <button
            ref={likeButtonRef}
            className="absolute top-6 right-6 p-2 text-3xl text-pink-500 rounded-full hover:bg-pink-500/10"
            data-tip={liked ? "Remove from favourites" : "Add to favourites"}
            onMouseEnter={() => {
              ReactTooltip.show(likeButtonRef.current);
            }}
            onMouseLeave={() => {
              ReactTooltip.hide(likeButtonRef.current);
            }}
            onClick={() => {
              setLiked(!liked);
            }}
          >
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <h2 className="text-4xl m-4 font-medium text-gray-600  w-3/4">
            {title || <Skeleton />}
          </h2>
          <div className="text-xl m-4 flex items-center">
            <FaMicrophoneAlt className="text-lg" />
            <h2 className="mx-2 font-medium w-3/4">
              {artist || (
                <div className="w-full">
                  <Skeleton />
                </div>
              )}
            </h2>
          </div>
          <hr className="my-4" />
          <div className="flex flex-wrap m-2 text-xl whitespace-pre-line w-full">
            {lyrics || (
              <div className="min-w-64 w-11/12">
                <Skeleton count={7} />
                <br />
                <Skeleton count={10} />
                <br />
                <Skeleton count={6} />
                <br />
                <Skeleton count={10} />
                <br />
                <Skeleton count={10} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type Params = {
  params: {
    artist: string;
    title: string;
    id: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  var lyricsItem = await getLyricsItem(params.artist, params.title, params.id);
  return {
    props: {
      id: params.id,
      artist: params.artist.toUpperCase(),
      title: params.title.toUpperCase(),
      lyrics: lyricsItem.lyrics,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
