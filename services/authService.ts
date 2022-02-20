import app from "../secrets/firebase_config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

const logIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password.trim()
    );
    console.log(result.user);
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
    console.log(result.user);
    return result.user;
  } catch (e) {
    console.log("error: ", e);
    return null;
  }
};

const logOut = () => {
  try {
    signOut(auth);
    console.log("user signed out");
  } catch (e) {
    console.log("error: ", e);
  }
};

const getDisplayName = () => {
  try {
    console.log("fetched display name");
    return auth.currentUser.displayName;
  } catch (e) {
    console.log("error: ", e);
    return '';
  }
}

const getUID = () => {
  try {
    console.log("fetched uid");
    return auth.currentUser.uid;
  } catch (e) {
    console.log("error: ", e);
    return '';
  }
}

export default auth;

export { logIn, createAccount, logOut, getDisplayName, getUID };
