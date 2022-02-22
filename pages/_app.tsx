import Head from "next/head";
import ReactTooltip from "react-tooltip";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import AuthModal from "../components/authModal";
import { createContext, useState } from "react";
import AuthContextProvider, {
  AuthContext,
  useAuthContext,
} from "../providers/authProvider";
import FirestoreContextProvider from "../providers/firestoreProvider";

function MyApp({ Component, pageProps }) {
  const authContext: AuthContext = useAuthContext();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AuthContextProvider>
        <FirestoreContextProvider>
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
        </FirestoreContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
