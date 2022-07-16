import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDOwvOd2jJfZYyVbPbWWW0hDPIMeyq64PY",
  authDomain: "dynamic-pageant.firebaseapp.com",
  projectId: "dynamic-pageant",
  storageBucket: "dynamic-pageant.appspot.com",
  messagingSenderId: "982110474788",
  appId: "1:982110474788:web:69def3555bb979d7403eb1",
  measurementId: "G-HXJ09S3VSE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const colRef = collection(db, "contestants");

export { analytics, db, auth, addDoc, colRef };
