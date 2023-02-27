// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpTes0DiwEIcGR6DiOKs8Y86bT2R2Y76U",
  authDomain: "chatt-app-aab49.firebaseapp.com",
  projectId: "chatt-app-aab49",
  storageBucket: "chatt-app-aab49.appspot.com",
  messagingSenderId: "931890330521",
  appId: "1:931890330521:web:ef3c6315f36e885409b108",
  measurementId: "G-7CQPTH5LVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);