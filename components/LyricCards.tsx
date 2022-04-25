import LyricCard from "./LyricCard";
import Image from "next/image";
import Emoji from "./Emoji";
import { LyricCardItem } from "../models/lyricCardItem";
import { HistoryLyricCardItem } from "../models/historyLyricCardItem";
import HistoryLyricCard from "./historyLyricCard";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function LyricCards({
  lyricCardItems,
  history,
}: {
  lyricCardItems: LyricCardItem[] | HistoryLyricCardItem[];
  history: boolean;
}) {
  const themeContext: ThemeContext = useThemeContext();
  return !lyricCardItems || lyricCardItems.length == 0 ? (
    <div className="flex flex-col w-full items-center p-8">
      <Image
        src={themeContext.isLightTheme ? "/empty.svg" : "/empty-d.svg"}
        alt="Empty"
        height={200}
        width={200}
      />
      <span
        className={"p-4 text-xl font-medium".concat(
          themeContext.isLightTheme ? " text-gray-500" : " text-gray-200"
        )}
      >
        No lyrics found <Emoji symbol={"0x1F61E"} />
      </span>
    </div>
  ) : (
    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {lyricCardItems.map((e) => {
        if (history) {
          return (
            <HistoryLyricCard
              key={e.id}
              artist={e.artist}
              title={e.title}
              id={e.id}
            />
          );
        }
        return (
          <LyricCard key={e.id} artist={e.artist} title={e.title} id={e.id} />
        );
      })}
    </div>
  );
}

LyricCards.defaultProps = {
  history: false,
};
