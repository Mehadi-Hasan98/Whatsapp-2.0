import firebase from "firebase";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPCd5bn_0Eybllw-53c0tLZyYIDu5lkCo",
  authDomain: "whatsapp-2-f6a0e.firebaseapp.com",
  projectId: "whatsapp-2-f6a0e",
  storageBucket: "whatsapp-2-f6a0e.appspot.com",
  messagingSenderId: "76529103641",
  appId: "1:76529103641:web:65bf143d74220214efcb88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.googleAuthProvider();

export { db, auth, provider };
