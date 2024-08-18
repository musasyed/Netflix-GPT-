// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU7umMjZOxxzas1o9uGvfn9K9Rn--PRlg",
  authDomain: "netflix-gpt-db500.firebaseapp.com",
  projectId: "netflix-gpt-db500",
  storageBucket: "netflix-gpt-db500.appspot.com",
  messagingSenderId: "725937462468",
  appId: "1:725937462468:web:642a786d0226def1f1bd91",
  measurementId: "G-HC82HN5YJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();