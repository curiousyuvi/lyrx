import { LyricCardItem } from "../services/get_popular_lyric_card_items";
import LyricCard from "./LyricCard";
import Image from "next/image";
import Emoji from "./Emoji";

export default function LyricCards({
  lyricCardItems,
}: {
  lyricCardItems: LyricCardItem[];
}) {
  console.log(lyricCardItems);
  return !lyricCardItems || lyricCardItems.length == 0 ? (
    <div className="flex flex-col w-full items-center p-8">
      <Image src="/empty.svg" alt="Empty" height={200} width={200} />
      <span className="p-4 text-xl font-medium text-gray-500">
        No lyrics found <Emoji symbol={"0x1F61E"} />
      </span>
    </div>
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
