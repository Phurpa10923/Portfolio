// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc1mifuSY0Wu1pKN1I-v1q2ZK4Pt0dFQk",
  authDomain: "portfolio-website-285a9.firebaseapp.com",
  projectId: "portfolio-website-285a9",
  storageBucket: "portfolio-website-285a9.appspot.com",
  messagingSenderId: "706744132737",
  appId: "1:706744132737:web:5421750b97204fcf99d980",
  measurementId: "G-3YZQ9Y6BBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);