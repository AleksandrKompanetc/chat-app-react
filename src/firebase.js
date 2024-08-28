import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCshAPHRKOY3LQzJsdHnm6tX9OS2iw-ECo",
  authDomain: "unichat-42062.firebaseapp.com",
  projectId: "unichat-42062",
  storageBucket: "unichat-42062.appspot.com",
  messagingSenderId: "513935014590",
  appId: "1:513935014590:web:92faa39d6a55d003aabcef"
}).auth();