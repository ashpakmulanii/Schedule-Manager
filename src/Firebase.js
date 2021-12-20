import firebase from 'firebase/compat';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAoZutnprVZ7Jzhl1z09K-H2-jKmiwO0hQ",
    authDomain: "schedule-manager-63a05.firebaseapp.com",
    projectId: "schedule-manager-63a05",
    storageBucket: "schedule-manager-63a05.appspot.com",
    messagingSenderId: "873121919416",
    appId: "1:873121919416:web:e13e45b076b784aa7c9f4d",
    measurementId: "G-H6WP638PP2"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
