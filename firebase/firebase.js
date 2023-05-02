// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBesAg4Wrqpio41SsmyLhZMyltMZvR40lg",
  authDomain: "cat-tinder-ebdb0.firebaseapp.com",
  projectId: "cat-tinder-ebdb0",
  storageBucket: "cat-tinder-ebdb0.appspot.com",
  messagingSenderId: "498637443779",
  appId: "1:498637443779:web:579c34e4a68b29245d0876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;