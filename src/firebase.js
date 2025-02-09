// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBfiBzptiLTcXzX57ycs7rzGkIbPy_NXes",
  authDomain: "my-db-1e2fd.firebaseapp.com",
  projectId: "my-db-1e2fd",
  storageBucket: "my-db-1e2fd.firebasestorage.app",
  messagingSenderId: "203011902002",
  appId: "1:203011902002:web:e05825fa9a055e32b84a2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
