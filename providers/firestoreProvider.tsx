import { createContext, useContext, useEffect, useState } from "react";
import firestore, {
  addFavouritesLyricCardItem,
  addHistoryLyricCardItem,
  deleteFavouritesLyricCardItem,
  deleteHistoryLyricCardItem,
  getFavouritesLyricCardItems,
  getHistoryLyricCardItems,
} from "../services/firestoreService";
import { useAuthContext } from "./authProvider";
import { onSnapshot, doc } from "@firebase/firestore";
import { LyricCardItem } from "../models/lyricCardItem";
import { HistoryLyricCardItem } from "../models/historyLyricCardItem";

const firestoreContext = createContext(null);

export default function FirestoreContextProvider({ children }) {
  const authContext = useAuthContext();
  const [favouritesLyricCardItems, setFavouritesLyricCardItems] = useState([]);
  const [historyLyricCardItems, setHistoryLyricCardItems] = useState([]);

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

  const addHistory = (historyLyricCardItem: HistoryLyricCardItem) => {
    setHistoryLyricCardItems([
      historyLyricCardItem,
      ...historyLyricCardItems.filter(function (v, i, a) {
        return v.id != historyLyricCardItem.id;
      }),
    ]);
    addHistoryLyricCardItem(authContext.UID, historyLyricCardItem);
  };

  const deleteHistory = (id: string) => {
    setHistoryLyricCardItems(
      historyLyricCardItems.filter(function (v, i, a) {
        return v.id != id;
      })
    );
    deleteHistoryLyricCardItem(authContext.UID, id);
  };

  useEffect(() => {
    getFavouritesLyricCardItems(authContext.UID).then((data) => {
      setFavouritesLyricCardItems(data);
    });

    getHistoryLyricCardItems(authContext.UID).then((data) => {
      data.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them.
        // to get a value that is either negative, positive, or zero.
        return a.timestamp - b.timestamp;
      });
      setHistoryLyricCardItems(data);
    });

    if (authContext.UID) {
      const unsubscribe = onSnapshot(
        doc(firestore, "users", `${authContext.UID}`),
        (snapshot) => {
          if (snapshot.exists) {
            getFavouritesLyricCardItems(authContext.UID).then((data) =>
              setFavouritesLyricCardItems(data)
            );

            getHistoryLyricCardItems(authContext.UID).then((data) => {
              data.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return a.timestamp - b.timestamp;
              });
              setHistoryLyricCardItems(data);
            });
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
      value={{
        favouritesLyricCardItems,
        addFavourite,
        deleteFavourite,
        historyLyricCardItems,
        addHistory,
        deleteHistory,
      }}
    >
      {children}
    </firestoreContext.Provider>
  );
}

interface FirestoreContext {
  favouritesLyricCardItems: LyricCardItem[];
  addFavourite: (favouritesLyricCardItem: LyricCardItem) => void;
  deleteFavourite: (id: string) => void;
  historyLyricCardItems: HistoryLyricCardItem[];
  addHistory: (historyLyricCardItem: HistoryLyricCardItem) => void;
  deleteHistory: (id: string) => void;
}

const useFirestoreContext = () => {
  return useContext(firestoreContext);
};

export { useFirestoreContext };
export type { FirestoreContext };
