import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function ThemeToggleButton() {
  const themeContext: ThemeContext = useThemeContext();
  function handleChange() {
    themeContext.switchTheme(!themeContext.isLightTheme);
    console.log("switch here");
  }
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={"checkbox fixed h-12 w-12 z-20 opacity-0".concat(
          themeContext.isLightTheme ? "" : " dark"
        )}
        onChange={handleChange}
      />
      <label
        className={"h-[18px] w-[34px] flex rounded-full items-center justify-between p-[3px] relative scale-150 mx-2 mr-5".concat(
          themeContext.isLightTheme ? " bg-blue-500" : " bg-black"
        )}
      >
        <FaMoon className="text-white text-sm" />
        <BsFillSunFill className="text-yellow-300 text-sm" />
        <div
          className={"w-[16px] h-[16px] bg-white transition-transform rounded-full fixed top-[1px] left-[1px]".concat(
            themeContext.isLightTheme ? "" : " translate-x-4"
          )}
        />
      </label>
    </div>
  );
}
