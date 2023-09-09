// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Nc5395qAZVTnsbYOguZYeHHIcaOoQKs",
  authDomain: "xara-app.firebaseapp.com",
  projectId: "xara-app",
  storageBucket: "xara-app.appspot.com",
  messagingSenderId: "326356661335",
  appId: "1:326356661335:web:53654c1930a7a066dd5f12",
  measurementId: "G-5QL2REP8CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)