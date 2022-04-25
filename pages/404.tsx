import Head from "next/head";
import Image from "next/image";
import Emoji from "../components/Emoji";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function Error() {
  const themeContext: ThemeContext = useThemeContext();
  return (
    <>
      <Head>
        <title>Page not found | Lyrx</title>
      </Head>
      <div
        className={"flex flex-col w-full h-screen items-center justify-center p-8".concat(
          themeContext.isLightTheme ? " bg-gray-100" : " bg-gray-800"
        )}
      >
        <Image
          src={themeContext.isLightTheme ? "/404.svg" : "/404-d.svg"}
          alt="Empty"
          height={200}
          width={200}
        />
        <span
          className={"p-4 text-xl font-medium".concat(
            themeContext.isLightTheme ? " text-gray-500" : " text-gray-100"
          )}
        >
          Page not found <Emoji symbol={"0x1F61E"} />
        </span>
      </div>
    </>
  );
}
