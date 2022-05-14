import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCriXpgyakA4dXqw4kjoQq7wgylL9MteyQ",
  authDomain: "saylani-mass-training-st-d8f97.firebaseapp.com",
  projectId: "saylani-mass-training-st-d8f97",
  storageBucket: "saylani-mass-training-st-d8f97.appspot.com",
  messagingSenderId: "649815381479",
  appId: "1:649815381479:web:383974d7efd11d94989942",
  measurementId: "G-63EBVS2TJY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const stateChange = onAuthStateChanged;
const storage = getStorage(app);

export { firebaseConfig, auth,storage, db, stateChange };