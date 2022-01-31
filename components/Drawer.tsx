import { BiHistory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogIn, FiTrendingUp } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import DrawerLink from "./DrawerLink";

export default function Drawer({ open, setOpen }) {
  return (
    <>
      <div
        className={"h-screen w-72 z-20 bg-white fixed right-0 top-0 flex flex-col p-4 py-2 divide-y-2 divide-black/10 text-xl shadow-2xl text-gray-500 font-medium transition duration-300 ".concat(
          open ? "translate-x-0" : "translate-x-72"
        )}
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            <CgClose className="p-2 rounded my-4 mx-2 text-5xl text-gray-400 rounded-full hover:text-red-500 hover:bg-red-500/5" />
          </button>
        </div>

        <DrawerLink
          path="/"
          buttonText="Home"
          ButtonIcon={FiHome}
          setOpen={setOpen}
        />
        <DrawerLink
          path="/popular"
          buttonText="Popular"
          ButtonIcon={FiTrendingUp}
          setOpen={setOpen}
        />
        <DrawerLink
          path="/favorites"
          buttonText="Favorites"
          ButtonIcon={FaRegHeart}
          setOpen={setOpen}
        />
        <DrawerLink
          path="/history"
          buttonText="History"
          ButtonIcon={BiHistory}
          setOpen={setOpen}
        />
        <DrawerLink
          path="/login"
          buttonText="Log in"
          ButtonIcon={FiLogIn}
          setOpen={setOpen}
          recommended
        />
      </div>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={"h-screen w-screen z-10  bg-gradient-to-r from-black/5 to-black/30 fixed right-0 top-0 transition duration-300 ".concat(
          open ? "translate-x-0" : "translate-x-full"
        )}
      />
    </>
  );
}
