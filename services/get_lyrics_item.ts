import axios from "axios";
import API_KEY from "../secrets/apikey";
import apikey from "../secrets/apikey";
import { LYRICSOVH_ENDPOINT, MUSIXMATCH_ENDPOINT } from "./endpoints";

interface LyricsItem {
  lyrics: string;
}

const getLyricsItem = async (
  artist: string,
  title: string,
  id: string
): Promise<LyricsItem> => {
  const lyricsItem = { lyrics: "No Lyrics Found : <" };
  try {
    const responseLOVH = await axios.get(
      `${LYRICSOVH_ENDPOINT}/${encodeURIComponent(artist)}/${encodeURIComponent(
        title
      )}`
    );

    console.log("Lyrics loading from LYRICSOCH");
    console.log(responseLOVH.data.lyrics);
    lyricsItem.lyrics = responseLOVH.data.lyrics;
  } catch (e) {
    console.error("error in getting lyrics from LYRICSOVH", e);
    try {
      const responseMXM = await axios.get(
        `${MUSIXMATCH_ENDPOINT}/track.lyrics.get`,
        {
          params: {
            track_id: id,
            apikey: API_KEY,
          },
        }
      );

      console.log("Lyrics loading from MUSIXMATCH");
      console.log(responseMXM.data.message.body.lyrics.lyrics_body);
      lyricsItem.lyrics =
        responseMXM.data.message.body.lyrics.lyrics_body.split("*******")[0];
    } catch (e) {
      console.error("error in getting lyrics from MUSIXMATCH", e);
    }
  } finally {
    return lyricsItem;
  }
};

export default getLyricsItem;
export type { LyricsItem };
