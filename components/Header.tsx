import Image from "next/image";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FiHome, FiLogIn, FiTrendingUp } from "react-icons/fi";
import { BiHistory } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import DrawerLink from "./DrawerLink";
import Drawer from "./Drawer";
import Navigation from "./Navigation";

export default function Header() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <nav className="bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-200 px-6 py-1 flex justify-center items-center w-full h-20 shadow-md fixed">
        <div className=" flex justify-between items-center w-[1280px] h-20">
          <Link href="/" passHref>
            <a>
              <div className="h-[10px]"></div>
              <Image
                src="/lyrx-logo.svg"
                alt="lyrx"
                width={116.6}
                height={50}
              />
            </a>
          </Link>
          <Navigation navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
        </div>
      </nav>
    </>
  );
}
