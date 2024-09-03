import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALML3xqc-3QYV9QnWW4BXtmuBYQiU8MHw",
  authDomain: "shopping-wings.firebaseapp.com",
  projectId: "shopping-wings",
  storageBucket: "shopping-wings.appspot.com",
  messagingSenderId: "78403589066",
  appId: "1:78403589066:web:c89d53a402d6e10c477533",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(auth);
export const githubProvider = new GithubAuthProvider(auth);
