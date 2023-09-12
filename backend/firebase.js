const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');

const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');// TODO: Add SDKs for Firebase products that you want to use


const serviceAccount = require("./test-74299-firebase-adminsdk-lk28x-9c5a582f24.json");
// Initialize Firebase
const app = initializeApp({credential:cert(serviceAccount)});
const db = getFirestore()

module.exports = { db };