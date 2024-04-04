
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDc4-HpZPZZmIvOVV-4YxVNTctzKD3NJ3o",
  authDomain: "eccomerce-react-f347a.firebaseapp.com",
  projectId: "eccomerce-react-f347a",
  storageBucket: "eccomerce-react-f347a.appspot.com",
  messagingSenderId: "557341276934",
  appId: "1:557341276934:web:8af088e232516fa506bc87"
};

const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)