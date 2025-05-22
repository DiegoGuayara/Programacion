// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Ab2kEZ7pxO7Kzpdv9U1JNkZrya64J5g",
  authDomain: "craftyourstyle-diego.firebaseapp.com",
  projectId: "craftyourstyle-diego",
  storageBucket: "craftyourstyle-diego.firebasestorage.app",
  messagingSenderId: "344440003715",
  appId: "1:344440003715:web:cfb5063f50c333361d8fb6",
  measurementId: "G-7XDWBFPWMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider };