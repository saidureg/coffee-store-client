// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpLqobDJZXS8aq3Co-KE2wrdtRlu3EYuY",
  authDomain: "coffee-house-3359b.firebaseapp.com",
  projectId: "coffee-house-3359b",
  storageBucket: "coffee-house-3359b.appspot.com",
  messagingSenderId: "1099028676588",
  appId: "1:1099028676588:web:c7960629d39a45156c8ac9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
