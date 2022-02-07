import Head from "next/head";
import ReactTooltip from "react-tooltip";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mic from "../components/Mic";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Header />
      <SkeletonTheme
        baseColor="#e5e7eb"
        highlightColor="#f3f4f6"
        borderRadius="0.5rem"
      >
        <Component {...pageProps} />
      </SkeletonTheme>
      <ReactTooltip type="light" effect="solid" />
      <Mic />
      <Footer />
    </>
  );
}

export default MyApp;
