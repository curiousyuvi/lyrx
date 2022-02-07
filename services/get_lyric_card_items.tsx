import axios from "axios";
import API_KEY from "../secrets/apikey";
import apikey from "../secrets/apikey";
import { MUSIXMATCH_ENDPOINT } from "./endpoints";
import { LyricCardItem } from "./get_popular_lyric_card_items";

export default async function getLyricCardItems(
  q: string,
  lyricWord: string,
  desc: string
): Promise<LyricCardItem[]> {
  let lyricCardItems: LyricCardItem[] = [];
  try {
    const response = await axios.get(`${MUSIXMATCH_ENDPOINT}/track.search`, {
      params: {
        q_track_artist: q,
        q_lyrics: lyricWord,
        page_size: 10,
        page: 1,
        s_track_rating: desc,
        apikey: API_KEY,
      },
    });

    console.log("response", response.data.message.body.track_list);
    lyricCardItems = response.data.message.body.track_list.map((e) => {
      return {
        id: e.track.track_id,
        title: e.track.track_name,
        artist: e.track.artist_name,
      };
    });
  } catch (e) {
    console.error("error in getting lyricCardItems", e);
  } finally {
    return lyricCardItems;
  }
}
