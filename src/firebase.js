// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCshAPHRKOY3LQzJsdHnm6tX9OS2iw-ECo",
  authDomain: "unichat-42062.firebaseapp.com",
  projectId: "unichat-42062",
  storageBucket: "unichat-42062.appspot.com",
  messagingSenderId: "513935014590",
  appId: "1:513935014590:web:92faa39d6a55d003aabcef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);