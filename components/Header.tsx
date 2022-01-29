import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-200 bg-gradient-to-r  from-pink-500/10 to-red-500/10 px-6 py-1 flex justify-between items-center w-full h-20 fixed">
      <Link href="/" passHref><a p-0 m-0><Image
        className=""
        src="/lx-logo.png"
        alt="LX-logo"
        width={70}
        height={70}
      /></a></Link>
      <div>
        <Link href="/popular" passHref><a className="hover:bg-white/30  px-4 py-2 h-10 mx-2 font-medium text-black/50 hover:text-black rounded ">
          Popular</a></Link>
       <Link href="/favorites" passHref><a className="hover:bg-white/30 px-4 py-2 h-10 mx-2 font-medium text-black/50 hover:text-black rounded ">
          Favorites</a></Link>
       <Link href="/history" passHref><a className="hover:bg-white/30 px-4 py-2 h-10 mx-2 font-medium text-black/50 hover:text-black rounded ">
          History</a></Link>
        <Link href="/login" passHref><a className="bg-white hover:bg-pink-500 px-4 py-3 h-10 mx-2 font-semibold text-pink-500 hover:text-white rounded shadow">
          Log in
        </a></Link>
      </div>
    </div>
  );
}
