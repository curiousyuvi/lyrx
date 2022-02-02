import { LyricCardItem } from "../services/get_popular_songs";
import LyricCard from "./LyricCard";

export default function LyricCards({
  lyricCardItems,
}: {
  lyricCardItems: LyricCardItem[];
}) {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {lyricCardItems.map((e) => {
        return <LyricCard key={e.id} artist={e.artist} title={e.title} />;
      })}
    </div>
  );
}
