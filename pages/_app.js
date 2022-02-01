import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Script from "next/script";
import Head from "next/head";
import AOS from "aos";

import "../styles/globals.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4d17e2",
      },
      secondary: {
        main: "#4d17e2",
      },
    },
  });
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <title>My Telegram </title>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
