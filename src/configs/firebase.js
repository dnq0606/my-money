import { initializeApp } from "firebase/app";
import { getFirestore, getAuth } from "firebase/firestore/lite";
import { serverTimestamp } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvCk0Xyz6b3eEsfKaDjjhzjYhO7GMnZAw",
  authDomain: "imoney-29f3c.firebaseapp.com",
  projectId: "imoney-29f3c",
  storageBucket: "imoney-29f3c.appspot.com",
  messagingSenderId: "1074240683",
  appId: "1:1074240683:web:5b5d701780f89f9d186bee",
  measurementId: "G-PBD93SQXLF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = serverTimestamp();

export { db, auth, timestamp };
