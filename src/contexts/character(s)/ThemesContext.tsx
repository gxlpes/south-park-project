import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { IChildren } from "../../interfaces/reactInterfaces";
import { ITheme } from "../../interfaces/contextInterfaces";

export const ThemesContext = createContext<ITheme>({} as ITheme);

export const ThemesContextProvider = ({ children }: IChildren) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return <ThemesContext.Provider value={{ toggleTheme, theme }}>{children}</ThemesContext.Provider>;
};
