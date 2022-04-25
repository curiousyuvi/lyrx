import { GetStaticProps } from "next";
import Head from "next/head";
import Emoji from "../components/Emoji";
import Greeting from "../components/Greeting";
import LyricCards from "../components/LyricCards";
import { AuthContext, useAuthContext } from "../providers/authProvider";
import {
  FirestoreContext,
  useFirestoreContext,
} from "../providers/firestoreProvider";
import { ThemeContext, useThemeContext } from "../providers/themeProvider";

export default function History() {
  const themeContext: ThemeContext = useThemeContext();
  const firestoreContext: FirestoreContext = useFirestoreContext();
  const authContext: AuthContext = useAuthContext();
  const handleLogin = () => {
    authContext.setAuthModalOpen(true);
  };
  if (authContext.user === null) {
    return (
      <div
        className={"min-h-screen w-full flex items-center justify-center".concat(
          themeContext.isLightTheme
            ? " bg-gray-100 text-gray-500"
            : " bg-gray-800 text-gray-200"
        )}
      >
        <h1 className="font-medium">
          <Emoji symbol="0x1F972" /> Please{" "}
          <button
            className="font-bold text-indigo-500 underline"
            onClick={handleLogin}
          >
            Log in
          </button>{" "}
          first, to view <Emoji symbol="0x1F550" /> History
        </h1>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>History | Lyrx</title>
      </Head>
      <div
        className={"min-h-screen w-full".concat(
          themeContext.isLightTheme ? " bg-gray-100 " : " bg-gray-800"
        )}
      >
        <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-32 flex flex-col">
          <div className="flex items-center my-4 mt-6">
            <h1
              className={"text-2xl sm:text-3xl font-medium mr-4".concat(
                themeContext.isLightTheme ? " text-gray-500" : " text-gray-100"
              )}
            >
              History <Emoji symbol="0x23F3" />
            </h1>
          </div>
          <hr />
          <LyricCards
            lyricCardItems={firestoreContext.historyLyricCardItems}
            history
          />
        </div>
      </div>
    </>
  );
}
