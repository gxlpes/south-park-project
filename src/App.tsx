import AllRoutes from "./routes/AllRoutes";
import { useContext } from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { ThemesContext } from "./contexts/character(s)/ThemesContext";

function App() {
  const { theme } = useContext(ThemesContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
