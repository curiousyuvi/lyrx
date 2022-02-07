import { LyricCardItem } from "../services/get_popular_lyric_card_items";
import LyricCard from "./LyricCard";

export default function LyricCards({
  lyricCardItems,
}: {
  lyricCardItems: LyricCardItem[];
}) {
  console.log(lyricCardItems);
  return !lyricCardItems ? (
    <h1>No lyrics found</h1>
  ) : (
    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {lyricCardItems.map((e) => {
        return (
          <LyricCard key={e.id} artist={e.artist} title={e.title} id={e.id} />
        );
      })}
    </div>
  );
}
