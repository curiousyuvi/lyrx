import Link from "next/link";
import { useRef } from "react";
import ReactTooltip from "react-tooltip";

export default function DesktopNavLink({ path, title }) {
  const desktopNavRef = useRef();
  return (
    <Link href={path} passHref>
      <a
        ref={desktopNavRef}
        data-tip={`Go to ${title}`}
        className="hover:bg-indigo-500/5  px-4 py-2 h-10 mx-2 font-roboto-condensed font-bold text-gray-500 hover:text-indigo-500 rounded "
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
