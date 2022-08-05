import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/styles/GlobalStyles";
import theme from "../utils/styles/themes";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    let storedTheme = JSON.parse(window.localStorage.getItem("theme"));

    if (storedTheme == null || undefined) {
      window.localStorage.setItem("theme", JSON.stringify(false));
    } else {
      setCurrentTheme(storedTheme);
    }
  }, []);

  const handleChangeTheme = () => {
    window.localStorage.setItem("theme", JSON.stringify(!currentTheme));
    setCurrentTheme(JSON.parse(window.localStorage.getItem("theme")));
  };

  return (
    <ThemeProvider theme={currentTheme ? theme.light : theme.dark}>
      <GlobalStyles />
      <Component pageProps={pageProps} handleChangeTheme={handleChangeTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
