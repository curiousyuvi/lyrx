import { initializeApp } from "firebase/app";

console.log(process.env);
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "lyrx-3266a.firebaseapp.com",
  projectId: "lyrx-3266a",
  storageBucket: "lyrx-3266a.appspot.com",
  messagingSenderId: "575151223560",
  appId: "1:575151223560:web:767592e57b01b30bc7f2bd",
};

const app = initializeApp(firebaseConfig);

export default app;
