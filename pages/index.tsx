import { GetStaticProps } from "next";
import Head from "next/head";
import Emoji from "../components/Emoji";
import Greeting from "../components/Greeting";
import LyricCards from "../components/LyricCards";
import { LyricCardItem } from "../models/lyricCardItem";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";
import getPopularLyricCardItems from "../services/get_popular_lyric_card_items";

export default function Home({
  hours,
  popularSongs: popularLyricCardItems,
}: {
  hours: number;
  popularSongs: LyricCardItem[];
}) {
  const themeContext: ThemeContext = useThemeContext();
  return (
    <>
      <Head>
        <title>Home | Lyrx</title>
      </Head>
      <div
        className={"min-h-screen w-full".concat(
          themeContext.isLightTheme ? " bg-gray-100 " : " bg-gray-800"
        )}
      >
        <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-32 flex flex-col">
          <Greeting hours={hours} />
          <div className="flex items-center my-4 mt-6">
            <h1
              className={"text-2xl sm:text-3xl font-medium mr-4".concat(
                themeContext.isLightTheme ? " text-gray-500" : " text-gray-100"
              )}
            >
              Trending Songs <Emoji symbol="0x1F525" />
            </h1>
          </div>
          <hr />
          <LyricCards lyricCardItems={popularLyricCardItems} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const popularSongs = await getPopularLyricCardItems("US");

  return {
    revalidate: 6400,
    props: {
      hours: new Date().getHours(),
      popularSongs: popularSongs,
    },
  };
};
