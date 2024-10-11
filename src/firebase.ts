import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDcV-zrJJr65QBSysPNi838lVZi5QpoOwA",

  authDomain: "authdemo-7a556.firebaseapp.com",

  projectId: "authdemo-7a556",

  storageBucket: "authdemo-7a556.appspot.com",

  messagingSenderId: "692454664049",

  appId: "1:692454664049:web:de7f64b54d11a9c6dcb8d0",

  measurementId: "G-DVYCNQXLLB"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);