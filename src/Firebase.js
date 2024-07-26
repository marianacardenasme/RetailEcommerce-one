// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8kgZqhYIhr6vH9P-zhH8VAKlj7D7Zcrk",
  authDomain: "test-website-15c65.firebaseapp.com",
  projectId: "test-website-15c65",
  storageBucket: "test-website-15c65.appspot.com",
  messagingSenderId: "680938076435",
  appId: "1:680938076435:web:8de6c9e08fc10e916582e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;