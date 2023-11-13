import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQ6iPPD_Rc1X8HNpqZUREW0yC6OHYdNxM",
  authDomain: "non-governmental-organiz-a87b3.firebaseapp.com",
  projectId: "non-governmental-organiz-a87b3",
  storageBucket: "non-governmental-organiz-a87b3.appspot.com",
  messagingSenderId: "686503824443",
  appId: "1:686503824443:web:8c4a432d8645b42a5e201e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const firestore = getFirestore(app)