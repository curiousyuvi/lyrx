import { BiHistory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogIn, FiLogOut, FiTrendingUp } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import DrawerLink from "./DrawerLink";
import { AuthContextType, useAuthContext } from "../providers/authProvider";

export default function Drawer({ open, setOpen }) {
  const authContext: AuthContextType = useAuthContext();

  const handleLogin = () => {
    setOpen(false);
    authContext.setAuthModalOpen(true);
  };
  const handleLogout = () => {
    setOpen(false);
    authContext.logOut();
  };

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
        {authContext.user === null ? (
          <button onClick={handleLogin}>
            <div
              className={"bg-indigo-500/5".concat(
                " flex items-center px-8 py-3 my-2 font-medium text-indigo-400 hover:text-indigo-500 hover:bg-indigo-500/10 rounded-xl"
              )}
            >
              <FiLogIn className="inline-block mr-6 text-2xl" />
              <h2 className="inline-block">Log in</h2>
            </div>
          </button>
        ) : (
          <button onClick={handleLogout}>
            <div
              className={"bg-red-500/5".concat(
                " flex items-center px-8 py-3 my-2 font-medium text-red-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl"
              )}
            >
              <FiLogOut className="inline-block mr-6 text-2xl" />
              <h2 className="inline-block">Log out</h2>
            </div>
          </button>
        )}
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
