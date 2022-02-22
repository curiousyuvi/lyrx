import { IoMdOptions } from "react-icons/io";
import DesktopSearchField from "../../components/desktopSearchField";
import MobileSearchField from "../../components/mobileSearchField";
import { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import SearchOptions from "../../components/SearchOptions";
import Emoji from "../../components/Emoji";
import getLyricCardItems from "../../services/get_lyric_card_items";
import LyricCards from "../../components/LyricCards";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import ReactTooltip from "react-tooltip";
import { LyricCardItem } from "../../models/lyricCardItem";
import Head from "next/head";

export default function Search({
  prop_q,
  prop_lyricWord,
  prop_desc,
  prop_lyricCardItems,
}: {
  prop_q: string;
  prop_lyricWord: string;
  prop_desc: string;
  prop_lyricCardItems: LyricCardItem[];
}) {
  const [optionOpen, setOptionOpen] = useState(false);
  const filterOptionsRef = useRef();
  const [q, setQ] = useState(prop_q);
  const [lyricWord, setLyricWord] = useState(prop_lyricWord);
  const [desc, setDesc] = useState(prop_desc);

  return (
    <>
      <Head>
        <title>Results for &apos;{q}&apos; | Lyrx</title>
      </Head>
      <div className="bg-gray-100 min-h-screen w-full">
        <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-28 flex flex-col">
          <div className="min-h-screen w-full rounded-lg p-4">
            <div className="flex w-full items-center justify-start">
              <div className="sm:hidden w-full">
                <MobileSearchField
                  q={q}
                  setQ={setQ}
                  lyricWord={lyricWord}
                  desc={desc}
                />
              </div>
              <div className="hidden sm:flex w-full">
                <DesktopSearchField
                  q={q}
                  setQ={setQ}
                  lyricWord={lyricWord}
                  desc={desc}
                />
              </div>
              <button
                ref={filterOptionsRef}
                onClick={() => {
                  setOptionOpen(!optionOpen);
                }}
                className={"text-xl text-white font-medium py-2 px-3 sm:py-3 sm:px-4 ml-2 flex justify-center items-center rounded-md shadow hover:shadow-indigo-500/20 hover:shadow-xl ".concat(
                  optionOpen ? "bg-indigo-100" : "bg-indigo-500"
                )}
                data-tip={
                  optionOpen ? "close filter options" : "open filter options"
                }
                onMouseEnter={() => {
                  ReactTooltip.show(filterOptionsRef.current);
                }}
                onMouseLeave={() => {
                  ReactTooltip.hide(filterOptionsRef.current);
                }}
              >
                {optionOpen ? (
                  <MdClose className="text-2xl" />
                ) : (
                  <IoMdOptions className="text-2xl" />
                )}
              </button>
            </div>
            <div
              className={"overflow-hidden transition-[max-height] duration-500 ease-in-out ".concat(
                optionOpen ? "max-h-screen" : "max-h-0"
              )}
            >
              <SearchOptions
                lyricWord={lyricWord}
                setLyricWord={setLyricWord}
                desc={desc}
                setDesc={setDesc}
                q={q}
              />
            </div>
            <hr className="my-4" />
            {!prop_q ? (
              <div className="flex flex-col items-center text-2xl text-gray-500 justify-center w-full h-[300px]">
                <Image
                  src="/search.svg"
                  alt="search for lyrics"
                  width="250px"
                  height="250px"
                />
                <span className="flex">
                  <Emoji symbol="0x1F50D" />
                  <h1 className="mx-2">Search for any lyrics</h1>
                </span>
              </div>
            ) : (
              <LyricCards lyricCardItems={prop_lyricCardItems} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

interface Query {
  q: string;
  lyric_word: string;
  desc: string;
}

export const getServerSideProps = async ({ query }: { query: Query }) => {
  return {
    props: {
      prop_q: query.q || "",
      prop_lyricWord: query.lyric_word || "",
      prop_desc: query.desc || "desc",
      prop_lyricCardItems: !query.q
        ? []
        : await getLyricCardItems(
            query.q,
            query.lyric_word,
            query.desc || "desc"
          ),
    },
  };
};
