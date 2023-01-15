import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnkVFd9afScfCNseNKJL9QzPuf7Kl2bRM",
    authDomain: "buggyboutique-81c8a.firebaseapp.com",
    projectId: "buggyboutique-81c8a",
    storageBucket: "buggyboutique-81c8a.appspot.com",
    messagingSenderId: "311419951195",
    appId: "1:311419951195:web:7c3d0acbf996476605077e",
    measurementId: "G-V4KQPGWVE9"
  };

// create objects for app, database, authentication
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth};
