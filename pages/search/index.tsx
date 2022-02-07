import { IoMdOptions } from "react-icons/io";
import DesktopSearchField from "../../components/desktopSearchField";
import MobileSearchField from "../../components/mobileSearchField";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import SearchOptions from "../../components/SearchOptions";
import Emoji from "../../components/Emoji";
import getLyricCardItems from "../../services/get_lyric_card_items";
import LyricCards from "../../components/LyricCards";
import { LyricCardItem } from "../../services/get_popular_lyric_card_items";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [optionOpen, setOptionOpen] = useState(false);
  const [q, setQ] = useState(prop_q);
  const [lyricWord, setLyricWord] = useState(prop_lyricWord);
  const [desc, setDesc] = useState(prop_desc);

  const goToSearch = (q: string, lyricWord: string, desc: string) => {
    router.push({
      pathname: "/search",
      query: {
        q: q,
        lyric_word: lyricWord,
        desc: desc,
      },
    });
  };

  return (
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
              onClick={() => {
                setOptionOpen(!optionOpen);
              }}
              className={"text-xl text-white font-medium py-2 px-3 sm:py-3 sm:px-4 ml-2 flex justify-center items-center rounded-md shadow hover:shadow-indigo-500/20 hover:shadow-xl ".concat(
                optionOpen ? "bg-indigo-100" : "bg-indigo-500"
              )}
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
            />
          </div>
          <hr className="my-4" />
          {!q ? (
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
  );
}

Search.getInitialProps = async ({ query }) => {
  return {
    prop_q: query.q,
    prop_lyricWord: query.lyric_word,
    prop_desc: query.desc || "desc",
    prop_lyricCardItems: !query.q
      ? []
      : await getLyricCardItems(
          query.q,
          query.lyric_word,
          query.desc || "desc"
        ),
  };
};
