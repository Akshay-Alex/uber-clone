// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqrecsSzjRyKDpehRU2SVeFVPqFzqGycE",
  authDomain: "uber-clone-d36f8.firebaseapp.com",
  projectId: "uber-clone-d36f8",
  storageBucket: "uber-clone-d36f8.appspot.com",
  messagingSenderId: "752340260613",
  appId: "1:752340260613:web:aed93d3392f555fdffc96c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()
export {app, provider, auth}