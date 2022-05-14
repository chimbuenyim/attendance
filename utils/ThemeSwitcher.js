import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from "./themes";

const ThemeSwitcher = ({ Component, pageProps }) => {
  const [currentTheme, setCurrentTheme] = useState(false);

  const handleChangeTheme = () => {
    setCurrentTheme(!currentTheme);
  };

  useEffect(() => {
    setCurrentTheme(currentTheme);
  }, []);
  return (
    <ThemeProvider theme={currentTheme ? theme.light : theme.dark}>
      <Component {...pageProps} handleChangeTheme={handleChangeTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
