import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0U8c95QUxsWB4oGgm0U6mK2mJSh2UYJ0",
    authDomain: "linkedin-clone-5c6f7.firebaseapp.com",
    projectId: "linkedin-clone-5c6f7",
    storageBucket: "linkedin-clone-5c6f7.appspot.com",
    messagingSenderId: "429037358384",
    appId: "1:429037358384:web:304ede5c82a3efc4368cf5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
