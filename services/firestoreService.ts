import app from "../secrets/firebase_config";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from '@firebase/firestore';
import favourites from "../pages/favourites";
import { LyricCardItem } from "../models/lyricCardItem";
import { HistoryLyricCardItem } from "../models/historyLyricCardItem";

const firestore = getFirestore(app);

//-----------------------------------------------FAVOURITES----------------------------------------------------------------------------------

const getFavouritesLyricCardItems = async (UID: string) => {
    let favouritesLyricCardItems: LyricCardItem[] = [];
    try {
        const favouritesCollectionRef = collection(firestore, 'users', `${UID}`, 'favourites');
        const data = await getDocs(favouritesCollectionRef);
        data.docs.forEach((e) => { console.log(e); });
        favouritesLyricCardItems = data.docs.map((e) => { return { id: e.data().id, title: e.data().title, artist: e.data().artist } });
    } catch (e) { console.error('error: ', e); } finally { return favouritesLyricCardItems }

}

const addFavouritesLyricCardItem = async (UID: string, favouritesLyricCardItem: LyricCardItem) => {
    try {
        const newFavouritesDocRef = doc(firestore, 'users', `${UID}`, 'favourites', `${favouritesLyricCardItem.id}`);

        await setDoc(newFavouritesDocRef, favouritesLyricCardItem);
    } catch (e) {
        console.error('error: ', e);
    }
}

const deleteFavouritesLyricCardItem = async (UID: string, id: string) => {
    try {
        const favouritesDocRef = doc(firestore, 'users', `${UID}`, 'favourites', `${id}`);

        await deleteDoc(favouritesDocRef);
    } catch (e) {
        console.error('error: ', e);
    }
}

//--------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------HISTORY---------------------------------------------------------

const getHistoryLyricCardItems = async (UID: string) => {
    let historyLyricCardItems: HistoryLyricCardItem[] = [];
    try {
        const historyCollectionRef = collection(firestore, 'users', `${UID}`, 'history');
        const data = await getDocs(historyCollectionRef);
        data.docs.forEach((e) => { console.log(e); });
        historyLyricCardItems = data.docs.map((e) => { return { id: e.data().id, title: e.data().title, artist: e.data().artist, timestamp: e.data().timestamp } });
    } catch (e) { console.error('error: ', e); } finally { return historyLyricCardItems }

}

const addHistoryLyricCardItem = async (UID: string, historyLyricCardItem: HistoryLyricCardItem) => {
    try {
        const newHistoryDocRef = doc(firestore, 'users', `${UID}`, 'history', `${historyLyricCardItem.id}`);

        await setDoc(newHistoryDocRef, historyLyricCardItem);
    } catch (e) {
        console.error('error: ', e);
    }
}

const deleteHistoryLyricCardItem = async (UID: string, id: string) => {
    try {
        const historyDocRef = doc(firestore, 'users', `${UID}`, 'history', `${id}`);

        await deleteDoc(historyDocRef);
    } catch (e) {
        console.error('error: ', e);
    }
}


export { getFavouritesLyricCardItems, addFavouritesLyricCardItem, deleteFavouritesLyricCardItem, getHistoryLyricCardItems, addHistoryLyricCardItem, deleteHistoryLyricCardItem }
export default firestore
