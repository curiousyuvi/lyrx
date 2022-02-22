import Head from "next/head";
import Image from "next/image";
import Emoji from "../components/Emoji";

export default function Error() {
  return (
    <>
      <Head>
        <title>Page not found | Lyrx</title>
      </Head>
      <div className="flex flex-col w-full h-screen items-center justify-center p-8">
        <Image src="/404.svg" alt="Empty" height={200} width={200} />
        <span className="p-4 text-xl font-medium text-gray-500">
          Page not found <Emoji symbol={"0x1F61E"} />
        </span>
      </div>
    </>
  );
}
