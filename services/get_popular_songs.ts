import axios from "axios";
import apikey from "../secrets/apikey";
import API_KEY from "../secrets/apikey";
import { MUSIXMATCH_ENDPOINT } from "./endpoints";

interface LyricCardItem {
  id: string;
  title: string;
  artist: string;
}

const getPopularSongs = async function (
  country_id: string
): Promise<LyricCardItem[]> {
  try {
    const response = await axios.get(
      `${MUSIXMATCH_ENDPOINT}/chart.tracks.get`,
      {
        params: {
          chart_name: "top",
          page: 1,
          page_size: 20,
          country: country_id,
          apikey: API_KEY,
        },
      }
    );
    console.log(response.data);

    return response.data.message.body.track_list.map((e) => {
      return {
        id: e.track.track_id,
        title: e.track.track_name,
        artist: e.track.artist_name,
      };
    });
  } catch (e) {
    console.log("error in getting popular songs", e);
  }
};

export default getPopularSongs;

export type { LyricCardItem };
