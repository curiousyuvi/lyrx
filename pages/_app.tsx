import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mic from "../components/Mic";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Header /> <Component {...pageProps} />
      <Mic />
      <Footer />
    </>
  );
}

export default MyApp;
