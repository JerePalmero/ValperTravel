import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBVmrZmZ9BKjZQQymjrjNwurrst3F6u98E",
  authDomain: "valper-travel.firebaseapp.com",
  projectId: "valper-travel",
  storageBucket: "valper-travel.appspot.com",
  messagingSenderId: "90663698079",
  appId: "1:90663698079:web:40d219449d3d4c4985acaa",
  measurementId: "G-XJKPXN0QYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)