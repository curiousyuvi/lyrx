import { createContext, useContext, useState } from "react";

const themeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  function switchTheme(flag) {
    setIsLightTheme(flag);
  }
  return (
    <themeContext.Provider value={{ isLightTheme, switchTheme }}>
      {children}
    </themeContext.Provider>
  );
}

interface ThemeContext {
  isLightTheme: boolean;
  switchTheme: (flag: any) => void;
}

const useThemeContext = () => {
  return useContext(themeContext);
};

export { useThemeContext };
export type { ThemeContext };
