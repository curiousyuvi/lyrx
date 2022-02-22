import app from "../secrets/firebase_config";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from '@firebase/firestore';
import favourites from "../pages/favourites";
import { LyricCardItem } from "./get_popular_lyric_card_items";

const firestore = getFirestore(app);


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

export { getFavouritesLyricCardItems, addFavouritesLyricCardItem, deleteFavouritesLyricCardItem }
export default firestore
