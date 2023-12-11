// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiqnp-GuYA1kpSS-YVlAx5OYQyA0jOLZA",
  authDomain: "suples-stores.firebaseapp.com",
  projectId: "suples-stores",
  storageBucket: "suples-stores.appspot.com",
  messagingSenderId: "572138150810",
  appId: "1:572138150810:web:0d562abe17ac199e337823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);