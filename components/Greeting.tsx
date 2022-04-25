import { AuthContext, useAuthContext } from "../providers/authProvider";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";
import Emoji from "./Emoji";

const firstNameWithFirstLetterCapital = (str) => {
  return str.split(" ")[0].charAt(0).toUpperCase() + str.split(" ")[0].slice(1);
};

export default function Greeting({ hours }: { hours: number }) {
  const authContext: AuthContext = useAuthContext();
  const themeContext: ThemeContext = useThemeContext();
  return (
    <h1
      className={"text-3xl sm:text-4xl font-medium mr-4 my-2 mb-6".concat(
        themeContext.isLightTheme ? " text-gray-500" : " text-gray-100"
      )}
    >
      {hours >= 0 ? (
        hours >= 12 ? (
          hours >= 18 ? (
            <>
              Good Evening <Emoji symbol="0x1F31F" />
            </>
          ) : (
            <>
              Good Afternoon <Emoji symbol="0x1F324" />
            </>
          )
        ) : (
          <>
            Good Morning <Emoji symbol="0x1F305" />
          </>
        )
      ) : null}{" "}
      {authContext.displayName != null
        ? firstNameWithFirstLetterCapital(authContext.displayName)
        : ""}
    </h1>
  );
}
