import Emoji from "../components/Emoji";
import Greeting from "../components/Greeting";
import LyricCards from "../components/LyricCards";
import getCountry, { Country } from "../services/get_country";
import getPopularSongs, { LyricCardItem } from "../services/get_popular_songs";

export default function Home({
  country,
  hours,
  popularSongs,
}: {
  country: Country;
  hours: number;
  popularSongs: LyricCardItem[];
}) {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-32 flex flex-col">
        <Greeting hours={hours} />
        <div className="flex items-center my-4 mt-6">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-500 mr-4">
            Trending Songs in {country.name}
            <Emoji symbol="0x1F525" />
          </h1>
        </div>
        <hr />
        <LyricCards lyricCardItems={popularSongs} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const country = await getCountry();
  const popularSongs = await getPopularSongs(country.code);
  console.log(popularSongs);

  return {
    props: {
      country: country,
      hours: new Date().getHours(),
      popularSongs: popularSongs,
    },
  };
}
