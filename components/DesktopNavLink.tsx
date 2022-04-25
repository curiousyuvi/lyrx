import Link from "next/link";
import { useRef } from "react";
import ReactTooltip from "react-tooltip";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function DesktopNavLink({ path, title }) {
  const desktopNavRef = useRef();
  const themeContext: ThemeContext = useThemeContext();
  return (
    <Link href={path} passHref>
      <a
        ref={desktopNavRef}
        data-tip={`Go to ${title}`}
        className={"px-4 py-2 h-10 mx-2 font-roboto-condensed font-bold rounded ".concat(
          themeContext.isLightTheme
            ? " text-gray-500 hover:text-indigo-500 hover:bg-indigo-500/5"
            : " text-gray-300 hover:text-gray-100 hover:bg-indigo-500/20"
        )}
        onMouseEnter={() => {
          ReactTooltip.show(desktopNavRef.current);
        }}
        onMouseLeave={() => {
          ReactTooltip.hide(desktopNavRef.current);
        }}
      >
        {title}
      </a>
    </Link>
  );
}
