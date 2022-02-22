import { createContext, useContext, useEffect, useState } from "react";
import firestore, {
  addFavouritesLyricCardItem,
  deleteFavouritesLyricCardItem,
  getFavouritesLyricCardItems,
} from "../services/firestoreService";
import { LyricCardItem } from "../services/get_popular_lyric_card_items";
import { useAuthContext } from "./authProvider";
import { onSnapshot, doc } from "@firebase/firestore";

const firestoreContext = createContext(null);

export default function FirestoreContextProvider({ children }) {
  const authContext = useAuthContext();
  const [favouritesLyricCardItems, setFavouritesLyricCardItems] = useState([]);

  const addFavourite = (favouritesLyricCardItem: LyricCardItem) => {
    setFavouritesLyricCardItems([
      ...favouritesLyricCardItems,
      favouritesLyricCardItem,
    ]);
    addFavouritesLyricCardItem(authContext.UID, favouritesLyricCardItem);
  };

  const deleteFavourite = (id: string) => {
    setFavouritesLyricCardItems(
      favouritesLyricCardItems.filter(function (v, i, a) {
        return v.id != id;
      })
    );
    deleteFavouritesLyricCardItem(authContext.UID, id);
  };

  useEffect(() => {
    getFavouritesLyricCardItems(authContext.UID).then((data) => {
      console.log("data: ", data);
      setFavouritesLyricCardItems(data);
    });

    if (authContext.UID) {
      const unsubscribe = onSnapshot(
        doc(firestore, "users", `${authContext.UID}`),
        (snapshot) => {
          console.log("firestore listener called");
          if (snapshot.exists) {
            getFavouritesLyricCardItems(authContext.UID).then((data) =>
              setFavouritesLyricCardItems(data)
            );
          }
        }
      );

      return () => {
        unsubscribe();
      };
    }
  }, [authContext.UID]);
  return (
    <firestoreContext.Provider
      value={{ favouritesLyricCardItems, addFavourite, deleteFavourite }}
    >
      {children}
    </firestoreContext.Provider>
  );
}

interface FirestoreContext {
  favouritesLyricCardItems: LyricCardItem[];
  addFavourite: (favouritesLyricCardItem: LyricCardItem) => void;
  deleteFavourite: (id: string) => void;
}

const useFirestoreContext = () => {
  return useContext(firestoreContext);
};

export { useFirestoreContext };
export type { FirestoreContext };
