import axios from "axios";
import { LyricCardItem } from "../models/lyricCardItem";
import { MUSIXMATCH_ENDPOINT } from "./endpoints";

const getPopularLyricCardItems = async function (
  country_id: string
): Promise<LyricCardItem[]> {
  let popularLyricCardItems: LyricCardItem[] = [];
  try {
    const response = await axios.get(
      `${MUSIXMATCH_ENDPOINT}/chart.tracks.get`,
      {
        params: {
          chart_name: "top",
          page: 1,
          page_size: 100,
          country: country_id,
          apikey: process.env.NEXT_PUBLIC_REACT_MUSIXMATCH_API_KEY,
        },
      }
    );

    popularLyricCardItems = response.data.message.body.track_list.map((e) => {
      return {
        id: e.track.track_id,
        title: e.track.track_name,
        artist: e.track.artist_name,
      };
    });
  } catch (e) {
    console.error("error in getting popular songs", e);
  } finally {
    return popularLyricCardItems;
  }
};

export default getPopularLyricCardItems;