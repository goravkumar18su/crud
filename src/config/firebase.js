import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCdUmmjYLmd7dRIoyRK1siGD-X3Iub1hZs",
  authDomain: "crud-5227f.firebaseapp.com",
  projectId: "crud-5227f",
  storageBucket: "crud-5227f.firebasestorage.app",
  messagingSenderId: "1058546963504",
  appId: "1:1058546963504:web:f9bf681952f0c1c4d509f5",
  measurementId: "G-7F66MX3J84"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);