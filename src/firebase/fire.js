import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {


};




initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(); 