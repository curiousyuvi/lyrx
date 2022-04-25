import Link from "next/link";
import { useAuthContext } from "../providers/authProvider";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function DrawerLink({ ButtonIcon, buttonText, path, setOpen }) {
  const themeContext: ThemeContext = useThemeContext();

  return (
    <Link href={path} passHref>
      <button
        onClick={() => {
          setOpen(false);
        }}
      >
        <div
          className={"bg-transparent flex items-center px-8 py-3 my-2 font-roboto-condensed font-bold rounded-xl".concat(
            themeContext.isLightTheme
              ? " text-gray-500 hover:text-gray-800 hover:bg-black/5"
              : " text-gray-300 hover:text-gray-100 hover:bg-white/5"
          )}
        >
          <ButtonIcon className="inline-block mr-6 text-2xl" />
          <h2 className="inline-block">{buttonText}</h2>
        </div>
      </button>
    </Link>
  );
}
