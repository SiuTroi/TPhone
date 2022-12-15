// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnqlgtKywXyltKj9fZmxV6UVnjGC5BHw",
  authDomain: "siutroi-tphone.vercel.app",
  projectId: "tphone-9a576",
  storageBucket: "tphone-9a576.appspot.com",
  messagingSenderId: "812100431235",
  appId: "1:812100431235:web:3108e46d45da1017c39ab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()