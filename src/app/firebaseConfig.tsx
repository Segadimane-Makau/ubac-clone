// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkLXzytElcmvgpZ2K8QivNCGkOlMiFRx0",
  authDomain: "ubac-18e0d.firebaseapp.com",
  projectId: "ubac-18e0d",
  storageBucket: "ubac-18e0d.appspot.com",
  messagingSenderId: "408414484222",
  appId: "1:408414484222:web:75d66d47b8ee14be5997af",
  measurementId: "G-434SR8ES62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};