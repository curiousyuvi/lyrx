import { GetStaticProps } from "next";
import Emoji from "../components/Emoji";
import Greeting from "../components/Greeting";
import LyricCards from "../components/LyricCards";
import { LyricCardItem } from "../models/lyricCardItem";
import getPopularLyricCardItems from "../services/get_popular_lyric_card_items";

export default function Home({
  hours,
  popularSongs: popularLyricCardItems,
}: {
  hours: number;
  popularSongs: LyricCardItem[];
}) {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-32 flex flex-col">
        <Greeting hours={hours} />
        <div className="flex items-center my-4 mt-6">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-500 mr-4">
            Trending Songs <Emoji symbol="0x1F525" />
          </h1>
        </div>
        <hr />
        <LyricCards lyricCardItems={popularLyricCardItems} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const popularSongs = await getPopularLyricCardItems("US");
  console.log(popularSongs);

  return {
    revalidate: 6400,
    props: {
      hours: new Date().getHours(),
      popularSongs: popularSongs,
    },
  };
};
