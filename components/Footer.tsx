import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer: FC = function () {
  return (
    <div className="h-32 w-full bg-bottom bg-cover bg-[url('../public/indigo-texture.jpg')] flex flex-col justify-center relative">
      <div className="h-32 backdrop-blur-sm w-full bg-black/20 absolute left top z-10"></div>
      <div className="z-20 flex flex-col items-center justify-center">
        {" "}
        <h1 className="text-white text-xl font-semibold ">
          Made with{" "}
          <Link href="https://nextjs.org/">
            <a
              className="text-sky-500 decoration-2 hover:underline"
              target="_blank"
            >
              Next.js
            </a>
          </Link>
        </h1>
        <Link href="https://github.com/curiousyuvi/lyrx" passHref>
          <a className="text-white/70 hover:text-pink-500" target="_blank">
            <div className="mt-4 flex items-center justify-center ">
              <FaGithub className="text-xl inline-block" />
              <h1 className="ml-2 font-semibold inline-block">Contribute</h1>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
