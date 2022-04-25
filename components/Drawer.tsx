import { BiHistory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogIn, FiLogOut, FiTrendingUp } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import DrawerLink from "./DrawerLink";
import { AuthContext, useAuthContext } from "../providers/authProvider";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function Drawer({ open, setOpen }) {
  const authContext: AuthContext = useAuthContext();
  const themeContext: ThemeContext = useThemeContext();

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
        className={"h-screen w-72 z-20 fixed right-0 top-0 flex flex-col p-4 py-2 text-xl shadow-2xl font-medium transition duration-300"
          .concat(open ? " translate-x-0" : " translate-x-72")
          .concat(themeContext.isLightTheme ? " bg-white" : " bg-gray-700")}
      >
        <div className={"flex justify-end"}>
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
          buttonText="HOME"
          ButtonIcon={FiHome}
          setOpen={setOpen}
        />
        <DrawerLink
          path="/favourites"
          buttonText="FAVOURITES"
          ButtonIcon={FaRegHeart}
          setOpen={setOpen}
        />
        <DrawerLink
          path="/history"
          buttonText="HISTORY"
          ButtonIcon={BiHistory}
          setOpen={setOpen}
        />
        {authContext.user === null ? (
          <button onClick={handleLogin}>
            <div
              className={"flex items-center px-8 py-3 my-2 font-roboto-condensed font-bold rounded-xl".concat(
                themeContext.isLightTheme
                  ? " bg-indigo-500/5 text-indigo-400 hover:text-indigo-500 hover:bg-indigo-500/10"
                  : " bg-indigo-500/10 text-indigo-400 hover:text-gray-100 hover:bg-indigo-500/50"
              )}
            >
              <FiLogIn className="inline-block mr-6 text-2xl" />
              <h2 className="inline-block">LOG IN</h2>
            </div>
          </button>
        ) : (
          <button onClick={handleLogout}>
            <div
              className={"bg-red-500/5 flex items-center px-8 py-3 my-2 font-roboto-condensed font-bold rounded-xl".concat(
                themeContext.isLightTheme
                  ? " text-red-400 hover:text-red-500 hover:bg-red-500/10"
                  : " text-red-400 hover:text-gray-100 hover:bg-red-500/30"
              )}
            >
              <FiLogOut className="inline-block mr-6 text-2xl" />
              <h2 className="inline-block">LOG OUT</h2>
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
