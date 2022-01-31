import Image from "next/image";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import Link from "next/link";

export default function Header2() {
  return (
    <nav className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-200 bg-gradient-to-r  from-black/20 to-black/20 px-6 py-1 flex justify-center items-center w-full h-20 fixed">
      <div className=" flex justify-between items-center w-[1280px] h-20">
        <Link href="/" passHref>
          <a>
            <Image
              className=""
              src="/lx-logo.png"
              alt="LX-logo"
              width={70}
              height={70}
            />
          </a>
        </Link>
        <div className="flex items-center rounded-xl">
          <div className="flex items-center relative">
            <FaSearch className="inline-block absolute object-center left-3 text-md text-black " />
            <input
              className="p-2 m-0 pl-10 bg-white/20 outline outline-1 rounded-md outline-black/50 focus-visible:outline-black focus-visible:outline-2 shadow focus:shadow-xl focus:shadow-black/20"
              name="search-field"
              placeholder="search by song title or lyrics"
            />
          </div>
          <button>
            <FaMicrophone className="text-[2.7rem] p-2 text-black ml-2 hover:bg-white/20 hover:rounded-full" />
          </button>
          <Link href="/popular" passHref>
            <a className="hover:bg-white/30  px-4 py-2 h-10 mx-1 font-medium text-black/50 hover:text-black rounded ">
              Popular
            </a>
          </Link>
          <Link href="/favorites" passHref>
            <a className="hover:bg-white/30 px-4 py-2 h-10 mx-1 font-medium text-black/50 hover:text-black rounded ">
              Favorites
            </a>
          </Link>
          <Link href="/history" passHref>
            <a className="hover:bg-white/30 px-4 py-2 h-10 mx-1 font-medium text-black/50 hover:text-black rounded ">
              History
            </a>
          </Link>
          <Link href="/login" passHref>
            <a className="bg-white/50 hover:bg-black border border-black px-4 py-2 mx-1 font-semibold text-black hover:text-white rounded shadow hover:shadow-xl hover:shadow-black/20">
              Log in
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
