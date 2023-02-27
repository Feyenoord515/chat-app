import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpTes0DiwEIcGR6DiOKs8Y86bT2R2Y76U",
  authDomain: "chatt-app-aab49.firebaseapp.com",
  projectId: "chatt-app-aab49",
  storageBucket: "chatt-app-aab49.appspot.com",
  messagingSenderId: "931890330521",
  appId: "1:931890330521:web:ef3c6315f36e885409b108",
  measurementId: "G-7CQPTH5LVM"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseFirestore = getFirestore(app);
const firebaseAuth = getAuth();


export { app, firebaseFirestore, firebaseAuth, analytics };