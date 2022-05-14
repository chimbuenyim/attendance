import ThemeSwitcher from "../utils/ThemeSwitcher";

function MyApp({ Component, pageProps }) {
  return <ThemeSwitcher Component={Component} pageProps={pageProps} />;
}

export default MyApp;
