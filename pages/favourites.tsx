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

export default function Favourites() {
  const firestoreContext: FirestoreContext = useFirestoreContext();
  const authContext: AuthContext = useAuthContext();
  const handleLogin = () => {
    authContext.setAuthModalOpen(true);
  };
  if (authContext.user === null) {
    return (
      <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
        <h1 className="font-medium">
          <Emoji symbol="0x1F972" /> Please{" "}
          <button
            className="font-bold text-indigo-500 underline"
            onClick={handleLogin}
          >
            Log in
          </button>{" "}
          first, to view <Emoji symbol="0x2764" /> Favourites
        </h1>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Favourites | Lyrx</title>
      </Head>
      <div className="bg-gray-100 min-h-screen w-full">
        <div className="min-h-screen max-w-[1280px] mx-auto m-0 p-4 pt-32 flex flex-col">
          <div className="flex items-center my-4 mt-6">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-500 mr-4">
              Favourites <Emoji symbol="0x1F60D" />
            </h1>
          </div>
          <hr />
          <LyricCards
            lyricCardItems={firestoreContext.favouritesLyricCardItems}
          />
        </div>
      </div>
    </>
  );
}
