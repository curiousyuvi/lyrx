import Head from "next/head";
import ReactTooltip from "react-tooltip";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import AuthModal from "../components/authModal";
import { createContext, useState } from "react";
import AuthContextProvider from "../providers/authProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AuthContextProvider>
        <Header />
        <SkeletonTheme
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
          borderRadius="0.5rem"
        >
          <AuthModal />
          <Component {...pageProps} />
        </SkeletonTheme>
        <ReactTooltip type="light" effect="solid" />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
