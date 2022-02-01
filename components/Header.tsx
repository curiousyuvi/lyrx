import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <nav className="bg-clip-padding backdrop-filter backdrop-blur-md border border-indigo-200 border-t-0 border-x-0 px-6 py-1 flex justify-center items-center shadow w-full h-20 fixed">
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
