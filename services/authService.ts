import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase_config";

const auth = getAuth(app);

const logIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password.trim()
    );
    return result.user;
  } catch (e) {
    console.log("error: ", e);
    return null;
  }
};

const createAccount = async (email: string, password: string, name: string) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password.trim()
    );
    updateProfile(result.user, { displayName: name.trim() });
    return result.user;
  } catch (e) {
    console.log("error: ", e);
    return null;
  }
};

const logOut = () => {
  try {
    signOut(auth);
  } catch (e) {
    console.log("error: ", e);
  }
};

const getDisplayName = () => {
  try {
    return auth.currentUser.displayName;
  } catch (e) {
    console.log("error: ", e);
    return '';
  }
}

const getUID = () => {
  try {
    return auth.currentUser.uid;
  } catch (e) {
    console.log("error: ", e);
    return '';
  }
}

const authWithGoogle = () => {
  try {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  } catch (e) { console.error("error: ", e); }
}

export default auth;

export { logIn, createAccount, logOut, getDisplayName, getUID, authWithGoogle };
