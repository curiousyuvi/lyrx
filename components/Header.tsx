import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useThemeContext, ThemeContext } from "../providers/themeProvider";
import Navigation from "./Navigation";

export default function Header() {
  const themeContext: ThemeContext = useThemeContext();
  return (
    <>
      <nav
        className={"z-40 bg-clip-padding backdrop-filter backdrop-blur-md border border-t-0 border-x-0 px-2 py-1 flex justify-center items-center shadow w-full h-20 fixed".concat(
          themeContext.isLightTheme
            ? " border-indigo-200"
            : " border-indigo-800"
        )}
      >
        <div className="flex justify-between items-center w-[1280px] h-20 pl-4">
          <Link href="/" passHref>
            <a>
              <div className="h-[10px]"></div>
              <Image
                src={
                  themeContext.isLightTheme
                    ? "/lyrx-logo.svg"
                    : "/lyrx-logo-w.svg"
                }
                alt="lyrx"
                width={116.6}
                height={50}
              />
            </a>
          </Link>
          <Navigation />
        </div>
      </nav>
    </>
  );
}
