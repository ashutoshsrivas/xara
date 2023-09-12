const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');

const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');// TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: "AIzaSyA8Nc5395qAZVTnsbYOguZYeHHIcaOoQKs",
//   authDomain: "xara-app.firebaseapp.com",
//   projectId: "xara-app",
//   storageBucket: "xara-app.appspot.com",
//   messagingSenderId: "326356661335",
//   appId: "1:326356661335:web:53654c1930a7a066dd5f12",
//   measurementId: "G-5QL2REP8CX"
// };

const serviceAccount = require("./xara-app-firebase-adminsdk-4ch9y-42c50057ce.json");
// Initialize Firebase
const app = initializeApp({credential:cert(serviceAccount)});
const db = getFirestore()

module.exports = { db };