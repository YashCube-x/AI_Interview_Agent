// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-c1bca.firebaseapp.com",
  projectId: "ai-interview-c1bca",
  storageBucket: "ai-interview-c1bca.firebasestorage.app",
  messagingSenderId: "126704030449",
  appId: "1:126704030449:web:a66cadd86d73092a9e8f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { app, auth, provider };