import app from "../secrets/firebase_config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
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
  } catch (e) {
    console.log("error: ", e);
  }
};

const signUp = async (email: string, password: string, name: string) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password.trim()
    );
    updateProfile(result.user, { displayName: name.trim() });
    console.log(result.user);
  } catch (e) {
    console.log("error: ", e);
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

export default auth;

export { logIn, signUp, logOut };
