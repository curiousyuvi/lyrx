import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import Drawer from "./Drawer";

export default function MobileNav() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <Link href="/search">
        <a>
          <FiSearch className="p-2 rounded m-0 mr-1 xsm:mr-6 text-5xl text-indigo-400 rounded-full hover:text-indigo-500 hover:bg-indigo-500/5" />
        </a>
      </Link>
      <button
        onClick={() => {
          setNavBarOpen(!navBarOpen);
        }}
      >
        <FiMenu className="p-2 rounded m-0 text-5xl text-gray-400 rounded-full hover:text-indigo-500 hover:bg-indigo-500/5" />
      </button>
      <Drawer open={navBarOpen} setOpen={setNavBarOpen} />
    </div>
  );
}
